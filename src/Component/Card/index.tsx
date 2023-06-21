import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

type CardProps = {
  cards: {
    price: string;
    title: string;
    icon: any;
    datetime: string;
    progress: number;
    color: string;
  }[];
};

const Card = (props: CardProps) => {
  const { cards } = props;
  return (
    <>
      {cards.map((card, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: "#fff",
            padding: "1.8rem",
            borderRadius: "2rem",
            marginTop: "1rem",
            boxShadow: "0 2rem 3rem rgba(132, 139, 200, 0.18)",
            transition: "all .3s ease",
          }}
        >
          <Box
            as="span"
            sx={{
              "& .chakra-icon": {
                color: "#fff",
                padding: "0.5rem",
                borderRadius: "50%",
                background: card.color,
                fontSize: "3rem",
                transition: "all .3s ease-in-out",
              },
            }}
          >
            {card.icon}
          </Box>
          <Flex
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                color: "#363949",
              }}
            >
              <Text fontSize={"1.2rem"} fontWeight={"bold"}>
                {card.title}
              </Text>
              <Text as="h1">{card.price}</Text>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <CircularProgress
                value={card.progress}
                size={"5rem"}
                color="#7380ec"
              >
                <CircularProgressLabel>{card.progress}%</CircularProgressLabel>
              </CircularProgress>
            </Box>
          </Flex>
          <Text fontSize={"1rem"} fontWeight={"bold"}>
            Last 24 Hours
          </Text>
        </Box>
      ))}
    </>
  );
};

export default Card;
