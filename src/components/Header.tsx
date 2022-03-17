import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';


function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text 
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dashgo
        <Text as="span" ml="1" color="pink.400">.</Text>
      </Text>

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

      <Flex
        align="center"
        ml="auto"
      >

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


      <Flex 
        align="center"
      >
        <Box mr="4" textAlign="center">
          <Text>Lucas F</Text>
          <Text color="gray.300" fontSize="small">
            lucasvidigal3@gmail.com
          </Text>
        </Box>

        <Avatar size="md" name="Lucas F" src="https://github.com/LucasVidigal98.png" />
      </Flex>

      </Flex>
    </Flex>
  )
}

export default Header;