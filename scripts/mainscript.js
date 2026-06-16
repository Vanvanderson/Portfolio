function openGame(evt, gameName){
    var i, gamecontent, menubutton
    gamecontent = document.getElementsByClassName("gamecontent");
    for (i = 0; i < gamecontent.length; i++) {
        gamecontent[i].style.display = "none";
    }
    menubutton = document.getElementsByClassName("menubutton");
    for (i = 0; i < menubutton.length; i++) {
        menubutton[i].className = menubutton[i].className.replace(" active", "");
    }
    document.getElementById(gameName).style.display = "block";
    evt.currentTarget.className += " active";
}