// style
import './Dashboard.css'
// components
import Header from "./Header/Header";
import Form from './Form/Form';

function Dashboard({setIsLoggedIn}) {
  return (
    <div className='containerDashboard'>
          <Header setIsLoggedIn={setIsLoggedIn} />
          <Form/>
    </div>
  );
}

export default Dashboard;
