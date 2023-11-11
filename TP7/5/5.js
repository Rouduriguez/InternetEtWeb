$(document).ready(() => {
  var valider = $("#valider");
  var pasDeBoisson = $("#boissonNon");
  var pasDePizza = $("#pizzaNon");
  var pizza;
  var pizza_i;
  var boisson;
  var boisson_i;
  var prix = 0;

  // désactiver saisie Pizza
  pasDePizza.on("click", () => {
    $("#quantitePizza").val("0");
    $("#quantitePizza").prop("disabled", true);
    $("#huile").prop({ disabled: true, checked: false });
  });
  // activer saisie Pizza
  $('input[name="pizza"]')
    .not(pasDePizza)
    .on("click", () => {
      $("#quantitePizza").val("1");
      $("#quantitePizza").prop("disabled", false);
      $("#huile").prop("disabled", false);
    });

  // désactiver saisie Boisson
  pasDeBoisson.on("click", () => {
    $("#quantiteBoisson").val("0");
    $("#quantiteBoisson").prop("disabled", true);
  });
  // activer saisie Boisson
  $('input[name="boisson"]')
    .not(pasDeBoisson)
    .on("click", () => {
      $("#quantiteBoisson").val("1");
      $("#quantiteBoisson").prop("disabled", false);
    });

  // calcul et affichage du prix
  $(document).on("change", () => {
    pizza_i = $("#quantitePizza").val();
    boisson_i = $("#quantiteBoisson").val();
    prix = pizza_i * 3 + boisson_i * 2;
    $("#prix").text(prix);
  });
  // récolte des données et pop-up
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
    if (pizza_i === "0") var commandePizza = "Aucune Pizza\n";
    else var commandePizza = pizza_i + " " + pizza + " " + huile + " huile\n ";
    if (boisson_i === "0") var commandeBoisson = "Aucune boisson";
    else var commandeBoisson = boisson_i + " " + boisson;
    var commentaires = $("#commentaires").val();
    if (commentaires === "") var commandeCommentaires = "";
    else var commandeCommentaires = "\nCommentaires : " + commentaires;
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
      "Commande :\n" +
        commandePizza +
        commandeBoisson +
        commandeCommentaires +
        commandePrix +
        coordonnees
    );
  });
});
