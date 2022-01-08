# build environment
FROM node:16.13.1-alpine3.14 as build

ENV NODE_ENV=production
ENV DISABLE_ESLINT_PLUGIN=true
ENV GENERATE_SOURCEMAP=false

WORKDIR /app

COPY ./package*.json ./
RUN npm ci

COPY ./ ./

RUN npm run build

# production environment
FROM nginx:1.20.2

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /www/pkrisztian
