import styled from 'styled-components';

export const PostListContainer = styled.div`
  background-color: #f8f9fa;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: min-content;
  gap: 2rem;
  padding: 2rem 10rem 2rem 10rem;
  flex-grow: 1;
`;