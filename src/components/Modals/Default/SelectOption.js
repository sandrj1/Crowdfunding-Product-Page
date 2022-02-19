import './SelectOption.css';
import { useContext } from 'react';
import { OptionContext } from '../../../context/OptionProvider';

export default function SelectOption({ value, title, pledge, quantity, children }) {
    const { openId, setOpenId } = useContext(OptionContext)

    return <label
        htmlFor={value} className={value === 'mahogany' ? 'option__label--disabled' : 'option__label'}>
        <div className='option__content'>
            <div className='radio__container'>
                <input type='radio' id={value}
                    name='options' value={value} checked={value === openId ? true : false} onChange={() => {}}
                />
                <div className='option__title'>
                    <div className='option__title--desktop'>
                        <h3>{title}</h3>
                        {pledge > 0
                            ? <h4>Pledge ${pledge} or more</h4>
                            : null
                        }
                    </div>
                    <div className='quantity__container'>
                        {quantity
                            ? <p className='option__quantity--desktop'><span>{quantity}</span> left</p>
                            : null
                        }
                    </div>
                </div>
            </div>
            <div className='option__description'>
                {children}
            </div>
            {quantity
                ? <>
                    <p className='option__quantity'><span>{quantity}</span> left</p>
                </>
                : null
            }
        </div>
    </label>
}