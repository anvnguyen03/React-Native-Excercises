import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const IntroductionScreen: React.FC<{ navigation: any }> = ({ navigation }) => {

    const [timer, setTimer] = useState<number>(10)

    useEffect(() => {
        const timer = setInterval(() => {
            setTimer((prevTime) => {
              if (prevTime === 1) {
                navigation.replace('Homepage')
                clearInterval(timer)
                return 0
              }
              return prevTime - 1
            })
          }, 1000)
      
          return () => clearInterval(timer)
    }, [navigation])

    useEffect(() => {

    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello! My name is Nguyễn Việt An - 21110118.</Text>
            <Text style={styles.subtitle}>Welcome to my react native app!</Text>
            <Text style={styles.subtitle}>Chuyển hướng đến HomePage trong {timer}</Text>
        </View>
    );
};

export default IntroductionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
  },
});