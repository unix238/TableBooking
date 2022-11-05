import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Camera } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
import res1 from "../static/img/res1.jpeg";
import { useIsFocused } from "@react-navigation/native";

export default function App({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [scanned, setScanned] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const resData = [
    {
      id: "1",
      name: "The FLoat",
      image: res1,
      location: "Центральный парк отдыха",
    },
    {
      id: "2",
      name: "Mama's Kitchen",
      image: res1,
      location: "ул. Ауэзова, 109",
    },
    {
      id: "3",
      name: "Turandot",
      image: res1,
      location: "пр. Абая, 157 А, уг. ул. Розыбакиева",
    },
  ];
  const isFocused = useIsFocused();
  const access = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  };
  useEffect(() => {
    setIsActive(true);
    access();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    try {
      const scannedData = JSON.parse(data);
      const item = resData.filter((item) => item.id === scannedData.res)[0];
      console.log("ITEM:", item);
      navigation.navigate("menu", {
        screen: "Menu",
        params: item,
      });
    } catch (e) {
      alert(e);
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      {isFocused && (
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
      )}
      {scanned && (
        <View style={{ marginTop: 200 }}>
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  scanner: {
    width: 200,
    height: 200,
  },
});
