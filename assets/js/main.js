function MiembroSquad(nombre,apellido,edad,hobbies){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
}

var Miermbro1 = new MiembroSquad("Marion", "Castillo",29,"Caminar");
var Miermbro2 = new MiembroSquad("Cote", "Rodrigez",32,"Ver series , Bailar");
var Miermbro3 = new MiembroSquad("Francisca", "Ojeda",28,"Rollerderby");
var Miermbro4 = new MiembroSquad("Maria Jose", "Pozo",31,"Bailar");
var Miermbro5 = new MiembroSquad("Carolina", "Tapia",27,"Trekking");

var resultado = document.getElementById("mostrar1");
var muestra = ("Nombre: " + Miermbro1.nombre + "<br> " + "Apellido: " + Miermbro1.apellido + "<br> " + "Edad: " + Miermbro1.edad + "<br> " +  "Hobbie: " + Miermbro1.hobbies);
resultado.innerHTML = muestra; 

var resultado = document.getElementById("mostrar2");
var muestra = ("Nombre: " + Miermbro2.nombre + "<br> " + "Apellido: " + Miermbro2.apellido + "<br> " + "Edad: " + Miermbro2.edad + "<br> " +  "Hobbie: " + Miermbro2.hobbies);
resultado.innerHTML = muestra; 

var resultado = document.getElementById("mostrar3");
var muestra = ("Nombre: " + Miermbro3.nombre + "<br> " + "Apellido: " + Miermbro3.apellido + "<br> " + "Edad: " + Miermbro3.edad + "<br> " +  "Hobbie: " + Miermbro3.hobbies);
resultado.innerHTML = muestra; 

var resultado = document.getElementById("mostrar4");
var muestra = ("Nombre: " + Miermbro4.nombre + "<br> " + "Apellido: " + Miermbro4.apellido + "<br> " + "Edad: " + Miermbro4.edad + "<br> " +  "Hobbie: " + Miermbro4.hobbies);
resultado.innerHTML = muestra;

var resultado = document.getElementById("mostrar5");
var muestra = ("Nombre: " + Miermbro5.nombre + "<br> " + "Apellido: " + Miermbro5.apellido + "<br> " + "Edad: " + Miermbro5.edad + "<br> " +  "Hobbie: " + Miermbro5.hobbies);
resultado.innerHTML = muestra;