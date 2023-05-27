FROM node
WORKDIR /usr/src/app
COPY package*.json .
COPY prisma ./prisma/
RUN yarn install
COPY . .
RUN npx prisma generate
RUN yarn run build
EXPOSE 8080
CMD ["yarn","run","start:prod"]