# Step 1: Build the React app using Vite
FROM node:20-alpine 

WORKDIR /app

COPY package*.json .

RUN npm install -f

COPY . .
EXPOSE 5173

CMD ["npm","run","dev"]

