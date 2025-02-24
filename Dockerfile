# # Use Node.js base image
# FROM node:20-alpine 

# # Set the working directory inside the container
# WORKDIR /app

# # Copy both backend and frontend package.json files for dependency installation
# COPY BackEnd/package*.json BackEnd/
# COPY FrontEnd/package*.json FrontEnd/

# # Install dependencies for backend
# WORKDIR /app/BackEnd
# RUN npm install -f

# # Install dependencies for frontend
# WORKDIR /app/FrontEnd
# RUN npm install -f

# # Copy the full project
# WORKDIR /app
# COPY . .

# # Install pm2 to manage multiple processes
# RUN npm install -g pm2

# # Expose necessary ports
# EXPOSE 3000 5173

# # Start both backend and frontend using pm2
# CMD ["pm2-runtime", "start", "ecosystem.config.js"]


# Use Node.js base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy both backend and frontend package.json files for dependency installation
COPY FrontEnd/package*.json ./FrontEnd/
COPY BackEnd/package*.json ./BackEnd/

# Install dependencies for backend
WORKDIR /app/BackEnd
RUN npm install -f

# Install dependencies for frontend
WORKDIR /app/FrontEnd
RUN npm install -f

# Copy the full project
# WORKDIR /app
COPY . .

# Expose necessary ports
EXPOSE 3000 5173

# Start both backend and frontend using npm
CMD sh -c "npm run dev --prefix /app/BackEnd & npm run dev --prefix /app/FrontEnd"
