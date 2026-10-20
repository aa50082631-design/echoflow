# EchoFlow

PWA personal para aprender inglés mediante música, shadowing y vocabulario inteligente. Este repositorio implementa **solo la Fase 0 — Bootstrap y prototipo de diseño** según la especificación maestra.

## Stack

React · TypeScript · Vite · Tailwind CSS · React Router · Lucide · vite-plugin-pwa · Vitest · Testing Library.

## Requisitos

Node.js 22+ y npm.

```bash
npm ci
npm run dev
```

Comprobaciones antes de integrar cambios:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Contenido de esta fase

- Navegación responsive: Inicio, Música, Practicar, Vocabulario, Progreso y Ajustes.
- Estética Glassmorphism con diseño mobile-first y soporte de `prefers-reduced-motion`.
- Pistas, frases, vocabulario y estadísticas **de demostración originales**.
- Manifest y service worker inicial de PWA.
- Workflows GitHub Actions para CI y GitHub Pages.
- Contratos mínimos para desacoplar proveedores futuros.

## Límites explícitos

No hay audio real, importación de archivos, persistencia IndexedDB, sincronización LRC, repetición espaciada real, llamadas de IA, OAuth ni reproducción Spotify. No hay secretos ni se debe introducir una clave privada en el bundle. No se incluye audio ni letras comerciales.

## GitHub Pages y Android

Consulta [docs/USER_SETUP.md](docs/USER_SETUP.md). GitHub Pages debe configurarse para desplegar mediante GitHub Actions. La URL publicada será HTTPS, requisito para instalar y probar la PWA en Chrome Android.

## Documentación

- [Arquitectura](docs/ARCHITECTURE.md)
- [Proveedores y derechos](docs/PROVIDERS_AND_RIGHTS.md)
- [Seguridad](docs/SECURITY.md)
- [Setup Android](docs/USER_SETUP.md)
