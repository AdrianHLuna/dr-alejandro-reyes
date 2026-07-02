import { MedicalCondition } from "@/types/schema";

export const diseases: MedicalCondition[] = [
  {
    id: "enf-001",
    slug: "sindrome-de-ovario-poliquistico",
    name: "Síndrome de Ovario Poliquístico (SOP)",
    technicalName: "Síndrome de Anovulación Hiperandrogénica",
    description: "Un trastorno endocrino y metabólico caracterizado por la presencia de folículos inmaduros en los ovarios, desequilibrios hormonales (hiperandrogenismo) y ciclos menstruales irregulares.",
    symptoms: ["Ciclos menstruales irregulares o ausentes", "Hirsutismo (exceso de vello en rostro y cuerpo)", "Acné resistente a tratamientos y aumento de peso"],
    causes: ["Resistencia a la insulina y factores genéticos", "Inflamación de bajo grado", "Exceso de producción de andrógenos por los ovarios"],
    riskFactors: ["Antecedentes familiares de SOP o diabetes tipo 2", "Obesidad y estilo de vida sedentario", "Resistencia a la insulina"],
    complications: ["Infertilidad por anovulación", "Diabetes mellitus tipo 2", "Síndrome metabólico y riesgo cardiovascular"],
    treatments: ["Cambios en el estilo de vida (dieta de bajo índice glucémico)", "Anticonceptivos orales combinados reguladores", "Inductores de ovulación en búsqueda de fertilidad"],
    faqs: [
      { question: "¿El SOP causa infertilidad permanente?", answer: "No. El SOP causa anovulación (ausencia de ovulación regular), lo cual dificulta lograr un embarazo, pero con tratamientos inductores de ovulación y control metabólico, la gran mayoría de las pacientes logra concebir exitosamente." },
      { question: "¿Se cura el Síndrome de Ovario Poliquístico?", answer: "El SOP se controla, no se cura de forma definitiva, ya que tiene un componente genético y metabólico. Sin embargo, un manejo adecuado puede eliminar todos los síntomas y riesgos asociados." },
      { question: "¿Es obligatorio tomar anticonceptivos si tengo SOP?", answer: "No. Los anticonceptivos ayudan a regular los ciclos y reducir los andrógenos, pero si la paciente está buscando embarazo o prefiere otras opciones, existen alternativas como sensibilizadores a la insulina y fitoterapia." }
    ],
    image: "/images/diseases/sop.webp",
    seo: {
      title: "Tratamiento de Síndrome de Ovario Poliquístico (SOP) Ixtlahuaca",
      description: "Manejo médico integral para SOP, control de hirsutismo y problemas de fertilidad con el Dr. Jose Alejandro Reyes Torres en Ixtlahuaca de Rayón.",
      keywords: ["Tratamiento SOP Estado de México", "Ginecólogo especialista en SOP Ixtlahuaca", "Inducción de ovulación costo"],
    }
  },
  {
    id: "enf-002",
    slug: "endometriosis-pelvica",
    name: "Endometriosis Pélvica",
    technicalName: "Endometriosis Pélvica y Ovárica",
    description: "Condición dolorosa en la cual tejido similar al endometrio (el revestimiento interno del útero) crece fuera de la cavidad uterina, principalmente en ovarios, trompas de Falopio y peritoneo.",
    symptoms: ["Dolor menstrual severo e incapacitante (dismenorrea)", "Dolor durante las relaciones sexuales (dispareunia)", "Dolor pélvico crónico e infertilidad"],
    causes: ["Menstruación retrógrada e implantación de células", "Trastornos inmunológicos o genéticos", "Metaplasia celómica"],
    riskFactors: ["No haber tenido hijos (nuliparidad)", "Menarca temprana o ciclos cortos con flujos abundantes", "Antecedentes familiares directos de endometriosis"],
    complications: ["Adherencias pélvicas y dolor crónico", "Quistes ováricos endometriósicos (endometriomas)", "Obstrucción de trompas e infertilidad"],
    treatments: ["Analgésicos y antiinflamatorios de precisión", "Terapia hormonal supresora (progestágenos, análogos GnRH)", "Cirugía laparoscópica mínimamente invasiva"],
    faqs: [
      { question: "¿Es normal sentir dolor menstrual incapacitante?", answer: "No. El dolor menstrual que impide realizar actividades cotidianas o que no cede con analgésicos comunes no es normal y representa uno de los principales síntomas de sospecha de endometriosis." },
      { question: "¿La endometriosis siempre causa infertilidad?", answer: "No siempre. Se estima que entre el 30% y el 50% de las mujeres con endometriosis experimentan dificultades para embarazarse, pero existen opciones médicas, quirúrgicas y reproductivas para lograrlo." },
      { question: "¿Cómo se diagnostica con certeza?", answer: "El estándar de oro para el diagnóstico definitivo es la laparoscopia con biopsia. Sin embargo, un ultrasonido especializado o resonancia magnética pueden identificar quistes ováricos y adherencias sospechosas." }
    ],
    image: "/images/diseases/endometriosis.webp",
    seo: {
      title: "Especialista en Endometriosis en Ixtlahuaca | Dr. Jose Alejandro Reyes",
      description: "Diagnóstico y tratamiento avanzado para dolor pélvico crónico y endometriosis mediante laparoscopia con el Dr. Jose Alejandro Reyes Torres.",
      keywords: ["Tratamiento endometriosis Ixtlahuaca", "Cirugía laparoscópica de endometriosis", "Dolor menstrual severo consulta"],
    }
  },
  {
    id: "enf-003",
    slug: "miomatosis-uterina",
    name: "Miomatosis Uterina",
    technicalName: "Leiomiomatosis Uterina",
    description: "Presencia de tumores benignos (miomas o leiomiomas) compuestos de fibra muscular en el útero, los cuales varían en tamaño y localización, afectando la fertilidad y provocando sangrados abundantes.",
    symptoms: ["Sangrados menstruales muy abundantes y prolongados", "Sensación de presión o dolor en la pelvis", "Aumento de la frecuencia urinaria e infertilidad"],
    causes: ["Factores hormonales (dependencia de estrógenos y progesterona)", "Mutaciones genéticas en células del miometrio", "Factores de crecimiento tisular"],
    riskFactors: ["Antecedentes familiares de miomatosis", "Edad (mayor prevalencia en la edad fértil tardía)", "Obesidad y deficiencia de vitamina D"],
    complications: ["Anemia severa por sangrados abundantes", "Dificultades en la implantación embrionaria y aborto recurrente", "Dolor agudo por torsión o necrobiosis del mioma"],
    treatments: ["Terapia farmacológica moduladora hormonal", "Embolización de arterias uterinas (intervencionismo)", "Miomectomía laparoscópica o histeroscópica"],
    faqs: [
      { question: "¿Los miomas pueden convertirse en cáncer?", answer: "Es extremadamente raro (menos del 0.1% de los casos se convierte en un leiomiosarcoma). Los miomas son tumores benignos y no aumentan el riesgo de desarrollar cáncer uterino." },
      { question: "¿Si tengo miomas me tienen que retirar la matriz?", answer: "No. Actualmente existen técnicas conservadoras como la miomectomía laparoscópica que retira únicamente los miomas, preservando el útero y la capacidad de lograr un embarazo futuro." },
      { question: "¿Los miomas impiden el embarazo?", answer: "Depende de su localización. Los miomas submucosos (dentro de la cavidad uterina) son los que más interfieren con la implantación del embrión y deben ser retirados antes de buscar gestación." }
    ],
    image: "/images/diseases/miomas.webp",
    seo: {
      title: "Cirugía de Miomas Uterinos en Ixtlahuaca | Dr. Jose Alejandro Reyes",
      description: "Preservación del útero mediante miomectomía laparoscópica para el tratamiento de miomas. Agenda tu cita con el Dr. Jose Alejandro Reyes Torres.",
      keywords: ["Miomectomía laparoscópica costo", "Ginecólogo especialista en miomas", "Sangrado menstrual abundante tratamiento"],
    }
  },
  {
    id: "enf-004",
    slug: "infertilidad-de-la-pareja",
    name: "Infertilidad de la Pareja",
    technicalName: "Infertilidad Conyugal Primaria y Secundaria",
    description: "La incapacidad de una pareja de lograr un embarazo clínico tras 12 meses de relaciones sexuales regulares no protegidas (o 6 meses si la mujer es mayor de 35 años). Puede deberse a factores masculinos, femeninos o mixtos.",
    symptoms: ["Falta de concepción después de un año de búsqueda", "Ciclos menstruales irregulares en la mujer", "Antecedentes de infecciones pélvicas o cirugías previas"],
    causes: ["Factor ovulatorio (ej. SOP, anovulación)", "Factor tuboperitoneal (ej. obstrucción de trompas por infecciones o endometriosis)", "Factor masculino (ej. alteraciones en el espermatobioscopio)", "Disminución de la reserva ovárica por edad"],
    riskFactors: ["Edad materna avanzada (mayor a 35 años)", "Tabaquismo, alcoholismo y obesidad", "Estrés crónico y desequilibrios hormonales"],
    complications: ["Estrés psicológico y emocional en la pareja", "Riesgos asociados a tratamientos sin supervisión especializada", "Retraso en el diagnóstico de patologías subyacentes"],
    treatments: ["Coito programado con inducción de ovulación", "Inseminación artificial intrauterina", "Fertilización In Vitro (FIV/ICSI) y técnicas avanzadas"],
    faqs: [
      { question: "¿Cuándo se debe consultar a un especialista en fertilidad?", answer: "Se recomienda acudir con el biólogo de la reproducción si llevan 1 año buscando embarazo sin éxito (o 6 meses si la mujer tiene 35 años o más, o bien si existen antecedentes conocidos de SOP, endometriosis o cirugías pélvicas)." },
      { question: "¿La infertilidad es siempre un problema de la mujer?", answer: "No. En aproximadamente un 40% de los casos el factor es exclusivamente femenino, en otro 40% es masculino y el 20% restante se debe a factores mixtos o causas inexplicadas. Por ello, el diagnóstico siempre debe realizarse en pareja." },
      { question: "¿Qué prubas iniciales se solicitan a la pareja?", answer: "Para la mujer, se suele pedir un perfil hormonal, un ultrasonido ginecológico y una histerosalpingografía (para revisar las trompas). Para el varón, la prueba fundamental es un espermatobioscopio directo (análisis de semen)." }
    ],
    image: "/images/diseases/infertilidad.webp",
    seo: {
      title: "Especialista en Infertilidad en Ixtlahuaca | Dr. Jose Alejandro Reyes",
      description: "Diagnóstico integral y tratamientos de fertilidad para la pareja con el Dr. Jose Alejandro Reyes Torres en Ixtlahuaca de Rayón.",
      keywords: ["Estudio de fertilidad de la pareja", "Biólogo de la reproducción Ixtlahuaca", "Clínica de fertilidad Estado de México"],
    }
  },
  {
    id: "enf-005",
    slug: "trastornos-de-la-menstruacion",
    name: "Trastornos de la Menstruación",
    technicalName: "Trastornos del Ciclo Menstrual y del Flujo",
    description: "Alteraciones en la frecuencia, duración o cantidad del sangrado menstrual. Incluye la amenorrea (ausencia de menstruación), oligomenorrea (ciclos muy largos) y polimenorrea (ciclos muy cortos).",
    symptoms: ["Falta de menstruación por más de 90 días", "Ciclos que duran menos de 21 días o más de 35 días", "Sangrados abundantes que requieren cambiar toallas cada hora"],
    causes: ["Desequilibrios hormonales (anovulación, hipotiroidismo, hiperprolactinemia)", "Estrés extremo, pérdida de peso drástica o ejercicio excesivo", "Síndrome de Ovario Poliquístico (SOP)"],
    riskFactors: ["Adolescencia (inicio de la menstruación) y perimenopausia", "Trastornos alimenticios o variaciones drásticas de peso", "Estrés crónico y predisposición genética"],
    complications: ["Anemia por sangrado excesivo", "Dificultad para concebir (infertilidad)", "Riesgo de hiperplasia endometrial por falta de progesterona"],
    treatments: ["Terapia hormonal sustitutiva o reguladora", "Tratamiento de la causa metabólica o tiroidea subyacente", "Cambios en el estilo de vida y manejo del estrés"],
    faqs: [
      { question: "¿Es normal que mi periodo varíe de fecha cada mes?", answer: "Es normal una variación de hasta 7-9 días en la duración del ciclo de un mes a otro. Sin embargo, si los ciclos son consistentemente menores de 21 días o mayores de 35 días, o si el sangrado desaparece por completo, se requiere valoración médica." },
      { question: "¿Qué es la amenorrea secundaria?", answer: "Es la ausencia de menstruación durante 3 o más meses consecutivos en una mujer que previamente menstruaba con regularidad. La causa más común es el embarazo, pero también puede deberse a problemas de tiroides, SOP o estrés." },
      { question: "¿Cómo influye el peso corporal en la menstruación?", answer: "Tanto el bajo peso extremo (que reduce la producción de estrógenos) como el sobrepeso y la obesidad (que pueden causar exceso de estrógenos y resistencia a la insulina) alteran la ovulación y provocan trastornos menstruales." }
    ],
    image: "/images/diseases/trastornos-menstruales.webp",
    seo: {
      title: "Trastornos Menstruales en Ixtlahuaca | Dr. Jose Alejandro Reyes",
      description: "Tratamiento de amenorrea, periodos irregulares y desequilibrio hormonal con el Dr. Jose Alejandro Reyes Torres en Ixtlahuaca.",
      keywords: ["Periodos irregulares ginecólogo", "Tratamiento de amenorrea Estado de México", "Ginecología endocrina Ixtlahuaca"],
    }
  },
  {
    id: "enf-006",
    slug: "menopausia-y-climaterio",
    name: "Menopausia y Climaterio",
    technicalName: "Síndrome Climatérico e Insuficiencia Ovárica Fisiológica",
    description: "El climaterio es la transición fisiológica en la vida de la mujer hacia el fin de su etapa reproductiva, mientras que la menopausia es el momento preciso en que se cumple un año sin menstruación debido al cese de la función ovárica.",
    symptoms: ["Bochornos y sudoración nocturna", "Sequedad vaginal y dolor durante las relaciones sexuales", "Cambios de humor, insomnio y fatiga"],
    causes: ["Disminución natural de la producción de estrógenos y progesterona por los ovarios", "Cese definitivo de la actividad folicular ovárica"],
    riskFactors: ["Edad (ocurre típicamente entre los 45 y 55 años)", "Estilo de vida, tabaquismo y predisposición familiar"],
    complications: ["Osteoporosis (pérdida de densidad ósea)", "Aumento del riesgo cardiovascular", "Atrofia urogenital e infecciones urinarias recurrentes"],
    treatments: ["Terapia de Reemplazo Hormonal (TRH) personalizada", "Alternativas no hormonales y fitoterapia para bochornos", "Suplementación con Calcio, Vitamina D y ejercicio de resistencia"],
    faqs: [
      { question: "¿Cuáles son los beneficios de la terapia de reemplazo hormonal?", answer: "La TRH es el tratamiento más eficaz para aliviar los bochornos, la sudoración nocturna, la sequedad vaginal y prevenir la pérdida ósea (osteoporosis). Debe ser prescrita y supervisada bajo estrictos criterios de seguridad por un ginecólogo." },
      { question: "¿Cuánto dura el climaterio?", answer: "La transición climatérica puede durar de 4 a 8 años. Comienza con cambios en la regularidad de las menstruaciones (perimenopausia) y se extiende hasta unos años después de la menopausia." },
      { question: "¿Cómo se previene la osteoporosis en esta etapa?", answer: "Se previene mediante la ingesta adecuada de calcio y vitamina D, ejercicio de impacto regular (como caminar o pesas) para fortalecer los huesos, evitar el tabaco y, en pacientes de riesgo, utilizar terapia hormonal o bifosfonatos." }
    ],
    image: "/images/diseases/menopausia.webp",
    seo: {
      title: "Especialista en Menopausia en Ixtlahuaca | Dr. Jose Alejandro Reyes",
      description: "Manejo integral del climaterio, bochornos, sequedad vaginal y osteoporosis con el Dr. Jose Alejandro Reyes Torres.",
      keywords: ["Terapia de reemplazo hormonal Ixtlahuaca", "Ginecólogo especialista en climaterio", "Tratamiento de bochornos costo"],
    }
  },
  {
    id: "enf-007",
    slug: "anovulacion",
    name: "Anovulación",
    technicalName: "Disfunción Ovulatoria",
    description: "Un trastorno en el cual los ovarios no liberan un óvulo durante el ciclo menstrual. Es una de las causas más frecuentes de infertilidad femenina y trastornos menstruales.",
    symptoms: ["Ausencia de menstruación (amenorrea) o sangrado muy irregular", "Falta de cambios en el moco cervical típico de la ovulación", "Dificultad evidente para lograr el embarazo"],
    causes: ["Síndrome de Ovario Poliquístico (SOP)", "Disfunción hipotalámica (por estrés, bajo peso o ejercicio extremo)", "Hiperprolactinemia (exceso de prolactina) y trastornos de tiroides"],
    riskFactors: ["Estrés físico o emocional severo", "Obesidad o pérdida drástica de peso corporal", "Trastornos alimenticios o endocrinos"],
    complications: ["Infertilidad primaria o secundaria", "Hiperplasia endometrial por exposición prolongada a estrógenos sin oposición de progesterona"],
    treatments: ["Inductores de ovulación (letrozol, clomifeno)", "Tratamiento de desequilibrios metabólicos (metformina para resistencia a la insulina)", "Corrección de problemas tiroideos o de prolactina"],
    faqs: [
      { question: "¿Se puede menstruar sin haber ovulado?", answer: "Sí. A esto se le conoce como ciclo anovulatorio. El sangrado ocurre por descamación del endometrio debido a la caída de estrógenos, pero suele ser irregular, ausente o impredecible." },
      { question: "¿Cómo sé si estoy ovulando?", answer: "Existen métodos indirectos como la medición de la temperatura basal, pruebas de LH en orina (kits de ovulación) y la observación del moco cervical. La forma más precisa es el seguimiento ultrasonográfico folicular realizado por el ginecólogo." },
      { question: "¿Cómo se trata la anovulación en pacientes que desean un bebé?", answer: "El tratamiento se basa en inducir la ovulación utilizando medicamentos orales o gonadotropinas bajo estrecho seguimiento ultrasonográfico para controlar el crecimiento de los folículos y programar el coito o la inseminación." }
    ],
    image: "/images/diseases/anovulacion.webp",
    seo: {
      title: "Tratamiento de Anovulación en Ixtlahuaca | Dr. Jose Alejandro Reyes",
      description: "Diagnóstico de disfunción ovulatoria e inducción folicular para infertilidad por el Dr. Jose Alejandro Reyes Torres.",
      keywords: ["Inducción de ovulación letrozol", "Cómo saber si ovulo ginecólogo", "Especialista en fertilidad femenina Estado de México"],
    }
  }
];
