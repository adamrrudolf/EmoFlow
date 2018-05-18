import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from 'material-ui/styles/colors';
import { fade } from 'material-ui/utils/colorManipulator'

const getTheme = () => {
  let overwrites = {
    "palette": {
        "primary1Color": Colors.deepPurple500,
        "primary2Color": Colors.deepPurple200,
        "pickerHeaderColor": Colors.deepPurpleA100,
        "accent1Color": Colors.blueGrey700
    }
};
  return getMuiTheme(baseTheme, overwrites);
}

export default getTheme;