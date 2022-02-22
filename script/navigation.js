var Navigation = (function($) {
	var navIndex;

	var init = function() {
		navIndex = 0;

        // Waypoint per presentazione
		$('.presentation h2').waypoint(function(direction) {
			$('.presentation').toggleClass('presentation-active');
			setNav(direction);
		}, { offset: $('.navigation').offset().top });

        // Waypoint per progetti
		$('.projects h2').waypoint(function(direction) {
			$('.projects').toggleClass('projects-active');
			setNav(direction);
		}, { offset: $('.navigation').offset().top });

        // Waypoint per contatti
		$('.contacts h2').waypoint(function(direction) {
			$('.contacts').toggleClass('contacts-active');
			setNav(direction);
		}, { offset: $('.navigation').offset().top });
	};

    // Setta ad attivo il pallino corretto nella barra di navigazione
    var setNav = function(direction) {
		navIndex = direction === 'down' ? navIndex+1 : navIndex-1;
		$('.navigation a').removeClass('active');
		$('.navigation a').eq(navIndex).addClass('active');
	};

    // Riporta alla giusta sezione una volta cliccato sul pallino
	var scrollTo = function(classe) {
		console.log(classe)
        $('html, body').animate({ scrollTop: $("." + classe).offset().top - 200}, 1000);
	};
	
	return {
		init: init,
		scrollTo: scrollTo,
	};

}(jQuery));

// Navigation.init();