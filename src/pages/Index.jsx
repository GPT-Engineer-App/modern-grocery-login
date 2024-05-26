import { useState } from "react";
import { Container, VStack, HStack, Button, Box, Heading, Input, FormControl, FormLabel, Text, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaUser, FaStore } from "react-icons/fa";

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState("customer");

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleFormSwitch = () => {
    setIsLogin(!isLogin);
  };

  const bg = useColorModeValue("gray.100", "gray.700");
  const cardBg = useColorModeValue("white", "gray.800");
  const primaryColor = useColorModeValue("green.400", "green.600");

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bg}>
      <VStack spacing={8} width="100%">
        <HStack spacing={4}>
          <Button onClick={() => handleUserTypeChange("customer")} colorScheme={userType === "customer" ? "green" : "gray"} leftIcon={<FaUser />}>
            Customer
          </Button>
          <Button onClick={() => handleUserTypeChange("vendor")} colorScheme={userType === "vendor" ? "green" : "gray"} leftIcon={<FaStore />}>
            Vendor
          </Button>
        </HStack>
        <Box bg={cardBg} p={8} borderRadius="md" boxShadow="md" width="100%">
          <VStack spacing={4}>
            <Heading as="h2" size="lg" color={primaryColor}>
              {isLogin ? "Login" : "Register"} as {userType.charAt(0).toUpperCase() + userType.slice(1)}
            </Heading>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            {!isLogin && (
              <FormControl id="confirm-password">
                <FormLabel>Confirm Password</FormLabel>
                <Input type="password" />
              </FormControl>
            )}
            <Button colorScheme="green" width="100%">
              {isLogin ? "Login" : "Register"}
            </Button>
            <Button variant="link" colorScheme="green" onClick={handleFormSwitch}>
              {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
