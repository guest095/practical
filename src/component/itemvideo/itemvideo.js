import React, {Component} from 'react';
import {View, Image, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import styles from './index';
import Color from '../../utils/color'
import String from '../../utils/string'
import AppImages from '../../assets/images';
import moment from 'moment'
import StyleConfig from '../../assets/StyleConfig';

class ItemVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPause: true,
      isBuffering:true
    };
  }
  pauseVideo = () => {
    this.setState({
      isPause: true,
    });
  };

  playVideo = () => {
    this.setState({
      isPause: false,
    });
  };
  handlePlaying = (isVisible) => {
    if (!isVisible) {
      this.pauseVideo();
    }
  }
  onBuffer=({ isBuffering })=> {
  
    this.setState({ isBuffering });
  }

  render() {
    const {item,index} = this.props;
    console.log('ddsds')
    return (
      <View style={styles.maincontainer}>
          <TouchableOpacity
            style={{justifyContent: 'center'}}
            activeOpacity={1}
            onPress={this.pauseVideo}>
            <Video
            poster={`https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${item.thumb}`}
            posterResizeMode='cover'
              resizeMode="cover"
              source={{uri:item.sources[0]}}
              ref={(ref) => {
                this.video = ref;
              }}
              onBuffer={this.onBuffer}
              paused={this.state.isPause}
              style={styles.video}
            />
           {this.state.isBuffering ?
          <ActivityIndicator style={styles.indicator} size='large' color={Color.orange}/>:
            this.state.isPause ? (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.play}
              onPress={this.playVideo}>
              <Image style={styles.playicon} source={AppImages.ic_play} />
            </TouchableOpacity>
          ) : null}
             
          </TouchableOpacity>
        <View style={styles.bottomcontainer}>
         <View style={styles.timecontainer}>
         <Text style={styles.new}>{String.New}</Text>
         <View style={styles.space}/>
         <Text style={styles.date}>{moment(item.date).fromNow()}</Text>
         </View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.subtitle}</Text>
        </View>
      </View>
    );
  }
}
export default ItemVideo;


// <Video
//             ref={(ref: Video) => { this.video = ref }}
          
//             source={{uri:'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'}}
//             style={{width:StyleConfig.countPixelRatio(200),height:StyleConfig.countPixelRatio(50)}}
          
            
//           />