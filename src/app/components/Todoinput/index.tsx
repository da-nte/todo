import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Box = styled.div<{ isEditing?: boolean }>`
  display: flex;
  align-items: center;
  padding: ${props => (props.isEditing ? '5px 0px' : '15px 25px')};
  width: 100% auto;
  font-size: 1.1em;
  border-bottom: 1px solid #eee;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;

export default function TodoInput({
  setTodoList,
  isEditing,
  editContent,
  editModeTodo,
  editTodo,
}: {
  setTodoList?: (todo: ITodoItem) => void;
  isEditing?: boolean;
  editContent?: string;
  editTodo?: (content: string) => void;
  editModeTodo?: () => void;
}) {
  const [content, setContent] = React.useState<string>('');
  return (
    <Box isEditing={isEditing}>
      <Input
        placeholder="할 일을 입력해주세요"
        value={content}
        onBlur={e => {
          //onBlur 입력 도중 다른 컴포넌트 및 창을 클릭하게 입력한 상태가 사라질 때 나타나는 이벤트
          if (e.currentTarget === e.target) {
            editTodo && editTodo(content);
          }
        }}
        onChange={e => setContent(e.target.value)}
        onKeyPress={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
          if (isEditing) {
            editTodo && editTodo(content);
          } else {
            setTodoList &&
              setTodoList({
                id: '0',
                content: content,
                completed: false,
                editing: false,
              });
            setContent('');
          }
        }}
      />
    </Box>
  );
}
