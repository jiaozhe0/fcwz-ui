FROM node:12.16.3-alpine3.9
# 当执行run命令时，此目录才会创建
RUN mkdir -p /var/www/fc-component
WORKDIR /var/www/fc-component

COPY package*.json ./
# RUN npm config set registry https://registry.npm.taobao.org
RUN npm install yarn
RUN yarn install

COPY . .
# RUN yarn run build
# RUN yarn run generate

# EXPOSE 3001

# ENV NUXT_HOST=0.0.0.0
# ENV NODE_ENV=de 
# ENV NUXT_PORT=3001

CMD [ "yarn", "dev" ]