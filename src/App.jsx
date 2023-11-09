import { Box, Heading, Image, Input, InputGroup, InputRightElement, Stack, Button, useToast } from '@chakra-ui/react'
import './App.css'
import { foto } from './assets'
import React, { useState } from 'react'
import axios from 'axios'


function App() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email,  setEmail] = useState('')
  const [password, setPassword] = useState('')
  const TOKEN = '5995434301:AAG6pH7939aiv5zyNx8s8h336AfDpS1biZg'
  const toast= useToast()

    const handleSubmit = () => {
      let mes = `Habar keldi:\n`
      mes += `ism: ${name}\n`
      mes += `familiya ${surname}\n`
      mes += `email ${email}\n`
      mes += `parol ${password}`

      axios.post('https://api.telegram.org/bot' + TOKEN + '/sendMessage' , {
        chat_id: '-1001979159567',
        parse_mode: 'html',
        text: mes
      })
      setName(''),setSurname(''),setEmail(''),setPassword('')
      toast({
        title: 'Tabriklaymiz',
        description: "Ro'yhatdan o'tish muvafaqiyatli yakunlandi🥳",
        duration: 2000,
        isClosable: true,
      })
    }

  return (
    <Box display={'flex'} flexDirection={'column'} gap={'25px'}>

      <Box display={'flex'} justifyContent={'center'} > <Image src={foto} width={'7%'} borderRadius={'50%'} /></Box>
      <Box display={'flex'} justifyContent={'center'}> <Heading>MOdevco Registir</Heading> </Box>
      <Box display={'flex'} justifyContent={'center'} >
        <Stack width={'30%'}>
          <Input value={name} type={'text'} variant='outline' placeholder='Ismingizni kiriting' onChange={(e) => setName(e.target.value)}/>
          <Input value={surname} type={'text'} variant='outline' placeholder='Familiyangizni kiriting' onChange={(e) => setSurname(e.target.value)} />
          <Input value={email} type={'email'} variant='outline' placeholder='Emailingizni kiriting' onChange={(e) => setEmail(e.target.value)} />
          <InputGroup size='md'>
            <Input value={password} onChange={(e) => setPassword(e.target.value)}
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
            </InputGroup>
            <Button onClick={() => handleSubmit()}>Jo'natish</Button>

       
          </Stack>

      </Box>
    </Box>
    
 
  )
}

export default App
