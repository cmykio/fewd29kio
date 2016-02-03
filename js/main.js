



// Responsive Navigation and slider - just getting it functional for now
$(document).ready(function(){
    
	$('.nav-icon').on('click', function(){
		$('.site-nav ul').slideToggle();
		// this slideToggle is part of the effect library in jQuery library - has lots of things you can do
	});

	$(window).on('resize', function(){
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		// this is checking for the width of the window, so that on resize, we will be checking for when the icon/nav is hidden.
		// if the width is greater than a certain number, we need to show/hide the nav - because it's gotten lost based on slideToggle
		console.log(windowWidth);
		console.log(windowHeight);
		// this is being printed in the Console


		// this is showing or hiding each element depending on whether the viewport is above or below a certain width
		if ( windowWidth > 200 ) {
			$('.site-nav ul').show();
			$('.nav-icon').hide();
		}	else {
			$('.site-nav ul').hide();
			$('.nav-icon').show();
		}
	});













	











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
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle('#navslide1', 'active')
.setPin(pin1) 
.addIndicators()
controller.addScene(scene1);


var controller = new ScrollMagic.Controller();
var scene2 = new ScrollMagic.Scene({
  triggerElement: trigger2, 
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle("#navslide1", 'arrow')
.setClassToggle('#navslide2', 'active')
.setPin(pin2)
.addIndicators()
controller.addScene(scene2);


var controller = new ScrollMagic.Controller();
var scene3 = new ScrollMagic.Scene({
  triggerElement: trigger3, 
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle("#trigger3", "active")
.setClassToggle("#navslide3", "active")
.setPin(pin3)
.addIndicators()
controller.addScene(scene3);


var controller = new ScrollMagic.Controller();
var scene4 = new ScrollMagic.Scene({
  triggerElement: trigger4, 
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle("#trigger4", "active")
.setClassToggle("#navslide4", "arrow_active")

.setPin(pin4)
.addIndicators()
controller.addScene(scene4);

var controller = new ScrollMagic.Controller();
var scene5 = new ScrollMagic.Scene({
  triggerElement: trigger5, 
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle("#trigger5", "active")
.setClassToggle("#navslide5", "arrow_active")
.setPin(pin5)
.addIndicators()
controller.addScene(scene5);

var controller = new ScrollMagic.Controller();
var scene6 = new ScrollMagic.Scene({
  triggerElement: trigger6, 
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle("#trigger6", "active")
.setClassToggle("#navslide6", "arrow_active")
.setPin(pin6)
.addIndicators()
controller.addScene(scene6);

var controller = new ScrollMagic.Controller();
var scene7 = new ScrollMagic.Scene({
  triggerElement: trigger7, 
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle("#trigger7", "active")
.setClassToggle("#navslide7", "arrow_active")
.setPin(pin7)
.addIndicators()
controller.addScene(scene7);

var controller = new ScrollMagic.Controller();
var scene8 = new ScrollMagic.Scene({
  triggerElement: trigger8, 
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle("#trigger8", "active")
.setClassToggle("#navslide8", "arrow_active")
.setPin(pin8)
.addIndicators()
controller.addScene(scene8);

var controller = new ScrollMagic.Controller();
var scene9 = new ScrollMagic.Scene({
  triggerElement: trigger9, 
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle("#trigger9", "active")
.setClassToggle("#navslide9", "arrow_active")
.setPin(pin9)
.addIndicators()
controller.addScene(scene9);


var controller = new ScrollMagic.Controller();
var scene10 = new ScrollMagic.Scene({
  triggerElement: trigger10, 
  duration: "0%",
  triggerHook: 0,
  reverse: true,
})
.setClassToggle("#trigger10", "active")
.setClassToggle("#navslide10", "arrow_active")
.setPin(pin10)
.addIndicators()
controller.addScene(scene9);















// THIS IS THE TOGGLE CLASS WORKING
$('#classchangetester').on('click', function(){
	$('#map').toggleClass('on');
});



























var country_code = 0;
var flag_position_in_array = 0;
var guess = 0;
var answerposition = 0;
var guessnumber = 0;
var score = 0;
var flag_to_print = 0;
var countryflag = 0;
var image_file = 0;
var playlabel = 'Play';
var animation;
var endanimation = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

window.onload = setQuiz;
document.getElementById('play').onclick = getCountry;
document.getElementById('hintbutton').onclick = getHints;
document.getElementById('good').onclick = getAnswerGood;
document.getElementById('bad').onclick = getAnswerBad;
document.getElementById('mapinfo').onclick = printMap;
document.getElementById('flagbutton').onclick = showFlag;

// Runs once at page load to set up the quiz area and show first flag
function setQuiz () {
	flag_position_in_array = Math.floor(Math.random()*196)
	console.log(flag_position_in_array);
	if (flag_position_in_array != 'undefined') {
		flag_to_print = flags_list[flag_position_in_array];
		countryflag = country_names[flag_position_in_array];
		console.log(flag_to_print);
		console.log(countryflag);
		image_file = "../fewd29kio/flags-big/"+flag_to_print+".png"
		document.getElementById('flag').src=image_file;
		document.getElementById('result').innerText = countryflag;
		document.getElementById('playdisplay').innerText = playlabel;
		animation="animated flipInX";
		$("#flag").addClass(animation).one(endanimation,
			function(){
				$(this).removeClass(animation);
			})
	} else {
		setQuiz();
	}
};

// Returns a random number which is used to call an index in an array of country codes
// this will determine what flag and flag labels display
function getCountry () {
	flag_position_in_array = Math.floor(Math.random()*196)
	console.log(flag_position_in_array);
	if (flag_position_in_array != 'undefined') {
		flag_to_print = flags_list[flag_position_in_array];
		countryflag = country_names[flag_position_in_array];
		console.log(flag_to_print);
		console.log(countryflag);
		printFlag();
	} else {
		getCountry();
	}
};

// Returns a flag image from directory
// Also relabels the 'Play' button to 'Hints', so the same button can be used to call another
// function to display hints re flag design principles
function printFlag () {
	console.log('printFlag is firing');
	image_file = "../fewd29kio/flags-big/"+flag_to_print+".png"
	playlabel = 'Play Again';
	document.getElementById('flag').src=image_file;
	document.getElementById('result').innerText = countryflag;
	document.getElementById('playdisplay').innerText = playlabel;
	animation="animated flipInX";
	$("#flag").addClass(animation).one(endanimation,
		function(){
			$(this).removeClass(animation);
		})
	$('#answer_buttons').addClass('visible');
	// $('#play_panel').addClass('off');
	$('#play').addClass('off');
	$('#hintbutton').removeClass('off');
	$('#good').removeClass('hidden');
	$('#bad').removeClass('hidden');
	$('#mapinfo').removeClass('hidden');
	$('#mapinfo').addClass('visible');
};

function printMap () {
	var map="https://www.google.com/maps/embed/v1/search?key=AIzaSyA00nFCVfgsnGqEIEpmO-sjelodI3op1MI&q="+countryflag;
	document.getElementById('map').src=map;
	$('#flag').addClass('off');
	$('#map').removeClass('off');
	$('#map').addClass('on');
	$('#hintpanel').removeClass('on');
	$('#flagbutton').removeClass('off');
	$('#flagbutton').addClass('on');
	$('#answer_buttons').removeClass('visible');
	$('#hintbutton').removeClass('on');
	$('#hintbutton').addClass('off');
	$('#play').removeClass('on');
	$('#play').addClass('off');
	// $('#hintbutton').addClass('off');
	// $('#good').addClass('hidden');
	// $('#bad').addClass('hidden');
	animation="animated flipInX";
	$("#map").addClass(animation).one(endanimation,
		function(){
			$(this).removeClass(animation);
		})
};

function showFlag () {
	$('#flag').removeClass('off');
	$('#map').removeClass('on');
	$('#flagbutton').removeClass('on');
	$('#hintpanel').removeClass('on');
	$('#answer_buttons').addClass('visible');
	// $('#good').removeClass('hidden');
	// $('#bad').removeClass('hidden');
	// $('#hintbutton').removeClass('off');
}

function getHints () {
	console.log('getHints firing');
	$('#hintpanel').addClass('on');
	$('#flag').addClass('off');
	$('#map').addClass('off');
	$('#hintbutton').addClass('off');
	$('#flagbutton').removeClass('off');
	$('#flagbutton').addClass('on');
	// $('#hintbutton').addClass('off');
	// $('#good').addClass('hidden');
	// $('#bad').addClass('hidden');
	$('#answer_buttons').removeClass('visible');
};

function getAnswerGood (){
	console.log('getAnswerGood is now firing');
	guess = 'good';
	answerposition = flag_position_in_array + 1;
	console.log('the guess is ' + guess);
	console.log('answerposition is '+ answerposition);
	answer = answer_codes[answerposition];
	console.log('the answer from the file is '+ answer);
	if (answer === guess) {
		document.getElementById('quizresponse').innerText = 'You got it!'
		score = score + 1;
	} else {
		document.getElementById('quizresponse').innerText = "No, sorry, it's not great..."
	}
	updateScore();
	$('#hintpanel').removeClass('on');
	$('#hintbutton').addClass('off');
	$('#play').removeClass('off');
	$('#play').addClass('on');
	$('#guessfeedback').addClass('on');
	$('#bad').addClass('hidden');
	$('#mapinfo').removeClass('visible');
	$('#mapinfo').addClass('hidden');
	showFlag();
};

function getAnswerBad (){
	console.log('getAnswerBad is now firing');
	console.log('getAnswerGood is now firing');
	guess = 'bad';
	answerposition = flag_position_in_array + 1;
	console.log(guess);
	console.log('answerposition is '+ answerposition);
	answer = answer_codes[answerposition];
	console.log('the answer from the file is '+ answer);
	if (answer === guess) {
		document.getElementById('quizresponse').innerText = 'You Got it!'
		score = score + 1;
	} else {
		document.getElementById('quizresponse').innerText = 'No, sorry you are wrong.'
	}
	updateScore();
	$('#hintpanel').removeClass('on');
	$('#hintbutton').addClass('off');
	$('#play').removeClass('off');
	$('#play').addClass('on');
	$('#guessfeedback').addClass('on');
	$('#good').addClass('hidden');
	$('#mapinfo').removeClass('visible');
	$('#mapinfo').addClass('hidden');
	showFlag();
};

function updateScore(){
	guessnumber = guessnumber + 1;
	console.log('the score is ' + score);
	console.log('the total number of guesses is ' + guessnumber);
	document.getElementById('yourscore').innerText = 'Your score is ' + score + ' out of a total of ' + guessnumber + ' guesses.'
};

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









var answer_codes = [
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

var country_names = [
		"Andorra",
		"United Arab Emirates",
		"Afghanistan",
		"Antigua and Barbuda",
		"Albania",
		"Armenia",
		"Angola",
		"Argentina",
		"Austria",
		"Australia",
		"Azerbaijan",
		"Bosnia and Herzegovina",
		"Barbados",
		"Bangladesh",
		"Belgium",
		"Burkina Faso",
		"Bulgaria",
		"Bahrain",
		"Burundi",
		"Benin",
		"Brunei Darussalam",
		"Bolivia",
		"Brazil",
		"Bahamas",
		"Bhutan",
		"Botswana",
		"Belarus",
		"Belize",
		"Canada",
		"Congo",
		"Central African Republic",
		"Congo",
		"Switzerland",
		"Cote d'Ivoire",
		"Chile",
		"Cameroon",
		"China",
		"Colombia",
		"Costa Rica",
		"Cuba",
		"Cape Verde",
		"Cyprus",
		"Czech Republic",
		"Germany",
		"Djibouti",
		"Denmark",
		"Dominica",
		"Dominican Republic",
		"Algeria",
		"Ecuador",
		"Estonia",
		"Egypt",
		"Western Sahara",
		"Eritrea",
		"Spain",
		"Ethiopia",
		"Finland",
		"Fiji",
		"Micronesia",
		"France",
		"Gabon",
		"United Kingdom",
		"Grenada",
		"Georgia Republic",
		"Ghana",
		"Gambia",
		"Guinea",
		"Equatorial Guinea",
		"Greece",
		"Guatemala",
		"Guinea-Bissau",
		"Guyana",
		"Honduras",
		"Croatia",
		"Haiti",
		"Hungary",
		"Indonesia",
		"Ireland",
		"Israel",
		"India",
		"Iraq",
		"Iran",
		"Iceland",
		"Italy",
		"Jamaica",
		"Jordan",
		"Japan",
		"Kenya",
		"Kyrgyzstan",
		"Cambodia",
		"Kiribati",
		"Comoros",
		"Saint Kitts and Nevis",
		"North Korea",
		"South Korea",
		"Kosovo",
		"Kuwait",
		"Kazakhstan",
		"Laos",
		"Lebanon",
		"Saint Lucia",
		"Liechtenstein",
		"Sri Lanka",
		"Liberia",
		"Lesotho",
		"Lithuania",
		"Luxembourg",
		"Latvia",
		"Libya",
		"Morocco",
		"Monaco",
		"Moldova",
		"Montenegro",
		"Madagascar",
		"Marshall Islands",
		"Macedonia",
		"Mali",
		"Myanmar",
		"Mongolia",
		"Mauritania",
		"Malta",
		"Mauritius",
		"Maldives",
		"Malawi",
		"Mexico",
		"Malaysia",
		"Mozambique",
		"Namibia",
		"Niger",
		"Nigeria",
		"Nicaragua",
		"Netherlands",
		"Norway",
		"Nepal",
		"Nauru",
		"New Zealand",
		"Oman",
		"Panama",
		"Peru",
		"Papua New Guinea",
		"Philippines",
		"Pakistan",
		"Poland",
		"Portugal",
		"Palau",
		"Paraguay",
		"Qatar",
		"Romania",
		"Serbia",
		"Russia",
		"Rwanda",
		"Saudi Arabia",
		"Solomon Islands",
		"Seychelles",
		"Sudan",
		"Sweden",
		"Singapore",
		"Slovenia",
		"Slovakia",
		"Sierra Leone",
		"San Marino",
		"Senegal",
		"Somalia",
		"Suriname",
		"Sao Tome & Principe",
		"El Salvador",
		"Syria",
		"Swaziland",
		"Chad",
		"Togo",
		"Thailand",
		"Tajikistan",
		"Timor-Leste",
		"Turkmenistan",
		"Tunisia",
		"Tonga",
		"Turkey",
		"Trinidad and Tobago",
		"Tuvalu",
		"Taiwan",
		"Tanzania",
		"Ukraine",
		"Uganda",
		"United States",
		"Uruguay",
		"Uzbekistan",
		"Holy See (Vatican City State)",
		"Saint Vincent & the Grenadines",
		"Venezuela",
		"Viet Nam",
		"Vanuatu",
		"Samoa",
		"Yemen",
		"South Africa",
		"Zambia",
		"Zimbabwe"
	]


}); 
// this is closing the ready method
