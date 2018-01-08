
// require the request package

var request = require('request');

// require twitter

var twitter = require('twitter');

// require spotify 

var spotify = require('node-spotify-api');

// console.log the process.argv 

console.log(process.argv);

// set process.argv commands to a variable

var nodeArgs = process.argv;

// var for the api the user wants to use 

var action = process.argv[2];

// var for the content of the api the user wants to search

var spotifyCriteria = [];
var twitterName = [];


// take in the commands from CLI starting at position three

var parameters = for (var i = 3; i < nodeArgs.length; i++) {
	
				spotifyCriteria.push(parameters);
				twitterName.push(parameters);
}

// code a switch for the action the user chooses 

switch (action) {

	case "twitter";
	twitterSearch();
	break;

	case "spotify";
	spotifySearch();
	break;

	case "request";
	requestSearch();
	break;

}


// function to run criteria in twitter api

function twitterSeach() {

	var client = new Twitter({
  		consumer_key: 'Tr8mNsx8SJirniOUAdxQeRBRh',
  		consumer_secret: 'SHTk28PNbWn02YJcGgG4Vx2ljl2iRCB3oijmBYOVckRweBSfos',
  		access_token_key: '950421533838774272-adCp20C3pA6W1AGOXoFMz4z7fxkUO49',
  		access_token_secret: 't9KowxG8zFguqfTJBkFe1UgxlNYRGrcXS4FtdGasqS2eO'
});

	var screen_name

	var params = {screen_name: twitterName};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
}



