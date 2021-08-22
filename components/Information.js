import { Box, Center, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Information = () => {
  return (
    <Box mt="3">
      <Stack>
        <Stack>
          <Heading size="sm"> - Account to Login</Heading>
          <Text>Email: tutran@test.com</Text>
          <Text>Password: 123456</Text>
        </Stack>
        <Stack>
          <Heading size="sm">- Credit Card Infors</Heading>
          <Text>Number: 4242 4242 4242 4242</Text>
          <Text>Date: 05/25</Text>
          <Text>CVV code: 123</Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Information;
