import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from './components/ProfileCard';


const profiles = [
  {
    name: "Rose", 
    role: "Flower",
    imageSource: require('./assets/gul.jpg'), 
  },
  {
    name: "Daisy", 
    role: "Flower",
    imageSource: require('./assets/papatya.jpg'),
  },
  {
    name: "Peony", 
    role: "Flower",
    imageSource: require('./assets/sakayik.jpg'),
  },
];


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.innerView}>
          
          <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 15 }}>Profiles</Text>
          
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index} 
              name={profile.name}
              role={profile.role}
              imageSource={profile.imageSource}
            />
          ))}
          
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f0f2f5', 
  },
  innerView: {
    padding: 20, 
  },
});