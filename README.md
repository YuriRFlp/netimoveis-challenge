# Front-end Challenge - Netimóveis

## Introdução

Esta é a plataforma Netimóveis! Aqui você encontra todos os imóveis disponíveis em várias cidades espalhadas pelo Brasil, ou até mesmo em Portugal. Através da plataforma você consegue alugar, comprar ou anunciar o seu próprio imóvel.

### Desenvolvimento

1. Criei um contexto global para a aplicação (`context/globalContext.tsx`) para concentrar a lógica do sistema em um só arquivo, facilitando o armazenamento e gerenciamento dos dados que precisam ser utilizados em vários componentes, como por exemplo, a variável `isMobile` que é utilizada para verificar se a tela é de um dispositivo mobile ou desktop;

2. Para simplificar e definir a estrutura dos dados foram criadas duas classes: Flat e Place (`classes/index.ts`);

3. Criei as interfaces do contexto e de todos os componentes (`interfaces/index.ts`) para especificar a estrutura de cada item e, assim, evitar qualquer tipo de erro durante o desenvolvimento;

4. Primeiramente foi desenvolvido os componentes que compõe o layout da aplicação (`app/layout.tsx`) - Navbar (`components/template/navbar`) e Footer (`components/template/footer`);

5. Em seguida foram desenvolvidos os demais componentes para a página principal (`app/page.tsx`), de acordo com o protótipo do [Figma](https://www.figma.com/file/2EtnsMH0vQ5IeNRDmd6Gez/Untitled?type=design&node-id=1-215&mode=design&t=VczS9FvOybobEkfg-0);

### Tecnologias

- Next.js;
- Typescript;
- Tailwind CSS;
- Context API;
- Jest;
- React Testing Library;
- React Multi Carousel;
- React Icons;

### Instalar e iniciar o projeto
Instalar as dependências, rodar:
```
npm install
# or
yarn install
```

Iniciar o servidor de desenvolvimento local, rodar:
```
npm run dev
# or
yarn dev
```

Abrir o navegador no endereço da aplicação: [http://localhost:3000](http://localhost:3000)

>  This is a challenge by [Coodesh](https://coodesh.com/)



### Será um enorme **diferencial** para a gente se você: 
- Optar por usar **TypeScript**.
- Aplicar **Testes Unitários** em Componentes.

### Instruções

Vamos disponibilizar para você dois JSONs como fonte de dados. 

- Um será o [place.json](./assets/place.json), que contém as informações de 5 cidades brasileiras. 
- O segundo será o [flats.json](./assets/flats.json), nele está o relacionamento cidade versus hotéis.

`Também iremos disponibilizar o protótipo da tela que você deverá nos entregar.`

### Home

Estude o Figma para trabalhar no projeto com os requisitos essênciais:

[Figma](https://www.figma.com/file/2EtnsMH0vQ5IeNRDmd6Gez/Untitled?type=design&node-id=1-215&mode=design&t=VczS9FvOybobEkfg-0)

#### Formulário

- O campo Localização deverá listar as opções no formato 'Belo Horizonte, Minas Gerais'. Quando selecionada uma opção, ela deverá ser exibida como 'Belo Horizonte, BH'.
- O campo Nº de Quartos deverá ser um Dropdown para informar a quantidade e selecionar os Tipos
- O botão deverá 'Buscar' terar alguns comportamentos ao passar o Mouse, seguindo as especificações do Figma

#### Listagem
- Apresente as imagens do imóveis em um carrossel.

### Extras
- Desenhar os demais elementos da página
- Trabalhar com testes unitários
- Header flutuante

## Readme do Repositório

- Deve conter o título do projeto
- Uma descrição sobre o projeto em frase
- Deve conter uma lista com linguagem, framework e/ou tecnologias usadas
- Como instalar e usar o projeto (instruções)
- Não esqueça o [.gitignore](http://localhost:3000)
- Se está usando github pessoal, referencie que é um challenge by coodesh:

>  This is a challenge by [Coodesh](https://coodesh.com/)

## Finalização e Instruções para a Apresentação

Avisar sobre a finalização e enviar para correção.

1. Confira se você respondeu o Scorecard da Vaga que chegou no seu email;
2. Confira se você respondeu o Mapeamento Comportamental que chegou no seu email;
3. Acesse: [https://coodesh.com/challenges/review](https://coodesh.com/challenges/review);
4. Adicione o repositório com a sua solução;
5. Grave um vídeo, utilizando o botão na tela de solicitar revisão da Coodesh, com no máximo 5 minutos, com a apresentação do seu projeto. Foque em pontos obrigatórios e diferenciais quando for apresentar.
6. Adicione o link da apresentação do seu projeto no README.md.
7. Verifique se o Readme está bom e faça o commit final em seu repositório;
8. Confira a vaga desejada;
9. Envie e aguarde as instruções para seguir no processo. Sucesso e boa sorte. =)

## Suporte

Use o nosso canal no slack: http://bit.ly/32CuOMy para tirar dúvidas sobre o processo ou envie um e-mail para contato@coodesh.com.



