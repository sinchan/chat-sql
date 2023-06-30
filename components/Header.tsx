import { styled } from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 50px;
  border-bottom: 1px solid #e8e8e4;
`;

const Logo = styled.div`
  font-weight: 300;
  font-size: 24px;

  strong {
    font-weight: 800;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>
        Chat<strong>SQL</strong>
      </Logo>
    </HeaderContainer>
  );
}
