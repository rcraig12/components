import React from 'react'

export enum ToastTypes {
  Success = "Success",
  Warning = "Warning",
  Error = "Error",
  Information = "Information"
}

interface ToastProps {
  message: string;
  type?: ToastTypes,
  canClose?: boolean,
  timer?: number
}

export const Toast = (props: ToastProps) => {

  const toastType = props?.type;

  if ( toastType === ToastTypes.Success ) {

    return (
      <div>{`Success: ${props.message}`}</div>
    )

  }

  if ( toastType === ToastTypes.Warning ) {

    return (
      <div>{`Warning: ${props.message}`}</div>
    )

  }

  if ( toastType === ToastTypes.Error ) {

    return (
      <div>{`Error: ${props.message}`}</div>
    )

  }

  if ( toastType === ToastTypes.Information ) {

    return (
      <div>{`Information: ${props.message}`}</div>
    )

  }

  return (
    <div>{`Information: ${props.message}`}</div>
  )



}

