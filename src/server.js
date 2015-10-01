/**
* Copyright 2015, Digital Optimization Group, LLC.
* Copyrights licensed under the APACHE 2 License. See the accompanying LICENSE file for terms.
*/
'use strict';
require('babel/register');
var express = require('express');
var favicon = require('serve-favicon');
var serialize = require('serialize-javascript');
var navigateAction = require('./app/actions/navigate');
var React = require('react');
var app = require('./app');
var HtmlComponent = React.createFactory(require('./Html.js'));
var Router = require('react-router');
var FluxibleComponent = require('fluxible-addons-react/FluxibleComponent');

// Allows hashed names for .js and .css files
var webpackStats = require("./webpack-stats.json");

// Needed to parse posts
var bodyParser = require('body-parser');

/// both needed for csrf protection
var cookieParser = require('cookie-parser');
var csrf = require('csurf');

var server = express();
server.set('state namespace', 'App');

/* __DEV__ */
var webpack = require('webpack');
var config = require('./webpack/dev.config');
var compiler = webpack(config);
server.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
server.use(require('webpack-hot-middleware')(compiler));
/* __END_DEV__ */

server.use(favicon(__dirname + '/favicon.ico'));
server.use('/public', express.static(__dirname + '/public'));
server.use(cookieParser());
server.use(bodyParser.json());
server.use(csrf({cookie: true}));

var fetchrPlugin = app.getPlugin('FetchrPlugin');
fetchrPlugin.registerService(require('./app/services/exampleService'));
server.use(fetchrPlugin.getXhrPath(), fetchrPlugin.getMiddleware());

server.use(function (req, res, next) {

    var context = app.createContext({
        req: req,
        xhrContext: {
            _csrf: req.csrfToken()
        }
    });

    Router.run(app.getComponent(), req.path, function (Handler, state) {
        context.executeAction(navigateAction, state, function () {

            var exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';

            var Component = React.createFactory(Handler);
            
            var html = React.renderToStaticMarkup(HtmlComponent({
                state: exposed,
                script: webpackStats.script,
                css: webpackStats.css,
                markup: React.renderToString(
                    React.createElement(
                        FluxibleComponent,
                        { context: context.getComponentContext() },
                        Component()
                    )
                )
            }));

            res.send(html);
        });
    });
});

var port = process.env.PORT || 3005;
server.listen(port);
console.log('Listening on port ' + port);
