let numWolverine = 0;
let numCrawler = 0;
let numStorm = 0;
let numDeadpool = 0;
let numCyclops = 0;
let numGambit = 0;
let numXavier = 0;
let numIceman = 0;
let numBeast = 0;
let numCable = 0;

let resultsEl = document.getElementById("results");

document.getElementById("info").addEventListener("click", displayInfo);
document.getElementById("search").addEventListener("click", searchXmen);
document.getElementById("madbtn1").addEventListener("click", displayMessage);
document.getElementById("mainImg").addEventListener("click", getCharacter);
document.getElementById("plus10").addEventListener("click", plus10);
document.getElementById("info2").addEventListener("click", displayInfo2);

function displayInfo() {
  document.getElementById("name").innerHTML = "Information";
  document.getElementById("quote").innerHTML =
    "There are 5 searchable characters: Wolverine/Logan, Cyclops/Scott Summers, Beast/Hank McCoy, Professor X/Charles Xavier, and Gambit/Remy LeBeau.";
}
function displayInfo2() {
  document.getElementById("name").innerHTML = "Information";
  document.getElementById("odds").innerHTML =
    "Common: Wolverine, Night Crawler, Storm, Deadpool, Cyclops, Gambit, Beast. Rare: Xavier, Iceman. Ultra Rare: Cable";
}
function searchXmen() {
  let name = document.getElementById("inputname").value;
  name = name.toLowerCase();

  if (name == "wolverine" || name == "logan") {
    document.getElementById("mainimg").src = "images/wolverine.jpg";
    document.getElementById("name").innerHTML = "Wolverine";
    document.getElementById("quote").innerHTML =
      '"You know, sometimes when you cage the beast, the beast gets angry!"';
    document.getElementById("box").style.backgroundColor = "yellow";
    document.getElementById("description").style.fontSize = "x-small";
    document.getElementById("description").style.textAlign = "left";
    document.getElementById("description").style.padding = "5px 15px 20px 30px";
    document.getElementById("stats").style.fontSize = "small";
    document.getElementById("stats").style.display = "unset";
    document.getElementById("height").innerHTML = " 5'3";
    document.getElementById("weight").innerHTML = " 300lbs";
    document.getElementById("born").innerHTML = " Alberta, Canada";
    document.getElementById("abilities").innerHTML =
      "Fast Regneration, Metal Claws, Superhuman Strength and Speed";
    document.getElementById("origin").innerHTML =
      "Wolverine was born as James Howlett, son of plantation owners in the late 1800's.  Due to unexpected circumstances, Wolverine is selected for human trials for adamantiam casing to be put around his bones. He agrees and the experiment goes wrong, leaving Logan enraged and without any of his memories. ";
  } else if (name == "cyclops" || name == "scott summers") {
    document.getElementById("mainimg").src = "images/cyclops.jpg";
    document.getElementById("name").innerHTML = "Cyclops";
    document.getElementById("quote").innerHTML =
      '"No. Not plan B. Plan 2. Plan B implies we only have 26"';
    document.getElementById("box").style.backgroundColor = "red";
    document.getElementById("description").style.fontSize = "small";
    document.getElementById("description").style.textAlign = "left";
    document.getElementById("description").style.padding =
      "10px 15px 20px 30px";
    document.getElementById("stats").style.fontSize = "small";
    document.getElementById("stats").style.display = "unset";
    document.getElementById("height").innerHTML = " 6'3";
    document.getElementById("weight").innerHTML = " 195lbs";
    document.getElementById("born").innerHTML = " Anchorage, Alaska";
    document.getElementById("abilities").innerHTML = "Laser Vision";
    document.getElementById("origin").innerHTML =
      "Cyclops was born as Scott Summers, the son of pilot Christopher Summers. After losing his parents in a flying accident, Scott was adopted by Jack Winters, a mutant criminal. Soon after Scotts powers manifested, Jack abused Scott and forced him to help him commit crimes, until he was saved by Charles Xavier and became the first member of the X-men. ";
  } else if (name == "beast" || name == "hank mccoy") {
    document.getElementById("mainimg").src = "images/beast.jpg";
    document.getElementById("name").innerHTML = "Beast";
    document.getElementById("quote").innerHTML =
      '"Still, anyone who looks like I do has to find his fun when he can."';
    document.getElementById("box").style.backgroundColor = "lightblue";
    document.getElementById("description").style.fontSize = "small";
    document.getElementById("description").style.textAlign = "left";
    document.getElementById("description").style.padding =
      "10px 15px 20px 30px";
    document.getElementById("stats").style.fontSize = "small";
    document.getElementById("stats").style.display = "unset";
    document.getElementById("height").innerHTML = " 5'11";
    document.getElementById("weight").innerHTML = " 355lbs";
    document.getElementById("born").innerHTML = " Dunfee, Illinois";
    document.getElementById("abilities").innerHTML =
      "Superhuman Strength, agility, endurance";
    document.getElementById("origin").innerHTML =
      "Beast was born as Henry McCoy, son of Norton McCoy, a worker at a nuclear power plant. After being exposed to massive amounts of radiation that affected his genes, his son Hank was born a mutant with his unusually large hands and feet. After being recruited by Charles Xavier, Hank developed a serum that was meant to supress his mutant genes. This serum backfired and caused physical changes that enhanced his agility and strength, as well as causing him to grow fangs, pointed ears, and fur all over his body.  ";
  } else if (name == "charles xavier" || name == "professor x") {
    document.getElementById("mainimg").src = "images/charles.jpg";
    document.getElementById("name").innerHTML = "Professor X";
    document.getElementById("quote").innerHTML =
      '“Just because someone stumbles and loses their path, doesnt mean theyre lost forever"';
    document.getElementById("box").style.backgroundColor = "white";
    document.getElementById("description").style.fontSize = "small";
    document.getElementById("description").style.textAlign = "left";
    document.getElementById("description").style.padding =
      "10px 15px 20px 30px";
    document.getElementById("stats").style.fontSize = "small";
    document.getElementById("stats").style.display = "unset";
    document.getElementById("height").innerHTML = " 6'0";
    document.getElementById("weight").innerHTML = " 190lbs";
    document.getElementById("born").innerHTML = " New York City, New York";
    document.getElementById("abilities").innerHTML = "Telepathy, ";
    document.getElementById("origin").innerHTML =
      "Professor X was born Charles Xavier, son of nuclear researcher Brian Xavier. After graduating highschool at the age of 16, Charles went on to get his bachelor's degree in biology in 2 years. He was then accepted into  England's prestigious Oxford University, where he earned degrees in genetics and biophysics. Severa years later, after countless adventures such as stopping Hydra and joining the army, Xavier decided to locate and recruit young mutants to train them to use their powers. This lead to the creation of the original X-men, Cyclops, Iceman, Angel, Beast and Jean.  ";
  } else if (name == "gambit" || name == "remy lebeau") {
    document.getElementById("mainimg").src = "images/gambit.jpg";
    document.getElementById("name").innerHTML = "Gambit";
    document.getElementById("quote").innerHTML =
      '"Relax Darling. I wrested alligators before I could write my own name. This just feels like goin home."';
    document.getElementById("box").style.backgroundColor = "rgb(177,156,217)";
    document.getElementById("description").style.fontSize = "small";
    document.getElementById("description").style.textAlign = "left";
    document.getElementById("description").style.padding =
      "10px 15px 20px 30px";
    document.getElementById("stats").style.fontSize = "small";
    document.getElementById("stats").style.display = "unset";
    document.getElementById("height").innerHTML = " 6'1";
    document.getElementById("weight").innerHTML = " 175lbs";
    document.getElementById("born").innerHTML = " New Orleans, Louisiana";
    document.getElementById("abilities").innerHTML =
      "Transforms potential energy to kinetic energy ";
    document.getElementById("origin").innerHTML =
      "Gambit was born an orphan named Remy, who spent his time roaming the streets of New Orleans, Louisiana. He was adopted by Jean-Luc LeBeau, the head of the Thieves Guild.   ";
  }
}
function displayMessage() {
  // Declaring Variables
  let steal = document.getElementById("steal").value;
  let insult = document.getElementById("insult").value;
  let battleshout = document.getElementById("battleshout").value;
  let cool = document.getElementById("cool").value;
  let yell = document.getElementById("yell").value;

  // Output Message When Button Is Clicked
  let message =
    "Wolverine snuck up behind Cyclops and snatched his " +
    steal +
    " and started running while calling Cyclops a " +
    insult +
    ". Cyclops spun around and screamed " +
    battleshout +
    " while sprinting at Wolverine. Though, Wolverine instinctively sliced open Cyclops visor, and stated " +
    cool +
    ". As Wolverine was walking away, he could still hear Cyclops yelling the word " +
    yell +
    ".";

  document.getElementById("output3").innerHTML = message;
}
function getCharacter() {
  let randNum = Math.random();

  if (randNum < 1) {
    let randCard = Math.random();

    if (randCard < 0.1) {
      numWolverine++;
      document.getElementById("wolverine").innerHTML = numWolverine;
      resultsEl.innerHTML += '<img src="images/wolverine.jpg">';
    } else if (randCard < 0.2) {
      numCrawler++;
      document.getElementById("crawler").innerHTML = numCrawler;
      resultsEl.innerHTML += '<img src="images/Nightcrawler.jpg">';
    } else if (randCard < 0.3) {
      numStorm++;
      document.getElementById("storm").innerHTML = numStorm;
      resultsEl.innerHTML += '<img src="images/storm.png">';
    } else if (randCard < 0.4) {
      numDeadpool++;
      document.getElementById("deadpool").innerHTML = numDeadpool;
      resultsEl.innerHTML += '<img src="images/Deadpool.png">';
    } else if (randCard < 0.5) {
      numCyclops++;
      document.getElementById("cyclops").innerHTML = numCyclops;
      resultsEl.innerHTML += '<img src="images/Cyclops.jpg">';
    } else if (randCard < 0.6) {
      numGambit++;
      document.getElementById("gambit").innerHTML = numGambit;
      resultsEl.innerHTML += '<img src="images/gambit.jpg">';
    } else if (randCard < 0.7) {
      numBeast++;
      document.getElementById("beast").innerHTML = numBeast;
      resultsEl.innerHTML += '<img src="images/beast.jpg">';
    } else if (randCard < 0.8) {
      numXavier++;
      document.getElementById("xavier").innerHTML = numXavier;
      resultsEl.innerHTML += '<img src="images/charles.jpg">';
    } else if (randCard < 0.9) {
      numIceman++;
      document.getElementById("iceman").innerHTML = numIceman;
      resultsEl.innerHTML += '<img src="images/Iceman.jpg">';
    } else if (randCard < 1) {
      numCable++;
      document.getElementById("cable").innerHTML = numCable;
      resultsEl.innerHTML += '<img src="images/cable.jpg">';
    }
  }
}
function plus10() {
  for (let n = 0; n < 10; n++) {
    getCharacter();
  }
}
