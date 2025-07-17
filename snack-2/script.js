const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// Estraggo un array di soli nomi
const names = people.map(person => person.name);

// Concateno i nomi con ", " e stampo
console.log(names.join(', '));