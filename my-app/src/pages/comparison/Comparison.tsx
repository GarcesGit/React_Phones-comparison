import React from 'react';
import './ComparisonStyles.css';
import image_arrows from '../../images/arrows.png';
import { observer } from 'mobx-react-lite';
import CharacteristicsTitles from '../../components/rendering/CharacteristicsTitles';
import Pictures from '../../components/rendering/Pictures';
import Data from '../../components/rendering/Data';
import PhonesStore from '../../store/phonesStore';

const Comparison = observer(() => {

	const { phones } = PhonesStore;

	return (
		<div className="wrapper">
			<section className="phones_head">
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
					<Pictures phones={phones} />
				</div>
			</section>
			<section className="phones_characteristics">
				<CharacteristicsTitles />
				<Data phones={phones} />
			</section>
		</div>
	);
})

export default Comparison;
