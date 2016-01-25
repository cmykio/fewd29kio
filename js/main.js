
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  offset: 100, // start scene after scrolling for 100px
  duration: 400 // pin the element for 400px of scrolling
});

var scene = new ScrollMagic.Scene({
  triggerElement: panel4, // starting scene, when reaching this element
  duration: 400 // pin the element for a total of 400px
})
.setPin(panel4); // the element we want to pin

// Add Scene to ScrollMagic Controller
controller.addScene(scene);



var country_code = 0;
var flag_position_in_array = 0;
var guess = 0;
var answerposition = 0;
var guessnumber = 0;
var score = 0;

document.getElementById('button').onclick = getCountry;
document.getElementById('good').onclick = getAnswerGood;
document.getElementById('bad').onclick = getAnswerBad;


function getCountry (){
	console.log('getcountry firing');
	document.getElementById('quizresponse').innerText = '';
	country_code = chance.country();
	console.log(country_code + ' is the random country');
	checkFlag();
	// printFlag();
};

function checkFlag() {
	console.log('checkFlag is firing');
	if (allowed_codes.indexOf(country_code) != -1) {
		flag_position_in_array=allowed_codes.indexOf(country_code);
		console.log(flag_position_in_array);
		printFlag();
	} else {
		getCountry();
	}
	
};

function printFlag (){
	console.log('printFlag is firing');
	var image_file = "../fewd29kio/flags-big/"+country_code+".png"
	document.getElementById('image').src=image_file;
};

function getAnswerGood (){
	console.log('getAnswerGood is now firing');
	guess = 'good';
	answerposition = flag_position_in_array + 1;
	console.log('the guess is ' + guess);
	console.log('answerposition is '+ answerposition);
	answer = allowed_codes[answerposition];
	console.log('the answer from the file is '+ answer);
	if (answer === guess) {
		document.getElementById('quizresponse').innerText = 'You Got it!'
		score = score + 1;
	} else {
		document.getElementById('quizresponse').innerText = 'No, sorry you are wrong.'
	}
	updateScore();
};

function getAnswerBad (){
	console.log('getAnswerBad is now firing');
	console.log('getAnswerGood is now firing');
	guess = 'bad';
	answerposition = flag_position_in_array + 1;
	console.log(guess);
	console.log('answerposition is '+ answerposition);
	answer = allowed_codes[answerposition];
	console.log('the answer from the file is '+ answer);
	if (answer === guess) {
		document.getElementById('quizresponse').innerText = 'You Got it!'
		score = score + 1;
	} else {
		document.getElementById('quizresponse').innerText = 'No, sorry you are wrong.'
	}
	updateScore();
};

function updateScore(){
	guessnumber = guessnumber + 1;
	console.log('the score is ' + score);
	console.log('the total number of guesses is ' + guessnumber);
	document.getElementById('yourscore').innerText = 'Your score is ' + score + ' out of a total of ' + guessnumber + ' guesses.'
}


var allowed_codes = [
		"AD", "bad",
		"AE", "good",		
		// "AF",
		// "AG",
		// "AL",
		// "AM",
		// "AO",
		// "AR",
		// "AT",
		// "AU",
		// "AZ",
		// "BA",
		// "BB",
		// "BD",
		// "BE",
		// "BF",
		// "BG",
		// "BH",
		// "BI",
		// "BJ",
		// "BN",
		// "BO",
		// "BR",
		// "BS",
		// "BT",
		// "BW",
		// "BY",
		// "BZ",
		// "CA",
		// "CD",
		// "CF",
		// "CG",
		// "CH",
		// "CI",
		// "CL",
		// "CM",
		// "CN",
		// "CO",
		// "CR",
		// "CU",
		// "CV",
		// "CY",
		// "CZ",
		// "DE",
		// "DJ",
		// "DK",
		// "DM",
		// "DO",
		// "DZ",
		// "EC",
		// "EE",
		// "EG",
		// "EH",
		// "ER",
		// "ES",
		// "ET",
		// "FI",
		// "FJ",
		// "FM",
		// "FR",
		// "GA",
		// "GB",
		// "GD",
		// "GE",
		// "GH",
		// "GM",
		// "GN",
		// "GQ",
		// "GR",
		// "GT",
		// "GW",
		// "GY",
		// "HN",
		// "HR",
		// "HT",
		// "HU",
		// "ID",
		// "IE",
		// "IL",
		// "IN",
		// "IQ",
		// "IR",
		// "IS",
		// "IT",
		// "JM",
		// "JO",
		// "JP",
		// "KE",
		// "KG",
		// "KH",
		// "KI",
		// "KM",
		// "KN",
		// "KP",
		// "KR",
		// "KS",
		// "KW",
		// "KZ",
		// "LA",
		// "LB",
		// "LC",
		// "LI",
		// "LK",
		// "LR",
		// "LS",
		// "LT",
		// "LU",
		// "LV",
		// "LY",
		// "MA",
		// "MC",
		// "MD",
		// "ME",
		// "MG",
		// "MH",
		// "MK",
		// "ML",
		// "MM",
		// "MN",
		// "MR",
		// "MT",
		// "MU",
		// "MV",
		// "MW",
		// "MX",
		// "MY",
		// "MZ",
		// "NA",
		// "NE",
		// "NG",
		// "NI",
		// "NL",
		// "NO",
		// "NP",
		// "NR",
		// "NZ",
		// "OM",
		// "PA",
		// "PE",
		// "PG",
		// "PH",
		// "PK",
		// "PL",
		// "PT",
		// "PW",
		// "PY",
		// "QA",
		// "RO",
		// "RS",
		// "RU",
		// "RW",
		// "SA",
		// "SB",
		// "SC",
		// "SD",
		// "SE",
		// "SG",
		// "SI",
		// "SK",
		// "SL",
		// "SM",
		// "SN",
		// "SO",
		// "SR",
		// "ST",
		// "SV",
		// "SY",
		// "SZ",
		// "TD",
		// "TG",
		// "TH",
		// "TJ",
		// "TL",
		// "TM",
		// "TN",
		// "TO",
		// "TR",
		// "TT",
		// "TV",
		// "TW",
		// "TZ",
		// "UA",
		// "UG",
		// "US",
		// "UY",
		// "UZ",
		// "VA",
		// "VC",
		// "VE",
		// "VN",
		// "VU",
		// "WS",
		// "YE",
		// "ZA",
		// "ZM",
		// "ZW"
];


