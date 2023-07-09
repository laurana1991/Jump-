const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')


//Display mobile menu

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)



// Obtener el JSON de usuarios del LocalStorage
const usuariosJSON = localStorage.getItem('usuarios');
let usuarios = [];

if (usuariosJSON) {
  usuarios = JSON.parse(usuariosJSON);
} else {
  // Si no hay datos en el LocalStorage, inicializar el arreglo de usuarios
  usuarios = [
    {
      "id": 1,
      "name": "Juan",
      "lastName": "Perez",
      "email": "jp@gmail.com"
    },
    {
      "id": 2,
      "name": "Marcos",
      "lastName": "Gimenez",
      "email": "m_gimenez@gmail.com"
    }
  ];
}

console.log('Usuarios obtenidos del LocalStorage:');
console.log(usuarios);

const form = document.getElementById('myForm');
const submitButton = form.querySelector('button[type="submit"]');

// Escuchar el evento submit del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Obtener los valores ingresados en los campos del formulario
  const name = document.getElementById('usuario-nombre').value;
  const lastName = document.getElementById('usuario-apellido').value;
  const email = document.getElementById('usuario-email').value;

  // Validar y guardar los datos en el almacenamiento local
  if (name && email && lastName) {
    const nuevoUsuario = {
      id: usuarios.length + 1,
      name: name,
      lastName: lastName,
      email: email
    };
    usuarios.push(nuevoUsuario);
    const usuariosActualizadosJSON = JSON.stringify(usuarios);
    localStorage.setItem('usuarios', usuariosActualizadosJSON);

    alert('Datos guardados en localStorage.');
  } else {
    alert('Por favor, ingresa todos los campos.');
  }
});


// Obtén el elemento en tu HTML donde deseas mostrar los datos
const usuariosContainer = document.getElementById('usuarios-container');

// Crear una cadena de HTML para mostrar los usuarios
let usuariosHTML = '';

usuarios.forEach(usuario => {
  usuariosHTML += `
    <div>
      <p>ID: ${usuario.id}</p>
      <p>Nombre: ${usuario.name}</p>
      <p>Apellido: ${usuario.lastName}</p>
      <p>Email: ${usuario.email}</p>
      <hr>
    </div>
  `;
});

// Agregar la cadena de HTML al elemento en tu HTML
usuariosContainer.innerHTML = usuariosHTML;