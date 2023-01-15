import React, { useState } from 'react';

enum artistsPage {
  active = 'active',
  removed = 'removed',
}

const MenageArtists: React.FC = () => {
  const [activePage, setActivePage] = useState<artistsPage>(artistsPage.active);

  return (
    <div className={'d-flex flex-column align-items-center'}>
      <h1 className={'m-3'}>Menage Artists</h1>
      <div className={'d-flex'}>
        <button
          className={`btn btn${activePage === artistsPage.active ? '' : '-outline'}-success m-2`}
          onClick={() => setActivePage(artistsPage.active)}
        >
          Active Artists
        </button>
        <button
          className={`btn btn${
            activePage === artistsPage.removed ? '' : '-outline'
          }-danger inactive m-2`}
          onClick={() => setActivePage(artistsPage.removed)}
        >
          Removed Artists
        </button>
      </div>
    </div>
  );
};

export default MenageArtists;
