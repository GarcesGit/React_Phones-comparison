import { useState } from "react";
import "./comparisonStyles.css";
import { observer } from "mobx-react-lite";
import Pictures from "../../components/pictures/Pictures";
import PhoneTableRows from "../../components/rendering/PhoneTableRows";
import PhonesStore from "../../store/phonesStore";
import Counter from "../../components/rendering/Counter";

const Comparison = observer(() => {
    const { showedPhones, isShownOnlyDifferences, setIsShownOnlyDifferences } = PhonesStore;

    return (
        <div className="wrapper">
            <section className="phones_head">
                <div className="phones_smartphones">
                    <div className="phones_title">Смартфоны</div>
                    <Counter />
                </div>
                <div className="phones_models">
                    <div className="phones_differences first_column">
                        <input
                            id="checkbox_differences"
                            type="checkbox"
                            checked={isShownOnlyDifferences}
                            name="checkbox_differences"
                            onChange={setIsShownOnlyDifferences}
                        />
                        <label htmlFor="checkbox_differences"> Показать различия</label>
                    </div>
                    <div className="second_column">
                        <Pictures phones={showedPhones} />
                    </div>
                </div>
            </section>
            <section className="phones_data">
                <PhoneTableRows />
            </section>
        </div>
    );
});

export default Comparison;
