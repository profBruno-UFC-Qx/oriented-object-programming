---
title: Práticas em sala
nav_order: 12
---

### Atividades Práticas para sala de aula

<ul>
{% assign atividades = site.praticas | sort: "numero" %}
{% for atividade in atividades %}
    <li><a href="{{atividade.url}}" target="_blank">{{ atividade.title }}</a><span class="label label-purple">{{ atividade.assunto }}</span></li>
{% endfor %}
</ul>


