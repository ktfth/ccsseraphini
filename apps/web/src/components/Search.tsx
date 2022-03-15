import { Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BaseSyntheticEvent, KeyboardEvent } from 'react';

export const Search = () => {
  const router = useRouter();

  function handleSearch() {
    router.reload();
  }

  function handleTypeSearch(e: KeyboardEvent & BaseSyntheticEvent) {
    if (e.key === 'Enter') {
      handleSearch();
    } else {
      router.push(`/?query=${e.target.value}`);
    }
  }
  return (
    <>
      <InputGroup size="md">
        <Input
          mt="10px"
          placeholder="Search for a tweet"
          onKeyUp={(e) => handleTypeSearch(e)}
        />
        <InputRightElement width="4.5rem">
          <Button
            mt="21.5px"
            mr="5px"
            h="1.75rem"
            size="sm"
            onClick={handleSearch}
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
};
