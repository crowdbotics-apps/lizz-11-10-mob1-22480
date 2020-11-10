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
      <Text>Sample text content</Text>
      <Image
        resizeMode="contain"
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/cb-login-logo_NDO3INF.png"
        }}
      />
      <View style={styles.View_14}>
        <View>
          <Button
            title="Like"
            color="#c6d3fb"
            onPress={() => alert("Pressed!")}
          />
        </View>
        <View style={styles.View_16}>
          <Button
            title="Dislike"
            color="#e2c7f5"
            style={styles.Button_19}
            onPress={() => alert("Pressed!")}
          />
        </View>
      </View>
      <Text>Sample text content</Text>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  View_1: {},
  Text_2: {},
  Image_4: {},
  View_14: { width: "100%", flexDirection: "row" },
  View_15: {},
  Button_18: {},
  View_16: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  Button_19: {
    paddingTop: 15,
    paddingBottom: 15,
    fontFamily: "Montserrat-Regular",
    borderWidth: 4,
    borderRadius: 24,
    textTransform: "uppercase"
  },
  Text_20: {},
  Button_21: {}
})
