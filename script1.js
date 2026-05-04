let tasks = [ 
{ 
    id: 1, 
    title: "Faire la page d'accueil", 
} 
]; 

document.getElementById("bouton0").addEventListener("click", () => {
    const nouvelleTache = prompt("Entrez une nouvelle tâche :");
    if (nouvelleTache && nouvelleTache.trim() !== "") {
        const li = document.createElement("li");
        li.innerText = nouvelleTache;
        document.getElementById("liste").appendChild(li);
    }
});

document.getElementById("bouton2").addEventListener("click", () => {
    const liste = document.getElementById("liste");
    const items = liste.getElementsByTagName("li");

    const numero = prompt("Numéro de la tâche à supprimer :");

    const index = parseInt(numero) - 1;

    if (index >= 0 && index < items.length) {
        items[index].remove();
    } else {
        alert("Numéro invalide");
    }
});

    document.getElementById("bouton1").addEventListener("click", () => {
    const liste = document.getElementById("liste");
    const items = liste.getElementsByTagName("li");

    if (items.length === 0) {
        alert("Aucune tâche disponible");
        return;
    }
    const numero = prompt("Numéro de la tâche à décrire :");
    const index = parseInt(numero) - 1;

    if (index < 0 || index >= items.length) {
        alert("Numéro invalide");
        return;
    }

    const description = prompt("Entrez la description :");

    if (!description || description.trim() === "") {
        return;
    }

      const p = document.createElement("p");
    p.innerText = "Description : " + description;
    p.style.marginTop = "5px";
    p.style.fontSize = "14px";
    p.style.color = "#555";

    items[index].appendChild(p);

    });
