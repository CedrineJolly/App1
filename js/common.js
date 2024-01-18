/*function genererEntete() {
    let mainNav = document.getElementById("mainNav");
    while (mainNav.firstChild) {
        mainNav.removeChild(mainNav.firstChild);
    }

    // Barre de navigation 
    let navigation = document.createElement("nav");
    mainNav.appendChild(navigation);
    navigation.classList.add("navbar navbar-expand-lg bg-secondary text-uppercase fixed-top");

    // div1 
    let div1 = document.createElement("div");
    navigation.appendChild(div1);
    div1.classList.add("container");
    // Titre
    let titre = document.createElement("a");
    div1.appendChild(titre);
    titre.classList.add("navbar-brand");
    titre.setAttribute("href", "#page-top"); //voir si ça renvoie bien en haut
    titre.textContent = "Nounou d'Enfer";
    // div2
    let div2 = document.createElement("div");
    div1.appendChild(div2);
    div2.classList.add("collapse navbar-collapse");

    // ul
    let ul1 = document.createElement("ul");
    div2.appendChild(ul1);
    ul1.classList.add("navbar-nav ms-auto");

    // li1
    let li1 = document.createElement("li");
    ul1.appendChild(li1);
    li1.classList.add("nav-item mx-0 mx-lg-1");
    // Enfants
    let lienEnfants = document.createElement("a");
    li1.appendChild(lienEnfants);
    lienEnfants.classList.add("nav-link py-3 px-0 px-lg-3 rounded");
    lienEnfants.setAttribute("href", "#portfolio"); //voir si ça renvoie bien en haut
    lienEnfants.textContent = "Enfants";

    // li2
    let li2 = document.createElement("li");
    ul1.appendChild(li2);
    li2.setAttribute("class", "nav-item mx-0 mx-lg-1");
    // Contrats
    let lienContrats = document.createElement("a");
    li2.appendChild(lienContrats);
    lienContrats.setAttribute("class", "nav-link py-3 px-0 px-lg-3 rounded");
    lienContrats.setAttribute("href", "#about"); //voir si ça renvoie bien en haut
    lienContrats.textContent = "Contrats";

    // li3
    let li3 = document.createElement("li");
    ul1.appendChild(li3);
    li3.setAttribute("class", "nav-item mx-0 mx-lg-1");
    // Impôts
    let lienImpots = document.createElement("a");
    li3.appendChild(lienImpots);
    lienImpots.setAttribute("class", "nav-link py-3 px-0 px-lg-3 rounded");
    lienImpots.setAttribute("href", "#contact"); //voir si ça renvoie bien en haut
    lienImpots.textContent = "Impôts";
}

genererEntete() 

function genererFooter() {
    let piedpage = document.getElementById("footer");
    while (mainNav.firstChild) {
        mainNav.removeChild(mainNav.firstChild);
    }
    // divfoot1 
    let divfoot1 = document.createElement("div");
    footer.appendChild(divfoot1);
    divfoot1.classList.add("copyright py-4 text-center text-white");

    // divfoot2
    let divfoot2 = document.createElement("div");
    divfoot1.appendChild(divfoot2);
    divfoot2.classList.add("container");
    lienImpots.textContent = "Copyright &copy; ENSC - Projet Informatique Individuel "

}
genererFooter()

*/
