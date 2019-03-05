var song;
var myFont, weAreHungryLines, weAreHungryLinesShadow, fontsize = 10;
var motherSpider, motherSpiderHeight = 306,
  index = 0;
var babySpidersPale, babySpidersPaleAnimated, babySpiders;


function preload() {
  // Ossuary 6 - Air Kevin MacLeod (incompetech.com) Licensed under Creative Commons: By Attribution 3.0 License http://creativecommons.org/licenses/by/3.0/
  song = loadSound('Ossuary6-Air.mp3');
  // Load "We Are Hungry" text by Maggie Umber http://maggieumber.com
  weAreHungryLinesShadow = [
    "\t\t\t\t\t\t\t\t\t\t\t\t",
    "WE ARE\n\nFEED  \n\t\t\tM-O-T-H-E-R !",
    "\t",
    "\n\t\t\t\tWE  G R O W\nOUR BODIES\n\t\tBULGING\n\t\t\t\tTOO TIGHT",
    "\n\t\t\t\t\t\tW E  M U S T\n\t\t\t\t\t\t\t\tS  H  E  D\n\t\t\t\t\t\tO U R  S K I N  !",
    "WE\tA R E\tHUNGRY!\nBUT WE\nATE\nTHE EGGS !\n\nWE WILL STARVE",
    "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t? ?\n\t\t\t\t\t\t\t\t\t\t\tT-R-E-M-B-L-E\t! !\n\n\n\t\t\tV-I-B-R-A-T-I-N-G",
    "FOOD!\n\nFOOD \t\t\t\t\t\t\t\t\tSHAKES\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t?",
    "IT PRESSES DOWN\n\t\t\tONTO US! THIS\nFOOD",
    "\n\n\nOUR FANGS FIND FLESH",
    "\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tITS\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\tBODY!",
    "\n\t\t\t\t\t\tYOU\t\t\tARE\n\t\tD-I-S-S-O-L-V-I-N-G\n\t\t\t\tBENEATH\t\t\tUS\n\t\t\t\t\t\tM-O-T-H-E-R",
    "YOU HAVE MADE\n\n\t\t\t\t\t\t\t\t\t\t\t\t\tUS\n\n\t\tH-U-N-T-E-R-S !",
    "",
    "WE ARE HUNGRY",
    "\n\t\t\t\tZINE NOT DEAD VIIII",
    "\n\t\t\t\t\t\t\t\tOSSUARY 6 - AIR",
    "CHUNK FONT"
  ];
  weAreHungryLines = [
    "\t\t\t\t\t\t\t\t\t\t\t\t",
    "WE ARE HUNGRY  !\n\nFEED  US\n\t\t\tM-O-T-H-E-R !",
    "\t\t\t\t\t\t\t\t\t\t\t\tTHANK\n\t\t\t\t\t\t\t\t\t\t\t\tYOU\nFOR THESE EGGS.\nTHEY ARE\nTASTY!",
    "\n\t\t\t\t\t\t  G  R  O  W",
    "\n\t\t\t\t\t\tWE MUST\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\tOUR SKIN !",
    "WE  ARE  HUNGRY!\nBUT WE\nATE\nTHE EGGS !",
    "WHAT IS THIS??\n\t\t\t\t\t\t\tWE T-R-E-M-B-L-E ! !\nOUR BODIES ARE\n\n\t\t\tV-I-B-R-A-T-I-N-G",
    "FOOD!\n\t\t\tWHERE IS THE\nFOOD THAT SHAKES\n\t\t\tOUR WEB?",
    "IT PRESSES DOWN\n\t\t\tONTO US! THIS\nFOOD\nIT WANTS US TO\n\t\t\t\t\t\t\t\t\t\t\t\t\tFEED!",
    "\n\n\nOUR FANGS FIND FLESH",
    "OUR VENOM COURSES\n\t\t\t\t\t\t\t\t\t\t\t\t\tTHROUGH\n\t\t\t\t\t\t\t\t\t\t\t\t\tITS\n\t\t\t\t\t\t\t\t\t\t\t\t\tBODY!",
    "\n\t\t\t\t\t\tYOU\t\t\tARE\n\t\tD-I-S-S-O-L-V-I-N-G\n\t\t\t\tBENEATH\t\t\tUS\n\t\t\t\t\t\tM-O-T-H-E-R",
    "YOU HAVE MADE\n\n\t\t\t\t\t\t\t\t\t\t\t\t\tUS\n\n\t\tH-U-N-T-E-R-S !",
    "",
    "WE ARE HUNGRY\n\nBY\nMAGGIE UMBER",
    "MADE FOR\n\t\t\t\tZINE NOT DEAD VIIII",
    "\n\t\t\t\t\t\t\t\tOSSUARY 6 - AIR MUSIC\n\t\t\t\t\t\t\t\tBY\n\t\t\t\t\t\t\t\tKEVIN MACLEOD\n(INCOMPETECH.COM)",
    "CHUNK FONT\n\n\t\t\t\t\t\t\t\t\t\tBY\n\nMEREDITH MANDEL"
  ];
  // Load Chunk Font by Meredith Mandel https://www.theleagueofmoveabletype.com/chunk
  myFont = loadFont('chunk-master/webfonts/Chunkfive-webfont.ttf');
  // mother spider
  motherSpider = loadAnimation("assets/mother_Spider_0000.png", "assets/mother_Spider_0012.png");
  motherSpider.playing = false;
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  // song loaded during preload(), ready to play in setup()
  song.play();
  // setup myFont
  textFont(myFont);

  // create empty groups
  babySpidersPale = new Group();
  babySpiders = new Group();
  babySpidersPaleAnimated = new Group();

  for (var i = 0; i < 10; i++) {
    var a = createSprite(random(0, width), random(0, height));
    a.addAnimation("assets/baby_spider_pale_0000.png", "assets/baby_spider_pale_0001.png", "assets/baby_spider_pale_0002.png");
    a.addToGroup(babySpidersPale);
  }
  for (var i = 0; i < 20; i++) {
    var b = createSprite(random(0, width), random(0, height));
    b.rotateToDirection = true;
    b.addAnimation("assets/baby_spider_big_0000.png", "assets/baby_spider_big_0001.png", "assets/baby_spider_big_0002.png");
    b.addToGroup(babySpiders);
  }
  for (var i = 0; i < 10; i++) {
    var c = createSprite(random(0, width), random(0, height));
    c.rotateToDirection = true;
    c.addAnimation("assets/baby_spider_big_egg_0000.png", "assets/baby_spider_big_egg_0001.png", "assets/baby_spider_big_egg_0002.png");
    c.addToGroup(babySpidersPaleAnimated);
  }
}


function draw() {
  background(253, 227, 176);

  // draw text
  textSize(windowHeight / fontsize);
  noStroke();
  fill(44, 61, 43, random(50, 75));
  text(weAreHungryLinesShadow[index], windowWidth / 25, windowHeight / 25, windowWidth, windowHeight);
  fill(44, 61, 43);
  text(weAreHungryLines[index], windowWidth / 15, windowHeight / 15, windowWidth, windowHeight);

  // draw Animation
  animation(motherSpider, mouseX, motherSpiderHeight);

  // draw babySpiders position to mouseX and mouseY
  for (var i = 0; i < babySpiders.length; i++) {
    babySpiders[i].attractionPoint(0.04, mouseX, mouseY);
  }

  // draw babySpiders position to mouseX and mouseY
  for (var i = 0; i < babySpidersPaleAnimated.length; i++) {
    babySpidersPaleAnimated[i].attractionPoint(0.01, mouseX, mouseY);
  }

  //all sprites bounce at the screen edges
  for (var i = 0; i < allSprites.length; i++) {
    var s = allSprites[i];
    if (s.position.x < -250) {
      s.position.x = 1;
      s.velocity.x = abs(s.velocity.x);
    }

    if (s.position.x > width + 250) {
      s.position.x = width - 1;
      s.velocity.x = -abs(s.velocity.x);
    }

    if (s.position.y < -250) {
      s.position.y = 1;
      s.velocity.y = abs(s.velocity.y);
    }

    if (s.position.y > height + 250) {
      s.position.y = height - 1;
      s.velocity.y = -abs(s.velocity.y);
    }
  }

  // draws sprites
  drawSprites();
}

// when mouse is pressed change the index of weAreHungryLines by 1
function mousePressed() {
  getAudioContext().resume()
  speechSynthesis.speak(msg);
  index++;
  motherSpider.nextFrame();
}

// Text To Speech
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[10]; // Note: some voices don't support altering params
msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.rate = 0.1; // 0.1 to 10
msg.pitch = 2; //0 to 2
msg.text = [
  "ughhh",
  "We are hungry! Feed us mother!",
  "Thank you for these eggs. They are tasty!",
  "We grow our bodies bulging too tight...",
  "We must shed our skin!",
  "We are hungry! But we ate the eggs! We will starve...",
  "What is this?? We tremble! Our bodies are vibrating!",
  "Food! Where is the food that shakes our web?",
  "It presses down onto us! This food it wants us to feed!",
  "Our fangs find flesh...",
  "Our venom courses through its body!",
  "You are dissolving beneath us mother",
  "You have made us hunters!",
  "haha hahaha hahahahahaha ahhh",
  "We Are Hungry by Maggie Umber",
  "Made for Z NOT DEAD 9",
  "Ossuary 6 Air by Kevin MacLeod",
  "Chunk Font by Meredith Mandel"
];
msg.lang = 'en-US';