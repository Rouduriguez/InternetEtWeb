$(document).ready(() => {
  var boutonJ = $("#boutonJ");
  var boutonQ = $("#boutonQ");
  var boutonK = $("#boutonK");
  var div = $("div");
  var divQ = $("#divQ");
  var clear = $("#clear");
  div.hide();
  boutonJ.on("click", () => {
    div.slideUp("slow");
  });
  boutonK.on("click", () => {
    div.show("slow");
  });
  boutonQ.on("click", () => {
    divQ.show("slow");
  });
  clear.on("click", () => {
    div.hide("slow");
  });
});
