import prisma from '@/app/utils/connect';
import { NextResponse } from 'next/server'


export const GET = async (req) =>{

    const {searchParams } = new URL(req.url);
    const required = searchParams.get("type");
    
    let query = {
        orderBy: {
            createdAt: 'desc',
        },
        take: 1,
    };

    if(required && required === "popular"){
        query = {
            take: 3,
            orderBy: {
                views: 'desc',
            },
        };
    }
    
    if(required && required === "edchoice"){
        query = {
            take: 3,
            where:
            {
                userEmail: "adaridileep@gmail.com",
            },
        };
    }


    try{
        const [posts] = await prisma.$transaction([
            prisma.post.findMany(query)
        ]);
        return new NextResponse(
            JSON.stringify({posts}, { status: 200})
        ); 
    }
    catch(err){
        console.log(err);
        return new NextResponse(
            JSON.stringify({message: "Something went wrong!"}, { status: 500})
        );
        }


}