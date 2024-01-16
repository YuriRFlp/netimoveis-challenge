# Front-end Challenge - Netimóveis

## Introdução

Esta é a plataforma Netimóveis! Aqui você encontra todos os imóveis disponíveis em várias cidades espalhadas pelo Brasil, ou até mesmo em Portugal. Através da plataforma você consegue alugar, comprar ou anunciar o seu próprio imóvel.

- Vídeo de apresentação: [vídeo](https://www.loom.com/embed/744801d0cf044b7ab42681a3e33ce712)

- Link da aplicação: [Netimóveis](https://netimoveis.vercel.app/)

### Desenvolvimento

1. Criei um contexto global para a aplicação (`context/globalContext.tsx`) para concentrar a lógica do sistema em um só arquivo, facilitando o armazenamento e gerenciamento dos dados que precisam ser utilizados em vários componentes, como por exemplo, a variável `isMobile` que é utilizada para verificar se a tela é de um dispositivo mobile ou desktop;

2. Para simplificar e definir a estrutura dos dados foram criadas duas classes: Flat e Place (`classes/index.ts`);

3. Criei as interfaces do contexto e de todos os componentes (`interfaces/index.ts`) para especificar a estrutura de cada item e, assim, evitar qualquer tipo de erro durante o desenvolvimento;

4. Primeiramente foi desenvolvido os componentes que compõe o layout da aplicação (`app/layout.tsx`) - Navbar (`components/template/navbar`) e Footer (`components/template/footer`);

5. Em seguida foram desenvolvidos os demais componentes para a página principal (`app/page.tsx`), de acordo com o protótipo do [Figma](https://www.figma.com/file/2EtnsMH0vQ5IeNRDmd6Gez/Untitled?type=design&node-id=1-215&mode=design&t=VczS9FvOybobEkfg-0);

### Tecnologias e Bibliotecas

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
