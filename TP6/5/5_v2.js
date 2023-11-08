$(document).ready(() => {
  var listeDesserts = $("#listeDesserts");
  var listePlats = $("#listePlats");
  var plats = $("#plats");
  var desserts = $("#desserts");
  listePlats.hide();
  listeDesserts.hide();

  $("#divP").on("mouseenter", () => {
    listePlats.show();
  });
  $("#divP").on("mouseleave", () => {
    listePlats.hide();
  });
  $("#divD").on("mouseenter", () => {
    listeDesserts.show();
  });
  $("#divD").on("mouseleave", () => {
    listeDesserts.hide();
  });
});
