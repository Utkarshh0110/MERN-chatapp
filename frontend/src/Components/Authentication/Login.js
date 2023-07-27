import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
const Login = () => {
  const [email, Setemail] = useState();
  const [password, Setpassword] = useState();
  const [show, Setshow] = useState(false);

  const submitHandler = () => {};

  return (
    <VStack spacing={"5px"} color="black">
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          value={email}
          placeholder="Enter Your Email"
          onChange={(e) => {
            Setemail(e.target.value);
          }}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            value={password}
            type={show ? "text" : "password"}
            placeholder="Enter Your password"
            onChange={(e) => {
              Setpassword(e.target.value);
            }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => Setshow(!show)}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme={"blue"}
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>
      <Button
        variant={"solid"}
        colorScheme={"red"}
        width="100%"
        onClick={() => {
          Setemail("guest@example.com");
          Setpassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
