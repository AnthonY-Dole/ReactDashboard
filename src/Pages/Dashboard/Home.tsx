import React from "react";
import Button from "@/Component/Button";
import { Icon, Input, Stack } from "@chakra-ui/react";
import Menu from "@/Component/Menu";
import Main from "@/Pages/Dashboard/Main";
import Drawer from "@/Pages/Dashboard/Drawer";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoAnalytics } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { RiFileList3Line } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Card from "@/Component/Card";
type Props = {};

const Home = ({}: Props) => {
  const items = [
    {
      name: "Dashboard",
      icon: <Icon as={LuLayoutDashboard} />,
      onClick: () => {},
    },
    {
      name: "Analytics",
      icon: <Icon as={IoAnalytics} />,
      onClick: () => {},
    },
    {
      name: "Messages",
      icon: <Icon as={AiOutlineMail} />,
      onClick: () => {},
      notification: 14,
    },
    {
      name: "Products",
      icon: <Icon as={RiFileList3Line} />,
      onClick: () => {},
    },
    {
      name: "Settings",
      icon: <Icon as={FiSettings} />,
      onClick: () => {},
    },
    {
      name: "Logout",
      icon: <Icon as={MdLogout} />,
      onClick: () => {},
    },
  ];

  return (
    <Stack
      sx={{
        width: {
          sm: "100%",
          md: "98%",
          lg: "98%",
        },
        display: "grid",
        gap: "1.6em",
        gridTemplateColumns: {
          sm: "repeat(1,1fr)",
          md: "7rem auto 14rem",
          lg: "7rem auto 14rem",
          xl: "14rem auto 16rem",
        },
      }}
    >
      <Menu isOpen={false} onClose={() => {}} title="Dashboard" items={items} />
      <Main />
      <Drawer />
    </Stack>
  );
};

export default Home;
