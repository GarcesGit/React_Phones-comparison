import { Dispatch, SetStateAction, useRef } from 'react';
import cl from './DropDown.module.css';
import image_arrows from '../../images/arrows.png';
import { PhoneType } from '../../types/stores/phonesStoreTypes';
import { useOutsideClick } from '../../hooks/useOutsideClick'

interface DropDownProps {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    phone: PhoneType;
}

function DropDown({ visible, setVisible, phone }: DropDownProps) {

    const dropDownRef = useRef(null);
    useOutsideClick(dropDownRef, () => setVisible(false))

    const rootClasses = [cl.myDropDown]
    if (visible) {
        rootClasses.push(cl.active);
    }
//  state PhonesForChanging в сторе = все тел и filter != showedPhones / 1 при инициализиции 2 при замене 
// 2 массива/ вызываем в конструкторе и после замены цифры/ setter в сторе/ см Counter


    return (
                <div className="phones_data" ref={dropDownRef}>
                    <div className={rootClasses.join(' ')}>
                        <div className={cl.myDropDownContent}>
                            <input placeholder='Поиск' />
                            <div className={cl.myDropDownItems}>
                                <img src={image_arrows} alt="" className="image_arrows"></img>
                                <img src={require(`../../images/${phone.imageName}.png`)} alt={phone.imageName} className="phone_img_small"></img>
                                <div>{phone.name}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
}

export default DropDown;
