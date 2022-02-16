import './SelectOption.css';
import { useState, useRef } from 'react';

export default function SelectOption(props) {

    return <article className='option__container'>
        <label htmlFor={props.value} disabled={props.disabled} className={props.disabled ? 'option__label--disabled' : null}>
            <div className='option__content'>
                <div className="radio__container">
                    <input type='radio' id={props.value}
                        name='options' value={props.value} disabled={props.disabled}
                    />
                    <div className='option__title'>
                        <h3>{props.title}</h3>
                        {props.reward
                            ? <>
                                <h4>Pledge ${props.pledge} or more</h4>
                            </>
                            : null
                        }
                    </div>
                </div>
                <div className='option__description'>
                    {props.children}
                </div>
                {props.reward
                    ? <>
                        <p className='option__quantity'><span>{props.quantity}</span> left</p>
                    </>
                    : null
                }
            </div>
        </label>
        {props.reward
            ? <div className='pledge__container'>
                <p>Enter your pledge</p>
                <div className='pledge__buttons'>
                    <div className='input__container'>
                        <p>$</p>
                        <input type='number' min={props.pledge} placeholder={props.pledge} />
                    </div>
                    <button>Continue</button>
                </div>
            </div>
            : null
        }
    </article>
}