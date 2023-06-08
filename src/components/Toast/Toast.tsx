import React from 'react'

enum ToastTypeEnum {
  Success = "Success",
  Warning = "Warning",
  Error = "Error",
  Information = "Information"
}

interface ToastProps {
  message: string;
  type: ToastTypeEnum,
  canClose: boolean,
  timer: number
}

const Toast = (props: ToastProps) => {
  return (
    <div>{props.message}</div>
  )
}

export default Toast