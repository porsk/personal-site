# personal-site

Source of [pkrisztian.com](https://pkrisztian.com), my personal site.

Built with React, TypeScript, Material UI and Vite, served by nginx in a Docker container.

## Development

Requires Node.js 24+.

```sh
npm install
npm run dev       # start the dev server on http://localhost:3000
npm run lint      # ESLint
npm run format    # Prettier
npm run build     # type-check and build into dist/
npm run preview   # serve the production build locally
```

## Docker

```sh
docker build -t pkrisztian .
docker run -p 8080:80 pkrisztian
```

Pushes to `develop` and `main` build the image and publish it to Docker Hub as `latest` plus the commit SHA. Pull requests only build it.
