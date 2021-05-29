import React from 'react';
import {connect} from 'react-redux';
import CollectionPage from '../collection/collection.component'
import WithSpinner from '../../components/withSpinner/withSpinner.component'
import {selectCollectionsFetching} from '../../redux/shop/shop.selectors'

const mapStateToProps = state =>({
    isLoading:selectCollectionsFetching(state)
})

const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage))
    

export default CollectionPageContainer;