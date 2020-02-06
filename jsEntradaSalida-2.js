/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
		var nombre;
		var edad;
		nombre = prompt("Ingrese su nombre por favor");
		edad = prompt("ingrese su edad por favor");
		//prompt("prueba"); sale una peticion que en console.log no se muetra
		console.log("su nomre es " + nombre);
		console.log("su edad es " + edad);
		//console.log("esto debe fallar"); aparece el texto en console.log sin ningun requisito
		prompt(pruebaDos)
}		

