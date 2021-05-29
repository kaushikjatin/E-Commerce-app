import React from 'react';
import {connect} from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import WithSpinner from '../../components/withSpinner/withSpinner.component'
import {selectCollectionsFetching} from '../../redux/shop/shop.selectors'

const mapStateToProps = state =>({
    isLoading:selectCollectionsFetching(state)
})

const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));

export default CollectionOverviewContainer;
