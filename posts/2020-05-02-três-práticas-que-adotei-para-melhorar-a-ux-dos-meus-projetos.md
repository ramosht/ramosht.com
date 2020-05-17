---
title: Três práticas que adotei para melhorar a UX dos meus projetos
description: Após algum tempo trabalhando sozinho e passando por muitos
  perrengues envolvendo UX, entendi que alguns hábitos no desenvolvimento
  evitariam a maior parte deles.
category: Outros
date: 2019-07-14 08:00:22
thumbnail: assets/img/tres-praticas-que-adotei-para-melhorar-ux-dos-meus-projetos-00.jpeg
---
Fala pessoal, tranquilo?

Eu, assim como muitos de vocês, já passei pela experiência de trabalhar sozinho em alguns projetos. Nesses casos, é preciso fazer um pouco de cada coisa: um pouco do design, um pouco do front-end, um pouco do back-end, um pouco do marketing, etc. De todas essas áreas, a que eu mais tive dificuldade foi a de UX (experiência de usuário). Porém, também foi a que eu mais evolui.

![Desenvolvedor, dentro do que parece ser seu quarto, tomando algo de uma xícara, olhando atentamente para a tela do notebook.](assets/img/tres-praticas-que-adotei-para-melhorar-ux-dos-meus-projetos-01.jpeg "Três práticas que adotei para melhorar a UX dos meus projetos 01")

Depois de passar alguns perrengues e ter que reservar um período focado só em analisar e corrigir alguns bugs de usabilidade dos meus primeiros trabalhos, comecei a perceber que, se eu tivesse tomado alguns cuidados durante o desenvolvimento, evitaria boa parte desses problemas.

Por isso, decidi compartilhar com vocês alguns hábitos que acabei desenvolvendo e que me ajudam a cuidar da usabilidade dos meus projetos no dia a dia, sem precisar separar um período só para isso.

Vamos lá?

*Obs.: Lembrando que esse post é baseado na minha experiência, no que eu aprendi, e é focado no pessoal que está começando. Mas espero que, de alguma forma, esse texto ajude a todos vocês :D*

# Sempre escreva um código semântico

![Tela de um computador exibindo um editor de código com um trecho de código HTML.](assets/img/tres-praticas-que-adotei-para-melhorar-ux-dos-meus-projetos-02.jpeg "Sempre escreva um código semântico")

Se você é novo no mundo do HTML, essa é uma das coisas mais importantes que vai aprender. Antigamente, as tags HTML tinham somente um objetivo: estruturar um site. Hoje em dia, com o HTML5, o código tem um valor **tão semântico quando visual**. E, bem aplicado, isso traz diversos benefícios a inúmeros usuários.

Por exemplo: qual a diferença entre usar uma tag <h1> (título) ou uma tag <p> (parágrafo) estilizada para ficar grandona? Visualmente, nenhuma. Semanticamente,**um é título e o outro é parágrafo**. Para as tecnologias assistivas (que auxiliam pessoas portadoras de alguma deficiência), o que vale é o valor semântico. Elas querem saber o que o código realmente é, não o que ele parece ser.

![Comparação entre a estrutura de um site não-semântico (esquerda) e outro semântico (direita). O não-semântico é apenas um amontoado de divs, sem um valor específico para cada bloco. Já na estrutura semântica, cada bloco tem um valor semântico específico.](assets/img/tres-praticas-que-adotei-para-melhorar-ux-dos-meus-projetos-03.png "Hoje em dia, com o HTML5, o código tem um valor tão semântico quando visual.")

*Outro exemplo de código semântico: tags como header, article, figure e footer, apesar de (visualmente) não terem diferença de uma tag div, possuem um valor muito mais semântico — são tags para cabeçalho, artigo, figura e rodapé (respectivamente). Fonte: Interneting Is Hard — <https://internetingishard.com/html-and-css/semantic-html/>*

Quando falamos de experiência de usuário, falamos também de acessibilidade. Portanto, saber qual a finalidade, o valor semântico e quando aplicar cada tag é algo extremamente importante que vai melhorar (muito) a experiência dos usuários portadores de alguma deficiência. Além do mais, ainda vai melhorar o SEO do seu site (sim, o Google analisa o valor semântico dele).

# Coloque-se no lugar do usuário

![Homem concentrado, debruçado sobre uma prancheta e tomando notas sobre experiência do usuário. Na mesa, há mais papéis com outras anotações.](assets/img/tres-praticas-que-adotei-para-melhorar-ux-dos-meus-projetos-04.jpeg "Coloque-se no lugar do usuário")

Esteja sempre se perguntando: como vai ser a interação do usuário com essa página? Quando criamos um site, é natural que o deixemos do jeito que nós achamos melhor. Porém, nem sempre é o melhor para quem o acessará.

Recentemente, eu estava fazendo o site de uma[academia de artes marciais](http://ctmarceloayres.com/)e, quando simulava uma navegação dentro do site, algo me incomodou: sempre que eu precisava abrir o menu, tinha que subir até o topo da página. Pior ainda, tinha que ficar dando*scroll*até lá. Solução: adicionei um botão fixo na tela, que acionava o menu e, além disso, adicionei um botão que me leva, rapidamente, ao topo da página. Duas soluções simples (até meio óbvias), mas que eu só me dei conta quando me coloquei no lugar do usuário.

Portanto, sempre vale nos colocarmos no lugar do usuário e pensar: qual é a experiência de quem está acessando meu site? Dê uma pausa e simule uma navegação comum. Se algo não fizer sentido, não hesite em alterar. É melhor mudar algo no desenvolvimento do que acabar perdendo um usuário.

# Teste seu projeto em diferentes telas

![Vários dispositivos exibindo o mesmo site: um notebook, quatro smarthphones e um tablet.](assets/img/tres-praticas-que-adotei-para-melhorar-ux-dos-meus-projetos-05.jpeg "Teste seu projeto em diferentes telas")

Essa dica é quase uma extensão da anterior.

A palavra do dia (ou década) é: **responsividade**. Não é segredo que boa parte da população acessa a internet apenas pelo celular. Essa experiência é totalmente diferente da de um computador e o seu site deve estar preparado para isso. E, como você sabe que ele está preparado para isso? Testando. Os próprios navegadores possuem um recurso maravilhoso que simula a tela de diferentes dispositivos. Saiba como utilizar essa função no Chrome e no Firefox. Teste seu site em diferentes telas de celulares, tablets e computadores. Veja se tudo está de acordo e ele não acaba quebrando em alguma tela. Uma vez eu precisei criar uma regra CSS somente para um dispositivo específico, e isso nem é tão incomum.

# Conclusão

Eu implantei esses hábitos com o tempo e não estou nem perto de já ter dominado a área de UX, são apenas pequenas ações que eu tomo no meu dia a dia como desenvolvedor e que me ajudam a melhorar a usabilidade dos meus sites. Porém, me interesso bastante pelo assunto e estou sempre pesquisando e me atualizando.

Mas, e aí, o que achou dessas sugestões? Já implementa alguma delas ou tem mais alguma a acrescentar? Compartilha aí comigo.

Esse é meu segundo post e estou gostando bastante da experiência de escrever. Porém, qualquer crítica ou sugestão será sempre bem-vinda, então pode botar aí nos comentários. Se gostou desse post, me chame no [LinkeIn](https://linkedin.com/in/ramosht) ou no [Instagram](https://instagram.com/ramosht) e vamos trocar uma ideia. Até a próxima!