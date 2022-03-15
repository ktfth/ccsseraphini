import { Flex, Image } from '@chakra-ui/react';
import { TweetComposer } from './TweetComposer';
import { ActionButtons } from './ActionButtons';
import { DonateEth } from './DonateEth';
import { DonateSol } from './DonateSol';
import { DonatePix } from './pix/DonatePix';
import { Search } from './Search';

export const Home = () => {
  return (
    <Flex
      flex={1}
      maxW={'100%'}
      // height="100vh"
      alignItems="center"
      // justifyContent="center"
      flexDirection="column"
      // bg="gray.400"
      pb="10px"
      style={{
        backgroundColor: '#e5e5f7',
        opacity: '0.8',
        backgroundImage:
          'linear-gradient(#444cf7 1px, transparent 1px), linear-gradient(to right, #444cf7 1px, #e5e5f7 1px)',
        backgroundSize: '20px 20px',
      }}
    >
      <Flex
        alignItems="center"
        flexDirection="column"
        px={'12px'}
        style={{
          width: '100%',
          position: 'sticky',
          top: '0',
        }}
      >
        <Image
          borderRadius="full"
          boxSize="100px"
          objectFit="cover"
          src="https://unavatar.io/twitter/sseraphini"
          alt="Sibelius Seraphini"
          m="4"
        />

        <Flex
          borderWidth="1px"
          borderColor="gray.500"
          borderRadius="lg"
          overflow="hidden"
          p="8"
          flexDirection="column"
          bg="white"
          width={'100%'}
          maxW={'fit-content'}
          minW={{ md: 'unset', base: 'calc(100vw - 24px)' }}
        >
          <TweetComposer />
          <ActionButtons />
          <DonateEth />
          <DonateSol />
          <DonatePix />
          <Search />
        </Flex>
      </Flex>
    </Flex>
  );
};
