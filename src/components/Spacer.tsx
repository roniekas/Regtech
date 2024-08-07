/**
 * @param size
 * @constructor
 * the flex 1 is only work if the parent div (wrapper is have a explicit height)
 */

export default function Spacer({size}:{size: 0 | 1 | 2 | 3 | 4 | 5}){
    return (<div className={`${size < 1 ? 'flex-1' : ``}`} style={{height: `${size > 0 ? `${size}vh` : ''}`}}/>)
}