import React, { PureComponent } from 'react';
import { ScrollView, Text, View } from 'react-native';
import PropTypes from 'prop-types';
export default class index extends PureComponent {
    static propTypes = {
        state: PropTypes.object,
    };
    render() {
        const { state } = this.props;
        const content = state ? JSON.stringify(state, null, 2) : '';
        return (
            <ScrollView>
                <ScrollView horizontal>
                    <View>
                        <Text>{content}</Text>
                    </View>
                </ScrollView>
            </ScrollView>
        );
    }
}
