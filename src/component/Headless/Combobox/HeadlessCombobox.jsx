import { useState } from 'react'

const HeadlessCombobox = ({ children,...props}) => {
    const firstItem = props.data[0]
    const fieldValue = firstItem[props.textField]
    const [value, setValue] = useState(fieldValue || '');

    const handleChange = (value) => {
        setValue(value);
    };
   //  console.log(props.name + ": " + value)


   const handleSelect = (value) => {
            props.handleFunction(value.userId)
   };
    
    return children({
        value,
        onChange: handleChange, 
        onSelect: handleSelect,
        ...props 
    });
   

    
}

export { HeadlessCombobox }