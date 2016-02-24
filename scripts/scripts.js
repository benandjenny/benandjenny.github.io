$(function(){
	var attendingDrop = $('#attending-dropdown'),
		mealDrop = $('#meal-dropdown');

	// Select element stuff
	attendingDrop.on("change", function(){
		var $t = $(this),
			fauxInput = $t.prev();

		fauxInput.text($t.val());
	})

	mealDrop.on("change", function(){
		var $t = $(this),
			fauxInput = $t.prev();

		fauxInput.text($t.val());
	})

});