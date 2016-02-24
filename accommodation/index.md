---
layout: page
title: Accommodation
---

{% for accommodation in site.data.accommodation %}
<article class="accommodation">
	<h4 class="name"><a href="{{ accommodation.website }}">{{ accommodation.name }}</a></h4>

	{% if accommodation.address %}
	<p class="address">{{ accommodation.address }}</p>
	{% endif %}

	<p>{{ accommodation.summary }}</p>
</article>
{% endfor %}