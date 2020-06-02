import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
  StatusBar,
} from 'react-native';
import styles from './style';
import String from '../../utils/string';
import ItemStrip from '../../component/itemstrip/itemstrip';
import ModalSelectedColor from '../../component/modalselectedcolor/modalselectedcolor'
import Method from '../../utils/methods';
import Color from '../../utils/color';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import StyleConfig from '../../assets/StyleConfig';

class TestStripScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen:false,
      testStripList: [],
      selectedColorList:[],
      isButtonClick:true,
    };
  }

  openModal=()=>{
    this.setState({
      isModalOpen:true
    })
  }
  closeModal=()=>{
    this.setState({
      isModalOpen:false
    })
  }
  

  onTapButton = (colorIndex, rowIndex) => {
    let stripDetail = String.StripColorList[rowIndex];
    stripDetail.SelectedColor =
      String.StripColorList[rowIndex].ColorList[colorIndex];
    this.setState({
      isButtonClick:true,
      testStripList: String.StripColorList,
    });
  };

  componentDidMount() {
    this.setState({
      testStripList: String.StripColorList,
    });
  }

  
  onChangeText = (index, text) => {
    let findNumber = Number(text);
    const closestObject =Method.getClosestValue(findNumber,index)
    let colorRawDetail = String.StripColorList[index];
    colorRawDetail.SelectedColor = closestObject;
    this.setState({
      isButtonClick:false,
      testStripList: String.StripColorList,
    
    });
  };
  onNextClick=()=>{
    let selectedColorList=[]
    this.openModal()
    String.StripColorList.forEach(item=>{
      let colorDetail={
        SelectedColor:item.SelectedColor,
        Title:item.Title
      }
      selectedColorList.push(colorDetail)
    })
    this.setState({
      selectedColorList:selectedColorList
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.safearea}>
         <StatusBar backgroundColor={Color.white} barStyle='dark-content'/>
   
          <TouchableOpacity style={styles.nextcontainer} activeOpacity={0.8} onPress={this.onNextClick}>
            <Text style={styles.next}>{String.Next}</Text>
          </TouchableOpacity>
          <Text style={styles.teststrip}>{String.TestStrip}</Text>
              <KeyboardAwareScrollView  
              bounces={false}
              enableOnAndroid
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps='always'
              extraHeight={StyleConfig.smartScale(200)}>
          <FlatList
            style={styles.stripdetailist}
            contentContainerStyle={styles.striplist}
            data={this.state.testStripList}
            extraData={this.state}
            renderItem={({item, index}) => {
              return (
                <ItemStrip
                  isButtonClick={this.state.isButtonClick}
                  item={item}
                  index={index}
                  changeText={this.onChangeText}
                  onButton={this.onTapButton}
                />
              )
            }}
            bounces={false}
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
          />
        </KeyboardAwareScrollView>
        <ModalSelectedColor
          selectedColorList={this.state.selectedColorList}
          isOpen={this.state.isModalOpen}
          closeListener={this.closeModal}
        />
      </SafeAreaView>
    );
  }
}

export default TestStripScreen;
