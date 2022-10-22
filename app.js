alert("To enter this website, you must prove that you are a true Seahawks and Geno Smith fan")
let numWins = prompt("How many wins will the Seahawks have this year?")

if ((numWins < 0 || numWins > 17)) {
    document.write(numWins  + "??? This is American football we are talking about...")
} else if (numWins > 10) {
    document.write(numWins + "! I like how you think")
} else if (numWins < 5) {
    document.write(numWins + "? Are you sure you're on the right website?")
} else {
    document.write(numWins + "... You may enter, fair weather fan.")
}

function yesButton(){
        var ImageID = document.getElementById('isGenoMVP');
        ImageID.src = "yes.gif"
        ImageID.style.display = "initial"
    }
    
    function noButton(){
        var ImageID = document.getElementById('isGenoMVP');
        ImageID.src = "no.gif"
        ImageID.style.display = "initial"
    }


    if (condition) {
        
    } else {
        
    }