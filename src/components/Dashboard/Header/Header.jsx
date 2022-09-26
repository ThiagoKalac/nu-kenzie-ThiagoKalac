import './Header.css'

function Header({ setIsLoggedIn }) {
    
    function logout() {
        setIsLoggedIn(false)
    }

    return (
        <header>
            <nav className='container flex f-justify-between f-align-center'>
                <h1 className='title_dash'><span>Nu</span> Kenzie</h1>
                <button className='btn btn__df' type='button' onClick={logout}>Inicio</button>
            </nav>
        </header>
    )
}


export default Header