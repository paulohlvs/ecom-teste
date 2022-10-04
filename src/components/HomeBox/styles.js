import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 32px;
    color: #c0d4df;
    margin: 50px 0 10px;
    color: ${({ theme }) => theme.COLORS.BUTTON};
  }
`
export const Content = styled.div`
  width: 70vw;
  height: 70vh;

  display: flex;
  align-items: center;
  border-radius: 16px;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_950};

  > select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #000;
    border-radius: 8px;
    border: 0;
    padding: 32px 48px;
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.BUTTON};

    :hover {
      opacity: 0.8;
    }
  }
`
