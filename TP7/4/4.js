$(document).ready(() => {
  var valider = $("#valider");
  var pasDeBoisson = $("#boissonNon");
  pasDeBoisson.on("click", () => {
    $("#quantiteBoisson").val("0");
    $("#quantiteBoisson").prop("disabled", true);
  });
  $('input[name="boisson"]')
    .not(pasDeBoisson)
    .on("click", () => {
      $("#quantiteBoisson").val("1");
      $("#quantiteBoisson").prop("disabled", false);
    });

  valider.on("click", () => {
    var pizza = $('input[name="pizza"]:checked').val();
    var pizza_i = $("#quantitePizza").val();
    if ($("#huile").is(":checked")) var huile = "avec";
    else var huile = "sans";
    var boisson = $('input[name="boisson"]:checked').val();
    var boisson_i = $("#quantiteBoisson").val();
    var nom = $("#nom").val();
    var phone = $("#phone").val();
    var adresse = $("#adresse").val();
    var email = $("#email").val();
    var commandePizza = pizza_i + " " + pizza + " " + huile + " huile\n ";
    var commandeBoisson = boisson_i + " " + boisson;
    var commentaires = "\nCommentaires : " + $("#commentaires").val();
    var coordonnees =
      "\nNom : " +
      nom +
      "\nNuméro de téléphone : " +
      phone +
      "\nAdresse : " +
      adresse +
      "\nMail : " +
      email;
    alert(
      "Commande :\n " +
        commandePizza +
        commandeBoisson +
        commentaires +
        coordonnees
    );
  });
});
