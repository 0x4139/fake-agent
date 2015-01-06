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
	return {
		'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
		'accept-encoding': 'gzip, deflate, sdch',
	 	'accept-language': 'en-US,en;q=0.8',
	 	'user-agent': DB[hash%DBCount]
	};
};