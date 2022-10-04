import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 80px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`
export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_950};

  h1 {
    font-size: 32px;
    color: #c0d4df;
    text-transform: uppercase;
    margin: 50px 0 10px;
    color: ${({ theme }) => theme.COLORS.BUTTON};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    width: 90%;
    height: 90%;

    select {
      max-width: 100%;
      max-height: 100%;
      font-size: 32px;
      display: flex;
      align-items: center;
      justify-content: center;

      padding: 32px 48px;
      gap: 102px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background: #000;
      border-radius: 8px;
      border: 0;
      color: ${({ theme }) => theme.COLORS.BUTTON};

      :hover {
        opacity: 0.8;
      }
    }
  }

  button {
    width: 350px;
    height: 150px;
    text-transform: uppercase;
    font-size: 24px;
    border-radius: 30px;
    margin-bottom: 100px;
    padding: 20px 0 20px 0;
    background-color: ${({ theme }) => theme.COLORS.BUTTON_BG};
    text-decoration: none;
    border: none;
  }
`
