import { useState } from "react";
import "./Form.css";

function Form({listTransictions,setListTransictions}) {

  const [inputValue, setInputValue] = useState('')
  const [inputDescription, setinputDescription] = useState('')
  const [typeOfValue, setTypeOfValue] = useState('null')

 
  return (
    <form onSubmit={(event)=> event.preventDefault()}  className="container form flex f-column gap-2">
      <section className="section__description flex f-column">
        <label htmlFor="description">Descrição</label>
        <input className="input-df" type="text" name="description"  id="description" placeholder=" Digite aqui sua descrição" value={inputDescription} onChange={(event)=> setinputDescription(event.target.value)}/>
        <span>Ex: Compras de roupas</span>
      </section>

      <section className="flex f-justify-between f-align-center gap-1">

        <div className="div__value flex f-column">
          <label htmlFor="value">Valor</label>
          <input className="input-df" type="number" name="value" id="value" placeholder="1" value={inputValue} onChange={(event)=> setInputValue(event.target.value)}/>
        </div>

        <div className="div_typeOfValue flex f-column">
          <label htmlFor="typeOfValue">Tipo de Valor</label>
          <select className="input-df" id="typeOfValue" value={typeOfValue} onChange={(event)=> setTypeOfValue(event.target.value)}>
            <option value="null">Tipo de Valor</option>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>
      </section>


      <button className="btn btn__main" type="submit" onClick={() => {
        setListTransictions([...listTransictions, {
          description: inputDescription,
          value: typeOfValue == 'Entrada' ? inputValue: -inputValue,
          type: typeOfValue
        }])
        setInputValue('')
        setinputDescription('')
      }}>Inserir Valor</button>
    </form>

  );
}

export default Form;
