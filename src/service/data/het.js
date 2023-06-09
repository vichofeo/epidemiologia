export const HET = {
  frm_name: "Ficha de Notificación e Investigación TOSFERINA",
  frm_cod: "12345",
  sections: [
    {
      name_section: "DATOS CLÍNICOS DEL PACIENTE",
      questions: [
        {
          question: "Signos/Sintomas: Tos paroxística",
          order: 0,
          type: 1,
          answers: [
            { answer: "Si", order: 1, type: 0 },
            { answer: "No", order: 2, type: 0 },
            { answer: "Talves", order: 3, type: 0 },
          ],
        },
        {
          question: "Signos/Sintomas: Silbido inspiratorio",
          order: 0,
          type: 0,
          answers: [
            { answer: "Si", order: 1, type: 0 },
            { answer: "No", order: 2, type: 0 },
          ],
        },
        {
          question: "Signos/Sintomas: Apnea",
          order: 0,
          type: 0,
          answers: [
            { answer: "Si", order: 1, type: 0 },
            { answer: "No", order: 2, type: 0 },
          ],
        },
        {
          question: "Signos/Sintomas: Cianosis",
          order: 0,
          type: 0,
          answers: [
            { answer: "Si", order: 1, type: 0 },
            { answer: "No", order: 2, type: 0 },
          ],
        },
        {
          question: "Estado Actual del paciente",
          order: 0,
          type: 1,
          answers: [
            { answer: "Restablecido", order: 1, type: 1 },
            { answer: "Enfermo", order: 2, type: 1 },
            { answer: "Fallecido", order: 3, type: 1 },
          ],
        },
        {
          question: "fecha de Fallecimiento",
          order: 0,
          type: 2,
          answers: [{ answer: "Open", order: 1, type: 2 }],
        },
      ],
    },
    {
      name_section: "DATOS EPIDEMIOLOGICOS Y MEDIDAS DE CONTROL",
      questions: [
        {
          question: "Caso notificado por: ",
          order: 0,
          type: 2,
          answers: [{ answer: "Open", order: 1, type: 2 }],
        },
        {
          question: "Cargo: ",
          order: 0,
          type: 2,
          answers: [{ answer: "Open", order: 1, type: 2 }],
        },
        {
          question: "telefono: ",
          order: 0,
          type: 2,
          answers: [{ answer: "Open", order: 1, type: 2 }],
        },
        {
          question: "Institución, Servicio de salud: ",
          order: 0,
          type: 2,
          answers: [{ answer: "Open", order: 1, type: 2 }],
        },
        {
          question: "Dirección: ",
          order: 0,
          type: 2,
          answers: [{ answer: "Open", order: 1, type: 2 }],
        },
        {
          question: "Fecha de Notificación: ",
          order: 0,
          type: 2,
          answers: [{ answer: "Open", order: 1, type: 2 }],
        },
        {
          question: "Fecha de Investigación : ",
          order: 0,
          type: 2,
          answers: [{ answer: "Open", order: 1, type: 2 }],
        },
        {
          question: "Fecha de inicio de la enfermedad: ",
          order: 0,
          type: 2,
          answers: [{ answer: "Open", order: 1, type: 2 }],
        },
        {
          question: "Hospitalización: ",
          order: 0,
          type: 2,
          answers: [{ answer: "Open", order: 1, type: 2 }],
        },
        {
          question:
            "Si es posible anote la fuente de contagio (otro caso semejante): ",
          order: 0,
          type: 2,
          answers: [{ answer: "Open", order: 1, type: 2 }],
        },
        {
          question: "Nombre y apellidos: ",
          order: 0,
          type: 2,
          answers: [{ answer: "Open", order: 1, type: 2 }],
        },
        {
          question: "edad: ",
          order: 0,
          type: 2,
          answers: [{ answer: "Open", order: 1, type: 2 }],
        },
        {
          question: "direccion: ",
          order: 0,
          type: 2,
          answers: [{ answer: "Open", order: 1, type: 2 }],
        },
        {
          question: "Vacunado",
          order: 0,
          type: 0,
          answers: [
            { answer: "Si", order: 1, type: 0 },
            { answer: "No", order: 2, type: 0 },
          ],
        },
        {
          question: "Vacuna: ",
          order: 0,
          type: 2,
          answers: [{ answer: "Open", order: 1, type: 2 }],
        },
        {
          question: "verificado por carnet",
          order: 0,
          type: 0,
          answers: [
            { answer: "Si", order: 1, type: 0 },
            { answer: "No", order: 2, type: 0 },
          ],
        },
      ],
    },
  ],
};
