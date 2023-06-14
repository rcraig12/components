import React from 'react';
import { render } from '@testing-library/react';

import { IPV4Address } from './IPV4Address';

describe("IPV4Address", () => {
  test("renders the IPV4Address component", () => {
    render(<IPV4Address />);
  });
});