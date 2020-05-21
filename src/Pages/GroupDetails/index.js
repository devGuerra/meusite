import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';
import GroupCard from '../../Components/GroupCard';
import Categories from '../../Components/Categories';

const Group = () => {
  const [params] = useState(useParams());
  const [group, setGroup] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    api
      .get(`/groups/${params.id}`)
      .then((response) => setGroup(response.data.group));
  }, []);

  return (
    <main>
      <Categories />
      <div id="groupDetails" className="feed">
        <div className="group">
          <GroupCard data={group} />
        </div>
      </div>
    </main>
  );
};

export default Group;
