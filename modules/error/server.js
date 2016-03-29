
exports.resolver = function(req, done, fail){
    var err = this.context.error;
    console.error(err);
    done({
        message: err.message || err,
        stack: err.stack
    });
};
