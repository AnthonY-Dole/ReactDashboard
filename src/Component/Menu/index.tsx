import React from "react";
import { Badge, Box, Link, Stack, Text } from "@chakra-ui/react";
import Button from "@/Component/Button";
type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: Array<{
    name: string;
    icon: React.ReactNode;
    notification?: number;
    onClick: () => void;
  }>;
};

const Menu = (props: MenuProps) => {
  const { isOpen, onClose, title, items } = props;
  return (
    <Stack as={"nav"} height="100vh">
      <Box
        backgroundColor="#fff"
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        mt="1rem"
        mx={{ base: "1rem", md: "2rem" }}
      >
        <Text fontSize="1.5em">{title}</Text>
        <Button
          stylesProps={{
            display: "block",
          }}
          variant="ghost"
          OnClick={onClose}
        >
          X
        </Button>
      </Box>
      <Box
        backgroundColor="#fff"
        display="flex"
        flexDirection="column"
        height="100vh"
        paddingTop={"5rem"}
        position="relative"
      >
        {items.map((item) => (
          <Link
            href="#"
            display="flex"
            color="#363949"
            ml="2rem"
            alignItems="center"
            height="3.3rem"
            transition="all .1s ease"
            key={item.name}
            sx={{
              "& .chakra-icon": {
                fontSize: "1.6rem",
                transition: "all .3s ease-in-out",
              },
              "&:hover": {
                backgroundColor: "#dce1eb",
                borderLeft: "5px solid #7380ec",
                paddingLeft: "1rem",
              },
            }}
          >
            {item.icon}
            <Text
              sx={{
                color: "#677483",
                fontSize: "1rem",
                textDecoration: "none",
                paddingLeft: "1rem",
                "&:hover": {
                  color: "#7380ec",
                },
              }}
            >
              {item.name}
            </Text>
            {item.notification && (
              <Badge
                ml="1"
                colorScheme="red"
                sx={{
                  fontSize: "0.8rem",
                  ml: "1rem",
                  borderRadius: "30%",
                }}
              >
                {item.notification}
              </Badge>
            )}
          </Link>
        ))}
      </Box>
    </Stack>
  );
};

export default Menu;
