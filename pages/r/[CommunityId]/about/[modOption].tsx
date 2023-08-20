

import CommunitySettingsLayout from '@/components/Community/Settings/ComSetLayout';
import TopBarSettings from '@/components/Community/Settings/TopBarSettings';
import LeftCommunitySettings from '@/components/Community/Settings/LeftSetttingsOptions';
import ModMainComponent from '@/components/Community/Settings/ModOptions/ModMainComponent'; 


export default function Page ({}) {


    return( <CommunitySettingsLayout>

                {/* CHILD 0*/}
                    <TopBarSettings />


                {/* CHILD 1 */}
                    <LeftCommunitySettings />


                {/* CHILD 2 */}
                    <ModMainComponent />
  
  
            </CommunitySettingsLayout>
        )
}