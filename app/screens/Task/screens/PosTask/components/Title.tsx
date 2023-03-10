import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import Pressable from '@components/Pressable';

import { useState } from 'react';
import useTheme from '@hooks/useTheme'

import { Theme } from '@theme'

const Title = () => {
    const theme = useTheme()
    const [open, setOpen] = useState(false)

    return (
        <View style={getStyles(theme).titleContainer}>
            <Text style={getStyles(theme).title}>
                Grabación
            </Text>
            <Pressable onPress={() => setOpen(!open)}>
                <FontAwesome5
                    name="question-circle"
                    size={20}
                    color="black" />
                {
                    open && <View style={getStyles(theme).dialog}>
                        <View style={getStyles(theme).triangle}></View>
                        <Text style={getStyles(theme).dialogText}>Grábate diciendo la pregunta y su correspondiente respuesta.</Text>
                        <Text style={getStyles(theme).dialogText}><Text style={{ color: theme.colors.red }}>Recuerda:</Text> El audio debe durar más de 20 segundos </Text>
                    </View>
                }
            </Pressable>
        </View>
    )
}

const getStyles = (theme: Theme) =>
    StyleSheet.create({
        titleContainer: {
            flexDirection: 'row',
            marginHorizontal: 20,
            marginTop: 50,
            marginBottom: 130,
            alignItems: 'center',
            position: 'relative',
        },
        title: {
            color: theme.colors.black,
            fontSize: theme.fontSize.xxl,
            fontFamily: theme.fontWeight.bold,
            letterSpacing: theme.spacing.medium,
            marginRight: 10,
        },
        dialog: {
            position: 'absolute',
            top: -15,
            right: -190,
            backgroundColor: theme.colors.gray,
            width: 170,
            height: 'auto',
            borderRadius: theme.borderRadius.medium,
            paddingHorizontal: 10,
            paddingVertical: 5,
        },
        triangle: {
            position: 'absolute',
            top: 20,
            left: -15,
            width: 0,
            height: 0,
            borderLeftWidth: 10,
            borderRightWidth: 10,
            borderBottomWidth: 10,
            borderStyle: 'solid',
            backgroundColor: 'transparent',
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: theme.colors.gray,
            transform: [{ rotate: '-90deg' }],
        },
        dialogText: {
            color: theme.colors.black,
            fontSize: theme.fontSize.xs,
            fontFamily: theme.fontWeight.medium,
            letterSpacing: theme.spacing.medium,
            textAlign: 'left',
            marginVertical: 5,
        },
    })

export default Title