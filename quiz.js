// DevQuiz - JavaScript Basico: Array de preguntas
// Cada pregunta tiene: texto, opciones (4), respuesta correcta y explicación

// Array principal de preguntas
const questions = [
  // Pregunta 1
  {
    question: "¿Qué tipo de dato es `42` en JavaScript?",
    options: [
      "Cadena de texto (String)", 
      "Número (Number)",
      "Booleano (Boolean)",
      "Objeto (Object)"
    ],
    answer: 1, 
    explanation: "En JavaScript, `42` es un número literal sin comillas, por lo que su tipo es `Number`."
  },

  // Pregunta 2
  {
    question: "¿Cómo se comenta una línea en JavaScript?",
    options: [
      "!-- comentario --",
      "# comentario",
      "// comentario",
      "/** comentario **/"
    ],
    answer: 2,
    explanation: "Para comentar una sola línea, se usa `//`."
  },

  // Pregunta 3
  {
    question: "¿Qué devuelve `typeof null` en JavaScript?",
    options: [
      "'object'",
      "'null'",
      "undefined",
      "'type'"
    ],
    answer: 0,
    explanation: "Es un bug histórico en JavaScript que `typeof null` devuelve `'object'`."
  },

  // Pregunta 4
  {
    question: "¿Cómo se declara una variable en JavaScript?",
    options: [
      "var x = 5;",
      "let x = 5;",
      "constant x = 5;",
      "Todas las anteriores son válidas (pero no `constant`)"
    ],
    answer: 3,
    explanation: "Usando las palabras clave `var`, `let` o `const`."
  },

  // Pregunta 5
  {
    question: "¿Qué hace el siguiente código: `console.log([1, 2, 3].length);`",
    options: [
      "Imprime `1`",
      "Imprime `3`",
      "Lanza un error",
      "Imprime `'Array'`"
    ],
    answer: 1,
    explanation: "Devuelve el número de elementos del arreglo que es `3`."
  },

  // Pregunta 6
  {
    question: "¿Cuál de los siguientes NO es un bucle en JavaScript?",
    options: [
      "for",
      "while",
      "do..while",
      "repeat"
    ],
    answer: 3,
    explanation: "JavaScript no tiene un bucle llamado `repeat`."
  },

  // Pregunta 7
  {
    question: "¿Qué resultado da `5 + \"2\" + 3` en JavaScript?",
    options: [
      "'523'",
      "10",
      "'7'", 
      "Lanza un error"
    ],
    answer: 0,
    explanation: 'JavaScript convierte elementos en cadenas de texto para concatenar. `"5" + "2" + 3 = "523"`.'
  },

  // Pregunta 8
  {
    question: "¿Cómo se accede al primer elemento de un array llamado `arr`?",
    options: [
      '`arr[0]`',
      '`arr.first`',
      '`arr.0`',
      '`arr.get(0)`'
    ],
    answer: 0,
    explanation: "Accediendo usando el índice de cero (`arr[0]`)."
  },

  // Pregunta 9
  {
    question: "¿Qué hace la función `parseInt(\"10\")`?",
    options: [
      'Devuelve "10"', 
      'Devuelve `10` (número)',
      'Lanza un error',
      'Devuelve `NaN`'
    ],
    answer: 1,
    explanation: "Convierte el string `\"10\"` en el entero `10` correctamente."
  },

  // Pregunta 10
  {
    question: "¿Cómo verifica un valor como `undefined`?",
    options: [
      '`typeof x == "undefined"`',
      '`x === undefined`',
      '`== null`',
      'Todas las anteriores'
    ],
    answer: 1,
    explanation: "Usando `x === undefined` para comparar con el valor `undefined` seguro."
  }
];

// Set en el scope global (para ser usado por app.js)
window.questions = questions;