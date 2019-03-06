/* 
Activité : gestion des contacts
*/
class Contact {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    showContact() {
        return `Nom: ${this.lastName} / Prénom: ${this.firstName}`
    }
}

let userAction = '';
let contacts = [
    new Contact('Carole', 'Lévisse'),
    new Contact('Mélodie', 'Nelsonne')
];


console.log('Bienvenue dans le gestionnaire de contacts !');

while (userAction !== 0) {
    console.log('1 : Lister les contacts');
    console.log('2 : Ajouter un contact');
    console.log('0 : Quitter');
    userAction = Number(prompt('Choisissez une option : '));

    switch (userAction) {
        case 0 :
            break;
        case 1 : {
            console.log('\nListe des contacts:');
            for (contact of contacts) {
                console.log(contact.showContact());
            }
            console.log('\n');
            break;
        }
        case 2 : {
            let firstName = prompt('Saisir le prénom du contact :');
            let lastName = prompt('Saisir le nom du contact :');

            if (firstName !== '' && lastName !== '') {
                contacts.push(new Contact(firstName, lastName));
                console.log('Le contact a été ajouté !\n');
            } else {
                console.log('Le prénom et le nom sont obligatoires.\n');
            }
            break;
        }
        default :
            console.log('\nOption inconnue.\n');
    }
}

console.log('Fermeture du gestionnaire.');