import link from '../assets/link.svg'
import './feedbackform.css'
const FeedbackForm=()=>{
	return(
			<div>
				<div className='feedbackcard'>
					<div className='griditem1'>
						<div><div>
						<h1>First Name</h1>
						<input className='smalltextbox' placeholder="First Name" type='text'/>
						</div>
						<div>
						<h1>Last Name</h1>
						<input className='smalltextbox' placeholder="Last Name" type='text'/>
						</div></div>
						<div>
						<div>
						<h1>Email ID</h1>
						<input className='smalltextbox' placeholder="Email ID" type='text'/>
						</div>
						<div>
						<h1>Contact Number</h1>
						<input style={{webkitappearance: "none"}}className='smalltextbox' placeholder="Contact Number" type='number'/>
						</div></div>
					</div>

					<div className='griditem2'>
						<div>
						<h1>About Project</h1>
						<input className='bigtextbox' placeholder="About Project" type='text'/>
						</div>
	
						<div>
							<h1>Attachment</h1>
							<div className='Attachment'>
							<input className='midtextbox' placeholder="Link" type='text'/>				
							<button className='link'><img src={link}/></button>
							</div>
						</div>
						
						<button className='getfreeQuote'>Get Free Quote</button>
						
					</div>
				</div>
			</div>
		);
}

export default FeedbackForm;