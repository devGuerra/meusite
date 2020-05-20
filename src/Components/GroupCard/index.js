/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function GroupCard({ data }) {
  return (
    <>
      <Link className="groupCard" to={`/group/${data._id}`}>
        <div className="groupContent">
          <img src={data.avatar} alt={data.name} />
          <div className="groupDescription">
            <h2>{data.name}</h2>
            {data.description && <span>{data.description}</span>}
          </div>
        </div>
      </Link>
      {data.url && (
        <a
          href={data.url}
          target="_blank"
          rel="noreferrer"
          className="groupButton">
          Entrar
        </a>
      )}
    </>
  );
}

export default GroupCard;
