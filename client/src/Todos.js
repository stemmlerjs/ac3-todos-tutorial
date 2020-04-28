import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Todo from './Todo';

const TODOS_QUERY = gql`
  {
    todos {
      id
      text
      completed
    }
  }
`;

const Todos = () => {
  const { loading, data, error } = useQuery(TODOS_QUERY);

  if (loading) return <p>loading...</p>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <>
      <h1>My Todos</h1>
      <ul>
        {data.todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
