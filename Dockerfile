FROM node:20-alpine as build
WORKDIR /cobp-frontend
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.24-alpine

# Install certbot
RUN apk add --no-cache certbot

# Copy renew cron script
COPY server-config/renew /etc/periodic/daily/renew
RUN chmod +x /etc/periodic/daily/renew

RUN mkdir -p /etc/letsencrypt /var/lib/certbot

# Copy entrypoint
COPY server-config/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# nginx config
COPY server-config/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /cobp-frontend/build /usr/share/nginx/html

# Expose ports
EXPOSE 80
EXPOSE 443

ENTRYPOINT [ "/entrypoint.sh" ]
