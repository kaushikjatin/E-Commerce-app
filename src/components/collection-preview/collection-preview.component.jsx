import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './collection-preview.styles.scss'
const CollectionPreview=({title,items,history})=>{
    return(
        <div className='collection-preview'>
            <Link className='link' to={`shop/${title.toLowerCase()}`}>{title}</Link>
            <div className='preview'>
                {
                    items.filter((item,ind)=> ind<4)
                    .map((item)=>(
                        <CollectionItem key={item.id} item={item}></CollectionItem>
                    ))
                }
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview);