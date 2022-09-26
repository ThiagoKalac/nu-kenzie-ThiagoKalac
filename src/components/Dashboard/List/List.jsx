import { useState } from "react";
import Card from "./Card/Card.jsx"
import Nocard from "../../../assets/NoCard.svg"
import GroupNoCard from "../../../assets/GroupNoCard.svg"

import "./List.css";

function List({ listTransictions, setListTransictions }) {

  const [filterList, setFilter] = useState([])

  console.log(filterList)

  function filter(filter) {
    
    setFilter(listTransictions.map((elt)=>elt))

    if (filter == 'Todos') {
      return filterList
    } else if (filter == 'Entradas') {
      return setListTransictions(filterList.filter(elt => elt.type !== "Saída"))
    } else {
      return setListTransictions(filterList.filter(elt => elt.type !== "Entrada"))
    }
  }


  return (
    <div className="teste">
      <div className="container navList flex f-column gap-2">
        <p>Resumo financeiro</p>

        <nav className="flex f-justify-center gap-2">
          <button className="btn btn__main" type="button" onClick={()=>filter('Todos')}>
            Todos
          </button>

          <button className="btn btn__df" type="button" onClick={()=>filter('Entradas')}>
            Entradas
          </button>

          <button className="btn btn__df" type="button" onClick={()=>filter('Saídas')}>
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
              
              <Card listTransictions={listTransictions} setListTransictions={setListTransictions}/>
            </ul>     
        }
      </div>
    </div>
  )
}

export default List;
