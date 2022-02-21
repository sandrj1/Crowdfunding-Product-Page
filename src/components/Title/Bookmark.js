import bookmark from '../../images/icon-bookmark.svg';
import { useMediaQuery } from 'react-responsive';

export default function Bookmark(props) {
    const hover = useMediaQuery({ query: '(hover: hover)' });
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