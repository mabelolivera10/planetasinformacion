// Función para mostrar la información del planeta
function showPlanetInfo(planetName) {
  var planetInfo = {
    "Plutón": "Plutón es un planeta enano en el sistema solar. Fue considerado el noveno planeta del sistema solar hasta que fue reclasificado como un planeta enano en 2006.",
    "Neptuno": "Neptuno es el octavo planeta del sistema solar y el más distante del Sol. Es un gigante de gas similar a Urano, y tiene un sistema de anillos y múltiples lunas.",
    "Urano": "Urano es el séptimo planeta del sistema solar. Es un gigante de gas con un eje de rotación inclinado, lo que lo hace girar de lado. Tiene anillos y múltiples lunas.",
    "Saturno": "Saturno es el sexto planeta del sistema solar y es conocido por sus impresionantes anillos compuestos principalmente de partículas de hielo. Es un gigante gaseoso con múltiples lunas.",
    "Júpiter": "Júpiter es el quinto planeta del sistema solar y el más grande. Es un gigante gaseoso con una gran mancha roja, una tormenta persistente en su atmósfera, y tiene múltiples lunas, incluyendo la luna Europa, que se cree que tiene un océano subsuperficial.",
    "Marte": "Marte es el cuarto planeta del sistema solar y es conocido como el 'Planeta Rojo' debido a su color distintivo. Tiene una delgada atmósfera y es el sitio de numerosas misiones espaciales en busca de vida pasada o presente.",
    "Tierra": "La Tierra es el tercer planeta del sistema solar y el único conocido por albergar vida. Tiene una atmósfera rica en oxígeno y agua líquida en su superficie, lo que la hace única entre los planetas conocidos.",
    "Venus": "Venus es el segundo planeta del sistema solar y es similar en tamaño y composición a la Tierra. Tiene una atmósfera densa y tóxica que atrapa el calor, lo que lo hace el planeta más caliente del sistema solar.",
    "Mercurio": "Mercurio es el planeta más cercano al Sol y el más pequeño del sistema solar. Tiene una superficie rugosa y está expuesto a altas temperaturas durante el día y bajas temperaturas durante la noche debido a su órbita cercana al Sol.",
    "Sol": "El Sol es la estrella central del sistema solar y es una esfera de plasma que proporciona luz y calor a los planetas del sistema solar. Es una estrella de tipo espectral G2V y es vital para la vida en la Tierra.",
    "Cinturón de Asteroides": "El Cinturón de Asteroides es una región del sistema solar que se encuentra entre las órbitas de Marte y Júpiter. Está compuesto principalmente por pequeños cuerpos rocosos, llamados asteroides, que varían en tamaño desde pequeñas rocas hasta cuerpos casi del tamaño de planetas enanos. Se cree que son restos del proceso de formación del sistema solar."
  };

  document.getElementById("planet-info").innerText = planetInfo[planetName];
  document.getElementById("popup").style.display = "block";
}

// Función para cerrar el popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Agregar eventos de clic a las órbitas
var orbitas = document.querySelectorAll('.orbita');
orbitas.forEach(function(orbita) {
  orbita.addEventListener('click', function() {
    var planetName = this.textContent.trim();
    showPlanetInfo(planetName);
  });
});
