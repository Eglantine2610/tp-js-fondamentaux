console.log("Laboratoire prêt !");
const nom = "Eglantine";
let age = 17;
//nom = "ARCIS"; 
// Uncaught TypeError: Assignment to constant variable.

age = 18
console.log(age);

const motDePasseAttendu = "secret123";
let motDePasseutilisateur ="12345"; // Changez cette valeur pour tester
motDePasseUtilisateur = "secret123";
if (motDePasseUtilisateur === motDePasseAttendu) {
    console.log("Accès autorisé. Bienvenue !");
} else if (motDePasseUtilisateur.length< 8) {
    console.log("Accès refusé. Votre mot de passe est trop court (8 caractères min).");
} else {
    console.log("Accès refusé. Mot de passe incorrect.");
} 


