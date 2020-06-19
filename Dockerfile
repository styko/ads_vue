FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
# dokku docker-options:add ads-vue build '--build-arg GTOKEN=xxx'
RUN sed -i -e 's/${GTOKEN}/'"$GTOKEN"'/g' .env.production
RUN printenv
RUN cat .env.production
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
