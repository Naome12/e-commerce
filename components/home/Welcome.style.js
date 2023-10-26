import { StyleSheet } from "react-native";
import { SIZES,COLORS } from "../../constants";

const styles= StyleSheet.create({
    container: {
        width:"100%",
    },
    welcomeTxt:(color,top)=>({
        fontFamily:"bold",
        fontSize:SIZES.xxlarge-5,
        marginTop:top,
        color:color,
        marginHorizontal:12
    }),
    searchContainer:{
        flex:"row",
        justifyContent:"center",
        alignContent:"center",
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.medium,
        marginVertical:SIZES.medium
    },
    searchIcon:{
        marginHorizontal:10,
        color:COLORS.gray
    },
    searchWrapper:{
        flex:1,
        backgroundColor:COLORS.secondary,
        marginRight:SIZES.small,
        borderRadius:SIZES.small,
    }
})

export default styles