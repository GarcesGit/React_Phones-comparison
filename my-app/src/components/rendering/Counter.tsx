import PhonesStore from "../../store/phonesStore";
import { observer } from "mobx-react-lite";
import "./counterStyles.css";

const Counter = () => {
    const { showedPhonesNumber, changeShowedPhones } = PhonesStore;
    const itemsNumber: number[] = [2, 3, 4, 5, 6];

    return (
        <div className="display_products">
            Отобразить товары:
            {itemsNumber.map((num, index) => (
                <button
                    className={`nums ${showedPhonesNumber === num ? "current_num" : ""}`}
                    key={index}
                    onClick={() => {
                        changeShowedPhones(num);
                    }}
                >
                    {num}
                </button>
            ))}
        </div>
    );
};

export default observer(Counter);
