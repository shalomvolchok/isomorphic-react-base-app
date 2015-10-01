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
var debug = require('debug')('Example');
var React = require('react');
var app = require('./app');
var HtmlComponent = React.createFactory(require('./Html.js'));
var Router = require('react-router');
var FluxibleComponent = require('fluxible-addons-react/FluxibleComponent');

// Needed to parse posts
var bodyParser = require('body-parser');

/// both needed for csrf protection
var cookieParser = require('cookie-parser');
var csrf = require('csurf');

var server = express();
server.set('state namespace', 'App');

server.use(favicon(__dirname + '/favicon.ico'));

/* __PROD__ */
server.use('/public', express.static(__dirname + '/public'));
/* __END_PROD__ */

// On development, serve the static files from the webpack dev server.
require("./webpack/hotServer");

server.use(cookieParser());
server.use(bodyParser.json());
server.use(csrf({cookie: true}));

var fetchrPlugin = app.getPlugin('FetchrPlugin');
fetchrPlugin.registerService(require('./app/services/exampleService'));
server.use(fetchrPlugin.getXhrPath(), fetchrPlugin.getMiddleware());

var require("./webpack/utils/webpack-stats.json");

/* __DEV__ */
delete require.cache[require.resolve("./webpack/utils/webpack-stats.json")];
/* __END_DEV__ */

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

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on port ' + port);
