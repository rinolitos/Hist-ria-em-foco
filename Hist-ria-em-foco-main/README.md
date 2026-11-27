# História em Foco

## Conhecimento sobre o passado para compreender o presente!

## Sobre o Projeto

O **História em Foco** é um projeto desenvolvido com o objetivo de apresentar um cursinho educativo voltado ao ensino de história. A plataforma reúne conteúdos sobre diferentes períodos e acontecimentos históricos, oferecendo aos estudantes uma maneira simples, dinâmica e organizada de aprender.

## Objetivos

- Incentivar o interesse pelo estudo da história.
- Apresentar os principais acontecimentos históricos.
- Facilitar a compreensão de diferentes períodos históricos.
- Disponibilizar conteúdos educativos de maneira organizada.
- Auxiliar os estudantes na preparação para provas e vestibulares.

## Conteúdos Abordados

1. **Grécia e Roma Antiga:** civilizações, culturas, organizações políticas e legados históricos.
2. **Cruzadas:** expedições militares e religiosas ocorridas durante a Idade Média.
3. **Renascimento:** movimento cultural, artístico e científico.
4. **Revolução Francesa:** transformações políticas e sociais ocorridas na França no século XVIII.
5. **Revolução Haitiana:** movimento de independência e luta contra a escravidão no Haiti.
6. **Primeira Guerra Mundial:** conflito internacional ocorrido entre 1914 e 1918.
7. **Segunda Guerra Mundial:** conflito global ocorrido entre 1939 e 1945.
8. **Guerra Fria:** disputa política, econômica e ideológica entre Estados Unidos e União Soviética.

## Tecnologias Utilizadas

- HTML5 e CSS3 – estrutura e visual das páginas.
- JavaScript – interatividade (aulas, prova, gráficos de desempenho).
- PHP 8 + PDO – login, cadastro, sessões e API de avaliações.
- MySQL / MariaDB – usuários e histórico de avaliações.

## Estrutura do Projeto

```text
Hist-ria-em-foco/
├── index.html            # página inicial
├── criar_admin.php       # cria administradores (somente terminal)
├── pages/                # login, cadastro, dashboard, cursos, aula, prova, resultado, desempenho, admin
│   ├── api_prova.php       # sorteia a prova e corrige no servidor
│   ├── api_tentativas.php  # histórico de provas do aluno logado
│   └── admin.php           # painel do administrador (questões, módulos, alunos, resultados)
├── assets/
│   ├── config/           # conexão com o banco, sessão e proteção de páginas
│   ├── css/
│   └── js/
├── sql/banco.sql         # criação do banco, módulos e questões iniciais
└── TESTES.md             # roteiro de testes
```

## Como Executar o Projeto

Requisitos: PHP 8+ e MySQL/MariaDB (por exemplo, XAMPP ou WAMP).

1. Copie a pasta do projeto para `htdocs` (XAMPP) ou `www` (WAMP).
2. Inicie o Apache e o MySQL.
3. No phpMyAdmin, importe o arquivo `sql/banco.sql`.
4. Se o seu MySQL não usar usuário `root` sem senha, ajuste `assets/config/conexao.php`
   ou defina as variáveis de ambiente `DB_HOST`, `DB_USER`, `DB_PASS` e `DB_NAME`.
5. Acesse `http://localhost/<nome-da-pasta>/index.html` e crie uma conta.
6. Cadastros feitos pelo site são sempre do tipo `aluno`. Para criar um administrador, rode no terminal,
   na pasta do projeto: `php criar_admin.php`.

## Integrantes

- Enzo Agostini de Lima
- Gabriel Araújo
- Murilo Lazzarini Fernandes Lopes 
- Pedro Gregio Boriero

# Considerações Finais

O **História em Foco** busca tornar o aprendizado de história mais acessível, interessante e dinâmico. Por meio dos conteúdos apresentados, os estudantes podem conhecer diferentes sociedades, revoluções e conflitos que marcaram a humanidade, compreendendo melhor a construção do mundo atual.

---

**História em Foco — Conhecer o passado é compreender o presente!**
