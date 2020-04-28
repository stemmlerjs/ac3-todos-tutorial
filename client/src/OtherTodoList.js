import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { visibilityFilterVar } from './cache';

const TODOS_QUERY = gql`
  {
    visibilityFilter @client
    todos {
      id
      text
      completed
    }
  }
`;

const OtherTodoList = () => {
  const { loading, data, error } = useQuery(TODOS_QUERY);

  if (loading) return <p>loading...</p>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <ul>
        {data.todos.map((todo) => (
          <p key={todo.id}>
            {todo.text} is {todo.completed ? 'done' : 'not done'}
          </p>
        ))}
      </ul>
    </>
  );
};

export default OtherTodoList;
