---
layout: default
---
{% for notice in site.data.notices %}
<div class="notice alert alert-{{notice.type}}" role="alert" data-start="{{notice.start_date}}" data-end="{{notice.end_date}}">
    {{notice.text}}
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
	[...document.getElementsByClassName("notice")]
		.filter(notice => Date.now() < new Date(notice.dataset.start).getTime() || Date.now() > new Date(notice.dataset.end).getTime())
    	.forEach(notice => notice.remove());
</script>