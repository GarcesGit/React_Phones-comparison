import React, { useState } from 'react';
import PhonesStore from '../../store/phonesStore';
import { observer } from 'mobx-react-lite';

const Counter = () => {
	const { showedPhonesNumber, setShowedPhonesNumber } = PhonesStore;

    const itemsNumber: number[] = [2, 3, 4, 5, 6, 7];
//добавить class name `num ${showphnum === num ? 'active' : '' }` если равно добавить класс
//css underline/ курсор поинтер

    return (
        <div className="display_products">
            Отобразить товары:

            {itemsNumber.map((num, index) => (
                <button
                    className="num"
                    key={index}
                    onClick={() => {
                        setShowedPhonesNumber(num)
                        console.log(showedPhonesNumber)
                    }}
                >
                    {num}
                </button>
            ))}
        </div>
        )
}

export default observer(Counter);
