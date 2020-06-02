import React, {Component} from 'react';
import {View, Modal, TouchableOpacity, Text, Image} from 'react-native';

import styles from './index';
import AppImages from '../../assets/images/index';
import String from '../../utils/string';

class ModalNetwork extends Component {
  render() {
    const {isModalOpen, closeNetworkModal, callApi, netInfo} = this.props;
    return (
      <Modal
        animationType={'fade'}
        onRequestClose={closeNetworkModal}
        transparent={true}
        visible={isModalOpen}>
        <View style={styles.vContainer}>
          <Image
            style={styles.iNoNetwork}
            source={AppImages.ic_no_network}></Image>
          <Text style={styles.tNoNetwork}>{String.Error}</Text>
          <Text style={styles.tPleaseConnect}>{netInfo}</Text>
          <TouchableOpacity
          activeOpacity={0.8}
            style={styles.toRetry}
            onPress={() => {
              this.props.closeNetworkModal(callApi);
            }}>
            <Text style={styles.tRetry}>
              {String.Retry}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}
export default ModalNetwork;
