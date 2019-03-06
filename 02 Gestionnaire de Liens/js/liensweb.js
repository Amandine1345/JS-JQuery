/* 
Activité 1
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
        url: "http://wikipedia.org",
        auteur: "annie.zette"
    }
];

let containerElt = document.getElementById('contenu');

for (let link of listeLiens) {
    // création d'un nouvel élément
    let linkElt = document.createElement('p');

    // ajout de la classe 'lien'
    linkElt.classList.add('lien');

    // ajout du contenu
    linkElt.innerHTML = `<a href="${link.url}" title="${link.titre}">${link.titre}</a> - ${link.url}<br/>Ajouté par ${link.auteur}`;

    // style css particulier pour la balise <a>
    let aElt = linkElt.querySelector('a');
    aElt.style.color = '#428bca';
    aElt.style.fontSize = '120%';
    aElt.style.textDecoration = 'none';
    aElt.style.fontWeight = 'bold';

    // ajout de l'élément au parent
    containerElt.appendChild(linkElt);
}
