import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    // lets us use Chakra UI syntax across our app:
    <ChakraProvider>
      // we'll add content to our app shortly
    </ChakraProvider>
  )
}
import theme from "./theme";
import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      bg="gray.800"
    >
      {children}
    </Flex>
  )
}
import ConnectButton from "./components/ConnectButton";
// other code

<Layout>
  <ConnectButton />
</Layout>
import AccountModal from "./components/AccountModal";
import "@fontsource/inter";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <ConnectButton handleOpenModal={onOpen} />
        <AccountModal isOpen={isOpen} onClose={onClose} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
