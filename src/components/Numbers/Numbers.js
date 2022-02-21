import './Numbers.css';
import { useContext } from 'react';
import { OptionContext } from '../../context/OptionProvider';

export default function Numbers() {
    const { total, backers } = useContext(OptionContext);

    const number = 89914;
    return <div className='numbers__container'>
        <div className='numbers__box'>
            <div className='box--left'>
                <h2>${total.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h2>
                <p>of $100.000 backed</p>
            </div>
            <div className='box--center'>
                <h2>{backers.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h2>
                <p>total backers</p>
            </div>
            <div className='box--right'>
                <h2>56</h2>
                <p>days left</p>
            </div>
        </div>
        <div className='progress__bar--goal'>
            <div className='progress__bar--total'></div>
        </div>
    </div>
}