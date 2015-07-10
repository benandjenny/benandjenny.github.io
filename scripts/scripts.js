$(function(){
	var masthead = $('.masthead'),
		hero = $('.hero'),
		attendingDrop = $('#attending-dropdown'),
		mealDrop = $('#meal-dropdown');

	// Make sure the `.masthead` is always centered
	function centerMasthead(){
		var mastheadHeight = masthead.height();
		masthead.css({
			"margin-top": "-" + (mastheadHeight / 2) + "px"
			});
	};

	// Desaturate hero on scroll
	$(window).scroll(function(){
		var scrollDist = $(window).scrollTop();
		hero.css({
			"-webkit-filter" : "grayscale(" + (scrollDist / 2) + "%)",
			"-moz-filter" : "grayscale(" + (scrollDist / 2) + "%)",
			"filter" : "grayscale(" + (scrollDist / 2) + "%)"
		});
	});

	// Select element stuff
	attendingDrop.on("change", function(){
		var $t = $(this),
			fauxInput = $t.prev();

		fauxInput.text($t.val());
		fauxInput.removeClass('yes unfortunately-not');
		fauxInput.addClass($t.val().replace(/\s+/g, '-').toLowerCase());
	})

	mealDrop.on("change", function(){
		var $t = $(this),
			fauxInput = $t.prev();

		fauxInput.text($t.val());
		fauxInput.removeClass('meat-option fish-option vegetarian-option');
		fauxInput.addClass($t.val().replace(/\s+/g, '-').toLowerCase());
	})

	// Run functions
	centerMasthead();

	$(window).resize(function(){
		centerMasthead();
	});

});