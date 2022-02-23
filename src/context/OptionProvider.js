import { createContext, useState, useEffect} from 'react';

export const OptionContext = createContext()

export default function OptionProvider({ children }) {
    const [modalDefault, setModalDefault] = useState(false);
    const [openId, setOpenId] = useState('');
    const [modalCompleted, setModalCompleted] = useState(false);
    const [total, setTotal] = useState(89914);
    const [backers, setBackers] = useState(5007);
    const [qtyBamboo, setQtyBamboo] = useState(101);
    const [qtyBlack, setQtyBlack] = useState(64);
    const [widthTotal, setWidthTotal] = useState((total / 1000).toFixed(0));

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
            'quantity': qtyBamboo,
            'children': 'You get an ergonomic stand made of natural bamboo. You\'ve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.',
            'reward': 'Select Reward'
        },
        {
            'value': 'black',
            'title': 'Black Edition Stand',
            'pledge': 75,
            'quantity': qtyBlack,
            'children': 'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
            'reward': 'Select Reward'
        },
        {
            'value': 'mahogany',
            'title': 'Mahogany Special Edition',
            'pledge': 200,
            'quantity': '0',
            'children': 'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
            'reward': 'Out of Stock'
        }
    ]

    useEffect(() => {
        if (total <= 100000) {
            setWidthTotal((total / 1000).toFixed(0))
        } else {
            setWidthTotal(100)
        }
    }, [total])
    

    /* Prevent body from scrolling when modal is open */
    useEffect(() => {
        if (modalDefault) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [modalDefault])

    return (
        <OptionContext.Provider
            value={{
                options,
                modalDefault,
                setModalDefault,
                openId,
                setOpenId,
                modalCompleted,
                setModalCompleted,
                total,
                setTotal,
                backers,
                setBackers,
                qtyBamboo,
                setQtyBamboo,
                qtyBlack,
                setQtyBlack,
                widthTotal,
                setWidthTotal
            }}>
            {children}
        </OptionContext.Provider>
    )
}