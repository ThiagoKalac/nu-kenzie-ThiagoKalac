// style
import "./Dashboard.css";
// components
import Header from "./Header/Header";
import Form from "./Form/Form";
import TotalMoney from "./TotalMoney/TotalMoney";
import List from "./List/List";

function Dashboard({ setIsLoggedIn }) {
  return (
    <div className="containerDashboard">
    
      <Header setIsLoggedIn={setIsLoggedIn} />
      <main className="main container">
        <section className="containerForm">
          <Form />
          <TotalMoney />
        </section>
        <section className="containerList">
        <List />
        </section>
      </main>
   </div>
  );
}

export default Dashboard;
