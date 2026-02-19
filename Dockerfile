FROM node:20-alpine AS opt
RUN apk add --no-cache libc6-compat
WORKDIR /opt/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine
RUN apk add --no-cache vips-dev
WORKDIR /opt/app
# Copy only what is needed for production
COPY --from=opt /opt/app/node_modules ./node_modules
COPY --from=opt /opt/app/dist ./dist
COPY --from=opt /opt/app/package.json ./package.json
COPY --from=opt /opt/app/public ./public
# Strapi loads config from ./config/ (not dist/config/) and only accepts .js/.json
COPY --from=opt /opt/app/dist/config ./config

EXPOSE 1337
CMD ["npm", "run", "start"]
