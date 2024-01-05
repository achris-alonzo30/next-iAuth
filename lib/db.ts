import { PrismaClient } from "@prisma/client";

// We have to do this because next js of hot reload which doesn't work with prisma
declare global {
    var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;