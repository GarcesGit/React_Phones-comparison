import "./characteristicsRowsStyles.css";
import image_yes from "../../images/yes.png";
import image_no from "../../images/no.png";
import { TableDataRow } from "../../types/stores/phonesStoreTypes";
import { calculateColumnWidth } from "../utils/calculateColumnWidth";
import PhonesStore from "../../store/phonesStore";
import uuid from "react-uuid";

interface CharacteristicsRowsProps {
    row: TableDataRow;
}

const CharacteristicsRows = ({ row: { rowTitle, rowChars } }: CharacteristicsRowsProps) => {
    const { showedPhonesNumber } = PhonesStore;

    return (
        <div className="phones_characteristics ">
            <div className="phones_characteristics_titles first_column">{rowTitle}</div>
            <div className="second_column">
                {rowChars.map((char) => {
                    if (typeof char === "boolean") {
                        return (
                            <div key={uuid()} style={{ width: calculateColumnWidth(showedPhonesNumber) }}>
                                <img src={char ? image_yes : image_no} alt="" className="row row_image" />
                            </div>
                        );
                    }
                    return (
                        <div key={uuid()} style={{ width: calculateColumnWidth(showedPhonesNumber) }}>
                            {char}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CharacteristicsRows;
