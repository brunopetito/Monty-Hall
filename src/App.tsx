import { useEffect, useState } from "react"
import Door from "./components/Door"

function App() {
  const [choosen,setChoosen]= useState(0)
  const [sort,setSort] = useState(0)
  const [open,setOpen] = useState(0)
  const [erro,setErro]= useState('')
 


  useEffect(()=>{
        
       setSort(Math.floor(Math.random()*3 +1))
  },[])

  function openDoor(){
    if(choosen){
      const array =[1,2,3]
      const novoArray = array.filter(numero => numero != sort && numero != choosen)
    
      setOpen(novoArray[0])
    }else{
      setErro('Você não escolheu uma porta!, clique nela!')
    }
   
    
  }
  

  function controlarSelected(n:number){
    setChoosen(n)
  }

  return (
    <div className="m-auto flex  flex-col items-center sm:h-screen sm:w-full sm:p-9 p-6 min-h-screen  bg-gradient-to-l from-cyan-500 to-sky-500">
      <h1 className="sm:text-5xl text-zinc-100 text-3xl font-display ">Paradoxo de Monty Hall</h1>
      <p className="mt-9 text-zinc-100 text-lg font-mono max-w-xl" >Como jogar:
          Atrás de uma das portas tem um prêmio e das outras duas nada. O jogador escolhe uma porta,em seguida clica em continuar e o jogo revela uma outra porta vazia, depois disso o jogador decide se troca ou se permanece com a porta escolhida.

      </p>

      <button className=" p-3 mt-9 border-2 text-zinc-100 font-bold hover:bg-green-500 bg-zinc-500 leading-1 "
      onClick={openDoor}
      >Continuar</button>
      
      {(open && choosen)?(
      <span
        className="sm:mt-5 text-zinc-100 font-bold sm:text-2xl mt-4"
      
      >A porta de número {open} não possui prêmio, você deseja trocar sua porta ? (clique na maçaneta para abrir)</span>):<span className="mt-2 text-yellow-200 text-2xl">{erro}</span>}


      <div className="flex gap-2 sm:mt-10 mt-8">

      <Door number={1} havePresent={1 === sort? true:false} selected={choosen ===1? true: false} controlarSelected={controlarSelected} openTheDoor={(open===1 && choosen)?true:false}/> 

      <Door number={2} havePresent={2 === sort? true:false} selected={choosen === 2? true: false} controlarSelected={controlarSelected} openTheDoor={(open===2 && choosen)? true:false}/>

      <Door number={3} havePresent={3 === sort? true:false} selected={choosen ===3? true: false} controlarSelected={controlarSelected} openTheDoor={(open===3 && choosen) ? true:false}/> 
      

      
       


      </div>

    </div>
  )
}

export default App
