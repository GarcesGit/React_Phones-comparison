import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import cl from "./DropDown.module.css";
import image_arrows from "../../images/arrows.png";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { observer } from "mobx-react-lite";
import PhonesStore from "../../store/phonesStore";
import { useDebounce } from "../../hooks/useDebounce";
import { PhoneType } from "../../types/stores/phonesStoreTypes";

//input испр на поиск по строчным буквам
//

interface DropDownProps {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}

function DropDown({ visible, setVisible }: DropDownProps) {
    const { phonesForChanging } = PhonesStore;
    const [searchInputValue, setSearchInputValue] = useState("");
    const [filteredPhonesForChanging, setFilteredPhonesForChanging] =
        useState<PhoneType[]>(phonesForChanging);

    const debouncedSearchInputValue = useDebounce(searchInputValue);

    const dropDownRef = useRef(null);
    useOutsideClick(dropDownRef, () => setVisible(false));

    useEffect(() => {
        if (!debouncedSearchInputValue.length) {
            setFilteredPhonesForChanging(phonesForChanging);
            return;
        }

        const filteredPhones = phonesForChanging.filter((phone) =>
            phone.name.includes(debouncedSearchInputValue)
        );
        setFilteredPhonesForChanging(filteredPhones);
    }, [debouncedSearchInputValue, phonesForChanging]);

    const rootClasses = [cl.myDropDown];
    if (visible) {
        rootClasses.push(cl.active);
    }
    const onChangeSearchInputValue = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchInputValue(event.target.value); //управляемый инпут state+эта фун
    };

    return (
        <div className="phones_data" ref={dropDownRef}>
            <div className={rootClasses.join(" ")}>
                <div className={cl.myDropDownContentAndInput}>
                    <input
                        value={searchInputValue}
                        className={cl.myDropDownInput}
                        // {/* /////////////////// */}
                        // key={phone.id}
                        type="text"
                        placeholder="Поиск"
                        onChange={onChangeSearchInputValue}
                        // onBlur={() => {handler}} = input value = ''
                    />
                    <div className={cl.myDropDownContent}>
                        {/* вынести в отдельную комп*/}
                        {filteredPhonesForChanging.map((phone) => {
                            return (
                                <div
                                    className={cl.myDropDownItems}
                                    key={phone.id}
                                >
                                    <button
                                        className={cl.myDropDownButton}
                                        onClick={() => {}}
                                    >
                                        <img
                                            src={image_arrows}
                                            alt=""
                                            className="image_arrows"
                                        ></img>
                                    </button>
                                    <img
                                        src={require(`../../images/${phone.imageName}.png`)}
                                        alt={phone.imageName}
                                        className="phone_img_small"
                                    ></img>
                                    <div>{phone.name}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default observer(DropDown);
