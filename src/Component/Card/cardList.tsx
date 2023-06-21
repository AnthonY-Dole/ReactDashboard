import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

type CardListProps = {
  icon: any;
  children: any;
  isList?: boolean;
};

const CardList = (props: CardListProps) => {
  const { isList = false, children, icon } = props;
  return (
    <Flex
      sx={{
        justifyContent: "space-between",
        backgroundColor: "#fff",
        alignItems: "center",
        gap: "0.5rem",
        width: "100%",
        marginBottom: "0.8rem",
        padding: "1.2rem 1.8rem",
        borderRadius: "1.2rem",
        boxShadow: !isList ? "0 2rem 3rem rgba(132, 139, 200, 0.18)" : "",
        _hover: { boxShadow: "none" },
      }}
    >
      <Box
        sx={{
          padding: "0.6rem",
          color: "#fff",
          borderRadius: "50%",
          height: "50px",
          width: "50px",
          lineHeight: "50px",
          alignItems: "center",
          background: "coral",
        }}
      >
        {icon}
      </Box>
      {children}
    </Flex>
  );
};

export default CardList;
