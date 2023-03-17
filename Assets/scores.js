 

// retieved the highscores from local storage 
 var printHighscores = function() {
    var highscores = JSON.parse(localStorage.getItem("highscores")) || []
    // sorts from highest to lowest
    highscores.sort(function(a,b){
        return b.score-a.score

    })
   // for each highscore, bot the initial and the score is added to the list
    for (let i=0; i<highscores.length;i++) {
        var li = document.createElement("li")
        li.setAttribute("style", "font-size: 1.5em; text-align: center; padding: 0.1em 2em 0.1em 0;")
        li.textContent = highscores[i].initials+' - '+highscores[i].score
        var ol = document.querySelector("#scores")
        ol.appendChild(li)
    }
 }

 printHighscores()

// removes from local storage and relaods the window so list appears empty
 var clearHighscores = function(){
    localStorage.removeItem("highscores")
    window.location.reload()
 }

 document.querySelector("#clearButton").onclick = clearHighscores

