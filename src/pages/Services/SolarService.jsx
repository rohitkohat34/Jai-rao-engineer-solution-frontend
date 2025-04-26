import React, { useState, useContext } from 'react';
import axios from 'axios'
import { jwtDecode } from 'jwt-decode';
import { assets } from '../../assets/assets';
import './SolarService.css';
import { StoreContext } from '../../context/StoreContext'
import img2 from "../../assets/images/logods.jpg"

const termsData = [
  { title: "Standards", description: "All the terms and conditions mentioned in this proposal are standard. Delivery of materials and commissioning of the solar system are dependent on-site location and government notices." },
  { title: "Payment", description: "Advance: 20% with order | 70% Before dispatch of Solar Module and Inverters | 10% After Commissioning." },
  { title: "Taxes", description: "GST @ 13.8 % on System." },
  { title: "Insurance", description: "Customer Scope." },
  { title: "Validity", description: "Above rates are valid for 15 days from the date of offer." },
  { title: "Transportation", description: "Including" },
  { title: "Delivery, Installation, Commissioning", description: "Within 5 to 6 Weeks from the date of confirmed Purchase order and advance payment in favour of Gentech Solar LLP." },
  { title: "Cancellation", description: "Any order once placed cannot be cancelled or diverted due to any reasons under any conditions and the advance paid are non-refundable or mutually amount based on the progress of project, payment must be paid." },
  { title: "Monitoring", description: "Remote monitoring system included in the cost." },
  { title: "Civil work and Fabrication", description: "Civil work and fabrication work for solar system required is in jresolutions scope." },
  { title: "Electrical Infrastructure, Upgradation", description: "Up gradation or replacement of Electrical Infrastructure, MCB, RCCB, ELCB, MCCB and accessories will be in client Scope." },
  { title: "Penalty For Late Payment", description: "The client must honor the invoices raised by jresolutions as per agreed payment terms. Late payments will be subject to interest of 2% per month or part thereof. Remaining 5 % of the cost must be paid within a week after commissioning of the plant or customer will be charged late fees of 3% of the project price as mentioned above." },
  { title: "On Grid Failure", description: "The plant will cease to feed supply to the grid until the grid is restored." },
  { title: "Interruption in work", description: "The Customer must not interrupt the works, and/or shall abstain from any act or omission of which it can reasonably be expected that it may delay the works or make the works more." }
];


const incClients = [
  { id: 1, name: "Mauli Celebration, Pandharkawada, Yavatmal", size: "50 kw" },
  { id: 2, name: "Chandrani house, Hinganghat", size: "15 kw" },
  { id: 3, name: "Shree Communication, Pandharkawada", size: "5 kw" },
  { id: 4, name: "Ar. Girish Palod, Trimurti Nagar, Nagpur", size: "6 kw" },
  { id: 5, name: "Sindoor Sadi Centre, Yavatmal", size: "23 kw" },
  { id: 6, name: "Yogesh Enterprises, Mauda, Bhandara", size: "200 kw" },
  { id: 7, name: "Cotton Ginning, Vensa Warora", size: "120 kw" },
  { id: 8, name: "Dada Khade Dighori, Nagpur", size: "10 kw" },
  { id: 9, name: "Sontakke Bahadura, Nagpur", size: "5 kw" },
  { id: 10, name: "Kapse Rammanaroti, Nagpur", size: "5 kw" },
];

const epcClients = [
  { id: 1, name: "Akshay Dabhekar, Nagpur", size: "3 kw" },
  { id: 2, name: "Pramod Dabhekar, Nagpur", size: "3 kw" },
  { id: 3, name: "Ravindra Wankhede, Nagpur", size: "3 kw" },
];

const materialData = [
  { sno: "1)", description: "Solar Panel", specification: "MONO-PERC HALE CUT DCR BIFACIAL PANELS 565/575Wp", make: "Adani/waaree", uom: "Nos.", qty: "17" },
  { sno: "2)", description: "Grid Tied inverter", specification: "Grid Tied Inverter 6Kw, 1 Phase. with Wi-fi Monitoring system", make: "POLYCAB/ GROWAT", uom: "Nos.", qty: "1" },
  { sno: "3)", description: "Mounting structure", specification: "Panels shall be mounted on Galvanized structures.", make: "G.I", uom: "Set", qty: "1" },
  { sno: "4)", description: "Acdb", specification: "GSL Make", make: "ABB/L&T", uom: "Set", qty: "1" },
  { sno: "5)", description: "Dcdb", specification: "GSL Make", make: "Mersen Fuse & SPD", uom: "Set", qty: "1" },
  { sno: "6)", description: "Ac Cable", specification: "Copper Cable", make: "KEI/Polycab/Std", uom: "Set", qty: "As Per req" },
  { sno: "7)", description: "Dc Cable", specification: "Copper (4 Sqmm )", make: "KEI/Polycab/Std", uom: "Set", qty: "As Per req" },
  { sno: "8)", description: "Balance of Material", specification: "Electric, Cable Tray & Hardware and accessories (as per IS Standard)", make: "Standard", uom: "Set", qty: "As Per req" },
  { sno: "9)", description: "Earthing Kit", specification: "Copper bonded earthing electrode with earth enhancement chemical", make: "Standard", uom: "Set", qty: "3" },
  { sno: "10)", description: "Lightning Arrestor", specification: "Copper Bonded", make: "Standard", uom: "Set", qty: "1" },
  { sno: "11)", description: "Gen Meter & Net Meter", specification: "5-10 Amp/10-40 Amp", make: "HPL & L&T", uom: "Nos", qty: "Inclusive" },
];


const SolarService = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const openPopup = (content) => {
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent('');
  };

  const { token } = useContext(StoreContext);
  let decodedToken = null;

  if (token) {
    try {
      decodedToken = jwtDecode(token); // Decode the token
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }

  const addServiceToBackend = async (service) => {
    if (!decodedToken) {
      alert('You need to be logged in to add a service.');
      return; // Prevent sending request if user is not logged in
    }

    try {
      const response = await axios.post('http://localhost:3000/api/services', {
        title: service.title,
        price: service.price,
        rating: service.rating,
        category: 'installation',
        userId: decodedToken.id, // Send userId from the decoded token
      });
      alert(`Service "${service.title}" added successfully!`);
      console.log(response.data);
    } catch (error) {
      console.error('Error adding service:', error);
      alert(`Failed to add service. Error: ${error.response ? error.response.data.message : error.message}`);
    }
  };

 

  const handleAddClick = (service) => {
    setSelectedService(service); // Set the selected service
    addServiceToBackend(service); // Send service to backend
  };

  const singlePhase1kw = [
    { title: "1KW", rating: 4.0, price: 70000 },
  ];
const singlePhase2kw = [
    { title: "2KW", rating: 4.0, price: 130000 },
    { title: "2KW Commercial", rating: 4.0, price: 80000 },
  ];
const singlePhase3kw = [
    { title: "3KW", rating: 4.0, price: 195000 },
    { title: "3KW Commercial", rating: 4.0, price: 120000 },
  ];
  const singlePhase4kw = [
    { title: "4KW", rating: 4.0, price: 250000 },
    { title: "4KW Commercial", rating: 4.0, price: 175000 },
  ];
  const singlePhase5kw = [
    { title: "5KW", rating: 4.0, price: 320000 },
    { title: "5KW Commercial", rating: 4.0, price: 240000 },
  ];
  const singlePhase6kw = [
    { title: "6KW", rating: 4.0, price: 360000 },
    { title: "6KW Commercial", rating: 4.0, price: 285000 }
  ];
  const threePhase5kw = [
    { title: "5KW", rating: 4.0, price: 340000 },
    { title: "5KW Commercial", rating: 4.0, price: 260000 },
  ];
  const threePhase6kw = [
    { title: "6KW", rating: 4.0, price: 400000 },
    { title: "6KW Commercial", rating: 4.0, price: 320000 },
  ];
  const threePhase7kw = [
    { title: "7KW", rating: 4.0, price: 430000 },
  ];
  const threePhase8kw = [
    { title: "8KW", rating: 4.0, price: 460000 },
  ];
  const threePhase9kw = [
    { title: "9KW", rating: 4.0, price: 500000 },
  ];
  const threePhase10kw = [
    { title: "10KW", rating: 4.0, price: 560000 },
  ];
  const solarService = [
    { title: "Solar Service", rating: 4.0, price: 499 },
  ];


  return (
    <div className="container">
      <div className="left">
        <h1>Solar Services </h1>
        <div className="warranty">Up to 180-day warranty on all repairs</div>
        <div className="services">

          <div className="service">
            <img
              alt="solar sales"
              src={assets.solarsales}
            />
            <p>Sales</p>
          </div>

          <div className="service">
            <img
              alt="solar services"
              src={assets.solaeservices}
            />
            <p>Service</p>
          </div>
          <div className="service">
            <img
              alt="solar installation"
              src={assets.solarinstall}
            />
            <p>Install</p>
          </div>

        </div>
      </div>

      <div className="right">
        <h1>Solar Installation</h1>
        <p>
          <strong><h3>Single phase</h3></strong>
        </p>
        <p><strong>1KW - ₹70000</strong></p>
        <p>Subsidy 1KW - RS 30000/-</p>
        <p className="details" onClick={() => openPopup(<div className="container">
      
          <div className="header">
        {/* Logo Section */}
        <div className="logo-container">
          <img
            src="https://storage.googleapis.com/a1aa/image/R86xcC1q_bkVgOdZAUzUlivR0hBcblGHeBrUlAVnGf0.jpg"
            alt="JR Engineer Solutions logo"
            className="logo"
          />
        </div>
        <div className="company-details">
          <h1 className="title">JAY RAO ENGINEER SOLUTIONS</h1>
          <p><span className="bold">Add:</span> Near Hanuman Temple, Chota Tajbagh Square, Nagpur</p>
          <p><span className="bold">Contact:</span> <span className="highlight">8806732711 / 7385035981</span></p>
          <p><span className="bold">GSTIN:</span> 27ALVPU9654L1ZQ</p>
          <p>
            <span className="bold">Web:</span>{" "}
            <a href="http://www.jresolutions.com" className="web-link">
              www.jresolutions.com
            </a>
          </p>
        </div>
      </div>

      <div className="date-qn">
        <p><span className="bold">Date:</span> 28/10/2024</p>
        <p className="bold">ON: GSL/Res./24-25/027</p>
      </div>

      {/* Title Section */}
      <div className="title-section">
        <h2 className="title">TECHNICAL PROPOSAL</h2>
      </div>

       

        {/* Solar Image */}
        <img
        src="https://storage.googleapis.com/a1aa/image/Wmxiif6lvZYp8vZEBiJmD5dTgt77fO7sOFL_JOPCr6Y.jpg"
        alt="Solar panels in a field with a sunset in the background"
        className="solar-image"
      />

        {/* Proposal Message */}
        <p className="proposal-text">
          Use a Solar and Wipe Out Your Electricity Bill & Save Your Future
        </p>

        {/* Contact Information */}
        <p className="contact-info">
          Mail:{" "}
          <a href="mailto:jayraoengineersolutions@gmail.com" className="email">
            jayraoengineersolutions@gmail.com
          </a>{" "}
          | Website:{" "}
          <a href="http://www.jresolutions.com" className="email">
            www.jresolutions.com
          </a>
        </p>
        <br/>
        
        <div className="projects-container">
      <h1 className="title">PROJECTS</h1>
      <br/>
      <h2 className="subtitle">SOME OF OUR NEW VALUE ADDED CLIENTS</h2>

      {/* INC Clients Table */}
      <table className="projects-table">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>INC Clients</th>
            <th>Size of System (kw)</th>
          </tr>
        </thead>
        <tbody>
          {incClients.map((client) => (
            <tr key={client.id}>
              <td className="center">{client.id})</td>
              <td>{client.name}</td>
              <td className="center">{client.size}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* EPC Clients Table */}
      <table className="projects-table">
        <thead>
          <tr>
            <th>Sr. No</th>
            <th>EPC Client</th>
            <th>Size of System (kw)</th>
          </tr>
        </thead>
        <tbody>
          {epcClients.map((client) => (
            <tr key={client.id}>
              <td className="center">{client.id})</td>
              <td>{client.name}</td>
              <td className="center">{client.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
<br/>
<div className="solar-container">
      <h1 className="solar-title">
        ON-GRID ROOFTOP SOLAR POWER PLANT CAPACITY – 10 KW
      </h1>

      {/* Solar System Image */}
      <div className="solar-image-container">
        <img
          src="https://storage.googleapis.com/a1aa/image/e3ekPZT6qe6-ht-4piinIv-oz5POHfB75wKbrg1yFIg.jpg"
          alt="Diagram of an on-grid solar power system"
          className="solar-image"
        />
      </div>

      {/* Description */}
      <p className="solar-text">
        We are thankful for your enquiry of Solar PV Power Plant and have
        pleasure in enclosing herewith our offer with net metering.
      </p>
      <p className="solar-text">
        The solar plant you intend to set up for capacitive usage shall provide
        the following benefits:
      </p>

      {/* Benefits List */}
      <ul className="solar-list">
        <li>Reduced electricity cost for the next 25 years.</li>
        <li>
          Solar power is pollution-free and causes no greenhouse gases to be
          emitted after installation.
        </li>
        <li>
          It is a renewable, clean source of electricity, available every day
          of the year—even cloudy days produce some power.
        </li>
      </ul>
      <br/>
      <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Material Description</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-black">
          <thead>
            <tr className="bg-blue-900 text-white text-sm md:text-base">
              <th className="border border-black p-2">S.No</th>
              <th className="border border-black p-2">Description</th>
              <th className="border border-black p-2">Specification</th>
              <th className="border border-black p-2">Make</th>
              <th className="border border-black p-2">UOM</th>
              <th className="border border-black p-2">Qty</th>
            </tr>
          </thead>
          <tbody>
            {materialData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-blue-100" : "bg-blue-200"}>
                <td className="border border-black p-2">{item.sno}</td>
                <td className="border border-black p-2">{item.description}</td>
                <td className="border border-black p-2">{item.specification}</td>
                <td className="border border-black p-2">{item.make}</td>
                <td className="border border-black p-2">{item.uom}</td>
                <td className="border border-black p-2">{item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <br/>
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Price Schedule:</h1>

      {/* Price Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-black mb-4">
          <thead>
            <tr className="bg-blue-200">
              <th className="border border-black p-2">S.No</th>
              <th className="border border-black p-2">Description</th>
              <th className="border border-black p-2">Capacity</th>
              <th className="border border-black p-2">Unit</th>
              <th className="border border-black p-2">Rate</th>
              <th className="border border-black p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-2 text-center">1</td>
              <td className="border border-black p-2">
                Design, Supply, Installation & commissioning of Grid Tied solar
                PV system
                <br />
                GST 13.8% INCLUDED
              </td>
              <td className="border border-black p-2 text-center">10</td>
              <td className="border border-black p-2 text-center">Kwp</td>
              <td className="border border-black p-2 text-center">=</td>
              <td className="border border-black p-2 text-center">₹ 4,50,000</td>
            </tr>
            <tr>
              <td className="border border-black p-2 text-center">3</td>
              <td className="border border-black p-2">Load Extension Demand</td>
              <td className="border border-black p-2 text-center"></td>
              <td className="border border-black p-2 text-center"></td>
              <td className="border border-black p-2 text-center"></td>
              <td className="border border-black p-2 text-center">
                EXTRA AT ACTUAL
              </td>
            </tr>
            <tr className="bg-blue-200">
              <td className="border border-black p-2 text-center"></td>
              <td className="border border-black p-2 text-right font-bold">
                Total
              </td>
              <td className="border border-black p-2 text-center"></td>
              <td className="border border-black p-2 text-center"></td>
              <td className="border border-black p-2 text-center"></td>
              <td className="border border-black p-2 text-center font-bold">
                ₹ 4,50,000
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Notes */}
      <p className="mb-4">
        <span className="font-bold">In Words:</span> Four lakh Fifty Thousand
        rupees only /-
      </p>
      <p className="mb-4">
        <span className="font-bold">Note:</span> 1) Billing will be as per the
        installed capacity.
      </p>

      {/* Subsidy Info */}
      <div className="subsidy-box">
        <p className="subsidy-amount">• Subsidy Amount For 5 Kw = 78,000/-</p>
        <p className="subsidy-note">
          <strong>Note:</strong> Subsidy quoted above is as per current MNRE
          guidelines & will be credited directly in your account (Beneficiary)
          by PFMS, GoI. Subsidy disbursement is at the sole discretion of MNRE
          & not our scope, however, we hereby agree to complete all paperwork &
          installation as per their norms for subsidy in a timely manner. Please
          note we will upload final subsidy documents only after 100% work
          completion & final payment.
        </p>
      </div>

      {/* Warranty & Standards Table */}
      <h2 className="text-xl font-bold mb-4">Warranty & Standards:</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-black">
          <thead>
            <tr className="bg-blue-200">
              <th className="border border-black p-2">Item</th>
              <th className="border border-black p-2">Warranty</th>
              <th className="border border-black p-2">Standard</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-2">Solar Module</td>
              <td className="border border-black p-2">12 Years warranty</td>
              <td className="border border-black p-2">From Manufacturer</td>
            </tr>
            <tr>
              <td className="border border-black p-2">Solar Module Performance</td>
              <td className="border border-black p-2">30 Years warranty</td>
              <td className="border border-black p-2">From Manufacturer</td>
            </tr>
            <tr>
              <td className="border border-black p-2">Solar Inverter</td>
              <td className="border border-black p-2">
                10/7 years Product warranty
              </td>
              <td className="border border-black p-2">From Manufacturer</td>
            </tr>
            <tr>
              <td className="border border-black p-2">Operation & Maintenance</td>
              <td className="border border-black p-2">
                5 Years (Comprehensive) for ACDB, DCDB, and all Electrical
                Accessories
              </td>
              <td className="border border-black p-2">From Gentech Solar LLP</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    
    </div>
    <br/>
    <div className="content">
        <h1 className="title">Scope of Work</h1>
        <ul className="list">
          <li>Liasoning for Net metering approval and commissioning</li>
          <li>Designing of Solar PV Plant.</li>
          <li>Supply and installation of module mounting structure.</li>
          <li>Installation of PV modules.</li>
          <li>
            Supply and installation of inverters, distribution boards, energy meters, etc., associated with the SPV plant.
          </li>
          <li>
            Supply and installation of associated cables and electrical works of the solar plant with earthing.
          </li>
          <li>Commissioning and trial run-out of the solar plant.</li>
          <li>Five years of comprehensive maintenance.</li>
        </ul>
      </div>
            <br />
            <div className="content">
        <h1 className="title">Scope of Client</h1>
        <ul className="list">
          <li>Adequate shade-free rooftop/ground allocation for installation of solar plant.</li>
          <li>Availability of grid and approach to site.</li>
          <li>Temporary power and water arrangement during EPC.</li>
          <li>Internet Connection.</li>
          <li>Material to be stocked safely at the site.</li>
        </ul>
      </div>
      <br/> 
      <div className="content"><h1 className="title">Project</h1>
        <ol className="list">
          <li>
            The specifications, configuration, capacity and quantities quoted are
            tentative and are subject to change during in-detail engineering fulfilling
            Design requirements with MNRE specification.
          </li>
          <li>It is assumed that the ground is easily accessible, flat, and shadow-free.</li>
          <li>
            System will be terminated with the existing LT Panel through available
            spare Feeder within the building.
          </li>
          <li>The system generation is based on actual site conditions.</li>
        </ol></div>
      
        
   

      
      
<br/>
    <div className="container">
      <h1 className="title">Terms & Conditions:</h1>
      <table className="terms-table">
        <tbody>
          {termsData.map((item, index) => (
            <tr key={index}>
              <td className="table-header">{item.title}</td>
              <td className="table-data">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <br/>
    <div className="exclusion-box">
        <p className="exclusion-title">Exclusion:</p>
        <p className="exclusion-text">
          The warranty shall not apply to defects resulting from:
        </p>
        <ul className="exclusion-list">
          <li>Any materials, components, tools, design, or software provided by the client;</li>
          <li>Negligence or willful misconduct of the client or anyone;</li>
          <li>Improper service work, installations, or alterations carried out by the client or a third party without our written consent;</li>
          <li>Any trial or experiment carried out by the client on the system without our written consent;</li>
          <li>Any use, service, or operation of any equipment, parts, or components that are not in conformity with manuals, instructions, or manufacturer specifications.</li>
          <li>Warranty does not cover damages due to manual tampering or destruction due to natural calamities.</li>
        </ul>
        <div className="text-center">
        <p className="text-lg font-bold">Service: 5 YEARS.</p>
        <p className="text-lg font-bold mt-4">For Jay Rao Engineer Solutions</p>

        <div className="stamp-container">
          <img
            src="https://storage.googleapis.com/a1aa/image/j2SxkNoXCoJAJX7cX6WeYgs-7_ny7wKE0BwEGJR1H0Q.jpg"
            alt="Company stamp with text 'For Jay Rao Engineer Solutions' and a signature"
            className="stamp-image"
          />
        </div>

        <div className="details-container">
          <div className="text-left">
            <p className="font-bold">Er. Sanyog D Uikey</p>
            <p>(CEO & Founder)</p>
            <p>8806732711</p>

            <p className="font-bold mt-2">Sameer D Uikey</p>
            <p>(Co-founder)</p>
            <p>7385035981</p>
          </div>

          <div className="text-right">
            <p className="font-bold">Client Signature</p>
          </div>
        </div>

        <div className="contact-container">
          <p className="contact-box">
            Mail:{" "}
            <a href="mailto:jayraoengineersolutions@gmail.com" className="text-blue-600">
              jayraoengineersolutions@gmail.com
            </a>{" "}
            | Website:{" "}
            <a href="http://www.jresolutions.com" className="text-blue-600">
              www.jresolutions.com
            </a>
          </p>
        </div>
      </div>
      </div>
    <br/>
    <div className="container">
      <div className="bank-card">
        <h1 className="title">BANK DETAILS:</h1>
        
        <div className="details">
          <p><span className="bold">BANK NAME: </span> STATE BANK OF INDIA</p>
          <p><span className="bold">BRANCH NAME: </span> DIGHORI ROAD, NAGPUR</p>
          <p><span className="bold">ACCOUNT HOLDER NAME: </span> SANYOG DEORAOJI UIKEY</p>
          <p><span className="bold">IFSC CODE: </span> SBIN0016097</p>
          <p><span className="bold">ACC. NO.: </span> 40990506292</p>
        </div>
      </div>
    </div>
    </div>
    
    
    
     )}>
          View details
        </p>
        <img
          alt="Technician examining an AC unit"
          src={assets.solarinstall}
        />

        <div className="add-button">
          <button onClick={() => openPopup(<div className="containers">
            <h1>Solar Installation</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-container">

              {singlePhase1kw.map((service, index) => (
                <div className="card cards" key={index}>
                  <div className="title">{service.title}</div>
                  <div className="rating">
                    <i className="fas fa-star"></i> {service.rating}
                  </div>
                  <div className="price">₹{service.price}</div>
                  <button className="add-button" onClick={() => handleAddClick(service)}>Add</button>
                </div>
              ))}
            </div>
          </div>)}>Add</button>
        </div>
        <div className="right1">
          <p><strong>2KW - ₹125000 </strong></p>
          <p>Subsidy 2KW - RS 60000/-</p>
          <p className="details" onClick={() => openPopup(<div className="containers">
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
                    <td>Adani/waaree</td>
                    <td>Nos.</td>
                    <td>1</td>
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
          </div>)}>
            View details
          </p>
          <img
            alt="Technician examining an AC unit"
            src={assets.solarinstall}
          />

          <div className="add-button">
            <button onClick={() => openPopup(<div className="containers">
            <h1>Solar Installation</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-container">

              {singlePhase2kw.map((service, index) => (
                <div className="card cards" key={index}>
                  <div className="title">{service.title}</div>
                  <div className="rating">
                    <i className="fas fa-star"></i> {service.rating}
                  </div>
                  <div className="price">₹{service.price}</div>
                  <button className="add-button" onClick={() => handleAddClick(service)}>Add</button>
                </div>
              ))}
            </div>
          </div>)}>Add</button>
          </div>
          <div className="right1">
            <p><strong>3KW - ₹195000</strong></p>
            <p>Subsidy 3KW - RS 78000/-</p>
            <p className="details" onClick={() => openPopup(<div className="containers">
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
                      <td>Adani/waaree</td>
                      <td>Nos.</td>
                      <td>1</td>
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
            </div>)}>
              View details
            </p>
            <img
              alt="solar install"
              src={assets.solarinstall}
            />

             <div className="add-button">
            <button onClick={() => openPopup(<div className="containers">
            <h1>Solar Installation</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-container">

              {singlePhase3kw.map((service, index) => (
                <div className="card cards" key={index}>
                  <div className="title">{service.title}</div>
                  <div className="rating">
                    <i className="fas fa-star"></i> {service.rating}
                  </div>
                  <div className="price">₹{service.price}</div>
                  <button className="add-button" onClick={() => handleAddClick(service)}>Add</button>
                </div>
              ))}
            </div>
          </div>)}>Add</button>
          </div>
            
            <div className="right1">
              <p><strong>4KW - ₹240000 </strong></p>
              <p>Subsidy 4KW - RS 78000/-</p>
              <p className="details" onClick={() => openPopup(<div className="containers">
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
                        <td>Adani/waaree</td>
                        <td>Nos.</td>
                        <td>1</td>
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
              </div>)}>
                View details
              </p>
              <img
                alt="solar install"
                src={assets.solarinstall}
              />

             <div className="add-button">
            <button onClick={() => openPopup(<div className="containers">
            <h1>Solar Installation</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-container">

              {singlePhase4kw.map((service, index) => (
                <div className="card cards" key={index}>
                  <div className="title">{service.title}</div>
                  <div className="rating">
                    <i className="fas fa-star"></i> {service.rating}
                  </div>
                  <div className="price">₹{service.price}</div>
                  <button className="add-button" onClick={() => handleAddClick(service)}>Add</button>
                </div>
              ))}
            </div>
          </div>)}>Add</button>
          </div>
              <div className="right1">
                <p><strong>5KW - ₹300000</strong></p>
                <p>Subsidy 5KW - RS 78000/-</p>
                <p className="details" onClick={() => openPopup(<div className="containers">
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
                          <td>Adani/waaree</td>
                          <td>Nos.</td>
                          <td>1</td>
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
                </div>)}>
                  View details
                </p>
                <img
                  alt="solar install"
                  src={assets.solarinstall}
                />

                <div className="add-button">
          <button onClick={() => openPopup(<div className="containers">
            <h1>Solar Installation</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-container">

              {singlePhase5kw.map((service, index) => (
                <div className="card cards" key={index}>
                  <div className="title">{service.title}</div>
                  <div className="rating">
                    <i className="fas fa-star"></i> {service.rating}
                  </div>
                  <div className="price">₹{service.price}</div>
                  <button className="add-button" onClick={() => handleAddClick(service)}>Add</button>
                </div>
              ))}
            </div>
          </div>)}>Add</button>
        </div>
                <div className="right1">
                  <p><strong>6KW - ₹340000 </strong></p>
                  <p>Subsidy 6KW - RS 78000/-</p>
                  <p className="details" onClick={() => openPopup(<div className="containers">
                    <h1>ON-GRID ROOFTOP SOLAR POWER PLANT CAPACITY-6 KW</h1>
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
                            <td>Adani/waaree</td>
                            <td>Nos.</td>
                            <td>1</td>
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
                  </div>)}>
                    View details
                  </p>
                  <img
                    alt="solar install"
                    src={assets.solarinstall}
                  />

                  <div className="add-button">
          <button onClick={() => openPopup(<div className="containers">
            <h1>Solar Installation</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-container">

              {singlePhase6kw.map((service, index) => (
                <div className="card cards" key={index}>
                  <div className="title">{service.title}</div>
                  <div className="rating">
                    <i className="fas fa-star"></i> {service.rating}
                  </div>
                  <div className="price">₹{service.price}</div>
                  <button className="add-button" onClick={() => handleAddClick(service)}>Add</button>
                </div>
              ))}
            </div>
          </div>)}>Add</button>
        </div>
                  <div className="right1">
                    <p>
                      <strong><h3>Three phase</h3></strong>
                    </p>
                    <p><strong>5KW - ₹325000 </strong></p>
                    <p>Subsidy 5KW - RS 78000/-</p>
                    <p className="details" onClick={() => openPopup(<div className="containers">
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
                              <td>Adani/waaree</td>
                              <td>Nos.</td>
                              <td>1</td>
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
                    </div>)}>
                      View details
                    </p>
                    <img
                      alt="solar install"
                      src={assets.solarinstall}
                    />

                    <div className="add-button">
          <button onClick={() => openPopup(<div className="containers">
            <h1>Solar Installation</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-container">

              {threePhase5kw.map((service, index) => (
                <div className="card cards" key={index}>
                  <div className="title">{service.title}</div>
                  <div className="rating">
                    <i className="fas fa-star"></i> {service.rating}
                  </div>
                  <div className="price">₹{service.price}</div>
                  <button className="add-button" onClick={() => handleAddClick(service)}>Add</button>
                </div>
              ))}
            </div>
          </div>)}>Add</button>
        </div>
                    <div className="right1">

                      <p><strong>6KW - ₹380000 </strong></p>
                      <p>Subsidy 6KW - RS 78000/-</p>
                      <p className="details" onClick={() => openPopup(<div className="containers">
                        <h1>ON-GRID ROOFTOP SOLAR POWER PLANT CAPACITY-6 KW</h1>
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
                                <td>Adani/waaree</td>
                                <td>Nos.</td>
                                <td>1</td>
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
                      </div>)}>
                        View details
                      </p>
                      <img
                        alt="solar install"
                        src={assets.solarinstall}
                      />

                      <div className="add-button">
          <button onClick={() => openPopup(<div className="containers">
            <h1>Solar Installation</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-container">

              {threePhase6kw.map((service, index) => (
                <div className="card cards" key={index}>
                  <div className="title">{service.title}</div>
                  <div className="rating">
                    <i className="fas fa-star"></i> {service.rating}
                  </div>
                  <div className="price">₹{service.price}</div>
                  <button className="add-button" onClick={() => handleAddClick(service)}>Add</button>
                </div>
              ))}
            </div>
          </div>)}>Add</button>
        </div>
                      <div className="right1">

                        <p><strong>7KW - ₹400000</strong></p>
                        <p>Subsidy 7KW - RS 78000/-</p>
                        <p className="details" onClick={() => openPopup(<div className="containers">
                          <h1>ON-GRID ROOFTOP SOLAR POWER PLANT CAPACITY-7 KW</h1>
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
                                  <td>1</td>
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
                        </div>)}>
                          View details
                        </p>
                        <img
                          alt="solar install"
                          src={assets.solarinstall}
                        />

                        <div className="add-button">
          <button onClick={() => openPopup(<div className="containers">
            <h1>Solar Installation</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-container">

              {threePhase7kw.map((service, index) => (
                <div className="card cards" key={index}>
                  <div className="title">{service.title}</div>
                  <div className="rating">
                    <i className="fas fa-star"></i> {service.rating}
                  </div>
                  <div className="price">₹{service.price}</div>
                  <button className="add-button" onClick={() => handleAddClick(service)}>Add</button>
                </div>
              ))}
            </div>
          </div>)}>Add</button>
        </div>
                        <div className="right1">

                          <p><strong>8KW - ₹435000</strong></p>
                          <p>Subsidy 8KW - RS 78000/-</p>
                          <p className="details" onClick={() => openPopup(<div className="containers">
                            <h1>ON-GRID ROOFTOP SOLAR POWER PLANT CAPACITY-8 KW</h1>
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
                                    <td>Adani/waaree</td>
                                    <td>Nos.</td>
                                    <td>1</td>
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
                          </div>)}>
                            View details
                          </p>
                          <img
                            alt="solar install"
                            src={assets.solarinstall}
                          />

                          <div className="add-button">
          <button onClick={() => openPopup(<div className="containers">
            <h1>Solar Installation</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-container">

              {threePhase9kw.map((service, index) => (
                <div className="card cards" key={index}>
                  <div className="title">{service.title}</div>
                  <div className="rating">
                    <i className="fas fa-star"></i> {service.rating}
                  </div>
                  <div className="price">₹{service.price}</div>
                  <button className="add-button" onClick={() => handleAddClick(service)}>Add</button>
                </div>
              ))}
            </div>
          </div>)}>Add</button>
        </div>
                          <div className="right1">

                            <p><strong>10KW - ₹540000</strong></p>
                            <p>Subsidy 10KW - RS 78000/-</p>
                            <p className="details" onClick={() => openPopup(<div className="containers">
                              <h1>ON-GRID ROOFTOP SOLAR POWER PLANT CAPACITY-10 KW</h1>
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
                                      <td>Adani/waaree</td>
                                      <td>Nos.</td>
                                      <td>1</td>
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
                            </div>)}>
                              View details
                            </p>
                            <img
                              alt="solar install"
                              src={assets.solarinstall}
                            />

                            <div className="add-button">
          <button onClick={() => openPopup(<div className="containers">
            <h1>Solar Installation</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-container">

              {singlePhase1kw.map((service, index) => (
                <div className="card cards" key={index}>
                  <div className="title">{service.title}</div>
                  <div className="rating">
                    <i className="fas fa-star"></i> {service.rating}
                  </div>
                  <div className="price">₹{service.price}</div>
                  <button className="add-button" onClick={() => handleAddClick(service)}>Add</button>
                </div>
              ))}
            </div>
          </div>)}>Add</button>
        </div>
                            <div className="right1">
                              <p><strong><h3>Solar services</h3></strong></p>
                              <p>Starts from ₹499 </p>
                              <p className="details" onClick={() => openPopup()}>
                                View details
                              </p>
                              <img
                                alt="solar install"
                                src={assets.solaeservices}
                              />

                              <div className="add-button">
          <button onClick={() => openPopup(<div className="containers">
            <h1>Solar Services</h1>
            <br />
            <hr className="horizontal-line" />
            <br />
            <div className="cards-container">

              {solarService.map((service, index) => (
                <div className="card cards" key={index}>
                  <div className="title">{service.title}</div>
                  <div className="rating">
                    <i className="fas fa-star"></i> {service.rating}
                  </div>
                  <div className="price">₹{service.price}</div>
                  <button className="add-button" onClick={() => handleAddClick(service)}>Add</button>
                </div>
              ))}
            </div>
          </div>)}>Add</button>
        </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default SolarService;
