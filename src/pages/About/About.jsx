import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Skills from '../Skills';
import './About.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flexbox',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0),
            width: theme.spacing(100),
            height: theme.spacing(37),
          },
    }
}));


export default function About(){
    const classes = useStyles();
    return(
        <div id="About_background">
            <h1 id="About_title">About Mark</h1>
            <div className={classes.root}>
            <Paper>
                <div id="About_contents">My name is Mark, a computer science student and on-campus entrepreneur. I have found two start-up teams for the past year to participate in the competition, like Hult Prize or Tamkang University Entrepreneurial Competition. </div>
                <div id="About_contents">I am a tech entrepreneur with curiosity, imagination, and passion in mind. Most of the tech skills I learned is self-taught. From Azure operation to frontend programming, I envision a future where and when I can apply those skills to build a beneficial solution and business. </div>
                <div id="About_contents">The future of works is fast-changing and highly flexible. With at least two years of online meeting and collaboration experiences, I can contribute to Microsoft and my university with my tech skills, growth mindset, and entrepreneurial experiences to empower the students on-campus with the vision and capabilities they need for the future career.</div>
            </Paper>
            </div>
            <h2 id="About_subtitle">Skills</h2>
            <Skills/>
        </div>);
}