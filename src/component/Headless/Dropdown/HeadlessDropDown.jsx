import {useState} from 'react';

const HeadlessDropDown = ({ choice, children }) => {
    const [selectedValue, setSelectedValue] = useState(choice[0].value);
  
    const handleChange = (e) => {
      setSelectedValue(e.target.value);
    };
  
    return children({
      selectedValue,
      handleChange,
      choice
    });
  };

export default HeadlessDropDown