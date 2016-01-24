import Ember from 'ember';

export default Ember.Component.extend({
  isMapShowing: false,
  actions: {
    mapShow() {
      this.set('isMapShowing', true);
    },
    mapHide() {
      this.set('isMapShowing', false);
    }
  }
});
