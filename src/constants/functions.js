import { useLocation } from 'react-router-dom';

export const GetParam = (key) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  return query.get(key);
};

export const getParams = () => {};
