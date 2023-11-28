const listeDestinations = [
    {
        id : "dracula",
        nom : "Le château de Dracula",
        img1 : "Photos-Contes/Château Bran.jpg",
        img2 : "photo-dracula/cercueil.jpg",
        img3 : "photo-dracula/lit.jpg",
        nomLogement : "Chambre dans le château -  Chez Vlad - Bran, Roumanie",
        imageHote : "Photos-Contes/Comte Dracula.png",
        nombreDePersonne: "2 à 4 personnes",
        descriptionLogement : "200€ la nuit <br> Chambre avec lit double ou cercueils au choix <br> Formule ALL EXCLUSIVE possible <br> Calme et Authenticité <br> Draps et couette à disposition",
        attraction : "Visite guidée du château <br> Chasse à cour"
    },
    {
        id : "loch",
        nom : "Le Loch Ness",
        img1 : "Photo-LochNess/Château du Loch Ness.jpg",
        img2 : "Photo-LochNess/voilier.jpg",
        img3 : "Photo-LochNess/voilier interieur.jpg",
        nomLogement : "Une chambre dans un voilier 4 personnes - Chez Jason - Inverness, Ecosse",
        imageHote : "Photo-LochNess/jason.jpg",
        descriptionLogement : "150€ la nuit <br> Une chambre avec un lit double + un lit simple <br> Repas cuisinés par notre hôte en supplément<br>",
        attraction : "Possibilité d'assister au repas du monstre <br> Paddle, planche à voile, kitesurf"
    },
    {
        id : "poupées",
        nom : "L'île des poupées",
        img1 : "photo-ile-des-poupées/cabane-ile-des-poupées.jpg",
        img2 : "photo-ile-des-poupées/interieur-cabane2.jpg",
        img3 : "photo-ile-des-poupées/iledespoupées.jpg",
        nomLogement : "Cabane au bord du lac - Chez Annabelle - Mexico, Méxique ",
        imageHote : "photo-ile-des-poupées/anabelle.png",
        descriptionLogement : "110€ la nuit <br> Deux lits superposés <br> Détente, Calme, Nature, Frissons <br> Terrasse suspendue <br> Poêle à bois avec Bois 100%",
        attraction : "Paintball <br> Pédalo, Paddle"
    },
    {
        id : "suicides",
        nom : "La forêt des suicides",
        img1 : "photo-foret-des-suicides/foret-des-suicides.jpg",
        img2 : "photo-foret-des-suicides/cabane-arbre-foret.jpg",
        img3 : "photo-foret-des-suicides/interieur-ile-des-poupées.jpg",
        nomLogement : "Cabane dans les arbres - Chez Sylvebarbe - Narusawa, Japon",
        imageHote : "photo-foret-des-suicides/silvebarbe.jpg",
        descriptionLogement : "160€ la nuit <br> Un lit double + un lit superposé <br> Détente, Calme, Nature, Dé(com)pression",
        attraction : "Accrobranche <br> Tire à l'arc"
    },
    {
        id : "pénitencier",
        nom : "Le pénitencier d'Eastern State",
        img1 : "Photos-Contes/Eastern State Penitentiary 2.png",
        img2 : "photo-pénitencier/crtsy-eastern-state-penitentiary.jpg",
        img3 : "photo-pénitencier/cellule.jpg",
        nomLogement : "Cellule au coeur de la prison - Chez Hannibal Lecter - Philadelphie, Etats-Unis",
        imageHote : "photo-pénitencier/Hannibal.webp", 
        descriptionLogement : "70€ la nuit<br>Chambres aménagées avec un lit simple par cellule <br> Immersion totale <br> Cantine et refectoire aménagé pour le repas",
        attraction : "Escape game"
    },
    {
        id : "club",
        nom : "Le Hell Fire Club",
        img1 : "photo-hell-fire/Hell_Fire_Club_Dublin_at_Dawn.jpg",
        img2 : "photo-hell-fire/campingtente.png",
        img3 : "photo-hell-fire/piscine.jpg",
        nomLogement : "Camping en tente - chez Billy - Dublin, Irlande",
        imageHote : "photo-hell-fire/billy.png",
        descriptionLogement : "40€ la nuit<br>Tentes 2 à 4 personnes<br>Camping aménagé avec piscine surveillée<br>Aventure, Nature, Communauté",
        attraction : "Atelier culinaire <br> Karaoké <br> Piscine"
    }

]


const params = new URLSearchParams(document.location.search);
const destination = params.get("destination");

const titrePage = document.querySelector("h1");
const destinationChoisie = listeDestinations.find(dest => dest.id == destination);
titrePage.textContent = destinationChoisie.nom;

const img1 = document.querySelector("#image1");
const img2 = document.querySelector("#image2");
const img3 = document.querySelector("#image3");


img1.src = destinationChoisie.img1;
img2.src = destinationChoisie.img2;
img3.src = destinationChoisie.img3;

const imgHote = document.querySelector("#image-hote");
imgHote.src = destinationChoisie.imageHote;


const nomLogement = document.getElementById("nom-logement");
const nombreDePersonne = document.getElementById("Nombre-de-personne h5")
const descriptionLogement = document.querySelector(".Description p");
const attractionTitre = document.querySelector(".Attractions h4");
const attractionMessage = document.querySelector(".Attractions p");

nomLogement.textContent = destinationChoisie.nomLogement;
descriptionLogement.innerHTML = destinationChoisie.descriptionLogement;
attractionTitre.textContent= "Ce que propose le logement";
attractionMessage.innerHTML = destinationChoisie.attraction;

