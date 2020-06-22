---
title: "Não fique somente no Hooks: Porque ainda estudar class components"
description: O hooks do React é legal? Sim, muito! Mas existe uma razão muito
  importante para você ainda aprender sobre class components, mesmo que esteja
  um pouco esquecido.
category: Outros
date: 2020-06-22T11:15:25.000Z
thumbnail: assets/img/codigo-react-browser-router.jpg
---
Recentemente eu fui contratado em uma nova empresa. Nova empresa significa novos desafios e novos aprendizados. E teve um desafio bem específico que, apesar de ser em uma tecnologia bem familiar para mim, ainda me pegou de surpresa.

Antes de continuar, vamos voltar um tempinho para contextualizar.

Como alguns já sabem, eu sou desenvolvedor JavaScript, e sou mais voltado para o front, principalmente para ReactJS. Porém, o que acontece é: quando eu comecei a estudar React, os componentes baseados em classes (os *class components*) já estavam começando a sair do cenário por conta do React Hooks, que é totalmente orientado por components baseados em funções (os *function components*). Apesar de ter começado a aprender com class components (lá no comecinho, uns dois anos atrás), eu achava que os function components eram bem mais leves, flexíveis e gostosos de mexer, então isso foi algo maravilhoso. Me concentrei na nova versão do React e foquei totalmente em function components.

## Mas Guilherme, qual é o problema?

Bom, lembra que eu entrei numa empresa nova, né?

O código onde em precisava mexer, nessa empresa, não era tão recente assim. Não foi feito já utilizando React Hooks e, como você já deve ter percebido, ele não era construído com componentes baseados em funções. Era totalmente baseado nas versões mais antigas do React.

Quem já programa a algum tempo sabe que nunca é uma missão fácil você se adaptar a um código que já existe. Não é uma questão de ser um código limpo ou não, legível ou não. É uma questão de adaptação mesmo. Agora, o desafio de se adaptar a um código novo, numa versão da sua tech que você não tem tanta familiaridade, é uma missão muito penosa. Apesar de ser, essencialmente, a mesma tecnologia e com muitas semelhanças de sintaxe entre uma versão e outra, existem muitas funcionalidades que estão em uma, mas não em outra, e vice-versa (principalmente o conceito de *lifecycle*).

Foi aí que eu aprendi a grande lição que me deu a ideia de escrever esse texto.

Conversando com um desenvolvedor React aqui da empresa, muito mais experiente que eu e que me ajudou a entender algumas peculiaridades do código, ele me deu o seguinte conselho: não foque só em aprender a versão recente do React. Hooks é legal? Sim, muito! Mas e os códigos mais antigos, que foram construídos com componentes baseados em classe, como que a gente pode fazer a manutenção deles sem conhecer a mecânica, funcionamento, peculiaridades, etc?

## O que eu tirei disso tudo?

![Cinco desenvolvedores trabalhando juntos em uma mesa.](assets/img/group-of-devs.jpeg "O que eu tirei disso tudo?")

É muito importante, quando você está aprendendo e se aprofundando, se concentrar na versão mais recente da tecnologia. É importantíssimo porque uma nova versão (ou até uma nova tech) sempre atualiza para melhor (pelo menos é a ideia), seja em termos de programação, segurança, ciclo de vida de projeto, etc. Mas, quando você sai do raso e começa a se aprofundar, é importante aprender versões mais antigas (mesmo que seja a nível de entendimento, somente), principalmente numa tecnologia que evolui o tempo todo (que é o que acontece com esses frameworks JavaScript, tipo React, Vue, Angular, etc). Assim, você não se prepara apenas para criar, mas se prepara também para trabalhar em equipe, fazendo manutenção de códigos que já existem, e isso vai abrir MUITAS portas.

E vocês, o que acham disso? Já passaram por alguma experiência de precisar lidar com versões um pouco mais antigas da tech que vocês trabalham e terem essa dificuldade? Compartilha aí nos comentários!