primeraLista = ["Jamon","Pan","Cereal","Pizza","Huevo"];
console.log(primeraLista.length);
var i=1;
listaPerros = [];
var perro = {};
var perro2 = {};
perro.nombre = "Scam";
perro.edad =11;
perro.raza = "Samoyedo";
listaPerros.push(perro);
perro2.nombre = "Jade";
perro2.edad =1;
perro2.raza = "Akita";
listaPerros.push(perro2)
//console.log(listaPerros);

listaPerros.forEach(perro => {
    console.log("El perro : "+perro.nombre);
    console.log("Tiene : "+perro.edad+ " años");
    console.log("y es un : "+perro.raza+ " :)");
});
