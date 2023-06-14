import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastTypes } from './Toast';

const meta: Meta<typeof Toast> = {
  component: Toast
};

export default meta;
type Story = StoryObj<typeof Toast>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const UI: Story = {
  render: () => (
    <Toast
      message="This is an informational message"
      type={ToastTypes.Information}
    />
  )
};
