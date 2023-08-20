
import {Box , Flex} from '@chakra-ui/react';
import LeftCommunitySettings from './LeftSetttingsOptions';


type Props = {
    children: any;
}

export default function CommunitySettingsLayout({children}: Props) {

    return(<>

    <div className={"bg-green-100 w-full h-full flex flex-col  "} >


        <div className="bg-red-100 h-12 mt-[48px] fixed">
          {/* TOP */}
           {children[0]}
        </div>


        <div className="bg-white h-auto w-full  flex-1 flex  ">
        
          {/* LEFT! */}
           {children[1]}
        
          {/* RIGHT! */}
           {children[2]}

        </div>


    </div>
    
    </>)
}