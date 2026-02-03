function loadArtContainer(){
    var artRoot = document.getElementById("art-container");

    if(artRoot.style.display === "none"){
        artRoot.style.display = "block";
    }
    else{
        artRoot.style.display = "none";
    }
}
