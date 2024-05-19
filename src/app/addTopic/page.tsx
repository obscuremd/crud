"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const AddTopic = () => {
  const route = useRouter()

  const [title, setTopic]=useState('')
  const [description, setDescription]=useState('')

  const addTopic =async()=>{
    try {
        await axios.post(`/api/topics`,{title:title,description:description})
        route.push('/')
    } catch (error) {
        console.log(error);
    }
  
}

  return (
    <div className='flex flex-col gap-5'>
      <input className='border-[1px] w-full p-2 rounded-xl border-dashed outline-none' onChange={(e)=>setTopic(e.target.value)} type="text" placeholder='Topic Title' />
      <input className='border-[1px] w-full p-2 rounded-xl border-dashed outline-none' onChange={(e)=>setDescription(e.target.value)} type="text" placeholder='Topic Description' />
      <button className='w-fit text-sm font-bold py-3 px-5 bg-blue-400 text-white rounded-xl' onClick={addTopic}>Add Topic</button>
    </div>
  )
}

export default AddTopic