var User = require('../../models/user.js');

exports.url = ['/', '/homepage'];
exports.get = function(req, done, fail){
    done({users: User.list(3), title: 'Homepage for brick.js demo'});
};
