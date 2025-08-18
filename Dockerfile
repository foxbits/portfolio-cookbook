# Stage 1: Builder
# This stage installs dependencies and builds the Next.js application.
FROM node:22-alpine AS builder
WORKDIR /app

# Copy package files and install all dependencies (including devDependencies)
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Run the build script
RUN npm run build

# Stage 2: Runner
# This stage takes the built assets and prepares a lean production image.
FROM node:22-alpine AS runner
WORKDIR /app

# Only install production dependencies
COPY package*.json ./
RUN npm install --production

# Copy the built application from the 'builder' stage
COPY --from=builder /app/.next ./.next

# Copy public assets and the Next.js config file
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./

# Expose the port the app runs on
EXPOSE 3000

# The command to start the app in production mode
CMD ["npm", "start"]