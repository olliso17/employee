
import { SmallCloseIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, useDisclosure } from '@chakra-ui/react';
import { deleteEmployee } from '../router/router';
type Props = {
  name: string
  employeeId: string |undefined
}

export function DeleteEmployee({name, employeeId}:Props) {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const onSubmit = async (employeeId:string | undefined) => {
    try {
       const data = await deleteEmployee(employeeId);
       console.log("foi", data)
    } catch (error) {
        console.log(error)
    }
};
  return (
    <>
      <Button mr={5} onClick={onToggle}
        colorScheme="red" marginLeft={["0", "2"]} marginTop={["2", "0"]} title='Deletar'>
        <SmallCloseIcon />
      </Button>
      <Popover
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
        <PopoverContent>
          <PopoverHeader fontWeight='semibold'>Deletar {name}</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Tem certeza que deseja deletar o(a) Funcrionário(a) {name}
          </PopoverBody>
          <PopoverFooter display='flex' justifyContent='flex-end'>
            <ButtonGroup size='sm'>
              <Button onClick={onClose} variant='outline'>Cancel
              </Button>
              <Button colorScheme='red' onClick={()=>onSubmit(employeeId)}>Apply</Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  )
}