
/** 
function pelarPatatas() {
    console.log("Pelar y cortar las patatas");
  }
  
  function freirPatatas() {
    console.log(
      "Introducimos las patatas cortadas en la sartén y que se cocinen"
    );
    setTimeout(() => {
      console.log("Patatas friendose");
    }, 10000);
  }
  
  function batirHuevos() {
    console.log("batimos los huevos");
  }
  function escurrirPatatas() {
    console.log("Quitamos con una espumadera las patatas de la sartén");
  }
  function mezclarIngredientes() {
    console.log(
      "Introducimos las patatas escurridas al bol con la cebolla y el huevo."
    );
  }
  function hacerUnaTortilla() {
    pelarPatatas();
    freirPatatas();
    batirHuevos();
    escurrirPatatas();
    mezclarIngredientes();
  }
  
  pelarPatatas();
  */
  let miPromesaTortilla = new Promise((resolve, reject) => {
    console.log(
       "Introducimos las patatas cortadas en la sartén y que se cocinen"
  );
  
  setTimeout(() => {
        console.log("Patatas friendose");
        resolve("Patatas fritas");
  }, 10000);
  });
  
  // miPromesaTortilla.then((res) => {
  //   console.log(res);
  //   batirHuevos();
  //   escurrirPatatas();
  //   mezclarIngredientes();
  // });
  // hacerUnaTortilla();
  
  // function miPromesaPrueba() {
  //   console.log("Te prometo que te saludaré cuando pasen 3 segundos!!");
  //   setTimeout(() => {
  //     resolve("Hola");
  //   }, 3000);
  //   console.log("ESTOY EJECUTANDOME");
  // }
  
  // let miPromesa = new Promise((resolve, reject) => {
  //   console.log("Te prometo que te saludaré cuando pasen 3 segundos!!");
  //   setTimeout(() => {
  //     resolve("Hola");
  //   }, 3000);
  // });
  
  // miPromesa.then((res) => {
  //   console.log(res);
  //   console.log("ESTOY EJECUTANDOME");
  // });
  
  // let miPromesaNumero = new Promise((resolve, reject) => {
  //     let number = 51;
  //     console.log("te prometo que " + number + " es menor igual que 50");
  //     if (number <= 50) {
  //       resolve(number + " es menor igual a 50");
  //     } else {
  //       reject("mentira");
  //     }
  //   });
  
  //   miPromesaNumero.then((response)=>{
  //     console.log(response)
  //   }).catch(err =>{
  //     console.error("ERROOOR  ME HAS MENTIDOOOO PE***",err)
  //   })
  
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((res) => res.json())
  //   .then((res) => console.log(res))
  //   .catch((err) => console.error(err));
  
  /** 
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => console.log(res.data))
    .catch((err) => console.error(err));
  */
 
  // axios
  //   .post("https://jsonplaceholder.typicode.com/posts", {
  //     title: "New Post",
  //     body: "Body title",
  //   })
  //   .then((res) => console.log(res))
  //   .catch((err) => console.error(err));
  
  // axios
  //   .put("https://jsonplaceholder.typicode.com/posts/1", {
  //     title: "Post updated",
  //     body: "Body updated",
  //   })
  //   .then((res) => console.log(res))
  //   .catch((err) => console.error(err));
  
  // axios.delete('https://jsonplaceholder.typicode.com/posts/1')
  //   .then(res => console.log(res))
  //   .catch(err => console.error(err));


  //**Blaming clase-asincronia-axios-sept24/main.js at main · SofiaPinilla/clase-asincronia-axios-sept24 