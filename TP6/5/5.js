$(document).ready(() => {
  var listeDesserts = $("#listeDesserts");
  var listePlats = $("#listePlats");
  var plats = $("#plats");
  var desserts = $("#desserts");
  listePlats.hide();
  listeDesserts.hide();

  plats.on("mouseenter", () => {
    listePlats.show();
  });
  plats.on("mouseleave", () => {
    listePlats.hide();
  });
  desserts.on("mouseenter", () => {
    listeDesserts.show();
  });
  desserts.on("mouseleave", () => {
    listeDesserts.hide();
  });
});
