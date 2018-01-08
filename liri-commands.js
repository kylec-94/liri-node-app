
// require the request package

var request = require('request');

// require twitter

var twitter = require('twitter');
// require twitter API key
// var twitterKey = require('twitterKey');

// require spotify 

var Spotify = require('node-spotify-api');
// require spotify api key
// var spotifyKey = require('spotifyKey');

// console.log the process.argv 

console.log(process.argv);

// set process.argv commands to a variable

var nodeArgs = process.argv;

// var for the api the user wants to use 

var action = process.argv[2];

// var for the content of the api the user wants to search

// var spotifyCriteria = [];
// var twitterName = [];
// var movie = [];





// code a switch for the action the user chooses 

switch (action) {

	case "my-tweets":
	twitterSearch();
	break;

	case "spotify-this-song":
	spotifySearch();
	break;

	case "movie-this":
	movieSearch();
	break;

}


// function to run criteria in twitter api

function twitterSearch() {

	var client = new twitter({
  		consumer_key: 'Tr8mNsx8SJirniOUAdxQeRBRh',
  		consumer_secret: 'SHTk28PNbWn02YJcGgG4Vx2ljl2iRCB3oijmBYOVckRweBSfos',
  		access_token_key: '950421533838774272-adCp20C3pA6W1AGOXoFMz4z7fxkUO49',
  		access_token_secret: 't9KowxG8zFguqfTJBkFe1UgxlNYRGrcXS4FtdGasqS2eO'
});


	var params = {screen_name: 'WhoisMalaa_01'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
}



function spotifySearch(){

var trackName = process.argv[3];

var spotify = new Spotify({
  id: '79d77384eec64b148aa9a88a6d15650f',
  secret: '5e0a4e6a5423479b901d8959816c3f7f'
});
 
spotify.search({ type: 'track', query: trackName }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log("Artist: " + data.tracks.items[0].artists[0].name); 
console.log("Song: " + data.tracks.items[0].name);
console.log("Album: " + data.tracks.items[0].album.name);
console.log("Preview URL: " + data.tracks.items[0].preview_url);
});


}

function movieSearch() {

	var movie = process.argv[3];


	request("http://www.omdbapi.com/?apikey=trilogy&t=" + movie + "&y=&plot=short&r=json&tomatoes=true", function (error, response, body) {
		if (!error && response.statusCode == 200){
			var movie = JSON.parse(body);

			var results = 

			"Title: " + movie.Title;
			"Year: " + movie.Year;
			// "Imdb Rating: " movie.imdbRating;
			"Country: " + movie.Country
			"Language: " + movie.Language
			"Plot: " + movie.Plot
			"Rotten Tomatoes Rating: " + movie.tomatoRating
			"Rotten Tomatoes URL: " + movie.tomatoURL;
			console.log(results);
		} else{
			console.log("Error: " + error);
			return;
		}
	})
}








