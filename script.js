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

const moi = {
    prenom: "Eglantine",
    nom: "ARCIS",
    age: 18,
    competences: ["HTML", "CSS"]
};
console.log(moi);
"Je m'appelle Eglantine ARCIS"
console.log(moi.prenom); // Affiche "VotrePrénom"

moi.age = 19;
console.log(moi.age)
moi.ville = "Paris";
console.log(moi.ville)
console.log(moi)

const notes = [12, 15, 9, 18];
console.log(notes[0]); // Affiche 12 console.log(notes[1]); // Affiche 15
console.log(notes.length); // Affiche 4