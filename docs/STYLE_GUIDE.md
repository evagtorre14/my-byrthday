# Guía de Estilo: MyBirthday

Este documento define la identidad visual para la página del cumpleaños. El objetivo es crear una apariencia fresca, divertida y acogedora.

## 1. Concepto de Diseño

El concepto de diseño se centra en la **celebración y la alegría**. La estética será **limpia, moderna y vibrante**, evitando cualquier elemento formal o corporativo. Se busca crear una experiencia digital que se sienta como una fiesta: llena de color, energía positiva y detalles amigables. Las animaciones sutiles, las formas redondeadas y la tipografía amable contribuirán a una atmósfera acogedora y emocionante, invitando a los usuarios a sonreír y anticipar el evento.

## 2. Paleta de Colores: "Sorbete de Frutas"

La paleta combina colores vibrantes con neutros suaves para asegurar legibilidad y un ambiente festivo.

- **Primario (Principal):** Coral Vivo - `#FF6B6B`
  - Uso: Botones principales, títulos destacados, iconos.
- **Acento (Secundario):** Menta Fresca - `#4ECDC4`
  - Uso: Elementos interactivos secundarios, fondos de sección, detalles decorativos.
- **Acento Brillante:** Amarillo Sol - `#FFD93D`
  - Uso: Temporizador, puntos de atención, elementos que necesiten "saltar" a la vista.
- **Fondo Principal:** Blanco Hueso - `#F7FFF7`
  - Uso: Color de fondo general de la página para una sensación cálida y limpia.
- **Texto Principal:** Gris Oscuro - `#292F36`
  - Uso: Párrafos y texto general. Ofrece un contraste alto y es fácil de leer.
- **Texto Secundario:** Gris Suave - `#6A7E8A`
  - Uso: Textos de ayuda, placeholders, información secundaria.

## 3. Tipografía

Usaremos fuentes de Google Fonts, fáciles de importar y con un carácter amigable.

- **Fuente para Títulos (`font-headings`):** **Nunito**
  - Estilo: Sans-serif redondeada y alegre.
  - Pesos: `Bold (700)` para títulos principales, `Regular (400)` para subtítulos.
- **Fuente para Cuerpo de Texto (`font-body`):** **Lato**
  - Estilo: Sans-serif muy legible y moderna.
  - Pesos: `Regular (400)` para párrafos, `Italic (400)` para énfasis.

## 4. Componentes de UI (Estilo General)

- **Botones:**
  - Completamente redondeados (`rounded-full`).
  - Con una sombra sutil para dar profundidad (`shadow-lg`).
  - Efecto `hover` que levanta ligeramente el botón (`transform: translateY(-2px)`).
  - El botón primario usará el color `Coral Vivo`.

- **Tarjetas y Contenedores:**
  - Bordes generosamente redondeados (`rounded-2xl`).
  - Sombra suave para que parezcan flotar sobre el fondo (`shadow-xl`).
  - Fondo blanco o de un color neutro muy claro.

- **Campos de Formulario (RSVP):**
  - Bordes redondeados (`rounded-lg`).
  - Un borde sutil en estado normal.
  - Al hacer `focus`, el borde cambiará al color `Menta Fresca` para dar feedback visual.

## 5. Iconografía

Se utilizará una librería de iconos de tipo "línea" para mantener un aspecto moderno y limpio.
- **Librería recomendada:** **Heroicons** (integración perfecta con Tailwind CSS) o **Feather Icons**.
- Uso: Para decorar secciones, indicar acciones en botones o en la sección de detalles del evento.

## 6. Tono e Imágenes

- **Imágenes:** Deben ser alegres, luminosas y naturales. Evitar fotos demasiado posadas. La foto de la sección de bienvenida debe ser especialmente divertida y de alta calidad.
- **Tono de Comunicación:** Cercano, alegre y un poco informal. Usaremos exclamaciones y un lenguaje que invite a la celebración.
