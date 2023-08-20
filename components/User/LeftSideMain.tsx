

import UserPostMain from './Post/UserSectionPostMain';
import NewHotTop from './NewHotTop';


export default function LeftSideMain({}) {

    return(<>

    {/* NEW - HOT - TOP */}
     <NewHotTop />

    {/* POSTS! OVERVIEW! */}
     <UserPostMain pic={false} />
     <UserPostMain pic />
     <UserPostMain pic={false} />
     <UserPostMain pic />

    </>)
}