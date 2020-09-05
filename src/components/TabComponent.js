import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor'
import TabDevices from './tabs_nav/TabDevices'
import TabPrice from './tabs_nav/TabPrice'
import TabContentOne from '../components/TabContentOne'
import '../css/TabsNav.css'
import TabContentTwo from '../components/TabContentTwo';
import TabContentThree from '../components/TabContentThree';
import Footer from '../components/Footer'


class TabComponent extends Component {
    state={
      tabIndex : 0
    }
    render() {
        return (
            <div>
                <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex=>
                this.setState({tabIndex})}>
                    <TabList className="tabs-nav-container">
                        <Tab className={`${this.state.tabIndex===0 ? 'tab-selected active' : null}`}><TabDoor/>
                        <p><strong>NO COMMITMENTS<br/>
                        CANCEL ANYTIME ONLINE</strong></p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex===1 ? 'tab-selected active' : null}`}>
                            <TabDevices/>
                        <p style={{marginTop:'-5.3125rem'}}><strong>
                            WATCH ANYWHERE</strong></p>
                        </Tab>
                        <Tab className={`${this.state.tabIndex===2 ? 'tab-selected active' : null}`}>
                            <TabPrice/>
                        <p><strong>
                            Pick your price</strong></p>
                        </Tab>
                    </TabList>
                    {/* Tab contenst */}
                      <TabPanel>
                          <TabContentOne/>
                          
                      </TabPanel>

                      <TabPanel>
                          <TabContentTwo/>
                          
                      </TabPanel>

                      <TabPanel>
                          <TabContentThree/>
                          
                      </TabPanel>
                      
                </Tabs>
            </div>
        )
    }
}

export default TabComponent;