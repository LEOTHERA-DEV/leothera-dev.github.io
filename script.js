function setAge() {
  var today = new Date();
  var birthDate = new Date("2002-08-04");
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  document.getElementById("age-string").innerHTML = age;
}

function setLocalTime() {
  const t_element = document.getElementById("timezone");

  if (!t_element) return;

  const now = new Date();
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Johannesburg",
  };
  const timeFormatted = now.toLocaleTimeString([], options);

  t_element.textContent = timeFormatted;
}

function loadImages() {
  var contentSection = document.getElementById("gallery-content");
  const count = 28;
  for (i = 0; i < count; i++) {
    var path = `../gallery/images/${i}.png`;
    let image = document.createElement("img");
    image.src = path;
    image.draggable = false;
    image.setAttribute("onclick", `previewImage(${i})`);
    contentSection.appendChild(image);
  }
}

function previewImage(id) {
  var path = `../gallery/images/${id}.png`;
  var overlayImg = document.getElementById("image-preview");
  overlayImg.src = path;
  document.getElementById("gallery-overlay").style.display = "flex";
}

function hideOverlay() {
  document.getElementById("gallery-overlay").style.display = "none";
}

function displayGameOverlay(id) {
  fetch("info.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("game-title-slot").innerText = data[id]["title"];
      document.getElementById("game-image-slot-1").src = data[id]["image-1"];
      document.getElementById("game-description-slot-1").innerText =
        data[id]["info-1"];
      document.getElementById("game-image-slot-2").src = data[id]["image-2"];
      document.getElementById("game-description-slot-2").innerText =
        data[id]["info-2"];
    })
    .catch((error) => console.error("Unable to load game information."));
  // This will handle displaying the selected game's information.
  // For now, it'll just toggle the overlay's visibility
  document.getElementById("game-info-container").style.display = "flex";
}

function hideGameOverlay() {
  document.getElementById("game-info-container").style.display = "none";
}

setLocalTime();
setInterval(setLocalTime, 1000);
