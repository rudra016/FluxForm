"use client"
import { db } from '@/configs'
import { JsonForms } from '@/configs/schema'
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import ResponseItem from './_components/ResponseItem'

const Responses = () => {
    const {user}=useUser()
    const [formList, setFormList] = useState([])
   
    useEffect(() => {
      user&&getFormList()
    
      
    }, [user])
    
    const getFormList=async()=>{
       
        const result = await db.select().from(JsonForms).where(eq(JsonForms.createdBy, user?.primaryEmailAddress?.emailAddress)).orderBy(desc(JsonForms.id))
        setFormList(result)
        console.log(result)
    }
  return (
    <div className='p-10'>
        <h2 className='font-bold text-3xl flex items-center justify-between my-2'>
        Responses
        </h2>
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
            {formList&&formList?.map((form, index)=>(
               <ResponseItem key={index} formRecord={form} jsonForm={JSON.parse(form.jsonform)} />
            ))}
        </div>
    </div>
  )
}

export default Responses