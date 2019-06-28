import React, { PureComponent } from 'react';
import { ScrollView, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Style from './StateView.style';
/**
 * @author Mesaque Francisco <mesaquenf@gmail.com>
 * @since 2019-06-27
 */
export default class StateView extends PureComponent {
  static propTypes = {
    state: PropTypes.object,
  };
  render() {
    const { state } = this.props;
    const content = state ? JSON.stringify(state, null, 2) : '';
    return (
      <ScrollView horizontal>
        <ScrollView>
          <View style={Style.view}>
            <Text style={Style.text}>{content}</Text>
          </View>
        </ScrollView>
      </ScrollView>
    );
  }
}
