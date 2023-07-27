import React, { useEffect, useState } from "react";
import axios from "axios";
const ChatPage = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    const chaturl = "https://dg7dj7-5000.csb.app/api/chat";
    const { data } = await axios.get(chaturl);
    setChats(data);
    console.log(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chats.map((chat) => {
        return <div key={chat._id}>{chat.chatName}</div>;
      })}
    </div>
  );
};
export default ChatPage;
