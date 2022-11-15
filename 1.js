import rl from "readline-sync";

const voorNaam = rl.question("Voornaam? ");
const familieNaam = rl.question("Familienaam? ");
const straatHuis = rl.question("Straat en huisnummer? ");
const postCode = rl.question("Postcode? ");
const gemeente = rl.question("Gemeente? ");

const topBottom = "-";
const upperLower = topBottom.repeat(straatHuis.length);

const content = `${upperLower}\n|  ${voorNaam.charAt(
    0
  ).toUpperCase()}. ${familieNaam.charAt(0).toUpperCase(0)}${familieNaam.substring(1)} |\n|  ${straatHuis}  |\n|  ${postCode} ${gemeente}  |\n${upperLower}`;


console.log(content)



// foutmeldingen toevoegen plus einde mooi maken 