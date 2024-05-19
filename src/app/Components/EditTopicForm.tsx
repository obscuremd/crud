import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface EditTopicFormProps{
  id: string
}

const EditTopicForm: React.FC<EditTopicFormProps> = ({id}) => {

  const route = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(()=>{

      const getTopics =async()=>{
        try {
            const res = await axios.get(`/api/topics?id=${id}`)

            setTitle(res.data.topics.title)
            setDescription(res.data.topics.description)

        } catch (error) {
            console.log(error);
        }
    }

    getTopics()
  },[])


  const updateTopic =async()=>{
    
      try {
        const res = await axios.put(`/api/topics?id=${id}`,{title:title, description:description})

        if (res.status ===200){
          route.push('/')
        }
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className='flex flex-col gap-5'>
      <input className='border-[1px] w-full p-2 rounded-xl border-dashed outline-none' onChange={(e)=>setTitle(e.target.value)} type="text" placeholder={title} />
      <input className='border-[1px] w-full p-2 rounded-xl border-dashed outline-none' onChange={(e)=>setDescription(e.target.value)} type="text" placeholder={description} />
      <button onClick={()=>updateTopic()} className='w-fit text-sm font-bold py-3 px-5 bg-blue-400 text-white rounded-xl'>Update Topic</button>
    </div>
  )
}

export default EditTopicForm