import React, { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color};
  border-radius: 50%;
  ${props => props.huge &&
    // 그냥 template literal을 사용하면 props를 또 받아오지 못함
    // 그래서 { css } 를 사용
    css`
    width: 10rem;
    height: 10rem;
  `}
`;

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595'
}

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  }
  const onConfirm = () => {
    console.log("확인");
    setDialog(false);
  }
  const onCancel = () => {
    console.log("취소");
    setDialog(false);
  }

  return (
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        <ButtonGroup>
          <Button size="large" color="pink">BUTTON</Button>
          <Button>BUTTON</Button>
          <Button size="small" color="gray">BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" color="pink" outline>BUTTON</Button>
          <Button outline>BUTTON</Button>
          <Button size="small" color="gray" outline>BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" color="pink" fullWidth>BUTTON</Button>
          <Button size="large" fullWidth>BUTTON</Button>
          <Button size="large" color="gray" fullWidth>BUTTON</Button>
        </ButtonGroup>
        <Button color="pink" size="large" onClick={onClick}>삭제</Button>
        <Dialog
          title="정말로 삭제하시겠습니까?"
          confirmText="삭제"
          cancelText="취소"
          visible={dialog}
          onConfirm={onConfirm}
          onCancel={onCancel}
        >
          데이터를 정말로 삭제하시겠습니까?
        </Dialog>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
