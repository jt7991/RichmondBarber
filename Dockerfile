FROM oven/bun:1 AS build
WORKDIR /app
COPY . .
RUN bun install
RUN bun run build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
COPY apache/site.conf /usr/local/apache2/conf/extra/site.conf
RUN echo 'Include conf/extra/site.conf' >> /usr/local/apache2/conf/httpd.conf \
    && httpd -t
EXPOSE 80
