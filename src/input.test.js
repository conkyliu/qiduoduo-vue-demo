import {fireEvent, render} from '@testing-library/vue'
import MyInput from "./components/MyInput";

test('Input value eq null', async () => {
    const {getByText} = await render(MyInput)
    getByText('myInput value is');

})

test('Input value eq hello world', async () => {
    const {getByText,getByLabelText} = await render(MyInput);
    const input =  getByLabelText(/username/i);
    await fireEvent.update(input,'hello world');

    getByText('myInput value is hello world');

})
