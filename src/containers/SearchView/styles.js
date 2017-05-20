import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 24,
      paddingHorizontal: 10, 
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        flex: 1,
        paddingHorizontal: 5,
        marginRight: 5,
        borderRadius: 5,
    },
    searchBtn: {
        backgroundColor: 'gray',
        borderColor: 'white',
        height: 40,
        width: 90,
    },
    listItem:{
        flex: 1,
        padding: 10,
        borderColor: '#C3C3C3',
        borderWidth: 0,
        borderBottomWidth: 1,
    },
    rowContainer:{  
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowImage:{
        width: 70,
        height: 70
    },
    rowDescText:{
        marginLeft: 5,
        fontSize: 14,
    },
    rowPriceText:{
        marginLeft: 5,
        paddingTop: 5,
        fontSize: 12,
        color:'gray',
    }
  });