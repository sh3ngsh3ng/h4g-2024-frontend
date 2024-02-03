import './Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <img
                    src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1619464538~hmac=5e4f4e6a9b0d3c9b3d3f7f9e4b2f0e5d"
                    alt="logo"
                />
                <h2>Opportunities</h2>
            </div>
            <div className="navbar__right">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#login">Login</a>
            </div>
        </div>
    )
}