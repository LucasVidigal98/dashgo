import React from 'react';
import { Text } from '@chakra-ui/react';

function Logo() {
  return (
    <Text 
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      dashgo
      <Text as="span" ml="1" color="pink.400">.</Text>
    </Text>
  )
}

export default Logo;