import { InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Todo: {
      fields: {
        text: {
          read(text) {
            return text.replace('todo', 'corgi');
          },
        },
      },
    },
    Query: {
      fields: {
        visibilityFilter: {
          read() {
            return visibilityFilterVar();
          },
        },
      },
    },
  },
});

export const visibilityFilterVar = cache.makeVar('active');
