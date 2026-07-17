import { MedicalService } from "@/types/schema";

export const services: MedicalService[] = [
  {
    id: "ser-001",
    slug: "consulta-ginecologica-embarazo",
    name: "Consulta Obstétrica y Rastreo Ultrasonográfico",
    description: "Consulta de primera vez y seguimiento prenatal con exploración integral de la madre y rastreo por ultrasonido fetal.",
    longDescription: "Esta consulta está orientada a la mujer embarazada. Incluye una evaluación clínica completa de la madre (presión arterial, peso, sintomatología general) y la realización de un rastreo ultrasonográfico en consultorio para evaluar el crecimiento, latido cardíaco, movimientos y bienestar general del feto en tiempo real, garantizando un control de embarazo seguro y transparente.",
    type: "consultorio",
    isPainful: false,
    anesthesiaType: "Ninguna",
    duration: "45 minutos",
    recoveryTime: "Inmediato",
    benefits: [
      "Monitoreo del crecimiento del bebé en cada consulta mediante ultrasonido básico",
      "Evaluación del estado de salud general de la mamá",
      "Detección y prevención de factores de riesgo en el embarazo"
    ],
    postOpRecommendations: [
      "Acudir con ropa cómoda de dos piezas.",
      "Traer cartilla prenatal anterior o estudios previos en caso de contar con ellos."
    ],
    priceRange: "$700 MXN",
    technicalSpecs: {
      "Equipo": "Ultrasonido en consultorio con sonda transabdominal/transvaginal",
      "Frecuencia recomendada": "Cada 4 semanas durante el embarazo"
    },
    image: "/procedimientos/control-prenatal.png",
    seo: {
      title: "Consulta Obstétrica con Ultrasonido Ixtlahuaca | Dr. Jose Alejandro",
      description: "Consulta y rastreo de ultrasonido de embarazo en Ixtlahuaca con el ginecólogo Dr. Jose Alejandro Reyes Torres. Costo: $700 MXN.",
      keywords: ["Consulta de embarazo costo", "Ultrasonido de embarazo Ixtlahuaca", "Control prenatal costo Estado de México"],
    }
  },
  {
    id: "ser-002",
    slug: "consulta-ginecologia-endocrina",
    name: "Consulta de Ginecología Endocrina y Menopausia",
    description: "Evaluación y tratamiento de trastornos de la menstruación, menopausia, climaterio y desequilibrios hormonales femeninos.",
    longDescription: "Dirigida a mujeres con alteraciones hormonales, ciclos menstruales irregulares o dolorosos, anovulación y aquellas en transición hacia el climaterio y la menopausia. Ofrece un abordaje diagnóstico preciso para diseñar terapias de reemplazo hormonal (TRH) personalizadas o alternativas no hormonales, previniendo complicaciones como la osteoporosis y mejorando la calidad de vida.",
    type: "consultorio",
    isPainful: false,
    anesthesiaType: "Ninguna",
    duration: "45 minutos",
    recoveryTime: "Inmediato",
    benefits: [
      "Tratamiento de bochornos, sudoración nocturna e insomnio en el climaterio",
      "Regulación de ciclos menstruales irregulares o ausentes",
      "Prevención activa de descalcificación ósea (osteoporosis)"
    ],
    postOpRecommendations: [
      "Llevar un registro de las fechas de las últimas menstruaciones.",
      "Traer perfiles hormonales previos si se cuenta con ellos."
    ],
    priceRange: "$700 MXN",
    technicalSpecs: {
      "Indicación": "Mujeres con periodos irregulares, bochornos, o en etapa de menopausia",
      "Enfoque": "Ginecología endocrina y clínica del climaterio"
    },
    image: "/procedimientos/menopausia.png",
    seo: {
      title: "Ginecología Endocrina y Menopausia Ixtlahuaca | Dr. Jose Alejandro",
      description: "Consulta de ginecología endocrina, menopausia y trastornos menstruales en Ixtlahuaca con el Dr. Jose Alejandro Reyes Torres. Costo: $700 MXN.",
      keywords: ["Consulta de menopausia costo", "Trastornos menstruales ginecólogo", "Terapia de reemplazo hormonal Ixtlahuaca"],
    }
  },
  {
    id: "ser-003",
    slug: "consulta-colposcopia-papanicolaou",
    name: "Consulta de Colposcopia y Citología Cervical",
    description: "Detección oportuna del VPH, cáncer cervicouterino, tratamiento de verrugas genitales y colposcopia diagnóstica.",
    longDescription: "La consulta incluye la citología cervical (Papanicolaou) y la colposcopia diagnóstica, un estudio visual amplificado del cuello uterino, vagina y vulva que detecta lesiones pre-cancerosas e infecciones por Virus del Papiloma Humano (VPH). Asimismo, se ofrece el diagnóstico y tratamiento quirúrgico de verrugas genitales (condilomas) mediante técnicas de mínima invasión.",
    type: "consultorio",
    isPainful: false,
    anesthesiaType: "Ninguna (salvo biopsia o cauterización local)",
    duration: "45 minutos",
    recoveryTime: "Inmediato",
    benefits: [
      "Detección temprana del virus del papiloma humano (VPH) antes de que cause daño severo",
      "Visualización directa y detallada del cuello uterino con colposcopio de alta definición",
      "Tratamiento eficaz de verrugas genitales y lesiones cervicales en consultorio"
    ],
    postOpRecommendations: [
      "No haber tenido relaciones sexuales 48 horas antes de la consulta.",
      "No estar menstruando y no haber aplicado óvulos o cremas vaginales recientemente."
    ],
    priceRange: "$700 MXN",
    technicalSpecs: {
      "Estudio": "Colposcopia diagnóstica directa con aplicación de ácido acético y lugol",
      "Equipo": "Colposcopio binocular de alta definición"
    },
    image: "/procedimientos/colposcopia.png",
    seo: {
      title: "Colposcopia y Papanicolaou en Ixtlahuaca | Dr. Jose Alejandro",
      description: "Consulta para detección de VPH, citología y colposcopia en Ixtlahuaca con el ginecólogo Dr. Jose Alejandro Reyes Torres. Costo: $700 MXN.",
      keywords: ["Colposcopia costo Ixtlahuaca", "Papanicolaou y colposcopia precio", "Eliminar verrugas genitales VPH"],
    }
  },
  {
    id: "ser-004",
    slug: "consulta-infertilidad-pareja",
    name: "Consulta de Fertilidad y Biología de la Reproducción",
    description: "Evaluación diagnóstica integral de la pareja para identificar causas de infertilidad y diseñar planes de reproducción asistida.",
    longDescription: "Dirigida a parejas que llevan buscando embarazo sin éxito. Como subespecialista en Biología de la Reproducción Humana, el Dr. Jose Alejandro realiza un análisis exhaustivo tanto de la mujer (reserva ovárica, permeabilidad tubaria, anatomía uterina) como del varón (análisis seminal), formulando un diagnóstico integral y recomendando tratamientos desde baja complejidad hasta fertilización in vitro.",
    type: "consultorio",
    isPainful: false,
    anesthesiaType: "Ninguna",
    duration: "60 minutos",
    recoveryTime: "Inmediato",
    benefits: [
      "Evaluación simultánea y personalizada de ambos miembros de la pareja",
      "Diseño de protocolos de baja complejidad (coito programado, inseminación artificial) y alta complejidad",
      "Trato ético, transparente y con alto rigor científico en reproducción asistida"
    ],
    postOpRecommendations: [
      "Acudir ambos miembros de la pareja a la primera cita.",
      "Presentar estudios previos de laboratorio, perfiles hormonales y seminogramas en caso de tenerlos."
    ],
    priceRange: "$1,500 MXN",
    technicalSpecs: {
      "Indicación": "Parejas con más de 12 meses buscando embarazo (o 6 meses si la mujer tiene más de 35 años)",
      "Subespecialidad": "Biología de la Reproducción Humana (UNAM / CMGO)"
    },
    image: "/procedimientos/fertilidad.png",
    seo: {
      title: "Consulta de Fertilidad e Infertilidad Ixtlahuaca | Dr. Jose Alejandro",
      description: "Estudio integral de fertilidad en pareja con el biólogo de la reproducción Dr. Jose Alejandro Reyes Torres en Ixtlahuaca. Costo: $1,500 MXN.",
      keywords: ["Estudios de fertilidad Ixtlahuaca", "Biólogo de la reproducción costo", "Tratamiento de infertilidad de la pareja"],
    }
  },
  {
    id: "ser-005",
    slug: "control-prenatal-alto-riesgo",
    name: "Control Prenatal de Alto Riesgo",
    description: "Monitoreo especializado del embarazo en pacientes con condiciones médicas de riesgo materno o fetal.",
    longDescription: "El control prenatal de alto riesgo brinda un acompañamiento estrecho para asegurar el bienestar materno-fetal en embarazos complicados por preeclampsia, hipertensión arterial, diabetes gestacional, amenaza de parto pretérmino, lupus, gemelares o edad materna avanzada. Incluye monitoreo continuo, ultrasonido de alta resolución y planes detallados para el nacimiento.",
    type: "consultorio",
    isPainful: false,
    anesthesiaType: "Ninguna",
    duration: "45 minutos",
    recoveryTime: "Inmediato",
    benefits: [
      "Reducción del riesgo de complicaciones graves en el embarazo y el parto",
      "Monitoreo estricto del crecimiento y la hemodinámica fetal por ultrasonido Doppler",
      "Control y dosificación de medicamentos seguros para el feto"
    ],
    postOpRecommendations: [
      "Mantener un registro domiciliario de presión arterial y glucosa si se le indica.",
      "Acudir de inmediato ante datos de alarma (sangrado, dolor abdominal, pérdida de líquido)."
    ],
    priceRange: "$700 MXN por sesión",
    technicalSpecs: {
      "Dispositivo": "Ultrasonido estructural y Doppler fetal en consultorio",
      "Criterio de riesgo": "Antecedentes de pérdida gestacional, diabetes, hipertensión o edad > 35 años"
    },
    image: "/procedimientos/control-prenatal-alto-riesgo.png",
    seo: {
      title: "Control Prenatal de Alto Riesgo Ixtlahuaca | Dr. Jose Alejandro",
      description: "Vigilancia de embarazo de alto riesgo con el Dr. Jose Alejandro Reyes Torres en Ixtlahuaca. Prevención de preeclampsia y diabetes gestacional.",
      keywords: ["Ginecólogo embarazo de alto riesgo", "Preeclampsia tratamiento ginecólogo", "Monitoreo fetal Ixtlahuaca"],
    }
  },
  {
    id: "ser-006",
    slug: "atencion-de-parto-y-cesarea",
    name: "Atención de Parto y Cesárea",
    description: "Asistencia médica personalizada del nacimiento, priorizando la seguridad y el apego inmediato en el hospital de elección.",
    longDescription: "Acompañamiento integral en el nacimiento del bebé. El Dr. Jose Alejandro atiende partos normales y partos respetados buscando el menor intervencionismo posible, así como cesáreas programadas o de urgencia bajo estrictos estándares quirúrgicos y de seguridad clínica, colaborando con pediatras y anestesiólogos certificados en hospitales de Toluca, Metepec e Ixtlahuaca.",
    type: "hospitalario",
    isPainful: true,
    anesthesiaType: "Bloqueo epidural o anestesia general",
    duration: "1 a 3 horas (procedimiento quirúrgico/asistencia)",
    recoveryTime: "24 a 48 horas (cesárea) o 12 horas (parto)",
    benefits: [
      "Atención profesional y cálida con apego inmediato del recién nacido al pecho materno",
      "Técnica quirúrgica depurada con mínima cicatriz en cesáreas",
      "Disponibilidad absoluta ante urgencias obstétricas 24/7"
    ],
    postOpRecommendations: [
      "Reposo relativo y deambulación temprana post-parto.",
      "Cuidados higiénicos de la herida quirúrgica y lactancia materna exclusiva."
    ],
    priceRange: "A cotizar según hospital de elección",
    technicalSpecs: {
      "Ubicaciones": "Hospitales certificados en el Estado de México",
      "Servicio": "Asistencia de urgencias de embarazo y nacimiento"
    },
    image: "/procedimientos/parto-cesarea.png",
    seo: {
      title: "Atención de Parto y Cesárea Ixtlahuaca | Dr. Jose Alejandro Reyes",
      description: "Atención médica personalizada de parto psicoprofiláctico y cesárea por el ginecólogo Dr. Jose Alejandro Reyes Torres.",
      keywords: ["Precio de cesárea Ixtlahuaca", "Ginecólogo parto respetado Estado de México", "Urgencias de embarazo atención"],
    }
  },
  {
    id: "ser-007",
    slug: "cirugia-ginecologica-minima-invasion",
    name: "Cirugía Ginecológica de Mínima Invasión",
    description: "Cirugía laparoscópica e histeroscópica para tratar miomas, quistes ováricos, endometriosis y permeabilizar trompas.",
    longDescription: "Procedimientos quirúrgicos modernos a través de microincisiones en el abdomen (laparoscopia) o a través del canal cervical (histeroscopia). Esta técnica disminuye el dolor postoperatorio, ofrece una recuperación ultra rápida, excelente resultado cosmético (mínimas cicatrices) y permite preservar el útero y los ovarios en pacientes jóvenes que desean tener hijos.",
    type: "hospitalario",
    isPainful: true,
    anesthesiaType: "Bloqueo espinal o anestesia general",
    duration: "1 a 2 horas",
    recoveryTime: "1 a 2 semanas",
    benefits: [
      "Menor sangrado, menor dolor postoperatorio y menor estancia hospitalaria",
      "Cicatrices imperceptibles y excelente preservación de la fertilidad femenina",
      "Tratamiento efectivo de miomas submucosos, quistes gigantes de ovario y adherencias"
    ],
    postOpRecommendations: [
      "Reposo moderado en casa por 7 días.",
      "Evitar cargar objetos pesados y ejercicio intenso durante las primeras 3 semanas."
    ],
    priceRange: "A cotizar según procedimiento y hospital",
    technicalSpecs: {
      "Técnicas": "Laparoscopia pélvica avanzada e histeroscopia de consultorio/quirófano",
      "Ventaja": "Menor tasa de adherencias postquirúrgicas en comparación con cirugía abierta"
    },
    image: "/procedimientos/histeroscopia.png",
    seo: {
      title: "Cirugía Laparoscópica Ginecológica | Dr. Jose Alejandro Reyes",
      description: "Cirugía de mínima invasión para miomas, quistes de ovario y permeabilidad tubaria con el Dr. Jose Alejandro Reyes Torres.",
      keywords: ["Cirugía laparoscópica ginecológica costo", "Miomectomía laparoscópica Estado de México", "Histeroscopia diagnóstica"],
    }
  }
];
