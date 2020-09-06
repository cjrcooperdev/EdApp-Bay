import { useState } from "react";
export default initialVal => {
    const [valueOne, setValueOne] = useState(initialVal);

    const handleValueOne = (value) => {
        setValueOne(value);
    };

    return [valueOne, handleValueOne]
}