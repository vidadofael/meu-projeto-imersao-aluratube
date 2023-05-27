import styled from "styled-components";

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#fff"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;

  .logo-yt {
    display: flex;
    align-items: center;
  }

  .logo-yt p {
    font-weight: 700;
    padding-left: 10px;
    font-size: 25px;
  }
  .logo-yt img {
    width: 50px;
  }
  
`;

export default function Menu() {
  return (
    <StyledMenu>
      <div>   
        <Logo />
      </div>
    </StyledMenu>
  );
}

function Logo() {
  return (
    <div className='logo-yt'>
      <img src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2020/05/youtube-icone8.png?fit=800%2C800&ssl=1" alt="" />
      <p>BeyTube</p>
    </div>
  )
}