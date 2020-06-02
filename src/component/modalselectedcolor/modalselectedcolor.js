import React, {Component} from 'react';
import styles from './style';
import {Image, View, Text, FlatList} from 'react-native';
import ModalBox from '../../component/modalbox/index';
import AppImages from '../../assets/images';

class ModalSelectedColor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSelectedColorItem = ({item, index}) => {
    const {SelectedColor, Title} = item;
    return (
      <View style={styles.mainrowcontainer}>
       <View style={styles.titlecontainer}>
        <Text style={styles.title}>{Title}</Text>
         <Text style={styles.value}>{SelectedColor.ColorValue}</Text>
       </View>
       <View style={[styles.colorstrip,{backgroundColor:SelectedColor.ColorCode}]}/>
      </View>
    );
  };

  render() {
    const {isOpen, closeListener, selectedColorList} = this.props;
    return (
      <ModalBox
        isOpen={isOpen}
        onClosed={closeListener}
        style={styles.modalcontainer}
        animationDuration={300}
        position="bottom"
        backButtonClose={true}
        coverScreen={true}>
        <Image
          style={styles.shapecontainer}
          source={AppImages.ic_shape_rectangle}
        />
        <FlatList
          bounces={false}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
          style={styles.list}
          data={selectedColorList}
          renderItem={this.renderSelectedColorItem}
        />
      </ModalBox>
    );
  }
}

export default ModalSelectedColor;
