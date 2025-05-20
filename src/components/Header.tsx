import logo from '../assets/chef-claude-icon.png'

export default function Header() {
    return <header>
        <div className="header">
            <img src={logo} alt='logo' />
            <h1>Chef Claude</h1>
        </div>
    </header>
}