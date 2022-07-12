import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InnerRoutesWrapper from '../../generics/InnerRoutesWrapper';
import { InnerRoutesCardTwo } from '../../generics/Generics';
import { fetchProductsList } from '../../actions/products';

const Home = () => {
  const [loading, setLoading] = useState([]);
  const { productsList } = useSelector(state => state.products);
  const dispatch = useDispatch();
  console.log(loading, productsList, 'loading');

  const fetchProducts = async () => {
    setLoading(true);
    await dispatch(fetchProductsList());
    setLoading(false);
  };
  useEffect(() => { fetchProducts(); }, []);
  return (
    <InnerRoutesWrapper>
      <InnerRoutesCardTwo>
        home section
      </InnerRoutesCardTwo>
    </InnerRoutesWrapper>
  );
};

export default Home;
