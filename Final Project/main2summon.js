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

document.getElementById("mainImg").addEventListener("click", getCharacter);
document.getElementById("plus10").addEventListener("click", plus10);
document.getElementById("info2").addEventListener("click", displayInfo2);


function displayInfo2() {
  document.getElementById("name").innerHTML = "Information";
  document.getElementById("odds").innerHTML =
    "Common: Wolverine, Night Crawler, Storm, Deadpool, Cyclops, Gambit, Beast. Rare: Xavier, Iceman. Ultra Rare: Cable";
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
