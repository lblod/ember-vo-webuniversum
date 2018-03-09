import Controller from '@ember/controller';

export default Controller.extend({
  showModal: false,
  showSimpleModal: false,
  actions: {
    dummyClick() {
      window.alert('Click');
    },
    showDialog() {
      this.set('showModal', true);
    },
    showSimpleDialog() {
      this.set('showSimpleModal', true);
    },

    dismissModal() {
      this.set('showModal', false);
      this.set('showSimpleModal', false);
    },
    doSomethingFromModal() {
      this.set('showModal', false);
      window.alert('action called');
    }
  }
});
