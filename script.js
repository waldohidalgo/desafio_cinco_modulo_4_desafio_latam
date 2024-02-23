async function consultaAPI() {
  const urlAPI = "https://jsonplaceholder.typicode.com/photos";
  try {
    const resultado = await fetch(urlAPI);
    if (resultado.status == 200) {
      const arregloRespuesta = await resultado.json();
      arregloRespuesta.forEach((elem) => {
        if (elem.id < 21) {
          console.log(`ID: ${elem.id} , Titulo: ${elem.title}`);
        }
      });
    }
    if (resultado.status == 404) {
      console.log("Error 404:Página No Encontrada 😔");
    }
  } catch (error) {
    console.log(error.message);
  }
}
consultaAPI();

function ejecucionMensaje() {
  return new Promise((resolve, error) => {
    setTimeout(() => {
      resolve("La información ha sido enviada 😄");
    }, 3000);
  });
}

async function mostrarMensaja(promesa) {
  const resultado = await promesa;

  console.log(resultado);
}
mostrarMensaja(ejecucionMensaje());
