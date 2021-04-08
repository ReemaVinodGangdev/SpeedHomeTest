
import React, {useState} from 'react';
import {
    View,
    Text,
    Modal,
    ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import config from '../config/AppStyles';

const ANIMATION = ['none', 'slide', 'fade'];
const SIZES = ['small', 'normal', 'large'];

const Spinner = ( props ) => {
    const [visible, setVisible] = useState(props.visible);

    const close = () => {
        setVisible(false);
    }

    const _handleOnRequestClose = () => {
        if (props.cancelable) {
            close();
        }
    }

    const _renderDefaultContent = () => {
        return (
            <View style={styles.background}>
                <View
                    style={{
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        height: 110,
                        borderRadius: 10,
                        width: 130,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <ActivityIndicator
                        color={config.color.COLOR_WHITE}
                        size={props.size}
                        style={{ flex: 1, position: 'absolute', top: 20 }}
                    />
                    <View style={styles.textContainer}>
                        <Text
                            style={[styles.textContent, props.textStyle]}>
                            {config.texts.LOADING}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }

    const _renderSpinner = () => {
        if (!visible) {
            return null;
        }

        const spinner = (
            <View
                style={[
                    styles.container,
                    { backgroundColor: props.overlayColor },
                ]}
                key={`spinner_${Date.now()}`}>
                {props.children
                    ? props.children
                    : _renderDefaultContent()}
            </View>
        );

        return (
            <Modal
                animationType={props.animation}
                onRequestClose={() => _handleOnRequestClose()}
                supportedOrientations={['landscape', 'portrait']}
                transparent
                visible={visible}>
                {spinner}
            </Modal>
        );
    }

    return _renderSpinner();
};

Spinner.propTypes = {
    visible: PropTypes.bool,
    cancelable: PropTypes.bool,
    textContent: PropTypes.string,
    animation: PropTypes.oneOf(ANIMATION),
    color: PropTypes.string,
    size: PropTypes.oneOf(SIZES),
    overlayColor: PropTypes.string,
};

Spinner.defaultProps = {
    visible: false,
    cancelable: false,
    textContent: '',
    animation: 'none',
    color: config.color.COLOR_WHITE,
    size: 'large',
    overlayColor: 'rgba(0, 0, 0, 0.5186966)',
};

export default Spinner;
