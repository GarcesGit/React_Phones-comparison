import "./pictureStyles.css";
import { useState } from "react";
import { PhoneType } from "../../../../types/stores/phonesStoreTypes";
import DropDown from "../../../dropDown/DropDown";
import image_tick from "../../../../images/tick.png";
import { observer } from "mobx-react-lite";
import { calculateColumnWidth } from "../../../utils/calculateColumnWidth";
import PhonesStore from "../../../../store/phonesStore";

interface PictureProps {
    phone: PhoneType;
}

const Picture = ({ phone }: PictureProps) => {
    const { showedPhonesNumber } = PhonesStore;
    const [dropDown, setDropDown] = useState(false);

    return (
        <div className="phones_pictures" style={{ width: calculateColumnWidth(showedPhonesNumber) }}>
            <div className="phone_image">
                <img
                    src={require(`../../../../images/${phone.imageName}.png`)}
                    alt={phone.imageName}
                    className="phone_img_large"
                ></img>
                <button className="button_tick" onClick={() => setDropDown(true)}>
                    <img src={image_tick} alt="" className="chevron_small"></img>
                </button>
                <DropDown visible={dropDown} setVisible={setDropDown} phoneID={phone.id} />
            </div>
            <div className="phone_name">{phone.name}</div>
        </div>
    );
};

export default observer(Picture);
