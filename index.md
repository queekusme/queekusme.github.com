---
layout: default
cols: 3
---
{% for notice in site.data.notices %}
<div
    class="notice alert alert-{{notice.type}} hide" role="alert"
    data-s="{{notice.start_date | date_to_xmlschema}}"
    data-e="{{notice.end_date | date_to_xmlschema}}">
    {{notice.text}}
</div>
{% endfor %}
<h5>My Links</h5>
{%- for card in site.data.cards -%}
{%- capture col_index %}{{ forloop.index0 | modulo: page.cols }}{% endcapture -%}
{%- capture col_index_end %}{{ page.cols | minus: 1 }}{% endcapture -%}
{%- if col_index == "0" -%}
<div class="row">
{%- endif %}
    <a href="{{ card.href }}" target="_blank" class="card col col-4">
        <img src="{{ card.img }}" class="card-img-top queekus-card-image" alt="{{ card.img-alt }}">
        <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">{{ card.text }}</p>
        </div>
    </a>
{%- if col_index == col_index_end %}
</div>
{%- endif %}{% endfor %}
<script>
    window.addEventListener("load", (event) => { timehide("notice") });
</script>