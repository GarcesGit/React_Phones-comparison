import React, { useState } from 'react'; //useState убрать и ниже лишнее
import PhonesStore from '../../store/phonesStore'; 
import { PhoneType } from "../types/stores/phonesStoreTypes";

function Account() {

	const {phones} = PhonesStore;

	const [allVisible, setAllVisible] = useState<boolean>(true);
    const [renderedWords, setRenderedWords] = useState<PhoneType[]>(phones);




	
	return (
		<div className="wrapper">
			AccountAccountAccount
		</div>
	);
}

export default Account;
