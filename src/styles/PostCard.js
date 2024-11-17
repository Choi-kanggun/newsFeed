import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostCardContainer = styled.div`
  padding: 1rem;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 300px;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const PostCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const Tag = styled.span`
  display: inline-block;
  background-color: #3676e8;
  color: white;
  padding: 0.4rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const EditButton = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.3rem 0.6rem;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 0.8rem;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    color: white;
    background-color: black;
  }
`;

export const DeleteButton = styled.button`
  padding: 0.3rem 0.6rem;
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    color: white;
    background-color: black;
  }
`;
