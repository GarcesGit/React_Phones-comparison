import React from 'react';
import './ComparisonStyles.css';
import { observer } from 'mobx-react-lite';
import CharacteristicsTitles from '../../components/rendering/CharacteristicsTitles';
import Pictures from '../../components/pictures/Pictures';
// import Data from '../../components/rendering/Data';
import PhonesStore from '../../store/phonesStore';

const Comparison = observer(() => {

	const { showedPhones } = PhonesStore;

	return (
		<div className="wrapper">
			<section className="phones_head">
				<div className="phones_smartphones">
					<div className="phones_title">
						Смартфоны
					</div>
					<div className="phones_pagination">
						{/* Отобразить товары: {кнопки }

2 3 4 5 6кнопки, здесь массив или в отдел компоненет Counter = observer(() => { 
в нем массив с числами , return <> мапим и рендерим в кнопки</>
обратиться к стору за setPhonesStoreNumber 
в PhonesStore handler для onClick на кнопки , стор value передается значение массива */}


					</div>
				</div>
				<div className="phones_models">
					<div className="phones_differences">
						<input type="checkbox" name="checkbox_differences" />
						<label htmlFor="checkbox_differences"> Показать различия</label>
					</div>
					<Pictures phones={showedPhones} />
				</div>
			</section>
			<section className="phones_characteristics">
				<CharacteristicsTitles />
				{/* <Data phones={phones} /> */}
			</section>
		</div>
	);
})

export default Comparison;
