
exports.get = function(req, done, fail, res){
    var err = this.error;
    res.status(err.status || 500);

    console.error(err);

    done({
        message: err.message || err,
        stack: err.stack
    });
};
