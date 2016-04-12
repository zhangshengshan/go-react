import React, {PropTypes, Component} from 'react';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import LightRawThem from 'material-ui/lib/styles/baseThemes/lightBaseTheme'

export default function withMaterialUI(ComposedComponent) {
    return class MaterialUI extends Component {
        static childContextTypes = {
            muiTheme: PropTypes.object
        }

        getChildContext() {
            return {
                muiTheme: getMuiTheme(LightRawThem)
            }
        }

        render() {
            const {context, ...other} = this.props;
            return <ComposedComponent {...other} />
        }
    };
}