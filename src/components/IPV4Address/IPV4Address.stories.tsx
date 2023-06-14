import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { IPV4Address } from './IPV4Address';

const meta: Meta<typeof IPV4Address> = {
  component: IPV4Address
};

export default meta;
type Story = StoryObj<typeof IPV4Address>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const UI: Story = {
  render: () => <IPV4Address />
};
