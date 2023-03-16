import React from 'react';
import styled from 'styled-components';

const Circle = styled.div`
  width: 36px;
  min-width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export default function CircleButton({
  className, // 상위 컴포넌트에서 CSS상의 cicle내로 접근하기 위해 필요//
  onClick,
  Icon,
}: {
  className?: string;
  onClick: () => void;
  Icon: () => JSX.Element;
}) {
  return (
    <Circle onClick={onClick} className={className}>
      <Icon />
    </Circle>
  );
}
