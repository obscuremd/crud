"use client"
import EditTopicForm from '@/app/Components/EditTopicForm'
import { useRouter } from 'next/navigation'
import React from 'react'

interface EditTopicProps{
  params: any
}

const EditTopic: React.FC<EditTopicProps> = ({params}) => {


  const {id} = params

  if(!id){
    return <div>loading</div>
  }

  return (
    <div>
      <EditTopicForm id={id}/>
    </div>
  )
}

export default EditTopic