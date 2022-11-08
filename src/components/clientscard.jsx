import './clientscard.css'
import img1 from '../assets/clients/amd.svg'
import img2 from '../assets/clients/img2.svg'
import img3 from '../assets/clients/img3.svg'
import img4 from '../assets/clients/img4.svg'
import img5 from '../assets/clients/img5.svg'
import img6 from '../assets/clients/img6.svg'
import img7 from '../assets/clients/img7.svg'
import img8 from '../assets/clients/img8.svg'
import img9 from '../assets/clients/img9.svg'
import img10 from '../assets/clients/img10.svg'
import img11 from '../assets/clients/img11.svg'
import img12 from '../assets/clients/img12.svg'
import img13 from '../assets/clients/img13.svg'
import img14 from '../assets/clients/img14.svg'
import img15 from '../assets/clients/img15.svg'

const ClientsCard=()=>{
	return(
		<div>
			<div className="clients_all">
				<div className="clientImg">
					<img src={img1}/>
				</div>
				<div className="clientImg">
					<img src={img2}/>
				</div>
				<div className="clientImg">
					<img  src={img3}/>
				</div>
				<div className="clientImg">
					<img  src={img4}/>
				</div>
				<div className="clientImg">
					<img src={img5}/>
				</div>
				<div className="clientImg">
					<img  src={img6}/>
				</div>
				<div className="clientImg">
					<img src={img7}/>
				</div>
				<div className="clientImg">
					<img src={img8}/>
				</div>
				<div className="clientImg">
					<img   src={img9}/>
				</div>
				<div className="clientImg">
					<img src={img10}/>
				</div>
				<div className="clientImg">
					<img  src={img11}/>
				</div>
				<div className="clientImg">
					<img src={img12}/>
				</div>
				<div className="clientImg">
					<img src={img13}/>
				</div>
				<div className="clientImg">
					<img src={img14}/>
				</div>
				<div className="clientImg">
					<img src={img15}/>
				</div>
			</div>
		</div>
		);
}

export default ClientsCard;