'use strict';


module.exports = function(app) {
  var authCtrl = require('../../app/controllers/auth.server.controller'),
      randomCtrl = require('../../app/controllers/randomizer.server.controller');

  app.route('/randomize').get(authCtrl.authenticate, randomCtrl.getRandomTopic);
  app.route('/topiclist').get(authCtrl.authenticate, randomCtrl.getTopicList);
  app.route('/ignorelist').get(authCtrl.authenticate, randomCtrl.getIgnoreList);


  // Finish with setting up the companyId param
  //app.param('Id', apiCtrl.func);

};
