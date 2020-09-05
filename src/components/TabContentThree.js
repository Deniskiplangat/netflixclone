import React from 'react'
import styled from 'styled-components'
import {Button} from './Button'
import { Icon } from 'react-icons-kit'
import {cross} from 'react-icons-kit/icomoon/cross'
import {checkmark} from 'react-icons-kit/icomoon/checkmark'

function TabContentThree() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-content-top">
                    <span style={{fontSize:'1.5rem'}}>Choose one plan and watch everything on Netflix</span>
                    <Button className='btn'>TRY IT NOW</Button>
                </div>
                {/* tab bottom content */}
                <div className="tab-bottom-content">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Basic</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Monthly Price</td>
                                <td>$9.99</td>
                                <td>$13.99</td>
                                <td>$16.99</td>
                            </tr>
                            <tr>
                                <td>HD available</td>
                                <td><Icon icon={cross} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                               
                            </tr>
                            <tr>
                                <td>Ultra HD available</td>
                                <td><Icon icon={cross} size={10}></Icon></td>
                                <td><Icon icon={cross} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                               
                            </tr>
                            <tr>
                                <td>Screens you can watch on at the same time</td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                            </tr>
                            <tr>
                                <td>Unlimited movies and Tv shows</td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                            </tr>
                            <tr>
                                <td>Cancel anytime</td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                                <td><Icon icon={checkmark} size={10}></Icon></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </TabContainer>
    )
}

export default TabContentThree;

const TabContainer = styled.div`
   background:var(--main-deep-dark);

   .tab-content {
       margin:0 15%;
       padding-bottom:1%;
   }
   
  .tab-content-top {
      display:grid;
      grid-template-columns:repeat(12,1fr);
      padding:3rem 0 0;
  }

  span {
      grid-column:3 / 9;
  }
  .btn {
      grid-column:9 / 12;
      margin-left:3rem;
      margin-right:3.1rem;
  }
  //tab content bottom
  .tab-bottom-content {
      margin:2rem auto;
  }

  //table
  table {
      width:100%;
      margin-top:2rem;
      border-collapse:collapse;
  }

  table thead th {
      text-transform: uppercase;
      padding: 0.8rem;
  }
  table tbody {
      display:table-row-group;
      vertical-align:middle;
      border-color:inherit;
  }
  table tbody tr td {
      color:#999;
      padding:0.8rem 1.2rem;
      text-align:center;
  }
  table tbody tr td:first-child {
      text-align:left;
  }
  table tbody tr:nth-child(even){
      background:#222;
  }
`;