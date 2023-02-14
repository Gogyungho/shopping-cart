import styled from 'styled-components';
import { NextPageWithLayout } from '@pages/_app';
import productItmes from '@pages/api/productItems.json';
import { FiChevronRight } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { IItem } from '@pages/products/model';
import { Text14R, Text20B } from '@components/Shared/Text';

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  const fetchProductItems = JSON.parse(JSON.stringify(productItmes));
  const recommandItems = fetchProductItems.productItems.sort((a: IItem, b: IItem) => b.score - a.score).slice(0, 6);

  const goToProducts = (): void => {
    router.push('/products');
  };
  return (
    <Container>
      <BtnWrapper onClick={goToProducts}>
        <Text20B>추천 상품</Text20B>
        <FiChevronRight size="25px" />
      </BtnWrapper>
      <ProductsWrapper>
        {recommandItems.map((item: IItem) => {
          return (
            <Products key={item.item_no}>
              <img className="product-img" src={item.detail_image_url} alt="products image" />
              <Text14R padding="5px 0 0 0" textHideMultiline textHidelineNum={1}>
                {item.item_name}
              </Text14R>
            </Products>
          );
        })}
      </ProductsWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 20px;
  margin: 0 auto;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-bottom: 20px;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: raw;
  flex-wrap: wrap;
  .product-img {
    width: 150px;
  }
`;

const Products = styled.div`
  width: 150px;
  margin-right: 15px;
`;

export default Home;
