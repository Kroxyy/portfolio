const images = document.querySelectorAll(".hover-image");
const message = document.getElementById("hoverMessage");

images.forEach((image) => {
  image.addEventListener("mouseover", function (event) {
    message.textContent = image.getAttribute("data-message");
    message.style.display = "block";
  });

  image.addEventListener("mousemove", function (event) {
    message.style.left = event.pageX + 10 + "px"; // Adjust the position as needed
    message.style.top = event.pageY + 10 + "px";
  });

  image.addEventListener("mouseout", function () {
    message.style.display = "none";
  });
});
