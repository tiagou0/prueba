
document.write("El valor ingresado es " + valorIngresado + "<br>");

function determinarParImpar() {
    let valorIngresado = parseInt(prompt("Ingrese un valor para determinar si es par o impar: "));
    if (valorIngresado % 2 == 0) {
        document.write("El valor ingresado es par");
    } else if (isNaN(valorIngresado)) {
        document.write("El valor ingresado no es un número");
    } else {
        document.write("El valor ingresado es impar");
    }
}


function notifyMe() {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      const notification = new Notification("Hi there!");
      // …
    } else if (Notification.permission !== "denied") {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          const notification = new Notification("Hi there!");
          // …
        }
      });
    }
  
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }

Notification.requestPermission()