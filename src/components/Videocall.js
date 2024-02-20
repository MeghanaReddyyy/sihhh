//import logo from './logo.svg';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export default function Videocall() {
  const roomID = "mohith"
  let myMeeting = async (element) => {
 // generate Kit Token
  const appID = 969268294
  const serverSecret = "c75d5e46749ca38b697d8987f8db5853";
  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,Date.now().toString(),"mohith");


 // Create instance object from Kit Token.
  const zp = ZegoUIKitPrebuilt.create(kitToken);
  // start the call
  zp.joinRoom({
    container: element,
    sharedLinks: [
      {
        name: 'Personal link',
        url:
         window.location.protocol + '//' + 
         window.location.host + window.location.pathname +
          '?roomID=' +
          roomID,
      },
    ],
    scenario: {
      mode: ZegoUIKitPrebuilt.oneONoneCall, 
    },
    
  });


};

return (
<div
  
  ref={myMeeting}
  style={{ width: '100vw', height: '100vh' }}
></div>
);
}