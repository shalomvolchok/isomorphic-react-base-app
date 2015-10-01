var scripts = '{source,tests}/**/*.{js,coffee}';
var templates = 'source/templates/**/*.{hbs,handlebars,hjs,emblem}';
var styles = 'source/styles/**/*.{css,sass,scss,less,styl}';
var other = '{source,tests}/**/*';

module.exports = {
  scripts: {
    files: [scripts],
    tasks: ['build:debug','copy:vendor','copy:pages']
  },
/*
  templates: {
    files: [templates],
    tasks: ['buildTemplates:debug']
  },
  styles: {
    files: [styles],
    tasks: ['buildStyles']
  },
*/
  other: {
    files: [other, '!'+scripts, '!'+templates, '!'+styles],
    tasks: ['build:debug','copy:vendor','copy:pages']
  },

  options: {
    debounceDelay: 200,
    livereload: true
  }
};
