/* eslint-env node */
module.exports = {
  description: '',
  async afterInstall(options) {
    //This will follow major versions until 4
    this.addPackageToProjec('postscribe', '^2.0.8');
    return this.addAddonToProject('ember-cli-moment-shim', '~3.7.1');
  }
};
