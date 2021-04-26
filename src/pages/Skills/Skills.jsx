import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ComputerIcon from '@material-ui/icons/Computer';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Web Programming" icon={<ComputerIcon />} {...a11yProps(0)} />
          <Tab label="Entrepreneurship" icon={<BusinessCenterIcon />} {...a11yProps(1)} />
          <Tab label="Public Speaking" icon={<SettingsVoiceIcon />} {...a11yProps(2)} />
          <Tab label="Problem-solving" icon={<ShoppingBasket />} {...a11yProps(4)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        HTML/CSS/React.js/Frontend Programming
      </TabPanel>
      <TabPanel value={value} index={1}>
        Start-up Team Founding/Start-up Management/Leadership
      </TabPanel>
      <TabPanel value={value} index={2}>
        Start-up Pitching/Public Speaking as MSLA
      </TabPanel>
      <TabPanel value={value} index={3}>
        Solving Technical and Business Problem
      </TabPanel>
    </div>
  );
}