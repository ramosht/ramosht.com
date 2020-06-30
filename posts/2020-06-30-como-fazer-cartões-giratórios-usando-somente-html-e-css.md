---
title: Como fazer cartões giratórios usando somente HTML e CSS
description: Aprenda a criar o efeito de cartões giratórios, usando apenas HTML e CSS.
category: Front-end
date: 2019-06-11T09:09:30.000Z
thumbnail: assets/img/como-fazer-cartões-giratórios-usando-somente-html-e-css.jpeg
---
Fala galera, tudo bem?

Recentemente eu fiz o site de uma clínica odontológica que pediu um recurso bem legal: um cartão giratório para cada tratamento. A face da frente (inicialmente voltada para cima) exibe o nome do tratamento e, com o mouse sobre um cartão, ele gira e exibe uma descrição daquele tratamento. [Veja como ficou o resultado final.](https://www.doutordental.net/#home-areasdeatuacao)

A solução foi simples e usei somente HTML e CSS. Porém, com um pouco de criatividade, dá pra fazer muita coisa legal só com isso. Bora aprender?

# O HTML

```html
<div class="cartao">
  <div class="cartao-container">
    <div class="cartao-front"></div>
    <div class="cartao-back"></div>
  </div>
</div>
```

O HTML é a parte mais simples. Como é um cartão com as faces da frente e do verso, vamos precisar de duas div’s irmãs: **.cartao-front** e **.cartao-back**, elas serão as faces da frente e de trás do cartão. Essas duas div’s estarão dentro da div agregadora **.cartao-container**: futuramente, é essa a div que girará. Por fim, tudo isso estará dentro da div **. cartao**: ela será responsável definir as configurações gerais do cartão, o tamanho, comprimento e a perspectiva das transformações 3D.

# O CSS

Agora a mágica começa a acontecer.

## .cartao

Primeiramente, vamos definir as configurações gerais do cartão: tamanho e perspectiva. A div responsável por isso é a **.cartao**:

```css
.cartao {
  height: 200px;
  width: 200px;
  perspective: 1000px;
}
```

Como o efeito giratório possui uma perspectiva 3D, precisamos adicionar aqui a propriedade **perspective: 1000px.**

## .cartao-container

Com o tamanho do cartão já definido, vamos para o container.

A div **.cartao-container** é a que comportará as duas faces, mas exibirá uma por vez. Quando o mouse passar sobre o cartão, é o container que gira e mostrará a face de trás.

Primeira coisa: vamos definir o **position: relative**, para, futuramente, posicionar as faces. Em seguida, a altura, ocupando 100% da altura do cartão.

```css
.cartao-container {
  position: relative;
  height: 100%;
}
```

Agora entra a parte das transformações: como é o **.cartao-container** quem girará, vamos definir duas coisas: o **tempo de duração** da transformação e o **estilo** da transformação.

```css
.cartao-container {
  position: relative;
  height: 100%;
  transition: transform .4s;
  transform-style: preserve-3d;
}
```

O **transform-style: preserve-3d** garante que a transformação mantenha o estilo 3D, o que é essencial para ter um efeito mais realista (e mais legal).

Por fim, precisamos chamar a animação, não é mesmo? Como queremos chamá-la quando o mouse estiver sobre o cartão, fazemos o seguinte:

```css
.cartao:hover .cartao-container {
  transform: rotateY(180deg);
}
```

Quando o mouse passar sobre a div **.cartao**, o **.cartao-container** (filho dela) girará 180° (metade de uma volta completa) sobre o eixo Y (eixo vertical).

Mas, apesar de já termos um bom código, parece que não está acontecendo nada. Isso porque ainda não configuramos as faces do nosso cartão. Vamos fazer isso agora!

## **.cartao-front e .cartao-back**

Para começar, vamos fazer com que ambas as faces ocupem todo o espaço disponível para elas:

```css
.cartao-front, .cartao-back {
  position: absolute;
  width: 100%;
  backface-visibility: hidden;
  z-index: 1;
}
```

A propriedade **backface-visibility** garante que a face de trás de cada div não apareça (já que a costa de cada face é a outra).

Por fim, basta aplicar um background-color para cada face.

```css
.cartao-front {
  background: green;
}

.cartao-back {
  transform: rotateY(180deg);
  background: red;
}
```

Você deve estar se perguntando sobre o **transform: rotateY(180deg)** no **.cartao-back**, não é mesmo? Essa propriedade faz com que você deixe a face de trás, inicialmente, voltada para trás. Sem ela, ambas as faces estariam voltadas para frente e, quando o cartão girar, não mostraria nada.

## Resultado

Por fim, com tudo isso configurado, já devemos ter nosso resultado final.

<https://codepen.io/ramosht/full/agbbrN>

# Personalizando

Como eu disse, o legal desse elemento é que, com um pouco de criatividade, dá pra fazer muita coisa bacana. Basta adicionar o conteúdo da face da frente na div **.cartao-front** e o conteúdo da parte de trás na div **.cartao-back**. Um exemplo é o site do dentista, que eu postei acima.

Outro exemplo, onde eu uso um pouco mais de código, segue abaixo:

<https://codepen.io/ramosht/full/WqNJwP>

- - -

E aí, o que acharam do texto? Esse foi o meu primeiro artigo, então espero que tenham gostado.

Dúvidas, críticas, sugestões e ideias são sempre bem-vindas, então pode comentar aqui embaixo. Abraço!