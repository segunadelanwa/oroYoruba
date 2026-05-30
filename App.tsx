 import React, { useEffect, useState } from 'react';
import {SafeAreaView,ScrollView,StatusBar, StyleSheet,Text,useColorScheme, View,Image } from 'react-native';
import HomeScreen from './components/HomeScreen';
import LoadingModal from './modal/LoadingModal';

import { Colors,DebugInstructions, Header, LearnMoreLinks, ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';


 
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingModal visible={loading} />

      {!loading && <HomeScreen />}
    </>
  );
}



//  function App(): React.JSX.Element {
  

 
//  return (
//     <SafeAreaView>
   
//       <ScrollView contentInsetAdjustmentBehavior="automatic"   >
         
      
           
//                   <View style={{ width: '100%', height: 1500, marginTop: 0 }}>
//                     <Image
//                       source={require('./assets/images/img_1.jpeg')}
//                       style={{
//                         width: '100%',
//                         height: '100%',
//                       }}
//                       resizeMode="cover"
//                     />
//                   </View>
            
      




//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
 
// });

// export default App;
