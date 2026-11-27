# Roteiro de testes — História em Foco

Pré-requisito: projeto rodando com o banco importado (`sql/banco.sql`) e um administrador criado com `php criar_admin.php`.

Legenda: **Auto** = já executado em teste automatizado de ponta a ponta (navegador real) — ver observação no fim.

## 1. Acesso e segurança
| # | Teste | Resultado esperado | Auto |
|---|-------|--------------------|------|
| 1 | Abrir dashboard, cursos, aula, prova, resultado, desempenho e admin sem login | Redireciona para o login | ✔ |
| 2 | Abrir `api_prova.php` e `api_tentativas.php` sem login | Erro 401 | ✔ |
| 3 | Enviar login sem o token CSRF | "Sessão expirada" | ✔ |
| 4 | Errar a senha 5 vezes | Bloqueio de 60 segundos | ✔ |
| 5 | Logar como aluno e abrir `admin.php` | Volta ao dashboard | ✔ |
| 6 | Sair da conta e voltar a uma página protegida | Pede login | ✔ |

## 2. Cadastro e login
| # | Teste | Resultado esperado | Auto |
|---|-------|--------------------|------|
| 7 | Cadastro com senhas diferentes / senha curta / e-mail inválido | Mensagem de erro adequada | ✔ |
| 8 | Cadastro válido | "Cadastro realizado"; usuário criado como `aluno` | ✔ |
| 9 | Cadastro com e-mail repetido | "E-mail já cadastrado" | ✔ |
| 10 | Nome com HTML (`<b>`) | Aparece como texto, sem executar | ✔ |
| 11 | Botão "Mostrar/Ocultar" senha | Alterna a visibilidade | ✔ |
| 12 | Login correto (aluno / admin) | Vai ao dashboard / ao painel | ✔ |

## 3. Navegação do aluno
| # | Teste | Resultado esperado | Auto |
|---|-------|--------------------|------|
| 13 | Percorrer o menu lateral (Cursos, Prova, Desempenho) | Todas abrem, sem link quebrado | ✔ |
| 14 | Abrir uma aula (`aula.php?modulo=cruzadas`) | Conteúdo carrega | ✔ |
| 15 | Console do navegador | Sem erros de JavaScript | ✔ |

## 4. Prova e banco de dados
| # | Teste | Resultado esperado | Auto |
|---|-------|--------------------|------|
| 16 | Iniciar prova | 10 questões vindas do banco | ✔ |
| 17 | Inspecionar a resposta de `api_prova.php` | Não contém o gabarito | ✔ |
| 18 | Responder e finalizar | Vai ao resultado com nota e revisão | ✔ |
| 19 | Conferir no banco `tentativas` e `respostas_tentativa` | Uma tentativa e 10 respostas do aluno | ✔ |
| 20 | Abrir Desempenho | Mostra a tentativa gravada | ✔ |
| 21 | Reenviar a mesma prova | Recusado (409) | ✔ |
| 22 | Enviar quantidade de respostas errada / corpo não JSON | Recusado (400 / 415) | ✔ |
| 23 | Dois alunos no mesmo navegador | Cada um vê só o próprio histórico | manual |

## 5. Painel administrativo
| # | Teste | Resultado esperado | Auto |
|---|-------|--------------------|------|
| 24 | Visão geral | Números reais (alunos, módulos, questões, provas, média) | ✔ |
| 25 | Criar questão | Aparece na lista; total aumenta | ✔ |
| 26 | Criar questão com alternativas repetidas | Recusado com mensagem | ✔ |
| 27 | Editar questão | Formulário preenchido; alteração salva | ✔ |
| 28 | Excluir questão nunca usada | Excluída | ✔ |
| 29 | Excluir questão já usada em prova | Recusada, com explicação | ✔ |
| 30 | Criar módulo; excluir módulo vazio | Criado / excluído | ✔ |
| 31 | Excluir módulo com questões | Recusado | ✔ |
| 32 | Resultados | Aproveitamento por módulo e últimas provas | ✔ |
| 33 | Excluir aluno | Aluno e histórico removidos | ✔ |
| 34 | Ação do painel sem token CSRF | Nada é alterado | ✔ |

## 5. Responsivo e visual (manual)
| # | Teste | Resultado esperado |
|---|-------|--------------------|
| 35 | Abrir painel e prova em tela de celular | Menu lateral abre pelo ☰; tabelas rolam na horizontal |
| 36 | Prova com Tab/Enter | Alternativas acessíveis pelo teclado |

## Observação sobre os testes automáticos
Os itens marcados com ✔ foram executados em ambiente local com PHP 8 e **SQLite** no lugar do MySQL (não havia MySQL no ambiente de revisão): 62 verificações, 0 falhas. As consultas usam SQL padrão, mas **repita os itens 8, 18, 19, 25 e 33 no seu MySQL** para confirmar a integração real.
