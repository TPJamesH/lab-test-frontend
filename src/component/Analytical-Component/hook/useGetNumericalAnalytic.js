import { useState, useEffect } from 'react';

const useGetNumericalAnalytic = (loadItemApi) => {
    const [value, setValue] = useState(0);

    async function fetchValue() {
        try {
           
            const result = await loadItemApi()
            setValue(result)
        }

        catch (error) {
            console.log(error)
        }

    }
    useEffect(() => { fetchValue()}, [loadItemApi])

    return {value,fetchValue,setValue};
}

export default useGetNumericalAnalytic