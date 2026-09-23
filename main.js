const randomWord = document.getElementById("random-word");
const date = new Date()
const button = document.getElementById("theme-toggle");
const link = document.getElementById("link");

const gamesTab = document.getElementById("games");

gamesTab.onclick = function() { // takes the user to games page, do this for websites + other
    window.location.href = "games.html";
}

var words = ["Cheese", "Tomfoolery", "Purple", "Germany", "Cloud", "Apple","Kangaroo"]
var word;

function changeTheme(){

    if (link.getAttribute("href") == "style.css") {
        link.setAttribute("href", "styledark.css");
          
    } else {
      link.setAttribute("href", "style.css");
    }
}

for (let i = 0; i < words.length; i++){
    if (date.getDay() == i){
        word = words[i];
    }
}

//--------------------------------------------------

onload = function() {
    randomWord.innerHTML = "Random word of the day: " + word;
    document.getElementById("current-date").innerHTML = "Today's date: " + date.toLocaleDateString();
}





