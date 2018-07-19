import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} ></CardTitle>
            <CardText>
              Simple React Calculator
            </CardText>
            <CardActions border style={{padding: '20px'}}>
              <a href="https://github.com/ketankshukla/ketan-react-calc" rel="noopener noreferrer" target="_blank"><Button colored raised ripple style={{margin: '20px'}}>GitHub</Button></a>
              <a href="https://ketan-react-calc.herokuapp.com" rel="noopener noreferrer" target="_blank"><Button colored raised ripple style={{ margin: '20px' }}>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} ></CardTitle>
            <CardText>
              Emoji Search
            </CardText>
            <CardActions border style={{ padding: '20px' }}>
              <a href="https://github.com/ketankshukla/ketan-emoji-search" rel="noopener noreferrer" target="_blank"><Button colored raised ripple style={{ margin: '20px' }}>GitHub</Button></a>
              <a href="https://ketan-emoji-search.herokuapp.com" rel="noopener noreferrer" target="_blank"><Button colored raised ripple style={{ margin: '20px' }}>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} ></CardTitle>
            <CardText>
              This portfolio
            </CardText>
            <CardActions border style={{ padding: '20px' }}>
              <a href="https://github.com/ketankshukla/ketan-portfolio" rel="noopener noreferrer" target="_blank"><Button colored raised ripple style={{ margin: '20px' }}>GitHub</Button></a>
              <a href="https://ketan-portfolio.herokuapp.com" rel="noopener noreferrer" target="_blank"><Button colored raised ripple style={{ margin: '20px' }}>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover' }} ></CardTitle>
            <CardText>
              Shopping cart
            </CardText>
            <CardActions border style={{ padding: '20px' }}>
              <a href="https://github.com/ketankshukla/ketan-shopping-cart" rel="noopener noreferrer" target="_blank"><Button colored raised ripple style={{ margin: '20px' }}>GitHub</Button></a>
              <a href="https://ketan-shopping-cart.herokuapp.com" rel="noopener noreferrer" target="_blank"><Button colored raised ripple style={{ margin: '20px' }}>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>VueJS</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
