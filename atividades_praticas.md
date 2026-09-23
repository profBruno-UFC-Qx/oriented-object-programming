---
layout: default
title: Atividades práticas
youtubeId1: x7oWQXAB4fo
jsarr:
- /assets/js/sheetApi.js
---

### Atividades Práticas

Antes de iniciar o desenvolvimento de qualquer atividade prática, será necessário informar o seu usuário do Github. Para isso preencha o formulário abaixo:

<a class="btn" href="https://forms.gle/rH2YyPyTgnr3ua4K8" target="_blank">Formulário de cadastrado de usuário do Github</a>

O repositório de cada atividade é criado individualmente para você pelo professor — você não precisa (nem deve) usar o botão "Use this template" do GitHub. Quando o seu repositório estiver pronto, você vai receber um convite de colaborador no GitHub; aceite o convite antes de começar.

{: .warning }
> O link na tabela abaixo aponta para o repositório-modelo, só para consulta dos requisitos, do diagrama e do exemplo de execução — **não é o seu repositório de entrega**.

Ao terminar a atividade:
1. Preencha o arquivo `RELATO.md` na raiz do seu repositório (substitui o formulário do Google que era usado antes).
2. Abra um Pull Request da sua branch para a `main`.
3. Mescle o PR quando o check "Validar Relato" ficar verde — não é necessária aprovação do professor para isso.

<table>
 <thead>
    <tr>
        <th> Nome </th>
        <th> Peso </th>
        <th> Data de entrega </th>
    </tr>
 </thead>
 <tbody>
{% assign atividades = site.atividades | sort: "numero" %}
{% for atividade in atividades %}
    <tr>
        <td> <a href="{{ atividade.link }}" target="_blank">{{ atividade.nome }}</a></td>
        <td> {{ atividade.peso }} </td>
        <td> {{ atividade.prazo }} </td>
    </tr>
{% endfor %}
  </tbody>
</table>

