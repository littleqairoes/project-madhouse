exports.app = {
  version: '0.0.1',
  name: 'DAB Project',
  shortName: 'MADHOUSE',
  description: "Some Project Description",
  build: 'dev',
  ravenConfig: 'https://827acc4cd4d04b009157881a6939baac@sentry.io/123192',
  themeColor: '#FF422E',
  backgroundColor: '#FF422E'
}
exports.manifest = require('./manifest');
exports.meta = require('./meta');
exports.pages = require('./pages');
exports.firebaseConfig = require('./firebase');

