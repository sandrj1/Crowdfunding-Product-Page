import './ModalDefault.css';
import closeModal from '../../../images/icon-close-modal.svg';
import reactDom from 'react-dom';
import SelectOption from './SelectOption';
import SelectPledge from './SelectPledge';
import ModalCompleted from '../Completed/ModalCompleted';
import { OptionContext } from '../../../context/OptionProvider';
import { useState, useContext } from 'react';

export default function ModalDefault() {
    const { options, setModalDefault, openId, setOpenId } = useContext(OptionContext)

    return reactDom.createPortal(
        <div className='modal__container'>
            <section className='section--default'>
                <div className='section__title'>
                    <h2>Back this project</h2>
                    <img src={closeModal} alt='' onClick={() => {
                        setModalDefault(false)
                    }
                    } />
                </div>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                {options?.map(option => (

                    <article className={
                        openId === option.value
                            ? 'option__container selected'
                            : option.value === 'mahogany'
                                ? 'option__container disabled'
                                : 'option__container'} key={option.value}>
                        <details open={openId === option.value} onClick={() => { setOpenId(option.value) }} className={option.value === 'mahogany' ? 'details--disabled' : null}>
                            <summary>
                                <SelectOption
                                    value={option.value}
                                    title={option.title}
                                    pledge={option.pledge}
                                    quantity={option.quantity}
                                >
                                    {option.children}
                                </SelectOption>
                            </summary>

                            <SelectPledge
                                value={option.value}
                                pledge={option.pledge}
                            />
                        </details>
                    </article>
                ))}
            </section>
            <ModalCompleted />
        </div>,
        document.getElementById('portal__modal')
    )
}