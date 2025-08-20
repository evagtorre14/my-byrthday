import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // ¡IMPORTANTE!
  // Actualiza estos valores con tu usuario y el nombre de tu repositorio de GitHub
  site: 'https://eva.gtorre.github.io',
  base: '/MyBirthday',
});