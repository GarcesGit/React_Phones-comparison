export type PhoneType = {
    id: number;
    name: string;
    imageName: string;
    chars: PhoneChars;
};

type PhoneChars = {
    manufacturer: string;
    year: string;
    diagonal: string;
    country: string;
    memory: string;
    frequency: string;
    nfc: boolean;
    eSIM: boolean;
    charging: boolean;
    price: string;
};

export type TableRowName =
    | "manufacturer"
    | "year"
    | "diagonal"
    | "country"
    | "memory"
    | "frequency"
    | "nfc"
    | "eSIM"
    | "charging"
    | "price";

export type TableDataRow = {
    rowName: TableRowName;
    rowTitle: string;
    rowChars: (string | boolean)[];
};
