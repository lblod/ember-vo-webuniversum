import Controller from '@ember/controller';

export default Controller.extend({
  showModal: false,
  showSimpleModal: false,
  contactInfo: { // eslint-disable-line ember/avoid-leaking-state-in-ember-objects
    adres: 'Nieuwstraat 45',
    postcode: 4000,
    gemeente: "Brussel",
    land: "Belgie",
    telephone: "+32031234567",
    fax: "+32037654321",
    email: "info@vlaanderen.be",
    website: "http://vlaanderen.be"
  },
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
