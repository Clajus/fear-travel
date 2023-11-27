const listeDestinations = [
    {
        id : "dracula",
        nom : "Le château de Dracula",
        img1 : "",
        img2 : "",
        img3 : "",
        nomLogement : "Chambre dans le château -  Chez Vlad - Bran, Roumanie",
        imageHote : "",
        descriptionLogement : "200€/nuit",
        attraction : ""
    },
    {
        id : "loch",
        nom : "Le Loch Ness",
        img1 : "",
        img2 : "",
        img3 : "",
        nomLogement : "Péniche sur le lac - Chez Denver - Inverness, Ecosse",
        imageHote : "",
        descriptionLogement : "",
        attraction : ""
    },
    {
        id : "poupées",
        nom : "L'île des poupées",
        img1 : "photo-ile-des-poupées/cabane-ile-des-poupées.jpg",
        img2 : "photo-ile-des-poupées/interieur-cabane2.jpg",
        img3 : "photo-ile-des-poupées/iledespoupées.jpg",
        nomLogement : "Cabane au bord du lac - Chez Annabelle - Mexico, Méxique ",
        imageHote : "photo-ile-des-poupées/anabelle.png",
        descriptionLogement : "110€ la nuit <br> Cabane en bordure de Lac <br> Détente, Calme, Nature, Frissons <br> Terrasse suspendue <br> Poêle à bois avec Bois 100% <br> Draps et couette à disposition",
        attraction : "Paintball <br> Pédalo, Paddle "
    },
    {
        id : "suicides",
        nom : "La forêt des suicides",
        img1 : "photo-foret-des-suicides/foret-des-suicides.jpg",
        img2 : "photo-foret-des-suicides/cabane-arbre-foret.jpg",
        img3 : "photo-foret-des-suicides/interieur-ile-des-poupées.jpg",
        nomLogement : "Cabane dans les arbres - Chez Sylvebarbe - Narusawa, Japon",
        imageHote : "photo-foret-des-suicides/silvebarbe.jpg",
        descriptionLogement : "160€ la nuit <br> Cabane suspendue dans la forêt <br> Détente, Calme, Nature, Dé(com)pression",
        attraction : "Accrobranche <br> tire à l'arc"
    },
    {
        id : "pénitencier",
        nom : "Le pénitencier d'Eastern State",
        img1 : "",
        img2 : "",
        img3 : "",
        nomLogement : "Cellule au coeur de la prison - Chez - Philadelphie, Etats-Unis",
        imageHote : "", 
        descriptionLogement : "",
        attraction : ""
    },
    {
        id : "club",
        nom : "Le Hell Fire Club",
        img1 : "",
        img2 : "",
        img3 : "",
        nomLogement : "Maison d'hôtes - chez Bill - Dublin, Irlande",
        imageHote : "",
        descriptionLogement : "",
        attraction : ""
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
const descriptionLogement = document.querySelector(".Description p");
const attractionTitre = document.querySelector(".Attractions h4");
const attractionMessage = document.querySelector(".Attractions p");

nomLogement.textContent = destinationChoisie.nomLogement;
descriptionLogement.innerHTML = destinationChoisie.descriptionLogement;
attractionTitre.textContent= "Ce que propose le logement";
attractionMessage.innerHTML = destinationChoisie.attraction;

