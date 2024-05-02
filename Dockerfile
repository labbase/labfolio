FROM node

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

CMD npm run dev

EXPOSE 3004

