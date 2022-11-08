import "./body.css"
import ClientsCard from './clientscard'
import heroimg from '../assets/heroimg.svg'
import chenghan from '../assets/cheng.svg'
import FeedbackForm from './feedbackform'
const Body=()=>{
	return(
		<div>
			<div className="title_card">
				<h1 className='title1'>Get your business challenges solved</h1>
				<h2 className='subtitle'>We provide solutions through our consulting, marketing and web development skills for long-term profitability.</h2>
				<button className='getintouchBtn'>Get In Touch</button>
				<img className="heroimg" alt='heroimg' src={heroimg}/>
			</div>

			
			<div className='clients_card'>
				<h1 className='client_title'>Our Clients</h1>
				<ClientsCard />
			</div>

			<div className="features_card">
				<h1 className='features_title'>We Help Businesses In</h1>
				<div className='features'>
					<div className='feature'>
						<h1>Launching a new product</h1>
						<h2>We have assisted several entrepreneurs from around the world in launching their first products.</h2>
					</div>
					<div className='feature'>
						<h1>Improving A Product</h1>
						<h2>We are experts at diagnosing products and making actionable changes to meet business objectives!</h2>
					</div>
					<div className='feature'>
						<h1>Consulting</h1>
						<h2>We provide strategy development, large scale implementation, and new technology introduction.</h2>
					</div>
				</div>
			</div>

			<div className='clients_feedback_card'>
				<h1 className='client_title'>Look what our clients say</h1>
				<div className="feedback">
					<img src={chenghan}/>
					<h1>Cheng-Han Lee</h1>
					<h2>Regional Controlling & Planning Process Lead at Hitachi Energy</h2>
					<h3>I had the pleasure and opportunity to work with Anubhav at Upgrad. 
					Anubhav demonstrated the ability to leverage his expertise to quickly 
					ramp up on technical challenging projects and immediately established 
					himself as one of the most technically capable members on the team.
					Also Anubhav was a great team player. He was willing to help other team members whenever they needed help, and he always did so with a smile.
					With this said, I can confidently recommend Anubhav to any company looking 
					o hire a collaborative and technically strong contributor.</h3>

				</div>
			</div>

			<div className='feedback_form'>
				<h1 className='feedback_form_title'>We Would Love To Help!!!</h1>
				<FeedbackForm/>
			</div>


		</div>
		);
}

export default Body;