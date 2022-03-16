import { Button, Flex, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';


export default function Home() {
  return (
    <Flex 
      w='100vw'
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex 
        as="form" 
        width="100%" 
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        alignItems="center"
        justify="center"
        flexDirection="column"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input 
              name="email" 
              type="email" 
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant='filled'
              _hover={ { bg: 'gray.900' } }
              size="lg"
            />
          </FormControl>
          
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input 
              name="password" 
              type="password" 
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant='filled'
              _hover={ { bg: 'gray.900' } }
              size="lg"
            />  
            </FormControl>
        </Stack>

        <Button type="submit" mt="6" width="90%" size="lg" colorScheme={'pink'}>Entrar</Button>
      </Flex>
    </Flex>
  )
}
