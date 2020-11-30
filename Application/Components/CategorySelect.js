import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';

const CatButton = (props) => {
    return (
        <TouchableOpacity style={{...styles.button, ...props.style}}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        //padding: 18,
        // marginRight:15,
       // marginBottom: 15,
        width: 77,

        height:40,
        borderRadius: 7,
    },
    text: {
        // height: 25,
        //
        // color: '#FFFFFF',
        // fontFamily: "SF Pro Text";
        // fontSize: 26,
        // fontWeight: 'bold',
        // lineHeight: 31,
        marginBottom: 13,
        marginTop: 13,
         marginLeft: 19,

        height: 14,
        color: '#FFFFFF',
        //font-family: "SF Pro Text";
    fontSize: 12,
//letter-spacing: 0;
// line-height: 14px;
    },
});

export default CatButton;
