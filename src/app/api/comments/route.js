import { getAuthSession } from '@/app/utils/auth';
import prisma from '@/app/utils/connect';
import { NextResponse } from 'next/server'

//Comments
export const GET = async (req) =>{

    const { searchParams } = new URL(req.url);
    const postSlug = searchParams.get("postSlug");
    try{
        const comment = await prisma.comment.findMany({
            where: {
                ...(postSlug && { postSlug } )
            },
            include: {
                user:true,
            },
        })
        return new NextResponse(
            JSON.stringify(comment, { status: 200})
        ); 
    }
    catch(err){
        console.log(err);
        return new NextResponse(
            JSON.stringify({message: "Something went wrong!"}, { status: 500})
        );
        }
};


//create Comment

export const POST = async (req) =>{
    const session = await getAuthSession();

    if(!session){
        return new NextResponse(
            JSON.stringify({message: "You are not authenticated!"}, { status: 401})
        );
    }
    
    try{
        const body = await req.json()
        const comment = await prisma.comment.create({
            data:{...body, userEmail: session.user.email}
        })
        return new NextResponse(
            JSON.stringify(comment, { status: 200})
        ); 
    }
    catch(err){
        console.log(err);
        return new NextResponse(
            JSON.stringify({message: "Something went wrong!"}, { status: 500})
        );
        }
};