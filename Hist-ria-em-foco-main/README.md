# 📚 História em Foco

### O passado explica o presente. Conheça a História.

O **História em Foco** é uma plataforma educacional desenvolvida com o objetivo de tornar o aprendizado de História mais acessível, organizado e interativo.

A plataforma reúne conteúdos sobre importantes acontecimentos e períodos históricos, permitindo que os alunos estudem por meio de aulas organizadas, materiais didáticos e avaliações de conhecimento.

O projeto busca oferecer uma experiência de aprendizado intuitiva, com uma interface moderna e recursos que auxiliam no acompanhamento do desempenho dos estudantes.

---

## 🎯 Objetivo do projeto

Desenvolver um ambiente virtual de aprendizagem voltado ao ensino de História, proporcionando aos estudantes uma maneira organizada e acessível de estudar diferentes períodos históricos.

A plataforma também busca incentivar a autonomia dos alunos, permitindo que acompanhem seus resultados e identifiquem os conteúdos que precisam revisar.

## 📖 Conteúdos disponíveis

O curso contempla 8 temas históricos, organizados cronologicamente:

| Nº | Conteúdo | Período |
|---|---|---|
| 01 | Grécia e Roma Antiga | Antiguidade |
| 02 | As Cruzadas | Idade Média |
| 03 | Renascimento | Idade Moderna |
| 04 | Revolução Francesa | Idade Moderna |
| 05 | Revolução Haitiana | Idade Moderna |
| 06 | Primeira Guerra Mundial | Idade Contemporânea |
| 07 | Segunda Guerra Mundial | Idade Contemporânea |
| 08 | Guerra Fria | Idade Contemporânea |

## ✨ Funcionalidades

### 👨‍🎓 Área do aluno

- Cadastro e autenticação de usuários.
- Painel individual do estudante.
- Catálogo de conteúdos históricos.
- Pesquisa e filtragem de módulos.
- Acesso às aulas organizadas por assunto.
- Navegação entre os conteúdos.
- Videoaulas e materiais complementares.
- Avaliações com questões de múltipla escolha.
- Navegação entre questões e registro de respostas.
- Visualização de notas e resultados.
- Revisão das questões respondidas.
- Acompanhamento do desempenho e histórico de avaliações.

### 🛠️ Área administrativa

- Painel de administração.
- Recursos de gerenciamento da plataforma.
- Confirmação de ações de exclusão.
- Organização das funcionalidades administrativas.

## 🎨 Design e experiência do usuário

O História em Foco utiliza uma identidade visual inspirada em materiais editoriais e acadêmicos.

Características da interface:

- Paleta de cores em azul-marinho, dourado e tons claros.
- Tipografia com combinação de fontes serifadas e sem serifa.
- Layout organizado e intuitivo.
- Cards para apresentação dos conteúdos.
- Elementos visuais para indicadores de desempenho.
- Navegação simplificada.
- Adaptação da interface para diferentes tamanhos de tela.

## 💻 Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| HTML5 | Estruturação das páginas |
| CSS3 | Estilização, layout e responsividade |
| JavaScript | Interatividade e funcionalidades do sistema |
| PHP | Processamento no servidor e integração com o banco de dados |
| MySQL | Armazenamento e gerenciamento de informações |
| XAMPP | Ambiente de desenvolvimento local |
| Git e GitHub | Versionamento e colaboração no projeto |

## 📂 Estrutura do projeto

```text
historia-em-foco/
│
├── assets/
│   ├── css/
│   │   ├── aula.css
│   │   ├── componentes.css
│   │   ├── cursos.css
│   │   ├── dashboard.css
│   │   ├── desempenho.css
│   │   ├── global.css
│   │   ├── home.css
│   │   ├── pages.css
│   │   ├── prova.css
│   │   └── resultado.css
│   │
│   └── js/
│       ├── admin.js
│       ├── aula.js
│       ├── auth.js
│       ├── cursos.js
│       ├── dashboard.js
│       ├── desempenho.js
│       ├── main.js
│       ├── prova.js
│       └── resultado.js
│
├── pages/
│   ├── admin.html
│   ├── aula.html
│   ├── cadastro.html
│   ├── cursos.html
│   ├── dashboard.html
│   ├── desempenho.html
│   ├── login.html
│   ├── prova.html
│   └── resultado.html
│
└── index.html
```

### Organização dos arquivos JavaScript

| Arquivo | Responsabilidade |
|---|---|
| `main.js` | Funcionalidades da página inicial |
| `auth.js` | Recursos dos formulários de autenticação |
| `dashboard.js` | Interações do painel do aluno |
| `cursos.js` | Pesquisa, filtros e navegação dos cursos |
| `aula.js` | Organização e apresentação das aulas |
| `prova.js` | Funcionamento das avaliações |
| `resultado.js` | Apresentação e correção dos resultados |
| `desempenho.js` | Estatísticas, gráficos e histórico |
| `admin.js` | Interações do painel administrativo |

## ⚙️ Como executar o projeto

Para executar o projeto em ambiente local, é recomendado utilizar o XAMPP.

**1. Instale o XAMPP**

Baixe e instale o programa:

https://www.apachefriends.org/

**2. Coloque o projeto na pasta correta**

Copie a pasta `historia-em-foco` para:

```text
C:\xampp\htdocs\
```

**3. Inicie o servidor**

Abra o painel do XAMPP e inicie o Apache e, quando necessário para a integração com o banco de dados, o MySQL.

**4. Acesse o projeto**

Abra o navegador e acesse:

```text
http://localhost/historia-em-foco/
```

**Observação:** as funcionalidades que dependem de PHP e MySQL necessitam da configuração correspondente do servidor, dos arquivos de back-end e do banco de dados.

## 🗄️ Banco de dados

O projeto prevê a utilização do MySQL para o armazenamento e gerenciamento das informações da plataforma.

Entre os dados envolvidos estão:

- Informações dos usuários.
- Dados de autenticação.
- Conteúdos dos módulos.
- Questões e alternativas das avaliações.
- Respostas dos estudantes.
- Resultados e histórico de desempenho.

A estrutura definitiva do banco de dados e sua integração devem acompanhar a implementação do back-end.

## 🤝 Desenvolvimento em equipe

O História em Foco é um projeto acadêmico desenvolvido em equipe, com divisão de responsabilidades entre três integrantes.

A colaboração ocorre por meio do Git e GitHub, permitindo organizar o código, acompanhar alterações e integrar as diferentes partes do sistema.

Cada integrante é responsável por compreender e conseguir explicar as funcionalidades desenvolvidas, além de conhecer o funcionamento geral da plataforma.

## 🤖 DECLARAÇÃO DE USO DE INTELIGÊNCIA ARTIFICIAL

Durante o desenvolvimento do História em Foco, foram utilizadas ferramentas de Inteligência Artificial generativa como recursos de apoio ao planejamento, programação, organização e compreensão do projeto.

As ferramentas foram utilizadas para auxiliar o processo de desenvolvimento, sem substituir a responsabilidade dos integrantes sobre o código, as funcionalidades e os resultados apresentados.

| Ferramenta | Etapa | Finalidade | Validação |
|---|---|---|---|
| ChatGPT | Planejamento | Auxílio na organização das funcionalidades, estrutura das páginas e divisão dos arquivos do projeto. | Sugestões analisadas e decisões avaliadas pelos integrantes. |
| ChatGPT | Desenvolvimento do front-end | Auxílio na elaboração e melhoria de estruturas HTML, estilos CSS e funcionalidades JavaScript. | Código executado no ambiente local, revisado e submetido a testes de funcionamento. |
| ChatGPT | Depuração | Auxílio na identificação de possíveis erros e na busca por soluções para problemas encontrados durante o desenvolvimento. | Alterações analisadas e verificadas por meio de testes. |
| ChatGPT | Compreensão técnica | Explicação do funcionamento dos arquivos, funções e tecnologias utilizadas no sistema. | Conteúdos estudados e relacionados à implementação do projeto. |
| ChatGPT | Documentação | Auxílio na organização e elaboração da documentação do projeto, incluindo este README. | Texto revisado e informações conferidas pelos integrantes. |

As respostas e sugestões fornecidas pela ferramenta foram utilizadas como apoio e devem ser analisadas pelos integrantes antes de sua aplicação.

O grupo permanece responsável pela compreensão, verificação, manutenção e apresentação de todas as partes do sistema.

## 📌 Considerações finais

O História em Foco representa a aplicação prática de conhecimentos de desenvolvimento web na construção de uma plataforma educacional.

Além de reunir conteúdos históricos, o projeto busca proporcionar uma experiência de aprendizado organizada, interativa e acessível, utilizando tecnologias de desenvolvimento web e recursos de acompanhamento educacional.

---
**Nome dos integrantes: Enzo Agostini; Gabriel Araujo; Murilo Lazzarini; Pedro Boriero**

**Projeto acadêmico — Desenvolvimento de Sistemas**

**História em Foco | 2026**

---

**História em Foco — Conhecer o passado é compreender o presente!**
