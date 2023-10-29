import { StyleSheet } from "react-native";
import { SIZES,COLORS } from "../../constants";

const styles= StyleSheet.create({
    container: {
        width:"100%",
    },
    welcomeTxt:(color,top)=>({
        fontFamily:"bold",
        fontSize:SIZES.xxlarge-10,
        marginTop:top,
        color:color,
        marginHorizontal:SIZES.small +2,
    }),
    searchContainer:{
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        marginVertical:SIZES.medium,
        height:50,
    },
    searchIcon:{
        marginTop:SIZES.small,
        marginHorizontal:SIZES.small,
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
        paddingHorizontal:SIZES.small
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