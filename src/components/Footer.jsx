import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>

        <VStack alignItems={'stretch'} w={'full'} px={'4'} >

          <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
            Subscribe to get updates
          </Heading>

          <HStack borderBottom={'2px solid white'} py={'2'} >
            <Input
              placeholder="Enter your email..."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
              cursor={'pointer'}
            />

            <Button p={'0'} variant={'ghost'} colorScheme={'purple'}>
              <AiOutlineSend size={'20'} />
            </Button>

          </HStack>

        </VStack>

        <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
            <Heading textTransform={'uppercase'} textAlign={'center'} >video hub</Heading>
            <Text>Made with ❤️</Text>
        </VStack>

        <VStack w={'full'}>
            <Heading textTransform={'uppercase'} size={'md'}>Social media</Heading>

            <Button variant={'link'} colorScheme={'white'}>
                <a target={'blank'} href="https://www.github.com/abhie16">GitHub</a>
            </Button>
            <Button variant={'link'} colorScheme={'white'}>
                <a target={'blank'} href="https://www.linkedin.com/in/abhie16/">LinkedIn</a>
            </Button>
            <Button variant={'link'} colorScheme={'white'}>
                <a target={'blank'} href="https://www.instagram.com/abhie16.__">Instagram</a>
            </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
