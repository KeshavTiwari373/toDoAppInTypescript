# Base image selection (replace with a suitable Node.js image)
FROM node:18-alpine

# Working directory within the container
WORKDIR /app

# Copy your application code
COPY package*.json ./
COPY . /app/  

# Install dependencies
RUN npm install

# Expose the port your application listens on (replace with your port)
EXPOSE 5100

# Start command (replace with your application's start command)
CMD [ "npm", "start" ]
