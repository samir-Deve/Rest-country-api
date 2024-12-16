import { useContext } from "react";
import "../styles/personelInfo.css";
import { DataContext } from "./App";


function Creator() {
	const {bgColor} = useContext(DataContext);

	return (
		<div className={`creator-container ${bgColor}`}>
			<p>Design by Frontend Mentor and Coded By </p>
			<a href="">Samiullah Yoro'gli</a>
		</div>
	);
}

export default Creator;