import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Schemes from '../components/Schemes.json';

const SchemeDetailsPage = () => {
  const { name } = useParams();
  const [scheme, setScheme] = useState(null);

  useEffect(() => {
    const schemeObj = Schemes.find((scheme) => scheme.name === name);
    setScheme(schemeObj);
  }, [name]);

  if (scheme === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{scheme.name}</h1>
      <p>{scheme.description}</p>
      <div>
        <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
        <p><strong>Benefits:</strong> {scheme.benefits}</p>
      </div>
    </div>
  );
};

export default SchemeDetailsPage;
