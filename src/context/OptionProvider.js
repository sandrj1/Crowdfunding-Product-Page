import { createContext, useState } from "react";

export const OptionContext = createContext()

export default function OptionProvider({ children }) {
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

    const [modalDefault, setModalDefault] = useState(false);
    const [openId, setOpenId] = useState('');

    return (
        <OptionContext.Provider
            value={{
                options,
                modalDefault,
                setModalDefault,
                openId,
                setOpenId
            }}>
            {children}
        </OptionContext.Provider>
    )
}