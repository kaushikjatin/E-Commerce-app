import React from 'react';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux';
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'
import { firestore , convertSnapshotToMap} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/withSpinner/withSpinner.component'

const CollectionOverviewOrSpinner = WithSpinner(CollectionOverview);
const CollectionPageOrSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component
{
    state = {loading:true}
    componentDidMount(){
        const {updateCollections}=this.props;
        const collectionRef=firestore.collection('collections');
        collectionRef.onSnapshot(snapshot =>{
            const collections_map=convertSnapshotToMap(snapshot);
            updateCollections(collections_map)
            this.setState({loading:false})
        })
    }

    render(){
        const {match}=this.props;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render = {(props) => <CollectionOverviewOrSpinner isLoading={this.state.loading} {...props}></CollectionOverviewOrSpinner>}></Route>
                <Route exact path={`${match.path}/:collectionId`} render = {(props) => <CollectionPageOrSpinner isLoading={this.state.loading} {...props}></CollectionPageOrSpinner>}></Route>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    updateCollections:(collections_map)=>{
        dispatch(updateCollections(collections_map))}
})


export default connect(null,mapDispatchToProps)(ShopPage);