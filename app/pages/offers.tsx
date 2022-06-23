import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  Spacer,
  ButtonGroup,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import withAuth from "lib/withAuth";
import React from "react";
import useOffer from "hooks/useOffer";
import Link from "next/link";

export const getServerSideProps = withAuth(async (ctx) => {
  const token = ctx.req.cookies?.token;
  const role = ctx.req.cookies?.role;

  return {
    props: {
      config: { token, role: role ? role : null },
    },
  };
});

const OfferPage = ({ config }) => {
  const { offers, handleOffer } = useOffer(config.token);

  return (
    <div>
      <div className="flex p-6 gap-6 items-center">
        <Link href="/">
          <a>
            <ChevronLeftIcon
              fontSize={40}
              fontWeight="900"
              color="main.500"
            ></ChevronLeftIcon>
          </a>
        </Link>
        <div>
          <Text fontSize={24} fontWeight="900" color="main.500">
            Team Offers
          </Text>
        </div>
      </div>
      <div className="px-6 mt-[0.25rem] flex flex-col items-between">
        <div>
          {offers &&
            offers.map((offer) => (
              <>
                <div className="mb-6">
                  <Text mb="8px" fontWeight="500">
                    Request to join {offer.team_name}
                  </Text>
                </div>
                {offer.offers.map((user) => (
                  <div className="mb-[1.5rem]" key={user.id}>
                    <Flex minWidth="max-content" alignItems="center" gap="2">
                      <Avatar src={user.user.image} name={user.user.name} />
                      <Box ml="3">
                        <Text fontWeight="bold" noOfLines={1} maxW={200}>
                          {user.user.name}
                        </Text>
                        <Text fontSize="sm">{user.user.skills}</Text>
                      </Box>
                      <Spacer />
                      <ButtonGroup gap="2">
                        <Button
                          colorScheme="pink"
                          size="xs"
                          variant="solid"
                          onClick={() => handleOffer(user.id, "ACCEPT")}
                        >
                          Accept
                        </Button>
                        <Button
                          colorScheme="teal"
                          size="xs"
                          variant="outline"
                          onClick={() => handleOffer(user.id, "DECLINE")}
                        >
                          Reject
                        </Button>
                      </ButtonGroup>
                    </Flex>
                  </div>
                ))}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OfferPage;
