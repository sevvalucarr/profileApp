import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from './components/ProfileCard';


const profiles = [
  {
    name: "Cahit Arf", 
    role: "Mathematician & Scientist",
    imageSource: require('./assets/Cahit_arf.jpg'), 
  },
  {
    name: "Nazım Hikmet", 
    role: "Poet & Playwright",
    imageSource: require('./assets/nazım.webp'),
  },
  {
    name: "Aziz Sancar", 
    role: "Biochemist & Nobel Laureate",
    imageSource: require('./assets/aziz.jpg'),
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
    backgroundColor: '#c2c2c2ff', 
  },
  innerView: {
    padding: 20, 
  },
});