function main(){
    alert("To enter this website, you must prove that you are a true Seahawks and Geno Smith fan");
    numWins = getData();
    let numTries = 1;
    while (!validation()) {
        if (numTries >= 999){            //up to 999 tries
            alert("ok, you broke me");
            break;
        } 
        alert("Let's try that again");
        numTries ++;
        numWins = getData();
    }
}

function getData(){
    let data = Number(prompt("How many wins will the Seahawks have this year?"));
    return data;
}

function validation(){
    if (isNaN(numWins)) { // checks to see if it's a number
        alert("Invalid entry.");
        return false
    } else if ((numWins > 17)) { // checks for unrealistic number
        document.write(numWins  + "??? This is American football we are talking about... There's only 17 games.");
        return true
    } else if (numWins > 10) { // Lots of wins - fan
        document.write(numWins + "! I like how you think");
        return true
    } else if (numWins < 5) { // not many wins - not a fan
        document.write(numWins + "? Are you sure you're on the right website?  This is a Seahawk / Geno Smith FAN website");
        return true
    } else { // intermediate level of wins
        document.write(numWins + "... You may enter this time, fair weather fan.");
        return true
    }
}

function stars(){
    let stars = prompt("How would you rate Geno's play this year (1-5 stars)");
    // if bad entry, prompt again
    while(stars < 1 || stars > 5){
        stars = prompt("Bad entry.  Try again.  (1-5 stars)")
    }
    // Good entry: display the number of stars
    for (let i = 0; i < stars; i++) {
        document.write("<img src='star.png' alt='picture of star'></img>")
        document.write(i+1)
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