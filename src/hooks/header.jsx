import { useContext } from 'react';
import { DataContext } from './App';
import '../styles/header.css';

function Header() {

	const {bgColor,handleBgColor} = useContext(DataContext)
	return (
		<div className={`H-container ${bgColor}`}>
			<h2 className="H-text">
				Where in the world
			</h2>

			<button 
				onClick={handleBgColor}
			className="Bg-color-btn">
				<i className="fas fa-moon"></i>  
				<p className='H-btn-text'>{bgColor === "Dark"? "Light": "Dark"} Mode</p>
			</button>
		</div>
	);
}

export default Header;