import './ModalDefault.css';
import closeModal from '../../../images/icon-close-modal.svg';
import reactDom from 'react-dom';
import SelectOption from './SelectOption';
import SelectPledge from './SelectPledge';
import ModalCompleted from '../Completed/ModalCompleted';
import { useState } from 'react';

const options = [
    {
        'value': 'none',
        'title': 'Pledge with no reward',
        'pledge': 0,
        'children': 'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.'
    },
    {
        'value': 'bamboo',
        'title': 'Bamboo Stand',
        'pledge': 25,
        'quantity': 101,
        'children': 'You get an ergonomic stand made of natural bamboo. You\'ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.'
    },
    {
        'value': 'black',
        'title': 'Black Edition Stand',
        'pledge': 75,
        'quantity': 64,
        'children': 'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.'
    },
    {
        'value': 'mahogany',
        'title': 'Mahogany Special Edition',
        'pledge': 200,
        'quantity': '0',
        'children': 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.'
    }
]

export default function ModalDefault(props) {
    const [openId, setOpenId] = useState('');

    return reactDom.createPortal(
        <div className='modal__container'>
            <section className='section--default'>
                <div className='section__title'>
                    <h2>Back this project</h2>
                    <img src={closeModal} alt='' onClick={() => props.setModalDefault(false)} />
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









/* VERSION WITHOUT MAP */

/* <SelectOption
                    value={'none'}
                    title={'Pledge with no reward'}
                    reward={false}
                    disabled={false}
                >
                    Choose to support us without a reward if you simply believe in our project. As a backer,
                    you will be signed up to receive product updates via email.
                </SelectOption>
                <SelectOption
                    value={'bamboo'}
                    title={'Bamboo Stand'}
                    pledge={25}
                    quantity={101}
                    reward={true}
                    disabled={false}
                >
                    You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                    you’ll be added to a special Backer member list.
                </SelectOption>
                <SelectOption
                    value={'black'}
                    title={'Black Edition Stand'}
                    pledge={75}
                    quantity={64}
                    reward={true}
                    disabled={false}
                >
                    You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                    member list. Shipping is included.
                </SelectOption>
                <SelectOption
                    value={'mahogany'}
                    title={'Mahogany Special Edition'}
                    pledge={200}
                    quantity={0}
                    reward={false}
                    disabled={true}
                >
                    You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                    to our Backer member list. Shipping is included.
                </SelectOption> */


/* END VERSION WITHOUT MAP */