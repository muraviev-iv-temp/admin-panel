import { getThemedClassName } from '../../../common/utils';
import './GridPagination.css';

export function GridPagination(props) {
    const { classModificator } = props;
    const visiblePagesRange = 2;
    const currentPageNum = 2;
    const totalPagesCount = 25;

    const first = currentPageNum - visiblePagesRange > 2 ? currentPageNum - visiblePagesRange : 1;
    const last = currentPageNum + visiblePagesRange < totalPagesCount - 1 ? currentPageNum + visiblePagesRange : totalPagesCount;

    function pushNewItem(items, value, currentPage) {
        items.push((
            <p key = {items.length} className = {getThemedClassName([
                'grid__pagination-item',
                `grid__pagination-item_${
                    (value === currentPage && 'current')
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