import React,{useState,useEffect} from "react";
import { View, Text,StyleSheet,SafeAreaView,TouchableOpacity, Keyboard, TextInput, Button}  from 'react-native'



export default function App(props) {
const [bill,setBill]  = useState('')
const [tip,setTip]  = useState(0)
const [pct,setPct] = useState(10)



  function calc(){
    let nBill = parseFloat(bill)
    if(nBill){
      setTip((pct/100) * nBill)
    }
  }



  useEffect( ()=>{

calc()

Keyboard.dismiss()


  },[pct])

  return (
     <View style={styles.container}>
      <Text style={styles.title}>Calculadora gorjeta</Text>
      <TextInput onChangeText={n =>setBill(n)} placeholderTextColor={'#8456'}  keyboardType={"numeric"} style={styles.input}  placeholder="Digite o valor total da conta"/>
     <View style={{flexDirection: 'row', margin: 12}}>
      <Button  style={styles.btn} title="5%" onPress={()=>setPct(5)}/>
      <Button   style={{margin: 20}} title="10%" onPress={()=>setPct(10)}/>
      <Button   style={styles.btn} title="15%" onPress={()=>setPct(15)}/>
      <Button  style={styles.btn} title="20%" onPress={()=>setPct(20)}/>
     </View>
   <Button backgroundColor="red" title={`Calcular ${pct}%`}onPress={calc}/>
             
   

{ tip > 0 &&
  <View style={styles.resultado}>
    <Text style={styles.textResult}>Total da conta</Text>
    <Text style={styles.valor}>R$: {parseFloat(bill).toFixed(2)}</Text>
    <Text style={styles.textResult}>Total da gorjeta</Text>
    <Text style={styles.valor}>R$: {tip.toFixed(2) } ({pct}%)</Text>
    <Text style={styles.textResult}>Total da conta e gorjeta</Text>
    <Text style={styles.valor}>R$: {(parseFloat(bill) + tip).toFixed(2)}</Text>
   </View>
}
   
     </View>
  
  );


}






const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff'

  },

  title:{
    marginTop: 14,
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 6
  },
  input:{
    marginTop: 10,
    width: '90%',
    backgroundColor: '#ddd',
    padding: 8,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,

  },

  btn:{
    marginTop: 14,
    width: '90%',
    backgroundColor: '#884430',
    height: 50,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '500'
  },
  resultado:{
    padding: 20,
    width: '90%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10
  },
  textResult:{
    fontSize: 22,
    textAlign: 'center',
    color: '#000'
  },

  valor:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#884430',
    padding: 6,
    borderRadius: 5

  },
  btn:{
    margin: 8
  }


})

