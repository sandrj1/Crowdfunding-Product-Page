import bookmark from '../../images/icon-bookmark.svg';

export default function Bookmark(props) {
    return <>
        {props.checked
            ? <img style={{
                filter: 'none',
                transition: 'none'
            }} src={props.bookmarked} alt='' />
            : <img src={bookmark} alt='' />
        }
    </>
}