import React from 'react';
import './Footer.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub'

export default function Footer()
{
  return(<div id="footer_background">
            <h1 id="footer_title">Contact Information</h1>
            <div id="footer_contents">Email: HaoYuan.Chen@studentambassadors.com</div>
            <div id="footer_contents"><IconButton href="https://www.linkedin.com/in/markchen-cs-entrepreneur/">
              <LinkedInIcon label="LinkedIn"/>
            </IconButton>
            <IconButton href="https://github.com/MarkCodering">
              <GitHubIcon />
            </IconButton></div>
        </div>);
}