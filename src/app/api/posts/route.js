import prisma from '@/app/utils/connect';
import { NextResponse } from 'next/server'
import { join } from 'path';
import { getAuthSession } from '@/app/utils/auth';
import { writeFile } from 'fs/promises';

export const GET = async (req) =>{

    const {searchParams} = new URL(req.url);
    const page = searchParams.get('page');
    const cat = searchParams.get('cat');

    const POST_PER_PAGE = 3;

    const query = {
        take: POST_PER_PAGE,
        skip: (page-1) * POST_PER_PAGE,
        orderBy: {
            createdAt: 'desc',
        },
        where:{
            ...(cat && cat!="" && cat!="undefined" && {catSlug: cat})
        }
    };

    try{
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({where: query.where}),
        ]);
        return new NextResponse(
            JSON.stringify({posts, count}, { status: 200})
        );  
    }
    catch(err){
        console.log(err);
        return new NextResponse(
            JSON.stringify({message: "Something went wrong!"}, { status: 500})
        );
        }
};

//create post

export const POST = async (req, res) =>{
    const session = await  getAuthSession();

    if(!session){
        return new NextResponse(
            JSON.stringify({message: "You are not authenticated!"}, { status: 401})
        );
    }
    
    try{
        const body = await req.formData()
        const file= body.get('img');
        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = "/" + Date.now().toString().replaceAll(" ", "_") + file.name.replaceAll(" ", "_")
        const path = join(process.cwd(),'public/images', filename);
        await writeFile(path, buffer);
        console.log(filename)
        const post = await prisma.post.create({
            data:{title: body.get('title'), slug: body.get('slug'), desc: body.get('desc'), catSlug: body.get('slug'), img: filename, userEmail: session.user.email}
        })
        return new NextResponse(
            JSON.stringify(post, { status: 200})
        ); 
    }
    catch(err){
        console.log(err);
        return new NextResponse(
            JSON.stringify({message: "Something went wrong!"}, { status: 500})
        );
        }
};