import React from 'react';
import styled, { css } from 'styled-components';
import useScrollCheck from '@hooks/useScrollCheck';
import { theme } from '@styles/theme';
import { BsCart2 } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import Link from 'next/link';
import { Text18B } from '@components/Shared/Text';

const Header = () => {
  const scroll = useScrollCheck();
  const MENU_TAP = [
    {
      name: 'PRODUCTS',
      link: '/products',
    },
    {
      name: 'WOMEN',
      link: '/products',
    },
    {
      name: 'MAN',
      link: '/products',
    },
    {
      name: 'KIDS',
      link: '/products',
    },
  ];

  return (
    <Container scroll={scroll}>
      <TopWrapper>
        <a href="/" className="logo-img" />
        <ItemListWrapper>
          <Wrapper>
            <Link href="/cart">
              <BsCart2 size={25} />
              <CountWrapper>
                <Count>{3}</Count>
              </CountWrapper>
            </Link>
          </Wrapper>
          <Wrapper>
            <Link href="/">
              <AiOutlineUser size={25} />
            </Link>
          </Wrapper>
          <Wrapper>
            <Link href="/">
              <FiHeart size={25} />
            </Link>
          </Wrapper>
        </ItemListWrapper>
      </TopWrapper>
      <MenuTapWrapper>
        {MENU_TAP.map((item, idx) => {
          return (
            <Tap key={idx}>
              <Link href={item.link}>
                <Text18B>{item.name}</Text18B>
              </Link>
            </Tap>
          );
        })}
      </MenuTapWrapper>
    </Container>
  );
};

const Container = styled.div<{ scroll?: boolean }>`
  width: 100%;
  height: 120px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  background-color: white;
  padding: 24px;
  ${({ scroll }) => {
    if (scroll) {
      return css`
        border-bottom: 1px solid ${theme.grey20};
      `;
    }
  }};
`;

const TopWrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  .logo-img {
    display: inline-block;
    overflow: hidden;
    background: url(https://img.29cm.co.kr/next29cm/sp_29cm.png);
    background-size: 200px 200px;
    line-height: 100em;
    background-position: 0 -90px;
    width: 120px;
    height: 30px;
  }
`;

const ItemListWrapper = styled.div`
  display: flex;
  padding-top: 5px;
`;

const Wrapper = styled.div`
  position: relative;
  padding-left: 15px;
`;

const CountWrapper = styled.div`
  position: absolute;
  right: -10px;
  bottom: 14px;
  width: 6px;
  height: 12px;
  background-color: ${theme.black};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 10px;
`;

const Count = styled.div`
  font-weight: 700;
  line-height: 11.58px;
  letter-spacing: -0.4px;
  font-size: 8px;
  color: ${theme.white};
`;

const MenuTapWrapper = styled.section`
  display: flex;
  padding-top: 30px;
`;

const Tap = styled.span`
  margin-right: 29px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 3px;
    background: ${theme.black};
    transition: 0.3s;
  }
  &:hover:after {
    width: 100%;
  }
`;

export default Header;
