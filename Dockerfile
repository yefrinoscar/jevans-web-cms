# path: ./Dockerfile

FROM node:20-alpine AS opt

# Install libraries for image processing (needed for Sharp)
RUN apk add --no-cache libc6-compat \
    vips-dev \
    build-base \
    git \
    python3 \
    make \
    g++

WORKDIR /opt/app
COPY package.json package-lock.json ./
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install

ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .
RUN npm run build

FROM node:20-alpine
RUN apk add --no-cache vips-dev
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/app
COPY --from=opt /opt/app/node_modules ./node_modules
COPY --from=opt /opt/app/dist ./dist
COPY --from=opt /opt/app/public ./public
COPY --from=opt /opt/app/package.json ./package.json

EXPOSE 1337

CMD ["npm", "run", "start"]
