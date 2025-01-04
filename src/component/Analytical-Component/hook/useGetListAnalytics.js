import { useState, useEffect } from 'react';

const useGetListAnalytic = (loadItemApi) => {
    const [value, setValue] = useState([]);

    async function fetchValue() {
        try {
            const result = await loadItemApi()
            setValue(result)
        }

        catch (error) {
            console.log(error)
        }

    }

    async function fetchValueInput(input) {
        try {
            const result = await loadItemApi(input)
            setValue(result)
        }

        catch (error) {
            console.log("Waiting for input")
        }

    }
    useEffect(() => { fetchValue()}, [loadItemApi])

    return {value,fetchValue,fetchValueInput,setValue};
}

export default useGetListAnalytic