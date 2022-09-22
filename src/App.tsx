import { useEffect, useState } from "react"
import Door from "./components/Door"

function App() {
  const [choosen,setChoosen]= useState(0)
  const [sort,setSort] = useState(0)
  const [open,setOpen] = useState(0)
  const [qtd,setQtd]= useState([1,2,3])
 
 


  useEffect(()=>{
        
       setSort(Math.floor(Math.random()*3 +1))
  },[])

  function openDoor(){
    const array =[1,2,3]
    const novoArray = array.filter(numero => numero != sort && numero != choosen)
  
    setOpen(novoArray[0])
    
  }
  

  function controlarSelected(n:number){
    setChoosen(n)
  }

  return (
    <div className="m-auto flex  flex-col items-center sm:h-screen sm:w-full p-9 min-h-screen  bg-gradient-to-l from-cyan-500 to-sky-500">
      <h1 className="text-5xl text-zinc-100 font-display ">Paradoxo de Monty Hall</h1>
      <p className="mt-9 text-zinc-100 text-lg font-mono max-w-xl" >Como jogar:
          Atrás de uma das portas tem um prêmio e das outras duas nada. O jogador escolhe uma porta,em seguida clica em continuar e o jogo revela uma outra porta vazia, depois disso o jogador decide se troca ou se permanece com a porta escolhida.

      </p>

      <button className=" p-3 mt-9 border-2 text-zinc-100 font-bold hover:bg-green-500 bg-zinc-500 leading-1 "
      onClick={openDoor}
      >Continuar</button>
      
      {open?(
      <span
        className="mt-5 text-zinc-100 font-bold text-2xl"
      
      >Abra a porta de número {open} (clique na maçaneta)</span>):null}


      <div className="flex gap-2 mt-10">

      <Door number={1} havePresent={1 === sort? true:false} selected={choosen ===1? true: false} controlarSelected={controlarSelected}/> 

      <Door number={2} havePresent={2 === sort? true:false} selected={choosen === 2? true: false} controlarSelected={controlarSelected} />

      <Door number={3} havePresent={3 === sort? true:false} selected={choosen ===3? true: false} controlarSelected={controlarSelected}/> 
      

      
       


      </div>

    </div>
  )
}

export default App
