//  permet d'ouvrir le formulaire pour les chambres

let openFormChambre = false;

const chambres = document.getElementById("chambres");
chambres.addEventListener("click", () => {
    openFormChambre = !openFormChambre;
    checkOpenFormChambres();
});

const formChambres = document.querySelector(".form-chambres");

function checkOpenFormChambres() {
    if (openFormChambre) {
        formChambres.style.display = "block";
    } else {
        formChambres.style.display = "none";
    }
}

// modifier dynamiquement la réservation des chambes grâce aux inputs


const reservationChambres = {
    adult: 1,
    children: 0,
    room: 1
}

function pluriel(value){
    if(value > 1){
        return "s";
    }
    return "";
}

function displayRooms() {
    chambres.textContent = `
    ${reservationChambres.adult} adulte${pluriel(reservationChambres.adult)}. 
    ${reservationChambres.children}  enfant${pluriel(reservationChambres.children)}.
    ${reservationChambres.room}  chambre${pluriel(reservationChambres.room)}`;
}
displayRooms()

// Permet que les boutons - et + modifient l'input
//pour les adultes
const adultsDecrement = document.getElementById("adultsDecrement");
const adultsIncrement = document.getElementById("adultsIncrement");
const adultsInput = document.getElementById("adultsInput");

function incrementAdultInput() {
    adultsInput.value++;
    reservationChambres.adult = adultsInput.value;
    displayRooms()
}
function decrementAdultInput() {
    if (adultsInput.value > 1) {
        adultsInput.value--;
        reservationChambres.adult = adultsInput.value;
        displayRooms()
    }
}
adultsIncrement.addEventListener("click", incrementAdultInput);
adultsDecrement.addEventListener("click", decrementAdultInput);

// pour les enfants
const childrenDecrement = document.getElementById("childrenDecrement");
const childrenIncrement = document.getElementById("childrenIncrement");
const childrenInput = document.getElementById("childrenInput");

function incrementChildrenInput() {
    childrenInput.value++;
    reservationChambres.children = childrenInput.value;
    displayRooms()
}
function decrementChildrenInput() {
    if (childrenInput.value > 0) {
        childrenInput.value--;
        reservationChambres.children = childrenInput.value;
        displayRooms()
    }
}
childrenIncrement.addEventListener("click", incrementChildrenInput);
childrenDecrement.addEventListener("click", decrementChildrenInput);

// Pour chambres
const roomsDecrement = document.getElementById("roomsDecrement");
const roomsIncrement = document.getElementById("roomsIncrement");
const roomsInput = document.getElementById("roomsInput");

function incrementRoomInput() {
    roomsInput.value++;
    reservationChambres.room = roomsInput.value;
    displayRooms()
}

function decrementRoomInput() {
    if (roomsInput.value > 1) {
        roomsInput.value--;
        reservationChambres.room = roomsInput.value;
        displayRooms()

    }
}

roomsIncrement.addEventListener("click", incrementRoomInput);
roomsDecrement.addEventListener("click", decrementRoomInput);

// renvoyer vers la page de réservation
const destination = document.getElementById("destination");
const reservation =  document.getElementById("btn-reservation");
reservation.addEventListener("click",()=>{
    window.location.href = `reservation.html?destination=${destination.value}`
})






