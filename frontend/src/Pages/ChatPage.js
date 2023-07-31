import React, { useEffect, useState } from "react";
// import axios from "axios";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import SideDrawer from "../Components/miscellaneous/SideDrawer";
import MyChats from "../Components/miscellaneous/MyChats";
import ChatBox from "../Components/miscellaneous/ChatBox";

const ChatPage = () => {
  const { user } = ChatState();
  const history = useHistory();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo) {
      history?.push("/");
    }
  }, [history]);
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display={"flex"}
        justifyContent="space-between"
        w="100%"
        h="90vh"
        p="10px"
      >
        {user && (
          <MyChats fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};
export default ChatPage;
