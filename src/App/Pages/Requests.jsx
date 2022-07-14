import React from 'react';
import { InnerRoutesCardTwo } from '../../components/Generics';
import InnerRoutesWrapper from '../../components/InnerRoutesWrapper';
import InnerRoutesCardTwoSection from '../../components/InnerRoutesCardTwoSection';
import { requestArray } from '../../constants/index';

const Requests = () => (
  <InnerRoutesWrapper>
    <InnerRoutesCardTwo>
      {
        requestArray.map(
          element => <InnerRoutesCardTwoSection key={element.id} element={element} />,
        )
      }
    </InnerRoutesCardTwo>
  </InnerRoutesWrapper>
);

export default Requests;
