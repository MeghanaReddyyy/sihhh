import React from 'react'
import {useParams} from "react-router-dom"
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'
const Roompage=()=>{
    const {roomId}=useParams()
    const myMeeting= async (element)=>{
        const appID=969268294;
        const serverSecret="c75d5e46749ca38b697d8987f8db5853"
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),"mohith")
        const zc=ZegoUIKitPrebuilt.create(kitToken)
        zc.joinRoom({
            container:element,
            sharedLinks:[{
                name:'copy link',
                url:`http://localhost:3000/room/${roomId}`
            }],
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall,

            },
            showScreenSharingButton:false,
        })

    }
    return <div>
        <div ref={myMeeting}/>
    </div>
};
export default Roompage