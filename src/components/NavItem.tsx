import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

type Props = {
    icon: IconType,
    text: string
}

const NavItem: React.FC<Props> = ({icon, text}) => {
    return (
        <>
            <Flex alignItems="center">
                <Icon fontSize="3xl" as={icon} />
                <Text ml="1rem" fontSize='sm'>{text}</Text>
            </Flex>
        </>
    );
};

export default NavItem;
