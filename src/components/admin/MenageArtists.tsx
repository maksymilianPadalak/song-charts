import React, { useState } from 'react';
import ActiveArtists from './ActiveArtists';
import RemovedArtists from './RemovedArtists';
import { Link } from 'react-router-dom';

enum artistsPage {
  active = 'active',
  removed = 'removed',
}

const MenageArtists: React.FC = () => {
  const [activePage, setActivePage] = useState<artistsPage>(artistsPage.active);

  return (
    <div className={'d-flex flex-column align-items-center'}>
      <h1 className={'m-3'}>Menage Artists</h1>
      <div className={'d-flex mb-5'}>
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
      {activePage === artistsPage.active && <ActiveArtists />}
      {activePage === artistsPage.removed && <RemovedArtists />}
      <Link to={'/admin'} className={'btn btn-warning mt-4'}>
        Go back to dashboard
      </Link>
    </div>
  );
};

export default MenageArtists;
