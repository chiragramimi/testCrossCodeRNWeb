import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LogementCard } from "@test/ui";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      {[1, 2, 3].map((e) => (
        <LogementCard
          key={e}
          data={{
            image: {
              uri: "https://www.challenges.fr/assets/img/2022/10/26/cover-r4x3w1200-63595fc246f00-20220404-02.jpg",
            }, // local image, or use a URI for remote images
            name: `Logement ${e}`,
            address: "4, Rue verbois\n75000 Paris",
            price: "2 852 €",
            occupationRate: 30, // for the slider
            occupationToDate: 90,
          }}
        />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
