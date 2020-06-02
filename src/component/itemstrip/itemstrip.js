import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import styles from './style';
import String from '../../utils/string';
import {connect} from 'react-redux';
import {onTextChange, onChangeColor} from '../../redux/actions';
import StyleConfig from '../../assets/StyleConfig';
import Color from '../../utils/color';

class ItemStrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorValue: '',
    };
  }

  onChangeTextHandle = (text) => {
    const {index, changeText} = this.props;
    this.setState({
      colorValue: text,
    });
    changeText(index, text);
  };
  onButtonTap = (colorIndex, rowIndex) => {
    const {onButton} = this.props;
    onButton(colorIndex, rowIndex);
  };
 
  componentDidMount() {
    const {index} = this.props;
    const selectColorValue =
      String.StripColorList[index].SelectedColor.ColorValue;
    this.setState({
      colorValue: selectColorValue.toString(),
    });
  }
  renderTopLine = (index) => {
    if (index === 0) {
      return <View style={styles.toplinecontainer} />;
    }
  };
  renderBottomLine = (index) => {
    if (String.StripColorList.length - 1 === index) {
      return <View style={styles.bottomlinecontainer} />;
    }
  };
  render() {
    const {item, index, isButtonClick} = this.props;

    return (
      <View style={styles.stripitemcontainer}>
        <View style={styles.selectcolorcontainer}>
          <View style={styles.verticalline} />
          {this.renderTopLine(index)}
          <View
            style={[
              styles.squarecolor,
              {backgroundColor: item.SelectedColor.ColorCode},
            ]}
          />
          <View style={styles.verticalline} />
          {this.renderBottomLine(index)}
        </View>
        <View style={styles.stripdetailcontiner}>
          <View style={styles.stripnamecontainer}>
            <Text style={styles.stripnamemain}>
              <Text style={styles.striptitle}>{item.Title}</Text>
              <Text style={styles.stripdescription}>
                {' ('}
                {item.Description}
                {')'}
              </Text>
            </Text>
            <TextInput
              style={styles.colorinput}
              maxLength={4}
              onChangeText={this.onChangeTextHandle}
              returnKeyType="done"
              value={isButtonClick?item.SelectedColor.ColorValue.toString():this.state.colorValue}
              keyboardType="decimal-pad"
              placeholder={String.PlaceHolder_Color}
            />
          </View>
          <View style={styles.colorlistcontainer}>
            {item.ColorList.map((colorItem, colorIndex) => {
              return (
                <View
                  style={[
                    styles.colormainview,
                    {
                      borderWidth:
                        item.SelectedColor.Id === colorItem.Id
                          ? StyleConfig.countPixelRatio(3)
                          : StyleConfig.countPixelRatio(3),
                      borderColor:
                        item.SelectedColor.Id === colorItem.Id
                          ? Color.kelly_green
                          : 'transparent',
                      padding:
                        item.SelectedColor.Id === colorItem.Id
                          ? StyleConfig.countPixelRatio(3)
                          : StyleConfig.countPixelRatio(3),
                    },
                  ]}>
                  <TouchableOpacity
                    onPress={() => {
                      this.onButtonTap(colorIndex, index);
                    }}
                    activeOpacity={0.8}
                    style={[
                      styles.colorview,
                      {
                        backgroundColor: colorItem.ColorCode,
                      },
                    ]}
                  />
                </View>
              );
            })}
          </View>
          <View style={styles.colorvaluecontainer}>
            {item.ColorList.map((item, index) => {
              return <Text style={styles.colorvalue}>{item.ColorValue}</Text>;
            })}
          </View>
        </View>
      </View>
    );
  }
}

export default ItemStrip;
