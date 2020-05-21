/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function GroupCard({ data }) {
  return (
    <>
      {data.url ? (
        <>
          <a
            className="groupCard"
            href={data.url}
            target="_blank"
            rel="noopener noreferrer">
            <div className="groupContent">
              <img src={data.avatar} alt={data.name} />
              <div className="groupDescription">
                <h2>{data.name}</h2>
                {data.description && <span>{data.description}</span>}
              </div>
            </div>
            <button type="button" className="groupButton">
              Entrar
            </button>
          </a>
          {/* <button className="report">reportar</button> */}
        </>
      ) : (
        <Link className="groupCard" to={`/group/${data._id}`}>
          <div className="groupContent">
            <img src={data.avatar} alt={data.name} />
            <div className="groupDescription">
              <h2>{data.name}</h2>
              {data.description && <span>{data.description}</span>}
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default GroupCard;
