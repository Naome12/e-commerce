import { StyleSheet } from 'react-native'
import { COLORS,SIZES } from '../constants'
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightwhite,
    },
    upperRow:{
        marginHorizontal:20,
        flexDirection:"row",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        position:"absolute",
        top:SIZES.xSmall-2,
        width:SIZES.width -44,
        zIndex:999
    },
    image:{
        aspectRatio:1,
        resizeMode:'cover',
    },
    details:{
        marginTop:-SIZES.large,
        backgroundColor:COLORS.lightwhite,
        width:SIZES.width,
        borderTopLeftRadius:SIZES.medium,
        borderTopRightRadius:SIZES.medium,
    },
    titleRow:{
        marginHorizontal:20,
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width: SIZES.width -44,
        top:20

    },
    title:{
        fontFamily:"bold",
        fontSize:SIZES.large,
    },
    ratingRow:{
        paddingBottom: SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginHorizontal:SIZES.large
    },
    rating:{
        top:SIZES.large,
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:SIZES.large
    },
    ratingText:{
        color:COLORS.gray,
        fontFamily:"medium"
    },
    price:{
        paddingHorizontal:10,
        fontFamily:"semibold",
        fontSize:SIZES.large,
    },
    priceWrapper:{
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.large,
    }
})

export default styles