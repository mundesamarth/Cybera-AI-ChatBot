# Use an official Node.js image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install -f

# Copy the rest of the backend files
COPY . .

# Expose the backend port (change it if needed)
EXPOSE 3000

# Start the Express server
CMD ["npm", "start"]
