var User = require('../../models/user.js');

exports.get = function(req, done, fail){
    console.log('[user/server]', this.user.name, 'as', this.role);
    done();
};
