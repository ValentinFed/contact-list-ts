import React, {FC} from 'react'

interface IError {
  error: string;
}

const Error:FC<IError> = ({error}) => {
  return (
    <div style={{padding: "32px", color: "red"}}><p>{error}</p></div>
  )
}

export default Error