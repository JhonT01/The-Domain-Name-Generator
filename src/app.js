/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  generador(pronoun, adj, noun, domain);
};

let pronoun = ["the", "our", "last"];
let adj = ["great", "big", "Of"];
let noun = ["jogger", "racoon", "Us"];
let domain = [".com", ".es", ".org"];

const generador = (pronoun, adj, noun, domain) => {
  for (const parte1 of pronoun) {
    for (const parte2 of adj) {
      for (const parte3 of noun) {
        for (const parte4 of domain) {
          console.log(parte1 + parte2 + parte3 + parte4);
        }
      }
    }
  }
};
