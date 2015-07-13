---
layout: page
title: RSVP

hero-img: hm.jpg
---

<p>Please take a moment to complete the RSVP form below, making sure to indicate whether you can join us or not, and which meal option you'd prefer.</p>
<p><em>If you need to RSVP for more than one person &mdash; your invitation will have multiple names on it &mdash; please complete the form for one person at a time. Once you've submitted the form, you'll be redirected right back here to complete it for the next person.</em></p>

<form class="rsvp-form" method="POST" action="http://formspree.io/adam.whitcroft+rsvp@gmail.com">

	<!-- First Name -->
	<h4>First name</h4>
	<div class="row">
		<input type="text" name="First Name" placeholder="Your first name" required tabindex="1">
	</div>
	<!-- Last Name -->
	<h4>Surname</h4>
	<div class="row">
		<input type="text" name="Surname" placeholder="Your surname" required tabindex="2">
	</div>
	<!-- Attending? -->
	<h4>Will you be joining us?</h4>
	<div class="row">
		<div class="faux-input">Please select one</div>
		<select id="attending-dropdown" name="Attending" tabindex="3" required>
			<option>Please select one</option>
			<option>Yes</option>
			<option>Unfortunately Not</option>
		</select>
	</div>
	<!-- Meal option -->
	<h4>If so, what would you like to eat?</h4>
	<div class="row">
		<div class="faux-input">Please select one</div>
		<select id="meal-dropdown" name="Meal option" tabindex="4">
			<option>Please select one</option>
			<option>Meat Option</option>
			<option>Fish Option</option>
			<option>Vegetarian Option</option>
		</select>
	</div>
	<!-- Allergies -->
	<h4>Any allergies?</h4>
	<div class="row">
		<input type="text" name="Allergies" placeholder="Any allergies?" required tabindex="5">
	</div>

	<input type="submit" value="RSVP">
	<input type="text" name="_gotcha" style="display:none" />
	<input type="hidden" name="_next" value="/thanks/" />
</form>