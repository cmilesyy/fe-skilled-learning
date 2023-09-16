import logoDark from '../assets/images/logo-dark.svg'

function Header() {
    return (
        <>  
            <header>
                <div className="flex justify-between px-4 pt-4 md:px-8">
                <img src={logoDark} alt="Skilled Icon"/>
                <button className="text-white bg-dark-blue rounded-full px-5 py-2 hover:bg-violet">Get Started</button>
                </div>
            </header>
        </>
    )
}

export default Header
