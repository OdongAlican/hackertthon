import React from 'react';
import { useRouteMatch, BrowserRouter as Router } from 'react-router-dom';

import { InnerRoutesCardOne } from '../../generics/Generics';
import InnerRoutesWrapper from '../../generics/InnerRoutesWrapper';
import InnerRoutesHeader from '../../generics/InnerRoutesHeader';

const Sales = () => {
  const { url, path } = useRouteMatch();
  return (
    <InnerRoutesWrapper>
      <Router>
        <InnerRoutesHeader url={url} />
        <InnerRoutesCardOne path={path} />
      </Router>
    </InnerRoutesWrapper>
  );
};

export default Sales;
