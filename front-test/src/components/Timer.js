import { HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const date = useRef(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      //as useState is async we need to base our calculation on previous value, not on one that could have changed
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    //as scounds state forces rerender we need to limit assigning date value to only initial render
    date.current = new Date().toTimeString();
  }, []);

  return (
    <VStack gap="10px" align="left">
      <HStack>
        <Text fontWeight="bold">Seconds spend on page:</Text>
        <p>{`${seconds} s`}</p>
      </HStack>
      <HStack>
        <Text fontWeight="bold">Time of entering the website:</Text>
        <p>{date.current ? date.current : "loading..."}</p>
      </HStack>
    </VStack>
  );
};

export default Timer;
