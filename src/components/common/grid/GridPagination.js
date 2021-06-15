import { getThemedClassName } from '../../../common/utils';
import './GridPagination.css';

export function GridPagination(props) {
    const { classModificator, pagination, onPageChange } = props;
    const visiblePagesRange = 2;
    const currentPageNum = pagination.pageNum;
    const totalPagesCount = pagination.pagesCount;

    const first = currentPageNum - visiblePagesRange > 2 ? currentPageNum - visiblePagesRange : 1;
    const last = currentPageNum + visiblePagesRange < totalPagesCount - 1 ? currentPageNum + visiblePagesRange : totalPagesCount;

    const onItemClick = (value, pageNum) => {
        console.log(value, pageNum)
        value == pageNum || onPageChange(Number(value))
    }
    function pushNewItem(items, value, pageNum) {
        items.push((
            <p key = {items.length} onClick = {() => onItemClick(value, pageNum)} className = {getThemedClassName([
                'grid__pagination-item',
                `grid__pagination-item_${
                    (value === pageNum && 'current')
                    || (typeof value === 'number' && 'cliclable')
                }`],
                classModificator
            )}>
                {value}
            </p>
        ))
    }

    const items = [];

    if(first !== 1){
        pushNewItem(items, 1, currentPageNum);
        pushNewItem(items, '...');
    } 
    for(let i = first; i <= last; i++)
        pushNewItem(items, i, currentPageNum)
    
    if(last !== totalPagesCount){
        pushNewItem(items, '...')
        pushNewItem(items, totalPagesCount, currentPageNum);
    } 
    pushNewItem(items, '#')
    return (
        <div className = "grid__pagination">
            {items}
        </div>
    );
}