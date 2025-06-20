function iniciar(){
//Mostramos en consola un mensaje de bienvenida
console.log("¡Bienvenido al Sistema Interactivo de Mensajes!")

      // Capturamos los valores
      let nombreUsuario = prompt("Por favor ingresa tu nombre:");
      let edadUsuario = prompt("Por favor ingresa tu edad:");
      
      // Validamos que ambos datos sean ingresados
      // Si alguno de los dos campos no es ingresado se finaliza el programa
      if (nombreUsuario === "" || edadUsuario === "") {
        alert("Por favor completa todos los campos")
        console.log("Programa finalizado por campos vacios")
      }
      // Si los dos campos son ingresados el programa continúa
      else {
        edadUsuario = parseInt(edadUsuario);
      // Validamos que el usuario ingrese un número como edad
      // Mostramos un mensaje personalizado si es mayor o menor de edad
      if (isNaN(edadUsuario) || edadUsuario <= 0) {
        console.error("Error: Por favor, ingresa una edad válida en números.");
      } else if (edadUsuario < 18) {
        alert(`Hola ${nombreUsuario}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
      } else {
        alert(`Hola ${nombreUsuario}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
      }
      //Mostramos en consola un mensaje de despedida
        console.log("Programa finalizado")  
    }
  }