$(document).ready(() => {
  var valider = $("#valider");
  var pasDeBoisson = $("#boissonNon");
  var pizza;
  var pizza_i;
  var boisson;
  var boisson_i;
  var prix = 0;
  $('input[name="pizza"]').on("click", () => {
    $("#quantitePizza").val("1");
  });

  pasDeBoisson.on("click", () => {
    $("#quantiteBoisson").val("0");
    $("#quantiteBoisson").prop("disabled", true);
    $("#huile").prop("disabled", true);
  });
  $('input[name="boisson"]')
    .not(pasDeBoisson)
    .on("click", () => {
      $("#quantiteBoisson").val("1");
      $("#quantiteBoisson").prop("disabled", false);
    });
  $(document).on("change", () => {
    pizza_i = $("#quantitePizza").val();
    boisson_i = $("#quantiteBoisson").val();
    prix = pizza_i * 3 + boisson_i * 2;
    $("#prix").text(prix);
  });
  valider.on("click", () => {
    pizza = $('input[name="pizza"]:checked').val();
    pizza_i = $("#quantitePizza").val();
    if ($("#huile").is(":checked")) var huile = "avec";
    else var huile = "sans";
    boisson = $('input[name="boisson"]:checked').val();
    boisson_i = $("#quantiteBoisson").val();
    var nom = $("#nom").val();
    var phone = $("#phone").val();
    var adresse = $("#adresse").val();
    var email = $("#email").val();
    if ((pizza_i = 0)) commandePizza = "Pas de Pizza";
    else var commandePizza = pizza_i + " " + pizza + " " + huile + " huile\n ";
    var commandeBoisson = boisson_i + " " + boisson;
    var commentaires = "\nCommentaires : " + $("#commentaires").val();
    var commandePrix = "\nPrix : " + prix + "€";
    var coordonnees =
      "\n\nNom : " +
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
        commandePrix +
        coordonnees
    );
  });
});
