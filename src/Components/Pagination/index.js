import React, { useEffect, useState } from 'react';

function Pagination({ page }) {
  const [index] = useState(page || 1);
  return <ul />;
}

export default Pagination;
