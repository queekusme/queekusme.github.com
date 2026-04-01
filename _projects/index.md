---
published: false
layout: default
permalink: /projects/index.html
---
<h1>Projects:</h1>
<div class="list-group">
{% for project in site.projects %}
    {% if project.name contains "index" %} {% continue %} {% endif %}
    <a href="{{ project.url }}" class="list-group-item list-group-item-action">
        {{ project.project_name }}: {{ project.abstract }}
    </a>
{% endfor %}
</div>
