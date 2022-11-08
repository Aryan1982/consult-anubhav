import {useState} from 'react';
import './navbar.css'
import hamicon from '../assets/hamburgericon.png'
const Navbar=()=>{
	const [show,setShow] = useState(false)

	return(
		<div>
			<div className="navbar">
			<h1 className="company_title">Consult Anubhav</h1>
				<nav>
				
					<ul className="navLinks">
								<li><a href="#" className="links">Services</a></li>
			                   <li><a href="#" className="links">Blog</a></li>
			                   <li><a href="#" className="links">About</a></li>
								<button className='contactbtn'>Contact</button>
								<button className="hamiconbtn" onClick={()=>setShow(!show)} style={{background:"transparent", border:"none"}}><img className="hamicon" src={hamicon}/></button>
					</ul>
				
				</nav>
				
			</div>
			{
				show?<div className="mobnav">
				<ul>

		                   <li><a href="#" className="links">Services</a></li>
		                   <li><a href="#" className="links">Blogs</a></li>
		                   <li><a href="#" className="links">About</a></li>
		                   
		        </ul>
			</div>:null
			}
			

			</div>
		);

}

export default Navbar;