import { Button, Flex, Icon, Image, Input, Text } from "@chakra-ui/react";
import React from "react";
import RightBar from "../containers/RightBar";
import LeftBar from "../containers/LeftBar";
import FeedContainer from "../containers/FeedContainer";
type Props = {
    session: any;
};

const MainContainer: React.FC<Props> = ({ session }) => {
    console.log(session);
    return (
        <>
            <Flex
                w="100vw"
                h="100%"
                bg="#fff"
                justifyContent="space-between"
                fontFamily="primary"
            >
                <Flex
                    gap="2rem"
                    px="2rem"
                    py="3rem"
                    w="100%"
                    justifyContent="space-between"
                >
                    <LeftBar />
                    <FeedContainer />
                    <RightBar session={session} />
                </Flex>
            </Flex>
        </>
    );
};

export default MainContainer;
