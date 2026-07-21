import { DoctorProfile } from "@/types/schema";

export const doctor: DoctorProfile = {
  name: "Jose Alejandro Reyes Torres",
  title: "Dr.",
  specialty: "Ginecología y Obstetricia",
  specialistTitle: "Ginecólogo, Obstetra y Biólogo de la Reproducción",
  subspecialty: "Biología de la Reproducción Humana (Infertilidad, Endocrinología Ginecológica)",
  cedula: "11364693",
  cedulaEspecialidad: "14636386",
  cofepris: "En trámite",
  phone: "7121917883",
  whatsapp: "7121917883",
  email: "contacto@dralejandroreyestorres.com",
  address: "Avenida Gustavo Baz #400 (entre Calle Nicolás Bravo y Francisco Medrano), Col. Centro, C.P. 50740",
  city: "Ixtlahuaca de Rayón",
  state: "Estado de México",
  country: "México",
  googleMapsUrl: "https://maps.google.com/?q=Av.+Gustavo+Baz+400,+Centro,+Ixtlahuaca+de+Ray%C3%B3n",
  consultationPrice: 700,
  paymentMethods: ["Efectivo", "Transferencia", "Tarjeta de Débito", "Tarjeta de Crédito"],
  insurances: ["GNP", "AXA", "MetLife", "Mapfre", "Seguros Monterrey", "Bupa"], // Seguros a consultar
  schedule: "Lunes, Miércoles, Viernes: 7:00 - 13:00 | Martes, Jueves: 15:30 - 21:00 | Sábado: 8:00 - 19:00 | Domingo: 9:00 - 15:00",
  photo: "/aboutme.jpg",
  bio: "Soy el Dr. Jose Alejandro Reyes Torres, ginecólogo y obstetra egresado de la Universidad Nacional Autónoma de México (UNAM), con especialidad avalada por la Universidad Autónoma del Estado de México (UAEM) y subespecialidad en Biología de la Reproducción Humana por la UNAM. Cuento con alta formación en fertilidad, reproducción asistida, ginecología endocrina y colposcopia. Mi compromiso es brindar una atención médica de primer nivel, ética y de alta precisión científica para ayudar a mis pacientes en el cuidado de su salud reproductiva y el logro del embarazo.",
  philosophy: "El cuidado de la salud reproductiva de la mujer y el anhelo de concebir una nueva vida requieren de una atención médica que combine el máximo rigor científico con una profunda empatía y calidez humana.",
  experience: [
    {
      year: "Actualidad",
      title: "Especialista en Biología de la Reproducción e Infertilidad",
      description: "Práctica médica privada en Ixtlahuaca, brindando tratamientos avanzados de fertilidad, control prenatal de alto riesgo y cirugía ginecológica.",
    },
  ],
  certifications: [
    {
      name: "Diplomado en Colposcopia y Tracto Genital",
      institution: "Universidad Autónoma del Estado de México (UAEM)",
    },
    {
      name: "Certificación en Ginecología y Obstetricia",
      institution: "Consejo Mexicano de Ginecología y Obstetricia, A.C.",
    },
    {
      name: "Certificación en Biología de la Reproducción Humana",
      institution: "Consejo Mexicano de Ginecología y Obstetricia, A.C. (Subespecialidad)",
    }
  ],
  education: [
    {
      degree: "Médico Cirujano",
      institution: "Universidad Nacional Autónoma de México (UNAM)",
      year: "2018",
    },
    {
      degree: "Especialidad en Ginecología y Obstetricia",
      institution: "Universidad Autónoma del Estado de México (UAEM)",
      year: "2023",
    },
    {
      degree: "Subespecialidad en Biología de la Reproducción Humana",
      institution: "Universidad Nacional Autónoma de México (UNAM)",
      year: "2024",
    }
  ],
  sameAs: []
};
