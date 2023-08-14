import {DocumentData} from 'firebase/firestore'
import { useSession } from 'next-auth/react'


type Props = {
    message: DocumentData;
}

function Message({message}: Props) {

  const {data: session} = useSession(); 
  const isChatGPT = message.user.name === "ChatGPT"

  return (
    <div className={`py-5 text-white ${isChatGPT && 'bg-[#434654]'}`}>
        <div className='flex space-x-5 px-10 max-2-2xl mx-auto'>
            <img src={isChatGPT ? message.user.avatar : (session?.user?.image!)}alt="" className='h-8 w-8'/>
            <p className='pt-1 text-sm'>{message.text}</p>
        </div>
    </div>
  )
}

export default Message