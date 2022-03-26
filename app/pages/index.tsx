import { Text, Input, Button, Link } from "@chakra-ui/react";
import BottomNav from "components/BottomNav";
import DefaultLayout from "components/Layouts/DefaultLayout";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home= () =>{
  return (
    <div>
      <div className="w-full bg-[#FF3DE0] h-[171px] p-6 auth-banner">
        <Text fontSize={36} fontWeight="900" color="white">
          VIE
        </Text>
      </div>
      <div className="px-6 mt-[-4rem] h-[430px] flex flex-col items-between">
        <div className="bg-indigo-300 h-[141px] w-full rounded-lg  ">
          
        </div>
        <div className="gap-3 mt-3 flex justify-center">
          <div className="bg-red-500 h-[15px] w-[15px] rounded-full ">

          </div>
          <div className="bg-red-500 h-[15px] w-[15px] rounded-full ">

          </div>
        </div>
        <div className="mt-5 flex justify-between ">
          <Text fontSize={15} fontWeight="800" color="Grey">
            Team Recomendation
          </Text>

          <Text fontSize={15} fontWeight="400" color="Grey">
            Show All
          </Text>
        </div>
        

      </div>
      
    </div>   
  );  
 
};
export default Home;