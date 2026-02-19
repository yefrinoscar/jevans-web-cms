FROM node:20-alpine AS build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
WORKDIR /opt/app
COPY package.json ./
# You might want to copy package-lock.json here later
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine
RUN apk add --no-cache vips-dev
WORKDIR /opt/app
COPY --from=build /opt/app/node_modules ./node_modules
COPY --from=build /opt/app ./
ENV PATH /opt/app/node_modules/.bin:$PATH

EXPOSE 1337
CMD ["npm", "run", "start"]
