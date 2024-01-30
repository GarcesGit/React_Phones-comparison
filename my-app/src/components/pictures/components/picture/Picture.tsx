import React, { useState } from 'react';
import image_tick from '../../../../images/tick.png';
// import image_arrows from '../../../../images/arrows.png';
import { PhoneType } from '../../../../types/stores/phonesStoreTypes';
import DropDown from '../../../../components/dropDown/DropDown';


interface PictureProps {
    phone: PhoneType;
}

const Picture = ({ phone }: PictureProps) => {

    const [dropDown, setDropDown] = useState(false);

    return (
        <div className="phones_names" key={phone.id} >
            <div className="phones_models">
                <img src={require(`../../../../images/${phone.imageName}.png`)} alt={phone.imageName} className="phone_img_large"></img>
                <button className="button_tick" onClick={() => setDropDown(true)}>
                    <img src={image_tick} alt="" className="chevron_small"></img>
                </button>
                <DropDown visible={dropDown} setVisible={setDropDown} phone={phone} />
            </div>
            <div className="cell">{phone.name}</div>
        </div>
    )
}

export default Picture
