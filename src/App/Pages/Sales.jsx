import React from 'react';
import { useRouteMatch, BrowserRouter as Router } from 'react-router-dom';

import { InnerRoutesCardOne } from '../../components/Generics';
import InnerRoutesWrapper from '../../components/InnerRoutesWrapper';
import InnerRoutesHeader from '../../components/InnerRoutesHeader';

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
