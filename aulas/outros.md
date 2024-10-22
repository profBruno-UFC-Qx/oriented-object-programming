---
title: Atividades práticas
youtubeId1: x7oWQXAB4fo
jsarr:
- /assets/js/sheetApi.js
---

### Atividades Práticas

Na lista de atividades práticas, nós temos várias atividades. No entanto, vocês precisaram entregar 10 atividades. Vocês devem escolher aquelas que vão entregar da seguinte forma:
- 3 de 5 atividades de peso 1
- 3 de 4 atividades de peso 2
- 3 de 4 atividades de peso 3
- 1 de 2 atividade de peso 4

Confiram a lista de atividades a seguir:

<table>
 <thead>
    <tr>
        <th> Nome </th>
        <th> Repositório </th>
        <th> Peso </th>
        <th> Extra </th>
        <th> Link para envio </th>
        <th> Qtd Enviados </th>
    </tr>
 </thead>
 <tbody>
{% assign atividades = site.atividades | sort: "numero" %}
{% for atividade in atividades %}
    <tr>
        <td> {{ atividade.nome }} </td>
        <td> <a href="{{ atividade.repo }}">Repositório</a> </td>
        <td>{{ atividade.peso }} </td>
        <td> {{ atividade.extra }} </td>
        <td> <a href="{{ atividade.link}}" class="btn">Enviar</a></td>
        <td> <span id="pp{{ atividade.numero }}"></span> </td>
    </tr>
{% endfor %}
  </tbody>
</table>

### Passo a passo para iniciar uma atividade prática

{% include youtubePlayer.html id=page.youtubeId1 %}

