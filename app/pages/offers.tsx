import { Avatar, Badge, Box, Button, Flex, Input, Select, Text, Textarea } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import withAuth from "lib/withAuth";
import React from "react";

// TODO: ridho

export const getServerSideProps = withAuth(async (ctx) => {
  const token = ctx.req.cookies.token;
  return {
    props: {
      token,
    },
  };
});

const OfferPage = ({ token }) => {
  return (
    <div>
      <div className="flex p-6 gap-6 items-center">
        <div>
          <ChevronLeftIcon
            fontSize={40}
            fontWeight="900"
            color="main.500"
          ></ChevronLeftIcon>
        </div>
        <div>
          <Text fontSize={24} fontWeight="900" color="main.500">
            Team Offers
          </Text>
        </div>
      </div>
      <div className="px-6 mt-[2.5rem] flex flex-col items-between">
        <div>
          <div className="mb-6">
            <Text mb="8px" fontWeight="500">
             Meminta Bergabung ke SSA Team
            </Text>
          </div>
          <div>
            <Flex>
              <Avatar src='https://bit.ly/sage-adebayo' />
              <Box ml='3'>
                <Text fontWeight='bold'>
                  Jeki Mahadika
                </Text>
                <Text fontSize='sm'>UI/UX Designer</Text>
              </Box>
            </Flex>
          </div>
          <div>
            <Flex>
              <Avatar src='https://bit.ly/sage-adebayo' />
              <Box ml='3'>
                <Text fontWeight='bold'>
                  Rido Eng Raka
                </Text>
                <Text fontSize='sm'>Data Engineer</Text>
              </Box>
            </Flex>
          </div>
          <div className="mb-6">
            <Text mb="8px" fontWeight="500">
             Meminta Bergabung ke WhatIsUI
            </Text>
          </div>
          <div>
            <Flex>
              <Avatar src='https://bit.ly/sage-adebayo' />
              <Box ml='3'>
                <Text fontWeight='bold'>
                  Muhammad Brimstone
                </Text>
                <Text fontSize='sm'>IoT Engineer</Text>
              </Box>
            </Flex>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
