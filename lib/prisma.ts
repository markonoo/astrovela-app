import { PrismaClient } from '@prisma/client'

// Lazy-load Prisma to avoid initialization errors
let prismaInstance: PrismaClient | null = null

export const prisma = new Proxy({} as PrismaClient, {
  get(target, prop) {
    // Initialize Prisma only when first accessed
    if (!prismaInstance) {
      if (!process.env.DATABASE_URL) {
        throw new Error('DATABASE_URL is not set. Cannot initialize Prisma.')
      }
      prismaInstance = new PrismaClient()
    }
    return (prismaInstance as any)[prop]
  }
})

export default prisma 