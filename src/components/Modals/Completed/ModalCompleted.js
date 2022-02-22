import './ModalCompleted.css';
import check from '../../../images/icon-check.svg'
import { useContext } from 'react';
import { OptionContext } from '../../../context/OptionProvider';

export default function ModalCompleted() {
    const {setModalDefault, setOpenId, setModalCompleted} = useContext(OptionContext)
    return <section className='section--completed'>
        <img src={check} alt='' />
        <h2>Thanks for your support!</h2>
        <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.</p>
        <button onClick={() => {
            setModalDefault(false)
            setOpenId('')
            setModalCompleted(false)
        }}>Got it!</button>
    </section>
}