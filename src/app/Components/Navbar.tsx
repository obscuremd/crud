import { Plus } from 'iconoir-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full flex justify-between items-center bg-slate-800 text-blue-100 px-8 py-3 rounded-2xl'>
            <Link href={'/'}>Home</Link>
            <Link href={'/addTopic'} className='bg-slate-400 p-2 rounded-md' ><Plus/></Link>
        </div>
    )
}

export default Navbar