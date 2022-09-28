import { useState } from "react";
import Card from "./Card/Card.jsx"
import Nocard from "../../../assets/NoCard.svg"
import GroupNoCard from "../../../assets/GroupNoCard.svg"

import "./List.css";

function List({ listTransictions, setListTransictions }) {

  const [filterList, setFilter] = useState('Todos')

  const newList = listTransictions.filter(elt => {
     return filterList === 'Todos'? true : elt.type === filterList
  })
 
  console.log(listTransictions)
  


  return (
    <div className="teste">
      <div className="container navList flex f-column gap-2">
        <p>Resumo financeiro</p>

        <nav className="flex f-justify-center gap-2">
          <button className="btn btn__main" type="button" onClick={()=>setFilter('Todos')}>
            Todos
          </button>

          <button className="btn btn__df" type="button" onClick={()=>setFilter('Entrada')}>
            Entradas
          </button>

          <button className="btn btn__df" type="button" onClick={()=>setFilter('Saída')}>
            Despesas
          </button>
        </nav>
      </div>
      <div className="listCard">

        {
          
          (listTransictions.length === 0) ? 
            <>
              <p>Você ainda não possui nenhum lançamento</p>
              <img className="illustration--desktop"src={GroupNoCard} alt='ilustração'/>
              <img className="illustration--mobile" src={Nocard} alt='ilustração'/>
              <img className="illustration--mobile" src={Nocard} alt='ilustração'/>
            </>
            : 
            <ul className="ulListCard flex">
              
              <Card listTransictions={listTransictions} setListTransictions={setListTransictions} newList={newList} />
            </ul>     
        }
      </div>
    </div>
  )
}

export default List;
