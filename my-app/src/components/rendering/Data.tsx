import React from 'react';
import image_tick from '../../images/tick.png';
import image_yes from '../../images/yes.png';
import image_no from '../../images/no.png';
import PhonesStore from '../../store/phonesStore';

const Data = ({}) => {

    const { phones } = PhonesStore;
	
	const renderData = phones.map((phone) => {
		return (
			<div className="phones_data" key={phone.id} >
				<div className="cell">{phone.manufacturer}</div>
				<div className="cell">{phone.year}</div>
				<div className="cell">{phone.diagonal}</div>
				<div className="cell">{phone.country}</div>
				<div className="cell">{phone.memory}</div>
				<div className="cell">{phone.frequency}</div>
				<div className="cell">
					<img src={phone.nfc ? image_yes : image_no} alt=""></img>
				</div>
				<div className="cell">
					<img src={phone.eSIM ? image_yes : image_no} alt=""></img>
				</div>
				<div className="cell">
					<img src={phone.charging ? image_yes : image_no} alt=""></img>
				</div>
				<div className="cell">{phone.price}</div>
			</div>
		)
	});

		return renderData;
}

export default Data
