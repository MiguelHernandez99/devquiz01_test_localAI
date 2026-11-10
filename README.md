# devquiz01_test_localAI
DevQuiz con IA local ministral-3:14b

# 💻 DevQuiz — Quiz Interactivo de JavaScript Básico

Aplicación web interactiva de preguntas y respuestas sobre fundamentos de **JavaScript** para principiantes. Desarrollada sin librerías ni frameworks externos, utilizando únicamente tecnologías web nativas y HTML semántico.

> **Nota sobre el desarrollo:** Este proyecto fue creado siguiendo el reto propuesto por **MoureDev** en su tutorial *"Control total con Pi Agent: La alternativa open-source a Claude Code"*, adaptado y ejecutado **100 % en local** mediante **Ollama** y el modelo **`ministral-3:14b`** sobre una **NVIDIA RTX 3060 (12 GB VRAM)**.

---

## ✨ Características principales

* **10 preguntas de JavaScript básico:** Cada pregunta incluye 4 opciones de respuesta y una breve explicación educativa.
* **Progreso visual en tiempo real:** Barra de progreso dinámica que indica el avance a lo largo del cuestionario.
* **Retroalimentación inmediata:** Al seleccionar una opción, resalta en **verde** la respuesta correcta, en **rojo** si hubo error y despliega la explicación correspondiente.
* **Pantalla de resultados:** Muestra la puntuación total obtenida al finalizar junto con un botón para reiniciar la partida.
* **Accesibilidad y código limpio:** Construido con etiquetas HTML semánticas, botones reales (`<button>`) y código fuente comentado en español.

---

## 📂 Estructura del proyecto

```text
devquiz/
├── index.html   # Estructura semántica de la aplicación
├── styles.css   # Estilos visuales, estados de acierto/error y diseño responsivo
├── quiz.js      # Banco de 10 preguntas, opciones, índice correcto y explicaciones
├── app.js       # Lógica del juego, control de estado, barra de progreso y puntaje
└── README.md    # Documentación del proyecto
```

---

## 🚀 Cómo probar el proyecto

Al no depender de compiladores ni servidores complejos, puedes ejecutarlo de dos formas:

### Opción 1: Directamente en el navegador
1. Clona o descarga este repositorio en tu computadora:
   ```bash
   git clone https://github.com
   ```
2. Entra a la carpeta del proyecto y haz doble clic sobre el archivo **`index.html`** para abrirlo en tu navegador favorito.

### Opción 2: Con un servidor local (Recomendado)
Si usas **Visual Studio Code**, instala la extensión **Live Server**, haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.

---

## 🛠️ Stack y entorno de generación

* **Frontend:** HTML5 Semántico, CSS3, JavaScript (Vanilla ES6+).
* **Agente de IA:** [Pi Agent](https://github.com) (alternativa open-source a Claude Code).
* **Motor y Modelo Local:** Ollama + `ministral-3:14b` (contexto ajustado a 8,192 tokens).
* **Hardware:** GPU NVIDIA GeForce RTX 3060 (12 GB VRAM).

---

## 🗺️ Próximas mejoras (Roadmap)

* [ ] Añadir un temporizador por pregunta.
* [ ] Permitir elegir entre distintas categorías (HTML, CSS, JS, Git).
* [ ] Guardar el historial de mejores puntuaciones en `localStorage`.
* [ ] Añadir modo claro / oscuro.
