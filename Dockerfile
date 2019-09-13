FROM node:12

ENV NODE_ENV production

COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

CMD ["npm", "start"]
