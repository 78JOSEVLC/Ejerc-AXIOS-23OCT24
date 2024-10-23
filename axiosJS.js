// Clase SOFIA: AXIOS, then reject catch  OCT,Miercoles 23/202

// AXIOS  
// traemos un Objeto con TODA la info
axios.get("https://jsonplaceholder.typicode.com/posts")

.then((res) => console.log(res))

.catch((err) => console.error(err))

//1) ● Imprimir por consola la lista (array) de usuarios.
// traemos un Objeto SOLO con USUARIOS...
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log(res.data)

    //tu codigo con un bucle FOR recuperamos TODOS los nombres del objeto "res.data"
//2) ● Imprimir por consola SOLO el nombre de los USUARIOS...
    for (let i = 0; i < res.data.length; i++) {
        const element = res.data[i];
        console.log(element.name);
    }
  })
  .catch((err) => console.error(err));
 
// archivo JS
// variable global
// petición axios (aquí hago la petición y dentro relleno
//3) ● Crear una variable global llamada "users" y, al hacer la solicitud utilizando
//   Axios, rellenarla con la respuesta de la API(el array). Este proceso debe
//   realizarse fuera de cualquier función.
/** Nota: Después de realizar el console.log de la variable "users", es normal que
aparezca vacía debido a que JavaScript no es bloqueante y el console.log se
ejecuta antes de que la variable sea llenada con la información de la solicitud. */
        // archivo JS
        // variable global
        // petición axios (aquí hago la petición y dentro relleno la variable creada anteriormente)
//4) ● Crear una función llamada "showUsers" que muestre por consola la variable global "users" que has creado.
//5) ● Crea un botón que cuando lo cliques ejecute la función que habías creado
//6) ● Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM (en el HTML).

// Recuerda que para estos ejercicios deberás utilizar Axios.

let users = []
axios.get("https://jsonplaceholder.typicode.com/users")


.then((res) => {
  
    console.log(res)
    users = res.data
})
.catch((err) => console.error(err))

//5) ● Crea un botón que cuando lo cliques ejecute la función que habías creado
function showUsers() {
  console.log(users[0])
  const dom1 = document.querySelector(".dom");
  for (let index = 0; index < users.length; index++) {
    const element = users[index];
    console.log(element.name);
    //dom1.innerHTML += element.name 
    dom1.innerHTML += ` <p> ${element.name} </p>` 
    
    
  }
}

const btn1 = document.querySelector(".btn");
//console.log(btn1);

btn1.addEventListener("click", showUsers);

//6) ● Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM (en el HTML).









  /** axios.post("https://jsonplaceholder.typicode.com/users", {
    name: "New Post"  //,
    // body: "Body title",
  }
)
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
 */
  //console.log(res.data);

    

    
    