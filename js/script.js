window.onload = function() {
var myArray = [
["troubled genius", "To Prunch, add a target card from your sideboard to your hand. Its colored mana pips perpetually become twobrid.<br>'?' is equal to its new mana value."],
["chubby funster", "To Prunch, exile any number of cards from your hand, and then add that many plus one cards from your sideboard to your hand.<br>'?' is equal to the number of cards exiled by this effect."],
["UB staple", "To Prunch, add an additional beginning phase at the start of your next end phase. (After your end phase, untap, upkeep, and draw a card.) <br>'?' is equal to 5 (The number of phases in most turns)."],
["grunch", "To Prunch, <a href=\"https://tinyurl.com/howtoGRUNCH\">Grunch</a>.<br>'?' is equal to whatever '?' is equal to."],
["purple man (not the marvel one)", "To Prunch, you may draft a card into your hand from the battlefield. (Return it to its owner at the end of the game.)<br>'?' is equal to its mana value."],
["noun", "To Prunch, target player mills three cards, then you may put any number of purple permanents from your graveyard onto the battlefield, tapped, and any number of purple nonpermanent spells from your graveyard into your hand. <br>'?' is equal to double your devotion to purple."],
["homunculus", "To Prunch, destroy up to two target conspiracies and/or emblems and/or dungeons and/or counters.<br>'?' is equal to 4."],
["S-rank pull", "To Prunch, roll 2d5. Select one result, and draw that many + 1 cards.<br>'?' is equal to the other result + 1."],
["Creature — Prunch", "To Prunch, place \"trample\" and \"this card is legal in all formats\" counters on Prunch.<br>'?' is equal to 5."],
["fallen soul", "To Prunch, exile cards from the top of target opponent's library until there are 3 or more total cards in exile. Then, draw a card of your choice from exile or HELL.<br>'?' is equal to the amount of cards in exile and HELL."],
["ex-SOLDIER", "To Prunch, Prunch becomes your commander.<br>'?' is equal to your commander tax + 4, for the rest of the game, and cannot be redefined."],
["proxy", "To Prunch, Prunch again, and in addition to its effects, draw ? cards and discard ? cards. <br>'?' is equal to NaN."],
["insect", "To Prunch, draw a card. Then, fateseal 2, then that opponent reveals the top card of their library.<br>'?' is equal to its mana value."],
["wad", "To Prunch, draw two cards from either your library or your whammy deck. (Your whammy deck starts as a Plains, Island, Swamp, Mountain, and Forest.)<br>'?' is equal to how many cards are in your whammy deck."],  
["bad guy from LOST", "To Prunch, target opponent reveals their hand. You may choose a target nonland card from it and put it into your hand.<br>'?' is equal to the number of cards in that opponent's hand."],  
["historic villain", "To Prunch, turn target permanent face down. It becomes a battle under your protection with defence equal to its mana value + 1. (They get it back if they defeat it.)<br>'?' is also equal to its mana value + 1."],
["time lord", "To Prunch, move any number of nonbasic cards from your sideboard to your graveyard.<br>'?' is equal to the number of cards you moved."],
["symbol of good", "To Prunch, search your library for the basic land of your choice, put it onto the battlefield, then shuffle your library. (It came from Homelands).<br>'?' is equal to the amount of upvotes Prunch received in submissions divided by 10 (rounded down). (7)"]
  

];

var ftArray = [
"'Prunch.' -Prunch",
  "'Grunch. I mean Prunch. Shit, shit, what'd I say?' -Prunch",
  "Prunch is a purple version of Grunch.",
  "Did you know? Prunch was actually released before Grunch in Japan.",
  "The P in Prunch stands for Purple — and frankly, that's the colour that Prunch is.",
  "I can't wait to humanely euthanize Prunch.",
  "I've typed Prunch so much that it barely seems like a real word anymore. But it is",
  "There's a section on Prunch's wikipedia page of people who've claimed to meet it in real life.",
  "Prunch sucks! I HATE Prunch!!!!!",
  "They didn't let me include 'To Prunch, flip Prunch onto the battlefield from a height of at least one foot. If it turns over completely at least once during the flip, destroy all nontoken permanents it touches. '?' is equal to how many permaments it destroyed.'",
  "If you pump air into Prunch between its skin and fat before rendering, you end up with an almost shatteringly crisp texture.",
  "Prunch is the world's only correct solipsist.",
  "LEGAL IN HISTORIC - BANNED IN VINTAGE",
  "It's weird that it's purple.",
  "If you bite down on Prunch it pops like a gum bubble.",
  "Prunch is extremely popular with women in Japan for the same reason that Twin Peaks: Fire Walk With Me was.",
  "Prunch dated a 19 year old when it was 25, which was definitely a big enough gap that we all felt weird about it but not so much that we said anything.",
  "'I'll be here. I'll be waiting for you. If you come here, you'll find me. I promise.' -Prunch",
  "An online conspiracy theory known as the 'Two Prunch' theory postulates that there are actually two Prunches.",
  "Not really funny, kind of underpowered for vintage cube.",
  "!bot-test in #prunch or go to tinyurl.com/howtoBOTTEST",
  "There are two funny cards in hellscube. Prunch is one and the other is that card where you can reveal a red card from your hand to exile a creature from the match.",
  "VEGAN IMITATION PRUNCH 'WE REPLACED THE ORGANS WITH A BUNCH OF BEANS AND SHIT' 'AWFUL'",
  "I don't know guys. I don't think it's that purple.",
  "You may read this flavour text as if it had flash.",
  "It seems as if the people have contracted 'Prunch Fever' and they love Prunch.",
  "Yeah, I scoop. No. No, I don't want to have to deal with a million Prunch triggers.",
  "Don't get me wrong, I love hellscube. I just wish the cards were more like ones WOTC would've printed.",
  "BASED ON A TRUE STORY",
  "ANY RESEMBLANCE TO GRUNCH IS ENTIRELY COINCIDENTAL",
  "This isn't an echoverse thing. Prunch is actually from the Star Trek mirror universe",
  "Prunch is short for Pruple Ounch.",
  "I like Prunch.",
  "When not being played as a game object, you can find Prunch scrolling through YouTube shorts of The Big Bang Theory and crying at the emotional parts.",
  "BRING PRUNCH TO THE PRERELEASE — GET YOUR SHIT ROCKED",
  "This year will be the 'Year of Prunch'.",
  "Yell at Prunch! Scream at Prunch! Call for its death!!",
  "You would veto Prunch? Iconic beloved hellscube mainstay Prunch???",
  "'Any fool can know. The point is to understand.' -Prunch",
  "One Prunch Man.",
  "Kind of funny to see Prunch.",
  "Deeply upsetting to see Prunch.",
  "Please do not show me Prunch at this time.",
  "Fuck... accidentally called my teacher Prunch :pensive:",
  "Prunch? Entirely hollow. Filled with bees"
];
var normalGrunchImage = "images/prunch.png"
var randomGrunchImage = [
  "images/prunch.png"
  ];
  

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
var randomFt = ftArray[Math.floor(Math.random()*ftArray.length)];

var randomGrunch = randomGrunchImage[Math.floor(Math.random()*randomGrunchImage.length)];
var randomGrunchValue = Math.random();

var elem = document.getElementById('prunchtext');
elem.innerHTML = randomItem[1];

var guy = document.getElementById('guytext');
guy.innerHTML = randomItem[0];

var ft = document.getElementById('flavortext');
ft.innerHTML = randomFt;

if (randomGrunchValue < 0.7) {
document.getElementById("myImg").src = normalGrunchImage;
} else {
  console.log(randomGrunch);
document.getElementById("myImg").src = randomGrunch;
}
}
