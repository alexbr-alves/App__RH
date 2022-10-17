import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#f0f0f0',
    },
    header: {
        height: 100,
        backgroundColor: '#000000',
    },
    header__logo: {
        marginTop: 52,
        marginLeft: 20
    },
    body__title: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 24,
        lineHeight: 28,
        color: '#1c1c1c',
        fontFamily: 'Roboto_500Medium'
    },
    body__input__area: {
        height: 48,
        marginHorizontal: 20,
        marginTop: 28,
        marginBottom: 20,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
    },
    body__input__text: {
        paddingRight: 230,
        paddingLeft: 16,
        color: '#9E9E9E',
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'Roboto_400Regular'
    },
    body__input__logo: {
        marginRight: 20,
        height: 18,
        width: 18
    },
    body__list: {
        marginHorizontal: 20,
    },
    body_tableheader: {
        height: 47,
        backgroundColor: '#5984C0',
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",   
    },
    body_tableheader__foto: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        lineHeight: 19,
        color: "#ffffff",
        marginLeft: 15
    },
    body_tableheader__nome: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        lineHeight: 19,
        color: "#ffffff",
        marginRight: 30
    },
    body_tableheader__point: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#ffffff',
        marginRight: 25
    },
    body__list__smallCard: {
        flexDirection: 'row',
        height: 60,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderColor: 'gray'
    },
    body__list__foto: {
        height: 34,
        width: 34,
        borderRadius: 17,
        marginLeft: 16  
    },
    body__list__nome: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        lineHeight: 19,
        marginRight: 30
    },
    body__list__arrow: {
        marginRight: 20
    },
    body__list__extensionCard: {
        backgroundColor: '#ffffff',
        paddingVertical: 24
    },
    body__list__extensionCard__itens: {
        justifyContent: 'space-between',
        flexDirection: "row",
        marginLeft: 16,
        marginRight: 23,
        marginVertical: 8,
        borderBottomWidth: 1,
        borderStyle: 'dotted',
        borderColor: '#DFDFDF'
    },
    body__list__extensionCard__item__left: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
        lineHeight: 19
    },
    body__list__extensionCard__item__right: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        lineHeight: 19
    }

    
})