import './Title.css';
import logo from '../../images/logo-mastercraft.svg';
import bookmarked from '../../images/icon-bookmarked.svg';
import { useState } from 'react';
import Bookmark from './Bookmark';
import Modal from '../Modals/Default/ModalDefault'

export default function Title() {
    const [checked, setChecked] = useState(false);
    const [modalDefault, setModalDefault] = useState(false);
    function handleBookmark(e) {
        if (e.target.checked) {
            setChecked(true);
        } else {
            setChecked(false);
        }
    }
    function handleModalDefault() {
        setModalDefault(true);
    }

    return <>
        <div className='title__container'>
            <img className='title__logo' src={logo} alt='' />
            <h1> Mastercraft Bamboo Monitor Riser</h1>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className='buttons'>
                <button className='button--left'
                    onClick={() => handleModalDefault()}
                >Back this project</button>
                <div className='button--right'>
                    <input type='checkbox' id='bookmark' name='bookmark' value='bookmark'
                        onClick={(e) => handleBookmark(e)}
                    />
                    <label htmlFor='bookmark'>
                        <Bookmark checked={checked} bookmarked={bookmarked} />
                        {checked
                            ? <span className='span--bookmarked'>Bookmarked</span>
                            : <span>Bookmark</span>
                        }
                    </label>
                </div>
            </div>
        </div>
        {modalDefault
            ? <Modal setModalDefault={setModalDefault}/> 
            : null
        }
    </>
}