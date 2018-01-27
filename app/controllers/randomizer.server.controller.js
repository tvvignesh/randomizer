'use strict';

/**
 * Module dependencies.
 */
var config = require('../../config/config');
var request = require('request');

var topicList = [
  'NodeJs',
  'MongoDB',
  'Javascript',
  'HTML',
  'CSS',
  'Material Design',
  'Raspberry PI',
  'Microservices',
  'Product Management',
  'Web Components',
  'JSON, XML & YAML',
  'Chrome Extensions',
  'Hybrid App Development',
  'Search Engine Optimization (SEO)',
  'GIT',
  'Linux',
  'Cyber Security',
  'Selenium & Puppeteer',
  'Bootstrap',
  'Http/2',
  'DOTA 2',
  'Public Speaking',
  'Live Streaming',
  'Jasper Reports',
  'Developer Workflows & Tools',
  'Chat Bots',
  'Chrome Devtools',
  'JQuery'
];

var ignoreList = ['MySQL', 'C++', 'PHP', 'Jenkins', 'Apache Geode', 'Docker', 'Kubernetes', 'Machine Learning & AI', 'GraphQL', 'Augmented & Virtual Reality', 'Electron', 'WebRTC', 'Websockets', 'Kafka'];

exports.getRandomTopic = function(req, res, next){
  var topicIndex = Math.floor((Math.random() * topicList.length));
  res.status(200).jsonp({topic:topicList[topicIndex]});
  topicList.splice(topicIndex, 1);
};

exports.getIgnoreList = function (req, res, next) {
  res.status(200).jsonp({ ignoreList: ignoreList });
};

exports.getTopicList = function (req, res, next) {
  res.status(200).jsonp({ topicList: topicList });
};