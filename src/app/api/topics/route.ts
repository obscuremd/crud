import { NextRequest, NextResponse } from "next/server"
import { connectMongoDb } from '../../../../libs/mongoDb';
import { Topics } from "../../../../models/TopicModel"

export const POST =async(req:NextRequest)=>{
    await connectMongoDb()
    const {title, description} = await req.json()
    await Topics.create({title, description})

    return(
        NextResponse.json({message:"success"},{status: 201})
    )
}

// export const GET = async()=>{
//     await connectMongoDb()
    
// }

export const GET = async(req:NextRequest)=>{
    await connectMongoDb()
    const id = req.nextUrl.searchParams.get('id')

    if(id){
        const topics = await Topics.findById(id)
        return NextResponse.json({topics})
    }else{
        const topics = await Topics.find()
        return NextResponse.json({topics})
    }
    
}

export const DELETE = async(req: NextRequest)=>{
    await connectMongoDb()
    const id = req.nextUrl.searchParams.get('id')
    await Topics.findByIdAndDelete(id)
    return NextResponse.json('topic deleted successfully')
}

export const PUT = async(req: NextRequest)=>{
    await connectMongoDb()
    const id = req.nextUrl.searchParams.get('id')
    const {title, description} = await req.json()
    await Topics.findByIdAndUpdate(id,{title, description})
    return NextResponse.json('topic updated successfully')
}