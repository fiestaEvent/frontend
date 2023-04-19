FROM node:18.16-alpine
WORKDIR /FIESTA-EVM
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
