import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    root: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      backgroundColor: "#000"
    },
    header: {
      height: 200,
      backgroundColor: "#000",
    },
    menu: {
      display: "flex",
      flexDirection: "column",
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      paddingTop: 10,
      paddingHorizontal: 20,
      height: "100%",
      backgroundColor: "#fff",
    },
    links: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      paddingHorizontal: 50,
    },
    link:{
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    active: {
      borderBottomColor: "#DE3905",
      borderBottomWidth: 2,
    },
    form: {
      display: "flex",
      flexDirection: "column",
      marginVertical: 30
    },
    inputView: {
      display: "flex",
      flexDirection: "column",
      marginBottom: 10,
    },
    input: {
      backgroundColor: "#e5e5e5",
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderRadius: 10,
      color: "#000",
      marginBottom: 5,
    },
    forgotPassword: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      marginBottom: 10
    },
    forgotPasswordText: {
      color: "#eeeeee",
      fontSize: 10,
    },
    loginButton: {
      marginTop: 20,
    },
    textInput: {
      marginVertical: 12,
    }
  });
  