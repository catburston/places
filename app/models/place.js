import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  city: attr(),
  country: attr(),
  image: attr(),
  coordslat: attr(),
  coordslong: attr(),
  owmid: attr(),

  weatherApi: function() {
    var owmlink = 'http://api.openweathermap.org/data/2.5/weather?lat=' + this.get('coordslat') + '&lon=' + this.get('coordslong') + '&appid=a5b0ff4a4b25591018779fd2112e44df';
    return owmlink;

  }.property('coordslat', 'coordslong')


});

