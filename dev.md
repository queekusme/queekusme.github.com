---
layout: default
---
{% for event in site.data.notice %}
<div class="event alert alert-{{event.kind}}" role="alert" data-start="{{event.start_date}}" data-end="{{event.end_date}}">
    {{event.text}}
</div>
{% endfor %}
<h5>My Links</h5>
<div class="row">{% for card in site.data.cards %}
    <a href="{{ card.href }}" target="_blank" class="card">
        <img src="{{ card.img }}" class="card-img-top queekus-card-image" alt="{{ card.img-alt }}">
        <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">{{ card.text }}</p>
        </div>
    </a>{% endfor %}
</div>
<script>
	document.getElementsByClassName("event")
		.filter(event => Date.now() < new Date(event.dataset.start_time).getTime() || Date.now() > new Date(event.dataset.end_time).getTime())
    	.forEach(event => event.remove());
</script>