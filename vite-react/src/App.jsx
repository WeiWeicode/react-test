import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button, ButtonGroup, Checkbox, CheckboxGroup, Stack, HStack, VStack } from '@chakra-ui/react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* title:首頁 */}
      <h1>首頁</h1>
      {/* <Button colorScheme='blue'>Button</Button> */}
      {/* test按鈕網頁跳轉到/test */}

      <Stack spacing={[1, 5]} direction={['column', 'row']}>
        <Button  colorScheme='blue' onClick={() => window.location.href = '/test'}>跳轉到Test</Button>
        {/* 首頁按鈕到/ */}
        <Button colorScheme='blue' onClick={() => window.location.href = '/'}>跳轉到首頁</Button>
      </Stack>
      <Stack spacing={[1, 5]} direction={['column', 'row']}>
        <Checkbox size='sm' colorScheme='red'>
          Checkbox
        </Checkbox>
        <Checkbox size='md' colorScheme='green' defaultChecked>
          Checkbox
        </Checkbox>
        <Checkbox size='lg' colorScheme='orange' defaultChecked>
          Checkbox
        </Checkbox>
      </Stack>


    </>
  )
}

export default App
