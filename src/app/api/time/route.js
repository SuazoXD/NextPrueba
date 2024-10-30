import prisma from '../../libs/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        // Uso correcto de prisma.$queryRaw con template literal
        const result = await prisma.$queryRaw`SELECT NOW()`;

        if (!result) {
            throw new Error('No se ha devuelto ningún resultado de la base de datos.');
        }

        return NextResponse.json({
            result,
        });
    } catch (error) {
        return NextResponse.json({
            error: error.message || 'Algo salió mal',
        }, { status: 500 });
    }
}
