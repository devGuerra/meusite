import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import GroupCard from '../../Components/GroupCard';
import Loader from '../../Components/Loader';
import Pagination from '../../Components/Pagination';
import Categories from '../../Components/Categories';

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

  return (
    <>
      <Categories />
      <main>
        {loading ? (
          <Loader />
        ) : (
          <div className="container">
            <h2 className="title">{match.params.id}</h2>
            <div className="feed">
              {groups.map((group) => (
                <GroupCard key={group._id} data={group} />
              ))}
              <Pagination page={match.params.page} />
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default Category;
