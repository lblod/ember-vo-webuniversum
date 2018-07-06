/* eslint-env node */
const EmberRouterGenerator = require('ember-router-generator');
const path = require('path');
const fs = require('fs-extra');

module.exports = {
  description: '',
  normalizeEntityName: function() {},
  async afterInstall(options) {
    const source = path.join(options.project.root, 'app', 'router.js');
    const routes = new EmberRouterGenerator(fs.readFileSync(source));
    var newRoutes = routes.add('route-not-found', {path: '/*wildcard'});
    fs.writeFileSync(source, newRoutes.code());
    this.addPackageToProject('postscribe', '^2.0.8');
    //This will follow major versions until 4
    return this.addAddonToProject('ember-cli-moment-shim', '~3.7.1');
  }
};
