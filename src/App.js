import {
  Center,
  ChakraProvider,
  Flex,
  Heading,
  Select,
} from "@chakra-ui/react";
import Login from "./components/login";
import i18n, { handleChangeLanguage } from "./i18n";
import "./i18n";

function App() {
  const handleSelectChange = (event) =>
    handleChangeLanguage(event.target.value);

  return (
    <ChakraProvider>
      <Flex
        as="nav"
        mx="5rem"
        height="80px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading as="h4" size="md">
          Logo
        </Heading>

        <Select
          width="150px"
          defaultValue={i18n.language}
          onChange={handleSelectChange}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
        </Select>
      </Flex>

      <Center height="calc(100vh - 80px)">
        <Login />
      </Center>
    </ChakraProvider>
  );
}

export default App;
