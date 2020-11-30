---
title: "Typescript: Interface x Type alias"
description: Sabe a diferença entre type aliases e interfaces? Na prática, eles
  parecem ser a mesma coisa, mas existem algumas diferenças bem pontuais entre
  um e outro.
category: Typescript
date: 2020-11-27 06:00:05
thumbnail: assets/img/nordwood-themes-e9tfh39irpe-unsplash.jpg
---
No último final de semana, eu peguei o [mini-curso de Typescript do Willian Justen](https://youtu.be/mRixno_uE2o) e, apesar de já usar typescript no meu dia a dia, achei bem legal para entender um pouco melhor algumas coisas que não peguei aprendendo na prática, ou entender melhor algumas práticas que eu usava mas não entendia muito a fundo a razão de usar. Além de ser gratuito, no YouTube, é bem curto (15 aulas). Recomendo, com certeza, para qualquer um que queira aprender a tecnologia ou entender um pouco melhor.

Porém, revisando as minhas anotações, depois de já ter terminado o curso, acabei ficando com a seguinte dúvida: **qual a diferença entre type aliases e interfaces**?

Na prática, eles parecem ser a mesma coisa: apesar da sintaxe diferente, você pode usar ambos para declarar objetos, pode implementá-los em classes e pode até rolar uma herança ali, entre eles. Então, tanto faz usar um ou outro?

A resposta é: claro que não.

Existem diferenças e casos de uso para ambos (apesar de que, na prática, na maioria dos casos, você realmente pode usar tanto um quanto outro).

Mas vamos lá entender um pouco melhor isso:

## Antes de mais nada, o que são type aliases e interfaces

Nada mais são do que formas de tipar constantes ou objetos dentro do typescript.

As interfaces são usadas para, somente, descrever objetos, como é visto no exemplo a seguir:

```typescript
interface Table {
	width: number
	height: number
	length: number
	color: "Black" | "White" | "Brown"
	numberOfDrawers: 4 | 6
}
```

Já um type alias é usado para declarar tipos, de modo geral, seja um tipo primitivo, união ou, também, um objeto:

```typescript
type Height = number

type Width = number

type Size = {
	width: Width
	height: Height
};

type Color = "Black" | "White" | "Brown"

type Table = {
	size: Size
	color: Color
	numberOfDrawers: 4 | 6
}
```

Essa é a diferença mais marcante. Porém, se fosse a única, eu poderia usar type aliases para declarar qualquer tipo, e tava tudo bem, não é mesmo? Na verdade, não precisaria nem de interfaces, já que um type alias também serve para objetos.

Porém, as diferenças vão um pouquinho mais além do que isso. Então, listei abaixo algumas semelhanças e diferenças que encontrei, para ficar um pouco mais claro essa diferenciação:

### Semelhança: Objectos e funções

Realmente, tanto interfaces quanto type aliases podem ser usados para descrever objectos e funções...

```typescript
type PersonType = {
    name: string
    age: number
    walk?: (steps: number) => void
}

interface IPerson {
    name: string
    age: number
    walk?: (steps: number) => void
}
```

### Diferença: Tipos simples

... Porém, diferente de uma interface, o type alias também pode ser usado para definir tipos simples, como number, string, tuple, union, etc

```typescript
// String
type Name = string
const myName: Name = 'Guilherme'

// Number
type Age = number
const myAge: Age = 22

// Union
type PartialPointX = { x: number }
type PartialPointY = { y: number }
type PartialPoint = PartialPointX | PartialPointY

// Tuple
type Data = [number, number]
const anyData: Data = [ 5, 10 ]
```

### Diferença: Diferentes interfaces com mesmo nome

Já a interface, quando você define várias com o mesmo nome, o typescript mescla todas elas em uma só, com todas as especificações (o que não acontece com type alias).

```typescript
interface IPoint {
    y: number
}

interface IPoint {
    x: number
}

const getRectangleAreaInterface = ({x,y}: IPoint) => console.log(x * y)
getRectangleAreaInterface({x: 2, y: 10}) // 20
```

Perceba que, na declaração do `getRectangleAreaInterface`, o *IPoint* leva em consideração tanto o y quanto o x.

### Semelhança: Herança

É possível ocorrer herança tanto entre type aliases e interfaces quanto entre ambos os tipos. Além disso, ambas também podem ser herdadas por classes.

```typescript
// Interface herda interface
interface Person { name: string, age: number }
interface Human extends Person { walk: (steps: number) => void }

// Interface herda type alias
type Person = { name: string, age: number }
interface Human extends Person { walk: (steps: number) => void }

// Type alias herda type alias
type Person = { name: string, age: number }
type Human = Person & { walk: (steps: number) => void }

// Type alis herda interface
interface Person { name: string, age: number }
type Human = Person & { walk: (steps: number) => void }
```

*Obs.: Há diferentes interfaces e tipos com o mesmo nome para fins didáticos. No código, foi preciso deixar cada um em um escopo isolado.*

### Semelhança: Implementando uma interface ou type alias em uma classe

Uma classe pode implementar tanto uma interface quando um type alias, e a sintaxe é a mesma para ambos os casos.

**Implementando uma interface:**

```typescript
interface PolygonSides {
    x: number
    y: number
}

class Square implements PolygonSides {
    x: 4
    y: 20
}
```

**Implementando um type alias:**

```typescript
type PolygonSides = {
    x: number
    y: number
}

class Square implements PolygonSides {
    x: 4
    y: 20
}
```

Porém, não é possível implementar um type alias se ele for resultado de uma união:

```typescript
type SideX = { x: number }
type SideY = { y: number }
type PolygonSides = SideX | SideY

class Square implements PolygonSides {
    x: 4
    y: 20
}
```

O código acima retornará o erro

> *A class can only implement an object type or intersection of object types with statically known members.*

Ou, em tradução livre:

> Uma classe somente pode implementar um objeto ou interseção de objetos com uma quantidade de membros bem definida.

# Resumindo

Como eu disse, as diferenças são bem sutis e específicas, apesar delas existirem. Na prática, realmente, na maioria dos casos não vai fazer diferença nenhuma se eu descrever um objeto com type alias ou interface, ou declarar um tipo primitivo com type alias ou informar na própria declaração da variável. Porém, na minha opinião (e, agora, entendendo melhor essas diferenças), acredito que seria bem legal levar o peso semântico em consideração:

* Se eu estou trabalhando com orientação a objeto, descrever um objeto com interface tem muito mais significado do que declarar um type alias;
* Se eu vou declarar apenas um tipo simples, pode ser muito melhor declarar inline, junto com a variável, do que criar um type alias;
* Se eu vou criar um tipo um pouco mais complexo, mas que não precisa ser um objeto (como um union, por exemplo), aí pode ser melhor usar um type alias;

Mas essa é só a minha opinião. No dia a dia, vale definir um padrão com a sua equipe, ou seguir o padrão que ela já determinou.

E aí, já sabia dessas diferenças? E qual a sua opinião sobre o melhor uso em cada cenário? Escreve aí nos comentários.