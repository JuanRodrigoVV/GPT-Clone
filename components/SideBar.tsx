'use client'

import { useSession, signOut } from 'next-auth/react'
import React from 'react'
import NewChat from './NewChat'

export default function SideBar() {
  const {data: session} = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
     <div className='flex-1'>
        <div>
            {/* NewChat */}
            <NewChat/>
        </div>
        <div>
            {/* Model Selector */}
        </div>
        
            {/* Map Chat List */}
       
     </div>
     {session && (
      <img onClick={() => signOut()} className='h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50' src={session.user?.image!} alt="Profile Pic" />
     )}
    </div>
  )
}