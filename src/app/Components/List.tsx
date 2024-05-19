"use client"
import axios from 'axios'
import { BinMinusIn, EditPencil } from 'iconoir-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface Topic {
    _id: string;
    title: string;
    description: string;
}

const List = () => {

    const [data, setData] = useState <Topic[]> ([])

    const getTopics =async()=>{
        try {
            const res = await axios.get('/api/topics')
            setData(res.data.topics)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTopic =async(id)=>{

        const confirmed = confirm('are you sure you want to delete')
        if(confirmed){
            try {
                await axios.delete(`/api/topics?id=${id}`)
                getTopics()
            } catch (error) {
                console.log(error);
                
            }
        }
    }
    
    useEffect(()=>{getTopics()},[])

return (
    <div className='flex flex-col gap-5'>
    {data.map((item, index)=>(
        <div draggable key={index} className='flex justify-between items-start p-3 border-[1px] border-dashed rounded-lg'>
            <div>
                <h2 className='font-bold text-xl'>{item.title}</h2>
                <p className='font-light text-sm text-balance max-w-[50em]'>{item.description}</p>
            </div>

            <div className='flex gap-3 text-sm'>
                <button className='text-red-400' onClick={()=>deleteTopic(item._id)}>
                    <BinMinusIn/>
                </button>
                <Link href={`/editTopic/${item._id}`}>
                    <EditPencil/>
                </Link>
            </div>
        </div>
    ))}
    </div>
)
}

export default List