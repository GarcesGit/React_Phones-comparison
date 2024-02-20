import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import cl from "./DropDown.module.css";
import image_arrows from "../../images/arrows.png";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { observer } from "mobx-react-lite";
import { useDebounce } from "../../hooks/useDebounce";
import { PhoneType } from "../../types/stores/phonesStoreTypes";
import PhonesStore from "../../store/phonesStore";

interface DropDownProps {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
    phoneID: number;
}

function DropDown({ visible, setVisible, phoneID }: DropDownProps) {
    const { phonesForChanging, replacePhones } = PhonesStore;
    const [searchInputValue, setSearchInputValue] = useState("");
    const [filteredPhonesForChanging, setFilteredPhonesForChanging] = useState<PhoneType[]>(phonesForChanging);
    const debouncedSearchInputValue = useDebounce(searchInputValue);

    const dropDownRef = useRef(null);
    useOutsideClick(dropDownRef, () => setVisible(false));

    useEffect(() => {
        if (!debouncedSearchInputValue.length) {
            setFilteredPhonesForChanging(phonesForChanging);
            return;
        }

        const filteredPhones = phonesForChanging.filter((phone) =>
            phone.name.toLowerCase().includes(debouncedSearchInputValue.toLowerCase())
        );
        setFilteredPhonesForChanging(filteredPhones);
    }, [debouncedSearchInputValue, phonesForChanging]);

    const rootClasses = [cl.myDropDown];
    if (visible) {
        rootClasses.push(cl.active);
    }

    const onChangeSearchInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInputValue(event.target.value);
    };

    const handleReplacePhone = (replacingID: number, replacedID: number) => {
        replacePhones(replacingID, replacedID);
        setVisible(false);
    };

    return (
        <div className="" ref={dropDownRef}>
            <div className={rootClasses.join(" ")}>
                <div className={cl.myDropDownContentAndInput}>
                    <input
                        value={searchInputValue}
                        className={cl.myDropDownInput}
                        type="text"
                        placeholder="Поиск"
                        onChange={onChangeSearchInputValue}
                        onBlur={() => setSearchInputValue("")}
                    />
                    <div className={cl.myDropDownContent}>
                        {/* /////////////////// вынести в отдельную комп/ подумать над нейминг пропсов phone, phoneID/ туда handler и setVisible*/}
                        {filteredPhonesForChanging.map((phone) => {
                            return (
                                <div className={cl.myDropDownItems} key={phone.id}>
                                    <button
                                        className={cl.myDropDownButton}
                                        onClick={() => handleReplacePhone(phone.id, phoneID)}
                                    >
                                        <img src={image_arrows} alt="" className={cl.image_arrows}></img>
                                    </button>
                                    <img
                                        src={require(`../../images/${phone.imageName}.png`)}
                                        alt={phone.imageName}
                                        className={cl.phone_img_small}
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
