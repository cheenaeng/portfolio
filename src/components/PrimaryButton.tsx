import React, { useState } from 'react'
import { Button, ButtonProps, Text } from '@chakra-ui/react'

function PrimaryButton({ children, sx, ...restProps }: ButtonProps) {
  return (
    <Button
      className="button-title"
      sx={{
        backgroundColor: 'transparent',
        color: 'orange',
        _hover: {
          backgroundColor: 'transparent',
          textShadow: '1px 1px 10px rgba(255,255,255,0.1), 1px 1px 10px #ccc',
          transform: 'scale(1.2)',
        },
        textAlign: 'center',
        ...sx,
      }}
      {...restProps}
    >
      <>{children}</>
    </Button>
  )
}

export default PrimaryButton
