import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InnerRoutesWrapper from '../../generics/InnerRoutesWrapper';
import { InnerRoutesCardTwo } from '../../generics/Generics';
import { fetchProductsList } from '../../actions/products';
import InnerRoutesCardTwoSection from '../../generics/InnerRoutesCardTwoSection';
import Loader from '../../generics/Loader';
import PaginationComponent from '../../generics/Pagination';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [updatedProductList, setUpdatedProductList] = useState([]);

  const { productsList } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    setLoading(true);
    await dispatch(fetchProductsList(pageNumber));
    setLoading(false);
  };

  const goToPage = page => { setUpdatedProductList([]); setPageNumber(page); };

  useEffect(() => { fetchProducts(); }, []);
  useEffect(() => { fetchProducts(); }, [pageNumber]);
  useEffect(() => { setUpdatedProductList(productsList?.products); }, [productsList?.products]);

  return (
    <>
      <InnerRoutesWrapper>
        <InnerRoutesCardTwo>
          { loading && <div className="w-100 d-flex justify-content-center"><Loader /></div> }
          { !loading && updatedProductList.map(
            element => <InnerRoutesCardTwoSection key={element.id} element={element} />,
          )}
        </InnerRoutesCardTwo>
      </InnerRoutesWrapper>
      <PaginationComponent pageCount={productsList.total} goToPage={goToPage} />
    </>
  );
};

export default Home;
