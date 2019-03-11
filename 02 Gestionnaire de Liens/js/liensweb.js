/* 
Activité 2
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// Affiche tous les lients
function showAllLink() {
    // Suppression des noeuds enfants
    while (contenu.firstChild) {
        contenu.removeChild(contenu.firstChild);
    }
    // Ajout du bouton 'Ajouter un lien'
    createAddButton();

    // Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
    listeLiens.forEach(function (lien) {
        var elementLien = creerElementLien(lien);
        contenu.appendChild(elementLien);
    });
}

// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);

    return divLien;
}

// Creation du bouton Ajouter un lien
function createAddButton() {
    var addButton = document.createElement('button');
    addButton.textContent = 'Ajouter un lien';
    addButton.style.marginBottom = '20px';
    // au clic, remplacement du bouton par le formulaire
    addButton.addEventListener('click', function () {
        var addForm = createForm();
        contenu.replaceChild(addForm, addButton);
    });
    contenu.appendChild(addButton);
}

// Creation du formulaire
function createForm() {
    let form = document.createElement('form');

    let fieldset = document.createElement('fieldset');
    fieldset.style.marginBottom = '20px';

    // Création des différents champs
    let fields = [
        ['text', 'author', 'Entrez votre nom'],
        ['text', 'title', 'Entrez le titre du lien'],
        ['text', 'link', 'Entrez l\'URL du lien'],
    ];

    for (let field of fields) {
        let input = document.createElement('input');
        input.style.marginRight = '10px';
        input.type = field[0];
        input.required = true;
        input.name = field[1];
        input.placeholder = field[2];

        fieldset.appendChild(input);
    }

    // Ajout du bouton submit
    let submit = document.createElement('input');
    submit.type = 'submit';
    submit.textContent = 'Enregistrer';
    fieldset.appendChild(submit);

    form.appendChild(fieldset);
    // soumission formulaire
    form.addEventListener('submit', function (e) {
        saveData(this);
        e.preventDefault();
    });

    return form;
}

function saveData(form) {
    // traitement de l'url
    let url = form.elements.link.value;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
    }

    let newLink = {
        titre: form.elements.title.value,
        url: url,
        auteur: form.elements.author.value
    }
    // Ajout du nouveau lien
    listeLiens.unshift(newLink);

    // Message de confirmation
    let result = document.createElement('div');
    result.style.color = '#0B3B0B';
    result.style.padding = '5px';
    result.style.marginBottom = '20px';
    result.style.backgroundColor = '#58FA82';
    result.textContent = `Le lien "${form.elements.title.value}" a bien été ajouté.`;
    contenu.insertAdjacentElement("beforebegin", result);

    setTimeout(function () {
        document.body.removeChild(result);
    }, 2000);

    showAllLink();
}

var contenu = document.getElementById("contenu");

showAllLink();