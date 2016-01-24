export default function() {
  this.get('/places', function() {
      return {
        data: [{
          type: 'places',
          id: 1,
          attributes: {
            city: 'Kano',
            country: 'Nigeria',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
            coordslat: '12.00012',
            coordslong: '8.51672',
            owmid: '2335204'
          }
        }, {
          type: 'places',
          id: 2,
          attributes: {
            city: 'Melbourne',
            country: 'Australia',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
            coordslat: "-37.813061",
            coordslong: '144.944214',
            owmid: '7839805'
          }
        }, {
          type: 'places',
          id: 3,
          attributes: {
            city: 'Reading',
            country: 'England',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
            coordslat: '51.450001',
            coordslong: '-0.96667',
            owmid: '3333184'
          }
        }, {
          type: 'places',
          id: 4,
          attributes: {
            city: 'Cologne',
            country: 'Germany',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
            coordslat: '50.933331',
            coordslong: '6.95',
            owmid: '2886242'
          }
        }, {
          type: 'places',
          id: 5,
          attributes: {
            city: 'Barcelona',
            country: 'Spain',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
            coordslat: '41.399422',
            coordslong: '2.12804',
            owmid: '6356055'
          }
        }, {
          type: 'places',
          id: 6,
          attributes: {
            city: 'Montpellier',
            country: 'France',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
            coordslat: '43.611301',
            coordslong: '3.8771',
            owmid: '6454034'
          }
        }]
      };
    });

// {"_id":2335204,"name":"Kano","country":"NG","coord":{"lon":8.51672,"lat":12.00012}}
// {"_id":7839805,"name":"Melbourne","country":"AU","coord":{"lon":144.944214,"lat":-37.813061}}
// {"_id":3333184,"name":"Borough of Reading","country":"GB","coord":{"lon":-0.96667,"lat":51.450001}}
// {"_id":2886242,"name":"Koeln","country":"DE","coord":{"lon":6.95,"lat":50.933331}}
// {"_id":6356055,"name":"Barcelona","country":"ES","coord":{"lon":2.12804,"lat":41.399422}}
// {"_id":6454034,"name":"Montpellier","country":"FR","coord":{"lon":3.8771,"lat":43.611301}}

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
