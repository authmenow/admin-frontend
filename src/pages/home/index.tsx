import * as React from 'react';

import * as model from './model';

export const HomePage: React.FC = () => {
  React.useEffect(() => model.pageMounted(), []);

  return <div>Hello</div>;
};
