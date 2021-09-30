import React from 'react';
import {
  useRouteMatch,
  BrowserRouter as Router,
} from 'react-router-dom';
import {
  InnerRoutesHeader,
  InnerRoutesCardOne, InnerRoutesWrapper,
} from '../../generics/Generics';

const Purchase = () => {
  const { url, path } = useRouteMatch();
  return (
    <InnerRoutesWrapper>
      <Router>
        <InnerRoutesHeader
          nestedRecievedPath={`${url}`}
          nestedPendingPath={`${url}/pending`}
          nestedFailedPath={`${url}/failed`}
        />
        <InnerRoutesCardOne path={path} />
      </Router>
    </InnerRoutesWrapper>
  );
};
export default Purchase;
