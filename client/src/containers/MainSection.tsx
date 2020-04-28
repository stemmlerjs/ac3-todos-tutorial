
import React from 'react'
import MainSection from '../components/MainSection'
import { VisibilityFilters } from '../models/VisibilityFilter'
import { Todos } from '../models/Todos'

export default function Main () {
  const todos: Todos = [];

  return (
    <MainSection
      activeVisibilityFilter={VisibilityFilters.SHOW_ALL}
      todosCount={todos.length}
      completedCount={todos.filter(t => t ? t.completed : false).length}
      actions={{
        completeAllTodos: () => {},
        setVisibilityFilter: () => {},
        clearCompletedTodos: () => {},
      }}
    />
  );
};

