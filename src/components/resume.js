import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://avatars0.githubusercontent.com/u/13595476?s=400&u=21f29b20b242b3517230810b0feac71bda4eebb4&v=4"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Ketan Shukla</h2>
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Passionate software developer with experience in mid to large-scale projects</p>
            <p>Technically astute with an aptitude to understand and deliver on the client needs within time and budget</p>
            <p>Able to communicate technical concepts in layperson's terms to audiences of a non-technical nature</p>
            <p>Mentoring and empowering the team to develop test driven code based on agile methodology</p>
            <p>Understand and deliver value to the customer based on the desired user experience</p>
            <p>Application development experience from conception to deployment; the entire SDLC</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Website</h5>
            <p><a href="http://ketan-portfolio.herokuapp.com">Portfolio</a></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
