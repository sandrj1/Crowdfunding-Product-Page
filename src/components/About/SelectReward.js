import './SelectReward.css';
import { useContext } from 'react';
import { OptionContext } from '../../context/OptionProvider';

export default function SelectReward({ value, title, pledge, quantity, reward, children }) {
    const { setModalDefault, setOpenId } = useContext(OptionContext);

    return <article className={value === 'mahogany'
        ? 'reward__container disabled'
        : 'reward__container'
    }>
        <div className="reward__title">
            <h3>{title}</h3>
            <p>Pledge ${pledge} or more</p>
        </div>
        <p className="reward__description">{children}</p>
        <div className="reward__button">
            <p><span>{quantity}</span> left</p>
            <button onClick={() => {
                setModalDefault(true)
                setOpenId(value)
            }}>{reward}</button>
        </div>
    </article>
}