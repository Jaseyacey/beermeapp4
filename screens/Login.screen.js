// import * as WebBrowser from 'expo-web-browser';
// import * as Font from 'expo-font';
// import { Ionicons } from '@expo/vector-icons';
// import React from 'react';
// import {Image,Platform,ScrollView,StyleSheet,Text,View,} from 'react-native';
// import {Container, Header, Content, Form, Item, Input,Button} from 'native-base';
// import { MonoText } from '../components/StyledText';
// import navigationOptions from '../components/login.component';

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <ScrollView
//         style={styles.container}
//         contentContainerStyle={styles.contentContainer}>
//         <View style={styles.welcomeContainer}>
//           <Image
//             source={
//               __DEV__
//                 ? require('../assets/images/robot-dev.png')
//                 : require('../assets/images/robot-prod.png')
//             }
//             style={styles.welcomeImage}
//           />
//         </View>

//         <View style={styles.getStartedContainer}>
//           {/* <DevelopmentModeNotice /> */}

//           <Text style={styles.getStartedTextHeader}>beerMe</Text>
//           <Text style={styles.getStartedText}>
//             The Craft Beer Trading App
//           </Text>
//         </View>
//               <View>
//                   <Text style={styles.registerText}>Sign In!</Text>
//                   <Content>
//         </Content>
//         <Container>
//           <Header />
//           <Content>
//             <Form>
//               <Item>
//                 <Input placeholder="Email"/>
//               </Item>
//               <Item last> 
//                 <Input placeholder="Password" />
//               </Item>
//             </Form>
//             <Button rounded primary >
//               <Text textAlign="center">helpLink</Text>
//             </Button>
//           </Content>
//         </Container>
//               </View>
//       </ScrollView>
//     </View>
//   );
// }

// HomeScreen.navigationOptions = {
//   headerShown: 'false',
// };

// function DevelopmentModeNotice() {
//   if (__DEV__) {
//     const learnMoreButton = (
//       <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
//         Learn more
//       </Text>
//     );

//     return (
//       <Text style={styles.developmentModeText}>
//         Development mode is enabled: your app will be slower but you can use
//         useful development tools. {learnMoreButton}
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={styles.developmentModeText}>
//         You are not in development mode: your app will run at full speed.
//       </Text>
//     );
//   }
// }

// function handleLearnMorePress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/development-mode/'
//   );
// }

// function handleHelpPress() {
//   WebBrowser.openBrowserAsync(
//     'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
//   );
// }
// <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   getStartedTextHeader: {
//     fontSize: 70,  
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   registerText: {
//     paddingTop: 50, 
//     fontSize: 15,
//     color: "grey",
//     lineHeight: 25,
//     textAlign: 'center',
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });
