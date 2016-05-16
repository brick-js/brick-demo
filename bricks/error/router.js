
exports.get = function(req, done, fail){
    var err = this.error;
    console.error(err);
    done({
        message: err.message || err,
        stack: err.stack
    });
};
