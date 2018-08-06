// GLOBAL VARIABLES
// create words array
var words = ['zombie', 'killer', 'justice', 'rage', 'desolate', 'slayer', 'eerie', 'terror', 'murder', 'ghoul', 'dark', 'soul', 'lost', 'shadow', 'ghastly', 'grim', 'macabre', 'bleak'];
var lossCounter = 0;
var winCounter = 0;
var strikes = 0;
var removeImg = document.getElementById('countdown');
var goal, goalIndex, strikes;
var wrongGuesses = '';
var usedLetters = '';

// SET UP GAME

// generate random index
var goalIndex = Math.floor(Math.random() * words.length);
// create var for target word
var goal = words[goalIndex];
var randNum = document.getElementById('missionNumber');
randNum.textContent = goal.length;

// generate divs by length of goal var
var spaces = document.getElementById('letterSpace');
for (var i = 0; i < goal.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.className = 'letters';
    newDiv.setAttribute("display", "inline-block");
    newDiv.setAttribute("margin-right", "20px");
    newDiv.setAttribute("border-bottom", "5pt solid white");
    var newSection = document.createElement('section');
    newSection.className = "indi";
    newSection.id = 'letter' + i;
    var t = document.createTextNode("_");
    newSection.appendChild(t);
    newDiv.appendChild(newSection);
    spaces.appendChild(newDiv);
}

// RUN GAME
//listen for keyup
document.onkeyup = function (event) {
    var userGuess = event.key;
    if (usedLetters.indexOf(userGuess) > -1) {
        document.getElementById("messageSpace").innerHTML = "Choose anther letter.";
    } else {
        for (var i = 0; i < goal.length; i++) {
            if (userGuess !== goal.charAt(i)) {
                strikes++;
                strikes = Math.floor(strikes);
            } else {
                var index = goal.indexOf(userGuess);
                var letter = "letter" + i;
                document.getElementById(letter).innerHTML = goal.charAt(i).toUpperCase();
                winCounter++;
                usedLetters += userGuess;
            }
            if (strikes === goal.length) {
                wrongGuesses += " " + userGuess;
                var WrongGuesses = wrongGuesses.toUpperCase();
                document.getElementById('graveyard').textContent = WrongGuesses;
            }

        }
    }

    //reflect losses
    if (strikes === goal.length) {
        lossCounter++;
        strikes = 0;

        // generate and display feedback messages
        switch (lossCounter) {
            case 0:
                break;
            case 1:
                document.getElementById("messageSpace").innerHTML = "Don't lose your head!";
                var head = document.createElement("img");
                head.setAttribute("src", "assets/images/head.png");
                head.setAttribute("alt", "Head");
                document.getElementById("countdown").appendChild(head);
                break;
            case 2:
                document.getElementById("messageSpace").innerHTML = "Only four guesses left.";
                removeImg.removeChild(removeImg.lastChild);
                var torso = document.createElement("img");
                torso.setAttribute("src", "assets/images/headTorso.png");
                torso.setAttribute("alt", "Head and Torso");
                document.getElementById("countdown").appendChild(torso);
                break;
            case 3:
                document.getElementById("messageSpace").innerHTML = "One arm gone!";
                removeImg.removeChild(removeImg.lastChild);
                var larm = document.createElement("img");
                larm.setAttribute("src", "assets/images/headTorsoArm.png");
                larm.setAttribute("alt", "Head, Torso, and Left Arm");
                document.getElementById("countdown").appendChild(larm);
                break;
            case 4:
                document.getElementById("messageSpace").innerHTML = "Totally disarmed!";
                removeImg.removeChild(removeImg.lastChild);
                var lrarm = document.createElement("img");
                lrarm.setAttribute("src", "assets/images/headTorsoArms.png");
                lrarm.setAttribute("alt", "Head, Torso, Left Arm, and Right Arm");
                document.getElementById("countdown").appendChild(lrarm);
                break;
            case 5:
                document.getElementById("messageSpace").innerHTML = "One Foot in the grave!";
                removeImg.removeChild(removeImg.lastChild);
                var leg = document.createElement("img");
                leg.setAttribute("src", "assets/images/headTorsoArmsLeg.png");
                leg.setAttribute("alt", "Head, Torso, Both Arms, and Left Leg");
                document.getElementById("countdown").appendChild(leg);
                break;
            case 6:
                document.getElementById("messageSpace").innerHTML = "You've Died! <br> The word was " + goal + ".";
                removeImg.removeChild(removeImg.lastChild);
                var corpse = document.createElement("img");
                corpse.setAttribute("src", "assets/images/fullCorpse.png");
                corpse.setAttribute("alt", "Head, Torso, Both Arms, and Left Leg");
                document.getElementById("countdown").appendChild(corpse);
                break;
        }
    }

    strikes = 0;

    //check for winning condition
    if (winCounter === goal.length) {
        document.getElementById("messageSpace").innerHTML = "You've Won!";
        removeImg.removeChild(removeImg.lastChild);
        var survivor = document.createElement("img");
        survivor.setAttribute("src", "assets/images/survivor.png");
        survivor.setAttribute("alt", "Survivor!");
        document.getElementById("countdown").appendChild(survivor);
        winCounter = 0;
        lossCounter = 0;
        goal = '';
    }

}


