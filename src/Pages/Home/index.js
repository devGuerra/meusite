import React, { useEffect, useState } from 'react';
import AdSense from 'react-adsense';

import { GetParam } from '../../constants/functions';
import api from '../../services/api';
import GroupCard from '../../Components/GroupCard';
import Categories from '../../Components/Categories';

// import { Container } from './styles';

function Home() {
  const [groups, setGroups] = useState([]);
  const [body] = useState({
    avatar: `${`${GetParam('avatar')}&oh=${GetParam('oh')}`}`,
    url: GetParam('url'),
    name: GetParam('name'),
    _id: 1,
  });

  useEffect(() => {
    api
      .get('/category/Figurinhas')
      .then((response) => setGroups(response.data.GroupList));
  }, []);

  return (
    <>
      <main>
        {!body && (
          <>
            <Categories />
            <h2 className="title">Grupos</h2>
          </>
        )}
        <div className="feed">
          {GetParam('avatar') ? (
            <div className="group">
              <AdSense.Google
                class="adsbygoogle"
                style={{
                  display: 'inline-block',
                  width: '728px',
                  height: ' 60px',
                }}
                client="ca-pub-2270636537108959"
                slot="5480228173"
              />
              <GroupCard data={body} />
              <AdSense.Google
                class="adsbygoogle"
                style={{
                  display: 'inline-block',
                  width: '728px',
                  height: ' 60px',
                }}
                client="ca-pub-2270636537108959"
                slot="9000794686"
              />
            </div>
          ) : (
            groups.map((group) => <GroupCard key={group._id} data={group} />)
          )}
        </div>
      </main>
    </>
  );
}

export default Home;
