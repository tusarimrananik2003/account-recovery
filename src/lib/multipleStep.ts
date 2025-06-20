"use server";
import prisma from '@/lib/prisma';

export default async function multipleStep() {
    return await prisma.multipleStep.findUnique({
        where: { id: 1 },
    });
}
