import Navigation from "./src/Navigation";
import React, {useState, useEffect} from 'react';
import NetInfo from "@react-native-community/netinfo";
import { View, ScrollView, Text} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


export default function App() {
  const [checkConection, setCheckConection] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {

        NetInfo.fetch().then(state => {
          console.log("Connection type", state.type);
          console.log("Is connected?", state.details);
          if(state.isInternetReachable == true){
          setCheckConection(true);
          console.log(checkConection);
          }else{
            setCheckConection(false)
            console.log(checkConection);
          }
        });
      
       
      
  });
  unsubscribe();
    }); 
   

  return (
  <>
    {checkConection ? (
    <Navigation/>
  ):(
    <SafeAreaView>
    <Text>Necesitas estar conectado a internet</Text>
    </SafeAreaView>
    
  )} 
  </>
  )
}