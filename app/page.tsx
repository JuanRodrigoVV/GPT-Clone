import React from 'react'
import { SunIcon } from '@heroicons/react/24/solid'
import { BoltIcon } from '@heroicons/react/24/outline'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'


export default function HomePage() {
  return (
    <div className='flex flex-col items-center justify-center text-white h-screen px-2'>
      <h1 className='text-5xl font-bold mb-20'>Chat GPT</h1>

      <div className='flex flex-row space-x-2 text-center'>
        {/* Column 1 */}
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
             {/* sun icon */}
             <SunIcon className="h-8 w-8" />
             <h2>Examplesss</h2>

          </div>
          
          <div className='space-y-2'>
            <p className='infoText'>Explain pyshics</p>
            <p className='infoText'>Give me ten names for companies</p>
            <p className='infoText'>Explain Javascript Basics</p>
          
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
             {/* sun icon */}
             <BoltIcon className="h-8 w-8" />
             <h2>Capabilities</h2>

          </div>
          
          <div className='space-y-2'>
            <p className='infoText'>Change the ChatGPT Model to Use</p>
            <p className='infoText'>Messages are stored in Firebase's Firestore</p>
            <p className='infoText'>Acced your chat history</p>
          
          </div>
        </div>
        {/* Column 3 */}
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
             {/* sun icon */}
             <ExclamationTriangleIcon className="h-8 w-8" />
             <h2>Limitations</h2>

          </div>
          
          <div className='space-y-2'>
            <p className='infoText'>May occassionally generate incorrect information</p>
            <p className='infoText'>May occassionally produce harmful instructions or biased content</p>
            <p className='infoText'>Limited knowledge of world and events after 2021</p>
          
          </div>
        </div>
      </div>

    </div>
  )
}
