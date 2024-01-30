import React from 'react';
import image_tick from '../../images/tick.png';
import image_arrows from '../../images/arrows.png';
import { PhoneType } from '../../types/stores/phonesStoreTypes';
import Picture from './components/picture/Picture';

interface PicturesProps {
	phones: PhoneType[];
}

const Pictures = ({ phones }: PicturesProps) => {
	return (<>
		{phones.map((phone) => <Picture phone={phone} />) }
	</>
	)
}

export default Pictures
