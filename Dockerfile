FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY 404.html /usr/share/nginx/html/404.html

EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]