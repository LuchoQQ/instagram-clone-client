import React from "react";
import PostCard from "../PostCard";
import { Flex, Icon, Image, Input, Text } from "@chakra-ui/react";
import CreatePost from "../CreatePost";
import { Session } from "types";
type Props = {
    session: Session;
};

const FeedContainer: React.FC<Props> = ({ session }) => {
    return (
        <>
            <Flex w="468px" h="auto" minH="100vh" flexDir="column" gap="1rem">
                <CreatePost session={session} />
                <PostCard />
                <PostCard />
                <PostCard />
            </Flex>
        </>
    );
};

export default FeedContainer;
