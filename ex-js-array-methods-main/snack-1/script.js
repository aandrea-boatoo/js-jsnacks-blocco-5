const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'
let nameString = ``;
names.forEach(element => nameString += `${element}, `);
console.log(nameString)