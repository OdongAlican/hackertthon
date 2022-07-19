import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import InnerRoutesWrapper from '../../components/InnerRoutesWrapper';
import { InnerRoutesCardTwo } from '../../components/Generics';
import { fetchProductsList } from '../../actions/products';
import InnerRoutesCardTwoSection from '../../components/InnerRoutesCardTwoSection';
import Loader from '../../components/Loader';
import PaginationComponent from '../../components/Pagination';
import { ModalComponent } from '../../components/Modal';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState('');
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
  const displayModal = () => { setShow(true); setDisplay('create'); };
  const showFxn = () => { setShow(false); setDisplay(''); };

  useEffect(() => { fetchProducts(); }, []);
  useEffect(() => { fetchProducts(); }, [pageNumber]);
  useEffect(() => { setUpdatedProductList(productsList?.products); }, [productsList?.products]);

  return (
    <>
      {
      display === 'create' ? (
        <ModalComponent title="Product Details" show={show} showFxn={showFxn} />
      ) : null
    }
      <InnerRoutesWrapper>
        <InnerRoutesCardTwo>
          { loading && <div className="w-100 d-flex justify-content-center"><Loader /></div> }
          { !loading && updatedProductList.map(
            element => (
              <InnerRoutesCardTwoSection
                clickEvent={displayModal}
                key={element.id}
                element={element}
              />
            ),
          )}
        </InnerRoutesCardTwo>
      </InnerRoutesWrapper>
      <PaginationComponent pageCount={productsList.total} goToPage={goToPage} />
    </>
  );
};

export default Home;
