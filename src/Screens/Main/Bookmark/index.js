import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {styles} from '../Bookmark/Style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Bookmark = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchiconview}>
        <FontAwesome name="bookmark-o" size={30} color={'#212F3D'} />
      </View>
      <Text style={styles.searchtext}>
        Go to wiki articles or news to bookmark them
      </Text>
    </SafeAreaView>
  );
};

export default Bookmark;
