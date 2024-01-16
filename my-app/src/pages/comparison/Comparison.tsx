import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import './СomparisonStyles.css';
import phones from '../../API/phones.json'
import Apple_iPhone_12 from '../../images/Apple_iPhone_12.png';
import Apple_iPhone_Xr from '../../images/Apple_iPhone_Xr.png';
import Google_Pixel_7A from '../../images/Google_Pixel_7A.png';
import Realme_8_Pro from '../../images/Realme_8_Pro.png';
import Samsung_Galaxy_A72 from '../../images/Samsung_Galaxy_A72.png';
import Samsung_Galaxy_S21 from '../../images/Samsung_Galaxy_S21.png';

import image_yes from '../../images/yes.png';
import image_no from '../../images/no.png';
import image_tick from '../../images/tick.png';
import image_arrows from '../../images/arrows.png';


//только any могу поставить
const phonesList = phones.map(phone => ({ ...phone, id: uuid() }));
console.log(phonesList);


function Сomparison() {

	const [phonesCharacteristics, setPhonesCharacteristics] = useState(phonesList);


	return (
		<div className="wrapper">

			<div className="phones_main">
				<div className="phones_smartphones">
					<div className="phones_title">
						Смартфоны
					</div>
					<div className="phones_pagination">
						Отобразить товары: 2 3 4 5 6
					</div>
				</div>

				<div className="phones_models">

					<div className="phones_differences">
							<input type="checkbox" name="checkbox_differences" />
							<label htmlFor="checkbox_differences"> Показать различия</label>
					</div>

					<div className="phones_images">
						{/* только any могу поставить */}
						{phonesCharacteristics.map((phone) => (
							<div className="phones_names" key={phone.id} >
								<img src={phone.imageName} alt="" className="phone_img"></img>
								<img src={image_tick} alt="" className="chevron_small"></img>
								<div className="cell">{phone.name}</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="phones_characteristics">
				<div className="phones_characteristics_titles">
					<div className="characteristic_title">Производитель</div>
					<div className="characteristic_title">год релиза</div>
					<div className="characteristic_title">Диагональ экрана (дюйм)</div>
					<div className="characteristic_title">Страна-производитель</div>
					<div className="characteristic_title">Объем памяти</div>
					<div className="characteristic_title">Частота обновления экрана</div>
					<div className="characteristic_title">NFC</div>
					<div className="characteristic_title">Поддержка eSIM</div>
					<div className="characteristic_title">Поддержка беспроводной зарядки</div>
					<div className="characteristic_title">Стоимость</div>
				</div>
				{phonesCharacteristics.map((phone) => (
					<div className="phones_data" key={phone.id} >
						<div className="cell">{phone.manufacturer}</div>
						<div className="cell">{phone.year}</div>
						<div className="cell">{phone.diagonal}</div>
						<div className="cell">{phone.country}</div>
						<div className="cell">{phone.memory}</div>
						<div className="cell">{phone.frequency}</div>
						<div className="cell">{phone.nfc}</div>
						<div className="cell">{phone.eSIM}</div>
						<div className="cell">{phone.charging}</div>
						<div className="cell">{phone.price}</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Сomparison;
