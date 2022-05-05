import React from 'react';
import { InnerRoutesCardTwo } from '../../generics/Generics';
import InnerRoutesWrapper from '../../generics/InnerRoutesWrapper';
import InnerRoutesCardTwoSection from '../../generics/InnerRoutesCardTwoSection';
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
