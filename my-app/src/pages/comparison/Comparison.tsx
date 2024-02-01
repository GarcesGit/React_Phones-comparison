import './ComparisonStyles.css';
import { observer } from 'mobx-react-lite';
import CharacteristicsTitles from '../../components/rendering/CharacteristicsTitles';
import Pictures from '../../components/pictures/Pictures';
// import Data from '../../components/rendering/Data';
import PhonesStore from '../../store/phonesStore';
import Counter from '../../components/rendering/Counter';

const Comparison = observer(() => {

	const { showedPhones } = PhonesStore;

	return (
		<div className="wrapper">
			<section className="phones_head">
				<div className="phones_smartphones">
					<div className="phones_title">
						Смартфоны
					</div>
					<Counter />
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
