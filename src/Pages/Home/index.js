import React, { useEffect, useState } from 'react';

import api from '../../services/api';

import GroupCard from '../../Components/GroupCard';

// import { Container } from './styles';

function Home() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    api
      .get('/category/Figurinhas')
      .then((response) => setGroups(response.data.GroupList));
  }, []);

  return (
    <>
      <main>
        <div className="feed">
          {groups.map((group) => (
            <GroupCard key={group._id} data={group} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
