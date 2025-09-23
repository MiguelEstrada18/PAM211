const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "Maria", edad: 28 }
];

const encontrado = personas.find(humano => humano.nombre === "Luis");
console.log(encontrado);

personas.forEach(person => {console.log("Persona: " + person.nombre + " - " + person.edad + " años")});

const suma = personas.reduce((acumulador, guy) => acumulador + guy.edad, 0);
console.log("Sumatoria total: " + suma);