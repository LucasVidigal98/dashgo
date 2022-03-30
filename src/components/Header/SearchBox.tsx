import { Flex, Input, Icon } from '@chakra-ui/react';
import React from 'react'
import { RiSearchLine } from 'react-icons/ri';

function SearchBox() {
  return (
    <Flex 
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input 
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na platafroma"
        _placeholder={{ color: "gray.400" }}
      />

      <Icon as={RiSearchLine} fontSize="20" ></Icon>
    </Flex>
  )
}

export default SearchBox;