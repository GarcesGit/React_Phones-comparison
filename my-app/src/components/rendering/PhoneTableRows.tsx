import { useState, useEffect } from "react";
import CharacteristicsRows from "./CharacteristicsRows";
import PhonesStore from "../../store/phonesStore";
import { TableDataRow } from "../../types/stores/phonesStoreTypes";

const PhoneTableRows = () => {
    const { phoneTableRows, isShownOnlyDifferences } = PhonesStore;
    const [filteredRows, setFilteredRows] = useState<TableDataRow[]>(phoneTableRows);

    useEffect(() => {
        if (!isShownOnlyDifferences) {
            setFilteredRows(phoneTableRows);

            return; //чтобы не срабатывала далее setFilteredRows(phoneTableRows)
        } //чтобы не писать if else пишем if return

        const newRows = phoneTableRows.filter((row) => {
            const isEqual = row.rowChars.every((value) => value === row.rowChars[0]); // сравнили с первым значением
            return !isEqual;
        });
        setFilteredRows(newRows);
    }, [isShownOnlyDifferences, phoneTableRows]);

    return (
        <>
            {filteredRows.map((row) => (
                <CharacteristicsRows row={row} key={row.rowName} />
            ))}
        </>
    );
};

export default PhoneTableRows;
