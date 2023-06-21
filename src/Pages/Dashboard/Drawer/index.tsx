import React from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  Image,
  Icon,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from "@chakra-ui/react";
import NavInfo from "@/Component/NavInfo";
import CardList from "@/Component/Card/cardList";
import { AiOutlinePlus, AiOutlineShoppingCart } from "react-icons/ai";

type Props = {};

function Drawer({}: Props) {
  return (
    <Box sx={{ marginTop: "1.4rem" }}>
      <NavInfo
        user={{
          name: "Anthony",
          avatar: "https://bit.ly/dan-abramov",
          role: "Admin",
        }}
      />
      <Box
        sx={{
          mt: "1rem",
        }}
      >
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          News
        </Text>
        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "2rem",
            boxShadow: "0 2rem 3rem rgba(132, 139, 200, 0.18)",
            transition: "all .3s ease",
            _hover: { boxShadow: "none" },
          }}
        >
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <CardList
                isList
                icon={
                  <Icon
                    as={AiOutlineShoppingCart}
                    sx={{
                      fontSize: "1.8rem",
                    }}
                  />
                }
                children={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Text
                      sx={{
                        fontSize: "1rem",
                      }}
                    >
                      Lorem Ipsum
                    </Text>
                    <Text>Last seen 4 Hours</Text>
                  </Box>
                }
              />
            ))}
        </Box>
      </Box>

      <Box sx={{ marginTop: "2rem" }}>
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          Sales Analytics
        </Text>
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <CardList
              icon={
                <Icon
                  as={AiOutlinePlus}
                  sx={{
                    fontSize: "1.8rem",
                  }}
                />
              }
              children={
                <Box
                  sx={{
                    mr: "1rem",
                  }}
                >
                  <Stat>
                    <StatLabel>Sent</StatLabel>
                    <StatNumber
                      sx={{
                        fontSize: "1rem",
                      }}
                    >
                      345,670
                    </StatNumber>
                    <StatHelpText>
                      <StatArrow type="increase" />
                      23.36%
                    </StatHelpText>
                  </Stat>
                </Box>
              }
            />
          ))}
      </Box>

      <Box sx={{ marginBottom: "40px" }}>
        <Box
          sx={{
            display: "flex",
            height: "60px",
            width: "100%",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            border: "2px dashed",
            color: "#111e88",
            marginBottom: "40px",
          }}
        >
          <AiOutlinePlus size={"2rem"} />
        </Box>
      </Box>
    </Box>
  );
}

export default Drawer;
