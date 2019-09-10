FROM node:12

COPY package.json package-lock.json ./

RUN npm install --production

COPY . .

CMD ["npm", "start"]
