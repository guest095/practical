import React, {Component} from 'react';
import {
  View,
  RefreshControl,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import styles from './style';
import String from '../../utils/string';
import {Routes} from '../../router/routes';
import ToolbarFeed from '../../component/toolbarfeed/toolbarfeed';
import Validations from '../../utils/validations'
import {FlatList} from 'react-native-gesture-handler';
import ItemVideo from '../../component/itemvideo/itemvideo';
import Color from '../../utils/color';
import ModalNetwork from '../../component/modalnetwork/modalnetwork';
import ApiRef from '../../utils/apiref';

const viewabilityConfig = {
  itemVisiblePercentThreshold: 80,
};

class MyFeedScreen extends Component {
  constructor(props) {
    super(props);
    this.cellRefs = {};
    this.state = {
      pageIndex: 1,
      videolist: [],
      count: 0,
      modalInfo:'',
      networkModal:false,
      isLoader: false,
      isListFinish: false,
      refresh: false,
    };
  }

  renderVideoItem = ({item, index}) => {
    console.log(item, 'item');
    return (
      <ItemVideo
        item={item}
        ref={(ref) => {
          this.cellRefs[index] = ref;
        }}
      />
    );
  };
  offNetworkModal=async(API_REF)=>{
    var networkResult = await Validations.checkNetConnection();
    if(networkResult){
      this.setState({
        networkModal: false,
      });
      switch (API_REF) {
        case ApiRef.VideoList:
          this.callVideoListApi();
          break;
      }
    }
    else{
      this.onNetworkModal(ApiRef.VideoList,String.Please_Check_Network);
    }
    
  }
  onNetworkModal=(API_REF,textInfo)=>{
    this.setState({
      networkModal:true,
      callRetryApi:API_REF,
      modalInfo:textInfo,
      pageIndex:1,
      videoList:[]
      
    })
  }
  async componentDidMount() {
    var networkResult = await Validations.checkNetConnection();
    if(networkResult){
    this.callVideoListApi()
    }
    else{
      this.onNetworkModal(ApiRef.VideoList,String.Please_Check_Network);
    }
  }
  callVideoListApi = () => {
    this.state.pageIndex === 1 ? this.onLoader() : null;
    fetch(`https://us-central1-vmd-development-396d2.cloudfunctions.net/widgets/test-video-data?page=${this.state.pageIndex}`)
      .then((res) => res.json())
      .then((response) => {
        let result = response.data;
        this.offLoader();
        this.setState({
          refresh: false,
          isListFinish: result.length < 6 ? true : false,
          videoList:
            this.state.pageIndex === 1
              ? result
              : [...this.state.videoList, ...result],
        });
      }).catch(error=>{
        this.offLoader()
        this.onNetworkModal(ApiRef.VideoList,error.message);
x      })
  };
  onRefresh = () => {
    this.setState(
      {
        refresh: true,
        videoList: [],
        pageIndex: 1,
      },
      () => {
        this.callVideoListApi();
      },
    );
  };

  loadMoreData = () => {
    this.setState(
      {
        pageIndex: this.state.pageIndex + 1,
      },
      () => {
        if (!this.state.isListFinished) {
          this.callVideoListApi();
        }
      },
    );
  };
  _onViewableItemsChanged = (props) => {
    const changed = props.changed;
    changed.forEach((item) => {
      const cell = this.cellRefs[item.key];
      if (cell) {
        if (!item.isViewable) {
          cell.pauseVideo();
        }
      }
    });
  };

  onClickProfile = () => {
    this.props.navigation.navigate(Routes.EditProfile);
  };
  renderFooterComponent = () => {
    const {pageIndex, isListFinish} = this.state;
    return !isListFinish && pageIndex !== 1 ? (
      <ActivityIndicator size={'large'} color={Color.orange} />
    ) : null;
  };
  onLoader = () => {
    this.setState({
      isLoader: true,
    });
  };
  offLoader = () => {
    this.setState({
      isLoader: false,
    });
  };
  render() {
    return (
      <View style={styles.maincontainer}>
        <StatusBar backgroundColor={Color.dark_white} barStyle="dark-content" />
        <ToolbarFeed onProfileListener={this.onClickProfile} />
        <View style={{flex: 1, justifyContent: 'center'}}>
          {this.state.isLoader ? (
            <ActivityIndicator color={Color.orange} size={'large'} />
          ) : (
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refresh}
                  onRefresh={this.onRefresh}
                />
              }
              onViewableItemsChanged={this._onViewableItemsChanged}
              showsVerticalScrollIndicator={false}
              overScrollMode="never"
              ListFooterComponent={this.renderFooterComponent}
              onEndReached={() => this.loadMoreData()}
              onEndReachedThreshold={0.3}
              contentContainerStyle={styles.listcontainer}
              data={this.state.videoList}
              renderItem={this.renderVideoItem}
              style={{backgroundColor: Color.sky_white}}
              initialNumToRender={5}
              viewabilityConfig={viewabilityConfig}
              removeClippedSubviews={true}
            />
          )}
        </View>
        <ModalNetwork
        isModalOpen={this.state.networkModal}
        closeNetworkModal={this.offNetworkModal}
        callApi={this.state.callRetryApi}
        netInfo={this.state.modalInfo}
        />
      </View>
    );
  }
}

export default MyFeedScreen;
