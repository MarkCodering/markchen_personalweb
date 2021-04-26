import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import BookIcon from '@material-ui/icons/Book';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TimelineIcon from '@material-ui/icons/Timeline';

const useStyles = makeStyles({
    root: {
      background: 'black',
      border: 0,
      height: 70,
      padding: '0 30px',
    }
});

export default function Nav(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return(
        <div id="Nav_Color">
            <BottomNavigation value={value} onChange={(event, newValue) => {setValue(newValue);}}
              showLabels
              className={classes.root}
            >
      <BottomNavigationAction label="Home" href="/" icon={<HomeIcon />} />
      <BottomNavigationAction label="About" href="/about" icon={<InfoIcon />} />
      <BottomNavigationAction label="Experiences" href="/experience" icon={<TimelineIcon/>}/>
      <BottomNavigationAction label="Blog" href="https://nextmarkchenblog.blogspot.com/" icon={<BookIcon />} />
      <BottomNavigationAction label="Youtube" href="https://www.youtube.com/channel/UCkPWNhP80z41tEDvuCMSfGQ" icon={<YouTubeIcon/>} /> 
    </BottomNavigation>
        </div>);
}