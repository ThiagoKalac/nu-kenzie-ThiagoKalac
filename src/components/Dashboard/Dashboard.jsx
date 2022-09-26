// style
import "./Dashboard.css";
// components
import Header from "./Header/Header";
import Form from "./Form/Form";
import TotalMoney from "./TotalMoney/TotalMoney";
import List from "./List/List";

function Dashboard({ setIsLoggedIn, listTransictions, setListTransictions}) {
  
 
  return (
    <div className="containerDashboard">
    
      <Header setIsLoggedIn={setIsLoggedIn} />
      <main className="main container">
        <section className="containerForm">
          <Form listTransictions={listTransictions} setListTransictions={setListTransictions} />
          {
           listTransictions.length ? <TotalMoney listTransictions={listTransictions}/>:false 
          }
          
        </section>
        <section className="containerList">
          <List listTransictions={listTransictions} setListTransictions={setListTransictions} />
        </section>
      </main>
   </div>
  )
}

export default Dashboard;
