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

            return;
        }

        const newRows = phoneTableRows.filter((row) => {
            const isEqual = row.rowChars.every((value) => value === row.rowChars[0]);
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
