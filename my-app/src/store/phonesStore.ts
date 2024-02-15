import { makeAutoObservable } from "mobx";
import { PhoneType, TableDataRow, TableRowName } from "../types/stores/phonesStoreTypes";

class PhonesStore {
    phones: PhoneType[] = [
        {
            id: 1,
            name: "Apple iPhone 12",
            imageName: "Apple_iPhone_12",
            chars: {
                manufacturer: "Apple",
                year: "2020",
                diagonal: "6,1",
                country: "Китай",
                memory: "128 Гб",
                frequency: "60 Гц",
                nfc: false,
                eSIM: true,
                charging: true,
                price: "81 990 ₽",
            },
        },
        {
            id: 2,
            name: "Xiaomi Mi 11 Lite",
            imageName: "Xiaomi_Mi_11_Lite_1",
            chars: {
                manufacturer: "Xiaomi",
                year: "2021",
                diagonal: "6,55",
                country: "Китай",
                memory: "128 Гб",
                frequency: "90 Гц",
                nfc: true,
                eSIM: true,
                charging: false,
                price: "27 490 ₽",
            },
        },
        {
            id: 3,
            name: "Samsung Galaxy A72",
            imageName: "Samsung_Galaxy_A72",
            chars: {
                manufacturer: "Samsung",
                year: "2021",
                diagonal: "6,7",
                country: "Вьетнам",
                memory: "128 Гб",
                frequency: "90 Гц",
                nfc: true,
                eSIM: true,
                charging: true,
                price: "32 890 ₽",
            },
        },
        {
            id: 4,
            name: "Samsung Galaxy S21",
            imageName: "Samsung_Galaxy_S21",
            chars: {
                manufacturer: "Samsung",
                year: "2021",
                diagonal: "6,4",
                country: "Вьетнам",
                memory: "128 Гб",
                frequency: "120 Гц",
                nfc: true,
                eSIM: true,
                charging: true,
                price: "40 900 ₽",
            },
        },
        {
            id: 5,
            name: "Apple iPhone Xr",
            imageName: "Apple_iPhone_Xr",
            chars: {
                manufacturer: "Apple",
                year: "2018",
                diagonal: "6,1",
                country: "Китай",
                memory: "128 Гб",
                frequency: "60 Гц",
                nfc: true,
                eSIM: true,
                charging: true,
                price: "24 500 ₽",
            },
        },
        {
            id: 6,
            name: "Realme 8 Pro",
            imageName: "Realme_8_Pro",
            chars: {
                manufacturer: "OPPO",
                year: "2023",
                diagonal: "6,7",
                country: "Китай",
                memory: "128 Гб",
                frequency: "90 Гц",
                nfc: true,
                eSIM: true,
                charging: false,
                price: "26 990 ₽",
            },
        },
        {
            id: 7,
            name: "Google Pixel 7A",
            imageName: "Google_Pixel_7A",
            chars: {
                manufacturer: "Google",
                year: "2023",
                diagonal: "6,1",
                country: "Вьетнам",
                memory: "128 Гб",
                frequency: "90 Гц",
                nfc: true,
                eSIM: true,
                charging: true,
                price: "58 990 ₽",
            },
        },
    ];
    showedPhonesNumber: number = 3;
    showedPhones: PhoneType[] = [];
    phonesForChanging: PhoneType[] = [];
    phoneTableRows: TableDataRow[] = [
        {
            rowName: "manufacturer",
            rowTitle: "Производитель",
            rowChars: [],
        },
        {
            rowName: "year",
            rowTitle: "год релиза",
            rowChars: [],
        },
        {
            rowName: "diagonal",
            rowTitle: "Диагональ экрана (дюйм)",
            rowChars: [],
        },
        {
            rowName: "country",
            rowTitle: "Страна-производитель",
            rowChars: [],
        },
        {
            rowName: "memory",
            rowTitle: "Объем памяти",
            rowChars: [],
        },
        {
            rowName: "frequency",
            rowTitle: "Частота обновления экрана",
            rowChars: [],
        },
        {
            rowName: "nfc",
            rowTitle: "NFC",
            rowChars: [],
        },
        {
            rowName: "eSIM",
            rowTitle: "Поддержка eSIM",
            rowChars: [],
        },
        {
            rowName: "charging",
            rowTitle: "Поддержка беспроводной зарядки",
            rowChars: [],
        },
        {
            rowName: "price",
            rowTitle: "Стоимость",
            rowChars: [],
        },
    ];
    isShownOnlyDifferences: boolean = false;

    constructor() {
        makeAutoObservable(this);

        this.changeShowedPhones(this.showedPhonesNumber);
    }

    changeShowedPhones = (value: number) => {
        this.setShowedPhonesNumber(value);
        this.setShowedPhonesByNumber(value);
        this.setPhonesForChanging();
        this.setPhoneTableRows();
    };

    setShowedPhonesNumber = (value: number) => {
        this.showedPhonesNumber = value;
    };

    setShowedPhonesByNumber = (value: number) => {
        this.showedPhones = this.phones.slice(0, value);
    };

    setPhonesForChanging = () => {
        this.phonesForChanging = this.phones.filter((phone) => !this.showedPhones.includes(phone));
    };

    setPhoneTableRows = () => {
        const newTableRows: Record<TableRowName, (string | boolean)[]> = {
            // лучше динамически
            manufacturer: [],
            year: [],
            diagonal: [],
            country: [],
            memory: [],
            frequency: [],
            nfc: [],
            eSIM: [],
            charging: [],
            price: [],
        };

        this.showedPhones.forEach((phone) => {
            const phoneCharsArray = Object.entries(phone.chars);
            phoneCharsArray.forEach((char) => {
                const charName: TableRowName = char[0] as TableRowName;
                newTableRows[charName].push(char[1]);
            });
        });
        this.phoneTableRows = this.phoneTableRows.map((row) => {
            const newRow = { ...row, rowChars: newTableRows[row.rowName] };
            return newRow;
        });
    };

    setIsShownOnlyDifferences = () => {
        this.isShownOnlyDifferences = !this.isShownOnlyDifferences;
    };
}

//ф замены в сторе/ хендлер принимает ID тел при замене и ID тед с dropd  и вызвать a персчитывающую все масиивы /при выборе тел закрывается dropdown/ в массиве phones поменять местами
// верстку поправитть - не гибкая - см notion 22.12

export default new PhonesStore();
