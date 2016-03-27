$(function(){
	var attendingDrop = $('#attending-dropdown'),
		mealDrop = $('#meal-dropdown'),
		RSVPResponse = $('.rsvp-response');

	// Select element stuff
	attendingDrop.on("change", function(){
		var $t = $(this),
			fauxInput = $t.prev(),
			selectedOption = $t.find(":selected").attr("id");

		fauxInput.text($t.val());

		RSVPResponse.removeClass("attending not-attending");

		if (selectedOption == 'yes'){
			RSVPResponse.addClass("attending");
			RSVPResponse.html("<p>We're delighted you can make it!</p>");
		} else if (selectedOption == 'no') {
			RSVPResponse.addClass("not-attending");
			RSVPResponse.html("<p>Sorry to hear you can't make it – let's catch up soon though!</p>");
		}
	})

	mealDrop.on("change", function(){
		var $t = $(this),
			fauxInput = $t.prev();

		fauxInput.text($t.val());
	})

});