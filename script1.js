let tasks = [ 
{ 
    id: 1, 
    title: "Faire la page d'accueil", 
} 
]; 

document.getElementById("bouton1").addEventListener("click", () => {
    const nouvelleTache = prompt("Entrez une nouvelle tâche :");
    if (nouvelleTache && nouvelleTache.trim() !== "") {
        const li = document.createElement("li");
        li.innerText = nouvelleTache;
        document.getElementById("liste").appendChild(li);
    }
});

