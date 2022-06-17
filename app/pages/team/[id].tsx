// TODO: Raka

import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import DefaultLayout from "components/Layouts/DefaultLayout";
import CommonTab from "components/CommonTab";
import { userInfo } from "os";
import { Image } from "@chakra-ui/react";

export const getServerSideProps = async (ctx) => {
  const token = ctx.req.cookies.token;
  return {
    props: {
      token: token ? token : null,
    },
  };
};

const DetailCompetition = ({ token }) => {
  return (
    <>
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
            Team Name
          </Text>
        </div>
      </div>

      <div className="flex px-8">
        <Box boxSize="60px">
          <Image src="https://bit.ly/dan-abramov" borderRadius="100px"></Image>
        </Box>

        <div className="flex items-center px-4">
          <div>
            <h1 className="font-bold">Muhammad Memeng</h1>
            <div className="flex">
              <h1>UI/UX Designer </h1>
              <h1>Frontend Developer</h1>
            </div>
          </div>
        </div>
        <div className="p-4"></div>
      </div>
      <div className="p-8">
        <Tabs colorScheme="pink">
          <TabList border="none">
            <CommonTab>Competition</CommonTab>
          </TabList>
        </Tabs>
        <div className="pt-4 text-justify">
          Gemastik adalah Pagelaran Mahasiswa Nasional Bidang Teknologi
          Informasi dan Komunikasi yang digelar oleh Direktorat Jenderal
          Pembelajaran dan Kemahasiswaan Kementrian Riset, Teknologi, dan
          Pendidikan Tinggi. Sebagai lead ayo kita bekerjasama untuk sama-sama
          memperoleh kemenangan
        </div>
        <div>
          <h1 className="pt-8 font-bold">Institusi</h1>
          <h1 className="pt-1">Telkom University</h1>
          <h1 className="pt-8 font-bold">Attachment</h1>
          <h1>awikwok.pdf</h1>
          <h1 className="pt-8 font-bold">Joined Member - </h1>
        </div>
      </div>
      <div className="px-8">
        <Button color="white" isFullWidth bg="main.500" size="md">
          Join Team
        </Button>
      </div>
    </>
  );
};

export default DetailCompetition;
