import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants/index'

const styles= StyleSheet.create({
    searchContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
        marginHorizontal:SIZES.small,
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        marginVertical:SIZES.medium,
        height:50,
    },
    searchIcon:{
        marginTop:SIZES.small,
        marginHorizontal:SIZES.small-2,
        color:COLORS.gray
    },
    searchWrapper:{
        flex:1,
        backgroundColor:COLORS.secondary,
        marginRight:SIZES.small,
        borderRadius:SIZES.small,
    },
    searchInput:{
        fontFamily:"regular",
        width:"100%",
        height:"100%",
        paddingHorizontal:SIZES.small,
        outlineWidth: 0
    },
    searchBtn:{
        width:50,
        height:"100%",
        borderRadius: SIZES.small,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:COLORS.primary
    }
})

export default styles