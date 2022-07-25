/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';
import { Dropdown, ButtonGroup, SplitButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {
  useHistory,
  NavLink, useRouteMatch,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import '../index.css';
import RoutesCard from '../../../components/RoutesCard';
import Purchase from '../Purchase';
import Home from '../Home';
import Sales from '../Sales';
import Requests from '../Requests';
import { signOut } from '../../../actions/index';
import { capitalize, fetchLoggedInUser } from '../../../utils/helpers';
import { ModalComponent } from '../../../components/Modal';
import CreateProduct from '../SubRoutes/Sales/CreateProduct';

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState('');
  const { url, path } = useRouteMatch();
  const dispatch = useDispatch();
  const history = useHistory();

  const displayModal = () => { setShow(true); setDisplay('create'); };
  const showFxn = () => { setShow(false); setDisplay(''); };

  const logoutFxn = async () => {
    dispatch(signOut());
    history.push('/');
  };

  const currentUser = fetchLoggedInUser();

  return (
    <div data-testid="appDashboard">
      {
      display === 'create' ? (
        <ModalComponent title="Create Product" show={show} showFxn={showFxn}>
          <CreateProduct showFxn={showFxn} />
        </ModalComponent>
      ) : null
    }
      <Router>
        <div className="page-nav-section">
          <div className="left-current-user-image-icon">
            <svg width="30" height="32" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35.597 15.5974L35.572 15.5725C35.57 15.5711 35.5684 15.5693 35.5674 15.5671L20.0007 0L4.43409 15.5667C4.4323 15.5685 4.4313 15.5709 4.42949 15.5721L4.4038 15.597C2.02346 17.9907 0.511527 21.1114 0.108363 24.4631C-0.2948 27.8148 0.433941 31.205 2.17873 34.095C3.92353 36.985 6.58425 39.2088 9.73794 40.4128C12.8916 41.6168 16.3573 41.7322 19.584 40.7403C19.8555 40.6573 20.1457 40.6573 20.4172 40.7403C23.6437 41.7318 27.1091 41.6164 30.2626 40.4122C33.4161 39.208 36.0765 36.9844 37.8212 34.0946C39.5659 31.2048 40.2947 27.8148 39.8917 24.4633C39.4887 21.1118 37.977 17.9911 35.597 15.5974ZM9.96937 25.8627C9.89359 25.9384 9.83349 26.0285 9.79251 26.1274C9.7515 26.2263 9.7304 26.3324 9.73042 26.4395C9.75812 29.187 10.5346 31.8748 11.9762 34.2138C12.009 34.2669 12.0241 34.329 12.0195 34.3911C12.0148 34.4532 11.9906 34.5123 11.9504 34.5599C11.9101 34.6076 11.8558 34.6411 11.7953 34.656C11.7347 34.6709 11.671 34.6663 11.6133 34.6427C10.5295 34.1869 9.54494 33.5242 8.71465 32.6918C7.0131 30.99 6.05652 28.6823 6.05497 26.2757C6.05343 23.8691 7.00705 21.5603 8.70642 19.8563L20.0007 8.56312L31.2943 19.8563C32.994 21.5601 33.9479 23.8689 33.9463 26.2757C33.9449 28.6823 32.9882 30.99 31.2865 32.6918C30.4562 33.5242 29.4717 34.1869 28.3881 34.6427C28.3302 34.6663 28.2665 34.6709 28.206 34.656C28.1455 34.6411 28.0912 34.6074 28.0508 34.5599C28.0106 34.5123 27.9863 34.4532 27.9817 34.3909C27.977 34.3288 27.9921 34.2667 28.0249 34.2136C29.4669 31.8748 30.2437 29.187 30.2719 26.4395C30.2719 26.3324 30.2506 26.2263 30.2093 26.1272C30.1681 26.0281 30.1078 25.9382 30.0319 25.8625L24.6899 20.1963C24.6366 20.1518 24.5697 20.1275 24.5004 20.1275C24.4312 20.1275 24.3641 20.1518 24.311 20.1963C24.2577 20.2405 24.222 20.3022 24.2095 20.3703C24.197 20.4385 24.2089 20.5086 24.2431 20.5689C26.3178 24.3234 24.5337 29.7162 21.5585 32.6918L21.5428 32.7075C21.1322 33.1137 20.5778 33.3415 20.0003 33.3413C19.4226 33.3411 18.8684 33.1129 18.4581 32.7065L18.4436 32.6918C15.4673 29.7162 13.6842 24.324 15.7592 20.5697C15.7933 20.5094 15.8052 20.4393 15.7928 20.3711C15.7804 20.303 15.7445 20.2413 15.6913 20.1971C15.6382 20.1527 15.5711 20.1283 15.5019 20.1283C15.4326 20.1283 15.3656 20.1527 15.3124 20.1971L9.96937 25.8627Z" fill="#172AD2" />
            </svg>
          </div>
          <div className="righ-current-user-image-icon">
            <div className="nav-links-section">
              <NavLink to={`${url}`}>HOME</NavLink>
              <NavLink to={`${url}/purchase`}>PURCHASE</NavLink>
              <NavLink to={`${url}/sales`}>SALES</NavLink>
              <NavLink to={`${url}/requests`}>REQUESTS</NavLink>
            </div>
            <div className="inner-righ-current-user-image-icon">
              <div onClick={() => displayModal()} data-toggle="tooltip" data-placement="bottom" title="Create Product">
                <svg className="svg-before-name" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.66671 3.66665H6.33337V6.33331H3.66671V7.66665H6.33337V10.3333H7.66671V7.66665H10.3334V6.33331H7.66671V3.66665ZM7.00004 0.333313C3.32004 0.333313 0.333374 3.31998 0.333374 6.99998C0.333374 10.68 3.32004 13.6666 7.00004 13.6666C10.68 13.6666 13.6667 10.68 13.6667 6.99998C13.6667 3.31998 10.68 0.333313 7.00004 0.333313ZM7.00004 12.3333C4.06004 12.3333 1.66671 9.93998 1.66671 6.99998C1.66671 4.05998 4.06004 1.66665 7.00004 1.66665C9.94004 1.66665 12.3334 4.05998 12.3334 6.99998C12.3334 9.93998 9.94004 12.3333 7.00004 12.3333Z" fill="#323232" />
                </svg>
              </div>
              <div data-toggle="tooltip" data-placement="bottom" title="Notifications">
                <svg className="svg-before-name" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.00006 13.6667C7.73339 13.6667 8.33339 13.0667 8.33339 12.3334H5.66673C5.66673 13.0667 6.26673 13.6667 7.00006 13.6667ZM11.0001 9.66669V6.33335C11.0001 4.28669 9.91339 2.57335 8.00006 2.12002V1.66669C8.00006 1.11335 7.55339 0.666687 7.00006 0.666687C6.44673 0.666687 6.00006 1.11335 6.00006 1.66669V2.12002C4.09339 2.57335 3.00006 4.28002 3.00006 6.33335V9.66669L1.66673 11V11.6667H12.3334V11L11.0001 9.66669ZM9.66673 10.3334H4.33339V6.33335C4.33339 4.68002 5.34006 3.33335 7.00006 3.33335C8.66006 3.33335 9.66673 4.68002 9.66673 6.33335V10.3334ZM4.05339 1.72002L3.10006 0.766687C1.50006 1.98669 0.446727 3.86669 0.353394 6.00002H1.68673C1.78673 4.23335 2.69339 2.68669 4.05339 1.72002ZM12.3134 6.00002H13.6467C13.5467 3.86669 12.4934 1.98669 10.9001 0.766687L9.95339 1.72002C11.3001 2.68669 12.2134 4.23335 12.3134 6.00002Z" fill="#323232" />
                </svg>
              </div>
              <div className="current-user-profile" />
              <div className="current-user-name">{`${capitalize(currentUser?.user?.firstname)} ${capitalize(currentUser?.user?.lastname)}`}</div>
              {[SplitButton].map((DropdownType, idx) => (
                <DropdownType
                  as={ButtonGroup}
                  key={idx}
                  id={`dropdown-button-drop-${idx}`}
                  size="sm"
                  variant="secondary"
                  title=""
                >
                  <Dropdown.Item className="dropdown-item has-icon" eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item has-icon" eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item className="dropdown-item has-icon" eventKey="3">Settings</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => logoutFxn()} className="dropdown-item has-icon" eventKey="4">Log Out</Dropdown.Item>
                </DropdownType>
              ))}
            </div>
          </div>
        </div>
        <RoutesCard>
          <Route exact path={`${path}`} component={Home} />
          <Route path={`${path}/purchase`} component={Purchase} />
          <Route path={`${path}/sales`} component={Sales} />
          <Route path={`${path}/requests`} component={Requests} />
        </RoutesCard>
      </Router>
    </div>
  );
};

export default Dashboard;
