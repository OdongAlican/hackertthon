/* eslint-disable  react/prop-types */
/* eslint-disable  no-nested-ternary */

import React from 'react';
import { useHistory } from 'react-router-dom';
import { determineSubTitle } from '../utils/helpers';

const RoutesCard = ({ children }) => {
  const [currentRoute, setCurrentRoute] = React.useState('');
  const history = useHistory();
  React.useEffect(() => {
    if (history.location.pathname.includes('sales')) setCurrentRoute('sales');

    if (history.location.pathname.includes('purchase')) setCurrentRoute('purchase');

    if (history.location.pathname.includes('requests')) setCurrentRoute('requests');

    if (history.location.pathname.includes('products-details')) setCurrentRoute('products-details');

    if (history.location.pathname.includes('dashboard')) setCurrentRoute('dashboard');
  }, []);
  history.listen(location => setCurrentRoute(location.pathname));
  return (
    <div className="routes-section-card">
      <div className="main-routes-card-header">
        {
            currentRoute.includes('purchase') ? 'Your Purchase'
              : currentRoute.includes('sales') ? 'Your Sales'
                : currentRoute.includes('requests') ? 'Your Requests'
                  : currentRoute.includes('products-details') ? ''
                    : currentRoute.includes('dashboard') ? ''
                      : null
          }
      </div>
      <div className="mini-routes-card-header">
        { determineSubTitle(history.location.pathname)}
      </div>
      <div className="inner-nested-routes">
        {children}
      </div>
    </div>
  );
};

export default RoutesCard;
