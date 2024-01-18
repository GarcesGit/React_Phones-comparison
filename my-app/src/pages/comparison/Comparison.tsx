import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import './СomparisonStyles.css';
import image_yes from '../../images/yes.png';
import image_no from '../../images/no.png';
import image_tick from '../../images/tick.png';
import image_arrows from '../../images/arrows.png';
import { observer } from 'mobx-react-lite';
import PhonesStore from '../../store/phonesStore'; 

const Сomparison = observer(() => {

	const {phones} = PhonesStore;

	const renderPictures = phones.map((phone) => {

		return <div className="phones_names" key={phone.id} >
			<img src={require(`../../images/${phone.imageName}.png`)} alt={phone.imageName} className="phone_img_large"></img>
			<img src={image_tick} alt="" className="chevron_small"></img>
			<div className="cell">{phone.name}</div>
		</div>
	});

	const renderData = phones.map((phone) => {
		return <div className="phones_data" key={phone.id} >
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
	});

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
					{renderPictures}
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
				{renderData}
			</div>
		</div>
	);
})

export default Сomparison;
