import React from "react";
import {
  Box,
  Text,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Link,
  Input,
  Flex,
  Circle,
  CircularProgress,
  CircularProgressLabel,
  Icon,
} from "@chakra-ui/react";
import Card from "../../../Component/Card";
import { AiOutlineShoppingCart } from "react-icons/ai";
import TableAdmin from "../../../Component/Table";

const Main = () => {
  const cards = [
    {
      price: "25.86$",
      title: "Total Sales",
      icon: <Icon as={AiOutlineShoppingCart} />,
      datetime: "Last 24 hours",
      color: "coral",
      progress: 50,
    },
    {
      price: "4528.7$",
      title: "Total Sales",
      icon: <Icon as={AiOutlineShoppingCart} />,
      datetime: "Last 24 hours",
      color: "#ff7782",
      progress: 70,
    },
    {
      price: "45$",
      title: "Total Sales",
      icon: <Icon as={AiOutlineShoppingCart} />,
      datetime: "Last 24 hours",
      color: "#41f1b6",
      progress: 90,
    },
  ];

  return (
    <Box as="main" sx={{ marginTop: "1.4rem", width: "auto" }}>
      <Text fontSize={"5xl"} fontWeight={"extrabold"}>
        Dashbord
      </Text>

      <Box sx={{ marginTop: "1rem" }}>
        <Input
          type="date"
          sx={{
            backgroundColor: "transparent",
            border: 0,
            outline: 0,
            color: "#363949",
            display: "inline-block",

            padding: "0.5rem 0",
            width: "auto",
          }}
        />
      </Box>

      <Flex
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.6rem",
        }}
      >
        <Card cards={cards} />
      </Flex>

      <Box sx={{ marginTop: "2rem" }}>
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          Recent Orders
        </Text>
        <TableAdmin />
        <Link
          href="#"
          sx={{ textAlign: "center", display: "block", margin: "1rem" }}
        >
          Show All
        </Link>
      </Box>
    </Box>
  );
};

export default Main;
