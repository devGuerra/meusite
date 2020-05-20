import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';
import GroupCard from '../../Components/GroupCard';

const Group = () => {
  const [params] = useState(useParams());
  const [group, setGroup] = useState([]);

  useEffect(() => {
    api
      .get(`/groups/${params.id}`)
      .then((response) => setGroup(response.data.group));
  }, []);

  return (
    <div className="groupDetails feed">
      <div className="group">
        <GroupCard data={group} />
      </div>
    </div>
  );
};

export default Group;
