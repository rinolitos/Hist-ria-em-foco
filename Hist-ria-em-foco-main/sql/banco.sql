-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 27/11/2026 às 12:01
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `historia_em_foco`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `aulas`
--

CREATE TABLE `aulas` (
  `id` int(11) NOT NULL,
  `modulo_id` int(11) NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `conteudo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `modulos`
--

CREATE TABLE `modulos` (
  `id` int(11) NOT NULL,
  `titulo` varchar(150) NOT NULL,
  `descricao` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `modulos`
--

INSERT INTO `modulos` (`id`, `titulo`, `descricao`) VALUES
(1, 'Grécia e Roma Antiga', 'Civilizações, culturas, organizações políticas e legados históricos da Antiguidade clássica.'),
(2, 'As Cruzadas', 'Expedições militares e religiosas ocorridas durante a Idade Média.'),
(3, 'Renascimento', 'Movimento cultural, artístico e científico dos séculos XIV a XVII.'),
(4, 'Revolução Francesa', 'Transformações políticas e sociais ocorridas na França no século XVIII.'),
(5, 'Revolução Haitiana', 'Movimento de independência e luta contra a escravidão no Haiti.'),
(6, 'Primeira Guerra Mundial', 'Conflito internacional ocorrido entre 1914 e 1918.'),
(7, 'Segunda Guerra Mundial', 'Conflito global ocorrido entre 1939 e 1945.'),
(8, 'Guerra Fria', 'Disputa política, econômica e ideológica entre Estados Unidos e União Soviética.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `questoes`
--

CREATE TABLE `questoes` (
  `id` int(11) NOT NULL,
  `modulo_id` int(11) NOT NULL,
  `enunciado` text NOT NULL,
  `alternativa_a` varchar(500) NOT NULL,
  `alternativa_b` varchar(500) NOT NULL,
  `alternativa_c` varchar(500) NOT NULL,
  `alternativa_d` varchar(500) NOT NULL,
  `alternativa_correta` char(1) NOT NULL
) ;

--
-- Despejando dados para a tabela `questoes`
--

INSERT INTO `questoes` (`id`, `modulo_id`, `enunciado`, `alternativa_a`, `alternativa_b`, `alternativa_c`, `alternativa_d`, `alternativa_correta`) VALUES
(1, 1, 'Qual cidade-Estado grega ficou conhecida por desenvolver uma experiência de democracia na Antiguidade?', 'Esparta', 'Atenas', 'Corinto', 'Tebas', 'B'),
(2, 1, 'Qual filósofo grego ficou conhecido pelo método de questionamento chamado método socrático?', 'Aristóteles', 'Platão', 'Sócrates', 'Pitágoras', 'C'),
(3, 1, 'Qual foi a primeira forma de governo de Roma, antes da República?', 'Monarquia', 'Democracia', 'Império', 'Ditadura', 'A'),
(4, 1, 'Quem é tradicionalmente considerado o primeiro imperador romano?', 'Júlio César', 'Nero', 'Rômulo', 'Augusto', 'D'),
(5, 2, 'Qual papa convocou a Primeira Cruzada durante o Concílio de Clermont, em 1095?', 'Gregório VII', 'Urbano II', 'Inocêncio III', 'Leão X', 'B'),
(6, 2, 'Qual cidade foi conquistada pelos cruzados em 1099 durante a Primeira Cruzada?', 'Constantinopla', 'Roma', 'Jerusalém', 'Alexandria', 'C'),
(7, 2, 'Qual líder muçulmano reconquistou Jerusalém em 1187?', 'Saladino', 'Maomé', 'Suleimão', 'Harun al-Rashid', 'A'),
(8, 3, 'Qual movimento intelectual valorizava o ser humano e a retomada dos estudos da Antiguidade clássica?', 'Feudalismo', 'Mercantilismo', 'Escolástica', 'Humanismo', 'D'),
(9, 3, 'Qual artista renascentista pintou a obra Mona Lisa?', 'Leonardo da Vinci', 'Michelangelo', 'Rafael Sanzio', 'Donatello', 'A'),
(10, 3, 'Qual inovação tecnológica contribuiu para ampliar a circulação de livros e conhecimentos na Europa?', 'Máquina a vapor', 'Telégrafo', 'Imprensa de tipos móveis', 'Telefone', 'C'),
(11, 3, 'Qual cidade italiana foi um dos principais centros do Renascimento?', 'Londres', 'Florença', 'Moscou', 'Lisboa', 'B'),
(12, 4, 'Qual grupo social representava a maior parte da população francesa antes da Revolução de 1789?', 'Nobreza', 'Alto clero', 'Terceiro Estado', 'Família real', 'C'),
(13, 4, 'Em que data ocorreu a tomada da Bastilha, símbolo do início da Revolução Francesa?', '14 de julho de 1789', '1º de janeiro de 1792', '5 de maio de 1789', '18 de novembro de 1799', 'A'),
(14, 4, 'Qual documento de 1789 defendia princípios como liberdade e igualdade jurídica?', 'Código de Hamurábi', 'Carta Magna', 'Tratado de Versalhes', 'Declaração dos Direitos do Homem e do Cidadão', 'D'),
(15, 4, 'Qual acontecimento marcou a chegada de Napoleão Bonaparte ao poder em 1799?', 'Revolução de Outubro', 'Golpe do 18 de Brumário', 'Congresso de Viena', 'Tomada da Bastilha', 'B'),
(16, 5, 'Qual era o nome da colônia francesa onde começou a Revolução Haitiana?', 'Nova França', 'Martinica', 'Saint-Domingue', 'Guadalupe', 'C'),
(17, 5, 'Em que ano começou a Revolução Haitiana?', '1776', '1791', '1804', '1815', 'B'),
(18, 5, 'Em que ano o Haiti conquistou sua independência?', '1791', '1799', '1802', '1804', 'D'),
(19, 6, 'Qual acontecimento desencadeou a crise que levou ao início da Primeira Guerra Mundial?', 'Assassinato de Francisco Ferdinando', 'Queda do Muro de Berlim', 'Revolução Russa', 'Invasão da Polônia', 'A'),
(20, 6, 'Qual foi uma característica marcante dos combates na Frente Ocidental?', 'Uso exclusivo de navios', 'Ausência de armamentos modernos', 'Guerra de trincheiras', 'Combates exclusivamente aéreos', 'C'),
(21, 6, 'Em que ano os Estados Unidos entraram na Primeira Guerra Mundial?', '1914', '1915', '1916', '1917', 'D'),
(22, 6, 'Qual tratado formalizou as condições de paz impostas à Alemanha após a Primeira Guerra Mundial?', 'Tratado de Utrecht', 'Tratado de Versalhes', 'Tratado de Tordesilhas', 'Tratado de Maastricht', 'B'),
(23, 7, 'Qual acontecimento é considerado o marco inicial da Segunda Guerra Mundial?', 'Ataque a Pearl Harbor', 'Queda de Berlim', 'Invasão da Polônia pela Alemanha', 'Revolução Russa', 'C'),
(24, 7, 'Qual país realizou o ataque a Pearl Harbor em dezembro de 1941?', 'Alemanha', 'Japão', 'Itália', 'União Soviética', 'B'),
(25, 7, 'Como é chamado o genocídio promovido pelo regime nazista contra os judeus e outros grupos perseguidos?', 'Holocausto', 'Iluminismo', 'Apartheid', 'Imperialismo', 'A'),
(26, 7, 'Em qual ano ocorreu a rendição alemã, encerrando a guerra na Europa?', '1939', '1941', '1943', '1945', 'D'),
(27, 8, 'Quais foram as duas principais superpotências rivais durante a Guerra Fria?', 'França e Inglaterra', 'Alemanha e Japão', 'Estados Unidos e União Soviética', 'China e Índia', 'C'),
(28, 8, 'Qual organização militar foi criada em 1949 sob liderança dos Estados Unidos?', 'Pacto de Varsóvia', 'OTAN', 'ONU', 'Liga das Nações', 'B'),
(29, 8, 'Qual acontecimento de 1962 elevou significativamente as tensões entre Estados Unidos e União Soviética?', 'Crise dos Mísseis de Cuba', 'Queda do Muro de Berlim', 'Revolução Francesa', 'Guerra do Golfo', 'A'),
(30, 8, 'Qual acontecimento simbólico ocorreu em Berlim em novembro de 1989?', 'Construção do Muro', 'Criação da OTAN', 'Início da Primeira Guerra', 'Queda do Muro de Berlim', 'D');

-- --------------------------------------------------------

--
-- Estrutura para tabela `respostas_tentativa`
--

CREATE TABLE `respostas_tentativa` (
  `id` int(11) NOT NULL,
  `tentativa_id` int(11) NOT NULL,
  `questao_id` int(11) NOT NULL,
  `alternativa_marcada` char(1) DEFAULT NULL,
  `correta` tinyint(1) NOT NULL
) ;

--
-- Despejando dados para a tabela `respostas_tentativa`
--

INSERT INTO `respostas_tentativa` (`id`, `tentativa_id`, `questao_id`, `alternativa_marcada`, `correta`) VALUES
(1, 1, 12, 'C', 1),
(2, 1, 17, 'B', 1),
(3, 1, 30, 'D', 1),
(4, 1, 2, 'C', 1),
(5, 1, 24, 'B', 1),
(6, 1, 18, 'D', 1),
(7, 1, 11, 'B', 1),
(8, 1, 5, 'D', 0),
(9, 1, 13, 'C', 0),
(10, 1, 19, 'A', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tentativas`
--

CREATE TABLE `tentativas` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `modulo_id` int(11) DEFAULT NULL,
  `nota` decimal(5,2) NOT NULL,
  `data_realizacao` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `tentativas`
--

INSERT INTO `tentativas` (`id`, `usuario_id`, `modulo_id`, `nota`, `data_realizacao`) VALUES
(1, 2, NULL, 80.00, '2026-11-27 10:49:58');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `tipo` enum('aluno','admin') NOT NULL DEFAULT 'aluno',
  `data_cadastro` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `tipo`, `data_cadastro`) VALUES
(1, 'murilo', 'murilo@gmail.com', '$2y$10$OqhASasTD4vXArrfXmRA..KdEBLdvAtHDeGBP/oBop5Fld4S43TZC', 'admin', '2026-11-27 07:37:53'),
(2, 'enzo', 'enzo@gmail.com', '$2y$10$Z8gzaD2ajHH2sQq1E4NYgeHZomHXrAdHvxxzG9Y1F1dwBz9yIuiBa', 'aluno', '2026-11-27 07:48:19');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `aulas`
--
ALTER TABLE `aulas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_aulas_modulo` (`modulo_id`);

--
-- Índices de tabela `modulos`
--
ALTER TABLE `modulos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `questoes`
--
ALTER TABLE `questoes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_questoes_modulo` (`modulo_id`);

--
-- Índices de tabela `respostas_tentativa`
--
ALTER TABLE `respostas_tentativa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_resp_tentativa` (`tentativa_id`),
  ADD KEY `fk_resp_questao` (`questao_id`);

--
-- Índices de tabela `tentativas`
--
ALTER TABLE `tentativas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tentativas_usuario` (`usuario_id`),
  ADD KEY `fk_tentativas_modulo` (`modulo_id`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `aulas`
--
ALTER TABLE `aulas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `modulos`
--
ALTER TABLE `modulos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `questoes`
--
ALTER TABLE `questoes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `respostas_tentativa`
--
ALTER TABLE `respostas_tentativa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `tentativas`
--
ALTER TABLE `tentativas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `aulas`
--
ALTER TABLE `aulas`
  ADD CONSTRAINT `fk_aulas_modulo` FOREIGN KEY (`modulo_id`) REFERENCES `modulos` (`id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `questoes`
--
ALTER TABLE `questoes`
  ADD CONSTRAINT `fk_questoes_modulo` FOREIGN KEY (`modulo_id`) REFERENCES `modulos` (`id`);

--
-- Restrições para tabelas `respostas_tentativa`
--
ALTER TABLE `respostas_tentativa`
  ADD CONSTRAINT `fk_resp_questao` FOREIGN KEY (`questao_id`) REFERENCES `questoes` (`id`),
  ADD CONSTRAINT `fk_resp_tentativa` FOREIGN KEY (`tentativa_id`) REFERENCES `tentativas` (`id`) ON DELETE CASCADE;

--
-- Restrições para tabelas `tentativas`
--
ALTER TABLE `tentativas`
  ADD CONSTRAINT `fk_tentativas_modulo` FOREIGN KEY (`modulo_id`) REFERENCES `modulos` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `fk_tentativas_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
