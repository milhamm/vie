import { Box, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import DefaultLayout from "components/Layouts/DefaultLayout";

const Lab = () => {
  return (
    <DefaultLayout title="Lab">
      <div className="p-8">
        <h1 className="text-3xl font-black text-[#FF3DE0]">
          RPLGBT Laboratory
        </h1>
        <div className="pt-8 flex justify-between">
          <h1>Member</h1>
          <div>
            <Button size="sm" color="white" bg="main.500">
              + Add
            </Button>
          </div>
        </div>
        <div className="pt-8 flex items-center">
          <Box boxSize="60px">
            <Image
              src="https://bit.ly/dan-abramov"
              borderRadius="100px"
            ></Image>
          </Box>
          <h1 className="px-8">Muhammad Memeng</h1>
        </div>
        <div className="pt-8 flex items-center">
          <Box boxSize="60px">
            <Image
              src="https://bit.ly/dan-abramov"
              borderRadius="100px"
            ></Image>
          </Box>
          <h1 className="px-8">Ridho Nobelion Sabililah Damar</h1>
        </div>
        <div className="pt-8 flex items-center">
          <Box boxSize="60px">
            <Image
              src="https://bit.ly/dan-abramov"
              borderRadius="100px"
            ></Image>
          </Box>
          <h1 className="px-8">Jeki Mahadika Gunarto</h1>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Lab;
