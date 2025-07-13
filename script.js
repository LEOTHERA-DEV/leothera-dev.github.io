function loadNavBar(){
    var navbar = document.getElementById("navigation-bar");
    if(navbar.style.display === "none"){
        navbar.style.display = "flex";
    }
    else{
        navbar.style.display = "none";
    }
}

function loadImages(){
    var contentSection = document.getElementById("gallery-content-section");
    const count = 13;
    for (i = 0; i < count; i++){
        var path = `../images/gallery/${i}.png`;
        let image = document.createElement('img');
        image.src = path;
        image.draggable = false;
        image.setAttribute("onclick", `previewImage(${i})`);
        contentSection.appendChild(image);
    }
}

function previewImage(id){
    var path = `../images/gallery/${id}.png`;
    var overlayImg = document.getElementById("image-preview");
    overlayImg.src = path;
    document.getElementById("gallery-overlay").style.display = "flex";
}

function hideOverlay(){
    document.getElementById("gallery-overlay").style.display = 'none';
}