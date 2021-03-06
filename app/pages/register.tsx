import { Text, Input, Button, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

// TODO: aang

const Register = () => {
  return (
    <div>
      <div className="w-full bg-[#FF3DE0] h-[171px] flex items-end p-6 auth-banner">
        <Text fontSize={36} fontWeight="900" color="white">
          Register
        </Text>
      </div>
      <div className="px-6 mt-[2.5rem] h-[430px] flex flex-col items-between">
        <div>
          <div className="mb-6">
            <Text mb="8px">Full Name</Text>
            <Input focusBorderColor="main.500" size="md" type="text" />
          </div>
          <div className="mb-6">
            <Text mb="8px">Email</Text>
            <Input focusBorderColor="main.500" size="md" type="email" />
          </div>
          <div className="mb-6">
            <Text mb="8px">Password</Text>
            <Input focusBorderColor="main.500" size="md" type="password" />
          </div>
        </div>
      </div>
      <div className="mt-4 px-6">
        <Button
          colorScheme="main"
          isFullWidth
          fontWeight={400}
          mb={4}
          size="lg"
          fontSize="md"
          borderRadius={8}
        >
          Register
        </Button>
        <Text mb={4} align="center">
          Already have an account?{" "}
          <NextLink href="/login" passHref>
            <Link color="main.500">Login here</Link>
          </NextLink>
        </Text>
        <Button
          colorScheme="cyan"
          color="white"
          isFullWidth
          fontWeight={400}
          size="lg"
          fontSize="md"
          borderRadius={8}
        >
          Register with Google
        </Button>
      </div>
    </div>
  );
};

export default Register;
