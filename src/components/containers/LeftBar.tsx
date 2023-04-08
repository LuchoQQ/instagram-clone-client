import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillHome, AiOutlineSearch, AiOutlineMessage } from "react-icons/ai";
import { CgProfile } from 'react-icons/cg'
import { FiSettings } from 'react-icons/fi'
import NavItem from "../NavItem";

const LeftBar: React.FC = () => {
    return (
        <>
            <Flex
                w="220px"
                h="auto"
                minH="100vh"
                bg="#fff"
                px="1rem"
                flexDir="column"
            >
                <Text textAlign="center" py="3rem" fontFamily='secondary' fontSize='5xl'>
                    Instagram
                </Text>
                <Flex flexDir='column' gap='2rem'>
                    <NavItem icon={AiFillHome} text="Inicio" />
                    <NavItem icon={AiOutlineSearch} text="Buscar" />
                    <NavItem icon={AiOutlineMessage} text="Mensajes" />
                    <NavItem icon={CgProfile} text="Profile" />
                    <NavItem icon={FiSettings} text="Ajustes" />
                </Flex>
            </Flex>
        </>
    );
};

export default LeftBar;
