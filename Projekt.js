
let d = document
var Autohinterteil = new Array();
var Autovorderteil = new Array();
var Autooberteil = new Array();
var Autounterteil = new Array();
function move(hinten, mitte, vorne) {

if(d.getElementById(mitte).src.match("R.jpeg") && d.getElementById(vorne).src.match("i.png"))
  {
      d.getElementById(hinten).src = "i.png";
      d.getElementById(mitte).src = "L.jpeg";
      d.getElementById(vorne).src = "R.jpeg";
  }
else if (d.getElementById(mitte).src.match("L.jpeg") && d.getElementById(hinten).src.match("i.png"))
  {
      d.getElementById(vorne).src = "i.png";
      d.getElementById(hinten).src = "L.jpeg";
      d.getElementById(mitte).src = "R.jpeg";
  }
}

function UpDown(oben, mitte, unten) {
  if(d.getElementById(mitte).src.match("U.jpeg") && d.getElementById(oben).src.match("i.png"))
    {
        d.getElementById(unten).src = "i.png";
        d.getElementById(mitte).src = "D.jpeg";
        d.getElementById(oben).src = "U.jpeg";
    }
  else if (d.getElementById(mitte).src.match("D.jpeg") && d.getElementById(unten).src.match("i.png"))
    {
        d.getElementById(oben).src = "i.png";
        d.getElementById(mitte).src = "U.jpeg";
        d.getElementById(unten).src = "D.jpeg";
    }
}

function win()
{
  if (d.getElementById('outtwo').src.match('R.jpeg')) {
      window.alert("You have Won!")
  }
}
function LevelLoad() {
  d.getElementById('eins').src = "i.png"
  d.getElementById('zwei').src = "i.png"
  d.getElementById('drei').src = "i.png"
  d.getElementById('vier').src = "i.png"
  d.getElementById('fünf').src = "i.png"
  d.getElementById('sechs').src = "i.png"
  d.getElementById('sieben').src = "i.png"
  d.getElementById('acht').src = "i.png"
  d.getElementById('neun').src = "i.png"
  d.getElementById('zehn').src = "i.png"
  d.getElementById('elf').src = "i.png"
  d.getElementById('zwölf').src = "i.png"
  d.getElementById('dreizehn').src = "i.png"
  d.getElementById('vierzehn').src = "i.png"
  d.getElementById('fünfzehn').src = "i.png"
  d.getElementById('sechszehn').src = "i.png"
  d.getElementById('siebzehn').src = "i.png"
  d.getElementById('achtzehn').src = "i.png"
  d.getElementById('neunzehn').src = "i.png"
  d.getElementById('zwanzig').src = "i.png"
  d.getElementById('einundzwanzig').src = "i.png"
  d.getElementById('zweiundzwanzig').src = "i.png"
  d.getElementById('dreiundzwanzig').src = "i.png"
  d.getElementById('vierundzwanzig').src = "i.png"
  d.getElementById('fünfundzwanzig').src = "i.png"
  d.getElementById('sechsundzwanzig').src = "i.png"
  d.getElementById('siebenundzwanzig').src = "i.png"
  d.getElementById('achtundzwanzig').src = "i.png"
  d.getElementById('neunundzwanzig').src = "i.png"
  d.getElementById('dreißig').src = "i.png"
  d.getElementById('einunddreißig').src = "i.png"
  d.getElementById('zweiunddreißig').src = "i.png"
  d.getElementById('dreiunddreißig').src = "i.png"
  d.getElementById('vierunddreißig').src = "i.png"
  d.getElementById('fünfunddreißig').src = "i.png"
  d.getElementById('sechsunddreißig').src = "i.png"
  d.getElementById('siebenunddreißig').src = "i.png"
  d.getElementById('achtunddreißig').src = "i.png"
  d.getElementById('neununddreißig').src = "i.png"
  d.getElementById('vierzig').src = "i.png"
  d.getElementById('einundvierzig').src = "i.png"
  d.getElementById('zweiundvierzig').src = "i.png"
  d.getElementById('dreiundvierzig').src = "i.png"
  d.getElementById('vierundvierzig').src = "i.png"
  d.getElementById('fünfundvierzig').src = "i.png"
  d.getElementById('sechsundvierzig').src = "i.png"
  d.getElementById('siebenundvierzig').src = "i.png"
  d.getElementById('achtundvierzig').src = "i.png"
  d.getElementById('neunundvierzig').src = "i.png"
  d.getElementById('outone').src = "i.png"
  d.getElementById('outtwo').src = "i.png"
}

function LevelLoadOne() {
  LevelLoad();
  d.getElementById('eins').src = "L.jpeg";
  d.getElementById('zwei').src = "R.jpeg";

  d.getElementById('zweiundzwanzig').src = "L.jpeg";
  d.getElementById('dreiundzwanzig').src = "R.jpeg";
}

function LevelLoadTwo() {
  LevelLoad();
  d.getElementById('siebzehn').src = "U.jpeg";
  d.getElementById('vierundzwanzig').src = "D.jpeg";

  d.getElementById('zweiundzwanzig').src = "L.jpeg";
  d.getElementById('dreiundzwanzig').src = "R.jpeg";
}

function LevelLoadThree() {
  LevelLoad();
  d.getElementById('siebzehn').src = "U.jpeg";
  d.getElementById('vierundzwanzig').src = "D.jpeg";

  d.getElementById('zehn').src = "L.jpeg";
  d.getElementById('elf').src = "R.jpeg";

  d.getElementById('zweiundzwanzig').src = "L.jpeg";
  d.getElementById('dreiundzwanzig').src = "R.jpeg";

}

function LevelLoadfour() {
  LevelLoad();
  d.getElementById('siebzehn').src = "U.jpeg";
  d.getElementById('vierundzwanzig').src = "D.jpeg";

  d.getElementById('zehn').src = "L.jpeg";
  d.getElementById('elf').src = "R.jpeg";

  d.getElementById('zweiundzwanzig').src = "L.jpeg";
  d.getElementById('dreiundzwanzig').src = "R.jpeg";

  d.getElementById('achtunddreißig').src = "L.jpeg";
  d.getElementById('neununddreißig').src = "R.jpeg";

}


function findeAutoPosition()
{

  Autovorderteil.length = 0;
  Autooberteil.length = 0;
  Autohinterteil.length = 0;
  Autounterteil.length = 0;

  var ausgeschriebeneZahlen = ['eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn','elf','zwölf','dreizehn','vierzehn','fünfzehn','sechszehn','siebzehn','achtzehn','neunzehn','zwanzig','einundzwanzig','zweiundzwanzig','dreiundzwanzig','vierundzwanzig','fünfundzwanzig','sechsundzwanzig','siebenundzwanzig','achtundzwanzig','neunundzwanzig','dreißig','einunddreißig','zweiunddreißig','dreiunddreißig','vierunddreißig','fünfunddreißig','sechsunddreißig','siebenunddreißig','achtunddreißig','neununddreißig','vierzig','einundvierzig','zweiundvierzig','dreiundvierzig','vierundvierzig','fünfundvierzig','sechsundvierzig','siebenundvierzig','achtundvierzig','neunundvierzig'];
  for (var zahl of ausgeschriebeneZahlen)
  {
    if (d.getElementById(zahl).src.match("L.jpeg"))
    {
      console.log("Auto Hinterteil auf Position:  " + zahl);
      Autohinterteil.push(zahl);
    }
    else
    if(d.getElementById(zahl).src.match("R.jpeg"))
    {
      console.log("Auto Vorderteil auf Position:  " + zahl);
      Autovorderteil.push(zahl);
    }
    else
    if(d.getElementById(zahl).src.match("U.jpeg"))
    {
        console.log("Auto Oberteil auf Position:  " + zahl);
        Autooberteil.push(zahl);
    }
    else
    if(d.getElementById(zahl).src.match("D.jpeg"))
    {
        console.log("Auto Unterteil auf Position:  " + zahl);
        Autounterteil.push(zahl);
    }

 }

}

function Spielspeichern() {
  findeAutoPosition();
  var Positionhinten = Autohinterteil.join(" ");
  var Positionvorne = Autovorderteil.join(" ");
  var Positionoben = Autooberteil.join(" ");
  var Positionunten = Autounterteil.join(" ");

  console.log("Values=" + Positionoben + "," + Positionhinten + "," + Positionunten + "," + Positionvorne);

  document.cookie = "Values=" + Positionoben + "," + Positionhinten + "," + Positionunten + "," + Positionvorne;
}

 function CookieAuslesen() {
  LevelLoad();
  var decodedCookie = decodeURIComponent(document.cookie);
  console.log(decodedCookie);
  var temp = decodedCookie.split("=");
  var meinarray = temp[1].split(",");
  console.log(meinarray);

  console.log("1" + meinarray[1]);
  if(meinarray[1]!=="")
  {
    for (var Position of meinarray[1] .split(" "))
    {
      console.log(Position);
        d.getElementById(Position).src = "L.jpeg";
    }
  }

console.log("2" + meinarray[2]);
if(meinarray[2]!=="")
{
  for (var Position of meinarray[2] .split(" "))
  {
console.log(Position);
      d.getElementById(Position).src = "D.jpeg";
  }
}

console.log("3" + meinarray[3]);
if(meinarray[3]!=="")
{
  for (var Position of meinarray[3] .split(" "))
  {
console.log(Position);
      d.getElementById(Position).src = "R.jpeg";
  }
}
if(meinarray[0]!=="")
{
  for (var Position of meinarray[0] .split(" "))
  {
      d.getElementById(Position).src = "U.jpeg";
  }
}


}
