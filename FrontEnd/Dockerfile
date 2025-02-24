# Build the React app using Vite
FROM node:20-alpine 

# Set working directory
WORKDIR /app

# Copy frontend package.json 
COPY .env ./
COPY package*.json ./


# install dependencies
RUN npm install -f


# copy the frontend code
COPY . .

# expose frontend port
EXPOSE 5173

# start the frontend server
CMD ["npm","run","dev"]

