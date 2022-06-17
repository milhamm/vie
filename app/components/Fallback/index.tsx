import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Fallback = ({ code, message, link }) => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-5">
      <Text fontSize={24} fontWeight={900} color="main.500">
        {code}
      </Text>

      <p>{message}</p>
      <Link href={link ? link : "/"}>
        <a>
          <Button bg="main.500" color="white">
            Go Back
          </Button>
        </a>
      </Link>
    </div>
  );
};

export default Fallback;
