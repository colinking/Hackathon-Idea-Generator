var ideas = [
	"smart",
	"watch",
	"marker",
	"bike",
	"car",
	"radio",
	"finance",
	"assistant",
	"sleep",
	"mattress",
	"pictures",
	"lighting",
	"storage",
	"on demand",
	"food",
	"drink",
	"internet",
	"internet of things",
	"programming",
	"api",
	"bitcoin",
	"anonymous",
	"video",
	"streaming",
	"gaming",
	"exercise",
	"tracking",
	"metrics",
	"trump",
	"politics",
	"new language",
	"emojis",
	"gifs",
	"sound effects",
	"pandas",
	"VR",
	"sharing economy",
	"cloud",
	"TV",
	"mobile",
	"whiteboard",
	"collaboration",
	"photography",
	"safety",
	"coffee",
	"desk",
	"pillow",
	"window",
	"cord",
	"jacket",
	"backpack",
	"button",
	"frisbee",
	"travel bag",
	"door",
	"qa",
	"testing",
	"textbooks",
	"learning",
	"inception",
	"meta",
	"instagram",
	"facebook",
	"twitter",
	"tinder",
	"uber",
	"airbnb",
	"memory",
	"vision",
	"restaurants",
	"seating",
	"payments",
	"music",
	"art",
	"news",
	"camera",
	"race",
	"security",
	"finger print scanner",
	"speaking",
	"health",
	"augmented reality",
	"haptic feedback",
	"mind",
	"communications",
	"messaging",
	"public transport",
	"mapping",
	"cats",
	"automation",
	"trigger",
	"tasks",
	"remote",
	"betting",
	"interactive",
	"blogging",
	"markdown",
	"ios keyboard",
	"unified",
	"search",
	"discovery",
	"alerts",
	"medicine",
	"remote/internet controlled",
	"recommendation system",
	"crowdfund",
	"maze",
	"real time",
	"calendar",
	"chrome extension",
	"virtual docker image",
	"qr code",
	"selfie stick",
	"donations",
	"launcher",
	"social network",
	"selling",
	"wishlist",
	"venmo"
];

var count = 5;

var keypress = require('keypress'),
	tty = require('tty');

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);
writeIdeas();

process.stdin.on('keypress', function (_, key) {
	if (key && key.ctrl && key.name == 'c') {
		process.exit();
	}
	clearIdeas();
	writeIdeas();
});

function writeIdeas() {
	for(var i = 0; i < count; i++) {
		var seperator = "";
		for(var j = 0; j < 2; j++) {
			var index = Math.floor(Math.random() * ideas.length);
			process.stdout.write(seperator + ideas[index]);
			seperator = " + ";
		}
		console.log();
	}
}

function clearIdeas() {
	process.stdout.moveCursor(0,-count);
	for(var i = 0; i < count; i++)
		console.log("                                                        ");
	process.stdout.moveCursor(0,-count);
}

process.stdin.setRawMode(true);
process.stdin.resume();
