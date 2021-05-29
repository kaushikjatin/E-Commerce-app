import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';
import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container'
import CollectionPageContainer from '../collection/collection.container'

class ShopPage extends React.Component
{
    componentDidMount(){
        const {fetchCollectionsAsync} = this.props;
        fetchCollectionsAsync();
    }

    render(){
        const {match}=this.props;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer}></Route>
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer}></Route>
                {/* when we use the render to pass a componenet in the <route>,,,then the <route> componenet doesnot pass match,history,location into the props of the compoenet but it passes them
                into the function as arguments....and hence we will then pass the props into the componenets */}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    fetchCollectionsAsync:() => dispatch(fetchCollectionsAsync())
})

export default connect(null,mapDispatchToProps)(ShopPage);