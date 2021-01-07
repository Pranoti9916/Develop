import {Dimensions, Platform, StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tuduText: {
        marginTop: 30,
        color: '#4A90E2',
        fontFamily: 'SF Pro Text',
        fontSize: 40,
        marginBottom: 84,
    },
    inputText: {
        width: 305,
        height:61,
        borderRadius: 30,
        borderWidth: 1,
        marginBottom: 32,
        backgroundColor: 'white',
        fontFamily: 'Microsoft Sans Serif',
        fontSize: 15,
        justifyContent:'center',
        borderColor: 'rgba(151,151,151,0.44)',
        paddingLeft:Platform.OS==='ios'?32:16,
        // ...Platform.select({
        //   ios: {
        //     justifyContent:'center',
        //    // paddingBottom: 22,
        //    // paddingTop: 22,
        //     paddingLeft: 32,
        //   },
        //   android: {
        //     // paddingBottom: 10,
        //     // paddingTop: 10,
        //     paddingLeft: 16,
        //   },
        // }),
    },
    button: {
        width: 173,
        borderRadius: 30,
        height: 63,
        backgroundColor: '#4A90E2',

        marginTop: 58,

        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 21,
        fontFamily: 'SF Pro Text',
    },
    signupOption: {
        marginTop:Platform.OS==='android'?55:110,
        fontFamily: 'Microsoft Sans Serif',
        fontSize: 20,
    },
    signUpLink: {
        color: '#4A90E2',
    },
    bgImage: {
        width: Math.round(Dimensions.get('window').width),
        height: Math.round(Dimensions.get('window').height),
    },
    combinedShape: {
        borderColor: '#979797',
        borderWidth:  0.8,
        borderStyle: 'solid',
    }

});


export default Styles;
