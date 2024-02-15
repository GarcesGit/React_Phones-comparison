import { PhoneType } from "../../types/stores/phonesStoreTypes";
import Picture from "./components/picture/Picture";

interface PicturesProps {
    phones: PhoneType[];
}

const Pictures = ({ phones }: PicturesProps) => {
    return (
        <>
            {phones.map((phone) => (
                <Picture phone={phone} key={phone.id} />
            ))}
        </>
    );
};

export default Pictures;
