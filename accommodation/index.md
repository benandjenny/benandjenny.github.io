---
layout: page
title: Accommodation

hero-img: hm.jpg
---

There are many places to stay while you're visiting Franschhoek. We've selected a few that cater to a wide range of budgets below.

{% for accommodation in site.data.accommodation %}
<article class="accommodation">
	<h4 class="name">{{ accommodation.name }}</h4>

	{% if accommodation.address %}
	<p class="address">{{ accommodation.address }}</p>
	{% endif %}

	<ul>
		<li><a href="{{ accommodation.website }}">Website</a></li>
		<li class="bull">&bull;</li>
		<li><a href="{{ accommodation.tripadvisor }}">TripAdvisor</a></li>
	</ul>

	<p>{{ accommodation.summary }}</p>
</article>
{% endfor %}