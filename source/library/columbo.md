---
pageTitle: columbo reviews
heading: columbo reviews
---
<table>
{% for entry in collections.columbo %}
  <tr>
    <td><h3><a href="{{ entry.url }}">{{ entry.data.episodeTitle }} </a><h2></td>
    <td>Season {{ entry.data.season }}, Episode {{ entry.data.episodeNumber }}</td>
    <td>
      {% case entry.data.rating %}
        {% when 1 %}
          ★☆☆☆
        {% when 2 %}
          ★★☆☆
        {% when 3 %}
          ★★★☆
        {% when 4 %}
          ★★★★
      {% endcase %}
    </td>
  </tr>
{% endfor %}
</table>
<p>More reviews coming soon.</p>