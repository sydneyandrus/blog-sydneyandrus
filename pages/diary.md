---
pageTitle: diary
heading: diary
---
{% for entry in collections.diary %}
    <h2><a href="{{ entry.url }}">{{ entry.data.pageTitle }}</a></h2>
    <em>{{ entry.date | date: "%Y-%m-%d" }}</em>
{% endfor %}