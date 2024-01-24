import React from 'react';
import image_tick from '../../images/tick.png';
import PhonesStore from '../../store/phonesStore';

const Pictures = () => {

	const { phones } = PhonesStore;

	const renderPictures = phones.map((phone) => {
		return <div className="phones_names" key={phone.id} >
			<img src={require(`../../images/${phone.imageName}.png`)} alt={phone.imageName} className="phone_img_large"></img>
			<img src={image_tick} alt="" className="chevron_small"></img>
			<div className="cell">{phone.name}</div>
		</div>
	});

//сделать компоненту на одну картинку вместо Pictures / все тел отобразить / пропсы типизировать

	return renderPictures;
}

export default Pictures
