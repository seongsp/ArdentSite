import React from 'react';
import './SoftwareInternPage.css';
import SEAnnouncement from './SEAnnouncement/SEAnnouncement';
import SEInformation from './SEInformation/SEInformation';

function SoftwareInternPage() {
  return (
    <div id="software-intern-page">
      <main id="se-main-content">
        <SEAnnouncement />
        <SEInformation />
      </main>
    </div>
  );
}

export default SoftwareInternPage;
