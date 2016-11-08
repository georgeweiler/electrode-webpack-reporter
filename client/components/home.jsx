import React, {PropTypes} from "react";
import {connect} from "react-redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardHeader, CardText} from "material-ui/Card";
import {Tabs, Tab} from "material-ui/Tabs";
import WebpackInfo from "./webpack-info";
import Legacy from "./legacy";
import WebpackAssets from "./webpack-assets";
import ModulesByPkg from "./modules-by-pkg";
import styles from "../styles/base.css";
import WebpackModules from './webpack-modules';
//////

const Home = (props) => {
  return (<div className={styles.container}>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Tabs>
          <Tab label="Report">   
            <WebpackInfo {...props.info} />
            <WarningsErrors errors={props.errors} warnings={props.warnings} />
            <div className={styles.leftColumn}>
              <WebpackModules pureWebpackStats={props.pureWebpackStats} modulesByPkg={props.modulesByPkg} totalSize={props.totalSizeByPkg}/>
            </div>
            <div className={styles.rightColumn}>
              <WebpackAssets assets={props.assets}/>
            </div>        
          </Tab>
          <Tab label="Legacy">
            <div style={ {background: "black", color: "gray", padding: "10px"} }>
              <Legacy legacy={props.legacy}/>
            </div>
          </Tab>
        </Tabs>
      </MuiThemeProvider>
    </div>);
};

Home.propTypes = {
  info: PropTypes.object,
  assets: PropTypes.object,
  modulesByPkg: PropTypes.object,
  warnings: PropTypes.array,
  errors: PropTypes.array,
  legacy: PropTypes.string,
  totalSizeByPkg: PropTypes.number
};

const mapStateToProps = (state) => state;

export default connect(
  mapStateToProps
)(Home);

