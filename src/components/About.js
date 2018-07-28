import React from 'react';
import { Typography, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const _About = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="display2" gutterBottom align="center">
      About Me
    </Typography>
    <Avatar
      alt="I'm Deepika"
      src="Deepika.jpeg"
      className={classes.avatar}
    />
    <Typography paragraph align="justify">
    My name is Deepika Garg, moved to Singapore in December 2017. I did my engineering in the year 2014 and after that I started teaching maths. 
    </Typography>
  <Typography paragraph align="justify">
    I am here on TechLadies bootcamp-4 to enhance my knowledge and develop concepts on programming. I have some basic knowlede of HTML, CSS and JavaScript, but after a long break from computers, latest programming techniques are missing from my knowledge so I found TechLadies as a best platform with best mentoring team where I have full freedom to apply my existing knowledge with new learning. 
    </Typography>
  </div>
);

const styles = {
  root: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  avatar: {
    width: '200px',
    height: '200px',
    margin: '0 auto',
    marginBottom: '20px',
  },
};

export const About = withStyles(styles)(_About);