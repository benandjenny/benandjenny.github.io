---
layout: page
title: Accommodation
---

There are several places to stay in and around Newbury, but we have included links below to some of the closest. If you're struggling to find accommodation, let us know and we'll help.

<hr>

{% for accommodation in site.data.accommodation %}
<article class="accommodation">
	<h4 class="name"><a href="{{ accommodation.website }}">{{ accommodation.name }}</a></h4>

	{% if accommodation.address %}
	<p class="address">{{ accommodation.address }}</p>
	{% endif %}
	<p>{{ accommodation.summary }}</p>
	<p><a href="{{ accommodation.website }}">Visit the website &rarr;</a></p>
</article>
{% endfor %}