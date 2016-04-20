var User = require('../../models/user.js');

exports.view = function(req, done, fail){
    var ctx = this.context;
    console.log('[user/server]', ctx.user.name, 'as', ctx.role);
    done();
};
