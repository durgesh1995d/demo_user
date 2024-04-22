import React from 'react';
 

let colors = {
    primary: '#b12a30',
    secondary: '#026978',
    transparent: 'rgba(52, 52, 52, 0.8)',
    white: '#fff',
    fontWhite: 'f8f9fc',
    black: '#000',
    gray: '#4d4a4d',
    gray1: '#E9E9E9',
    darkblue: '#166B7A',
    lightBlueBg: '#F8F8F8',
    grey2: '#535868',
    grey3: '#333333',
    green: '#0F9E3F',
    yellow: '#E1E000',
    purple: '#006475',
    red: '#D60A0A',
    lightRed: '#fdf1f7',
    lightGray: '#c9c9c9',
    lightGray1: '#F5F5F5',
    lightGray2: '#898989',
    lightGray3: '#B3B3B3',
    lightGray4: '#cfcfcf',
    lightGray6: '#8d8d8d',
    lightGray7: '#f8f8f8',
    lightGray8: '#ececec',
    tabBarIcon: '#707070',
    darkGray: '#A1A1A1',
    placeholderText: '#787878',
    secondaryBg: '#1C00D4',
    lime: '#A33635',

    //    class
    lightGrey7: '#474b5c',
    lightGrey8: '#9f9f9f',
    lightGray9: '#eeeeee',
    blue: '#217482',
    blueBg: '#04BCB2',
    linkColor: '#3366BB',
    lightblue1: '#85B6BE',
    black2: '#3c3c3c',
    black1: '#000000',
    lightGreen: '#80B4BB',
    secondaryBgg: "#20418a",
    limeBgg: '#f38f7b'
};

export const theme = {
    colors,
    borderRadius: {
        xs: 2,
        x: 5,
        m: 10,
        l: 15,
        xl: 25,
    },
    spacing: {
        xs: 4,
        s: 8,
        sm: 10,
        m: 16,
        l: 24,
        xl: 40,
    },
    textVariants: {
        // New Fonts
        title1: {
            fontSize: 31,
            fontFamily: 'Poppins-Bold',
        },
        title: {
            fontSize: 29,
            fontFamily: 'Poppins-Bold',
        },
        headerBg1: {
            fontSize: 26,
            fontFamily: 'Poppins-SemiBold',
            lineHeight: 26,
            color: '#20283a',
        },
        header: {
            fontSize: 24,
            fontFamily: 'Poppins-SemiBold',
            lineHeight: 26,
            color: '#20283a',
        },
        headers1: {
            fontSize: 22,
            fontFamily: 'Poppins-SemiBold',
            lineHeight: 26,
            color: '#20283a',
        },
        subHeader1: {
            fontSize: 21,
            fontWeight: '400',
        },
        subHeader: {
            fontSize: 20,
            fontWeight: '400',
        },
        subHeading: {
            fontSize: 18,
            fontFamily: 'Poppins-Medium',
        },
        header1: {
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
            lineHeight: 19,
            color: '#000000',
        },
        header2: {
            fontSize: 14,
            fontFamily: 'Poppins-SemiBold',
        },
        buttonTitle: {
            fontSize: 13,
            fontFamily: 'Poppins-Medium',
        },
        header3: {
            fontSize: 12,
            fontFamily: 'Poppins-Medium',
        },
        headH4: {
            fontSize: 10,
            fontFamily: 'Poppins-Medium',
        },
        body: {
            fontSize: 8,
            fontFamily: 'Poppins-Regular',
        },
    },
    typography: {
        heading: {
            c: colors.lightGray3,
            s: 20
        },
        subHeading: {
            c: colors.lightGray3,
            s: 18
        },
        title: {
            c: colors.gray,
            fontFamily: 'System',
            s: 16
        },
        subTitle: {
            c: colors.lightGray2,
            fontFamily: 'System',
            s: 14
        },
        headH1: {
            c: colors.black,
            fontFamily: 'System',
            s: 40
        },
        headH2: {
            c: colors.black,
            w: '600',
            fontFamily: 'System',
            s: 34
        },
        headH3: {
            c: colors.black,
            fontFamily: 'System',
            s: 30
        },
        headH4: {
            c: colors.black,
            fontFamily: 'System',
            s: 24
        },
        headH14: {
            c: colors.black,
            fontFamily: 'System',
            s: 22
        },
        headH5: {
            c: colors.black,
            fontFamily: 'System',
            s: 18
        },
        headH6: {
            c: colors.black,
            fontFamily: 'System',
            s: 16
        },
        body: {
            c: colors.black,
            fontFamily: 'System',
            s: 14
        },
        body2: {
            c: colors.black,
            fontFamily: 'System',
            s: 12
        },
        body3: {
            c: colors.black,
            fontFamily: 'System',
            s: 11
        },
        caption: {
            c: colors.black,
            fontFamily: 'System',
            s: 10
        }

    },
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 6,
    },
    topBarShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 6.27,
        elevation: 10
    }
};
 
 
 