---
title: Notas de aula
---

## Notas de aula


{% for file in site.static_files %}
    {% if file.extname == '.pdf'%}
- [Aula {{ file.basename | replace: "-", " " | replace_first: " ", " - "  }}]( {{ file.path }})
    {% endif %}
{% endfor %}


