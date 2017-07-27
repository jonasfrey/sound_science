var startKey = 1;

var intervalHistory = {};

var playedIntervals = [];

var fileHostPath = "http://data.world-wide-weed.ch/sound/piano_notes/";

var consoleElement = document.getElementById("console");

var chromaticNotes = [
    'empty',
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
    'C1'
];



function playInterval(firstnote){
  
  if(firstnote == "random"){
    firstnote = Math.floor((Math.random() * 13) + 1);
  }
  var randomSecondNote = Math.floor((Math.random() * 13) + 1);
  
  playAudio(encodeURIComponent(chromaticNotes[firstnote]));
  playAudio2(encodeURIComponent(chromaticNotes[randomSecondNote]));
 
   playedIntervals = [firstnote, randomSecondNote];

  console.log(calculateInterval(firstnote, randomSecondNote));
  consoleElement.innerHTML = calculateInterval(firstnote, randomSecondNote);
}

function calculateInterval(note1, note2){
  
  var firstNote;
  var secondNote;
  
  if(note1 > note2){
    firstNote = note1;
    secondNote = note2;
  }
  if(note2 > note1){
    firstNote = note2;
    secondNote = note1;
  }
  if(note1 == note2){
    return "Prime";
  }
  
  var difference = firstNote - secondNote;
  
  
  switch(difference) {
    case 0:
        return "Prime / verminderte sekunde";
        break;
    case 1:
        return "Kleine Sekunde";
        break;
    case 2:
        return "Grosse Sekunde / verminderte Terz";
        break;
    case 3:
        return "Kleine Terz / übermässige Sekunde";
        break;
    case 4:
        return "Grosse Terz / verminderte Quarte";
        break;
    case 5:
        return "Reine Quarte / übermässige Terz";
        break;
    case 6:
        return "Tritonus / Verminderte Quinte / übermässige Quarte";
        break;
    case 7:
        return "Reine Quinte";
        break;
    case 8:
        return "Kleine Sexte / Übermässige Quinte";
        break;
    case 9:
        return "Grosse Sexte";
        break;
    case 10:
        return "Kleine Septime";
        break;
    case 11:
        return "Grosse Septime";
        break;
    case 12:
        return "Oktave";
        break;
    default:
        break;
}
  
}


function playAudio(wavename){
  console.log(decodeURIComponent(wavename));
  src = fileHostPath + wavename + "1.wav";
  
  var audio = new Audio(src);
  audio.play();
}

function playAudio2(wavename){


  
  console.log(decodeURIComponent(wavename));
  src = fileHostPath + wavename + "1.wav";
  
  if(wavename == "C1"){
    src = fileHostPath +"C2.wav";
  }
  var audio = new Audio(src);
  audio.play();
}

function repeatInterval(){

  playAudio(encodeURIComponent(chromaticNotes[playedIntervals[0]]));
  window.setTimeout(function(){
    playAudio2(encodeURIComponent(chromaticNotes[playedIntervals[1]]));
  }, 500)
  
}