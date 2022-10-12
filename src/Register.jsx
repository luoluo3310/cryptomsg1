import { useState, useRef } from "react";
import { ethers, BigNumber } from "ethers";
import { Flex, Box, Text, Input, Button, Textarea } from '@chakra-ui/react';
import ABI from "./ABI.json";



const NftAddress = "0x77C469eC60fCCdbBDe9FC6Fd05B6E3D70ee8D245";


const Register = ({ accounts, setAccounts }) => {
    const [address, setAddress] = useState(0);
    const isConnected = Boolean(accounts[0]);
    const phoneref = useRef(null);

    var contract;




    async function clickregister() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            contract = new ethers.Contract(ABI.ADDR, ABI.ABI, signer);



        }
        try {

            
            const instance = await genAPI(window.ethereum)
            const arseedUrl = '<https://arseed.web3infra.dev>'
           
            const data = Buffer.from('/icon/twitter_32x32.png')
            const payCurrency = 'bnb' // everpay supported all tokens
            const ops = {
                tags: [{ name: "wAtwitter240.png", value: 'image/png' }]
            }
            const res = await instance.sendAndPay(arseedUrl, data, payCurrency, ops)
            console.log('res', res)

        }
        catch (err) {
            console.log('err is :', err);
        }

        // if (window.ethereum) {
        //     const provider = new ethers.providers.Web3Provider(window.ethereum);
        //     const signer = provider.getSigner();
        //     contract = new ethers.Contract(ABI.ADDR, ABI.ABI, signer);



        // }
        // try {
        //     const response = await contract.register(accounts[0], phoneref.current.value);
        //     console.log('msg send ok !', phoneref.current.value);
        //     console.log('response :', response);
        // } catch (err) {
        //     console.log('err is :', err);
        // }
    }





    return (
        <Flex justify="center" align="center" hight="100vh" paddingBottom="150px">
            <Box width="800px" >

                <Text fontSize="48px" textShadow="0 5px #000000" >Crypto Messenger</Text>
                <Text fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323" textShadow="0 2px #000000">Bind your Phone and Address. </Text>
                {isConnected ? (
                    <div>
                        <Flex align="center" justify="center">
                            <Text
                                marginTop="30px"
                                textAlign="center"
                                padding="15px"
                                marginRight="5px"
                            >Telephone</Text>

                            <Input
                                fontFamily="inherit"
                                width="250px"
                                height="40px"
                                marginTop="30px"
                                padding="15px"

                                type="tel"
                                ref={phoneref}
                                placeholder="Phone Number"
                                _placeholder={{ color: 'inherit' }}
                            />


                        </Flex>

                        <Flex align="center" justify="center">
                            <Text
                                marginTop="10px"
                                textAlign="center"
                                padding="15px"
                                marginRight="5px"
                            > Address </Text>

                            <Input
                                readOnly
                                fontFamily="inherit"
                                width="250px"
                                height="40px"
                                marginTop="10px"
                                padding="15px"
                                marginLeft="30px"
                                type="tel"
                                value={accounts}
                                placeholder="Address"
                                _placeholder={{ color: 'inherit' }}
                            />


                        </Flex>





                        <Flex align="center" justify="center">

                            <Button
                                backgroundColor="#D6517D"
                                borderRadius="5px"
                                boxShadow="0px 2px 2px 1px #0F0F0F"
                                color="white"
                                cursor="pointer"
                                fontFamily="inherit"
                                padding="15px"
                                marginTop="30px" onClick={clickregister}>Register</Button>
                        </Flex>
                    </div>


                ) : (
                    <p>You must be connect to send message.</p>
                )}
            </Box>


        </Flex>

    )
};

export default Register;