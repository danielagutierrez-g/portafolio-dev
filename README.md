# Portafolio de Daniela

Portafolio académico creado con Angular. Presenta cinco proyectos con enlaces al código y a sus versiones en GitHub Pages.

Las cuatro demos complementarias son aplicaciones educativas nuevas, relacionadas con temas de repositorios Java existentes. Funcionan en el navegador con datos locales y no se conectan a esos servicios.

## Requisitos

- Node.js 20.19 o posterior
- npm

## Ejecutar localmente

```bash
npm ci
npm start
```

Abre `http://localhost:4200/`.

## Comprobaciones

```bash
npm test -- --watch=false
npm run build
```

## Publicación

Cada cambio en `main` ejecuta la construcción y publica el sitio en GitHub Pages mediante GitHub Actions. El catálogo y las URL de las demos están en `src/app/projects.ts`.

Para ajustar el perfil, edita el texto de `src/app/app.html`. Para agregar un proyecto, añade sus datos en `src/app/projects.ts`.

## Organización

La aplicación mantiene una estructura pequeña: `app.ts` presenta la página, `projects.ts` contiene los datos tipados del catálogo y los estilos se separan entre el componente y `src/styles.css`. Para este sitio estático no se necesita backend.
