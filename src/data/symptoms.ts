import { Symptom } from "@/types/schema";

export const symptoms: Symptom[] = [
  {
    id: "sym-001",
    slug: "sangrado-uterino-anormal",
    name: "Sangrado Uterino Anormal",
    description: "Cualquier variación en la cantidad, duración o frecuencia del sangrado menstrual normal, incluyendo sangrados abundantes en el inicio de la menstruación o sangrado entre periodos.",
    causes: [
      "Miomas uterinos o pólipos endometriales",
      "Desequilibrios hormonales por anovulación o SOP",
      "Engrosamiento endometrial o infecciones cervicales"
    ],
    whyConsult: "Debes consultar de inmediato si el sangrado menstrual es tan abundante que empapa una o más toallas sanitarias por hora durante varias horas consecutivas, si presentas debilidad extrema o mareos, o si experimentas sangrado después de la menopausia.",
    relatedConditions: ["miomatosis-uterina", "trastornos-de-la-menstruacion", "sindrome-de-ovario-poliquistico"],
    image: "/images/symptoms/sangrado.webp",
    seo: {
      title: "Sangrado Menstrual Abundante Ixtlahuaca | Dr. Jose Alejandro",
      description: "Diagnóstico y tratamiento del sangrado uterino abundante o irregular en Ixtlahuaca con el Dr. Jose Alejandro Reyes Torres.",
      keywords: ["Sangrado menstrual abundante causas", "Sangrado abundante menstruación ginecólogo", "Periodo irregular tratamiento"],
    }
  },
  {
    id: "sym-002",
    slug: "dolor-pelvico-agudo",
    name: "Dolor Pélvico y Menstrual",
    description: "Dolor localizado en la parte inferior del abdomen y la pelvis. Puede ser agudo o crónico, y manifestarse comúnmente antes y durante la menstruación o al tener relaciones sexuales.",
    causes: [
      "Endometriosis pélvica u ovárica",
      "Enfermedad Inflamatoria Pélvica (EIP) o infecciones vaginales",
      "Presencia de miomas o quistes ováricos"
    ],
    whyConsult: "Se recomienda acudir a consulta si el dolor menstrual es incapacitante (te impide realizar actividades diarias), si no cede con analgésicos comunes, o si presentas dolor pélvico súbito y muy severo acompañado de fiebre.",
    relatedConditions: ["endometriosis-pelvica", "miomatosis-uterina"],
    image: "/images/symptoms/dolor-pelvico.webp",
    seo: {
      title: "Tratamiento de Dolor Pélvico en Ixtlahuaca | Dr. Jose Alejandro",
      description: "Valoración de dolor pélvico persistente, dismenorrea y sospecha de endometriosis con el Dr. Jose Alejandro Reyes Torres.",
      keywords: ["Dolor pélvico bajo causas mujer", "Dolor menstrual incapacitante consulta", "Ginecólogo especialista en dolor pélvico"],
    }
  },
  {
    id: "sym-003",
    slug: "embarazo-de-urgencia-sangrados",
    name: "Sangrado y Urgencias en el Embarazo",
    description: "Presencia de sangrado vaginal, cólicos intensos o pérdida de líquido durante cualquier etapa de la gestación.",
    causes: [
      "Amenaza de aborto en el primer trimestre",
      "Implantación embrionaria o desprendimiento coriodecidual",
      "Infecciones de vías urinarias o del tracto genital durante el embarazo"
    ],
    whyConsult: "Cualquier sangrado o dolor tipo cólico en el vientre durante el embarazo es un dato de alarma. Debes recibir una valoración médica por ultrasonido de inmediato para corroborar la vitalidad del bebé y prevenir complicaciones.",
    relatedConditions: ["infertilidad-de-la-pareja"],
    image: "/images/symptoms/urgencias-embarazo.webp",
    seo: {
      title: "Sangrado en el Embarazo Ixtlahuaca | Urgencias 24/7",
      description: "Atención de urgencias obstétricas y sangrado en el embarazo en Ixtlahuaca con el Dr. Jose Alejandro Reyes Torres. Teléfono de urgencias: 7121602969.",
      keywords: ["Sangrado en el embarazo primer trimestre", "Amenaza de aborto síntomas", "Urgencias obstétricas Ixtlahuaca"],
    }
  },
  {
    id: "sym-004",
    slug: "verrugas-genitales-vph",
    name: "Verrugas Genitales y Lesiones por VPH",
    description: "Aparición de pequeñas protuberancias o lesiones con aspecto de coliflor en la zona genital, perianal o canal vaginal, causadas por el Virus del Papiloma Humano.",
    causes: [
      "Infección por cepas de bajo riesgo del Virus del Papiloma Humano (VPH)",
      "Transmisión por contacto directo piel con piel durante la actividad sexual"
    ],
    whyConsult: "Es importante acudir a valoración si detectas cualquier lesión o protuberancia inusual en tu zona íntima. El Dr. Jose Alejandro Reyes Torres realiza colposcopia avanzada para descartar lesiones cervicales asociadas y eliminarlas clínicamente.",
    relatedConditions: ["trastornos-de-la-menstruacion"], // No directamente relacionadas pero enlazadas
    image: "/images/symptoms/verrugas-genitales.webp",
    seo: {
      title: "Tratamiento de Verrugas Genitales VPH Ixtlahuaca | Ginecólogo",
      description: "Diagnóstico de VPH y eliminación de verrugas genitales en consultorio con el Dr. Jose Alejandro Reyes Torres. Consulta: $700 MXN.",
      keywords: ["Eliminar verrugas genitales VPH", "Tratamiento de condilomas Ixtlahuaca", "Ginecólogo especialista en VPH Estado de México"],
    }
  },
  {
    id: "sym-005",
    slug: "infecciones-vaginales",
    name: "Infecciones Vaginales Recurrentes",
    description: "Alteraciones en el flujo vaginal (cambio de color, olor o consistencia), acompañadas de picazón, ardor al orinar o irritación en la zona íntima.",
    causes: [
      "Candidiasis vaginal (infección por hongos)",
      "Vaginosis bacteriana o tricomoniasis",
      "Alteración de la microbiota vaginal normal"
    ],
    whyConsult: "Debes acudir a consulta si las infecciones son frecuentes (más de 4 episodios al año), si el flujo es espeso o maloliente, o si presentas dolor severo al tener relaciones sexuales, para recibir un tratamiento específico y evitar resistencias bacterianas.",
    relatedConditions: ["trastornos-de-la-menstruacion"],
    image: "/images/symptoms/infeccion-vaginal.webp",
    seo: {
      title: "Infecciones Vaginales Tratamiento Ixtlahuaca | Ginecólogo",
      description: "Tratamiento definitivo para infecciones vaginales de repetición y flujo inusual con el Dr. Jose Alejandro Reyes Torres en Ixtlahuaca.",
      keywords: ["Infecciones vaginales recurrentes causas", "Ginecólogo flujo vaginal anormal", "Tratamiento candidiasis vaginal"],
    }
  },
  {
    id: "sym-006",
    slug: "amenaza-de-aborto",
    name: "Amenaza de Aborto",
    description: "Estado clínico que indica la posibilidad de una pérdida del embarazo antes de la semana 20 de gestación, caracterizado por sangrado vaginal y contracciones uterinas dolorosas.",
    causes: [
      "Deficiencias de progesterona en la fase lútea",
      "Hematomas retrocoriales (acumulaciones de sangre en el útero)",
      "Infecciones urinarias o vaginales severas no tratadas"
    ],
    whyConsult: "Debes acudir a consulta de urgencia de inmediato si estás embarazada y presentas manchado o sangrado vaginal, cólicos persistentes en el vientre bajo, o dolor lumbar intenso.",
    relatedConditions: ["infertilidad-de-la-pareja"],
    image: "/images/symptoms/amenaza-aborto.webp",
    seo: {
      title: "Amenaza de Aborto y Sangrado Ixtlahuaca | Dr. Jose Alejandro",
      description: "Diagnóstico por ultrasonido y manejo médico para amenaza de aborto con el ginecólogo Dr. Jose Alejandro Reyes Torres en Ixtlahuaca.",
      keywords: ["Amenaza de aborto primer trimestre ginecólogo", "Reposo por amenaza de aborto", "Ultrasonido de urgencia embarazo"],
    }
  },
  {
    id: "sym-007",
    slug: "sangrado-inicio-menstruacion",
    name: "Sangrado Abundante al Inicio de la Menstruación",
    description: "Pérdida excesiva de sangre que se presenta durante los primeros días del periodo menstrual en adolescentes o mujeres jóvenes, a menudo relacionada con ciclos anovulatorios iniciales o desequilibrios hormonales.",
    causes: [
      "Inmadurez del eje hormonal regulador",
      "Ciclos sin ovulación (anovulatorios)",
      "Trastornos endocrinos subyacentes como hipotiroidismo o SOP"
    ],
    whyConsult: "Es fundamental consultar si el sangrado dura más de 7 días, si requiere el cambio de toallas sanitarias cada hora por más de 2 horas seguidas, o si provoca cansancio extremo, palidez o mareos.",
    relatedConditions: ["trastornos-de-la-menstruacion", "sindrome-de-ovario-poliquistico", "pubertad-y-menarquia"],
    image: "/images/symptoms/sangrado-inicio-menstruacion.webp",
    seo: {
      title: "Menstruación Abundante en Adolescentes | Dr. Jose Alejandro",
      description: "Valoración y tratamiento ginecológico del sangrado menstrual abundante e irregular en adolescentes con el Dr. Jose Alejandro Reyes Torres en Ixtlahuaca.",
      keywords: ["Menstruación abundante adolescentes", "Primera regla abundante causas", "Sangrado menstrual severo joven"],
    }
  },
  {
    id: "sym-008",
    slug: "ausencia-de-menstruacion",
    name: "Ausencia de Menstruación (Amenorrea)",
    description: "Falta de uno o más periodos menstruales en mujeres en edad reproductiva, que puede ser de origen primario (nunca haber menstruado a los 15 años) o secundario (interrupción por más de 3 meses).",
    causes: [
      "Embarazo o lactancia",
      "Síndrome de Ovario Poliquístico (SOP) o anovulación",
      "Pérdida de peso drástica, ejercicio extenuante o estrés crónico"
    ],
    whyConsult: "Debes acudir a valoración si tienes 15 años y no has iniciado tu menstruación, o si tus reglas se suspenden por más de 90 días seguidos descartando previamente un embarazo.",
    relatedConditions: ["trastornos-de-la-menstruacion", "anovulacion", "sindrome-de-ovario-poliquistico", "pubertad-y-menarquia"],
    image: "/images/symptoms/amenorrea.webp",
    seo: {
      title: "Ausencia de Menstruación (Amenorrea) | Dr. Jose Alejandro",
      description: "Diagnóstico de causas de falta de menstruación o amenorrea en Ixtlahuaca con el ginecólogo subespecialista Dr. Jose Alejandro Reyes Torres.",
      keywords: ["Falta de menstruación causas", "Por qué no me baja ginecólogo", "Tratamiento de amenorrea secundaria"],
    }
  },
  {
    id: "sym-009",
    slug: "flujo-vaginal-anormal",
    name: "Flujo Vaginal Anormal",
    description: "Cambios notables en la cantidad, color, olor o consistencia del flujo vaginal, usualmente acompañados de irritación, picazón o molestia en la zona íntima.",
    causes: [
      "Infección por hongos (candidiasis)",
      "Vaginosis bacteriana o tricomoniasis",
      "Desequilibrios en el pH de la flora vaginal por uso de duchas o jabones inadecuados"
    ],
    whyConsult: "Consulta si tu flujo cambia a color verde, amarillo o gris, tiene olor desagradable, se acompaña de dolor pélvico o ardor al orinar, o si no mejora con tratamientos previos.",
    relatedConditions: ["infecciones-vaginales"],
    image: "/images/symptoms/flujo-vaginal.webp",
    seo: {
      title: "Flujo Vaginal Anormal Tratamiento | Dr. Jose Alejandro",
      description: "Consulta ginecológica para el diagnóstico y tratamiento de flujo vaginal inusual, infecciones y ardor íntimo en Ixtlahuaca.",
      keywords: ["Flujo vaginal verde o amarillo", "Flujo vaginal con mal olor", "Picazón vaginal tratamiento ginecólogo"],
    }
  },
  {
    id: "sym-010",
    slug: "dificultad-para-concebir",
    name: "Dificultad para Concebir",
    description: "La ausencia de embarazo tras 6 a 12 meses de búsqueda activa y relaciones sexuales regulares sin el uso de métodos anticonceptivos.",
    causes: [
      "Disfunción ovulatoria o baja reserva ovárica",
      "Obstrucción o daño en las trompas de Falopio",
      "Alteraciones en la calidad seminal de la pareja"
    ],
    whyConsult: "Se aconseja valoración especializada si llevan 1 año intentando concebir sin éxito, o a los 6 meses si la mujer tiene 35 años o más o presenta antecedentes de cirugías pélvicas, SOP o endometriosis.",
    relatedConditions: ["infertilidad-de-la-pareja", "anovulacion", "sindrome-de-ovario-poliquistico", "endometriosis-pelvica"],
    image: "/images/symptoms/dificultad-concebir.webp",
    seo: {
      title: "Dificultad para Embarazarse Ixtlahuaca | Dr. Jose Alejandro",
      description: "Consulta de fertilidad y diagnóstico integral de infertilidad con el biólogo de la reproducción Dr. Jose Alejandro Reyes Torres en Ixtlahuaca.",
      keywords: ["Problemas para embarazarse ginecólogo", "Estudios de infertilidad costo", "Biólogo de la reproducción Estado de México"],
    }
  }
];
