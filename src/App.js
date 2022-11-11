import { Center, ChakraProvider } from "@chakra-ui/react";
import Login from "./components/login";

function App() {
  return (
    <ChakraProvider>
      <Center height="100vh">
        <Login />
      </Center>
    </ChakraProvider>
  );
}

export default App;
