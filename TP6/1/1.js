$(document).ready(() => {
  var paragraphe = $("p");
  var image = $("img");
  paragraphe.on("click", () => {
    paragraphe.css("color", "blueviolet");
    paragraphe.css("text-decoration-color", "blueviolet");
    image.animate(
      {
        height: "0px",
        width: "0px",
      },
      3000
    );
  });
});
