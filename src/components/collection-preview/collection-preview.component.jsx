import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'
import './collection-preview.styles.scss'
const CollectionPreview=({title,items,history})=>{
    return(
        <div className='collection-preview'>
            <Link to={`shop/${title.toLowerCase()}`}>{title}</Link>
            {/* <h1 onClick={()=>history.push(title.toLowerCase())}>{title}</h1> */}
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