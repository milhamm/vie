import { Text, Input, Button, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import NextLink from "next/link";
import { useAuth } from "../context/authentication";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="w-full bg-[#FF3DE0] h-[171px] flex items-end p-6 auth-banner">
        <Text fontSize={36} fontWeight="900" color="white">
          Login
        </Text>
      </div>
      <div className="px-6 mt-[2.5rem] h-[430px] flex flex-col items-between">
        <div>
          <div className="mb-6">
            <Text mb="8px">Email</Text>
            <Input
              focusBorderColor="main.500"
              size="md"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <Text mb="8px">Password</Text>
            <Input
              focusBorderColor="main.500"
              size="md"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <p className="text-red-500">{""}</p>
      </div>
      <div className="mt-4 px-6">
        <Button
          isLoading={false}
          colorScheme="main"
          isFullWidth
          fontWeight={400}
          mb={4}
          size="lg"
          fontSize="md"
          borderRadius={8}
          onClick={() => {
            login({
              email: email,
              password: password,
            });
          }}
        >
          Login
        </Button>
        <Text mb={4} align="center">
          No Account?{" "}
          <NextLink href="/register" passHref>
            <Link color="main.500">Register here</Link>
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
          Login with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
