import './navbar.css'

const Navbar=()=>{
	return(
			<div className="navbar">
			<h1 className="company_title">Consult Anubhav</h1>
				<nav>
					<ul className="navLinks">
								<li><a href="#" className="links">Services</a></li>
			                   <li><a href="#" className="links">Blog</a></li>
			                   <li><a href="#" className="links">About</a></li>
								<button className='contactbtn'>Contact</button>
					</ul>
					
				</nav>
				
			</div>
		);

}

export default Navbar;