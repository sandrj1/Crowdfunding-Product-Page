import './SelectPledge.css';
import { useContext, useState } from 'react';
import { OptionContext } from '../../../context/OptionProvider';

export default function SelectPledge({ value, pledge }) {
    const {options, setModalCompleted, total, setTotal, backers, setBackers, qtyBamboo, setQtyBamboo, qtyBlack, setQtyBlack} = useContext(OptionContext);
    const [inputValue, setInputValue] = useState(null);
    const handleInput = (e) => {
        console.log('total', total)
        console.log(Number(e.target.value))
        setInputValue(Number(e.target.value))
    }

    const handleQuantity = () => {
        if (value === 'bamboo') {
            setQtyBamboo(qtyBamboo - 1)
        } else if (value === 'black') {
            setQtyBlack(qtyBlack - 1)
        }
    }
    
    return < div className='pledge__container' >
        <div className="pledge__box">
            <p>Enter your pledge</p>
            <div className='pledge__buttons'>
                <div className='input__container'>
                    <p>$</p>
                    <input type='number' min={pledge} placeholder={pledge} onWheel={(e) => { e.target.blur() }}
                        onKeyUp={(e) => { handleInput(e) }} />
                </div>
                <button onClick={() => {
                    setModalCompleted(true)
                    setTotal(total + inputValue)
                    setBackers(backers + 1)
                    handleQuantity()
                }}>Continue</button>
            </div>
        </div>
    </div >
}