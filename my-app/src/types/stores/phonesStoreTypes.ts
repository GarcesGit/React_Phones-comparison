export type PhoneType = {
    id: number;
    name: string;
    imageName: string;
    chars: PhoneChars;
}

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
}