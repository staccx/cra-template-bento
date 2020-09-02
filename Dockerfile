FROM node:8.11.4-alpine as builder
ENV NODE_ENV ci
RUN apk add --no-cache yarn
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock", "./"]
COPY "src" "src"
COPY "public" "public"

RUN yarn install --silent
RUN yarn build

FROM nginx:1.13.3-alpine
COPY site.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html