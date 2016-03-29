exports.get = function(){
    return {
        name: 'Mac Egetisus',
        desc: 'Praesent volutpat sollicitudin dui. Sed in tellus id urna viverra.'
    };
};

exports.list = function(count){
    var list = [];
    while(count--) list.push(exports.get());
    return list;
};
