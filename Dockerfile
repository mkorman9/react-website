FROM node:18 AS builder

COPY . .
RUN npm ci && \
  GENERATE_SOURCEMAP=false REACT_APP_DEV_MODE=false npm run build

FROM nginx:1.25

RUN rm -f /usr/share/nginx/html/*
COPY --chown=nginx:nginx --from=builder build/ /usr/share/nginx/html/
COPY --chown=nginx:nginx --from=builder .docker/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
