import React from "react";
import {
  Input,
  InputGroup,
  IconButton,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { withTranslation } from "react-i18next";

const PasswordInput = ({ register, t }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <InputGroup>
      <Input
        id="password"
        type={isOpen ? "text" : "password"}
        placeholder={t("login.input.passwordPlaceholder")}
        {...register("password", {
          required: t("login.errors.password"),
          minLength: {
            value: 6,
            message: t("login.errors.passwordLength"),
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
          aria-label={t("login.input.toggle_password")}
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

export default withTranslation()(PasswordInput);
