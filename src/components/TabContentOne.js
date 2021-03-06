import React from 'react'
import img from '../images/tab-1-pic.png'
import styled from 'styled-components'
import {Button} from './Button'

function TabContentOne() {
    return (
        <TabContentContainer>
          <div className="container">
              <div className="tab-content">
                  <div>
                 <span style={{marginBottom:'2rem'}}>If you decide that netflix is not for you- no problem .No commitment. Cancel anytime

                 </span>
                 <br/>
                 <Button style={{marginTop:'2rem'}}>Try it now</Button>
                 </div>
                 <img src={img} alt="first tab"/>
                 
              </div>
          </div>
        </TabContentContainer>
    )
}

export default TabContentOne;

const TabContentContainer = styled.div`
  background:var(--main-deep-dark);

  .container {
      margin:0 10%;

  }

  img {
      width:31.875rem;
  }
  .tab-content{
      display:grid;
      grid-template-columns:repeat(2,1fr);
      grid-gap:2rem;
      align-items:center;
      font-size:2rem;
      padding:2.5rem;
  }
`;
