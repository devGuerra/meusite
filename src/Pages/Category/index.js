import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import GroupCard from '../../Components/GroupCard';
import Loader from '../../Components/Loader';
import Pagination from '../../Components/Pagination';
// import { Container } from './styles';

function Category({ match }) {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get(`/category/${match.params.id}`)
      .then((response) => setGroups(response.data.GroupList));

    setLoading(false);
  }, [match.params.id]);

  return loading ? (
    <Loader />
  ) : (
    <div className="feed">
      {groups.map((group) => (
        <GroupCard key={group._id} data={group} />
      ))}
      <Pagination page={match.params.page} />
    </div>
  );
}

export default Category;
