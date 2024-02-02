function toggleMenu() {
  const hamburger = document.querySelector(".hamburger");
  const closing = document.querySelector(".closing");
  const ul = document.querySelector("ul");

  // Toggle between hamburger and closing images
  if (hamburger.style.display === "none") {
    hamburger.style.display = "block";
  } else {
    hamburger.style.display = "none";
  }

  if (closing.style.display === "none") {
    closing.style.display = "block";
  } else {
    closing.style.display = "none";
  }

  // Toggle the visibility of the container
  if (ul.style.display === "none" || ul.style.display === "") {
    ul.style.display = "block";
    hamburger.style.display = "none";
    closing.style.display = "block";
  } else {
    ul.style.display = "none";
    hamburger.style.display = "block";
    closing.style.display = "none";
  }
}
