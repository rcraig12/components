import React from 'react';
import { render } from '@testing-library/react';

import { Toast, ToastTypes } from './Toast';

describe('Toast', () => {
  test('renders the Toast component', () => {
    render(
      <Toast
        message="This is an infomational message 2"
        type={ToastTypes.Information}
      />
    );
  });
});
