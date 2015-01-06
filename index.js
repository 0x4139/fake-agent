var DB=require('./db');
var DBCount=DB.length;

var hashString = function(str) {
    var hash = 0;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash; // Convert to 32bit integer
        return hash;
    }
};
module.exports=function(str){
	var hash=hashString(str);
	return DB[hash%DBCount];
};