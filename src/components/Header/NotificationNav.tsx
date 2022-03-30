import { HStack, Icon } from '@chakra-ui/react';
import React from 'react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

function NotificationNav() {
  return (
    <HStack  
      spacing="4"
      mx="8"
      pr="8"
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} />
      <Icon as={RiUserAddLine} />
    </HStack>
  )
}

export default NotificationNav;