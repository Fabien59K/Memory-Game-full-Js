//Fonction pour melanger un tableau
let shuffle = (tab) => {
    for (let i = 0; i < tab.length; i++) {
        let aleatoire = Math.floor(Math.random() * (tab.length - 1));
        let tmp = tab[i];
        tab[i] = tab[aleatoire];
        tab[aleatoire] = tmp;
    }
}
//bouton start
let start = document.querySelector('.start');
//plateau jeu
let jeu = document.querySelector('.jeu');
let tab = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
//doubler le contenu du tableau;
tab = [...tab, ...tab];
let valeur1 = undefined;
let valeur2 = undefined;
start.addEventListener('click', function (e) {
    shuffle(tab);
    jeu.innerHTML = "";
    for (let element of tab) {
        jeu.innerHTML += "<div class='col-3 element'><div class='masque' data-value='" + element + "'></div><div class='contenu'>" + element + "</div></div>"
    }
    valeur1 = undefined;
    valeur2 = undefined;
}, false)
let nbPair = 0;
let compteur = 0;
jeu.addEventListener('click', function (e) {
    if (e.target.getAttribute('class') == 'masque') {
        compteur++;
        let valeur = e.target.getAttribute("data-value");
        e.target.classList.add('hide');
        e.target.classList.remove('masque');
        if (valeur1 == undefined) {
            valeur1 = valeur;
        }
        else if (valeur2 == undefined) {
            valeur2 = valeur;
            if (valeur1 == valeur2) {
                nbPair++;
                console.log(nbPair);
                if (nbPair == 8) {
                    console.log("Vous avez gagné en "+compteur+" clicks");
                }
            }
        }
        else {
            elements = document.querySelectorAll('.hide');
            if (valeur1 == valeur2) {
                for (let el of elements) {
                    el.classList.remove('hide');
                }
                e.target.classList.add('hide');
            }
            else {
                for (let el of elements) {
                    el.classList.remove('hide');
                    el.classList.add('masque');
                }
                e.target.classList.add('hide');
                e.target.classList.remove('masque');
            }
            valeur1 = valeur;
            valeur2 = undefined;
        }
        console.log("v1 : " + valeur1 + " v2 : " + valeur2);
    }
})