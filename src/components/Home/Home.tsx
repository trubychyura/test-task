import React, { FC } from 'react';
import { connect } from 'react-redux';

import { Product } from '..';

import { loadData } from '../../redux/ducks/products';
import { IState, HomeProps } from '../../types';
import { StyledContainer, StyledTitle } from '../../styled/StyledHome';

export const Home: FC<HomeProps> = ({ products, loadData }) => {
  React.useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <StyledContainer>
      <StyledTitle>List of products</StyledTitle>
      {products.map(({ name, asin, img }) => (
        <Product id={asin} name={name} img={img} key={asin} />
      ))}
    </StyledContainer>
  );
};

export default connect(({ products }: IState) => ({ products }), { loadData })(
  Home,
);
