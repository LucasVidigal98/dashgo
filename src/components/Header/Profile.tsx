import { Flex, Box, Avatar, Text } from '@chakra-ui/react';
import React from 'react';

interface ProfileProps {
  showProfileData?: boolean;
}

function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex 
      align="center"
    >
      {showProfileData && (
        <Box mr="4" textAlign="center">
          <Text>Lucas F</Text>
          <Text color="gray.300" fontSize="small">
            lucasvidigal3@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Lucas F" src="https://github.com/LucasVidigal98.png" />
    </Flex>
  )
}

export default Profile;