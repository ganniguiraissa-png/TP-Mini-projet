


let tasks = [{
    id: 0,
    titre: "Vaisselle",
    description: "Faire la Vaisselle (laver les assiettes et les verres)",
    etat: false
},
{
    id: 1,
    titre: "Ranger",
    description: " Ranger la chambre ",
    etat: false

},
{
    id: 2,
    titre: "Courses",
    description: "Faire les courses",
    etat: false
}


];

let click = 0;

function validation() {
    if (click == 1) {
        function details(id) {
            const task = tasks.find(t => t.id === id); //chercher la tache par id //
            document.getElementById("titre").textContent = tasks.titre;
            document.getElementById("description").textContent = tasks.description;
            document.getElementById("etat").textContent = tasks.etat;
        }

    }
}
const button = document.getElementById('btn');
btn.addEventListener(('click', () => validation()))
