import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Navbar() {
  const { token } = useSelector(state=> state.authSelector);
  const dispatch = useDispatch();
  return (
    <Stack
      component={"nav"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      px={"5%"}
      sx={{ backgroundColor:'' }}
    ></Stack>
  );
}
