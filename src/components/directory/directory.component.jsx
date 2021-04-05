import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx';
import './directory.styles.scss';
import {connect} from 'react-redux'
import {selectSections} from '../../redux/directory/directory.selectors'

const  Directory = ({sections})=>{
        return(
            <div className='directory-menu'>
                {sections.map(({title,imageUrl,size,id})=>(
                    <MenuItem title={title} imageUrl={imageUrl} size={size}></MenuItem>
                ))}
            </div>
        )
    }


const mapStateToProps=(state) =>({
  sections:selectSections(state)
})
export default connect(mapStateToProps)(Directory);