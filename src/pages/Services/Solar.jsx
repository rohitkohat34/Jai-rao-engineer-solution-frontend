import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './SolarService.css'
import heroImage1 from "../../assets/images/1200-675-20908254-thumbnail-16x9-pm-surya-ghar-scheme (1) (1).png";
import heroImage2 from "../../assets/images/On-Grid-Solar-Power-System (1).png";
import heroImage3 from "../../assets/images/Off-Grid-Solar-1.png";
import heroImage4 from "../../assets/images/hybrid-solar-panel-system-2.png";

import img from "../../assets/images/JRE STAMP SIGN.png"
import product1 from "../../assets/images/Untitled design (44).png";
import StoreContextProvider from "../../context/StoreContext";

// Product Data
const products = [
  { id: 1, name: "1KW", image: product1, Link:"/solarform"  },
  { id: 2, name: "2KW", image: product1,  },
  { id: 3, name: "3KW", image: product1,  },
  { id: 4, name: "4KW", image: product1, },
  { id: 5, name: "5KW", image: product1,  },
  { id: 6, name: "6KW", image: product1, },
];
const product = [
  { id: 7, name: "5KW", image: product1,  },
  { id: 8, name: "6KW", image: product1, },
  { id: 9, name: "7KW", image: product1, },
  { id: 10, name: "8KW", image: product1, },
  { id: 11, name: "9KW", image: product1, },
  { id: 12, name: "10KW", image: product1 },
]

// Product Details (Update this for all products)

const Solar = () => {

 

  const productDetails = {

  
    1: (
      <div className="containers">
  <h1>ON-GRID ROOFTOP SOLAR POWER PLANT CAPACITY-1 KW</h1>
  <br />
  <hr className="horizontal-line" />
  <br />
  <h5><marquee className="red"><strong>Subsidy 1KW - RS 30000/-</strong></marquee></h5>
  <h6>Load Extention Demand - EXTRA AT ACTUAL</h6>
  <br />
  <h5><strong><u>Material description:</u></strong></h5>
  <div className="table-container">
  <table>
  <thead>
  <tr>
  <th>S.No</th>
  <th>Description</th>
  <th>Specification</th>
  <th>Make</th>
  <th>UOM</th>
  <th>Qty</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>1)</td>
  <td>Solar Panel</td>
  <td>MONO-PERC HALF CUT DCR BIFACIAL PANELS 565/575Wp</td>
  <td>Adani/waaree/Prime/Loom</td>
  <td>Nos.</td>
  <td>2</td>
  </tr>
  <tr>
  <td>2)</td>
  <td>Grid Tied inverter</td>
  <td>Grid Tied Inverter 1Kw, 1 Phase. with Wi-fi Monitoring system</td>
  <td>POLYCAB/GROWAT</td>
  <td>Nos.</td>
  <td>1</td>
  </tr>
  <tr>
  <td>3)</td>
  <td>Mounting structure</td>
  <td>Panels shall be mounted on Galvanized structures.</td>
  <td>G.I</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>4)</td>
  <td>Acdb</td>
  <td>GSL Make</td>
  <td>ABB/L&T</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>5)</td>
  <td>Dcdb</td>
  <td>GSL Make</td>
  <td>Mersen Fuse & SPD</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>6)</td>
  <td>Ac Cable</td>
  <td>Copper Cable</td>
  <td>KEI/Polycab/Std</td>
  <td>Set</td>
  <td>As Per req</td>
  </tr>
  <tr>
  <td>7)</td>
  <td>Dc Cable</td>
  <td>Copper (4 Sqmm)</td>
  <td>KEI/Polycab/Std</td>
  <td>Set</td>
  <td>As Per req</td>
  </tr>
  <tr>
  <td>8)</td>
  <td>Balance of Material</td>
  <td>Electric , Cable Tray & Hardware and accessories(as per IS Standard)</td>
  <td>Standard</td>
  <td>Set</td>
  <td>As Per req</td>
  </tr>
  <tr>
  <td>9)</td>
  <td>Earthing Kit</td>
  <td>copper bonded earthing electrode with earth enhancement chemical</td>
  <td>Standard</td>
  <td>Set</td>
  <td>3</td>
  </tr>
  <tr>
  <td>10)</td>
  <td>Lightning Arrestor</td>
  <td>Copper Bonded</td>
  <td>Standard</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>11)</td>
  <td>Gen Meter & Net Meter</td>
  <td>5-10 Amp/10-40 Amp</td>
  <td>HPL & L&T</td>
  <td>Nos</td>
  <td>Inclusive</td>
  </tr>
  </tbody>
  </table>
  </div>
  <h5><strong>Warranty & Standards:</strong></h5>
  <div className="container">
  
  <table className="responsive-table">
  <thead>
  <tr>
  <th>Item</th>
  <th>Warranty</th>
  <th>Standard</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>Solar Module</td>
  <td>12 Years warranty</td>
  <td>From Manufacture</td>
  </tr>
  <tr>
  <td>Solar Module Performance</td>
  <td>30 Years warranty</td>
  <td>From Manufacture</td>
  </tr>
  <tr>
  <td>Solar Inverter</td>
  <td>10/7 years Product warranty</td>
  <td>From Manufacture</td>
  </tr>
  <tr>
  <td>Operation & Maintenance</td>
  <td>5 Years (comprehensive) For ACDB, DCDB and all Electrical Accessories</td>
  <td>From Gentech Solar LLP</td>
  </tr>
  </tbody>
  </table>
  </div>
  <br />
  <h5><strong>Scope of work </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>Liasoning for Net metering approval and commissioning</li>
  <li>Designing of Solar PV Plant.</li>
  <li>Designing of Solar PV Plant.</li>
  <li>Installation of PV modules.</li>
  <li>Supply and installation of inverters, distribution boards, energy meters etc.
  Associated with SPV plant.</li>
  <li>Supply and installation of associated cables and electrical works of solar
  Plant with earthing.</li>
  <li>Commissioning and trial run-out of solar plant.</li>
  <li> Five Years compressive maintenance.</li>
  </ul>
  <br />
  <h5><strong>Scope of Client </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>Adequate shade free rooftop/ground allocation for installation of solar
  plant. </li>
  <li>Availability of grid and approach to site.
  </li>
  <li>Temporary power and water arrangement during EPC.</li>
  <li>Internet Connection. </li>
  <li>Material to be stocked safely at the site.</li>
  </ul>
  <br />
  <h5><strong>Project </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>The specifications, configuration, capacity and quantities quoted are
  Tentative and are subject to change during in-detail engineering fulfilling
  Design requirements with MNRE specification.
  </li>
  <li>It is assumed that the ground is easily accessible and it is flat
  and it is shadow Free.
  </li>
  <li>System will be terminated with the existing LT Panel through
  available spare Feeder within the building.
  </li>
  <li>The system generation is based on actual site condition</li>
  
  </ul>
  <br />
  <h5><strong>Terms & conditions:</strong></h5>
  <br />
  <div className="terms-container">
  <table>
  <tbody>
  <tr>
  <th>Standards</th>
  <td>
  All the terms and conditions mentioned in this proposal are standard.
  Delivery of materials and commissioning of the solar system are
  dependent on-site location and government notices.
  </td>
  </tr>
  <tr>
  <th>Payment</th>
  <td>
  Advance: 20% with order | 70% Before dispatch of Solar Module and
  Inverters | 10% After Commissioning.
  </td>
  </tr>
  <tr>
  <th>Taxes</th>
  <td>GST @ 13.8 % on System.</td>
  </tr>
  <tr>
  <th>Insurance</th>
  <td>Customer Scope.</td>
  </tr>
  <tr>
  <th>Validity</th>
  <td>Above rates are valid for 15 days from the date of offer.</td>
  </tr>
  <tr>
  <th>Transportation</th>
  <td>Including</td>
  </tr>
  <tr>
  <th>Delivery, Installation, Commissioning</th>
  <td>
  Within 5 to 6 Weeks from the date of confirmed Purchase order and
  advance payment in favour of Gentech Solar LLP.
  </td>
  </tr>
  <tr>
  <th>Cancellation</th>
  <td>
  Any order once placed cannot be cancelled or diverted due to any
  reasons under any conditions and the advance paid are
  non-refundable or mutually amount based on the progress of
  project, payment must be paid
  </td>
  </tr>
  <tr>
  <th>Monitoring</th>
  <td>Remote monitoring system included in the cost.</td>
  </tr>
  <tr>
  <th>Civil work and Fabrication</th>
  <td>
  Civil work and fabrication work for solar system required is in
  jresolutions scope.
  </td>
  </tr>
  <tr>
  <th>Electrical Infrastructure, Upgradation</th>
  <td>
  Up gradation or replacement of Electrical Infrastructure, MCB,
  RCCB, ELCB, MCCB and accessories will be in client Scope.
  </td>
  </tr>
  <tr>
  <th>Penalty For Late Payment</th>
  <td>
  The client must honor the invoices raised by jresolutions as per
  agreed payment terms. Late payments will be subject to interest
  of 2% per month or part thereof. Remaining 5 % of the cost must
  be paid within a week after commissioning of the plant or
  customer will be charged late fees of 3% of the project price as
  mentioned above.
  </td>
  </tr>
  <tr>
  <th>On Grid Failure</th>
  <td>
  The plant will cease to feed supply to the grid until the grid is
  restored.
  </td>
  </tr>
  <tr>
  <th>Interruption in work</th>
  <td>
  The Customer must not interrupt the works, and/or shall abstain
  from any act or omission of which it can reasonably be expected
  that it may delay the works or make the works more.
  </td>
  </tr>
  </tbody>
  </table>
  </div>
  <br />
  <h5><strong>Project </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>The warranty shall not apply to defects resulting from:
  </li>
  <li>Any materials, components, tools, design or software provided by the client;
  </li>
  <li>Negligence or willful misconduct of client or anyone;
  </li>
  <li>Improper service work, installations or alterations carried out by the client or Third party without our written consent;
  </li>
  <li>Any trial or experiment carried out by the client on the system without our
  Written consent;
  </li>
  <li>Any use, service or operation of any equipment, parts or components which
  Is not in conformity with manuals, instructions or specifications provided by
  The manufacturer or which is otherwise not in accordance with normal
  Industry practice</li>
  <li>Warranty will not cover the damages due to manual tampering or
  Destruction due to natural calamity</li>
  </ul>
  <br />
  
  <h5><strong>Warranty : 5 Years</strong></h5>
  
  <img src={img} width={150} height={100} alt="phito"  style={{ position:
  "absolute", left: "50px" }}  /> 
  <br/>
  <br/>
  <br />
  <h5>For Jay Rao Engineer Solutions </h5>
  <br/>
  <Link to="/solarform" className="btn btn-success mt-2 btn-sm">
                      Get Quote
                    </Link>
  
  </div>
    ),
    2: (
      <div className="containers">
  <h1>ON-GRID ROOFTOP SOLAR POWER PLANT CAPACITY-2 KW</h1>
  <br />
  <hr className="horizontal-line" />
  <br />
  <h5><marquee className="red"><strong>Subsidy 2KW - RS 60000/-</strong></marquee></h5>
  <h6>Load Extention Demand - EXTRA AT ACTUAL</h6>
  <br />
  <h5><strong><u>Material description:</u></strong></h5>
  <div className="table-container">
  <table>
  <thead>
  <tr>
  <th>S.No</th>
  <th>Description</th>
  <th>Specification</th>
  <th>Make</th>
  <th>UOM</th>
  <th>Qty</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>1)</td>
  <td>Solar Panel</td>
  <td>MONO-PERC HALF CUT DCR BIFACIAL PANELS 565/575Wp</td>
  <td>Adani/waaree/Prime/Loom</td>
  <td>Nos.</td>
  <td>4</td>
  </tr>
  <tr>
  <td>2)</td>
  <td>Grid Tied inverter</td>
  <td>Grid Tied Inverter 2Kw, 1 Phase. with Wi-fi Monitoring system</td>
  <td>POLYCAB/GROWAT</td>
  <td>Nos.</td>
  <td>1</td>
  </tr>
  <tr>
  <td>3)</td>
  <td>Mounting structure</td>
  <td>Panels shall be mounted on Galvanized structures.</td>
  <td>G.I</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>4)</td>
  <td>Acdb</td>
  <td>GSL Make</td>
  <td>ABB/L&T</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>5)</td>
  <td>Dcdb</td>
  <td>GSL Make</td>
  <td>Mersen Fuse & SPD</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>6)</td>
  <td>Ac Cable</td>
  <td>Copper Cable</td>
  <td>KEI/Polycab/Std</td>
  <td>Set</td>
  <td>As Per req</td>
  </tr>
  <tr>
  <td>7)</td>
  <td>Dc Cable</td>
  <td>Copper (4 Sqmm)</td>
  <td>KEI/Polycab/Std</td>
  <td>Set</td>
  <td>As Per req</td>
  </tr>
  <tr>
  <td>8)</td>
  <td>Balance of Material</td>
  <td>Electric , Cable Tray & Hardware and accessories(as per IS Standard)</td>
  <td>Standard</td>
  <td>Set</td>
  <td>As Per req</td>
  </tr>
  <tr>
  <td>9)</td>
  <td>Earthing Kit</td>
  <td>copper bonded earthing electrode with earth enhancement chemical</td>
  <td>Standard</td>
  <td>Set</td>
  <td>3</td>
  </tr>
  <tr>
  <td>10)</td>
  <td>Lightning Arrestor</td>
  <td>Copper Bonded</td>
  <td>Standard</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>11)</td>
  <td>Gen Meter & Net Meter</td>
  <td>5-10 Amp/10-40 Amp</td>
  <td>HPL & L&T</td>
  <td>Nos</td>
  <td>Inclusive</td>
  </tr>
  </tbody>
  </table>
  </div>
  <h5><strong>Warranty & Standards:</strong></h5>
  <div className="container">
  
  <table className="responsive-table">
  <thead>
  <tr>
  <th>Item</th>
  <th>Warranty</th>
  <th>Standard</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>Solar Module</td>
  <td>12 Years warranty</td>
  <td>From Manufacture</td>
  </tr>
  <tr>
  <td>Solar Module Performance</td>
  <td>30 Years warranty</td>
  <td>From Manufacture</td>
  </tr>
  <tr>
  <td>Solar Inverter</td>
  <td>10/7 years Product warranty</td>
  <td>From Manufacture</td>
  </tr>
  <tr>
  <td>Operation & Maintenance</td>
  <td>5 Years (comprehensive) For ACDB, DCDB and all Electrical Accessories</td>
  <td>From Gentech Solar LLP</td>
  </tr>
  </tbody>
  </table>
  </div>
  <br />
  <h5><strong>Scope of work </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>Liasoning for Net metering approval and commissioning</li>
  <li>Designing of Solar PV Plant.</li>
  <li>Designing of Solar PV Plant.</li>
  <li>Installation of PV modules.</li>
  <li>Supply and installation of inverters, distribution boards, energy meters etc.
  Associated with SPV plant.</li>
  <li>Supply and installation of associated cables and electrical works of solar
  Plant with earthing.</li>
  <li>Commissioning and trial run-out of solar plant.</li>
  <li> Five Years compressive maintenance.</li>
  </ul>
  <br />
  <h5><strong>Scope of Client </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>Adequate shade free rooftop/ground allocation for installation of solar
  plant. </li>
  <li>Availability of grid and approach to site.
  </li>
  <li>Temporary power and water arrangement during EPC.</li>
  <li>Internet Connection. </li>
  <li>Material to be stocked safely at the site.</li>
  </ul>
  <br />
  <h5><strong>Project </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>The specifications, configuration, capacity and quantities quoted are
  Tentative and are subject to change during in-detail engineering fulfilling
  Design requirements with MNRE specification.
  </li>
  <li>It is assumed that the ground is easily accessible and it is flat
  and it is shadow Free.
  </li>
  <li>System will be terminated with the existing LT Panel through
  available spare Feeder within the building.
  </li>
  <li>The system generation is based on actual site condition</li>
  
  </ul>
  <br />
  <h5><strong>Terms & conditions:</strong></h5>
  <br />
  <div className="terms-container">
  <table>
  <tbody>
  <tr>
  <th>Standards</th>
  <td>
  All the terms and conditions mentioned in this proposal are standard.
  Delivery of materials and commissioning of the solar system are
  dependent on-site location and government notices.
  </td>
  </tr>
  <tr>
  <th>Payment</th>
  <td>
  Advance: 20% with order | 70% Before dispatch of Solar Module and
  Inverters | 10% After Commissioning.
  </td>
  </tr>
  <tr>
  <th>Taxes</th>
  <td>GST @ 13.8 % on System.</td>
  </tr>
  <tr>
  <th>Insurance</th>
  <td>Customer Scope.</td>
  </tr>
  <tr>
  <th>Validity</th>
  <td>Above rates are valid for 15 days from the date of offer.</td>
  </tr>
  <tr>
  <th>Transportation</th>
  <td>Including</td>
  </tr>
  <tr>
  <th>Delivery, Installation, Commissioning</th>
  <td>
  Within 5 to 6 Weeks from the date of confirmed Purchase order and
  advance payment in favour of Gentech Solar LLP.
  </td>
  </tr>
  <tr>
  <th>Cancellation</th>
  <td>
  Any order once placed cannot be cancelled or diverted due to any
  reasons under any conditions and the advance paid are
  non-refundable or mutually amount based on the progress of
  project, payment must be paid
  </td>
  </tr>
  <tr>
  <th>Monitoring</th>
  <td>Remote monitoring system included in the cost.</td>
  </tr>
  <tr>
  <th>Civil work and Fabrication</th>
  <td>
  Civil work and fabrication work for solar system required is in
  jresolutions scope.
  </td>
  </tr>
  <tr>
  <th>Electrical Infrastructure, Upgradation</th>
  <td>
  Up gradation or replacement of Electrical Infrastructure, MCB,
  RCCB, ELCB, MCCB and accessories will be in client Scope.
  </td>
  </tr>
  <tr>
  <th>Penalty For Late Payment</th>
  <td>
  The client must honor the invoices raised by jresolutions as per
  agreed payment terms. Late payments will be subject to interest
  of 2% per month or part thereof. Remaining 5 % of the cost must
  be paid within a week after commissioning of the plant or
  customer will be charged late fees of 3% of the project price as
  mentioned above.
  </td>
  </tr>
  <tr>
  <th>On Grid Failure</th>
  <td>
  The plant will cease to feed supply to the grid until the grid is
  restored.
  </td>
  </tr>
  <tr>
  <th>Interruption in work</th>
  <td>
  The Customer must not interrupt the works, and/or shall abstain
  from any act or omission of which it can reasonably be expected
  that it may delay the works or make the works more.
  </td>
  </tr>
  </tbody>
  </table>
  </div>
  <br />
  <h5><strong>Project </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>The warranty shall not apply to defects resulting from:
  </li>
  <li>Any materials, components, tools, design or software provided by the client;
  </li>
  <li>Negligence or willful misconduct of client or anyone;
  </li>
  <li>Improper service work, installations or alterations carried out by the client or Third party without our written consent;
  </li>
  <li>Any trial or experiment carried out by the client on the system without our
  Written consent;
  </li>
  <li>Any use, service or operation of any equipment, parts or components which
  Is not in conformity with manuals, instructions or specifications provided by
  The manufacturer or which is otherwise not in accordance with normal
  Industry practice</li>
  <li>Warranty will not cover the damages due to manual tampering or
  Destruction due to natural calamity</li>
  </ul>
  <br />
  <h5><strong>Warranty : 5 Years</strong></h5>
  
  <img src={img} width={150} height={100} alt="phito"  style={{ position:
  "absolute", left: "50px" }}  /> 
  <br/>
  <br/>
  <br />
  <h5>For Jay Rao Engineer Solutions </h5>
  <br/>
  <Link to="/solarform" className="btn btn-success mt-2 btn-sm">
                      Get Quote
                    </Link>
  </div>
    ),
    3: (
      <div className="containers">
  <h1>ON-GRID ROOFTOP SOLAR POWER PLANT CAPACITY-3 KW</h1>
  <br />
  <hr className="horizontal-line" />
  <br />
  <h5><marquee className="red"><strong>Subsidy 3KW - RS 78000/-</strong></marquee></h5>
  <h6>Load Extention Demand - EXTRA AT ACTUAL</h6>
  <br />
  <h5><strong><u>Material description:</u></strong></h5>
  <div className="table-container">
  <table>
  <thead>
  <tr>
  <th>S.No</th>
  <th>Description</th>
  <th>Specification</th>
  <th>Make</th>
  <th>UOM</th>
  <th>Qty</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>1)</td>
  <td>Solar Panel</td>
  <td>MONO-PERC HALF CUT DCR BIFACIAL PANELS 565/575Wp</td>
  <td>Adani/waaree/Prime/Loom</td>
  <td>Nos.</td>
  <td>6</td>
  </tr>
  <tr>
  <td>2)</td>
  <td>Grid Tied inverter</td>
  <td>Grid Tied Inverter 3Kw, 1 Phase. with Wi-fi Monitoring system</td>
  <td>POLYCAB/GROWAT</td>
  <td>Nos.</td>
  <td>1</td>
  </tr>
  <tr>
  <td>3)</td>
  <td>Mounting structure</td>
  <td>Panels shall be mounted on Galvanized structures.</td>
  <td>G.I</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>4)</td>
  <td>Acdb</td>
  <td>GSL Make</td>
  <td>ABB/L&T</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>5)</td>
  <td>Dcdb</td>
  <td>GSL Make</td>
  <td>Mersen Fuse & SPD</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>6)</td>
  <td>Ac Cable</td>
  <td>Copper Cable</td>
  <td>KEI/Polycab/Std</td>
  <td>Set</td>
  <td>As Per req</td>
  </tr>
  <tr>
  <td>7)</td>
  <td>Dc Cable</td>
  <td>Copper (4 Sqmm)</td>
  <td>KEI/Polycab/Std</td>
  <td>Set</td>
  <td>As Per req</td>
  </tr>
  <tr>
  <td>8)</td>
  <td>Balance of Material</td>
  <td>Electric , Cable Tray & Hardware and accessories(as per IS Standard)</td>
  <td>Standard</td>
  <td>Set</td>
  <td>As Per req</td>
  </tr>
  <tr>
  <td>9)</td>
  <td>Earthing Kit</td>
  <td>copper bonded earthing electrode with earth enhancement chemical</td>
  <td>Standard</td>
  <td>Set</td>
  <td>3</td>
  </tr>
  <tr>
  <td>10)</td>
  <td>Lightning Arrestor</td>
  <td>Copper Bonded</td>
  <td>Standard</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>11)</td>
  <td>Gen Meter & Net Meter</td>
  <td>5-10 Amp/10-40 Amp</td>
  <td>HPL & L&T</td>
  <td>Nos</td>
  <td>Inclusive</td>
  </tr>
  </tbody>
  </table>
  </div>
  <h5><strong>Warranty & Standards:</strong></h5>
  <div className="container">
  
  <table className="responsive-table">
  <thead>
  <tr>
  <th>Item</th>
  <th>Warranty</th>
  <th>Standard</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>Solar Module</td>
  <td>12 Years warranty</td>
  <td>From Manufacture</td>
  </tr>
  <tr>
  <td>Solar Module Performance</td>
  <td>30 Years warranty</td>
  <td>From Manufacture</td>
  </tr>
  <tr>
  <td>Solar Inverter</td>
  <td>10/7 years Product warranty</td>
  <td>From Manufacture</td>
  </tr>
  <tr>
  <td>Operation & Maintenance</td>
  <td>5 Years (comprehensive) For ACDB, DCDB and all Electrical Accessories</td>
  <td>From Gentech Solar LLP</td>
  </tr>
  </tbody>
  </table>
  </div>
  <br />
  <h5><strong>Scope of work </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>Liasoning for Net metering approval and commissioning</li>
  <li>Designing of Solar PV Plant.</li>
  <li>Designing of Solar PV Plant.</li>
  <li>Installation of PV modules.</li>
  <li>Supply and installation of inverters, distribution boards, energy meters etc.
  Associated with SPV plant.</li>
  <li>Supply and installation of associated cables and electrical works of solar
  Plant with earthing.</li>
  <li>Commissioning and trial run-out of solar plant.</li>
  <li> Five Years compressive maintenance.</li>
  </ul>
  <br />
  <h5><strong>Scope of Client </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>Adequate shade free rooftop/ground allocation for installation of solar
  plant. </li>
  <li>Availability of grid and approach to site.
  </li>
  <li>Temporary power and water arrangement during EPC.</li>
  <li>Internet Connection. </li>
  <li>Material to be stocked safely at the site.</li>
  </ul>
  <br />
  <h5><strong>Project </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>The specifications, configuration, capacity and quantities quoted are
  Tentative and are subject to change during in-detail engineering fulfilling
  Design requirements with MNRE specification.
  </li>
  <li>It is assumed that the ground is easily accessible and it is flat
  and it is shadow Free.
  </li>
  <li>System will be terminated with the existing LT Panel through
  available spare Feeder within the building.
  </li>
  <li>The system generation is based on actual site condition</li>
  
  </ul>
  <br />
  <h5><strong>Terms & conditions:</strong></h5>
  <br />
  <div className="terms-container">
  <table>
  <tbody>
  <tr>
  <th>Standards</th>
  <td>
  All the terms and conditions mentioned in this proposal are standard.
  Delivery of materials and commissioning of the solar system are
  dependent on-site location and government notices.
  </td>
  </tr>
  <tr>
  <th>Payment</th>
  <td>
  Advance: 20% with order | 70% Before dispatch of Solar Module and
  Inverters | 10% After Commissioning.
  </td>
  </tr>
  <tr>
  <th>Taxes</th>
  <td>GST @ 13.8 % on System.</td>
  </tr>
  <tr>
  <th>Insurance</th>
  <td>Customer Scope.</td>
  </tr>
  <tr>
  <th>Validity</th>
  <td>Above rates are valid for 15 days from the date of offer.</td>
  </tr>
  <tr>
  <th>Transportation</th>
  <td>Including</td>
  </tr>
  <tr>
  <th>Delivery, Installation, Commissioning</th>
  <td>
  Within 5 to 6 Weeks from the date of confirmed Purchase order and
  advance payment in favour of Gentech Solar LLP.
  </td>
  </tr>
  <tr>
  <th>Cancellation</th>
  <td>
  Any order once placed cannot be cancelled or diverted due to any
  reasons under any conditions and the advance paid are
  non-refundable or mutually amount based on the progress of
  project, payment must be paid
  </td>
  </tr>
  <tr>
  <th>Monitoring</th>
  <td>Remote monitoring system included in the cost.</td>
  </tr>
  <tr>
  <th>Civil work and Fabrication</th>
  <td>
  Civil work and fabrication work for solar system required is in
  jresolutions scope.
  </td>
  </tr>
  <tr>
  <th>Electrical Infrastructure, Upgradation</th>
  <td>
  Up gradation or replacement of Electrical Infrastructure, MCB,
  RCCB, ELCB, MCCB and accessories will be in client Scope.
  </td>
  </tr>
  <tr>
  <th>Penalty For Late Payment</th>
  <td>
  The client must honor the invoices raised by jresolutions as per
  agreed payment terms. Late payments will be subject to interest
  of 2% per month or part thereof. Remaining 5 % of the cost must
  be paid within a week after commissioning of the plant or
  customer will be charged late fees of 3% of the project price as
  mentioned above.
  </td>
  </tr>
  <tr>
  <th>On Grid Failure</th>
  <td>
  The plant will cease to feed supply to the grid until the grid is
  restored.
  </td>
  </tr>
  <tr>
  <th>Interruption in work</th>
  <td>
  The Customer must not interrupt the works, and/or shall abstain
  from any act or omission of which it can reasonably be expected
  that it may delay the works or make the works more.
  </td>
  </tr>
  </tbody>
  </table>
  </div>
  <br />
  <h5><strong>Project </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>The warranty shall not apply to defects resulting from:
  </li>
  <li>Any materials, components, tools, design or software provided by the client;
  </li>
  <li>Negligence or willful misconduct of client or anyone;
  </li>
  <li>Improper service work, installations or alterations carried out by the client or Third party without our written consent;
  </li>
  <li>Any trial or experiment carried out by the client on the system without our
  Written consent;
  </li>
  <li>Any use, service or operation of any equipment, parts or components which
  Is not in conformity with manuals, instructions or specifications provided by
  The manufacturer or which is otherwise not in accordance with normal
  Industry practice</li>
  <li>Warranty will not cover the damages due to manual tampering or
  Destruction due to natural calamity</li>
  </ul>
  <br />
  <h5><strong>Warranty : 5 Years</strong></h5>
  <img src={img} width={150} height={100} alt="phito"  style={{ position:
  "absolute", left: "50px" }}  /> 
  <br/>
  <br/>
  <br />
  <h5>For Jay Rao Engineer Solutions </h5>
  <br/>
  <Link to="/solarform" className="btn btn-success mt-2 btn-sm">
                      Get Quote
                    </Link>
  </div>
    ),
    4: (
      <div className="containers">
  <h1>ON-GRID ROOFTOP SOLAR POWER PLANT CAPACITY-4 KW</h1>
  <br />
  <hr className="horizontal-line" />
  <br />
  <h5><marquee className="red"><strong>Subsidy 4KW - RS 78000/-</strong></marquee></h5>
  <h6>Load Extention Demand - EXTRA AT ACTUAL</h6>
  <br />
  <h5><strong><u>Material description:</u></strong></h5>
  <div className="table-container">
  <table>
  <thead>
  <tr>
  <th>S.No</th>
  <th>Description</th>
  <th>Specification</th>
  <th>Make</th>
  <th>UOM</th>
  <th>Qty</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>1)</td>
  <td>Solar Panel</td>
  <td>MONO-PERC HALF CUT DCR BIFACIAL PANELS 565/575Wp</td>
  <td>Adani/waaree/Prime/Loom</td>
  <td>Nos.</td>
  <td>8</td>
  </tr>
  <tr>
  <td>2)</td>
  <td>Grid Tied inverter</td>
  <td>Grid Tied Inverter 4Kw, 1 Phase. with Wi-fi Monitoring system</td>
  <td>POLYCAB/GROWAT</td>
  <td>Nos.</td>
  <td>1</td>
  </tr>
  <tr>
  <td>3)</td>
  <td>Mounting structure</td>
  <td>Panels shall be mounted on Galvanized structures.</td>
  <td>G.I</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>4)</td>
  <td>Acdb</td>
  <td>GSL Make</td>
  <td>ABB/L&T</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>5)</td>
  <td>Dcdb</td>
  <td>GSL Make</td>
  <td>Mersen Fuse & SPD</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>6)</td>
  <td>Ac Cable</td>
  <td>Copper Cable</td>
  <td>KEI/Polycab/Std</td>
  <td>Set</td>
  <td>As Per req</td>
  </tr>
  <tr>
  <td>7)</td>
  <td>Dc Cable</td>
  <td>Copper (4 Sqmm)</td>
  <td>KEI/Polycab/Std</td>
  <td>Set</td>
  <td>As Per req</td>
  </tr>
  <tr>
  <td>8)</td>
  <td>Balance of Material</td>
  <td>Electric , Cable Tray & Hardware and accessories(as per IS Standard)</td>
  <td>Standard</td>
  <td>Set</td>
  <td>As Per req</td>
  </tr>
  <tr>
  <td>9)</td>
  <td>Earthing Kit</td>
  <td>copper bonded earthing electrode with earth enhancement chemical</td>
  <td>Standard</td>
  <td>Set</td>
  <td>3</td>
  </tr>
  <tr>
  <td>10)</td>
  <td>Lightning Arrestor</td>
  <td>Copper Bonded</td>
  <td>Standard</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>11)</td>
  <td>Gen Meter & Net Meter</td>
  <td>5-10 Amp/10-40 Amp</td>
  <td>HPL & L&T</td>
  <td>Nos</td>
  <td>Inclusive</td>
  </tr>
  </tbody>
  </table>
  </div>
  <h5><strong>Warranty & Standards:</strong></h5>
  <div className="container">
  
  <table className="responsive-table">
  <thead>
  <tr>
  <th>Item</th>
  <th>Warranty</th>
  <th>Standard</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>Solar Module</td>
  <td>12 Years warranty</td>
  <td>From Manufacture</td>
  </tr>
  <tr>
  <td>Solar Module Performance</td>
  <td>30 Years warranty</td>
  <td>From Manufacture</td>
  </tr>
  <tr>
  <td>Solar Inverter</td>
  <td>10/7 years Product warranty</td>
  <td>From Manufacture</td>
  </tr>
  <tr>
  <td>Operation & Maintenance</td>
  <td>5 Years (comprehensive) For ACDB, DCDB and all Electrical Accessories</td>
  <td>From Gentech Solar LLP</td>
  </tr>
  </tbody>
  </table>
  </div>
  <br />
  <h5><strong>Scope of work </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>Liasoning for Net metering approval and commissioning</li>
  <li>Designing of Solar PV Plant.</li>
  <li>Designing of Solar PV Plant.</li>
  <li>Installation of PV modules.</li>
  <li>Supply and installation of inverters, distribution boards, energy meters etc.
  Associated with SPV plant.</li>
  <li>Supply and installation of associated cables and electrical works of solar
  Plant with earthing.</li>
  <li>Commissioning and trial run-out of solar plant.</li>
  <li> Five Years compressive maintenance.</li>
  </ul>
  <br />
  <h5><strong>Scope of Client </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>Adequate shade free rooftop/ground allocation for installation of solar
  plant. </li>
  <li>Availability of grid and approach to site.
  </li>
  <li>Temporary power and water arrangement during EPC.</li>
  <li>Internet Connection. </li>
  <li>Material to be stocked safely at the site.</li>
  </ul>
  <br />
  <h5><strong>Project </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>The specifications, configuration, capacity and quantities quoted are
  Tentative and are subject to change during in-detail engineering fulfilling
  Design requirements with MNRE specification.
  </li>
  <li>It is assumed that the ground is easily accessible and it is flat
  and it is shadow Free.
  </li>
  <li>System will be terminated with the existing LT Panel through
  available spare Feeder within the building.
  </li>
  <li>The system generation is based on actual site condition</li>
  
  </ul>
  <br />
  <h5><strong>Terms & conditions:</strong></h5>
  <br />
  <div className="terms-container">
  <table>
  <tbody>
  <tr>
  <th>Standards</th>
  <td>
  All the terms and conditions mentioned in this proposal are standard.
  Delivery of materials and commissioning of the solar system are
  dependent on-site location and government notices.
  </td>
  </tr>
  <tr>
  <th>Payment</th>
  <td>
  Advance: 20% with order | 70% Before dispatch of Solar Module and
  Inverters | 10% After Commissioning.
  </td>
  </tr>
  <tr>
  <th>Taxes</th>
  <td>GST @ 13.8 % on System.</td>
  </tr>
  <tr>
  <th>Insurance</th>
  <td>Customer Scope.</td>
  </tr>
  <tr>
  <th>Validity</th>
  <td>Above rates are valid for 15 days from the date of offer.</td>
  </tr>
  <tr>
  <th>Transportation</th>
  <td>Including</td>
  </tr>
  <tr>
  <th>Delivery, Installation, Commissioning</th>
  <td>
  Within 5 to 6 Weeks from the date of confirmed Purchase order and
  advance payment in favour of Gentech Solar LLP.
  </td>
  </tr>
  <tr>
  <th>Cancellation</th>
  <td>
  Any order once placed cannot be cancelled or diverted due to any
  reasons under any conditions and the advance paid are
  non-refundable or mutually amount based on the progress of
  project, payment must be paid
  </td>
  </tr>
  <tr>
  <th>Monitoring</th>
  <td>Remote monitoring system included in the cost.</td>
  </tr>
  <tr>
  <th>Civil work and Fabrication</th>
  <td>
  Civil work and fabrication work for solar system required is in
  jresolutions scope.
  </td>
  </tr>
  <tr>
  <th>Electrical Infrastructure, Upgradation</th>
  <td>
  Up gradation or replacement of Electrical Infrastructure, MCB,
  RCCB, ELCB, MCCB and accessories will be in client Scope.
  </td>
  </tr>
  <tr>
  <th>Penalty For Late Payment</th>
  <td>
  The client must honor the invoices raised by jresolutions as per
  agreed payment terms. Late payments will be subject to interest
  of 2% per month or part thereof. Remaining 5 % of the cost must
  be paid within a week after commissioning of the plant or
  customer will be charged late fees of 3% of the project price as
  mentioned above.
  </td>
  </tr>
  <tr>
  <th>On Grid Failure</th>
  <td>
  The plant will cease to feed supply to the grid until the grid is
  restored.
  </td>
  </tr>
  <tr>
  <th>Interruption in work</th>
  <td>
  The Customer must not interrupt the works, and/or shall abstain
  from any act or omission of which it can reasonably be expected
  that it may delay the works or make the works more.
  </td>
  </tr>
  </tbody>
  </table>
  </div>
  <br />
  <h5><strong>Project </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>The warranty shall not apply to defects resulting from:
  </li>
  <li>Any materials, components, tools, design or software provided by the client;
  </li>
  <li>Negligence or willful misconduct of client or anyone;
  </li>
  <li>Improper service work, installations or alterations carried out by the client or Third party without our written consent;
  </li>
  <li>Any trial or experiment carried out by the client on the system without our
  Written consent;
  </li>
  <li>Any use, service or operation of any equipment, parts or components which
  Is not in conformity with manuals, instructions or specifications provided by
  The manufacturer or which is otherwise not in accordance with normal
  Industry practice</li>
  <li>Warranty will not cover the damages due to manual tampering or
  Destruction due to natural calamity</li>
  </ul>
  <br />
  <h5><strong>Warranty : 5 Years</strong></h5>
  <img src={img} width={150} height={100} alt="phito"  style={{ position:
  "absolute", left: "50px" }}  /> 
  <br/>
  <br/>
  <br />
  <h5>For Jay Rao Engineer Solutions </h5>
  <br/>
  <Link to="/solarform" className="btn btn-success mt-2 btn-sm">
                      Get Quote
                    </Link>
  </div>
    ),
    5: (
      <div className="containers">
  <h1>ON-GRID ROOFTOP SOLAR POWER PLANT CAPACITY-5 KW</h1>
  <br />
  <hr className="horizontal-line" />
  <br />
  <h5><marquee className="red"><strong>Subsidy 5KW - RS 78000/-</strong></marquee></h5>
  <h6>Load Extention Demand - EXTRA AT ACTUAL</h6>
  <br />
  <h5><strong><u>Material description:</u></strong></h5>
  <div className="table-container">
  <table>
  <thead>
  <tr>
  <th>S.No</th>
  <th>Description</th>
  <th>Specification</th>
  <th>Make</th>
  <th>UOM</th>
  <th>Qty</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>1)</td>
  <td>Solar Panel</td>
  <td>MONO-PERC HALF CUT DCR BIFACIAL PANELS 565/575Wp</td>
  <td>Adani/waaree/Prime?Loom</td>
  <td>Nos.</td>
  <td>9</td>
  </tr>
  <tr>
  <td>2)</td>
  <td>Grid Tied inverter</td>
  <td>Grid Tied Inverter 5Kw, 1 Phase. with Wi-fi Monitoring system</td>
  <td>POLYCAB/GROWAT</td>
  <td>Nos.</td>
  <td>1</td>
  </tr>
  <tr>
  <td>3)</td>
  <td>Mounting structure</td>
  <td>Panels shall be mounted on Galvanized structures.</td>
  <td>G.I</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>4)</td>
  <td>Acdb</td>
  <td>GSL Make</td>
  <td>ABB/L&T</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>5)</td>
  <td>Dcdb</td>
  <td>GSL Make</td>
  <td>Mersen Fuse & SPD</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>6)</td>
  <td>Ac Cable</td>
  <td>Copper Cable</td>
  <td>KEI/Polycab/Std</td>
  <td>Set</td>
  <td>As Per req</td>
  </tr>
  <tr>
  <td>7)</td>
  <td>Dc Cable</td>
  <td>Copper (4 Sqmm)</td>
  <td>KEI/Polycab/Std</td>
  <td>Set</td>
  <td>As Per req</td>
  </tr>
  <tr>
  <td>8)</td>
  <td>Balance of Material</td>
  <td>Electric , Cable Tray & Hardware and accessories(as per IS Standard)</td>
  <td>Standard</td>
  <td>Set</td>
  <td>As Per req</td>
  </tr>
  <tr>
  <td>9)</td>
  <td>Earthing Kit</td>
  <td>copper bonded earthing electrode with earth enhancement chemical</td>
  <td>Standard</td>
  <td>Set</td>
  <td>3</td>
  </tr>
  <tr>
  <td>10)</td>
  <td>Lightning Arrestor</td>
  <td>Copper Bonded</td>
  <td>Standard</td>
  <td>Set</td>
  <td>1</td>
  </tr>
  <tr>
  <td>11)</td>
  <td>Gen Meter & Net Meter</td>
  <td>5-10 Amp/10-40 Amp</td>
  <td>HPL & L&T</td>
  <td>Nos</td>
  <td>Inclusive</td>
  </tr>
  </tbody>
  </table>
  </div>
  <h5><strong>Warranty & Standards:</strong></h5>
  <div className="container">
  
  <table className="responsive-table">
  <thead>
  <tr>
  <th>Item</th>
  <th>Warranty</th>
  <th>Standard</th>
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>Solar Module</td>
  <td>12 Years warranty</td>
  <td>From Manufacture</td>
  </tr>
  <tr>
  <td>Solar Module Performance</td>
  <td>30 Years warranty</td>
  <td>From Manufacture</td>
  </tr>
  <tr>
  <td>Solar Inverter</td>
  <td>10/7 years Product warranty</td>
  <td>From Manufacture</td>
  </tr>
  <tr>
  <td>Operation & Maintenance</td>
  <td>5 Years (comprehensive) For ACDB, DCDB and all Electrical Accessories</td>
  <td>From Gentech Solar LLP</td>
  </tr>
  </tbody>
  </table>
  </div>
  <br />
  <h5><strong>Scope of work </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>Liasoning for Net metering approval and commissioning</li>
  <li>Designing of Solar PV Plant.</li>
  <li>Designing of Solar PV Plant.</li>
  <li>Installation of PV modules.</li>
  <li>Supply and installation of inverters, distribution boards, energy meters etc.
  Associated with SPV plant.</li>
  <li>Supply and installation of associated cables and electrical works of solar
  Plant with earthing.</li>
  <li>Commissioning and trial run-out of solar plant.</li>
  <li> Five Years compressive maintenance.</li>
  </ul>
  <br />
  <h5><strong>Scope of Client </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>Adequate shade free rooftop/ground allocation for installation of solar
  plant. </li>
  <li>Availability of grid and approach to site.
  </li>
  <li>Temporary power and water arrangement during EPC.</li>
  <li>Internet Connection. </li>
  <li>Material to be stocked safely at the site.</li>
  </ul>
  <br />
  <h5><strong>Project </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>The specifications, configuration, capacity and quantities quoted are
  Tentative and are subject to change during in-detail engineering fulfilling
  Design requirements with MNRE specification.
  </li>
  <li>It is assumed that the ground is easily accessible and it is flat
  and it is shadow Free.
  </li>
  <li>System will be terminated with the existing LT Panel through
  available spare Feeder within the building.
  </li>
  <li>The system generation is based on actual site condition</li>
  
  </ul>
  <br />
  <h5><strong>Terms & conditions:</strong></h5>
  <br />
  <div className="terms-container">
  <table>
  <tbody>
  <tr>
  <th>Standards</th>
  <td>
  All the terms and conditions mentioned in this proposal are standard.
  Delivery of materials and commissioning of the solar system are
  dependent on-site location and government notices.
  </td>
  </tr>
  <tr>
  <th>Payment</th>
  <td>
  Advance: 20% with order | 70% Before dispatch of Solar Module and
  Inverters | 10% After Commissioning.
  </td>
  </tr>
  <tr>
  <th>Taxes</th>
  <td>GST @ 13.8 % on System.</td>
  </tr>
  <tr>
  <th>Insurance</th>
  <td>Customer Scope.</td>
  </tr>
  <tr>
  <th>Validity</th>
  <td>Above rates are valid for 15 days from the date of offer.</td>
  </tr>
  <tr>
  <th>Transportation</th>
  <td>Including</td>
  </tr>
  <tr>
  <th>Delivery, Installation, Commissioning</th>
  <td>
  Within 5 to 6 Weeks from the date of confirmed Purchase order and
  advance payment in favour of Gentech Solar LLP.
  </td>
  </tr>
  <tr>
  <th>Cancellation</th>
  <td>
  Any order once placed cannot be cancelled or diverted due to any
  reasons under any conditions and the advance paid are
  non-refundable or mutually amount based on the progress of
  project, payment must be paid
  </td>
  </tr>
  <tr>
  <th>Monitoring</th>
  <td>Remote monitoring system included in the cost.</td>
  </tr>
  <tr>
  <th>Civil work and Fabrication</th>
  <td>
  Civil work and fabrication work for solar system required is in
  jresolutions scope.
  </td>
  </tr>
  <tr>
  <th>Electrical Infrastructure, Upgradation</th>
  <td>
  Up gradation or replacement of Electrical Infrastructure, MCB,
  RCCB, ELCB, MCCB and accessories will be in client Scope.
  </td>
  </tr>
  <tr>
  <th>Penalty For Late Payment</th>
  <td>
  The client must honor the invoices raised by jresolutions as per
  agreed payment terms. Late payments will be subject to interest
  of 2% per month or part thereof. Remaining 5 % of the cost must
  be paid within a week after commissioning of the plant or
  customer will be charged late fees of 3% of the project price as
  mentioned above.
  </td>
  </tr>
  <tr>
  <th>On Grid Failure</th>
  <td>
  The plant will cease to feed supply to the grid until the grid is
  restored.
  </td>
  </tr>
  <tr>
  <th>Interruption in work</th>
  <td>
  The Customer must not interrupt the works, and/or shall abstain
  from any act or omission of which it can reasonably be expected
  that it may delay the works or make the works more.
  </td>
  </tr>
  </tbody>
  </table>
  </div>
  <br />
  <h5><strong>Project </strong></h5>
  <br />
  <ul className='orderlist'>
  <li>The warranty shall not apply to defects resulting from:
  </li>
  <li>Any materials, components, tools, design or software provided by the client;
  </li>
  <li>Negligence or willful misconduct of client or anyone;
  </li>
  <li>Improper service work, installations or alterations carried out by the client or Third party without our written consent;
  </li>
  <li>Any trial or experiment carried out by the client on the system without our
  Written consent;
  </li>
  <li>Any use, service or operation of any equipment, parts or components which
  Is not in conformity with manuals, instructions or specifications provided by
  The manufacturer or which is otherwise not in accordance with normal
  Industry practice</li>
  <li>Warranty will not cover the damages due to manual tampering or
  Destruction due to natural calamity</li>
  </ul>
  <br />
  <h5><strong>Warranty : 5 Years</strong></h5>
  <img src={img} width={150} height={100} alt="phito"  style={{ position:
  "absolute", left: "50px" }}  /> 
  <br/>
  <br/>
  <br />
  <h5>For Jay Rao Engineer Solutions </h5>
  <br/>
  <Link to="/solarform" className="btn btn-success mt-2 btn-sm">
                      Get Quote
                    </Link>
  </div>
    ),
    6: (<div className="containers">
      <h1>ON-GRID ROOFTOP SOLAR POWER PLANT CAPACITY-6 KW </h1>
      <br />
      <hr className="horizontal-line" />
      <br />
      <h5><marquee className="red"><strong>Subsidy 6KW - RS 78000/-</strong></marquee></h5>
      <h6>Load Extention Demand - EXTRA AT ACTUAL</h6>
      <br />
      <h5><strong><u>Material description:</u></strong></h5>
      <div className="table-container">
      <table>
      <thead>
      <tr>
      <th>S.No</th>
      <th>Description</th>
      <th>Specification</th>
      <th>Make</th>
      <th>UOM</th>
      <th>Qty</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>1)</td>
      <td>Solar Panel</td>
      <td>MONO-PERC HALF CUT DCR BIFACIAL PANELS 565/575Wp</td>
      <td>Adani/waaree/Prime/Loom</td>
      <td>Nos.</td>
      <td>11</td>
      </tr>
      <tr>
      <td>2)</td>
      <td>Grid Tied inverter</td>
      <td>Grid Tied Inverter 6Kw, 1 Phase. with Wi-fi Monitoring system</td>
      <td>POLYCAB/GROWAT</td>
      <td>Nos.</td>
      <td>1</td>
      </tr>
      <tr>
      <td>3)</td>
      <td>Mounting structure</td>
      <td>Panels shall be mounted on Galvanized structures.</td>
      <td>G.I</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>4)</td>
      <td>Acdb</td>
      <td>GSL Make</td>
      <td>ABB/L&T</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>5)</td>
      <td>Dcdb</td>
      <td>GSL Make</td>
      <td>Mersen Fuse & SPD</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>6)</td>
      <td>Ac Cable</td>
      <td>Copper Cable</td>
      <td>KEI/Polycab/Std</td>
      <td>Set</td>
      <td>As Per req</td>
      </tr>
      <tr>
      <td>7)</td>
      <td>Dc Cable</td>
      <td>Copper (4 Sqmm)</td>
      <td>KEI/Polycab/Std</td>
      <td>Set</td>
      <td>As Per req</td>
      </tr>
      <tr>
      <td>8)</td>
      <td>Balance of Material</td>
      <td>Electric , Cable Tray & Hardware and accessories(as per IS Standard)</td>
      <td>Standard</td>
      <td>Set</td>
      <td>As Per req</td>
      </tr>
      <tr>
      <td>9)</td>
      <td>Earthing Kit</td>
      <td>copper bonded earthing electrode with earth enhancement chemical</td>
      <td>Standard</td>
      <td>Set</td>
      <td>3</td>
      </tr>
      <tr>
      <td>10)</td>
      <td>Lightning Arrestor</td>
      <td>Copper Bonded</td>
      <td>Standard</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>11)</td>
      <td>Gen Meter & Net Meter</td>
      <td>5-10 Amp/10-40 Amp</td>
      <td>HPL & L&T</td>
      <td>Nos</td>
      <td>Inclusive</td>
      </tr>
      </tbody>
      </table>
      </div>
      <h5><strong>Warranty & Standards:</strong></h5>
      <div className="container">
      
      <table className="responsive-table">
      <thead>
      <tr>
      <th>Item</th>
      <th>Warranty</th>
      <th>Standard</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>Solar Module</td>
      <td>12 Years warranty</td>
      <td>From Manufacture</td>
      </tr>
      <tr>
      <td>Solar Module Performance</td>
      <td>30 Years warranty</td>
      <td>From Manufacture</td>
      </tr>
      <tr>
      <td>Solar Inverter</td>
      <td>10/7 years Product warranty</td>
      <td>From Manufacture</td>
      </tr>
      <tr>
      <td>Operation & Maintenance</td>
      <td>5 Years (comprehensive) For ACDB, DCDB and all Electrical Accessories</td>
      <td>From Gentech Solar LLP</td>
      </tr>
      </tbody>
      </table>
      </div>
      <br />
      <h5><strong>Scope of work </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>Liasoning for Net metering approval and commissioning</li>
      <li>Designing of Solar PV Plant.</li>
      <li>Designing of Solar PV Plant.</li>
      <li>Installation of PV modules.</li>
      <li>Supply and installation of inverters, distribution boards, energy meters etc.
      Associated with SPV plant.</li>
      <li>Supply and installation of associated cables and electrical works of solar
      Plant with earthing.</li>
      <li>Commissioning and trial run-out of solar plant.</li>
      <li> Five Years compressive maintenance.</li>
      </ul>
      <br />
      <h5><strong>Scope of Client </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>Adequate shade free rooftop/ground allocation for installation of solar
      plant. </li>
      <li>Availability of grid and approach to site.
      </li>
      <li>Temporary power and water arrangement during EPC.</li>
      <li>Internet Connection. </li>
      <li>Material to be stocked safely at the site.</li>
      </ul>
      <br />
      <h5><strong>Project </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>The specifications, configuration, capacity and quantities quoted are
      Tentative and are subject to change during in-detail engineering fulfilling
      Design requirements with MNRE specification.
      </li>
      <li>It is assumed that the ground is easily accessible and it is flat
      and it is shadow Free.
      </li>
      <li>System will be terminated with the existing LT Panel through
      available spare Feeder within the building.
      </li>
      <li>The system generation is based on actual site condition</li>
      
      </ul>
      <br />
      <h5><strong>Terms & conditions:</strong></h5>
      <br />
      <div className="terms-container">
      <table>
      <tbody>
      <tr>
      <th>Standards</th>
      <td>
      All the terms and conditions mentioned in this proposal are standard.
      Delivery of materials and commissioning of the solar system are
      dependent on-site location and government notices.
      </td>
      </tr>
      <tr>
      <th>Payment</th>
      <td>
      Advance: 20% with order | 70% Before dispatch of Solar Module and
      Inverters | 10% After Commissioning.
      </td>
      </tr>
      <tr>
      <th>Taxes</th>
      <td>GST @ 13.8 % on System.</td>
      </tr>
      <tr>
      <th>Insurance</th>
      <td>Customer Scope.</td>
      </tr>
      <tr>
      <th>Validity</th>
      <td>Above rates are valid for 15 days from the date of offer.</td>
      </tr>
      <tr>
      <th>Transportation</th>
      <td>Including</td>
      </tr>
      <tr>
      <th>Delivery, Installation, Commissioning</th>
      <td>
      Within 5 to 6 Weeks from the date of confirmed Purchase order and
      advance payment in favour of Gentech Solar LLP.
      </td>
      </tr>
      <tr>
      <th>Cancellation</th>
      <td>
      Any order once placed cannot be cancelled or diverted due to any
      reasons under any conditions and the advance paid are
      non-refundable or mutually amount based on the progress of
      project, payment must be paid
      </td>
      </tr>
      <tr>
      <th>Monitoring</th>
      <td>Remote monitoring system included in the cost.</td>
      </tr>
      <tr>
      <th>Civil work and Fabrication</th>
      <td>
      Civil work and fabrication work for solar system required is in
      jresolutions scope.
      </td>
      </tr>
      <tr>
      <th>Electrical Infrastructure, Upgradation</th>
      <td>
      Up gradation or replacement of Electrical Infrastructure, MCB,
      RCCB, ELCB, MCCB and accessories will be in client Scope.
      </td>
      </tr>
      <tr>
      <th>Penalty For Late Payment</th>
      <td>
      The client must honor the invoices raised by jresolutions as per
      agreed payment terms. Late payments will be subject to interest
      of 2% per month or part thereof. Remaining 5 % of the cost must
      be paid within a week after commissioning of the plant or
      customer will be charged late fees of 3% of the project price as
      mentioned above.
      </td>
      </tr>
      <tr>
      <th>On Grid Failure</th>
      <td>
      The plant will cease to feed supply to the grid until the grid is
      restored.
      </td>
      </tr>
      <tr>
      <th>Interruption in work</th>
      <td>
      The Customer must not interrupt the works, and/or shall abstain
      from any act or omission of which it can reasonably be expected
      that it may delay the works or make the works more.
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      <br />
      <h5><strong>Project </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>The warranty shall not apply to defects resulting from:
      </li>
      <li>Any materials, components, tools, design or software provided by the client;
      </li>
      <li>Negligence or willful misconduct of client or anyone;
      </li>
      <li>Improper service work, installations or alterations carried out by the client or Third party without our written consent;
      </li>
      <li>Any trial or experiment carried out by the client on the system without our
      Written consent;
      </li>
      <li>Any use, service or operation of any equipment, parts or components which
      Is not in conformity with manuals, instructions or specifications provided by
      The manufacturer or which is otherwise not in accordance with normal
      Industry practice</li>
      <li>Warranty will not cover the damages due to manual tampering or
      Destruction due to natural calamity</li>
      </ul>
      <br />
      <h5><strong>Warranty : 5 Years</strong></h5>
      <img src={img} width={150} height={100} alt="phito"  style={{ position:
  "absolute", left: "50px" }}  /> 
  <br/>
  <br/>
  <br />
  <h5>For Jay Rao Engineer Solutions </h5>
  <br/>
  <Link to="/solarform" className="btn btn-success mt-2 btn-sm">
                      Get Quote
                    </Link>
      </div>),
    7: (
      <div className="containers">
      <h1>ON-GRID ROOFTOP SOLAR POWER PLANT CAPACITY-5 KW (Three Phase)</h1>
      <br />
      <hr className="horizontal-line" />
      <br />
      <h5><marquee className="red"><strong>Subsidy 5KW - RS 78000/-</strong></marquee></h5>
      <h6>Load Extention Demand - EXTRA AT ACTUAL</h6>
      <br />
      <h5><strong><u>Material description:</u></strong></h5>
      <div className="table-container">
      <table>
      <thead>
      <tr>
      <th>S.No</th>
      <th>Description</th>
      <th>Specification</th>
      <th>Make</th>
      <th>UOM</th>
      <th>Qty</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>1)</td>
      <td>Solar Panel</td>
      <td>MONO-PERC HALF CUT DCR BIFACIAL PANELS 565/575Wp</td>
      <td>Adani/waaree/Prime/Loom</td>
      <td>Nos.</td>
      <td>9</td>
      </tr>
      <tr>
      <td>2)</td>
      <td>Grid Tied inverter</td>
      <td>Grid Tied Inverter 5Kw, 1 Phase. with Wi-fi Monitoring system</td>
      <td>POLYCAB/GROWAT</td>
      <td>Nos.</td>
      <td>1</td>
      </tr>
      <tr>
      <td>3)</td>
      <td>Mounting structure</td>
      <td>Panels shall be mounted on Galvanized structures.</td>
      <td>G.I</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>4)</td>
      <td>Acdb</td>
      <td>GSL Make</td>
      <td>ABB/L&T</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>5)</td>
      <td>Dcdb</td>
      <td>GSL Make</td>
      <td>Mersen Fuse & SPD</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>6)</td>
      <td>Ac Cable</td>
      <td>Copper Cable</td>
      <td>KEI/Polycab/Std</td>
      <td>Set</td>
      <td>As Per req</td>
      </tr>
      <tr>
      <td>7)</td>
      <td>Dc Cable</td>
      <td>Copper (4 Sqmm)</td>
      <td>KEI/Polycab/Std</td>
      <td>Set</td>
      <td>As Per req</td>
      </tr>
      <tr>
      <td>8)</td>
      <td>Balance of Material</td>
      <td>Electric , Cable Tray & Hardware and accessories(as per IS Standard)</td>
      <td>Standard</td>
      <td>Set</td>
      <td>As Per req</td>
      </tr>
      <tr>
      <td>9)</td>
      <td>Earthing Kit</td>
      <td>copper bonded earthing electrode with earth enhancement chemical</td>
      <td>Standard</td>
      <td>Set</td>
      <td>3</td>
      </tr>
      <tr>
      <td>10)</td>
      <td>Lightning Arrestor</td>
      <td>Copper Bonded</td>
      <td>Standard</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>11)</td>
      <td>Gen Meter & Net Meter</td>
      <td>5-10 Amp/10-40 Amp</td>
      <td>HPL & L&T</td>
      <td>Nos</td>
      <td>Inclusive</td>
      </tr>
      </tbody>
      </table>
      </div>
      <h5><strong>Warranty & Standards:</strong></h5>
      <div className="container">
      
      <table className="responsive-table">
      <thead>
      <tr>
      <th>Item</th>
      <th>Warranty</th>
      <th>Standard</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>Solar Module</td>
      <td>12 Years warranty</td>
      <td>From Manufacture</td>
      </tr>
      <tr>
      <td>Solar Module Performance</td>
      <td>30 Years warranty</td>
      <td>From Manufacture</td>
      </tr>
      <tr>
      <td>Solar Inverter</td>
      <td>10/7 years Product warranty</td>
      <td>From Manufacture</td>
      </tr>
      <tr>
      <td>Operation & Maintenance</td>
      <td>5 Years (comprehensive) For ACDB, DCDB and all Electrical Accessories</td>
      <td>From Gentech Solar LLP</td>
      </tr>
      </tbody>
      </table>
      </div>
      <br />
      <h5><strong>Scope of work </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>Liasoning for Net metering approval and commissioning</li>
      <li>Designing of Solar PV Plant.</li>
      <li>Designing of Solar PV Plant.</li>
      <li>Installation of PV modules.</li>
      <li>Supply and installation of inverters, distribution boards, energy meters etc.
      Associated with SPV plant.</li>
      <li>Supply and installation of associated cables and electrical works of solar
      Plant with earthing.</li>
      <li>Commissioning and trial run-out of solar plant.</li>
      <li> Five Years compressive maintenance.</li>
      </ul>
      <br />
      <h5><strong>Scope of Client </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>Adequate shade free rooftop/ground allocation for installation of solar
      plant. </li>
      <li>Availability of grid and approach to site.
      </li>
      <li>Temporary power and water arrangement during EPC.</li>
      <li>Internet Connection. </li>
      <li>Material to be stocked safely at the site.</li>
      </ul>
      <br />
      <h5><strong>Project </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>The specifications, configuration, capacity and quantities quoted are
      Tentative and are subject to change during in-detail engineering fulfilling
      Design requirements with MNRE specification.
      </li>
      <li>It is assumed that the ground is easily accessible and it is flat
      and it is shadow Free.
      </li>
      <li>System will be terminated with the existing LT Panel through
      available spare Feeder within the building.
      </li>
      <li>The system generation is based on actual site condition</li>
      
      </ul>
      <br />
      <h5><strong>Terms & conditions:</strong></h5>
      <br />
      <div className="terms-container">
      <table>
      <tbody>
      <tr>
      <th>Standards</th>
      <td>
      All the terms and conditions mentioned in this proposal are standard.
      Delivery of materials and commissioning of the solar system are
      dependent on-site location and government notices.
      </td>
      </tr>
      <tr>
      <th>Payment</th>
      <td>
      Advance: 20% with order | 70% Before dispatch of Solar Module and
      Inverters | 10% After Commissioning.
      </td>
      </tr>
      <tr>
      <th>Taxes</th>
      <td>GST @ 13.8 % on System.</td>
      </tr>
      <tr>
      <th>Insurance</th>
      <td>Customer Scope.</td>
      </tr>
      <tr>
      <th>Validity</th>
      <td>Above rates are valid for 15 days from the date of offer.</td>
      </tr>
      <tr>
      <th>Transportation</th>
      <td>Including</td>
      </tr>
      <tr>
      <th>Delivery, Installation, Commissioning</th>
      <td>
      Within 5 to 6 Weeks from the date of confirmed Purchase order and
      advance payment in favour of Gentech Solar LLP.
      </td>
      </tr>
      <tr>
      <th>Cancellation</th>
      <td>
      Any order once placed cannot be cancelled or diverted due to any
      reasons under any conditions and the advance paid are
      non-refundable or mutually amount based on the progress of
      project, payment must be paid
      </td>
      </tr>
      <tr>
      <th>Monitoring</th>
      <td>Remote monitoring system included in the cost.</td>
      </tr>
      <tr>
      <th>Civil work and Fabrication</th>
      <td>
      Civil work and fabrication work for solar system required is in
      jresolutions scope.
      </td>
      </tr>
      <tr>
      <th>Electrical Infrastructure, Upgradation</th>
      <td>
      Up gradation or replacement of Electrical Infrastructure, MCB,
      RCCB, ELCB, MCCB and accessories will be in client Scope.
      </td>
      </tr>
      <tr>
      <th>Penalty For Late Payment</th>
      <td>
      The client must honor the invoices raised by jresolutions as per
      agreed payment terms. Late payments will be subject to interest
      of 2% per month or part thereof. Remaining 5 % of the cost must
      be paid within a week after commissioning of the plant or
      customer will be charged late fees of 3% of the project price as
      mentioned above.
      </td>
      </tr>
      <tr>
      <th>On Grid Failure</th>
      <td>
      The plant will cease to feed supply to the grid until the grid is
      restored.
      </td>
      </tr>
      <tr>
      <th>Interruption in work</th>
      <td>
      The Customer must not interrupt the works, and/or shall abstain
      from any act or omission of which it can reasonably be expected
      that it may delay the works or make the works more.
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      <br />
      <h5><strong>Project </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>The warranty shall not apply to defects resulting from:
      </li>
      <li>Any materials, components, tools, design or software provided by the client;
      </li>
      <li>Negligence or willful misconduct of client or anyone;
      </li>
      <li>Improper service work, installations or alterations carried out by the client or Third party without our written consent;
      </li>
      <li>Any trial or experiment carried out by the client on the system without our
      Written consent;
      </li>
      <li>Any use, service or operation of any equipment, parts or components which
      Is not in conformity with manuals, instructions or specifications provided by
      The manufacturer or which is otherwise not in accordance with normal
      Industry practice</li>
      <li>Warranty will not cover the damages due to manual tampering or
      Destruction due to natural calamity</li>
      </ul>
      <br />
      <h5><strong>Warranty : 5 Years</strong></h5>
      <img src={img} width={150} height={100} alt="phito"  style={{ position:
  "absolute", left: "50px" }}  /> 
  <br/>
  <br/>
  <br />
  
  <h5>For Jay Rao Engineer Solutions </h5>
  <br/>
  <Link to="/solarform" className="btn btn-success mt-2 btn-sm">
                      Get Quote
                    </Link>
      </div>
    ),
    8: 
      (
        <div className="containers">
        <h1>ON-GRID ROOFTOP SOLAR POWER PLANT CAPACITY-6 KW (Three Phase)</h1>
        <br />
        <hr className="horizontal-line" />
        <br />
        <h5><marquee className="red"><strong>Subsidy 6KW - RS 78000/-</strong></marquee></h5>
        <h6>Load Extention Demand - EXTRA AT ACTUAL</h6>
        <br />
        <h5><strong><u>Material description:</u></strong></h5>
        <div className="table-container">
        <table>
        <thead>
        <tr>
        <th>S.No</th>
        <th>Description</th>
        <th>Specification</th>
        <th>Make</th>
        <th>UOM</th>
        <th>Qty</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>1)</td>
        <td>Solar Panel</td>
        <td>MONO-PERC HALF CUT DCR BIFACIAL PANELS 565/575Wp</td>
        <td>Adani/waaree/Prime/Loom</td>
        <td>Nos.</td>
        <td>11</td>
        </tr>
        <tr>
        <td>2)</td>
        <td>Grid Tied inverter</td>
        <td>Grid Tied Inverter 6Kw, 1 Phase. with Wi-fi Monitoring system</td>
        <td>POLYCAB/GROWAT</td>
        <td>Nos.</td>
        <td>1</td>
        </tr>
        <tr>
        <td>3)</td>
        <td>Mounting structure</td>
        <td>Panels shall be mounted on Galvanized structures.</td>
        <td>G.I</td>
        <td>Set</td>
        <td>1</td>
        </tr>
        <tr>
        <td>4)</td>
        <td>Acdb</td>
        <td>GSL Make</td>
        <td>ABB/L&T</td>
        <td>Set</td>
        <td>1</td>
        </tr>
        <tr>
        <td>5)</td>
        <td>Dcdb</td>
        <td>GSL Make</td>
        <td>Mersen Fuse & SPD</td>
        <td>Set</td>
        <td>1</td>
        </tr>
        <tr>
        <td>6)</td>
        <td>Ac Cable</td>
        <td>Copper Cable</td>
        <td>KEI/Polycab/Std</td>
        <td>Set</td>
        <td>As Per req</td>
        </tr>
        <tr>
        <td>7)</td>
        <td>Dc Cable</td>
        <td>Copper (4 Sqmm)</td>
        <td>KEI/Polycab/Std</td>
        <td>Set</td>
        <td>As Per req</td>
        </tr>
        <tr>
        <td>8)</td>
        <td>Balance of Material</td>
        <td>Electric , Cable Tray & Hardware and accessories(as per IS Standard)</td>
        <td>Standard</td>
        <td>Set</td>
        <td>As Per req</td>
        </tr>
        <tr>
        <td>9)</td>
        <td>Earthing Kit</td>
        <td>copper bonded earthing electrode with earth enhancement chemical</td>
        <td>Standard</td>
        <td>Set</td>
        <td>3</td>
        </tr>
        <tr>
        <td>10)</td>
        <td>Lightning Arrestor</td>
        <td>Copper Bonded</td>
        <td>Standard</td>
        <td>Set</td>
        <td>1</td>
        </tr>
        <tr>
        <td>11)</td>
        <td>Gen Meter & Net Meter</td>
        <td>5-10 Amp/10-40 Amp</td>
        <td>HPL & L&T</td>
        <td>Nos</td>
        <td>Inclusive</td>
        </tr>
        </tbody>
        </table>
        </div>
        <h5><strong>Warranty & Standards:</strong></h5>
        <div className="container">
        
        <table className="responsive-table">
        <thead>
        <tr>
        <th>Item</th>
        <th>Warranty</th>
        <th>Standard</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>Solar Module</td>
        <td>12 Years warranty</td>
        <td>From Manufacture</td>
        </tr>
        <tr>
        <td>Solar Module Performance</td>
        <td>30 Years warranty</td>
        <td>From Manufacture</td>
        </tr>
        <tr>
        <td>Solar Inverter</td>
        <td>10/7 years Product warranty</td>
        <td>From Manufacture</td>
        </tr>
        <tr>
        <td>Operation & Maintenance</td>
        <td>5 Years (comprehensive) For ACDB, DCDB and all Electrical Accessories</td>
        <td>From Gentech Solar LLP</td>
        </tr>
        </tbody>
        </table>
        </div>
        <br />
        <h5><strong>Scope of work </strong></h5>
        <br />
        <ul className='orderlist'>
        <li>Liasoning for Net metering approval and commissioning</li>
        <li>Designing of Solar PV Plant.</li>
        <li>Designing of Solar PV Plant.</li>
        <li>Installation of PV modules.</li>
        <li>Supply and installation of inverters, distribution boards, energy meters etc.
        Associated with SPV plant.</li>
        <li>Supply and installation of associated cables and electrical works of solar
        Plant with earthing.</li>
        <li>Commissioning and trial run-out of solar plant.</li>
        <li> Five Years compressive maintenance.</li>
        </ul>
        <br />
        <h5><strong>Scope of Client </strong></h5>
        <br />
        <ul className='orderlist'>
        <li>Adequate shade free rooftop/ground allocation for installation of solar
        plant. </li>
        <li>Availability of grid and approach to site.
        </li>
        <li>Temporary power and water arrangement during EPC.</li>
        <li>Internet Connection. </li>
        <li>Material to be stocked safely at the site.</li>
        </ul>
        <br />
        <h5><strong>Project </strong></h5>
        <br />
        <ul className='orderlist'>
        <li>The specifications, configuration, capacity and quantities quoted are
        Tentative and are subject to change during in-detail engineering fulfilling
        Design requirements with MNRE specification.
        </li>
        <li>It is assumed that the ground is easily accessible and it is flat
        and it is shadow Free.
        </li>
        <li>System will be terminated with the existing LT Panel through
        available spare Feeder within the building.
        </li>
        <li>The system generation is based on actual site condition</li>
        
        </ul>
        <br />
        <h5><strong>Terms & conditions:</strong></h5>
        <br />
        <div className="terms-container">
        <table>
        <tbody>
        <tr>
        <th>Standards</th>
        <td>
        All the terms and conditions mentioned in this proposal are standard.
        Delivery of materials and commissioning of the solar system are
        dependent on-site location and government notices.
        </td>
        </tr>
        <tr>
        <th>Payment</th>
        <td>
        Advance: 20% with order | 70% Before dispatch of Solar Module and
        Inverters | 10% After Commissioning.
        </td>
        </tr>
        <tr>
        <th>Taxes</th>
        <td>GST @ 13.8 % on System.</td>
        </tr>
        <tr>
        <th>Insurance</th>
        <td>Customer Scope.</td>
        </tr>
        <tr>
        <th>Validity</th>
        <td>Above rates are valid for 15 days from the date of offer.</td>
        </tr>
        <tr>
        <th>Transportation</th>
        <td>Including</td>
        </tr>
        <tr>
        <th>Delivery, Installation, Commissioning</th>
        <td>
        Within 5 to 6 Weeks from the date of confirmed Purchase order and
        advance payment in favour of Gentech Solar LLP.
        </td>
        </tr>
        <tr>
        <th>Cancellation</th>
        <td>
        Any order once placed cannot be cancelled or diverted due to any
        reasons under any conditions and the advance paid are
        non-refundable or mutually amount based on the progress of
        project, payment must be paid
        </td>
        </tr>
        <tr>
        <th>Monitoring</th>
        <td>Remote monitoring system included in the cost.</td>
        </tr>
        <tr>
        <th>Civil work and Fabrication</th>
        <td>
        Civil work and fabrication work for solar system required is in
        jresolutions scope.
        </td>
        </tr>
        <tr>
        <th>Electrical Infrastructure, Upgradation</th>
        <td>
        Up gradation or replacement of Electrical Infrastructure, MCB,
        RCCB, ELCB, MCCB and accessories will be in client Scope.
        </td>
        </tr>
        <tr>
        <th>Penalty For Late Payment</th>
        <td>
        The client must honor the invoices raised by jresolutions as per
        agreed payment terms. Late payments will be subject to interest
        of 2% per month or part thereof. Remaining 5 % of the cost must
        be paid within a week after commissioning of the plant or
        customer will be charged late fees of 3% of the project price as
        mentioned above.
        </td>
        </tr>
        <tr>
        <th>On Grid Failure</th>
        <td>
        The plant will cease to feed supply to the grid until the grid is
        restored.
        </td>
        </tr>
        <tr>
        <th>Interruption in work</th>
        <td>
        The Customer must not interrupt the works, and/or shall abstain
        from any act or omission of which it can reasonably be expected
        that it may delay the works or make the works more.
        </td>
        </tr>
        </tbody>
        </table>
        </div>
        <br />
        <h5><strong>Project </strong></h5>
        <br />
        <ul className='orderlist'>
        <li>The warranty shall not apply to defects resulting from:
        </li>
        <li>Any materials, components, tools, design or software provided by the client;
        </li>
        <li>Negligence or willful misconduct of client or anyone;
        </li>
        <li>Improper service work, installations or alterations carried out by the client or Third party without our written consent;
        </li>
        <li>Any trial or experiment carried out by the client on the system without our
        Written consent;
        </li>
        <li>Any use, service or operation of any equipment, parts or components which
        Is not in conformity with manuals, instructions or specifications provided by
        The manufacturer or which is otherwise not in accordance with normal
        Industry practice</li>
        <li>Warranty will not cover the damages due to manual tampering or
        Destruction due to natural calamity</li>
        </ul>
        <br />
        <h5><strong>Warranty : 5 Years</strong></h5>
        <img src={img} width={150} height={100} alt="phito"  style={{ position:
  "absolute", left: "50px" }}  /> 
  <br/>
  <br/>
  <br />
  <h5>For Jay Rao Engineer Solutions </h5>
        </div>
      ),
    
    9:  (
      <div className="containers">
      <h1>ON-GRID ROOFTOP SOLAR POWER PLANT CAPACITY-7 KW (Three Phase)</h1>
      <br />
      <hr className="horizontal-line" />
      <br />
      <h5><marquee className="red"><strong>Subsidy 7KW - RS 78000/-</strong></marquee></h5>
      <h6>Load Extention Demand - EXTRA AT ACTUAL</h6>
      <br />
      <h5><strong><u>Material description:</u></strong></h5>
      <div className="table-container">
      <table>
      <thead>
      <tr>
      <th>S.No</th>
      <th>Description</th>
      <th>Specification</th>
      <th>Make</th>
      <th>UOM</th>
      <th>Qty</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>1)</td>
      <td>Solar Panel</td>
      <td>MONO-PERC HALF CUT DCR BIFACIAL PANELS 565/575Wp</td>
      <td>Adani/waaree</td>
      <td>Nos.</td>
      <td>13</td>
      </tr>
      <tr>
      <td>2)</td>
      <td>Grid Tied inverter</td>
      <td>Grid Tied Inverter 7Kw, 1 Phase. with Wi-fi Monitoring system</td>
      <td>POLYCAB/GROWAT</td>
      <td>Nos.</td>
      <td>1</td>
      </tr>
      <tr>
      <td>3)</td>
      <td>Mounting structure</td>
      <td>Panels shall be mounted on Galvanized structures.</td>
      <td>G.I</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>4)</td>
      <td>Acdb</td>
      <td>GSL Make</td>
      <td>ABB/L&T</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>5)</td>
      <td>Dcdb</td>
      <td>GSL Make</td>
      <td>Mersen Fuse & SPD</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>6)</td>
      <td>Ac Cable</td>
      <td>Copper Cable</td>
      <td>KEI/Polycab/Std</td>
      <td>Set</td>
      <td>As Per req</td>
      </tr>
      <tr>
      <td>7)</td>
      <td>Dc Cable</td>
      <td>Copper (4 Sqmm)</td>
      <td>KEI/Polycab/Std</td>
      <td>Set</td>
      <td>As Per req</td>
      </tr>
      <tr>
      <td>8)</td>
      <td>Balance of Material</td>
      <td>Electric , Cable Tray & Hardware and accessories(as per IS Standard)</td>
      <td>Standard</td>
      <td>Set</td>
      <td>As Per req</td>
      </tr>
      <tr>
      <td>9)</td>
      <td>Earthing Kit</td>
      <td>copper bonded earthing electrode with earth enhancement chemical</td>
      <td>Standard</td>
      <td>Set</td>
      <td>3</td>
      </tr>
      <tr>
      <td>10)</td>
      <td>Lightning Arrestor</td>
      <td>Copper Bonded</td>
      <td>Standard</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>11)</td>
      <td>Gen Meter & Net Meter</td>
      <td>5-10 Amp/10-40 Amp</td>
      <td>HPL & L&T</td>
      <td>Nos</td>
      <td>Inclusive</td>
      </tr>
      </tbody>
      </table>
      </div>
      <h5><strong>Warranty & Standards:</strong></h5>
      <div className="container">
      
      <table className="responsive-table">
      <thead>
      <tr>
      <th>Item</th>
      <th>Warranty</th>
      <th>Standard</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>Solar Module</td>
      <td>12 Years warranty</td>
      <td>From Manufacture</td>
      </tr>
      <tr>
      <td>Solar Module Performance</td>
      <td>30 Years warranty</td>
      <td>From Manufacture</td>
      </tr>
      <tr>
      <td>Solar Inverter</td>
      <td>10/7 years Product warranty</td>
      <td>From Manufacture</td>
      </tr>
      <tr>
      <td>Operation & Maintenance</td>
      <td>5 Years (comprehensive) For ACDB, DCDB and all Electrical Accessories</td>
      <td>From Gentech Solar LLP</td>
      </tr>
      </tbody>
      </table>
      </div>
      <br />
      <h5><strong>Scope of work </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>Liasoning for Net metering approval and commissioning</li>
      <li>Designing of Solar PV Plant.</li>
      <li>Designing of Solar PV Plant.</li>
      <li>Installation of PV modules.</li>
      <li>Supply and installation of inverters, distribution boards, energy meters etc.
      Associated with SPV plant.</li>
      <li>Supply and installation of associated cables and electrical works of solar
      Plant with earthing.</li>
      <li>Commissioning and trial run-out of solar plant.</li>
      <li> Five Years compressive maintenance.</li>
      </ul>
      <br />
      <h5><strong>Scope of Client </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>Adequate shade free rooftop/ground allocation for installation of solar
      plant. </li>
      <li>Availability of grid and approach to site.
      </li>
      <li>Temporary power and water arrangement during EPC.</li>
      <li>Internet Connection. </li>
      <li>Material to be stocked safely at the site.</li>
      </ul>
      <br />
      <h5><strong>Project </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>The specifications, configuration, capacity and quantities quoted are
      Tentative and are subject to change during in-detail engineering fulfilling
      Design requirements with MNRE specification.
      </li>
      <li>It is assumed that the ground is easily accessible and it is flat
      and it is shadow Free.
      </li>
      <li>System will be terminated with the existing LT Panel through
      available spare Feeder within the building.
      </li>
      <li>The system generation is based on actual site condition</li>
      
      </ul>
      <br />
      <h5><strong>Terms & conditions:</strong></h5>
      <br />
      <div className="terms-container">
      <table>
      <tbody>
      <tr>
      <th>Standards</th>
      <td>
      All the terms and conditions mentioned in this proposal are standard.
      Delivery of materials and commissioning of the solar system are
      dependent on-site location and government notices.
      </td>
      </tr>
      <tr>
      <th>Payment</th>
      <td>
      Advance: 20% with order | 70% Before dispatch of Solar Module and
      Inverters | 10% After Commissioning.
      </td>
      </tr>
      <tr>
      <th>Taxes</th>
      <td>GST @ 13.8 % on System.</td>
      </tr>
      <tr>
      <th>Insurance</th>
      <td>Customer Scope.</td>
      </tr>
      <tr>
      <th>Validity</th>
      <td>Above rates are valid for 15 days from the date of offer.</td>
      </tr>
      <tr>
      <th>Transportation</th>
      <td>Including</td>
      </tr>
      <tr>
      <th>Delivery, Installation, Commissioning</th>
      <td>
      Within 5 to 6 Weeks from the date of confirmed Purchase order and
      advance payment in favour of Gentech Solar LLP.
      </td>
      </tr>
      <tr>
      <th>Cancellation</th>
      <td>
      Any order once placed cannot be cancelled or diverted due to any
      reasons under any conditions and the advance paid are
      non-refundable or mutually amount based on the progress of
      project, payment must be paid
      </td>
      </tr>
      <tr>
      <th>Monitoring</th>
      <td>Remote monitoring system included in the cost.</td>
      </tr>
      <tr>
      <th>Civil work and Fabrication</th>
      <td>
      Civil work and fabrication work for solar system required is in
      jresolutions scope.
      </td>
      </tr>
      <tr>
      <th>Electrical Infrastructure, Upgradation</th>
      <td>
      Up gradation or replacement of Electrical Infrastructure, MCB,
      RCCB, ELCB, MCCB and accessories will be in client Scope.
      </td>
      </tr>
      <tr>
      <th>Penalty For Late Payment</th>
      <td>
      The client must honor the invoices raised by jresolutions as per
      agreed payment terms. Late payments will be subject to interest
      of 2% per month or part thereof. Remaining 5 % of the cost must
      be paid within a week after commissioning of the plant or
      customer will be charged late fees of 3% of the project price as
      mentioned above.
      </td>
      </tr>
      <tr>
      <th>On Grid Failure</th>
      <td>
      The plant will cease to feed supply to the grid until the grid is
      restored.
      </td>
      </tr>
      <tr>
      <th>Interruption in work</th>
      <td>
      The Customer must not interrupt the works, and/or shall abstain
      from any act or omission of which it can reasonably be expected
      that it may delay the works or make the works more.
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      <br />
      <h5><strong>Project </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>The warranty shall not apply to defects resulting from:
      </li>
      <li>Any materials, components, tools, design or software provided by the client;
      </li>
      <li>Negligence or willful misconduct of client or anyone;
      </li>
      <li>Improper service work, installations or alterations carried out by the client or Third party without our written consent;
      </li>
      <li>Any trial or experiment carried out by the client on the system without our
      Written consent;
      </li>
      <li>Any use, service or operation of any equipment, parts or components which
      Is not in conformity with manuals, instructions or specifications provided by
      The manufacturer or which is otherwise not in accordance with normal
      Industry practice</li>
      <li>Warranty will not cover the damages due to manual tampering or
      Destruction due to natural calamity</li>
      </ul>
      <br />
      <h5><strong>Warranty : 5 Years</strong></h5>
      <img src={img} width={150} height={100} alt="phito"  style={{ position:
  "absolute", left: "50px" }}  /> 
  <br/>
  <br/>
  <br />
  <h5>For Jay Rao Engineer Solutions </h5>
  <br/>
  <Link to="/solarform" className="btn btn-success mt-2 btn-sm">
                      Get Quote
                    </Link>
      </div>
    ),
    10:  (
      <div className="containers">
      <h1>ON-GRID ROOFTOP SOLAR POWER PLANT CAPACITY-8 KW (Three Phase)</h1>
      <br />
      <hr className="horizontal-line" />
      <br />
      <h5><marquee className="red"><strong>Subsidy 8KW - RS 78000/-</strong></marquee></h5>
      <h6>Load Extention Demand - EXTRA AT ACTUAL</h6>
      <br />
      <h5><strong><u>Material description:</u></strong></h5>
      <div className="table-container">
      <table>
      <thead>
      <tr>
      <th>S.No</th>
      <th>Description</th>
      <th>Specification</th>
      <th>Make</th>
      <th>UOM</th>
      <th>Qty</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>1)</td>
      <td>Solar Panel</td>
      <td>MONO-PERC HALF CUT DCR BIFACIAL PANELS 565/575Wp</td>
      <td>Adani/waaree/Prime/Loom</td>
      <td>Nos.</td>
      <td>14</td>
      </tr>
      <tr>
      <td>2)</td>
      <td>Grid Tied inverter</td>
      <td>Grid Tied Inverter 8Kw, 1 Phase. with Wi-fi Monitoring system</td>
      <td>POLYCAB/GROWAT</td>
      <td>Nos.</td>
      <td>1</td>
      </tr>
      <tr>
      <td>3)</td>
      <td>Mounting structure</td>
      <td>Panels shall be mounted on Galvanized structures.</td>
      <td>G.I</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>4)</td>
      <td>Acdb</td>
      <td>GSL Make</td>
      <td>ABB/L&T</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>5)</td>
      <td>Dcdb</td>
      <td>GSL Make</td>
      <td>Mersen Fuse & SPD</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>6)</td>
      <td>Ac Cable</td>
      <td>Copper Cable</td>
      <td>KEI/Polycab/Std</td>
      <td>Set</td>
      <td>As Per req</td>
      </tr>
      <tr>
      <td>7)</td>
      <td>Dc Cable</td>
      <td>Copper (4 Sqmm)</td>
      <td>KEI/Polycab/Std</td>
      <td>Set</td>
      <td>As Per req</td>
      </tr>
      <tr>
      <td>8)</td>
      <td>Balance of Material</td>
      <td>Electric , Cable Tray & Hardware and accessories(as per IS Standard)</td>
      <td>Standard</td>
      <td>Set</td>
      <td>As Per req</td>
      </tr>
      <tr>
      <td>9)</td>
      <td>Earthing Kit</td>
      <td>copper bonded earthing electrode with earth enhancement chemical</td>
      <td>Standard</td>
      <td>Set</td>
      <td>3</td>
      </tr>
      <tr>
      <td>10)</td>
      <td>Lightning Arrestor</td>
      <td>Copper Bonded</td>
      <td>Standard</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>11)</td>
      <td>Gen Meter & Net Meter</td>
      <td>5-10 Amp/10-40 Amp</td>
      <td>HPL & L&T</td>
      <td>Nos</td>
      <td>Inclusive</td>
      </tr>
      </tbody>
      </table>
      </div>
      <h5><strong>Warranty & Standards:</strong></h5>
      <div className="container">
      
      <table className="responsive-table">
      <thead>
      <tr>
      <th>Item</th>
      <th>Warranty</th>
      <th>Standard</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>Solar Module</td>
      <td>12 Years warranty</td>
      <td>From Manufacture</td>
      </tr>
      <tr>
      <td>Solar Module Performance</td>
      <td>30 Years warranty</td>
      <td>From Manufacture</td>
      </tr>
      <tr>
      <td>Solar Inverter</td>
      <td>10/7 years Product warranty</td>
      <td>From Manufacture</td>
      </tr>
      <tr>
      <td>Operation & Maintenance</td>
      <td>5 Years (comprehensive) For ACDB, DCDB and all Electrical Accessories</td>
      <td>From Gentech Solar LLP</td>
      </tr>
      </tbody>
      </table>
      </div>
      <br />
      <h5><strong>Scope of work </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>Liasoning for Net metering approval and commissioning</li>
      <li>Designing of Solar PV Plant.</li>
      <li>Designing of Solar PV Plant.</li>
      <li>Installation of PV modules.</li>
      <li>Supply and installation of inverters, distribution boards, energy meters etc.
      Associated with SPV plant.</li>
      <li>Supply and installation of associated cables and electrical works of solar
      Plant with earthing.</li>
      <li>Commissioning and trial run-out of solar plant.</li>
      <li> Five Years compressive maintenance.</li>
      </ul>
      <br />
      <h5><strong>Scope of Client </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>Adequate shade free rooftop/ground allocation for installation of solar
      plant. </li>
      <li>Availability of grid and approach to site.
      </li>
      <li>Temporary power and water arrangement during EPC.</li>
      <li>Internet Connection. </li>
      <li>Material to be stocked safely at the site.</li>
      </ul>
      <br />
      <h5><strong>Project </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>The specifications, configuration, capacity and quantities quoted are
      Tentative and are subject to change during in-detail engineering fulfilling
      Design requirements with MNRE specification.
      </li>
      <li>It is assumed that the ground is easily accessible and it is flat
      and it is shadow Free.
      </li>
      <li>System will be terminated with the existing LT Panel through
      available spare Feeder within the building.
      </li>
      <li>The system generation is based on actual site condition</li>
      
      </ul>
      <br />
      <h5><strong>Terms & conditions:</strong></h5>
      <br />
      <div className="terms-container">
      <table>
      <tbody>
      <tr>
      <th>Standards</th>
      <td>
      All the terms and conditions mentioned in this proposal are standard.
      Delivery of materials and commissioning of the solar system are
      dependent on-site location and government notices.
      </td>
      </tr>
      <tr>
      <th>Payment</th>
      <td>
      Advance: 20% with order | 70% Before dispatch of Solar Module and
      Inverters | 10% After Commissioning.
      </td>
      </tr>
      <tr>
      <th>Taxes</th>
      <td>GST @ 13.8 % on System.</td>
      </tr>
      <tr>
      <th>Insurance</th>
      <td>Customer Scope.</td>
      </tr>
      <tr>
      <th>Validity</th>
      <td>Above rates are valid for 15 days from the date of offer.</td>
      </tr>
      <tr>
      <th>Transportation</th>
      <td>Including</td>
      </tr>
      <tr>
      <th>Delivery, Installation, Commissioning</th>
      <td>
      Within 5 to 6 Weeks from the date of confirmed Purchase order and
      advance payment in favour of Gentech Solar LLP.
      </td>
      </tr>
      <tr>
      <th>Cancellation</th>
      <td>
      Any order once placed cannot be cancelled or diverted due to any
      reasons under any conditions and the advance paid are
      non-refundable or mutually amount based on the progress of
      project, payment must be paid
      </td>
      </tr>
      <tr>
      <th>Monitoring</th>
      <td>Remote monitoring system included in the cost.</td>
      </tr>
      <tr>
      <th>Civil work and Fabrication</th>
      <td>
      Civil work and fabrication work for solar system required is in
      jresolutions scope.
      </td>
      </tr>
      <tr>
      <th>Electrical Infrastructure, Upgradation</th>
      <td>
      Up gradation or replacement of Electrical Infrastructure, MCB,
      RCCB, ELCB, MCCB and accessories will be in client Scope.
      </td>
      </tr>
      <tr>
      <th>Penalty For Late Payment</th>
      <td>
      The client must honor the invoices raised by jresolutions as per
      agreed payment terms. Late payments will be subject to interest
      of 2% per month or part thereof. Remaining 5 % of the cost must
      be paid within a week after commissioning of the plant or
      customer will be charged late fees of 3% of the project price as
      mentioned above.
      </td>
      </tr>
      <tr>
      <th>On Grid Failure</th>
      <td>
      The plant will cease to feed supply to the grid until the grid is
      restored.
      </td>
      </tr>
      <tr>
      <th>Interruption in work</th>
      <td>
      The Customer must not interrupt the works, and/or shall abstain
      from any act or omission of which it can reasonably be expected
      that it may delay the works or make the works more.
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      <br />
      <h5><strong>Project </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>The warranty shall not apply to defects resulting from:
      </li>
      <li>Any materials, components, tools, design or software provided by the client;
      </li>
      <li>Negligence or willful misconduct of client or anyone;
      </li>
      <li>Improper service work, installations or alterations carried out by the client or Third party without our written consent;
      </li>
      <li>Any trial or experiment carried out by the client on the system without our
      Written consent;
      </li>
      <li>Any use, service or operation of any equipment, parts or components which
      Is not in conformity with manuals, instructions or specifications provided by
      The manufacturer or which is otherwise not in accordance with normal
      Industry practice</li>
      <li>Warranty will not cover the damages due to manual tampering or
      Destruction due to natural calamity</li>
      </ul>
      <br />
      <h5><strong>Warranty : 5 Years</strong></h5>
      <img src={img} width={150} height={100} alt="phito"  style={{ position:
  "absolute", left: "50px" }}  /> 
  <br/>
  <br/>
  <br />
  <h5>For Jay Rao Engineer Solutions </h5>
  <br/>
  <Link to="/solarform" className="btn btn-success mt-2 btn-sm">
                      Get Quote
                    </Link>
      </div>
    ),
    11:  (
      <div className="containers">
      <h1>ON-GRID ROOFTOP SOLAR POWER PLANT CAPACITY-9 KW (Three Phase)</h1>
      <br />
      <hr className="horizontal-line" />
      <br />
      <h5><marquee className="red"><strong>Subsidy 9KW - RS 78000/-</strong></marquee></h5>
      <h6>Load Extention Demand - EXTRA AT ACTUAL</h6>
      <br />
      <h5><strong><u>Material description:</u></strong></h5>
      <div className="table-container">
      <table>
      <thead>
      <tr>
      <th>S.No</th>
      <th>Description</th>
      <th>Specification</th>
      <th>Make</th>
      <th>UOM</th>
      <th>Qty</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>1)</td>
      <td>Solar Panel</td>
      <td>MONO-PERC HALF CUT DCR BIFACIAL PANELS 565/575Wp</td>
      <td>Adani/waaree/Prime/Loom</td>
      <td>Nos.</td>
      <td>16</td>
      </tr>
      <tr>
      <td>2)</td>
      <td>Grid Tied inverter</td>
      <td>Grid Tied Inverter 9Kw, 1 Phase. with Wi-fi Monitoring system</td>
      <td>POLYCAB/GROWAT</td>
      <td>Nos.</td>
      <td>1</td>
      </tr>
      <tr>
      <td>3)</td>
      <td>Mounting structure</td>
      <td>Panels shall be mounted on Galvanized structures.</td>
      <td>G.I</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>4)</td>
      <td>Acdb</td>
      <td>GSL Make</td>
      <td>ABB/L&T</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>5)</td>
      <td>Dcdb</td>
      <td>GSL Make</td>
      <td>Mersen Fuse & SPD</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>6)</td>
      <td>Ac Cable</td>
      <td>Copper Cable</td>
      <td>KEI/Polycab/Std</td>
      <td>Set</td>
      <td>As Per req</td>
      </tr>
      <tr>
      <td>7)</td>
      <td>Dc Cable</td>
      <td>Copper (4 Sqmm)</td>
      <td>KEI/Polycab/Std</td>
      <td>Set</td>
      <td>As Per req</td>
      </tr>
      <tr>
      <td>8)</td>
      <td>Balance of Material</td>
      <td>Electric , Cable Tray & Hardware and accessories(as per IS Standard)</td>
      <td>Standard</td>
      <td>Set</td>
      <td>As Per req</td>
      </tr>
      <tr>
      <td>9)</td>
      <td>Earthing Kit</td>
      <td>copper bonded earthing electrode with earth enhancement chemical</td>
      <td>Standard</td>
      <td>Set</td>
      <td>3</td>
      </tr>
      <tr>
      <td>10)</td>
      <td>Lightning Arrestor</td>
      <td>Copper Bonded</td>
      <td>Standard</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>11)</td>
      <td>Gen Meter & Net Meter</td>
      <td>5-10 Amp/10-40 Amp</td>
      <td>HPL & L&T</td>
      <td>Nos</td>
      <td>Inclusive</td>
      </tr>
      </tbody>
      </table>
      </div>
      <h5><strong>Warranty & Standards:</strong></h5>
      <div className="container">
      
      <table className="responsive-table">
      <thead>
      <tr>
      <th>Item</th>
      <th>Warranty</th>
      <th>Standard</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>Solar Module</td>
      <td>12 Years warranty</td>
      <td>From Manufacture</td>
      </tr>
      <tr>
      <td>Solar Module Performance</td>
      <td>30 Years warranty</td>
      <td>From Manufacture</td>
      </tr>
      <tr>
      <td>Solar Inverter</td>
      <td>10/7 years Product warranty</td>
      <td>From Manufacture</td>
      </tr>
      <tr>
      <td>Operation & Maintenance</td>
      <td>5 Years (comprehensive) For ACDB, DCDB and all Electrical Accessories</td>
      <td>From Gentech Solar LLP</td>
      </tr>
      </tbody>
      </table>
      </div>
      <br />
      <h5><strong>Scope of work </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>Liasoning for Net metering approval and commissioning</li>
      <li>Designing of Solar PV Plant.</li>
      <li>Designing of Solar PV Plant.</li>
      <li>Installation of PV modules.</li>
      <li>Supply and installation of inverters, distribution boards, energy meters etc.
      Associated with SPV plant.</li>
      <li>Supply and installation of associated cables and electrical works of solar
      Plant with earthing.</li>
      <li>Commissioning and trial run-out of solar plant.</li>
      <li> Five Years compressive maintenance.</li>
      </ul>
      <br />
      <h5><strong>Scope of Client </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>Adequate shade free rooftop/ground allocation for installation of solar
      plant. </li>
      <li>Availability of grid and approach to site.
      </li>
      <li>Temporary power and water arrangement during EPC.</li>
      <li>Internet Connection. </li>
      <li>Material to be stocked safely at the site.</li>
      </ul>
      <br />
      <h5><strong>Project </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>The specifications, configuration, capacity and quantities quoted are
      Tentative and are subject to change during in-detail engineering fulfilling
      Design requirements with MNRE specification.
      </li>
      <li>It is assumed that the ground is easily accessible and it is flat
      and it is shadow Free.
      </li>
      <li>System will be terminated with the existing LT Panel through
      available spare Feeder within the building.
      </li>
      <li>The system generation is based on actual site condition</li>
      
      </ul>
      <br />
      <h5><strong>Terms & conditions:</strong></h5>
      <br />
      <div className="terms-container">
      <table>
      <tbody>
      <tr>
      <th>Standards</th>
      <td>
      All the terms and conditions mentioned in this proposal are standard.
      Delivery of materials and commissioning of the solar system are
      dependent on-site location and government notices.
      </td>
      </tr>
      <tr>
      <th>Payment</th>
      <td>
      Advance: 20% with order | 70% Before dispatch of Solar Module and
      Inverters | 10% After Commissioning.
      </td>
      </tr>
      <tr>
      <th>Taxes</th>
      <td>GST @ 13.8 % on System.</td>
      </tr>
      <tr>
      <th>Insurance</th>
      <td>Customer Scope.</td>
      </tr>
      <tr>
      <th>Validity</th>
      <td>Above rates are valid for 15 days from the date of offer.</td>
      </tr>
      <tr>
      <th>Transportation</th>
      <td>Including</td>
      </tr>
      <tr>
      <th>Delivery, Installation, Commissioning</th>
      <td>
      Within 5 to 6 Weeks from the date of confirmed Purchase order and
      advance payment in favour of Gentech Solar LLP.
      </td>
      </tr>
      <tr>
      <th>Cancellation</th>
      <td>
      Any order once placed cannot be cancelled or diverted due to any
      reasons under any conditions and the advance paid are
      non-refundable or mutually amount based on the progress of
      project, payment must be paid
      </td>
      </tr>
      <tr>
      <th>Monitoring</th>
      <td>Remote monitoring system included in the cost.</td>
      </tr>
      <tr>
      <th>Civil work and Fabrication</th>
      <td>
      Civil work and fabrication work for solar system required is in
      jresolutions scope.
      </td>
      </tr>
      <tr>
      <th>Electrical Infrastructure, Upgradation</th>
      <td>
      Up gradation or replacement of Electrical Infrastructure, MCB,
      RCCB, ELCB, MCCB and accessories will be in client Scope.
      </td>
      </tr>
      <tr>
      <th>Penalty For Late Payment</th>
      <td>
      The client must honor the invoices raised by jresolutions as per
      agreed payment terms. Late payments will be subject to interest
      of 2% per month or part thereof. Remaining 5 % of the cost must
      be paid within a week after commissioning of the plant or
      customer will be charged late fees of 3% of the project price as
      mentioned above.
      </td>
      </tr>
      <tr>
      <th>On Grid Failure</th>
      <td>
      The plant will cease to feed supply to the grid until the grid is
      restored.
      </td>
      </tr>
      <tr>
      <th>Interruption in work</th>
      <td>
      The Customer must not interrupt the works, and/or shall abstain
      from any act or omission of which it can reasonably be expected
      that it may delay the works or make the works more.
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      <br />
      <h5><strong>Project </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>The warranty shall not apply to defects resulting from:
      </li>
      <li>Any materials, components, tools, design or software provided by the client;
      </li>
      <li>Negligence or willful misconduct of client or anyone;
      </li>
      <li>Improper service work, installations or alterations carried out by the client or Third party without our written consent;
      </li>
      <li>Any trial or experiment carried out by the client on the system without our
      Written consent;
      </li>
      <li>Any use, service or operation of any equipment, parts or components which
      Is not in conformity with manuals, instructions or specifications provided by
      The manufacturer or which is otherwise not in accordance with normal
      Industry practice</li>
      <li>Warranty will not cover the damages due to manual tampering or
      Destruction due to natural calamity</li>
      </ul>
      <br />
      <h5><strong>Warranty : 5 Years</strong></h5>
      <img src={img} width={150} height={100} alt="phito"  style={{ position:
  "absolute", left: "50px" }}  /> 
  <br/>
  <br/>
  <br />
  <h5>For Jay Rao Engineer Solutions </h5>
  <Link to="/solarform" className="btn btn-success mt-2 btn-sm">
                      Get Quote
                    </Link>
      </div>
    ),
    12:  (
      <div className="containers">
      <h1>ON-GRID ROOFTOP SOLAR POWER PLANT CAPACITY-10 KW (Three Phase)</h1>
      <br />
      <hr className="horizontal-line" />
      <br />
      <h5><marquee className="red"><strong>Subsidy 10KW - RS 78000/-</strong></marquee></h5>
      <h6>Load Extention Demand - EXTRA AT ACTUAL</h6>
      <br />
      <h5><strong><u>Material description:</u></strong></h5>
      <div className="table-container">
      <table>
      <thead>
      <tr>
      <th>S.No</th>
      <th>Description</th>
      <th>Specification</th>
      <th>Make</th>
      <th>UOM</th>
      <th>Qty</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>1)</td>
      <td>Solar Panel</td>
      <td>MONO-PERC HALF CUT DCR BIFACIAL PANELS 565/575Wp</td>
      <td>Adani/waaree/Prime/Loom</td>
      <td>Nos.</td>
      <td>18</td>
      </tr>
      <tr>
      <td>2)</td>
      <td>Grid Tied inverter</td>
      <td>Grid Tied Inverter 10Kw, 1 Phase. with Wi-fi Monitoring system</td>
      <td>POLYCAB/GROWAT</td>
      <td>Nos.</td>
      <td>1</td>
      </tr>
      <tr>
      <td>3)</td>
      <td>Mounting structure</td>
      <td>Panels shall be mounted on Galvanized structures.</td>
      <td>G.I</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>4)</td>
      <td>Acdb</td>
      <td>GSL Make</td>
      <td>ABB/L&T</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>5)</td>
      <td>Dcdb</td>
      <td>GSL Make</td>
      <td>Mersen Fuse & SPD</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>6)</td>
      <td>Ac Cable</td>
      <td>Copper Cable</td>
      <td>KEI/Polycab/Std</td>
      <td>Set</td>
      <td>As Per req</td>
      </tr>
      <tr>
      <td>7)</td>
      <td>Dc Cable</td>
      <td>Copper (4 Sqmm)</td>
      <td>KEI/Polycab/Std</td>
      <td>Set</td>
      <td>As Per req</td>
      </tr>
      <tr>
      <td>8)</td>
      <td>Balance of Material</td>
      <td>Electric , Cable Tray & Hardware and accessories(as per IS Standard)</td>
      <td>Standard</td>
      <td>Set</td>
      <td>As Per req</td>
      </tr>
      <tr>
      <td>9)</td>
      <td>Earthing Kit</td>
      <td>copper bonded earthing electrode with earth enhancement chemical</td>
      <td>Standard</td>
      <td>Set</td>
      <td>3</td>
      </tr>
      <tr>
      <td>10)</td>
      <td>Lightning Arrestor</td>
      <td>Copper Bonded</td>
      <td>Standard</td>
      <td>Set</td>
      <td>1</td>
      </tr>
      <tr>
      <td>11)</td>
      <td>Gen Meter & Net Meter</td>
      <td>5-10 Amp/10-40 Amp</td>
      <td>HPL & L&T</td>
      <td>Nos</td>
      <td>Inclusive</td>
      </tr>
      </tbody>
      </table>
      </div>
      <h5><strong>Warranty & Standards:</strong></h5>
      <div className="container">
      
      <table className="responsive-table">
      <thead>
      <tr>
      <th>Item</th>
      <th>Warranty</th>
      <th>Standard</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>Solar Module</td>
      <td>12 Years warranty</td>
      <td>From Manufacture</td>
      </tr>
      <tr>
      <td>Solar Module Performance</td>
      <td>30 Years warranty</td>
      <td>From Manufacture</td>
      </tr>
      <tr>
      <td>Solar Inverter</td>
      <td>10/7 years Product warranty</td>
      <td>From Manufacture</td>
      </tr>
      <tr>
      <td>Operation & Maintenance</td>
      <td>5 Years (comprehensive) For ACDB, DCDB and all Electrical Accessories</td>
      <td>From Gentech Solar LLP</td>
      </tr>
      </tbody>
      </table>
      </div>
      <br />
      <h5><strong>Scope of work </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>Liasoning for Net metering approval and commissioning</li>
      <li>Designing of Solar PV Plant.</li>
      <li>Designing of Solar PV Plant.</li>
      <li>Installation of PV modules.</li>
      <li>Supply and installation of inverters, distribution boards, energy meters etc.
      Associated with SPV plant.</li>
      <li>Supply and installation of associated cables and electrical works of solar
      Plant with earthing.</li>
      <li>Commissioning and trial run-out of solar plant.</li>
      <li> Five Years compressive maintenance.</li>
      </ul>
      <br />
      <h5><strong>Scope of Client </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>Adequate shade free rooftop/ground allocation for installation of solar
      plant. </li>
      <li>Availability of grid and approach to site.
      </li>
      <li>Temporary power and water arrangement during EPC.</li>
      <li>Internet Connection. </li>
      <li>Material to be stocked safely at the site.</li>
      </ul>
      <br />
      <h5><strong>Project </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>The specifications, configuration, capacity and quantities quoted are
      Tentative and are subject to change during in-detail engineering fulfilling
      Design requirements with MNRE specification.
      </li>
      <li>It is assumed that the ground is easily accessible and it is flat
      and it is shadow Free.
      </li>
      <li>System will be terminated with the existing LT Panel through
      available spare Feeder within the building.
      </li>
      <li>The system generation is based on actual site condition</li>
      
      </ul>
      <br />
      <h5><strong>Terms & conditions:</strong></h5>
      <br />
      <div className="terms-container">
      <table>
      <tbody>
      <tr>
      <th>Standards</th>
      <td>
      All the terms and conditions mentioned in this proposal are standard.
      Delivery of materials and commissioning of the solar system are
      dependent on-site location and government notices.
      </td>
      </tr>
      <tr>
      <th>Payment</th>
      <td>
      Advance: 20% with order | 70% Before dispatch of Solar Module and
      Inverters | 10% After Commissioning.
      </td>
      </tr>
      <tr>
      <th>Taxes</th>
      <td>GST @ 13.8 % on System.</td>
      </tr>
      <tr>
      <th>Insurance</th>
      <td>Customer Scope.</td>
      </tr>
      <tr>
      <th>Validity</th>
      <td>Above rates are valid for 15 days from the date of offer.</td>
      </tr>
      <tr>
      <th>Transportation</th>
      <td>Including</td>
      </tr>
      <tr>
      <th>Delivery, Installation, Commissioning</th>
      <td>
      Within 5 to 6 Weeks from the date of confirmed Purchase order and
      advance payment in favour of Gentech Solar LLP.
      </td>
      </tr>
      <tr>
      <th>Cancellation</th>
      <td>
      Any order once placed cannot be cancelled or diverted due to any
      reasons under any conditions and the advance paid are
      non-refundable or mutually amount based on the progress of
      project, payment must be paid
      </td>
      </tr>
      <tr>
      <th>Monitoring</th>
      <td>Remote monitoring system included in the cost.</td>
      </tr>
      <tr>
      <th>Civil work and Fabrication</th>
      <td>
      Civil work and fabrication work for solar system required is in
      jresolutions scope.
      </td>
      </tr>
      <tr>
      <th>Electrical Infrastructure, Upgradation</th>
      <td>
      Up gradation or replacement of Electrical Infrastructure, MCB,
      RCCB, ELCB, MCCB and accessories will be in client Scope.
      </td>
      </tr>
      <tr>
      <th>Penalty For Late Payment</th>
      <td>
      The client must honor the invoices raised by jresolutions as per
      agreed payment terms. Late payments will be subject to interest
      of 2% per month or part thereof. Remaining 5 % of the cost must
      be paid within a week after commissioning of the plant or
      customer will be charged late fees of 3% of the project price as
      mentioned above.
      </td>
      </tr>
      <tr>
      <th>On Grid Failure</th>
      <td>
      The plant will cease to feed supply to the grid until the grid is
      restored.
      </td>
      </tr>
      <tr>
      <th>Interruption in work</th>
      <td>
      The Customer must not interrupt the works, and/or shall abstain
      from any act or omission of which it can reasonably be expected
      that it may delay the works or make the works more.
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      <br />
      <h5><strong>Project </strong></h5>
      <br />
      <ul className='orderlist'>
      <li>The warranty shall not apply to defects resulting from:
      </li>
      <li>Any materials, components, tools, design or software provided by the client;
      </li>
      <li>Negligence or willful misconduct of client or anyone;
      </li>
      <li>Improper service work, installations or alterations carried out by the client or Third party without our written consent;
      </li>
      <li>Any trial or experiment carried out by the client on the system without our
      Written consent;
      </li>
      <li>Any use, service or operation of any equipment, parts or components which
      Is not in conformity with manuals, instructions or specifications provided by
      The manufacturer or which is otherwise not in accordance with normal
      Industry practice</li>
      <li>Warranty will not cover the damages due to manual tampering or
      Destruction due to natural calamity</li>
      </ul>
      <br />
      <h5><strong>Warranty : 5 Years</strong></h5>
      <img src={img} width={150} height={100} alt="phito"  style={{ position:
  "absolute", left: "50px" }}  /> 
  <br/>
  <br/>
  <br />
  <h5>For Jay Rao Engineer Solutions </h5>
  <br/>
  <Link to="/solarform"  className="btn btn-success mt-2 btn-sm">
                      Get Quote
                    </Link>
      </div>
      
    ),
  };


  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  
  useEffect(() => {
    const carousel = document.querySelector("#heroCarousel");
    if (carousel) {
      new window.bootstrap.Carousel(carousel, {
        interval: 1200, // Slide change interval
        ride: "carousel", // Auto start without stopping
        pause: false, // Prevent pause on hover
        wrap: true, // Infinite loop
      });
    }
  }, []);


  
  const openPopup = (productId) => {
    const content = productDetails[productId] || <div>Details not available</div>;
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent('');
    
  };


  
  
return (
    <div>
     <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active bg-slide-1" data-bs-interval="3000">
            <div className="container text-start text-white">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h1>Solar Services</h1>
                  <p>Expert solar panel installation, maintenance, and repair services for efficient energy solutions.</p>
                  <a href="/solar" className="btn btn-secondary me-2">Get Now</a>
                  
                </div>
                <div className="col-lg-6">
                  <img src={heroImage1} className="img-fluid w-100" style={{ maxHeight: "40vh" }} alt="Couch Service" />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item bg-slide-2" data-bs-interval="3000">
            <div className="container text-start text-white">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  
                  
                </div>
                <div className="col-lg-6">
                  <img src={heroImage2} className="img-fluid w-100" style={{ maxHeight: "80vh" }} alt="Solar Service 1" />
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item bg-slide-3" data-bs-interval="3000">
            <div className="container text-start text-white">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  
                <h1>Off Grid Solar System</h1>
                </div>
                <div className="col-lg-6">
                  <img src={heroImage3} className="img-fluid w-100" style={{ maxHeight: "60vh" }} alt="Solar Service 2" />
                </div>
              </div>
            </div>
          </div>
          {/* Slide 4 */}
          <div className="carousel-item bg-slide-3" data-bs-interval="3000">
            <div className="container text-start text-white">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  
                <h1>Hybrid Solar System</h1>
                </div>
                <div className="col-lg-6">
                  <img src={heroImage4} className="img-fluid w-100" style={{ maxHeight: "60vh" }} alt="Solar Service 2" />
                </div>
              </div>
            </div>
          </div>
         
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Product Section */}
      <div className="product-section pt-0">
        <div className="container">
          <h2 className="text-center my-4">Single Phase</h2>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5">
                <div className="product-item text-center">
                  <img src={product.image} className="img-fluid product-thumbnail mb-3" alt={product.name} />
                  <h3 className="product-title">{product.name}</h3>
                  <button className="btn btn-info mt-2 btn-sm" onClick={() => openPopup(product.id)}>
                    View Details
                  </button>
                  <Link to="/Services/services" className="btn btn-success mt-2 btn-sm">
                    Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <h2 className="text-center my-4">Three Phase</h2>
          <div className="row">
            {product.map((item) => (
              <div key={item.id} className="col-12 col-md-4 col-lg-3 mb-5">
                <div className="product-item text-center">
                  <img src={item.image} className="img-fluid product-thumbnail mb-3" alt={item.name} />
                  <h3 className="product-title">{item.name}</h3>
                  <button className="btn btn-info mt-2 btn-sm" onClick={() => openPopup(item.id)}>
                    View Details
                  </button>
                  <Link to="/Services/services" className="btn btn-success mt-2 btn-sm">
                    Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">

            <p>{popupContent}</p>
            <button className="close-button" onClick={closePopup}>&times;</button>
          </div>
        </div>
      )}
      
      
    </div>
  );
};

export default Solar;
