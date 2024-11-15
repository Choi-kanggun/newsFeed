import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F8F9FA;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 5px;
`;


export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  width: 450px;

  &:focus {
    border-color: #3676E8;
    box-shadow: 0 0 3px rgba(76, 175, 80, 0.2);
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #3676E8;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  width: 150px; 
  cursor: pointer;

  &:hover {
    background-color: #2E6BCC;
  }
`;