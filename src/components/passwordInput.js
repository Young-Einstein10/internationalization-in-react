import React from "react";
import {
  Input,
  InputGroup,
  IconButton,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const PasswordInput = ({ register }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <InputGroup>
      <Input
        id="password"
        type={isOpen ? "text" : "password"}
        {...register("password", {
          required: "password is required",
          minLength: {
            value: 6,
            message: "password length should be at least 6 characters",
          },
        })}
        isRequired
      />
      <InputRightElement h="full">
        <IconButton
          bg="none"
          width="32px"
          onClick={onToggle}
          height="40px"
          aria-label="toggle-password"
          icon={
            isOpen ? (
              <ViewIcon size={18} color="#B8B8B8" />
            ) : (
              <ViewOffIcon size={18} color="#B8B8B8" />
            )
          }
          _hover={{
            bg: "none",
          }}
          _active={{
            bg: "none",
          }}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
