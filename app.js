fanCheck();

function fanCheck(){
    alert("To enter this website, you must prove that you are a true Seahawks and Geno Smith fan");
    let numWins = Number(prompt("How many wins will the Seahawks have this year?"));

    if (isNaN(numWins)) { // checks to see if it's a number
        alert("Invalid entry.");
    } else if ((numWins > 17)) { // checks for unrealistic number
        document.write(numWins  + "??? This is American football we are talking about... There's only 17 games.");
    } else if (numWins > 10) { // Lots of wins - fan
        document.write(numWins + "! I like how you think");
    } else if (numWins < 5) { // not many wins - not a fan
        document.write(numWins + "? Are you sure you're on the right website?  This is a Seahawk / Geno Smith FAN website");
    } else { // intermediate level of wins
        document.write(numWins + "... You may enter, fair weather fan.");
    }
}

function yesButton(){ // displays picture on click
    var ImageID = document.getElementById('isGenoMVP');
    ImageID.src = "yes.gif";
    ImageID.style.display = "initial";
}
    
function noButton(){ // displays picture on click
    var ImageID = document.getElementById('isGenoMVP');
    ImageID.src = "no.gif";
    ImageID.style.display = "initial";
}