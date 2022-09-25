// style
import './Dashboard.css'
// components
import Header from "./Header/Header";

function Dashboard({setIsLoggedIn}) {
  return (
    <div className='containerDashboard'>
      <Header setIsLoggedIn={setIsLoggedIn}/>
    </div>
  );
}

export default Dashboard;
