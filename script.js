


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
const button = document.getElementById('btn');
const detail = document.getElementById('droite')
let click = 0;
 button.addEventListener('click', function() {
 if (detail.style.display === 'none' || detail.style.display === '') {
          detail.style.display = 'flex'; 
          
        } else {
             detail.style.display = 'none';
            
        }
 });


