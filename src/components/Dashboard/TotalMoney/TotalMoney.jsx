import './TotalMoney.css'

function TotalMoney({ listTransictions }) {
    
    

    const totalValue = listTransictions.reduce((acc,cur)=> acc + +cur.value ,0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) 
  
    return (
        <section className='sectionTotalMoney container'>
            <div className="flex f-justify-between f-align-center">
                <h2 className='totalMoney__text'>Valor Total:</h2>
                <p className='totalMoney__text totalMoney__text--value'>{totalValue}</p>
            </div>
            <span className="spanDescriptionTotalMoney">O valor se refere ao saldo</span>
        </section>
    )       
}

export default TotalMoney