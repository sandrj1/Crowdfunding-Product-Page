import './SelectReward.css';

export default function SelectReward({ value, title, pledge, quantity, reward, children }) {

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
            <button>{reward}</button>
        </div>
    </article>
}