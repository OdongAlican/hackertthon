/* eslint-disable  react/prop-types */
/* eslint-disable  no-nested-ternary */

import React from 'react';
import { useHistory } from 'react-router-dom';

const RoutesCard = ({ children }) => {
  const [currentRoute, setCurrentRoute] = React.useState('');
  const history = useHistory();
  React.useEffect(() => {
    if (history.location.pathname.includes('sales')) setCurrentRoute('sales');

    if (history.location.pathname.includes('purchase')) setCurrentRoute('purchase');

    if (history.location.pathname.includes('requests')) setCurrentRoute('requests');
  }, []);
  history.listen(location => setCurrentRoute(location.pathname));
  return (
    <div className="routes-section-card">
      <div className="main-routes-card-header">
        {
            currentRoute.includes('purchase') ? 'Your Purchase'
              : currentRoute.includes('sales') ? 'Your Sales'
                : currentRoute.includes('requests') ? 'Your Requests'
                  : null
          }
      </div>
      <div className="mini-routes-card-header">
        Select and view all your past
        {' '}
        {
            currentRoute.includes('purchase') ? 'Purchase'
              : currentRoute.includes('sales') ? 'Sales'
                : currentRoute.includes('requests') ? 'Requests'
                  : null
          }
      </div>
      <div className="inner-nested-routes">
        {children}
      </div>
    </div>
  );
};

export default RoutesCard;
