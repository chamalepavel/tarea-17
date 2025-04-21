// Creación de función separadora de pasos
let paso = 0;
const separador = () => {
    paso++;
    console.log(' ');
    console.log('******************************');
    console.log(`Paso ${paso}`);
    console.log('-----------------------------');
};

// Objeto inicial
let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
};

// Paso 1
separador();

const actualizarEnergia = (nave) => {
    nave['Fuel Type'] = 'avocado oil';
};

// Mostrar el objeto antes de la modificación
console.log(spaceship);

// Modificar el objeto
actualizarEnergia(spaceship);

// Mostrar el objeto después de la modificación
console.log(spaceship);

// Paso 2
separador();

const deshabilitarRemoto = (nave) => {
    nave.disabled = true;
};

// Mostrar el objeto antes de la modificación
console.log(spaceship);

// Modificar el objeto
deshabilitarRemoto(spaceship);

// Mostrar el objeto después de la modificación
console.log(spaceship);

// Paso 3
separador();

// Confirmación de que los cambios se realizaron correctamente
actualizarEnergia(spaceship);
deshabilitarRemoto(spaceship);

console.log(spaceship);
