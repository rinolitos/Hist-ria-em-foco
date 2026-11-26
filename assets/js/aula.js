
// ========================================
// HISTÓRIA EM FOCO
// CONTEÚDO DOS OITO MÓDULOS
// ========================================

const modules = {

    // ========================================
    // 01 - GRÉCIA E ROMA ANTIGA
    // ========================================

    "grecia-roma": {
        number: "01",
        title: "Grécia e Roma Antiga",
        category: "ANTIGUIDADE",
        symbol: "🏛",

        shortDescription:
            "Conheça as civilizações que influenciaram a política, a cultura e a organização do mundo ocidental.",

        introduction:
            "As civilizações grega e romana foram fundamentais para a formação do mundo ocidental. Seus conhecimentos sobre política, filosofia, arquitetura, literatura, direito e organização social continuam presentes em diversas sociedades. Enquanto os gregos desenvolveram importantes ideias filosóficas e políticas, os romanos construíram um dos maiores impérios da Antiguidade.",

        sections: [
            {
                title: "A formação da Grécia Antiga",
                content:
                    "A Grécia Antiga desenvolveu-se na região da Península Balcânica, nas ilhas do Mar Egeu e no litoral da Ásia Menor. Sua geografia montanhosa dificultava a formação de um governo centralizado, favorecendo o surgimento de comunidades independentes. Povos como os cretenses e os micênicos contribuíram para a formação da cultura grega. Com o tempo, os gregos desenvolveram uma sociedade marcada pelo comércio marítimo, pela religião e pela organização em cidades-Estado."
            },
            {
                title: "As cidades-Estado e a organização política",
                content:
                    "As cidades-Estado, chamadas de pólis, possuíam governos, leis e costumes próprios. Atenas destacou-se pelo desenvolvimento da democracia, embora a participação política fosse restrita aos homens livres considerados cidadãos. Esparta, por outro lado, organizava-se em torno de uma sociedade militarizada, na qual a disciplina e a preparação para a guerra eram fundamentais. Essas diferenças demonstram a diversidade política existente na Grécia."
            },
            {
                title: "Cultura, filosofia e religião grega",
                content:
                    "Os gregos acreditavam em vários deuses, como Zeus, Atena, Poseidon e Afrodite. Seus mitos explicavam fenômenos naturais e transmitiam valores culturais. Na filosofia, Sócrates, Platão e Aristóteles desenvolveram reflexões sobre a existência, a política e o conhecimento. Os gregos também se destacaram no teatro, na literatura, na escultura, na arquitetura e nos Jogos Olímpicos, realizados em homenagem aos deuses."
            },
            {
                title: "Guerras e transformações na Grécia",
                content:
                    "A história grega foi marcada por conflitos entre as cidades-Estado e contra povos estrangeiros. Nas Guerras Médicas, os gregos enfrentaram o Império Persa. Posteriormente, Atenas e Esparta disputaram a liderança do mundo grego na Guerra do Peloponeso. Os conflitos enfraqueceram as cidades-Estado e facilitaram a conquista da região pelos macedônios. Alexandre, o Grande, expandiu seu império e difundiu a cultura helenística."
            },
            {
                title: "A origem e a organização de Roma",
                content:
                    "Roma surgiu na Península Itálica, em uma região próxima ao rio Tibre. Segundo a tradição, sua fundação ocorreu em 753 a.C., ligada à lenda dos irmãos Rômulo e Remo. Inicialmente, Roma foi uma pequena comunidade governada por reis. Sua sociedade era dividida entre patrícios, plebeus, clientes e escravizados. A agricultura, o comércio e a expansão territorial contribuíram para seu crescimento."
            },
            {
                title: "A República Romana e a expansão territorial",
                content:
                    "Em 509 a.C., os romanos encerraram a Monarquia e estabeleceram a República. O poder passou a ser dividido entre instituições como o Senado e as magistraturas. Os patrícios concentravam grande parte dos privilégios políticos, enquanto os plebeus lutaram por direitos e conquistaram mudanças importantes, como a Lei das Doze Tábuas. Durante a República, Roma conquistou a Península Itálica e expandiu seu domínio pelo Mediterrâneo, entrando em conflito com Cartago nas Guerras Púnicas."
            },
            {
                title: "O Império Romano e seu legado",
                content:
                    "As disputas políticas e sociais contribuíram para o enfraquecimento da República. Em 27 a.C., Otávio Augusto tornou-se o primeiro imperador romano. O Império alcançou grande extensão territorial e viveu períodos de prosperidade, como a Pax Romana. Entretanto, crises econômicas, disputas pelo poder, dificuldades administrativas e invasões contribuíram para sua divisão. Em 476 d.C., o Império Romano do Ocidente chegou ao fim. Seu legado permaneceu no direito, na língua, na arquitetura e nas instituições políticas."
            }
        ],

        dates: [
            { date: "c. 2000 a.C.", title: "Civilização minoica", description: "Desenvolvimento da civilização cretense, uma das influências da cultura grega." },
            { date: "776 a.C.", title: "Primeiros Jogos Olímpicos tradicionais", description: "Data tradicionalmente associada à primeira realização dos Jogos Olímpicos na Grécia." },
            { date: "509 a.C.", title: "Início da República Romana", description: "Fim da Monarquia e estabelecimento do governo republicano em Roma." },
            { date: "490 a.C.", title: "Batalha de Maratona", description: "Vitória ateniense contra os persas durante as Guerras Médicas." },
            { date: "431–404 a.C.", title: "Guerra do Peloponeso", description: "Conflito entre Atenas e Esparta que enfraqueceu as cidades gregas." },
            { date: "336 a.C.", title: "Alexandre assume o poder", description: "Alexandre, o Grande, torna-se rei da Macedônia." },
            { date: "264–146 a.C.", title: "Guerras Púnicas", description: "Conflitos entre Roma e Cartago pelo domínio do Mediterrâneo." },
            { date: "27 a.C.", title: "Início do Império Romano", description: "Otávio Augusto torna-se o primeiro imperador romano." },
            { date: "476 d.C.", title: "Queda do Império Romano do Ocidente", description: "Marco tradicional do fim da Antiguidade na Europa Ocidental." }
        ],

        people: [
            { name: "Sócrates", role: "Filósofo grego que valorizava o questionamento e o diálogo como caminhos para o conhecimento." },
            { name: "Platão", role: "Filósofo grego, discípulo de Sócrates e fundador da Academia de Atenas." },
            { name: "Aristóteles", role: "Pensador que contribuiu para a filosofia, a política, a ciência e a lógica." },
            { name: "Alexandre, o Grande", role: "Rei da Macedônia que conquistou vastos territórios e difundiu a cultura helenística." },
            { name: "Júlio César", role: "General e político romano que teve papel decisivo na crise da República." },
            { name: "Otávio Augusto", role: "Primeiro imperador romano, responsável pela consolidação do novo regime." },
            { name: "Cícero", role: "Orador, político e filósofo romano que marcou a tradição republicana." }
        ],

        summary:
            "Grécia e Roma foram duas das principais civilizações da Antiguidade. Os gregos contribuíram para a filosofia, a democracia, o teatro e as artes. Os romanos destacaram-se pela expansão territorial, pelo direito e pela administração de um vasto império. Mesmo após seu desaparecimento político, as duas civilizações deixaram influências profundas na cultura, na política e na organização das sociedades atuais.",

        videoUrl: ""
    },

    // ========================================
    // 02 - AS CRUZADAS
    // ========================================

    "cruzadas": {
        number: "02",
        title: "As Cruzadas",
        category: "IDADE MÉDIA",
        symbol: "✥",

        shortDescription:
            "Entenda as expedições militares religiosas, seus interesses e suas consequências para a Europa e o Oriente.",

        introduction:
            "As Cruzadas foram expedições militares organizadas principalmente por cristãos da Europa Ocidental entre os séculos XI e XIII. Tinham como objetivo declarado conquistar ou recuperar territórios considerados sagrados, especialmente Jerusalém. Entretanto, também envolveram interesses políticos, econômicos e territoriais. Esses conflitos contribuíram para transformar as relações entre europeus e povos do Oriente.",

        sections: [
            {
                title: "O contexto da Europa medieval",
                content:
                    "Durante a Idade Média, a sociedade europeia era fortemente influenciada pelo feudalismo e pela Igreja Católica. A economia era predominantemente agrícola, e grande parte da população vivia no campo. A religião exercia influência sobre a política, a cultura e a vida cotidiana. Ao mesmo tempo, o crescimento populacional e a expansão comercial aumentavam o interesse por novas terras e rotas comerciais."
            },
            {
                title: "A origem das Cruzadas",
                content:
                    "Jerusalém era considerada uma cidade sagrada para cristãos, judeus e muçulmanos. No século XI, mudanças políticas e militares na região contribuíram para o surgimento das expedições cruzadistas. Em 1095, o papa Urbano II convocou os cristãos europeus a participar de uma expedição militar em direção ao Oriente. A convocação recebeu apoio de nobres, cavaleiros e pessoas de diferentes grupos sociais."
            },
            {
                title: "A Primeira Cruzada e a conquista de Jerusalém",
                content:
                    "A Primeira Cruzada começou em 1096 e reuniu diferentes grupos de combatentes europeus. Após uma longa jornada, os cruzados conquistaram Jerusalém em 1099, estabelecendo Estados cristãos na região. A conquista foi acompanhada por violência contra a população local. A vitória, entretanto, não garantiu estabilidade duradoura, pois os territórios conquistados continuaram sujeitos a disputas militares."
            },
            {
                title: "As principais expedições cruzadistas",
                content:
                    "Ao longo dos séculos XII e XIII, outras expedições foram organizadas. A Segunda Cruzada ocorreu após a perda do Condado de Edessa. A Terceira Cruzada contou com a participação de importantes monarcas europeus, como Ricardo Coração de Leão. A Quarta Cruzada, por sua vez, desviou-se de seu objetivo inicial e terminou com o saque de Constantinopla, em 1204, uma cidade cristã do Império Bizantino."
            },
            {
                title: "Interesses religiosos, políticos e econômicos",
                content:
                    "Embora a religião fosse uma justificativa central, as Cruzadas também envolveram interesses materiais. Nobres buscavam terras e prestígio, comerciantes desejavam ampliar suas atividades e governantes procuravam fortalecer seu poder. Para algumas pessoas, participar das expedições também representava uma oportunidade de obter perdão religioso, segundo as promessas feitas pela Igreja."
            },
            {
                title: "As consequências das Cruzadas",
                content:
                    "As Cruzadas não conseguiram manter o domínio cristão sobre Jerusalém. Entretanto, contribuíram para intensificar contatos entre Europa, Oriente Médio e Império Bizantino. O comércio mediterrâneo foi estimulado, e produtos, conhecimentos e técnicas circularam entre diferentes regiões. Também ocorreram destruições, perseguições religiosas e mortes de milhares de pessoas. As expedições contribuíram para transformações na sociedade medieval."
            },
            {
                title: "O legado histórico das Cruzadas",
                content:
                    "As Cruzadas deixaram marcas profundas nas relações entre cristãos e muçulmanos, além de influenciar a política europeia. Embora tenham sido apresentadas como guerras religiosas, seus motivos eram variados e envolviam disputas de poder e riqueza. O estudo desse período permite compreender como religião, política, economia e cultura estavam conectadas durante a Idade Média."
            }
        ],

        dates: [
            { date: "1095", title: "Concílio de Clermont", description: "O papa Urbano II convoca os cristãos para uma expedição militar ao Oriente." },
            { date: "1096", title: "Início da Primeira Cruzada", description: "Grupos de combatentes europeus iniciam a jornada em direção ao Oriente." },
            { date: "1099", title: "Conquista de Jerusalém", description: "Os cruzados conquistam Jerusalém e estabelecem Estados cristãos na região." },
            { date: "1147–1149", title: "Segunda Cruzada", description: "Expedição organizada após a conquista muçulmana de Edessa." },
            { date: "1187", title: "Batalha de Hattin", description: "Saladino derrota os cruzados e recupera Jerusalém." },
            { date: "1189–1192", title: "Terceira Cruzada", description: "Monarcas europeus tentam recuperar Jerusalém, sem conseguir conquistar a cidade." },
            { date: "1204", title: "Saque de Constantinopla", description: "A Quarta Cruzada termina com o ataque à capital bizantina." },
            { date: "1291", title: "Queda de Acre", description: "Os mamelucos conquistam o último grande centro cruzado na região." }
        ],

        people: [
            { name: "Urbano II", role: "Papa responsável pela convocação da Primeira Cruzada em 1095." },
            { name: "Saladino", role: "Líder muçulmano que reconquistou Jerusalém em 1187." },
            { name: "Ricardo Coração de Leão", role: "Rei da Inglaterra que participou da Terceira Cruzada." },
            { name: "Luís IX", role: "Rei francês que liderou expedições cruzadistas no século XIII." },
            { name: "Godofredo de Bulhão", role: "Um dos principais líderes da Primeira Cruzada." }
        ],

        summary:
            "As Cruzadas foram expedições militares que envolveram religião, política e economia durante a Idade Média. Apesar de não terem conseguido manter Jerusalém sob domínio cristão, estimularam contatos comerciais e culturais entre diferentes regiões. Também provocaram violência, perseguições e destruição. Seu estudo ajuda a compreender as relações entre as sociedades europeias e orientais medievais.",

        videoUrl: ""
    },

    // ========================================
    // 03 - RENASCIMENTO
    // ========================================

    "renascimento": {
        number: "03",
        title: "Renascimento",
        category: "IDADE MODERNA",
        symbol: "✧",

        shortDescription:
            "Descubra o movimento cultural, artístico e científico que transformou a Europa entre os séculos XIV e XVI.",

        introduction:
            "O Renascimento foi um movimento cultural, artístico e intelectual que se desenvolveu na Europa, especialmente entre os séculos XIV e XVI. Valorizava a razão, a observação, o conhecimento científico e a cultura da Antiguidade Clássica. Embora tenha mantido relações com a tradição religiosa, o movimento estimulou novas formas de compreender o ser humano e o mundo.",

        sections: [
            {
                title: "O contexto histórico do Renascimento",
                content:
                    "O Renascimento surgiu em um período de transformações na Europa. O crescimento das cidades, o fortalecimento do comércio e a ascensão da burguesia contribuíram para mudanças na sociedade. O desenvolvimento de atividades comerciais favoreceu o surgimento de grupos ricos que passaram a financiar artistas e estudiosos. As cidades italianas, como Florença, Veneza e Roma, tornaram-se importantes centros culturais."
            },
            {
                title: "Humanismo e antropocentrismo",
                content:
                    "O Humanismo valorizava a capacidade humana de pensar, aprender e transformar a realidade. Os humanistas estudavam textos da Grécia e de Roma antigas, buscando compreender diferentes aspectos da vida. O antropocentrismo destacava o ser humano como centro das reflexões, em contraste com a visão teocêntrica predominante em grande parte da sociedade medieval. Isso não significava necessariamente abandonar a religião, mas ampliar os interesses intelectuais."
            },
            {
                title: "O Renascimento nas artes",
                content:
                    "Os artistas renascentistas desenvolveram novas técnicas de pintura e escultura. A perspectiva permitiu representar profundidade e proporção nas imagens. O estudo da anatomia humana contribuiu para representações mais realistas do corpo. Temas religiosos continuaram presentes, mas cenas mitológicas, retratos e paisagens também ganharam destaque. A arte passou a valorizar a observação da natureza e as proporções humanas."
            },
            {
                title: "A ciência e o pensamento renascentista",
                content:
                    "O Renascimento estimulou a observação, a experimentação e o questionamento de ideias tradicionais. Estudiosos passaram a investigar a natureza e o funcionamento do universo com maior atenção aos fenômenos observáveis. Nicolau Copérnico defendeu o heliocentrismo, segundo o qual a Terra gira ao redor do Sol. Essas transformações ajudaram a preparar o desenvolvimento da Revolução Científica."
            },
            {
                title: "O mecenato e o financiamento das artes",
                content:
                    "O mecenato foi uma prática importante para o desenvolvimento artístico renascentista. Famílias ricas, governantes e membros da Igreja financiavam artistas, arquitetos e estudiosos. Em Florença, a família Médici tornou-se conhecida pelo apoio às artes e à cultura. Esse financiamento permitiu a produção de obras importantes e contribuiu para o prestígio político e cultural das cidades."
            },
            {
                title: "A imprensa e a difusão do conhecimento",
                content:
                    "A invenção da imprensa de tipos móveis por Johannes Gutenberg, em meados do século XV, facilitou a reprodução de livros. Antes disso, os manuscritos eram produzidos manualmente e tinham circulação limitada. Com a impressão, textos científicos, religiosos e literários passaram a alcançar mais pessoas. A imprensa contribuiu para a circulação de ideias e para a ampliação do acesso ao conhecimento."
            },
            {
                title: "O legado do Renascimento",
                content:
                    "O Renascimento transformou a arte, a ciência, a filosofia e a educação europeias. Suas ideias contribuíram para a valorização da investigação racional e da criatividade humana. Obras artísticas e descobertas científicas desse período continuam sendo estudadas e admiradas. O movimento também influenciou mudanças posteriores, como a Revolução Científica e diferentes transformações culturais da Europa moderna."
            }
        ],

        dates: [
            { date: "Século XIV", title: "Início do Renascimento italiano", description: "O movimento cultural começa a ganhar força em cidades italianas." },
            { date: "c. 1450", title: "Desenvolvimento da imprensa", description: "Gutenberg aperfeiçoa a impressão com tipos móveis na Europa." },
            { date: "1486", title: "Discurso sobre a dignidade do homem", description: "Giovanni Pico della Mirandola apresenta uma reflexão importante sobre a capacidade humana." },
            { date: "1498", title: "Última Ceia", description: "Leonardo da Vinci conclui uma de suas obras mais conhecidas." },
            { date: "1503–1506", title: "Pintura da Mona Lisa", description: "Leonardo da Vinci trabalha em um dos retratos mais famosos da história." },
            { date: "1508–1512", title: "Pintura do teto da Capela Sistina", description: "Michelangelo realiza uma de suas maiores obras artísticas." },
            { date: "1543", title: "Publicação da obra de Copérnico", description: "O modelo heliocêntrico é apresentado em sua obra sobre os movimentos dos astros." },
            { date: "Século XVI", title: "Difusão do Renascimento", description: "O movimento alcança diferentes regiões da Europa." }
        ],

        people: [
            { name: "Leonardo da Vinci", role: "Artista e estudioso conhecido por obras como Mona Lisa e A Última Ceia." },
            { name: "Michelangelo", role: "Escultor, pintor e arquiteto responsável por obras como Davi e o teto da Capela Sistina." },
            { name: "Rafael Sanzio", role: "Pintor italiano conhecido por suas composições equilibradas e pela obra A Escola de Atenas." },
            { name: "Nicolau Copérnico", role: "Astrônomo que defendeu o modelo heliocêntrico." },
            { name: "Galileu Galilei", role: "Cientista que contribuiu para o desenvolvimento da astronomia e da física." },
            { name: "Johannes Gutenberg", role: "Responsável pelo aperfeiçoamento da imprensa de tipos móveis na Europa." },
            { name: "Maquiavel", role: "Pensador político italiano, autor de O Príncipe." }
        ],

        summary:
            "O Renascimento foi um movimento que transformou a cultura europeia ao valorizar a razão, a observação e a criatividade humana. Nas artes, desenvolveu técnicas como a perspectiva e o estudo da anatomia. Na ciência, incentivou novas investigações sobre a natureza e o universo. A imprensa ajudou a difundir conhecimentos, enquanto o mecenato financiou artistas e estudiosos. Seu legado permanece na cultura, na ciência e na educação.",

        videoUrl: ""
    },

    // ========================================
    // 04 - REVOLUÇÃO FRANCESA
    // ========================================

    "revolucao-francesa": {
        number: "04",
        title: "Revolução Francesa",
        category: "IDADE MODERNA",
        symbol: "1789",

        shortDescription:
            "Compreenda a revolução que derrubou o absolutismo francês e transformou a política mundial.",

        introduction:
            "A Revolução Francesa foi um dos acontecimentos mais importantes da história moderna. Iniciada em 1789, representou uma reação às desigualdades sociais, à crise econômica e ao absolutismo monárquico. O movimento questionou os privilégios da nobreza e do clero, fortaleceu ideias de liberdade e igualdade e provocou mudanças profundas na organização política da França e de outros países.",

        sections: [
            {
                title: "A sociedade francesa antes da revolução",
                content:
                    "Antes de 1789, a França era uma monarquia absolutista, na qual o rei concentrava grande parte do poder. A sociedade estava dividida em três estados: o Primeiro Estado, formado pelo clero; o Segundo Estado, composto pela nobreza; e o Terceiro Estado, que reunia burgueses, trabalhadores urbanos e camponeses. Os dois primeiros grupos possuíam privilégios, enquanto a maioria da população enfrentava impostos e dificuldades econômicas."
            },
            {
                title: "A crise econômica e os ideais iluministas",
                content:
                    "A França enfrentava uma grave crise financeira, agravada por gastos da monarquia, conflitos militares e dificuldades na produção agrícola. O aumento do preço dos alimentos provocou insatisfação popular. Ao mesmo tempo, as ideias iluministas defendiam a liberdade, a igualdade jurídica e a limitação do poder absoluto. Pensadores como Montesquieu, Voltaire e Rousseau influenciaram os debates políticos da época."
            },
            {
                title: "A convocação dos Estados Gerais",
                content:
                    "Em 1789, o rei Luís XVI convocou os Estados Gerais para discutir a crise financeira. O Terceiro Estado exigia maior participação nas decisões políticas, pois representava a maior parte da população. Diante dos conflitos, seus representantes proclamaram-se Assembleia Nacional e passaram a defender a elaboração de uma Constituição. Esse processo marcou o início da ruptura com o absolutismo."
            },
            {
                title: "A queda da Bastilha e o início da revolução",
                content:
                    "Em 14 de julho de 1789, a população de Paris tomou a Bastilha, uma fortaleza e prisão que simbolizava o poder absolutista. O acontecimento tornou-se um marco da Revolução Francesa. No campo, camponeses também se revoltaram contra obrigações feudais. Em agosto, foram aprovadas medidas que aboliram privilégios feudais e a Declaração dos Direitos do Homem e do Cidadão."
            },
            {
                title: "A monarquia constitucional e a República",
                content:
                    "Em 1791, foi aprovada uma Constituição que limitava os poderes do rei e estabelecia uma monarquia constitucional. Entretanto, os conflitos políticos continuaram. Em 1792, a monarquia foi derrubada e a República proclamada. No ano seguinte, Luís XVI foi condenado e executado. A França passou por disputas entre grupos revolucionários com diferentes projetos para o futuro do país."
            },
            {
                title: "O Período do Terror e o governo jacobino",
                content:
                    "Entre 1793 e 1794, os jacobinos, liderados por figuras como Maximilien Robespierre, assumiram o controle do governo. O período ficou conhecido como Terror, marcado por perseguições e execuções de pessoas consideradas inimigas da revolução. Apesar da violência, também foram adotadas medidas como o controle de preços e mudanças sociais. Em 1794, Robespierre foi derrubado e executado."
            },
            {
                title: "O Diretório, Napoleão e o legado revolucionário",
                content:
                    "Após a queda dos jacobinos, foi estabelecido o Diretório, um governo marcado por instabilidade política e dificuldades econômicas. Em 1799, Napoleão Bonaparte liderou o golpe do 18 de Brumário e assumiu o poder. A Revolução Francesa encerrou o absolutismo na França e difundiu ideias de cidadania, igualdade jurídica e soberania nacional, influenciando movimentos políticos em diferentes partes do mundo."
            }
        ],

        dates: [
            { date: "1789", title: "Convocação dos Estados Gerais", description: "Luís XVI convoca representantes dos três estados para discutir a crise francesa." },
            { date: "14 de julho de 1789", title: "Queda da Bastilha", description: "A população de Paris toma a fortaleza, símbolo do absolutismo." },
            { date: "Agosto de 1789", title: "Declaração dos Direitos do Homem e do Cidadão", description: "Documento afirma princípios de liberdade e igualdade jurídica." },
            { date: "1791", title: "Constituição francesa", description: "Estabelecimento de uma monarquia constitucional." },
            { date: "1792", title: "Proclamação da República", description: "A monarquia é abolida e a França torna-se uma república." },
            { date: "1793", title: "Execução de Luís XVI", description: "O antigo rei é condenado e executado na guilhotina." },
            { date: "1793–1794", title: "Período do Terror", description: "Fase de repressão política e execuções durante o governo jacobino." },
            { date: "1799", title: "Golpe do 18 de Brumário", description: "Napoleão Bonaparte assume o poder e encerra o período revolucionário." }
        ],

        people: [
            { name: "Luís XVI", role: "Rei da França durante o início da Revolução Francesa." },
            { name: "Maria Antonieta", role: "Rainha francesa, associada à crise e às críticas contra a monarquia." },
            { name: "Maximilien Robespierre", role: "Líder jacobino e uma das principais figuras do Período do Terror." },
            { name: "Georges Danton", role: "Revolucionário que teve papel importante nos primeiros anos da República." },
            { name: "Jean-Paul Marat", role: "Jornalista e revolucionário ligado aos setores mais radicais." },
            { name: "Napoleão Bonaparte", role: "General que assumiu o poder em 1799 e encerrou a fase revolucionária." },
            { name: "Olympe de Gouges", role: "Escritora que defendeu os direitos das mulheres durante a revolução." }
        ],

        summary:
            "A Revolução Francesa começou em 1789, em meio à crise econômica, às desigualdades sociais e à contestação do absolutismo. A queda da Bastilha simbolizou o início da transformação política. O processo passou por diferentes governos, incluindo a monarquia constitucional, a República e o Período do Terror. Em 1799, Napoleão assumiu o poder. A revolução difundiu ideias de liberdade, igualdade jurídica e cidadania que influenciaram o mundo contemporâneo.",

        videoUrl: ""
    },

    // ========================================
    // 05 - REVOLUÇÃO HAITIANA
    // ========================================

    "revolucao-haitiana": {
        number: "05",
        title: "Revolução Haitiana",
        category: "IDADE CONTEMPORÂNEA",
        symbol: "★",

        shortDescription:
            "Conheça a revolução de escravizados que levou à independência do Haiti e marcou a luta contra a escravidão.",

        introduction:
            "A Revolução Haitiana foi um dos acontecimentos mais importantes da história das Américas. Iniciada em 1791, na então colônia francesa de Saint-Domingue, foi protagonizada principalmente por pessoas escravizadas que lutavam contra a exploração e a violência do sistema colonial. O movimento resultou na independência do Haiti, em 1804, tornando o país a primeira república negra independente e a primeira nação das Américas a abolir a escravidão de forma permanente após uma revolução de escravizados.",

        sections: [
            {
                title: "Saint-Domingue e a sociedade colonial",
                content:
                    "Antes da revolução, Saint-Domingue era uma colônia francesa localizada na parte ocidental da ilha de Hispaniola. Sua economia era baseada na produção de açúcar e café para exportação. A riqueza colonial dependia do trabalho forçado de centenas de milhares de africanos escravizados. A sociedade era profundamente desigual, com grandes proprietários brancos, pessoas livres de cor e uma enorme população escravizada."
            },
            {
                title: "A influência da Revolução Francesa",
                content:
                    "A Revolução Francesa, iniciada em 1789, difundiu ideias de liberdade e igualdade que também alcançaram as colônias. Entretanto, os direitos proclamados na França não eram aplicados igualmente à população colonial. Pessoas livres de cor exigiam igualdade jurídica, enquanto os escravizados buscavam a liberdade. Essas contradições contribuíram para aumentar as tensões em Saint-Domingue."
            },
            {
                title: "O início da revolta em 1791",
                content:
                    "Em agosto de 1791, uma grande revolta de escravizados começou no norte da colônia. Plantações foram incendiadas e os revoltosos passaram a enfrentar as forças coloniais. O movimento reuniu pessoas que buscavam liberdade e o fim do sistema escravista. A revolta transformou-se em uma guerra complexa, envolvendo diferentes grupos políticos e potências estrangeiras interessadas no controle da região."
            },
            {
                title: "Toussaint Louverture e a organização da luta",
                content:
                    "Toussaint Louverture tornou-se uma das principais lideranças da revolução. Inicialmente ligado às forças espanholas, passou a apoiar a França após a abolição da escravidão nas colônias francesas, em 1794. Com habilidade militar e política, organizou forças revolucionárias e conquistou influência sobre grande parte da ilha. Em 1801, promulgou uma Constituição para Saint-Domingue, embora ainda mantivesse uma ligação formal com a França."
            },
            {
                title: "A intervenção de Napoleão e a resistência",
                content:
                    "Napoleão Bonaparte enviou tropas à colônia em 1802 para restabelecer o controle francês. Toussaint Louverture foi capturado e enviado à França, onde morreu preso em 1803. Mesmo assim, a resistência continuou sob novas lideranças. A população revolucionária enfrentou as tropas francesas e conseguiu derrotá-las, impedindo a restauração do domínio colonial e da escravidão."
            },
            {
                title: "A independência do Haiti",
                content:
                    "Em 1º de janeiro de 1804, Jean-Jacques Dessalines declarou a independência do Haiti. O novo país rompeu com o domínio colonial francês e tornou-se símbolo da luta contra a escravidão e o racismo. A vitória representou uma transformação histórica, pois uma população anteriormente escravizada conseguiu derrotar uma potência europeia e estabelecer um Estado independente."
            },
            {
                title: "As consequências e o legado da revolução",
                content:
                    "A independência do Haiti inspirou movimentos abolicionistas e de libertação em diferentes regiões. Entretanto, o país enfrentou isolamento diplomático, dificuldades econômicas e pressões internacionais. Em 1825, a França impôs ao Haiti uma indenização financeira em troca do reconhecimento de sua independência, criando um enorme peso econômico. Apesar dos desafios, a Revolução Haitiana permanece como referência mundial na luta por liberdade, igualdade e autodeterminação."
            }
        ],

        dates: [
            { date: "1789", title: "Início da Revolução Francesa", description: "As ideias revolucionárias influenciam os debates sobre direitos nas colônias." },
            { date: "1791", title: "Início da Revolução Haitiana", description: "Uma grande revolta de escravizados começa em Saint-Domingue." },
            { date: "1793", title: "Abolição local da escravidão", description: "Representantes franceses na colônia anunciam medidas de abolição." },
            { date: "1794", title: "Abolição nas colônias francesas", description: "A Convenção Nacional decreta a abolição da escravidão nas colônias francesas." },
            { date: "1801", title: "Constituição de Toussaint Louverture", description: "É promulgada uma Constituição para Saint-Domingue." },
            { date: "1802", title: "Expedição francesa", description: "Napoleão envia tropas para tentar recuperar o controle da colônia." },
            { date: "1803", title: "Batalha de Vertières", description: "As forças haitianas derrotam os franceses em um confronto decisivo." },
            { date: "1º de janeiro de 1804", title: "Independência do Haiti", description: "Jean-Jacques Dessalines proclama a independência do país." },
            { date: "1825", title: "Indenização imposta pela França", description: "O Haiti aceita uma pesada indenização em troca do reconhecimento francês." }
        ],

        people: [
            { name: "Toussaint Louverture", role: "Líder político e militar que organizou parte fundamental da revolução." },
            { name: "Jean-Jacques Dessalines", role: "Líder revolucionário que proclamou a independência do Haiti em 1804." },
            { name: "Henri Christophe", role: "Líder militar que participou da luta pela independência haitiana." },
            { name: "Alexandre Pétion", role: "Liderança revolucionária que teve papel importante na história do Haiti independente." },
            { name: "Napoleão Bonaparte", role: "Governante francês que tentou restabelecer o domínio colonial sobre Saint-Domingue." },
            { name: "Cécile Fatiman", role: "Figura tradicionalmente associada à cerimônia de Bois Caïman, ligada ao início da revolta de 1791." }
        ],

        summary:
            "A Revolução Haitiana começou em 1791, quando pessoas escravizadas de Saint-Domingue se rebelaram contra o sistema colonial francês. Influenciada pelas ideias de liberdade da Revolução Francesa, a luta avançou sob lideranças como Toussaint Louverture e Jean-Jacques Dessalines. Em 1804, o Haiti conquistou sua independência. A revolução tornou-se um marco na luta contra a escravidão e o colonialismo, embora o novo país tenha enfrentado isolamento e dificuldades econômicas.",

        videoUrl: ""
    },

    // ========================================
    // 06 - PRIMEIRA GUERRA MUNDIAL
    // ========================================

    "primeira-guerra": {
        number: "06",
        title: "Primeira Guerra Mundial",
        category: "IDADE CONTEMPORÂNEA",
        symbol: "1914",

        shortDescription:
            "Entenda as causas, os acontecimentos e as consequências do conflito que transformou o mundo no início do século XX.",

        introduction:
            "A Primeira Guerra Mundial ocorreu entre 1914 e 1918 e envolveu diversas potências mundiais. O conflito foi resultado de rivalidades imperialistas, disputas territoriais, nacionalismos e alianças militares. O assassinato do arquiduque Francisco Ferdinando, em 1914, desencadeou uma crise que levou à guerra. O conflito provocou milhões de mortes e modificou profundamente a política e a sociedade internacionais.",

        sections: [
            {
                title: "O contexto internacional antes da guerra",
                content:
                    "No início do século XX, as principais potências europeias disputavam territórios, mercados consumidores e matérias-primas. O imperialismo aumentava as tensões entre países, especialmente na África e na Ásia. Ao mesmo tempo, o nacionalismo fortalecia rivalidades e movimentos de independência. A industrialização também impulsionava a produção de armamentos e a preparação militar das grandes potências."
            },
            {
                title: "As alianças militares e a corrida armamentista",
                content:
                    "A Europa estava dividida em dois grandes sistemas de alianças. A Tríplice Aliança reunia inicialmente Alemanha, Áustria-Hungria e Itália. A Tríplice Entente era formada por França, Reino Unido e Rússia. A Itália posteriormente mudou de lado, e outros países entraram no conflito. A corrida armamentista aumentava a tensão, pois as nações investiam em exércitos, navios e novas tecnologias militares."
            },
            {
                title: "O estopim da guerra",
                content:
                    "Em 28 de junho de 1914, o arquiduque Francisco Ferdinando, herdeiro do trono austro-húngaro, foi assassinado em Sarajevo por um nacionalista sérvio-bósnio. O episódio provocou uma crise diplomática entre Áustria-Hungria e Sérvia. As alianças militares fizeram com que diferentes países fossem envolvidos. Em agosto de 1914, a guerra já havia se espalhado por grande parte da Europa."
            },
            {
                title: "A guerra de trincheiras",
                content:
                    "Na Frente Ocidental, os exércitos construíram extensas redes de trincheiras para se proteger dos ataques inimigos. A guerra tornou-se marcada pelo desgaste, pela falta de condições sanitárias e por enormes perdas humanas. Metralhadoras, artilharia pesada, gases tóxicos e arame farpado dificultavam os avanços militares. Batalhas como Verdun e Somme ficaram conhecidas pelo número elevado de mortos."
            },
            {
                title: "A participação de outros países e a entrada dos Estados Unidos",
                content:
                    "O conflito ultrapassou as fronteiras europeias e envolveu colônias, territórios e países de outros continentes. Em 1917, os Estados Unidos entraram na guerra ao lado da Entente, contribuindo com recursos econômicos e militares. No mesmo ano, a Rússia passou por revoluções e iniciou seu processo de saída do conflito, formalizado pelo Tratado de Brest-Litovsk em 1918."
            },
            {
                title: "O fim da guerra e o Tratado de Versalhes",
                content:
                    "Em 11 de novembro de 1918, foi assinado o armistício que encerrou os combates. Em 1919, o Tratado de Versalhes estabeleceu as condições de paz impostas à Alemanha, incluindo perda de territórios, limitações militares e pagamento de indenizações. O acordo provocou ressentimentos e dificuldades econômicas. Essas condições contribuíram para tensões que posteriormente favoreceram a ascensão do nazismo."
            },
            {
                title: "As consequências da Primeira Guerra Mundial",
                content:
                    "A guerra provocou milhões de mortes, destruição de cidades e graves crises econômicas. Os impérios Alemão, Austro-Húngaro, Russo e Otomano foram desfeitos ou profundamente transformados. Novos países surgiram na Europa, e a Liga das Nações foi criada com o objetivo de preservar a paz. Entretanto, a organização não conseguiu impedir novas tensões internacionais."
            }
        ],

        dates: [
            { date: "28 de junho de 1914", title: "Assassinato de Francisco Ferdinando", description: "O arquiduque austro-húngaro é assassinado em Sarajevo." },
            { date: "Julho de 1914", title: "Crise de julho", description: "A crise diplomática entre Áustria-Hungria e Sérvia desencadeia a mobilização militar." },
            { date: "Agosto de 1914", title: "Início da guerra", description: "As potências europeias entram em conflito após a sequência de declarações de guerra." },
            { date: "1915", title: "Guerra de trincheiras", description: "O conflito na Frente Ocidental se caracteriza pelo combate prolongado em trincheiras." },
            { date: "1916", title: "Batalhas de Verdun e Somme", description: "Dois dos confrontos mais violentos da guerra." },
            { date: "1917", title: "Entrada dos Estados Unidos", description: "Os norte-americanos entram no conflito ao lado da Entente." },
            { date: "1917", title: "Revolução Russa", description: "A Rússia passa por transformações políticas que levam à sua saída da guerra." },
            { date: "11 de novembro de 1918", title: "Armistício", description: "Os combates são encerrados." },
            { date: "1919", title: "Tratado de Versalhes", description: "Acordo estabelece as condições de paz e penalidades à Alemanha." }
        ],

        people: [
            { name: "Francisco Ferdinando", role: "Arquiduque austro-húngaro cujo assassinato desencadeou a crise de 1914." },
            { name: "Gavrilo Princip", role: "Nacionalista sérvio-bósnio responsável pelo assassinato do arquiduque." },
            { name: "Guilherme II", role: "Imperador alemão durante grande parte da Primeira Guerra Mundial." },
            { name: "Woodrow Wilson", role: "Presidente dos Estados Unidos durante a guerra, defensor da criação da Liga das Nações." },
            { name: "Vladimir Lenin", role: "Líder bolchevique que conduziu a Revolução Russa de 1917." },
            { name: "Georges Clemenceau", role: "Primeiro-ministro francês durante as negociações de paz." },
            { name: "David Lloyd George", role: "Primeiro-ministro britânico durante parte do conflito e das negociações de paz." }
        ],

        summary:
            "A Primeira Guerra Mundial aconteceu entre 1914 e 1918, em meio a rivalidades imperialistas, nacionalismos e alianças militares. O assassinato de Francisco Ferdinando desencadeou o conflito, que se tornou uma guerra de grandes proporções. As trincheiras, as novas tecnologias e a participação de potências de diferentes continentes marcaram o período. O Tratado de Versalhes encerrou formalmente a guerra com condições severas para a Alemanha, enquanto a Europa enfrentava profundas transformações políticas e econômicas.",

        videoUrl: ""
    },

    // ========================================
    // 07 - SEGUNDA GUERRA MUNDIAL
    // ========================================

    "segunda-guerra": {
        number: "07",
        title: "Segunda Guerra Mundial",
        category: "IDADE CONTEMPORÂNEA",
        symbol: "1939",

        shortDescription:
            "Estude o maior conflito militar da história, suas causas, os regimes totalitários e as consequências mundiais.",

        introduction:
            "A Segunda Guerra Mundial ocorreu entre 1939 e 1945 e envolveu países de diferentes continentes. Foi resultado de tensões não resolvidas após a Primeira Guerra Mundial, da crise econômica e da expansão de regimes totalitários. O conflito opôs principalmente os Aliados às potências do Eixo. Ficou marcado pelo Holocausto, pela utilização de armas nucleares e por enormes perdas humanas e materiais.",

        sections: [
            {
                title: "O mundo após a Primeira Guerra Mundial",
                content:
                    "O fim da Primeira Guerra Mundial não garantiu uma paz duradoura. O Tratado de Versalhes impôs condições severas à Alemanha, gerando ressentimento e dificuldades econômicas. A crise de 1929 agravou o desemprego e a instabilidade em vários países. Nesse cenário, movimentos autoritários ganharam força ao prometer ordem, recuperação econômica e fortalecimento nacional."
            },
            {
                title: "O crescimento dos regimes totalitários",
                content:
                    "Na Itália, Benito Mussolini estabeleceu o fascismo, caracterizado pelo nacionalismo extremo, autoritarismo e repressão aos opositores. Na Alemanha, Adolf Hitler e o Partido Nazista defenderam o racismo, o antissemitismo e a expansão territorial. No Japão, o militarismo também fortaleceu projetos de expansão na Ásia. Esses regimes contribuíram para o aumento das tensões internacionais."
            },
            {
                title: "A expansão nazista e o início da guerra",
                content:
                    "Durante a década de 1930, a Alemanha ampliou seu poder militar e passou a ocupar territórios, desrespeitando as restrições do Tratado de Versalhes. Em setembro de 1939, tropas alemãs invadiram a Polônia. Em resposta, Reino Unido e França declararam guerra à Alemanha. Esse acontecimento marcou o início oficial da Segunda Guerra Mundial."
            },
            {
                title: "As principais fases do conflito",
                content:
                    "Nos primeiros anos, a Alemanha conquistou diversos territórios europeus utilizando a estratégia conhecida como guerra-relâmpago, baseada em ataques rápidos e coordenados. Em 1941, invadiu a União Soviética e o Japão atacou a base norte-americana de Pearl Harbor, levando os Estados Unidos à guerra. A partir de 1942 e 1943, os Aliados conquistaram importantes vitórias, como em Stalingrado e Midway, alterando o equilíbrio do conflito."
            },
            {
                title: "O Holocausto e a perseguição nazista",
                content:
                    "O regime nazista promoveu uma política de perseguição racial e política contra judeus e outros grupos considerados inimigos. O Holocausto foi o genocídio sistemático de aproximadamente seis milhões de judeus, além da perseguição e morte de milhões de outras pessoas. Campos de concentração e extermínio foram utilizados para aprisionar, explorar e assassinar populações. O estudo desse crime é essencial para compreender os perigos do racismo e do autoritarismo."
            },
            {
                title: "O Brasil na Segunda Guerra Mundial",
                content:
                    "Inicialmente, o Brasil manteve uma posição de neutralidade, mas declarou guerra às potências do Eixo em 1942, após ataques a navios brasileiros. Em 1944, a Força Expedicionária Brasileira foi enviada à Itália para lutar ao lado dos Aliados. Os soldados brasileiros participaram de operações importantes, como a conquista de Monte Castello. A participação do Brasil representou um momento significativo de sua história militar e diplomática."
            },
            {
                title: "O fim da guerra e suas consequências",
                content:
                    "Em maio de 1945, a Alemanha nazista se rendeu após o avanço das forças aliadas. No Pacífico, o Japão continuou lutando até agosto, quando os Estados Unidos lançaram bombas atômicas sobre Hiroshima e Nagasaki. O Japão anunciou sua rendição em agosto, formalizada em setembro de 1945. A guerra deixou milhões de mortos, cidades destruídas e contribuiu para a criação da Organização das Nações Unidas e para o início da Guerra Fria."
            }
        ],

        dates: [
            { date: "1933", title: "Hitler chega ao poder", description: "Adolf Hitler assume o cargo de chanceler da Alemanha." },
            { date: "1938", title: "Anexação da Áustria", description: "A Alemanha incorpora a Áustria ao seu território, no processo conhecido como Anschluss." },
            { date: "1º de setembro de 1939", title: "Invasão da Polônia", description: "A Alemanha invade a Polônia, iniciando a Segunda Guerra Mundial." },
            { date: "1940", title: "Queda da França", description: "As forças alemãs ocupam grande parte do território francês." },
            { date: "22 de junho de 1941", title: "Operação Barbarossa", description: "A Alemanha invade a União Soviética." },
            { date: "7 de dezembro de 1941", title: "Ataque a Pearl Harbor", description: "O Japão ataca uma base naval dos Estados Unidos." },
            { date: "1942–1943", title: "Batalha de Stalingrado", description: "A União Soviética derrota as forças alemãs em uma batalha decisiva." },
            { date: "6 de junho de 1944", title: "Dia D", description: "Os Aliados desembarcam na Normandia, iniciando uma grande ofensiva na Europa Ocidental." },
            { date: "8 de maio de 1945", title: "Rendição alemã", description: "A Alemanha se rende e a guerra termina na Europa." },
            { date: "Agosto de 1945", title: "Bombas atômicas", description: "Os Estados Unidos lançam bombas atômicas sobre Hiroshima e Nagasaki." },
            { date: "2 de setembro de 1945", title: "Rendição japonesa", description: "O Japão formaliza sua rendição, encerrando a guerra." }
        ],

        people: [
            { name: "Adolf Hitler", role: "Ditador nazista da Alemanha e uma das principais figuras responsáveis pela guerra." },
            { name: "Benito Mussolini", role: "Líder fascista italiano e aliado da Alemanha nazista." },
            { name: "Winston Churchill", role: "Primeiro-ministro britânico durante grande parte do conflito." },
            { name: "Franklin D. Roosevelt", role: "Presidente dos Estados Unidos durante a maior parte da guerra." },
            { name: "Joseph Stalin", role: "Líder da União Soviética durante o conflito." },
            { name: "Charles de Gaulle", role: "Líder da resistência francesa no exílio e posteriormente presidente da França." },
            { name: "Anne Frank", role: "Jovem judia cujo diário se tornou um importante testemunho da perseguição nazista." },
            { name: "Getúlio Vargas", role: "Presidente do Brasil durante a participação brasileira na guerra." }
        ],

        summary:
            "A Segunda Guerra Mundial ocorreu entre 1939 e 1945 e foi marcada pela expansão dos regimes totalitários, pelas disputas territoriais e pelas tensões deixadas pela Primeira Guerra. O conflito envolveu os Aliados e as potências do Eixo, provocando milhões de mortes. O Holocausto representou um dos maiores crimes contra a humanidade. A participação de países como o Brasil e o uso de bombas atômicas marcaram o conflito. Após a vitória dos Aliados, foi criada a ONU e iniciou-se uma nova ordem internacional.",

        videoUrl: ""
    },

    // ========================================
    // 08 - GUERRA FRIA
    // ========================================

    "guerra-fria": {
        number: "08",
        title: "Guerra Fria",
        category: "IDADE CONTEMPORÂNEA",
        symbol: "1947",

        shortDescription:
            "Entenda a disputa política, econômica, ideológica e tecnológica entre Estados Unidos e União Soviética.",

        introduction:
            "A Guerra Fria foi um período de rivalidade política, econômica, militar e ideológica entre os Estados Unidos e a União Soviética, iniciado após a Segunda Guerra Mundial. As duas potências representavam modelos diferentes de organização econômica e política: o capitalismo e o socialismo soviético. Apesar de não terem entrado em uma guerra direta de grande escala entre si, apoiaram conflitos em outras regiões, disputaram influência internacional e desenvolveram uma intensa corrida armamentista e tecnológica.",

        sections: [
            {
                title: "A origem da Guerra Fria",
                content:
                    "Após a Segunda Guerra Mundial, Estados Unidos e União Soviética emergiram como as duas maiores potências mundiais. A Europa estava enfraquecida, e o mundo passou a ser marcado pela disputa entre os dois países. Os Estados Unidos defendiam o capitalismo e a economia de mercado, enquanto a União Soviética adotava um sistema socialista de economia planificada e partido único. A desconfiança entre as potências contribuiu para o início da Guerra Fria."
            },
            {
                title: "A divisão do mundo em blocos",
                content:
                    "O mundo passou a ser dividido em áreas de influência. Os Estados Unidos lideravam o bloco capitalista, enquanto a União Soviética comandava o bloco socialista. Em 1947, a Doutrina Truman estabeleceu uma política norte-americana de contenção da expansão do comunismo. No mesmo contexto, o Plano Marshall ofereceu ajuda econômica para a reconstrução da Europa Ocidental. A União Soviética respondeu fortalecendo sua influência sobre os países do Leste Europeu."
            },
            {
                title: "A corrida armamentista e o medo nuclear",
                content:
                    "As duas potências desenvolveram enormes arsenais militares, incluindo armas nucleares e mísseis de longo alcance. A produção de bombas atômicas e posteriormente de bombas de hidrogênio criou o risco de uma guerra capaz de destruir grande parte da humanidade. Esse cenário ficou conhecido como equilíbrio do terror, pois cada potência tinha capacidade de responder a um ataque nuclear com uma destruição devastadora."
            },
            {
                title: "A corrida espacial e tecnológica",
                content:
                    "A disputa também ocorreu no campo científico e tecnológico. Em 1957, a União Soviética lançou o Sputnik, primeiro satélite artificial da Terra. Em 1961, Yuri Gagarin tornou-se o primeiro ser humano a viajar ao espaço. Os Estados Unidos responderam investindo em seu programa espacial e, em 1969, a missão Apollo 11 levou os primeiros seres humanos à superfície da Lua. A corrida espacial demonstrava o poder tecnológico e científico das duas potências."
            },
            {
                title: "Guerras indiretas e disputas internacionais",
                content:
                    "Embora Estados Unidos e União Soviética não tenham travado uma guerra direta entre si, apoiaram diferentes lados em conflitos regionais. A Guerra da Coreia, entre 1950 e 1953, terminou com a divisão da península. A Guerra do Vietnã envolveu forças comunistas e anticomunistas, contando com intervenção norte-americana. A Guerra do Afeganistão, iniciada em 1979 com a intervenção soviética, também se tornou um conflito importante da disputa internacional."
            },
            {
                title: "O Muro de Berlim e as tensões europeias",
                content:
                    "A Alemanha foi dividida após a Segunda Guerra Mundial em áreas de influência das potências vencedoras. Berlim também ficou dividida entre setores ocidentais e oriental. Em 1961, o governo da Alemanha Oriental iniciou a construção do Muro de Berlim, que separou famílias e impediu a livre circulação entre as duas partes da cidade. O muro tornou-se um dos maiores símbolos da divisão do mundo durante a Guerra Fria."
            },
            {
                title: "O fim da Guerra Fria",
                content:
                    "Durante a década de 1980, a União Soviética enfrentou dificuldades econômicas e políticas. Mikhail Gorbachev iniciou reformas conhecidas como Perestroika, voltada à reestruturação econômica, e Glasnost, relacionada à abertura política e à transparência. Em 1989, o Muro de Berlim foi derrubado, simbolizando o enfraquecimento da divisão europeia. Em 1991, a União Soviética foi dissolvida, encerrando oficialmente a Guerra Fria."
            }
        ],

        dates: [
            { date: "1945", title: "Fim da Segunda Guerra Mundial", description: "Estados Unidos e União Soviética emergem como grandes potências mundiais." },
            { date: "1947", title: "Doutrina Truman", description: "Os Estados Unidos anunciam uma política de contenção da expansão comunista." },
            { date: "1948–1949", title: "Bloqueio de Berlim", description: "A União Soviética bloqueia os acessos terrestres a Berlim Ocidental." },
            { date: "1949", title: "Criação da OTAN", description: "Países ocidentais estabelecem uma aliança militar liderada pelos Estados Unidos." },
            { date: "1950–1953", title: "Guerra da Coreia", description: "Conflito termina com a divisão da península coreana." },
            { date: "1957", title: "Lançamento do Sputnik", description: "A União Soviética coloca em órbita o primeiro satélite artificial." },
            { date: "1961", title: "Construção do Muro de Berlim", description: "A cidade é dividida fisicamente entre os setores oriental e ocidental." },
            { date: "1962", title: "Crise dos Mísseis de Cuba", description: "Estados Unidos e União Soviética chegam perto de um confronto nuclear." },
            { date: "1969", title: "Chegada do homem à Lua", description: "A missão Apollo 11 leva astronautas norte-americanos à superfície lunar." },
            { date: "1989", title: "Queda do Muro de Berlim", description: "A população começa a derrubar o símbolo da divisão alemã." },
            { date: "1991", title: "Dissolução da União Soviética", description: "O fim da União Soviética marca o encerramento da Guerra Fria." }
        ],

        people: [
            { name: "Harry S. Truman", role: "Presidente dos Estados Unidos responsável pela Doutrina Truman." },
            { name: "Joseph Stalin", role: "Líder soviético durante os primeiros anos da Guerra Fria." },
            { name: "John F. Kennedy", role: "Presidente norte-americano durante a Crise dos Mísseis de Cuba." },
            { name: "Nikita Khrushchev", role: "Líder soviético durante parte da década de 1950 e início dos anos 1960." },
            { name: "Yuri Gagarin", role: "Cosmonauta soviético que se tornou o primeiro ser humano no espaço." },
            { name: "Mikhail Gorbachev", role: "Líder soviético responsável pelas reformas que contribuíram para o fim da Guerra Fria." },
            { name: "Ronald Reagan", role: "Presidente dos Estados Unidos durante os últimos anos da Guerra Fria." },
            { name: "Nelson Mandela", role: "Líder sul-africano cuja trajetória política se relacionou às disputas internacionais do período." }
        ],

        summary:
            "A Guerra Fria foi marcada pela rivalidade entre Estados Unidos e União Soviética após a Segunda Guerra Mundial. Os dois países disputaram influência política, econômica, militar e tecnológica. A corrida armamentista criou o risco de uma guerra nuclear, enquanto conflitos indiretos ocorreram em diferentes regiões. A corrida espacial e a construção do Muro de Berlim simbolizaram a competição entre os blocos. As reformas soviéticas, a queda do Muro em 1989 e a dissolução da União Soviética em 1991 marcaram o fim do período.",

        videoUrl: ""
    }

};


// ========================================
// FUNÇÕES AUXILIARES
// ========================================

function createElement(tag, className, content) {

    const element = document.createElement(tag);

    if (className) {
        element.className = className;
    }

    if (content !== undefined) {
        element.textContent = content;
    }

    return element;
}


// ========================================
// IDENTIFICAÇÃO DO MÓDULO
// ========================================

const urlParams = new URLSearchParams(window.location.search);

const requestedModule = urlParams.get("modulo") || "grecia-roma";

const moduleExists = Object.prototype.hasOwnProperty.call(
    modules,
    requestedModule
);

const currentSlug = moduleExists
    ? requestedModule
    : "grecia-roma";

const moduleData = modules[currentSlug];


// ========================================
// CORREÇÃO DOS LINKS PHP
// ========================================

document.querySelectorAll("a[href]").forEach(link => {

    const href = link.getAttribute("href");

    if (!href) {
        return;
    }

    if (href === "dashboard.html") {
        link.href = "dashboard.php";
    }

    if (href === "cursos.html") {
        link.href = "cursos.php";
    }

    if (href === "prova.html") {
        link.href = "prova.php";
    }

    if (href.startsWith("aula.html?modulo=")) {
        link.href = href.replace("aula.html", "aula.php");
    }

});


// ========================================
// INFORMAÇÕES PRINCIPAIS
// ========================================

function loadMainInformation() {

    document.title = `${moduleData.title} | História em Foco`;

    const category = document.getElementById("lesson-category");
    const number = document.getElementById("lesson-number");
    const title = document.getElementById("lesson-title");
    const breadcrumbTitle = document.getElementById("lesson-breadcrumb-title");
    const description = document.getElementById("lesson-short-description");
    const heroLetter = document.getElementById("lesson-hero-letter");
    const introduction = document.getElementById("lesson-introduction");
    const sectionCount = document.getElementById("lesson-section-count");
    const summary = document.getElementById("lesson-summary");

    if (category) {
        category.textContent = moduleData.category;
    }

    if (number) {
        number.textContent = `MÓDULO ${moduleData.number}`;
    }

    if (title) {
        title.textContent = moduleData.title;
    }

    if (breadcrumbTitle) {
        breadcrumbTitle.textContent = moduleData.title;
    }

    if (description) {
        description.textContent = moduleData.shortDescription;
    }

    if (heroLetter) {
        heroLetter.textContent = moduleData.symbol;
    }

    if (introduction) {
        introduction.textContent = moduleData.introduction;
    }

    if (sectionCount) {
        sectionCount.textContent = `${moduleData.sections.length} capítulos`;
    }

    if (summary) {
        summary.textContent = moduleData.summary;
    }

}


// ========================================
// CARREGAMENTO DOS CAPÍTULOS
// ========================================

function loadSections() {

    const container = document.getElementById("lesson-sections");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    moduleData.sections.forEach((section, index) => {

        const article = createElement(
            "article",
            "lesson-section"
        );

        const number = createElement(
            "span",
            "lesson-section-number",
            String(index + 1).padStart(2, "0")
        );

        const title = createElement(
            "h3",
            "lesson-section-title",
            section.title
        );

        const content = createElement(
            "p",
            "lesson-section-content",
            section.content
        );

        article.appendChild(number);
        article.appendChild(title);
        article.appendChild(content);

        container.appendChild(article);

    });

}


// ========================================
// LINHA DO TEMPO
// ========================================

function loadDates() {

    const container = document.getElementById("lesson-dates");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    moduleData.dates.forEach(item => {

        const article = createElement(
            "article",
            "lesson-date-item"
        );

        const date = createElement(
            "span",
            "lesson-date",
            item.date
        );

        const title = createElement(
            "h3",
            "lesson-date-title",
            item.title
        );

        const description = createElement(
            "p",
            "lesson-date-description",
            item.description
        );

        article.appendChild(date);
        article.appendChild(title);
        article.appendChild(description);

        container.appendChild(article);

    });

}


// ========================================
// PERSONAGENS HISTÓRICOS
// ========================================

function loadPeople() {

    const container = document.getElementById("lesson-people");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    moduleData.people.forEach(person => {

        const article = createElement(
            "article",
            "lesson-person-card"
        );

        const name = createElement(
            "h3",
            "lesson-person-name",
            person.name
        );

        const role = createElement(
            "p",
            "lesson-person-role",
            person.role
        );

        article.appendChild(name);
        article.appendChild(role);

        container.appendChild(article);

    });

}


// ========================================
// VIDEOAULA
// ========================================

function loadVideo() {

    const video = document.getElementById("lesson-video");
    const placeholder = document.getElementById("video-placeholder");

    if (!video || !placeholder) {
        return;
    }

    if (moduleData.videoUrl &&
        moduleData.videoUrl.startsWith("https://")) {

        video.src = moduleData.videoUrl;
        video.style.display = "block";
        placeholder.style.display = "none";

    } else {

        video.removeAttribute("src");
        video.style.display = "none";
        placeholder.style.display = "flex";

    }

}


// ========================================
// LISTA DE MÓDULOS
// ========================================

function loadModuleList() {

    const container = document.getElementById("lesson-module-list");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    Object.entries(modules).forEach(([slug, module]) => {

        const link = createElement(
            "a",
            "lesson-module-link",
            `${module.number} - ${module.title}`
        );

        link.href = `aula.php?modulo=${encodeURIComponent(slug)}`;

        if (slug === currentSlug) {

            link.classList.add("active");

            link.setAttribute("aria-current", "page");

        }

        container.appendChild(link);

    });

}


// ========================================
// NAVEGAÇÃO ENTRE MÓDULOS
// ========================================

function loadModuleNavigation() {

    const moduleEntries = Object.entries(modules);

    const currentIndex = moduleEntries.findIndex(
        ([slug]) => slug === currentSlug
    );

    const previousButton = document.getElementById("previous-module");
    const nextButton = document.getElementById("next-module");

    if (previousButton) {

        if (currentIndex > 0) {

            const [previousSlug] = moduleEntries[currentIndex - 1];

            previousButton.href =
                `aula.php?modulo=${encodeURIComponent(previousSlug)}`;

            previousButton.style.display = "";

        } else {

            previousButton.removeAttribute("href");
            previousButton.style.display = "none";

        }

    }

    if (nextButton) {

        if (currentIndex < moduleEntries.length - 1) {

            const [nextSlug] = moduleEntries[currentIndex + 1];

            nextButton.href =
                `aula.php?modulo=${encodeURIComponent(nextSlug)}`;

            nextButton.style.display = "";

        } else {

            nextButton.removeAttribute("href");
            nextButton.style.display = "none";

        }

    }

}


// ========================================
// MENSAGEM DE NOTIFICAÇÃO
// ========================================

function showLessonToast(message) {

    const toast = document.getElementById("lesson-toast");

    if (!toast) {
        return;
    }

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


// ========================================
// BOTÃO DE AVALIAÇÃO
// ========================================

function loadExamButton() {

    const startExamButton = document.getElementById("start-exam");

    if (!startExamButton) {
        return;
    }

    startExamButton.href =
        `prova.php?modulo=${encodeURIComponent(currentSlug)}`;

}


// ========================================
// ANO DO RODAPÉ
// ========================================

function loadFooterYear() {

    const footerYear = document.getElementById("footer-year");

    if (footerYear) {

        footerYear.textContent = new Date().getFullYear();

    }

}


// ========================================
// INICIALIZAÇÃO DA PÁGINA
// ========================================

function initializeLesson() {

    loadMainInformation();

    loadSections();

    loadDates();

    loadPeople();

    loadVideo();

    loadModuleList();

    loadModuleNavigation();

    loadExamButton();

    loadFooterYear();

    if (!moduleExists) {

        showLessonToast(
            "Módulo não encontrado. Exibindo o primeiro módulo."
        );

    }

}


// ========================================
// EXECUÇÃO
// ========================================

initializeLesson();
