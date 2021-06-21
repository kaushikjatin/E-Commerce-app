import React, { Component,useEffect } from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container'
import CollectionPageContainer from '../collection/collection.container'

const ShopPage =({fetchCollectionsStart,match})=>{
    useEffect(()=>{
        fetchCollectionsStart()
    },[fetchCollectionsStart])

        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer}></Route>
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer}></Route>
                {/* when we use the render to pass a componenet in the <route>,,,then the <route> componenet doesnot pass match,history,location into the props of the compoenet but it passes them
                into the function as arguments....and hence we will then pass the props into the componenets */}
            </div>
        )
}

const mapDispatchToProps = dispatch =>({
    fetchCollectionsStart:() => dispatch(fetchCollectionsStart())
})

export default connect(null,mapDispatchToProps)(ShopPage);