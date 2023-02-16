//1 - Promises
import heroes from './heroes.js';

const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

const getHeroeByIdAsync = (id) => {
  const heroe = getHeroeById(id);
  return new Promise((resolve, reject) => {
    if (heroe) {
      // Si encuentra al héroe, resuelve la promise con el héroe encontrado
      resolve(heroe);
    } else {
      // Si no encuentra al héroe, rechaza la promise
      reject(new Error('No se encontró el héroe con el ID especificado'));
    }
  });
}

getHeroeByIdAsync(10)
  .then((heroe) => {
    // Imprime al héroe encontrado
    console.log(heroe);
  })
  .catch((error) => {
    // Imprime el error en caso de no encontrar al héroe
    console.log(error);
  });

//2 - Fetch API
let promise = fetch('https://api.github.com/users/manishmshiva')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))


//3 - Array function getName() async/await
async function getName() {
  try {
    const response = await fetch('https://api.github.com/users/manishmshiva');
    const data = await response.json();
    console.log(data.name);
  } catch (error) {
    console.error(error);
  }
}
getName();