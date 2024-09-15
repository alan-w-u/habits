import { StyleSheet, Image, Platform, View, Text, TextInput, Button } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/cloud.png')}
          style={styles.banner}
        />
      }>
      <Text style={styles.title}>Friends</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchbar} placeholder='email address' />
        <Button title='Send' />
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#343a40',
    marginHorizontal: 'auto',
    textAlign: 'center',
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  banner: {
    height: 200,
    width: 400,
    position: 'absolute',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchbar: {
    width: 265,
    fontSize: 20,
    padding: 10,
    marginRight: 'auto',
    borderColor: '#eeeeee',
    borderWidth: 5,
    borderRadius: 10,
  },
});
