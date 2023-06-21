import {
  Box,
  Button,
  Text,
  Image,
  Avatar,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
type NavInfoProps = {
  user: {
    name: string;
    avatar: string;
    role: string;
  };
};

const NavInfo = (props: NavInfoProps) => {
  const { user } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box sx={{ display: "flex", justifyContent: "start", gap: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "1.6rem",
          width: "4.2rem",
          cursor: "pointer",
          borderRadius: "var(--border-radius-1)",
        }}
      >
        <Button
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
          _focus={{ boxShadow: "none" }}
          w="fit-content"
          {...props}
        >
          {colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
        </Button>
      </Box>
      <Box
        className="profile"
        sx={{ display: "flex", gap: "2rem", textAlign: "right" }}
      >
        <Box>
          <Text fontWeight={"bold"}>{user.name}</Text>
          <Text>{user.role}</Text>
        </Box>
        <Avatar name={user.name} src={user.avatar} />
      </Box>
    </Box>
  );
};

export default NavInfo;
