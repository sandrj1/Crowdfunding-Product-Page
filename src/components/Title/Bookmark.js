import bookmark from '../../images/icon-bookmark.svg';
import hoverBookmark from '../../images/icon-bookmark-hover.svg';
import { useMediaQuery } from 'react-responsive';

export default function Bookmark(props) {
    const hover = useMediaQuery({ query: '(hover: hover)' });
    return <>
        {props.checked
            ? <img src={props.bookmarked} alt='' />
            : hover
                ? <img src={bookmark} alt=''
                    onMouseEnter={e => e.target.src = hoverBookmark}
                    onMouseLeave={e => e.target.src = bookmark}
                />
                : <img src={bookmark} alt='' />
        }
    </>
}