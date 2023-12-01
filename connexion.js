class Personne {
    constructor(nom, prenom, email, password) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.password = password;
    }
}
let dataClient = []
let stringDataClient = localStorage.getItem("dataClient");
if (stringDataClient) {
    dataClient = JSON.parse(stringDataClient);
}

/**********************************************************
 *                       Connexion
 **********************************************************/
const inputEmail = document.getElementById("connexion-email");
const inputPassword = document.getElementById("connexion-password");
const connexionBtn = document.getElementById("connexion-btn");
let profil;

connexionBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    localStorage.setItem("connexion", "non connecté")
    console.log(dataClient);
    
    for (const client of dataClient) {
        if(inputEmail.value === client.email && inputPassword.value === client.password){
            profil = client;
            break;
        }
    }
    if(profil){
        alert("vous etes connecté")
        localStorage.setItem("connexion", "connecté")
        location.assign('page-accueil.html')
    }else{
        alert("Mauvais identifiant ou mdp")
        localStorage.setItem("connexion", "non connecté")
    }
    
})




