import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login, signup } from "@/api/user";
import { useLoaderData, useNavigate } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters !!!" }),
  nickname: z
    .string()
    .min(4, { message: "Name must be at least 3 characters !!!" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters" }),
});

type FormData = z.infer<typeof schema>;

const LandingPage = () => {
  const isSign = useLoaderData() as boolean;
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();

  const handleShowClick = () => setShowPassword(!showPassword);

  const onSubmit = (data: FormData) => {
    setIsLoading(true);
    signup(data)
      .then((res) => {
        debugger;
        console.log(res);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Welcome</Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      {...register("username")}
                      type="text"
                      isInvalid={errors.username ? true : false}
                      placeholder="Username"
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      type="text"
                      {...register("nickname")}
                      isInvalid={errors.nickname ? true : false}
                      placeholder="NickName"
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                      placeholder="Password"
                      isInvalid={errors.password ? true : false}
                      errorBorderColor="crimson"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                  isLoading={isLoading}
                >
                  Sign Up
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>

        <Box>
          <Link color="teal.500" href="#" onClick={() => navigate("/login")}>
            Login
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default LandingPage;
