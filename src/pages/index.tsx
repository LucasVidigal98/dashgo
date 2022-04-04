import { Button, Flex, FormControl, FormLabel, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../components/Form/Input';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type SignInFormData = {
  email: string;
  password: string;
}

export default function Home() {
  const signInFormSchema = yup.object().shape({
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: yup.string().required('Senha obrigatória'),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values.email);
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            type="email" 
            name="email" 
            label="E-mail"
            error={errors.email} 
            {...register('email')}
          />

          <Input 
            type="password" 
            name="password" 
            label="Senha"
            error={errors.password} 
            {...register('password')}
          />
        </Stack>

        <Button type="submit" mt="6" width="90%" size="lg" colorScheme={'pink'} isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}
