FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY env.sh /docker-entrypoint.d/env.sh

RUN chmod +x /docker-entrypoint.d/env.sh
