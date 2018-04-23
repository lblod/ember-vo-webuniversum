/* eslint-env node */
module.exports = {
  description: '',
  async afterInstall(options) {
    //This will follow major versions until 4
    return this.addAddonToProject('ember-cli-moment-shim', '~3.7.1');
  }
};
