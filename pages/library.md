---
pageTitle: library
heading: library
---
{% for shelf in collections.library %}
    <h2><a href="{{ shelf.url }}">{{ shelf.data.pageTitle }}</a></h2>
    <em>{{ post.date | date: "%Y-%m-%d" }}</em>
{% endfor %}