import './SelectPledge.css';

export default function SelectPledge({ pledge }) {
    const handleInput = (e) => {
        console.log(e.target.value)
    }
    return < div className='pledge__container' >
        <div className="pledge__box">
            <p>Enter your pledge</p>
            <div className='pledge__buttons'>
                <div className='input__container'>
                    <p>$</p>
                    <input type='number' min={pledge} placeholder={pledge} onWheel={(e) => { e.target.blur() }} onKeyUp={(e) => { handleInput(e) }} />
                </div>
                <button>Continue</button>
            </div>
        </div>
    </div >
}