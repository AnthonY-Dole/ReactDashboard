import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
type Props = {};

const TableAdmin = (props: Props) => {
  return (
    <Table
      sx={{
        background: "#fff",
        width: "100%",
        borderRadius: "2rem",
        padding: "1.8rem",
        textAlign: "center",
        boxShadow: "0 2rem 3rem rgba(132, 139, 200, 0.18)",
        transition: "all .3s ease",
        color: "#363949",
      }}
    >
      <Thead>
        <Tr>
          <Th>Product</Th>
          <Th>Product Id</Th>
          <Th>Price</Th>
          <Th>Status</Th>
          <Th sx={{ color: "primary" }}>Details</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Tr>
              <Td>Iphone</Td>
              <Td>475</Td>
              <Td>1763$</Td>
              <Td sx={{ color: "warning" }}>Pending</Td>
              <Td sx={{ color: "primary" }}>Details</Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
};

export default TableAdmin;
