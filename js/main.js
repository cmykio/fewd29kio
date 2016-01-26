
// var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene({
//   offset: 100, // start scene after scrolling for 100px
//   duration: 400 // pin the element for 400px of scrolling
// });

// var scene = new ScrollMagic.Scene({
//   triggerElement: panel4, // starting scene, when reaching this element
//   duration: 400 // pin the element for a total of 400px
// })
// .setPin(panel4); // the element we want to pin

// // Add Scene to ScrollMagic Controller
// controller.addScene(scene);


var controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
  triggerElement: trigger1,
  duration: $(window).height(),
  reverse: true,
})
.setPin(pin1); 
controller.addScene(scene1);


var controller = new ScrollMagic.Controller();
var scene2 = new ScrollMagic.Scene({
  triggerElement: trigger2, 
  duration: $(window).height(),
  
  reverse: true,
})
.setPin(pin2);
controller.addScene(scene2);


var controller = new ScrollMagic.Controller();
var scene3 = new ScrollMagic.Scene({
  triggerElement: trigger3, 
  duration: $(window).height(),
  
  reverse: true,
})
.setPin(pin3);
controller.addScene(scene3);


var controller = new ScrollMagic.Controller();
var scene4 = new ScrollMagic.Scene({
  triggerElement: trigger4, 
  duration: $(window).height(),
  
  reverse: true,
})
.setPin(pin4);
controller.addScene(scene4);

var controller = new ScrollMagic.Controller();
var scene5 = new ScrollMagic.Scene({
  triggerElement: trigger5, 
  duration: $(window).height(),
  
  reverse: true,
})
.setPin(pin5);
controller.addScene(scene5);

var controller = new ScrollMagic.Controller();
var scene6 = new ScrollMagic.Scene({
  triggerElement: trigger6, 
  duration: $(window).height(),
  
  reverse: true,
})
.setPin(pin6);
controller.addScene(scene6);

var controller = new ScrollMagic.Controller();
var scene7 = new ScrollMagic.Scene({
  triggerElement: trigger7, 
  duration: $(window).height(),
  
  reverse: true,
})
.setPin(pin7);
controller.addScene(scene7);

var controller = new ScrollMagic.Controller();
var scene8 = new ScrollMagic.Scene({
  triggerElement: trigger8, 
  duration: $(window).height(),
  
  reverse: true,
})
.setPin(pin8);
controller.addScene(scene8);

var controller = new ScrollMagic.Controller();
var scene9 = new ScrollMagic.Scene({
  triggerElement: trigger9, 
  duration: $(window).height(),
  
  reverse: true,
})
.setPin(pin9);
controller.addScene(scene9);


// var controller = new ScrollMagic.Controller();
// var scene10 = new ScrollMagic.Scene({
//   triggerElement: trigger10, 
//   duration: $(window).height(),
  
//   reverse: true,
// })
// .setPin(pin10);
// controller.addScene(scene10);














var country_code = 0;
var flag_position_in_array = 0;
var guess = 0;
var answerposition = 0;
var guessnumber = 0;
var score = 0;
var flag_to_print = 0;

window.onload = getCountry;
document.getElementById('button').onclick = getCountry;
document.getElementById('good').onclick = getAnswerGood;
document.getElementById('bad').onclick = getAnswerBad;

function getCountry () {
	flag_position_in_array =Math.floor(Math.random()*198)
	console.log(flag_position_in_array);
	flag_to_print = flags_list[flag_position_in_array];
	console.log(flag_to_print);
	printFlag();
};

function printFlag (){
	console.log('printFlag is firing');
	var image_file = "../fewd29kio/flags-big/"+flag_to_print+".png"
	document.getElementById('flag').src=image_file;
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

var flags_list = [
		"AD", 
		"AE",	
		"AF",
		"AG",
		"AL",
		"AM",
		"AO",
		"AR",
		"AT",
		"AU",
		"AZ",
		"BA",
		"BB",
		"BD",
		"BE",
		"BF",
		"BG",
		"BH",
		"BI",
		"BJ",
		"BN",
		"BO",
		"BR",
		"BS",
		"BT",
		"BW",
		"BY",
		"BZ",
		"CA",
		"CD",
		"CF",
		"CG",
		"CH",
		"CI",
		"CL",
		"CM",
		"CN",
		"CO",
		"CR",
		"CU",
		"CV",
		"CY",
		"CZ",
		"DE",
		"DJ",
		"DK",
		"DM",
		"DO",
		"DZ",
		"EC",
		"EE",
		"EG",
		"EH",
		"ER",
		"ES",
		"ET",
		"FI",
		"FJ",
		"FM",
		"FR",
		"GA",
		"GB",
		"GD",
		"GE",
		"GH",
		"GM",
		"GN",
		"GQ",
		"GR",
		"GT",
		"GW",
		"GY",
		"HN",
		"HR",
		"HT",
		"HU",
		"ID",
		"IE",
		"IL",
		"IN",
		"IQ",
		"IR",
		"IS",
		"IT",
		"JM",
		"JO",
		"JP",
		"KE",
		"KG",
		"KH",
		"KI",
		"KM",
		"KN",
		"KP",
		"KR",
		"KS",
		"KW",
		"KZ",
		"LA",
		"LB",
		"LC",
		"LI",
		"LK",
		"LR",
		"LS",
		"LT",
		"LU",
		"LV",
		"LY",
		"MA",
		"MC",
		"MD",
		"ME",
		"MG",
		"MH",
		"MK",
		"ML",
		"MM",
		"MN",
		"MR",
		"MT",
		"MU",
		"MV",
		"MW",
		"MX",
		"MY",
		"MZ",
		"NA",
		"NE",
		"NG",
		"NI",
		"NL",
		"NO",
		"NP",
		"NR",
		"NZ",
		"OM",
		"PA",
		"PE",
		"PG",
		"PH",
		"PK",
		"PL",
		"PT",
		"PW",
		"PY",
		"QA",
		"RO",
		"RS",
		"RU",
		"RW",
		"SA",
		"SB",
		"SC",
		"SD",
		"SE",
		"SG",
		"SI",
		"SK",
		"SL",
		"SM",
		"SN",
		"SO",
		"SR",
		"ST",
		"SV",
		"SY",
		"SZ",
		"TD",
		"TG",
		"TH",
		"TJ",
		"TL",
		"TM",
		"TN",
		"TO",
		"TR",
		"TT",
		"TV",
		"TW",
		"TZ",
		"UA",
		"UG",
		"US",
		"UY",
		"UZ",
		"VA",
		"VC",
		"VE",
		"VN",
		"VU",
		"WS",
		"YE",
		"ZA",
		"ZM",
		"ZW"
]









var allowed_codes = [
		"AD", "bad",
		"AE", "good",		
		"AF",
		"AG",
		"AL",
		"AM",
		"AO",
		"AR",
		"AT",
		"AU",
		"AZ",
		"BA",
		"BB",
		"BD",
		"BE",
		"BF",
		"BG",
		"BH",
		"BI",
		"BJ",
		"BN",
		"BO",
		"BR",
		"BS",
		"BT",
		"BW",
		"BY",
		"BZ",
		"CA",
		"CD",
		"CF",
		"CG",
		"CH",
		"CI",
		"CL",
		"CM",
		"CN",
		"CO",
		"CR",
		"CU",
		"CV",
		"CY",
		"CZ",
		"DE",
		"DJ",
		"DK",
		"DM",
		"DO",
		"DZ",
		"EC",
		"EE",
		"EG",
		"EH",
		"ER",
		"ES",
		"ET",
		"FI",
		"FJ",
		"FM",
		"FR",
		"GA",
		"GB",
		"GD",
		"GE",
		"GH",
		"GM",
		"GN",
		"GQ",
		"GR",
		"GT",
		"GW",
		"GY",
		"HN",
		"HR",
		"HT",
		"HU",
		"ID",
		"IE",
		"IL",
		"IN",
		"IQ",
		"IR",
		"IS",
		"IT",
		"JM",
		"JO",
		"JP",
		"KE",
		"KG",
		"KH",
		"KI",
		"KM",
		"KN",
		"KP",
		"KR",
		"KS",
		"KW",
		"KZ",
		"LA",
		"LB",
		"LC",
		"LI",
		"LK",
		"LR",
		"LS",
		"LT",
		"LU",
		"LV",
		"LY",
		"MA",
		"MC",
		"MD",
		"ME",
		"MG",
		"MH",
		"MK",
		"ML",
		"MM",
		"MN",
		"MR",
		"MT",
		"MU",
		"MV",
		"MW",
		"MX",
		"MY",
		"MZ",
		"NA",
		"NE",
		"NG",
		"NI",
		"NL",
		"NO",
		"NP",
		"NR",
		"NZ",
		"OM",
		"PA",
		"PE",
		"PG",
		"PH",
		"PK",
		"PL",
		"PT",
		"PW",
		"PY",
		"QA",
		"RO",
		"RS",
		"RU",
		"RW",
		"SA",
		"SB",
		"SC",
		"SD",
		"SE",
		"SG",
		"SI",
		"SK",
		"SL",
		"SM",
		"SN",
		"SO",
		"SR",
		"ST",
		"SV",
		"SY",
		"SZ",
		"TD",
		"TG",
		"TH",
		"TJ",
		"TL",
		"TM",
		"TN",
		"TO",
		"TR",
		"TT",
		"TV",
		"TW",
		"TZ",
		"UA",
		"UG",
		"US",
		"UY",
		"UZ",
		"VA",
		"VC",
		"VE",
		"VN",
		"VU",
		"WS",
		"YE",
		"ZA",
		"ZM",
		"ZW"
];


