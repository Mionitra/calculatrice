
var res = document.getElementById("output"); // resultat
var cl = document.getElementById("calcul"); // affichage
// fonction input attribue aux valeur dans la paranthese(voir HTML)
var input = (number) => {
/* la valeur de l'output sera ajoute a celle des valeurs
   dans la paranthese dans html
*/
  res.value += number;
  calcul();
}
// fonction de '='
// eval(res.value) évalue l'expression contenue dans res.value. La fonction eval exécute le code JavaScript représenté sous forme de chaîne de caractères.
//Le résultat de cette évaluation est assigné de nouveau à res.value.
var result = () => {
  try{
    res.value = eval(res.value)
  }
/* Si une erreur se produit dans le bloc try, le contrôle passe au bloc catch.
Le bloc catch affiche une alerte avec le message "Syntax error". */
  catch(err){
    alert("Syntax error");
  }
}
 
var calcul = () => {
  cl.value = res.value;
}

var del = () => {
  res.value = res.value.slice(0,-1);//coupe de droite a gauche un a un
  cl.value = cl.value.slice(0,-1);//coupe de droite a gauche un a un
}

var clr = () => {
  res.value = "";// remplace toute la valeur de .output par ' '
  cl.value = "";
}