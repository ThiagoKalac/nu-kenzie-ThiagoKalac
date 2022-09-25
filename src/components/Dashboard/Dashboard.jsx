// style
import './Dashboard.css'
// components
import Header from "./Header/Header"
import Form from './Form/Form'
import TotalMoney from './TotalMoney/TotalMoney'

function Dashboard({setIsLoggedIn}) {
  return (
    <div className='containerDashboard'>
          <Header setIsLoggedIn={setIsLoggedIn} />
          <Form />
          <TotalMoney/>
    </div>
  );
}

export default Dashboard;
