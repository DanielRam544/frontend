// Expresiones regulares para palabras clave relacionadas con el trastorno de ansiedad generalizada (TAG)
export const expresionesRegulares = new Map();

// Función para agregar respuestas a palabras clave
function agregarRespuesta(palabrasClave, respuesta) {
  palabrasClave.forEach((palabra) => {
    // Crear una expresión regular con la palabra clave y la opción "i" (ignoreCase)
    const regExp = new RegExp(palabra, "i");
    expresionesRegulares.set(regExp, respuesta);
  });
}

// Función para encontrar la respuesta relevante
export function encontrarRespuesta(pregunta) {
  for (const [expresionRegular, respuesta] of expresionesRegulares) {
    // Utilizar la expresión regular para buscar coincidencias en la pregunta
    if (pregunta.match(expresionRegular)) {
      return respuesta;
    }
  }

  // Si no se encuentra una respuesta, puedes retornar un mensaje predeterminado.
  return "Formula mejor tu pregunta respecto al TAG.";
}

// Respuestas para saludos
agregarRespuesta(
  ["hi", "hola", "buenos días", "buenos dias", "saludos", "qué tal", "buenas"],
  "¡Hola! ¿En qué puedo ayudarte hoy?"
);

agregarRespuesta(
  ["chao", "adios", "hasta luego", "hasta la vista", "nos vemos", "hasta pronto"],
  "¡Hasta luego y hasta pronto! Si tienes más preguntas sobre el TAG (Trastorno de Ansiedad Generalizada), aquí estaré."
);

// Respuestas sobre el TAG
agregarRespuesta(
  ["trastorno de ansiedad generalizada", "ansiedad generalizada", "TAG", "trastorno de ansiedad"],
  "El Trastorno de Ansiedad Generalizada (TAG) es un trastorno de salud mental que se caracteriza por preocupación excesiva y persistente, así como síntomas físicos y emocionales. Es importante buscar ayuda profesional para su manejo."
);

agregarRespuesta(
  ["síntomas TAG", "signos TAG", "características TAG"],
  "Los síntomas comunes del Trastorno de Ansiedad Generalizada incluyen preocupación excesiva, tensión muscular, irritabilidad, dificultades para concentrarse, fatiga y síntomas físicos como palpitaciones y sudoración."
);

// Respuestas sobre la ansiedad
agregarRespuesta(
  ["ansiedad", "trastorno de ansiedad", "síntomas de ansiedad", "ansiedad generalizada", "qué es la ansiedad"],
  "La ansiedad es una respuesta normal del cuerpo al estrés, pero cuando se vuelve excesiva y persistente, puede convertirse en un trastorno de ansiedad generalizada. Los síntomas comunes incluyen preocupación excesiva, tensión muscular, nerviosismo, irritabilidad y problemas para conciliar el sueño."
);

agregarRespuesta(
  ["síntomas de ansiedad", "síntomas de trastorno de ansiedad", "cómo reconocer la ansiedad"],
  "Los síntomas de ansiedad pueden variar, pero generalmente incluyen preocupación constante, tensión muscular, palpitaciones, sudoración excesiva, dificultad para concentrarse y problemas para dormir. Si experimentas estos síntomas con frecuencia, podría ser un indicio de un trastorno de ansiedad."
);

// Respuestas con consejos para el TAG
agregarRespuesta(
  ["Ejercicio para el TAG", "Beneficios del ejercicio para la ansiedad", "Mantenerse activo con el TAG"],
  "La actividad física regular puede ayudar a reducir la ansiedad. Intenta incluir ejercicios como caminar, nadar o yoga en tu rutina diaria. Sin embargo, recuerda que el ejercicio no reemplaza la atención de un profesional de la salud mental."
);

agregarRespuesta(
  ["Alimentación saludable para el TAG","Dieta y ansiedad", "Cómo una buena alimentación puede ayudar con el TAG"],
  "Mantener una dieta equilibrada y saludable puede tener un impacto positivo en tu bienestar mental. Evita el exceso de cafeína y alimentos procesados, y opta por alimentos ricos en nutrientes. Aunque la dieta es importante, la atención de un profesional es esencial para el TAG."
);

agregarRespuesta(
    ["por qué me siento triste", "causas de la tristeza", "sentir tristeza"],
    "La tristeza es una emoción normal que todos experimentamos en ciertos momentos de la vida. Puede ser causada por diversas razones, como situaciones estresantes, pérdidas, cambios en la vida o simplemente por la variabilidad natural de las emociones humanas. Si te sientes constantemente triste o la tristeza interfiere significativamente en tu vida diaria, es importante considerar hablar con un profesional de la salud mental. Ellos pueden ayudarte a explorar las causas subyacentes de tu tristeza y brindarte las herramientas necesarias para afrontarla de manera efectiva."
);

agregarRespuesta(
    ["pensamientos suicidas", "ayuda en caso de suicidio", "qué hacer si quiero suicidarme"],
    "Si estás experimentando pensamientos suicidas, es vital buscar ayuda inmediatamente. Comunícate con un profesional de salud mental, un amigo o un familiar de confianza. También puedes llamar a una línea de prevención del suicidio local. No estás solo, y hay personas dispuestas a apoyarte en este momento difícil."
);

agregarRespuesta(
    ["necesito apoyo emocional", "cómo obtener apoyo emocional", "dónde encontrar ayuda emocional"],
    "El apoyo emocional es esencial para tu bienestar. Habla con amigos, familiares o seres queridos sobre tus sentimientos. Si sientes que no puedes hablar con alguien cercano, considera buscar un terapeuta o consejero que pueda brindarte apoyo profesional en momentos difíciles."
);

agregarRespuesta(
    ["ayuda para el TAG", "recursos para el TAG", "dónde encontrar información sobre el TAG"],
    "Si estás lidiando con el Trastorno de Ansiedad Generalizada (TAG), es importante buscar ayuda y recursos especializados. Puedes comenzar consultando con un profesional de salud mental que pueda evaluar tu situación y brindarte orientación. También existen organizaciones y sitios web dedicados al TAG que ofrecen información y recursos útiles para entender y manejar esta condición."
);
  
agregarRespuesta(
    ["necesito ayuda urgente", "ayuda inmediata", "me quiero suicidar"],
    "Por favor, busca ayuda inmediatamente. Llama a una línea de prevención del suicidio local o nacional. Estos profesionales están capacitados para brindar apoyo en momentos de crisis. Tu vida es valiosa, y hay personas dispuestas a ayudarte."
);

agregarRespuesta(
    ["necesito hablar con alguien", "ayuda urgente de un amigo", "quiero hablar con un familiar"],
    "No estás solo en esto. Por favor, comunícate con un amigo o familiar de confianza. Hablar con alguien cercano puede ser un primer paso importante para obtener el apoyo que necesitas en este momento difícil."
);

agregarRespuesta(
    ["necesito atención médica urgente", "ayuda de un profesional de salud", "asistencia de emergencia"],
    "Tu seguridad es la prioridad. Si te sientes en peligro inminente, busca atención médica de emergencia. Puedes ir al hospital más cercano o llamar al número de emergencia de tu país. No dudes en actuar de inmediato."
);

agregarRespuesta(
    ["necesito hablar con un profesional", "ayuda profesional inmediata", "me siento suicida"],
    "Llama a una línea de prevención del suicidio nacional de tu país. Estos profesionales están disponibles las 24 horas para brindarte apoyo. No estás solo en esto, y hay ayuda disponible para ti."
);

agregarRespuesta(
    ["necesito hablar con alguien", "ayuda urgente de un amigo", "quiero hablar con un familiar"],
    "No estás solo en esto. Por favor, comunícate con un amigo o familiar de confianza. Hablar con alguien cercano puede ser un primer paso importante para obtener el apoyo que necesitas en este momento difícil. Pero si crees que necesitas algún consejo o apoyo adicional, no dudes en llamar a la Línea de la Vida al 800 911 2000."
);

// Respuestas sobre recursos y consejos adicionales
agregarRespuesta(
    ["recursos en línea TAG", "sitios web TAG", "información sobre ansiedad en línea"],
    "Puedes encontrar valiosa información sobre el TAG en sitios web de organizaciones de salud mental y blogs de expertos. Te recomendamos visitar [nombre se mi sitio] y [nombre de mi blog] para obtener recursos actualizados."
);

agregarRespuesta(
    ["Cómo lidiar con la preocupación excesiva", "Controlar la ansiedad", "Consejos para reducir la tensión muscular"],
    "El manejo de la ansiedad es personal y depende de tus síntomas específicos. Si te preocupa la preocupación excesiva, intenta llevar un diario de tus pensamientos para identificar patrones. Para reducir la tensión muscular, considera practicar técnicas de relajación muscular progresiva. Si necesitas consejos más específicos, no dudes en preguntar."
);

agregarRespuesta(
    ["Calendario de autocuidado TAG", "Actividades diarias para reducir la ansiedad"],
    "Aquí tienes un calendario de autocuidado para ayudarte a manejar la ansiedad: \n- Lunes: Meditación de 10 minutos. \n- Martes: Caminata al aire libre. \n- Miércoles: Yoga o estiramientos. \n- Jueves: Tiempo para la lectura relajante. \n- Viernes: Practica la respiración profunda. \n- Sábado: Realiza una actividad creativa. \n- Domingo: Conecta con amigos o familiares. Recuerda que el autocuidado es esencial para tu bienestar."
);

agregarRespuesta(
    ["Aplicaciones de seguimiento de ansiedad", "Apps para el control del TAG"],
    "Existen diversas aplicaciones móviles que pueden ayudarte a realizar un seguimiento de tus síntomas de ansiedad y bienestar emocional. Te recomendamos probar [nombre de la aplicación 1] y [nombre de la aplicación 2] para comenzar a registrar tu progreso y obtener consejos personalizados."
);

agregarRespuesta(
    ["Cómo hablar sobre el TAG", "Comunicación sobre la ansiedad con amigos y familiares"],
    "Hablar sobre el TAG puede ser desafiante, pero es importante. Escoge un momento adecuado y un lugar tranquilo para conversar. Sé honesto acerca de tus sentimientos y necesidades. Puedes decir algo como: 'He estado lidiando con el TAG y me gustaría hablar sobre ello contigo. Tu apoyo significa mucho para mí'. Recuerda que compartir tus sentimientos puede fortalecer tus relaciones."
);

agregarRespuesta(
    ["Cómo calmarme TAG", "Como calmarme", "Técnicas para reducir la ansiedad TAG", "Manejo de la ansiedad TAG"],
    "Existen varias técnicas que puedes probar para calmarte cuando sientes ansiedad. Aquí tienes algunas sugerencias:\n\n1. Respiración profunda: Practica la respiración lenta y profunda para reducir la tensión. Inhala profundamente contando hasta cuatro, mantén el aire durante cuatro segundos y exhala lentamente durante cuatro segundos.\n2. Meditación: La meditación mindfulness puede ayudarte a enfocarte en el presente y reducir la ansiedad. Busca aplicaciones o guías en línea para comenzar.\n3. Ejercicio: La actividad física regular libera endorfinas, lo que puede mejorar tu estado de ánimo y reducir la ansiedad. Caminar, nadar o yoga son buenas opciones.\n4. Evita la cafeína y el alcohol: Estas sustancias pueden aumentar la ansiedad, así que trata de limitar su consumo.\n5. Técnicas de relajación: Prueba técnicas como la relajación muscular progresiva, donde contraes y luego relajas diferentes grupos musculares.\n\nRecuerda que estas estrategias pueden ser útiles, pero si tus síntomas de ansiedad son graves o persistentes, es importante buscar la orientación de un profesional de la salud mental. Pueden proporcionarte técnicas más específicas y personalizadas para manejar la ansiedad."
);

agregarRespuesta(
    ["cómo puedo calmarme", "como relajarme", "qué hacer para relajarme", "maneras de reducir la ansiedad"],
    "Durante una crisis de ansiedad, puedes intentar las siguientes estrategias para relajarte:\n\n1. Practicar la respiración profunda: Respira lenta y profundamente para reducir la tensión.\n2. Realizar ejercicios de relajación muscular: Tensa y relaja tus músculos para liberar la tensión.\n3. Utilizar la visualización: Imagina un lugar tranquilo y relajante.\n4. Escuchar música suave: La música calmante puede ayudar a disminuir la ansiedad.\n5. Hablar con alguien de confianza: Compartir tus sentimientos puede aliviar la carga emocional.\n\nRecuerda que si sientes que la ansiedad es abrumadora, buscar ayuda profesional es fundamental. Pero si crees que necesitas algún consejo o apoyo adicional, no dudes en llamar a la Línea de la Vida: 800 911 2000."
);

agregarRespuesta(
  ["pensamientos suicidas", "ayuda en caso de suicidio", "qué hacer si quiero suicidarme", "suicidio"],
  "Si estás experimentando pensamientos suicidas, es vital buscar ayuda inmediatamente. Comunícate con un profesional de salud mental, un amigo o un familiar de confianza. También puedes llamar a una línea de prevención del suicidio local. No estás solo, y hay personas dispuestas a apoyarte en este momento difícil."
);


agregarRespuesta(
  ["Dame tu nombre", "Quien eres", "Para que sirves", "Quien eres tu", "Quien eres?"],
  "Soy SerenityNow un asistente creado por un estuidante de la Maestria en Sistemas Computacionales para tratar de apoyar con el transtorno de la ansiedad y brindar asistencia en tiempo y forma."
);
