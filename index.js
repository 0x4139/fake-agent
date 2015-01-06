var DB=require('./db');
var DBCount=DB.length;
var hashString = function(str){
    var hash = 0;
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i);
        hash += char;
    }
    return hash;
};
module.exports=function(str){
	var hash=hashString(str);
	console.log(hash);
	return DB[hash%DBCount];
};