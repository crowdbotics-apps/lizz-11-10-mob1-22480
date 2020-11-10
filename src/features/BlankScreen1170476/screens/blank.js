import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Text style={styles.Text_3}>This is Screen 1</Text>
      <Button
        title="Press me!"
        color="#70fff5"
        onPress={() => alert("Pressed!")}
      />
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen0170474")}
      >
        <Icon name="chevron-circle-left" style={styles.Icon_43} />
      </TouchableOpacity>
      <Text>The above icon will navigate to screen 0 when pressed</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  Text_3: {
    fontSize: 24,
    color: "#07b8f2",
    fontFamily: "Merriweather-Regular",
    textAlign: "center"
  },
  Button_5: {},
  Icon_43: { color: "#9916df" },
  Text_45: {}
})
