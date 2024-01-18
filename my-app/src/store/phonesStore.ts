import { makeAutoObservable } from "mobx";
import { PhoneType } from "../types/stores/phonesStoreTypes";

class PhonesStore {
    phones: PhoneType[] = [
            { id: 1, "name": "Apple iPhone 12", "imageName": "Apple_iPhone_12", "manufacturer": "Apple", "year": "2020", "diagonal": "6,1", "country": "Китай", "memory": "128 Гб", "frequency": "60 Гц", "nfc": false, "eSIM": true, "charging": true, "price": "81 990 ₽" },
            { id: 2, "name": "Xiaomi Mi 11 Lite", "imageName": "Xiaomi_Mi_11_Lite_1", "manufacturer": "Xiaomi", "year": "2021", "diagonal": "6,55", "country": "Китай", "memory": "128 Гб", "frequency": "90 Гц", "nfc": true, "eSIM": true, "charging": false, "price": "27 490 ₽" },
            { id: 3, "name": "Samsung Galaxy A72", "imageName": "Samsung_Galaxy_A72", "manufacturer": "Samsung", "year": "2021", "diagonal": "6,7", "country": "Вьетнам", "memory": "128 Гб", "frequency": "90 Гц", "nfc": true, "eSIM": true, "charging": true, "price": "32 890 ₽" },
            { id: 4, "name": "Samsung Galaxy S21", "imageName": "Samsung_Galaxy_S21", "manufacturer": "Samsung", "year": "2021", "diagonal": "6,4", "country": "Вьетнам", "memory": "128 Гб", "frequency": "120 Гц", "nfc": true, "eSIM": true, "charging": true, "price": "40 900 ₽" },
            { id: 5, "name": "Apple iPhone Xr", "imageName": "Apple_iPhone_Xr", "manufacturer": "Apple", "year": "2018", "diagonal": "6,1", "country": "Китай", "memory": "128 Гб", "frequency": "60 Гц", "nfc": true, "eSIM": true, "charging": true, "price": "24 500 ₽" },
            { id: 6, "name": "Realme 8 Pro", "imageName": "Realme_8_Pro", "manufacturer": "OPPO", "year": "2023", "diagonal": "6,7", "country": "Китай", "memory": "128 Гб", "frequency": "90 Гц", "nfc": true, "eSIM": true, "charging": false, "price": "26 990 ₽" },
            { id: 7, "name": "Google Pixel 7A", "imageName": "Google_Pixel_7A", "manufacturer": "Google", "year": "2023", "diagonal": "6,1", "country": "Вьетнам", "memory": "128 Гб", "frequency": "90 Гц", "nfc": true, "eSIM": true, "charging": true, "price": "58 990 ₽" }
        ]
        
    constructor() {
        makeAutoObservable(this)
    }

    
}

export default new PhonesStore