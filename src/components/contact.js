import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Ketan Shukla</h2>
            <img
              src="https://avatars0.githubusercontent.com/u/13595476?s=400&u=21f29b20b242b3517230810b0feac71bda4eebb4&v=4"
              alt="avatar"
              style={{height: '250px'}}
               />
            <p>Passionate software developer with experience in mid to large-scale projects</p>
            <p>Technically astute with an aptitude to understand and deliver on the client needs within time and budget</p>
            <p>Able to communicate technical concepts in layperson's terms to audiences of a non-technical nature</p>
            <p>Mentoring and empowering the team to develop test driven code based on agile methodology</p>
            <p>Understand and deliver value to the customer based on the desired user experience</p>
            <p>Application development experience from conception to deployment; the entire SDLC</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (858) 707-5010
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    ketankshukla@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    ketankshukla
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
