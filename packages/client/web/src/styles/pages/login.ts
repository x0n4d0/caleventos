import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;

  > p {
    margin-top: 20px;
    strong {
      color: var(--blue);
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    margin-bottom: 2rem;
  }

  > button {
    width: 300px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color: var(--green);
    color: var(--white);
    font-weight: 700;
    box-shadow: 0px 0px 2px #000;
    margin-top: 10px;
  }
`;

export const Input = styled.input`
  border-radius: 10px;
  height: 40px;
  width: 300px;
  border: 1px solid var(--gray);
  outline: none;
  padding: 0 10px;
  margin-top: 5px;

  &:focus {
    border: 2px solid var(--blue);
  }
`;

export const BackHome = styled.div`
  position: relative;
  margin: 2rem 0 0 2rem;
  width: 100%;

  a {
    display: flex;
    align-items: center;
  }
`;
