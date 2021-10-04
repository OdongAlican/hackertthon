import React from 'react';
import {
  InnerRoutesWrapper, InnerRoutesCardTwoSection,
  InnerRoutesCardTwo,
} from '../../generics/Generics';
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
