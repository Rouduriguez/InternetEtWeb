$(document).ready(() => {
  var ten = $("#ten");
  var king = $("#king");
  king.on("mouseenter", () => {
    king.attr("src", "../Ressources/images/diamonds_ace.gif");
  });
  king.on("mouseleave", () => {
    king.attr("src", "../Ressources/images/diamonds_king.gif");
  });
  ten.on("mouseenter", () => {
    ten.attr("src", "../Ressources/images/diamonds_ace.gif");
  });
  ten.on("mouseleave", () => {
    ten.attr("src", "../Ressources/images/diamonds_10.gif");
  });
});
