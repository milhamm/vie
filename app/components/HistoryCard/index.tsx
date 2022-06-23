import { Text } from "@chakra-ui/react";

const HistoryCard = ({ name, role, status }) => {
  return (
    <div className="mt-5 flex justify-center">
      <div className="h-[140px] w-[420px] rounded-lg bg-[purple]">
        <div className="p-4 relative">
          <div className="flex justify-between w-full">
            <h1 className="text-[white]">{role}</h1>
            <h1 className="text-base	font-medium	text-[white]">{status}</h1>
          </div>

          <Text
            fontWeight="800"
            color="white"
            fontSize={28}
            noOfLines={2}
            maxW={300}
          >
            {name}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
