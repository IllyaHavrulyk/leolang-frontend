import React, { Fragment, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';

import Toolbar from '@material-ui/core/Toolbar';
import { Tabs, Tab } from '@material-ui/core';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 10 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolBarMargin: {
    ...theme.mixins.toolbar,
  },
  logo: {
    height: '7em',
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px',
  },
}));

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (e, val) => {
    setValue(val);
  };
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            {/* <img src={logo} alt="Logo" className={classes.logo} />  */}
            <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
              <Tab className={classes.tab} label="Translate" />
              <Tab className={classes.tab} label="Services" />
              <Tab className={classes.tab} label="The Revolution" />
              <Tab className={classes.tab} label="About Us" />
              <Tab className={classes.tab} label="Contact Us" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin} />
    </>
  );
}
