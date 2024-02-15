import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import cl from "./DropDown.module.css";
import image_arrows from "../../images/arrows.png";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { observer } from "mobx-react-lite";
import PhonesStore from "../../store/phonesStore";
import { useDebounce } from "../../hooks/useDebounce";
import { PhoneType } from "../../types/stores/phonesStoreTypes";
import { toJS } from "mobx";

interface DropDownProps {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
}

function DropDown({ visible, setVisible }: DropDownProps) {
    const { showedPhones, phonesForChanging } = PhonesStore;
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

    // const replacePhones = () => {

    //         let replaced = showedPhones.map(item => item );
    //         console.log(toJS(replaced));
    // };

    return (
        <div className="" ref={dropDownRef}>
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
                        onBlur={() => setSearchInputValue("")}
                    />
                    <div className={cl.myDropDownContent}>
                        {/* /////////////////// вынести в отдельную комп*/}
                        {filteredPhonesForChanging.map((phone) => {
                            return (
                                <div className={cl.myDropDownItems} key={phone.id}>
                                    <button
                                        className={cl.myDropDownButton}
                                        // {/* /////////////////// */}
                                        // onClick={replacePhones}
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
