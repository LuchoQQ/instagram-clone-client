import { Flex, Image } from "@chakra-ui/react";
import React from "react";

const SmartphoneView: React.FC = () => {
    return (
        <>
            <Flex w="20rem" h="30rem" bg="">
                <Image
                    src="/assets/mobile.png"
                    fit="contain"
                    position="relative"
                    zIndex="10"
                />
                <Image
                    p="1rem"
                    src="/assets/screenshot1.png"
                    fit="contain"
                    position="relative"
                    left="-73%"
                />
            </Flex>
        </>
    );
};

export default SmartphoneView;
