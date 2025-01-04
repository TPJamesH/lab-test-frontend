import { Button } from "../../Headless/Button/Button";
import ButtonStyle from "../../presentation/ButtonStyle";

const { buttonStyle } = ButtonStyle()
// function logChoice(input) {
//     console.log(input)
// }

const logChoice = (input)=> {
    console.log(input)
}
const TimeInput = ({ modeArray }) => {

  
    let arr = []
    //push the first option
    arr.push(
        <Button
            label={modeArray[0]}
            className={buttonStyle + " border rounded-s-lg"}
            onClick={() => logChoice(modeArray[0])}
        />)

    // Push any options in between
    for (let i = 1; i < modeArray.length - 1; i++) {
        if (i)
            arr.push(
                <Button
                    label={modeArray[i]}
                    className={buttonStyle + " border-t border-b "}
                    onClick={() =>logChoice(modeArray[i])}
                />)
    }

    // Push the last option
    arr.push(
        <Button
            label={modeArray[modeArray.length - 1]}
            className={buttonStyle + " border rounded-e-lg"}
            onClick={() => logChoice(modeArray[modeArray.length - 1])}
        />)

    return (<div class="inline-flex rounded-md shadow-sm" role="group">{arr}</div>)


}

export default TimeInput