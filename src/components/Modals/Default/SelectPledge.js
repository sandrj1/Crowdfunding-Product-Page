import './SelectPledge.css';

export default function SelectPledge(props) {
    const handleInput = (e) => {
        console.log(e.target.value)
    }
    return < div className='pledge__container' >
        <p>Enter your pledge</p>
        <div className='pledge__buttons'>
            <div className='input__container'>
                <p>$</p>
                <input type='number' min={props.pledge} placeholder={props.pledge} onWheel={(e) => { e.target.blur() }} onKeyUp={(e) => {handleInput(e)}}/>
            </div>
            <button>Continue</button>
        </div>
    </div >
}