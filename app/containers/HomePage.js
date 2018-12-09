import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import echarts from "echarts";
import { mainListItems, secondaryListItems } from '../components/ListItems';
import setApplyCardData from '../actions/applyCardData';
import utils from '../utils';
const drawerWidth = 240;
const data = require('../actions/data.json');
console.log(data);
const handledData = utils.convertData(data);
const styles = (theme)=> ({
  root: {
    display: 'flex',
    marginTop: '50px',
    width: '100%',
    height: '90%'
  }
});
class Home extends React.Component {
  myChart = null;
  state = {
    open: true,
    applyCardData: setApplyCardData(handledData)
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };
  changeType() {
    const {applyCardData} = this.state;
    console.log(applyCardData);
    applyCardData.series.forEach(item=> {
      item.type = 'bar';
    })
    console.log(applyCardData);
    this.myChart.setOption(applyCardData);
  };
  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    const containerRef = this.refs['echart-container'];
    const myChart = this.myChart = echarts.init(containerRef);
    console.log(this.state.applyCardData)
    myChart.setOption(this.state.applyCardData);
    setTimeout(()=> {
      this.changeType();
    }, 3000)
  }
  render() {
    const { classes } = this.props;

    return (
      <div ref="echart-container" className={classes.root}>
      </div>
    );
  }
}

Home.propTypes = {
};

export default withStyles(styles)(Home);
