import { View, Text,StyleSheet,TextInput} from "react-native";
import colors from "../colors";

export default function Input({
    label, 
    placeholder, 
    value, 
    onChangeText,
    ...rest }) 
    {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.mainText}>{label}</Text>}
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                placeholderTextColor={styles.mainText.color}
                value={value}
                onChangeText={onChangeText}
                {...rest}
            />        
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
    },
    textInput:{
        marginTop: 5,
        borderRadius:12,
        borderColor:colors.borderColor,
        borderWidth:0.5,
        height:50,
        backgroundColor: colors.inputBackground,
        padding:10,
        color: colors.textPrimary
    },
    mainText: {
        fontSize:18,
        marginLeft:10,
        color: colors.textPrimary
    }
});
