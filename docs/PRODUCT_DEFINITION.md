# Definición del Producto: MyBirthday

Este documento sirve como la fuente de verdad para la visión, el alcance, y la guía técnica del proyecto "MyBirthday".

## 1. Visión del Producto

**Objetivo:** Crear una **página web de una sola vista (single-page)**, personal y elegante para celebrar un cumpleaños. El usuario se moverá entre las diferentes secciones haciendo scroll. La página servirá como una invitación digital, un centro de información y un lugar para interactuar.

**Público Objetivo:** Amigos, familiares y asistentes al evento.

**Experiencia de Usuario:** La web debe ser visualmente atractiva, con transiciones suaves entre secciones, fácil de navegar, rápida y completamente responsive.

## 2. Stack Tecnológico

- **Framework Principal:** [Astro](https://astro.build/)
  - **¿Por qué Astro?** Ideal para sitios web centrados en el contenido y el rendimiento.
- **Estilos CSS:** [Tailwind CSS](https://tailwindcss.com/)
  - **¿Por qué Tailwind?** Permite construir diseños complejos y personalizados rápidamente.
- **Plataforma de Despliegue:** [GitHub Pages](https://pages.github.com/)
  - **¿Por qué GitHub Pages?** Solución de hosting gratuita e integrada con el repositorio.
- **Control de Versiones:** Git & GitHub.

## 3. Arquitectura y Funcionalidades

La aplicación será una página única (`index.astro`) compuesta por varias secciones/componentes que se pueden desplazar verticalmente.

- **Sección de Bienvenida**
  - Una foto principal divertida.
  - Nombre del evento o temática del cumpleaños.
  - Temporizador con la cuenta regresiva.
  - Fecha, hora y nombre del lugar del evento.

- **Sección de Confirmación de Asistencia (RSVP)**
  - Un formulario simple para que los invitados confirmen su asistencia.
  - Campos: Nombre, Apellido, ¿Asistes? (Sí/No).
  - *Consideración técnica:* Se puede integrar con un servicio serverless (Netlify/Vercel Forms) o Google Forms para recoger los datos.

- **Sección de Galería de Recuerdos**
  - Un carrusel o grid de imágenes con momentos especiales.

- **Sección de Muro de Comentarios**
  - Un espacio para que los invitados dejen sus mensajes de felicitación.
  - *Consideración técnica:* Esta funcionalidad es dinámica. Requerirá una pequeña base de datos (ej. Supabase, Firebase) o un servicio de comentarios de terceros para almacenar y mostrar los mensajes.
  
- **Otras secciones:** Se podrán añadir más secciones según sea necesario (ej. "Transporte", "Presupuesto", "Notas").


## 5. Próximos Pasos

1.  **Inicializar el proyecto Astro:** `npm create astro@latest`
2.  **Añadir la integración de Tailwind CSS:** `npx astro add tailwind`
3.  **Configurar el repositorio en GitHub.**
4.  **Crear los componentes para cada sección (`Welcome`, `RSVP`, etc.).**
5.  **Ensamblar las secciones en la página principal `index.astro`.**
6.  **Configurar el flujo de CI/CD con GitHub Actions para el despliegue.**
