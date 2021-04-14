import React from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'

const ShopPage =({match})=>{
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverview}></Route>
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
            </div>
        )
    }


export default ShopPage;