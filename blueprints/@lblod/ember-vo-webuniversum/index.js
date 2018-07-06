/* eslint-env node */
const EmberRouterGenerator = require('ember-router-generator');
const path = require('path');

module.exports = {
  description: '',
  async afterInstall(options) {
    const source = path.join(options.project.root, 'app', 'router.js');
    const routes = new EmberRouterGenerator(source);
    routes.add('route-not-found', {path: '/*wildcard'});
    this.addPackageToProjec('postscribe', '^2.0.8');
    //This will follow major versions until 4
    return this.addAddonToProject('ember-cli-moment-shim', '~3.7.1');
  }
};
