---
published: false
layout: default
permalink: /projects/index.html
---
<h1>Projects:</h1>
<div class="list-group">
{% for project in site.projects %}
    {% if project.permalink contains "index" %} {% continue %} {% endif %}
    {% if project.permalink contains "rss" %} {% continue %} {% endif %}
    <a href="{{ project.url }}" class="list-group-item list-group-item-action">
        {{ project.title }}: {{ project.abstract }}
    </a>
{% endfor %}
</div>
&nbsp;
<p>subscribe <a href="/projects/rss.xml">via RSS</a></p>
