#!/bin/sh

# Get certs
certbot certonly -n -d benchmark.acceleratorpracticum.ru,www.benchmark.acceleratorpracticum.ru \
  --standalone --preferred-challenges http --email benchbot24@gmail.com --agree-tos --expand

# Kick off cron
/usr/sbin/crond -f -d 8 &

# Start nginx
/usr/sbin/nginx -g "daemon off;"
