import React from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'
import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/withSpinner/withSpinner.component'
import {selectCollectionsFetching} from '../../redux/shop/shop.selectors'

const CollectionOverviewOrSpinner = WithSpinner(CollectionOverview);
const CollectionPageOrSpinner = WithSpinner(CollectionPage);
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
                <Route exact path={`${match.path}`} render = {(props_passed_by_route) => <CollectionOverviewOrSpinner isLoading={this.props.isFetching} {...props_passed_by_route}></CollectionOverviewOrSpinner>}></Route>
                <Route exact path={`${match.path}/:collectionId`} render = {(props_passed_by_route) => <CollectionPageOrSpinner isLoading={this.props.isFetching} {...props_passed_by_route}></CollectionPageOrSpinner>}></Route>
                {/* when we use the render to pass a componenet in the <route>,,,then the <route> componenet doesnot pass match,history,location into the props of the compoenet but it passes them
                into the function as arguments....and hence we will then pass the props into the componenets */}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    fetchCollectionsAsync:() => dispatch(fetchCollectionsAsync())
})

const mapStateToProps = state =>({
    isFetching:selectCollectionsFetching(state)
})


export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);