---
title: Atividades práticas
youtubeId1: x7oWQXAB4fo
jsarr:
- /assets/js/sheetApi.js
---

### Atividades Práticas


<table>
 <thead>
    <tr>
        <th> Nome </th>
        <th> Peso </th>
        <th> Relato </th>
        <th> Data de entrega </th>
    </tr>
 </thead>
 <tbody>
{% assign atividades = site.atividades | sort: "numero" %}
{% for atividade in atividades %}
    <tr>
        <td> <a href="{{ atividade.link }}" target="_blank">{{ atividade.nome }}</a></td>
        <td> {{ atividade.peso }} </td>
        <td> <a href="{{ atividade.formulario }}" target="_blank">Formulário </a></td>
        <td> {{ atividade.prazo }} </td>
    </tr>
{% endfor %}
  </tbody>
</table>

