import React from "react";
import PostCard from "../PostCard";
import { Flex, Icon, Image, Input, Text } from "@chakra-ui/react";
import CreatePost from "../CreatePost";

const FeedContainer: React.FC = () => {
    return (
        <>
            <Flex w="468px" h="auto" minH="100vh" flexDir="column" gap="1rem">
                <CreatePost />
                <PostCard />
                <PostCard />
                <PostCard />
            </Flex>
        </>
    );
};

export default FeedContainer;
