$(document).ready(() => {
  var queen = $("#queen");
  var king = $("#king");
  var lorem = $("p");
  king.on("click", () => lorem.show());
  queen.on("click", () => lorem.hide());
});
