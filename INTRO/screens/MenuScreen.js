import { Text, StyleSheet, View, Button, } from 'react-native' //Esqueleto de Menu
import React, { useState } from 'react' 
import BotonesScreen from './BotonesScreen';
import ContadorScreen from './ContadorScreen';
import TextInputAlertScreen from './TextInputAlertScreen';
import ImageBackGroundSplashScreen from './ImageBackGroungSplashScreen';
import RepasoScreen from './RepasoScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatSectionListScreen from './FlatSectionListScreen';
import ModalScreen from './ModalScreen';



export default function MenuScreen() {
  const [screen, setScreen] = useState('Menu');
  switch(screen){
    case'contador':
        return <ContadorScreen/>;
    case'botones':
        return <BotonesScreen/>;
    case'input&alert':
        return <TextInputAlertScreen/>;
    case'ImageBackSplash':
        return <ImageBackGroundSplashScreen/>;
    case'Repaso':
        return <RepasoScreen/>;
    case'scrollview':
        return <ScrollViewScreen/>;
    case'activityindicator':
        return <ActivityIndicatorScreen/>;
    case'flatsectionlist':
        return <FlatSectionListScreen/>;
    case'modal':
        return <ModalScreen/>;
    case'menu': //Si no se seleccionó ninguno
        default:
        return (
            <View style={styles.botonesCon}>
                <Text style={styles.texto}>  Menu de Practicas </Text>
                <Button color='grey' onPress={()=>setScreen('contador')} title='Pract: Contador'></Button>
                <Button color='grey' onPress={()=>setScreen('botones')} title='Pract: Botones'></Button>
                <Button color='grey' onPress={()=>setScreen('input&alert')} title='Pract: Input & Alert'></Button>
                <Button color='grey' onPress={()=>setScreen('ImageBackSplash')} title='Pract: ImageBackground Splash'></Button>
                <Button color='grey' onPress={()=>setScreen('Repaso')} title='Pract: Repaso'></Button>
                <Button color='grey' onPress={()=>setScreen('scrollview')} title='Pract: ScrollView'></Button>
                <Button color='grey' onPress={()=>setScreen('activityindicator')} title='Pract: Activity Indicator'></Button>
                <Button color='grey' onPress={()=>setScreen('flatsectionlist')} title='Pract: Flat List & Section List'></Button>
                <Button color='grey' onPress={()=>setScreen('modal')} title='Pract: Modal'></Button>
            </View>
    )
  }
    
}

const styles = StyleSheet.create({
    botonesCon:{
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop:5,
        gap:10,
    },
    texto:{
        color:'black',
        fontSize:30,
        fontFamily:'Times New Roman',
        fontWeight:'bold',
        fontStyle:'italic',
    },
});