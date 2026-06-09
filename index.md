---
layout: default
---
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