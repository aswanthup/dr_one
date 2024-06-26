import React, { useEffect, useRef, useState } from 'react'
import "../ChatBot/ChatBot.css"
import { Button, Modal } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const ChatBotAfterLogin = () => {
    const [ChatSec, setChatSec] = useState(false)
    const [Chats, setChats] = useState([])
    const [TempUserInput, setTempUserInput] = useState()

    const ChatTrue = () => {
        if (ChatSec) {
            setChatSec(false)
            setTempUserInput('')
        } else {
            setChatSec(true)
        }
    }
    console.log("Chats>>>", Chats)



    const InputField = (e) => {
        const value = e?.target?.value               // Set to empty string if no value
        setTempUserInput(value);
    }
    useEffect(() => {
        const chatContainer = document.getElementById('chatContainer');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer?.scrollHeight;
        }
    }, [Chats, TempUserInput])
    const ConfirmInput = () => {
        console.log("checkingggggg>>>>>")
        let TempChats = Chats
        TempChats[TempChats?.length - 1] = { ...TempChats[TempChats?.length - 1], user: TempUserInput }
        console.log(TempChats)
        setChats(TempChats)
        CallBotApi(TempUserInput)
    }


    const CallBotApi = (UserInput) => {
        const PassingData = {
            message: UserInput
        }
        console.log("PassingData>>>>", PassingData)
        axios.post("http://3.111.142.178:3003/pharmacy/updatedchat", PassingData).then((res) => {
            BotRes(res?.data?.message)
            console.log("res>>>", res)
        })

    }

    const BotRes = (response) => {
        let TempChats = Chats
        TempChats = [...TempChats, { bot: response } || '']
        setChats(TempChats)
        setTempUserInput('')
    }

    useEffect(() => {
        const intialMessage = "Hi"
        CallBotApi(intialMessage)
    }, [])


    const handleClick = (event) => {
        if (event.key === 'Enter') {
            ConfirmInput()
        }
    }
    const CloseAndClear = () => {
        setChatSec(false)
    }


    return (

        <div className='ChatBotAlignBotIcon'>
            <Modal
                open={ChatSec}
                onClose={() => { ChatTrue() }}
                className={ChatSec ? 'ChatBotAlignBotChatModal open' : 'ChatBotAlignBotChatModal'}
            >
                <div className='ChatBotAlignBotChat'>
                    <div className='ChatBotChatHeader'>
                        <img className='ChatBotChatHeaderImg' src="./images/TempDocImg.jpg" alt="" />
                        <div className='ChatBotChatHeaderText'>
                            <p className='ChatBotChatHeaderTextPtag1'>Chat with</p>
                            <p className='ChatBotChatHeaderTextPtag2'>Doctor One BOT</p>
                        </div>
                        <button onClick={CloseAndClear} className='ChatBotChatHeaderClose'>
                            <CloseIcon id="ChatBotChatHeaderCloseIcon" />
                        </button>
                    </div>
                    <div id="chatContainer" className='ChatBotChatsSec'>
                        {Chats?.map((ele,index) =>
                            <>
                                <div className='ChatBotChatsSecAlign'>
                                    {ele?.bot &&
                                        <>
                                            <div  className='ChatBotChatsSecChatBot'>
                                                <p>{ele?.bot}</p>
                                            </div>
                                        </>
                                    }
                                    {ele?.user &&
                                        <div className='ChatBotChatsSecUserBot'>
                                            <p>{ele?.user}</p>
                                        </div>
                                    }
                                </div >

                            </>
                        )}
                    </div>
                    <div className='ChatBotInputSec'>
                        <input onKeyDown={handleClick} maxLength={40}
                            onChange={InputField}
                            placeholder='Input your queries'
                            type="text"
                            value={TempUserInput}
                            name="UserInput" id="" />
                        <button onClick={ConfirmInput} value="confirm" className='ChatBotInputSecIcon'>
                            <TelegramIcon id="ChatBotInputSecOrgIcon" />
                        </button>
                    </div>
                </div>
            </Modal >
            {
                (window.innerWidth >= 799 || !ChatSec) && (
                    <div
                        onClick={ChatTrue}
                        className={ChatSec ? 'ChatBotAlignBotShape' : 'ChatBotAlignBotShape annimation'}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.5 2C13.5 2.44425 13.3069 2.84339 13 3.11805V5H18C19.6569 5 21 6.34315 21 8V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V8C3 6.34315 4.34315 5 6 5H11V3.11805C10.6931 2.84339 10.5 2.44425 10.5 2C10.5 1.17157 11.1716 0.5 12 0.5C12.8284 0.5 13.5 1.17157 13.5 2ZM6 7C5.44772 7 5 7.44772 5 8V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V8C19 7.44772 18.5523 7 18 7H13H11H6ZM2 10H0V16H2V10ZM22 10H24V16H22V10ZM9 14.5C9.82843 14.5 10.5 13.8284 10.5 13C10.5 12.1716 9.82843 11.5 9 11.5C8.17157 11.5 7.5 12.1716 7.5 13C7.5 13.8284 8.17157 14.5 9 14.5ZM15 14.5C15.8284 14.5 16.5 13.8284 16.5 13C16.5 12.1716 15.8284 11.5 15 11.5C14.1716 11.5 13.5 12.1716 13.5 13C13.5 13.8284 14.1716 14.5 15 14.5Z"></path>
                        </svg>
                        <p>Chat with bot ?</p>
                    </div>
                )
            }

        </div >
    )
}

export default ChatBotAfterLogin