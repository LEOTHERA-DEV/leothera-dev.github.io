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

setLocalTime();
setInterval(setLocalTime, 1000);
