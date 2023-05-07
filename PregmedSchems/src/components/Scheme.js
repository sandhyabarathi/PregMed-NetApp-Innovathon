import React, { useState } from 'react';
import Schemes from "../components/Schemes.json";
import "../App.css"
import { FaWhatsapp } from "react-icons/fa";

const PregnantSchemesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleContactClick = () => {
    const message = "Hi, I have a query regarding schemes";
    const link = "https://wa.me/" +  8610088988    + "?text=" + encodeURIComponent(message);
    window.open(link, "_blank");
  };

  const filteredSchemes = Schemes.filter(scheme => {
    return scheme.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="schemes-container">
      <h1 style={{textAlign:'center',background:'green',padding:'5px',color:'white'}}>Scheme Details</h1>
      <div className="search-box">
       <input type="text" placeholder="Search for a scheme" value={searchTerm} onChange={handleSearchChange} />
      </div>
      {filteredSchemes.map(scheme => {
        return(
          <div className="scheme-box" key={scheme.name}>
            <h2>{scheme.name}</h2>
            <p>{scheme.description}</p>
            <div className="scheme-details">
              <p><strong>Eligibility:</strong></p> {scheme.eligibility}
              <p><strong>Benefits:</strong></p> {scheme.benefits}
            </div>
            <button><a href='#'> View More</a></button>
            <button onClick={handleContactClick}><FaWhatsapp /> Chat on WhatsApp</button>
          </div>
        )
      })}
    </div>
  );
};

export default PregnantSchemesPage;
