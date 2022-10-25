import React from 'react';
import styled from 'styled-components';
import './loading.css';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const LoadingBox = styled.div`
  width: 300px;
  height: 300px;
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingBox>
        <div className="dot-flashing"></div>
      </LoadingBox>
    </LoadingContainer>
  );
};

export default Loading;
