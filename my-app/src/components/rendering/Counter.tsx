import PhonesStore from "../../store/phonesStore";
import { observer } from "mobx-react-lite";

const Counter = () => {
    const { showedPhonesNumber, changeShowedPhones } = PhonesStore;
    const itemsNumber: number[] = [2, 3, 4, 5, 6];

    return (
        <div className="display_products">
            Отобразить товары:
            {itemsNumber.map((num, index) => (
                <button
                    className={`num ${
                        showedPhonesNumber === num ? "current" : ""
                    }`}
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
