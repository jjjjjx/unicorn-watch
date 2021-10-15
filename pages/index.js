import { Button, Center, Heading, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';

const HomePage = () => (
  <Center minHeight="100vh" padding={4}>
    <VStack spacing={6}>
      <Image
        src="/unicorn.png"
        alt="Picture of a unicorn"
        width={160}
        height={160}
      />
      <Heading as="h1">Unicorn Watch</Heading>
      <Text>Have you seen a unicorn in Web3 land today?</Text>
      <Button colorScheme="purple" size="lg">
        Report unicorn
      </Button>
    </VStack>
  </Center>
);

export default HomePage;
