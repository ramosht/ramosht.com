---
title: Deixe a minificação para o computador
description: Entenda porque, nem sempre, escrever menos código é uma boa prática.
category: Dev
date: 2020-06-25T09:37:20.000Z
thumbnail: assets/img/deixe-a-minificacao-para-o-computador.jpg
---
Fala pessoal, como vocês estão? Espero que estejam bem. Hoje eu vou falar sobre algo que eu venho pensado ultimamente, graças a algumas experiências envolvendo manutenção de um código escrito por outros programadores.

Sabe quando você está programando, escrevendo código atrás de código, loop dentro de loop, ifelse atrás de ifelse e, em um dado momento, você olha para o seu código, ele olha pra você e você pensa: “dá pra diminuir!”? É… Essa pode ser uma boa ideia, ou não.

Refatorar é uma etapa importante do projeto. Eu, pelo menos, dificilmente escrevo a versão final do código logo de cara. Sempre é preciso reler, ver se está claro, legível, intuitivo, etc. O que for redundante, muito verboso ou desnecessário, é sempre bom deixarmos mais simples.

Porém, tudo o que é exagerado se torna problemático, e aqui não podia ser diferente. É muito comum perdermos a mão na hora de refatorar o código. E esse código fica lindo no começo: ver uma função que tinha 15 linhas ficar com apenas 5 é algo maravilhoso. Até você precisar fazer a primeira manutenção.

Nós precisamos ter uma coisa em mente desde o começo: **não escrevemos nosso código só para que o computador entenda, mas para que seres humanos entendam**, seja você ou seja seus colegas de trabalho (considerando que vocês todos são humanos). Quantas e quantas vezes você pegou um código que você próprio escreveu há algum tempo (não precisa nem ser de muito longe, coisa de uma semana) e já não lembrava mais como funcionava exatamente? Isso é a coisa mais normal do mundo.

Um código precisa ser lido e interpretado, como um poema. Mas, quando a gente encurta demais um código, a interpretação dele fica muito mais difícil.

![Na imagem, duas garotas estão concentradas, cada uma com o seu note. Uma está sentada no sofá e a outra no chão, num puff.](assets/img/two-girls-programming.jpg "Não escrevemos nosso código só para que o computador entenda, mas para que seres humanos entendam.")

Agora, pense como deve ser para outro programador, um que não participou do desenvolvimento, fazer alguma manutenção ou implementar uma nova feature, algo normal no dia a dia de uma empresa de software. Imagina quanto tempo ele não vai precisar estudar e testar seu código para entender a lógica que você pensou. Um código que ele levaria minutos para entender (se fosse bem escrito) acaba tomando horas, e não é nem exagero.

Para vocês terem uma noção: recentemente, eu e meu time precisamos fazer uma manutenção numa aplicação React. Apesar de ser um ajuste simples, o código era tão otimizado para evitar qualquer linha de código desnecessário que levamos mais de um dia para, primeiro, entender o código e, segundo, entender como ele renderizava um formulário. Uma coisa que devia ser totalmente simples.

# Conclusão

Entender que um código será lido e trabalhado por outros programadores e ter a empatia para escrever um código mais legível vai te fazer um programador muito melhor para trabalhar em equipe (e, confia em mim, isso acontecerá na grande maioria das vezes).

**Um código precisa ser descritivo, intuitivo e autoexplicativo**. Qualquer desenvolvedor que bata o olho nele já deve, com pouco esforço, entender o que ele faz. Não economize linhas de código e dê um nome claro às variáveis. Além do mais, outro detalhe muito importante: nem todo código duplicado é ruim. Quantas vezes, nos meus primeiros trabalhos, eu fazia uma engenhosidade para evitar código duplicado e uma gambiarra maior ainda para, lá na frente, usar o mesmo trecho para fins diferentes, mas sem duplicar nada. É bobagem.

E vocês, o que acham sobre esse assunto? Já tiveram alguma experiência com código um código difícil de entender? Escreve aí nos comentários.