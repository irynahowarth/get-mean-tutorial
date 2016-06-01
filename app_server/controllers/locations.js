/* GET 'home' page */
module.exports.homeList = function(req, res){
  res.render('locations-list', {
    title: 'Loc8r - find a friendly place with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work or study using wifi close to you!'
    },
    sidebar: 'Loc8r helps you find places with wifi when you out and about.',
    locations: [{
      name: 'Costa Coffee',
      address: '4 Fairfax Rd, Manchester M25 1AY',
      rating: 4,
      facilities: ['Hot drinks', 'Iced coolers', 'Snacks/sandwiches', 'Free Wifi'],
      distance: '160m'
    }, {
      name: 'Starbucks',
      address: '1-3 Piccadilly, Manchester M1 3AQ',
      rating: 3,
      facilities: ['Hot drinks','Snacks/sandwiches', 'Free Wifi'],
      distance: '275m'
    }, {
      name: 'Greggs Plc',
      address: '9-10 Fairfax Rd, Prestwich, Manchester M25 1AY',
      rating: 2,
      facilities: ['Hot drinks', 'Food', 'Premium Wifi'],
      distance: '450m'
    }]
  });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res){
  res.render('location-info', {
    title: 'Costa Coffee',
    pageHeader: {
      title: 'Costa Coffee'
    },
    sidebar: {
      context: 'is on Loc8r because it has free wifi and nice atmosphere to sit down and get cosy.',
      callToAction: 'If you\'ve been and you like it - or has negative experience - please leave a review to help other people just like you.'
    },
    location: {
      name: 'Costa Coffee',
      address: '4 Fairfax Rd, Manchester M25 1AY',
      rating: 4,
      facilities: ['Hot drinks', 'Iced coolers', 'Snacks/sandwiches', 'Free Wifi'],
      coords: {lat: 53.533387, lng: -2.284495},
      openingTimes: [{
        days: 'Monday - Friday',
        opening: '6:30am',
        closing: '7:00pm',
        closed: false
      }, {
        days: 'Saturday',
        opening: '7:30am',
        closing: '6:00pm',
        closed: false
      }, {
        days: 'Sunday',
        opening: '7:30am',
        closing: '5:00pm',
        closed: true
      }]
    },
    reviews: [{
      author: 'Iryna Howarth',
      rating: 5,
      timestamp: '26 May 2016',
      reviewText: 'Always good coffee and cosy atmosphere.'
    }, {
      author: 'Richard Peel',
      rating: 4,
      timestamp: '23 May 2016',
      reviewText: 'Good food, good drinks, but if it\'s too busy wifi is very slow.'
    }, {
      author: 'Joe Doe',
      rating: 4,
      timeStamp: '21 May 2016',
      reviewText: 'Sometimes too busy and have to wait to be served.'
    }]
  });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res){
  res.render('location-review-form', {
    title: 'Review Costa Coffee on Loc8r',
    pageHeader: {title: 'Review Costa Coffee'}
  });
};