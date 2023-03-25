import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../assests/1.jpg';
import img2 from '../assests/2.jpg';
import img3 from '../assests/3.jpg';
import img4 from '../assests/4.jpg';
import img5 from '../assests/5.png';

const HeadingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTranform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text letterSpacing={'widest'} lineHeight={"190%"} p={['4','16']} textAlign={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            amet saepe numquam maiores cumque repellendus autem quis quisquam
            rem libero sint natus reprehenderit cupiditate. Aperiam, inventore,
            accusamus dolore ex corporis quas maxime recusandae quis error minus
            quisquam dolorem? Cumque ipsam aut natus iure soluta asperiores
            maiores placeat commodi cupiditate, possimus provident dolorum
            aliquam accusantium impedit exercitationem facilis alias modi
            consectetur eum error reiciendis libero odit ratione! Voluptate
            debitis nulla earum aperiam, et ipsum reprehenderit odit maxime
            voluptatibus veniam id quaerat qui quis tenetur sunt dolorum
            suscipit sit libero vero, illo magni modi dignissimos. Laudantium
            repellendus porro, possimus magnam totam impedit?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showThumbs={false}
    showStatus={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...HeadingOptions}>
        Watch the future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...HeadingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...HeadingOptions}>
        Gaming on Console
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} h={'full'} w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...HeadingOptions}>
        Night life
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
