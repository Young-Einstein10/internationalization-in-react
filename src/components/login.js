import React from "react";
import {
  Box,
  Flex,
  Button,
  Heading,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import PasswordInput from "./passwordInput";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  };

  return (
    <Box maxW="400px" w="full">
      <Heading
        fontWeight={700}
        fontSize="24px"
        fontFamily="Source Sans Pro"
        mb={10}
        textAlign="center"
      >
        Login to your account
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box p={4}>
          <FormControl mb={6} isInvalid={errors.email}>
            <FormLabel htmlFor="email" color="#100B05" fontSize="14px">
              Email
            </FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Enter email address"
              {...register("email", {
                required: "email is required",
              })}
              isRequired
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl mb={2} isInvalid={errors.password}>
            <FormLabel htmlFor="password" color="#100B05" fontSize="14px">
              Password
            </FormLabel>

            <PasswordInput register={register} />

            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>

          <Flex justify="flex-end">
            <ChakraLink color="brand" fontSize="sm">
              Forgot password?
            </ChakraLink>
          </Flex>

          <Button
            mt={10}
            type="submit"
            colorScheme="teal"
            w="full"
            isLoading={isSubmitting}
          >
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
