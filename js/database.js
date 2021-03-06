/* Number of total semesters: */
window.semesters = 8;

/* List of available colors to toggle a course as completed */
/* The first color is default for selecting options as well, so make sure to choose that one wisely */
window.colors = ["#b1fca4", "#fac6ff", "#a8c9ff", "#ff6347", "#9400d3", "#19dfda", "#ff7373", "#223bf6"];

// { name: "Química Geral II", credits: 3, code: "IQG127", semester: 2, requirements: [6]},

window.courses = [
    // [
    //     { name: "Biologia Molecular", credits: 1, code: "BMH126", semester: 1},
    //     { name: "Embriologia", credits: 1, code: "BMH127", semester: 1},
    //     { name: "Bioquímica I", credits: 3, code: "BQM101", semester: 1},
    //     { name: "ICF", credits: 2, code: "FFC111", semester: 1},
    //     { name: "Metodologia Científica", credits: 2, code: "FFP111", semester: 1},
    //     { name: "Biofísica", credits: 3, code: "FFW112", semester: 1, corequirements: [1]},
    //     { name: "Química Geral I", credits: 4, code: "IQG114", semester: 1},
    //     { name: "Cálculo p/ Farmácia", credits: 3, code: "MAC108", semester: 1},
    //     { name: "PCI I ", credits: 8, code: "BMW203", semester: 2, requirements: [0, 2]},
    //     { name: "Bioquímica II", credits: 4, code: "BQM103", semester: 2, requirements: [2]},
    //     { name: "Química Geral II", credits: 3, code: "IQG127", semester: 2, requirements: [6]},
    //     { name: "Química Orgânica I", credits: 4, code: "IQO120", semester: 2, requirements: [6]},
    //     { name: "Bioestatística", credits: 3, code: "MAD237", semester: 2},
    //     { name: "Atividades Acad. Optativas", credits: 2, semester: 2},
    //     { name: "PCI II", credits: 11, code: "BMW204", semester: 3, requirements: [8]},
    //     { name: "Química Analítica I", credits: 2, code: "IQA123", semester: 3, requirements: [6], corequirements: [16]},
    //     { name: "Química Analítica Exp. I", credits: 2, code: "IQA124", semester: 3, requirements: [6], corequirements: [15]},
    //     { name: "Físico-Química ", credits: 4, code: "IQF235", semester: 3, requirements:[7]},
    //     { name: "Química Orgânica II", credits: 3, code: "IQO230", semester: 3, requirements:[11]},
    //     { name: "Química Orgânica Exp. I", credits: 2, code: "IQO242", semester: 3, requirements: [10, 11]},
    //     { name: "Farmacobotânica", credits: 3, code: "FFP600", semester: 4},
    //     { name: "Iniciacao Científica", credits: 2, code: "FFP111", semester: 4, requirements: [4]},
    //     { name: "Química Analítica II", credits: 2,code: "IQA233", semester: 4, requirements: [15, 16], corequirements: [23]},
    //     { name: "Química Analítica Exp. II", credits: 2, code: "IQA234", semester: 4, requirements: [15, 16], corequirements: [22]},
    //     { name: "Bioinorgânica", credits: 4, code: "IQG234", semester: 4, requirements: [10]},
    //     { name: "Métodos Espectrométricos", credits: 3, code: "IQO220", semester: 4, requirements: [18, 19]},
    //     { name: "Química Orgânica III", credits: 3, code: "IQO240", semester: 4, requirements: [18]},
    //     { name: "Atividades Acad. Optativas", credits: 3, semester: 4},
    //     { name: "Farmacocinética e Farmacodinâmica", credits: 2, code: "BMF310", semester: 5, requirements: [9, 14]},
    //     { name: "Saúde Coletiva", credits: 2, code: "FFC303", semester: 5},
    //     { name: "Análises Farmacêuticas", credits: 5, code: "FFM302", semester: 5, requirements: [17, 22, 23]},
    //     { name: "Política de Saúde", credits: 2, code: "FFM311", semester: 5},
    //     { name: "Microbiologia e Imunologia", credits: 8, code: "IMW360", semester: 5, requirements: [2]},
    //     { name: "Química Orgânica Exp. II", credits: 2, code: "IQO251", semester: 5, requirements: [19, 25, 26]},
    //     { name: "Atividades Acad. Optativas", credits: 2, semester: 5},
    //     { name: "Farmacologia Neuroendócrina", credits: 4, code: "BFM320", semester:6, requirements: [14, 28]},
    //     { name: "Parasitologia", credits: 3, code: "CFP215", semester: 6, requirements: [14, 32]},
    //     { name: "Micro Imuno Clínica", credits: 3, code: "FFC480", semester: 6, requirements: [32]},
    //     { name: "Metabolismo Integrado", credits: 4, code: "FFI311", semester: 6, requirements: [9]},
    //     { name: "Farmacotécnica I", credits: 4, code: "FFM313", semester: 6, requirements: [28]},
    //     { name: "Farmacognosia I", credits: 3, code: "FFP313", semester: 6, requirements: [20, 26]},
    //     { name: "Química de Alimentos", credits: 3, code: "FFP324", semester: 6, requirements: [9, 22]},
    //     { name: "Farmacologia Cardio/Quimio", credits: 4, code: "BMF410", semester: 7, requirements: [14, 35]},
    //     { name: "Bioquímica Clínica", credits: 3, code: "FFC304", semester: 7, requirements: [9, 14]},
    //     { name: "Diagnóstico Clínico Laboratorial", credits: 2, code: "FFC321", semester: 7, requirements: [32, 36]},
    //     { name: "Hematologia", credits: 2, code: "FFC322", semester:7, requirements: [14]},
    //     { name: "Farmacotécnica II", credits: 4, code: "FFM323", semester: 7, requirements: [39]},
    //     { name: "Assist. e Atenção Farm.", credits: 2, code: "FFM481", semester: 7, requirements: [35, 39]},
    //     { name: "Estágio Sup. Farm. Comun.", credits: 2, code: "FFM481", semester: 7, requirements: [28, 39]},
    //     { name: "Farmacognosia II", credits: 3, code: "FFP323", semester: 7, requirements: [40]},
    //     { name: "Análises de Alimentos", credits: 3, code: "FFP403", semester: 7, requirements: [41]},
    //     { name: "Parasitologia e Micologia Clínica", credits: 3, code: "FFC406", semester: 8, requirements: [36]},
    //     { name: "Química Farm. Med.", credits: 5, code: "FFI401", semester: 8, requirements: [26, 42]},
    //     { name: "Farmácia Hospitalar", credits: 2, code: "FFM300", semester: 8, corequirements: [42, 46]},
    //     { name: "Deonto. e Legisl. Farmacêutica", credits: 2, code: "FFM301", semester: 8},
    //     { name: "Farmaco-epidemiologia", credits: 2, code: "FFM402", semester: 8, requirements: [12, 29]},
    //     { name: "Farmacotécnica Hospitalar", credits: 2, code: "FFM403", semester: 8, requirements: [46], corequirements: [53]},
    //     { name: "Tecnologia Ind. Farm.", credits: 4, code: "FFM408", semester: 8, requirements: [10, 39]},
    //     { name: "Estág. Sup. Farm. Manip. Alopática", credits: 2, code: "FFMU07", semester: 8, corequirements: [42, 46]},
    //     { name: "Bromatologia em Saúde", credits: 3, code: "FFP402", semester: 8, requirements: [41]},
    //     { name: "Atividades Acad. Livre. Esc.", credits: 2, semester: 8},
    //     { name: "Atividades Acad. Optativas", credits: 2, semester: 8},
    //     { name: "Toxicologia Geral", credits: 3, code: "FFC314", semester: 9, requirements:[26, 28]},
    //     { name: "Con. Bio. Micro. Quali. Pro. Farma.", credits: 4, code: "FFI402", semester: 9, requirements:[28, 32]},
    //     { name: "Biofarmácia", credits: 2, code: "FFM405", semester: 9, requirements: [46]},
    //     { name: "Dermocosméticos", credits: 2, code: "FFM406", semester: 9, requirements: [39]},
    //     { name: "Biotecnologia Farmacêutica", credits: 3, code: "FFM426", semester: 9, requirements: [32, 38]},
    //     { name: "Estágio Sup. Farmácia Hosp.", credits: 2, code: "FFMU08", semester: 9, requirements: [42, 46, 53]},
    //     { name: "TCC", credits: 0, code: "FFWK02", semester: 9, requirements: [21]},
    //     { name: "Economia e Adm, Empr. Farm.", credits: 3, code: "IEEE326", semester: 9},
    //     { name: "Atividades Acad. Livre. Esc.", credits: 3, semester: 9},
    //     { name: "Atividades Acad. Optativas", credits: 6, semester: 9, step: 1},
    //     { name: "Estágio Sup Especialidades", credits:8, code: "FFWU06", semester: 10},
    // ],
    [
        { name: "Algoritmos e Programação", credits: 5, code: "COS110", semester: 1, category: 1, workload: 90},
        { name: "Int. a Eng. Comp. e Informação", credits: 2, code: "COS111", semester: 1, category: 1, workload: 30},
        { name: "Circuitos Lógicos", credits: 5, code: "EEL280", semester: 1, workload: 90},
        { name: "Cálculo I", credits: 6, code: "MAC118", semester: 1, workload: 90},
        { name: "Física I", credits: 4, code: "FIT112", semester: 1, workload: 60},
        { name: "Física Experimental I", credits: 1, code: "FIS111", semester: 1, category: 1, workload: 30},
        { name: "Linguagens de Programação", credits: 5, code: "EEL670", semester: 2, category: 1, workload: 90},
        { name: "Álgebra Linear II", credits: 4, code: "MAE125", semester: 2, category: 1, workload: 60},
        { name: "Sistemas Digitais", credits: 5, code: "EEL480", semester: 2, requirements: [2], category: 1, workload: 90},
        { name: "Cálculo II", credits: 4, code: "MAC128", semester: 2, requirements: [3], category: 1, workload: 60},
        { name: "Física II", credits: 4, code: "FIT122", semester: 2, requirements: [3, 4], category: 1, workload: 60},
        { name: "Física Experimental II", credits: 1, code: "FIS121", semester: 2, requirements: [4, 5], category: 1, workload: 30},
        { name: "Atividades Acad. Opt. Humanas", credits: 2, semester: 2, category: 4, workload: 30},
        { name: "Estruturas de Dados", credits: 5, code: "COS231", semester: 3, requirements: [0], category: 1, workload: 75},
        { name: "Teoria da Computação", credits: 4, code: "EEL881", semester: 3, category: 1, workload: 60},
        { name: "Arquitetura de Computadores", credits: 5, code: "EEL580", semester: 3, category: 1, workload: 75},
        { name: "Cálculo III", credits: 4, code: "MAC238", semester: 3, requirements: [9], category: 1, workload: 60},
        { name: "Física III", credits: 4, code: "FIM230", semester: 3, requirements: [4, 9], category: 1, workload: 60},
        { name: "Física Experimental III", credits: 1, code: "FIN231", semester: 3, requirements: [11], category: 1, workload: 30},
        { name: "Atividades Acad. Opt. Humanas", credits: 2, semester: 3, category: 4, workload: 30},
        { name: "Teoria dos Grafos", credits: 4, code: "COS242", semester: 4, requirements: [13], category: 1, workload: 60},
        { name: "Estatística e Mod. Probabilísticos", credits: 4, code: "COE241", semester: 4, category: 1, workload: 60},
        { name: "Computadores e Sociedade", credits: 4, code: "COS471", semester: 4, category: 1, workload: 60},
        { name: "Cálculo IV", credits: 4, code: "MAC248", semester: 4, requirements: [9], category: 1, workload: 60},
        { name: "Física IV", credits: 4, code: "FIM240", semester: 4, requirements: [17], category: 1, workload: 60},
        { name: "Física Experimental IV", credits: 1, code: "FIN241", semester: 4, requirements: [18], category: 1, workload: 30},
        { name: "Banco de Dados", credits: 4, code: "EEL871", semester: 5, category: 1, workload: 75},
        { name: "Lógica Matemática", credits: 4, code: "COS351", semester: 5, category: 1, workload: 60},
        { name: "Álg. Linear Computacional", credits: 4, code: "COC473", semester: 5, requirements: [7, 16], category: 1, workload: 60},
        { name: "Redes de Computadores I", credits: 4, code: "EEL878", semester: 5, category: 1, workload: 75},
        { name: "Sistemas Operacionais", credits: 5, code: "EEL770", semester: 5, category: 1, workload: 75},
        { name: "Química Experimental", credits: 2, code: "IQG112", semester: 5, category: 1, workload: 60},
        { name: "Otimização", credits: 4, semester: 6, code: "COS360", requirements: [0, ,7, 16], category: 1, workload: 60},
        { name: "Inteligência Computacional", credits: 4, code: "COC361", semester: 6, category: 1, workload: 60},
        { name: "Engenharia de Software", credits: 4, code: "EEL873", semester: 6, category: 1, workload: 75},
        { name: "Redes de Computadores II", credits: 4, code: "EEL879", semester: 6, category: 1, workload: 60},
        { name: "Telecomunic.", credits: 4, code: "COE363", semester: 6, category: 1, workload: 60},
        { name: "Programação Avançada", credits: 4, code: "EEL418", semester: 7, requirements: [13, 6], category: 1, workload: 75},
        { name: "Computação de Alto Desempenho", credits: 3, code: "COC472", semester: 7, category: 1, workload: 75},
        { name: "Sistemas Distribuídos", credits: 4, code: "COS470", semester: 7, category: 1, workload: 60},
        { name: "Gestão do Conhecimento", credits: 4, code: "COP232", semester: 7, category: 1, workload: 60},
        { name: "Computação Gráfica", credits: 4, code: "EEL882", semester: 7, category: 1, workload: 75},
        { name: "Atividades Acad. Optativas", credits: 8, semester: 7, step: 1, category: 2, workload: 120},
        { name: "Construção de Banco de Dados", credits: 4, code: "COS480", semester: 8, requirements: [26], category: 1, workload: 60},
        { name: "Empreend. I", credits: 4, code: "COP364", semester: 8, category: 1, workload: 60},
        { name: "Qualidade de Software", credits: 4, code: "COS482", semester: 8, requirements: [34], category: 1, workload: 60},
        { name: "Projeto de Graduação", credits: 4, code: "EEWX00", semester: 8, category: 1, workload: 180},
        { name: "Atividades Acad. Optativas", credits: 8, semester: 8, step: 1, category: 2, workload: 120},
        { name: "Estágio Obrigatório", credits: 160, code: "EEWU00", semester: 9, category: 1, workload: 160},
        { name: "Atividades Acad. Optativas", credits: 16, semester: 9, step: 1, category: 2, workload: 240},
        { name: "Atividades Acad. Optativas", credits: 8, semester: 10, step: 1, category: 2, workload: 120},
        { name: "Atividades Acad. Livre Escolha", credits: 8, semester: 10, step: 1, category: 3, workload: 120},
        { name: "Ativ. Compl. Especiais", credits: 405, semester: 10, step: 15, category: 5, workload: 405},
        { name: "Química EE", credits: 4, semester: 4, code: "IQG111", category: 1, workload: 60},
    ],
    [ // Astronomy: Astrophysics
        // First term
        { name: "Filos Educacao Mundo Ocidental", credits: 4, code: "EDF120", semester: 1 }, // 0
        { name: "Teoria da Geografia", credits: 4, code: "IGG112", semester: 1 }, // 1
        { name: "Planeta Terra", credits: 4, code: "IGG114", semester: 1 }, // 2
        { name: "Geog do Mundo Contemporaneo", credits: 4, code: "IGG115", semester: 1 }, // 3
        { name: "	Geografia da Populacao", credits: 4, code: "IGG122", semester: 1 }, // 4
        { name: "Fundamentos Sociológ Educação", credits: 4, code: "EDF240", semester: 2, category: 1 }, // 5
        { name: "Fundamentos de Biogeografia", credits: 4, code: "IGG123", semester: 2, category: 1 }, // 6
        { name: "Climatologia Geográfica", credits: 4, code: "IGG124", semester: 2, category: 1 }, // 7
        { name: "Cartografia Básica", credits: 4, code: "IGG125", semester: 2, category: 1 }, // 8
        { name: "Metodologia Cientifica", credits: 1, code: "IGG234", semester: 2, category: 1 }, // 9
        // Third term
        { name: "Educacao Brasileira", credits: 4, code: "EDA234", semester: 3, category: 1 }, // 10
        { name: "Geomorfologia Geral", credits: 4, code: "IGG235", semester: 3, category: 1 }, // 11
        { name: "Geografia Econômica", credits: 4, code: "IGG237", semester: 3, category: 1 }, // 12
        { name: "Trabalho de Campo Geog Física", credits: 1, code: "IGGX03", semester: 3, requirements: [6,7,11], category: 1 }, // 13
        { name: "Atividades Acad. Livre. Esc.", credits: 4, semester: 3, category: 1 }, // 14

        // Fourth term
        { name: "	Didática", credits: 4, code: "EDD241", semester: 4, category: 1 }, // 15
        { name: "	Geografia Política", credits: 4, code: "IGG252", semester: 4, category: 1 }, // 16
        { name: "Cartografia Temática", credits: 4, code: "IGG254", semester: 4, requirements: [8], category: 1 }, // 17
        { name: "	Trab Campo Cart Sens Remoto", credits: 1, code: "IGGX04", semester: 4, requirements: [17], category: 1 }, // 18
        { name: "Oficina Did de Geo Física", credits: 3, code: "IGGY05", semester: 4, requirements: [16], category: 1 }, // 19
        { name: "Atividades Acad. Livre. Esc.", credits: 4, semester: 4, category: 1 }, // 20

        // Fifth term
        { name: "Educ e Comunicação II (Libras)", credits: 3, code: "EDD636", semester: 5, category: 1 }, // 21
        { name: "Psicologia da Educação", credits: 4, code: "EDF245", semester: 5, category: 1 }, // 22
        { name: "Geografia Urbana", credits: 4, code: "IGG374", semester: 5, category: 1 }, // 23
        { name: "Geografia Agrária", credits: 4, code: "IGG376", semester: 5, category: 1 }, // 24
        { name: "Trabalho Campo Geog Humana", credits: 1, code: "IGGX07", semester: 5, requirements: [23, 24], category: 1 }, // 25
        { name: "Oficina Did Cart Sens Remoto", credits: 3, code: "IGGY04", semester: 5, requirements: [17], category: 1 }, // 26
        { name: "Atividades Acad. Livre. Esc.", credits: 4, semester: 5, category: 1 }, // 27
        // Sixth term
        { name: "Didatica da Geografia I", credits: 2, code: "EDD507", semester: 6, requirements: [15], category: 1 }, // 28
        { name: "Prát Ens Geog Estágio Supervis	", credits: 400, code: "EDDU08", semester: 6, requirements: [15], category: 1, workload: 400, step: 15 }, // 29
        { name: "Geografia Regional do Brasil", credits: 4, code: "IGG411", semester: 6, requirements: [24], category: 1 }, // 30
        { name: "Trabalho Campo Geog Regional", credits: 1, semester: 6, code: "IGGX06", requirements: [30], category: 1 }, // 31
        { name: "Oficina Did de Geo Humana", credits: 3, code: "IGGY03", semester: 6, requirements: [23,24], category: 1 }, // 32
        { name: "Atividades Acad. Optativas", credits: 4, semester: 6, category: 1 }, // 33
        // Seventh term
        { name: "Didatica da Geografia II", credits: 2, code: "EDD623", semester: 7, requirements: [28], category: 1 }, // 34
        { name: "Oficina Did de Geo Regional", credits: 3, code: "IGGY06", semester: 7, requirements: [2, 30], category: 1 }, // 35
        { name: "Atividades Acad. Optativas", credits: 4, semester: 7, category: 1 }, // 36
        // Eigth term
        { name: "Trabalho de Conclusão de Curso	", credits: 6, code: 'IGGK02', semester: 8, requirements: [9], category: 1, workload: 60 }, // 37
        { name: "Atividades Acad. Livre. Esc.", credits: 4, semester: 8, category: 1 }, // 38
        { name: "Atividades Acad. Optativas", credits: 4, semester: 8, category: 1 }, // 39
        { name: "Atividades Acad. Optativas", credits: 4, semester: 8, category: 1 }, // 40
	{ name: "Ativ. Complementares", credits: 200, semester: 8, category: 1, workload: 200, step: 15 }, // 41
        { name: "Ativ. Extensão", credits: 320, semester: 8, category: 1, workload: 320, step: 15 }, // 42
    ]
]
