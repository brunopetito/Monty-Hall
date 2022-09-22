import { SyntheticEvent, useState } from "react"
import Gift from '../assets/gift.svg'

interface Props{
  number:number
  havePresent:boolean
  selected:boolean
  controlarSelected:Function
}



export default function Door({number,havePresent,selected,controlarSelected}:Props){
  const [open,setOpen] = useState(false)



  return(
    <div className="sm:w-52 flex flex-col  items-center relative w-28">
      <div 
          className={`sm:w-44 sm:h-80 bg-yellow-800  border-r-4 border-t-4 border-l-4 border-yellow-900 w-20 h-32
          ${open && 'bg-zinc-700 z-10'} ${(selected && !open) &&'border-yellow-300 '}`}

          onClick={()=>controlarSelected(number)}
          
          > 
      </div>
        <span className={`absolute hover:cursor-pointer sm:top-10 sm:text-5xl text-zinc-100 text-2xl ${(selected && !open) &&'text-yellow-300 '}`}
        onClick={()=>controlarSelected(number)}
        >{number}</span>


        <button className={`sm:h-7 sm:w-7 bg-zinc-100 rounded-full absolute  sm:top-36 left-7  hover:cursor-pointer h-4 w-4 top-16  ${(selected && !open) && 'bg-yellow-300 '}`}
        onClick={()=>setOpen(true)}
        >
        </button>


        {havePresent && open ? (

        <div className="sm:w-20 sm:h-20  absolute sm:top-32 z-20 w-10 h-10 top-10">
          
          { <img src={Gift} alt="React Logo" />}
        </div>
        
        
        ): null}
      <div className={`sm:w-48 sm:h-3  h-1 w-24 ${(selected && !open) ?'bg-yellow-300 ':'bg-zinc-600'}`}>
        
      </div>
      
    </div>
   
  )
}