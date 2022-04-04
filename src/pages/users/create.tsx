import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../../components/Form/Input';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';

type createFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

function CreateUser() {
  const createFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: yup.string().required('Senha obrigatória').min(6, 'Senha deve ter no mínimo 6 caracteres'),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais'),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createFormSchema)
  });

  const handleCreateUser: SubmitHandler<createFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log(values);
  }

  const { errors } = formState;

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
  
        <Box 
          as="form"
          flex="1" 
          borderRadius={8} 
          bg="gray.800" 
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="name" label="Nome Completo" error={errors.name} {...register('name')} />
              <Input name="email" label="E-mail" error={errors.email} {...register('email')} />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="password" type="password" label="Senha" error={errors.password} {...register('password')} />
              <Input name="password_confirmation" type="password" error={errors.passwordConfirmation} label="Confirmar Senha" {...register('passwordConfirmation')} />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users/" passHref>
                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
              </Link>

              <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default CreateUser;