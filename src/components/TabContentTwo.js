import React from 'react'
import {Button} from './Button'
import styled from 'styled-components'
import tv from '../images/tab-tv.png'
import tablet from '../images/tab-tablet.png'
import macbook from '../images/tab-macbook.png'

export default function TabContentTwo() {
    return (
        <TabContainer>
            <div className='Tab-content'>
                <div className='tab-top-content'>
                     <span style={{fontSize:'1.5rem'}}>Tv shows and movies anytime,anywhere-personalised for you</span>
                     <Button className="btn">Try it now</Button>
                </div>
                {/* tab content bottom */}
                <div className="tab-content-bottom">
                    {/* tv image container */}
                     <div>
                         <img src={tv} alt='first image of tabcontenttwo' style={{width:'18.75rem'}}/>
                         <h3>Watch on your TV</h3>
                         <p>Smart Tvs, playstations,xbox , chromecast, Apple TV, Blueray players and more</p>
                     </div>
                      {/* tablet image container */}
                      <div>
                         <img src={tablet} alt='first image of tabcontenttwo' style={{width:'18.75rem',paddingTop:'0.625rem'}}/>
                         <h3>Watch on your TV</h3>
                         <p>Smart Tvs, playstations,xbox , chromecast, Apple TV, Blueray players and more</p>
                     </div>
                      {/* tv image container */}
                      <div>
                         <img src={macbook} alt='first image of tabcontenttwo' style={{width:'18.75rem',paddingTop:'0.625rem',paddingBottom:'0.625rem'}}/>
                         <h3>Watch on your TV</h3>
                         <p>Smart Tvs, playstations,xbox , chromecast, Apple TV, Blueray players and more</p>
                     </div>
                </div>

            </div>
        </TabContainer>
    )
}

// main tab content container
const TabContainer = styled.div`
     background:var(--main-deep-dark);
     .Tab-content {
         margin:0 15%;

     }
     //tab top content
     .tab-top-content {
         display:grid;
         grid-template-columns:repeat(12, 1fr);
         justify-content:center;
         align-item:center;
         padding: 2.5rem 0;
     }
     span {
         grid-column:1 / 8;
     }
     .btn {
         margin:0 1.25rem 1.25rem;
         grid-column:10 / 12;
     }
      //tab container bottom
      .tab-content-bottom{
        display:grid;
        grid-template-columns:repeat(3, 1fr);
        grid-gap:2rem;
        justify-content:center;
        margin-top:2rem;
        align-item:center;
        padding: 2.5rem 0; 
      }
      h3 {
          margin: 0.5rem 0;
      }
      p {
          color:var(--main-grey)
      }

`;