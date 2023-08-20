
import CommunitySettingsLayout from '@/components/Community/Settings/ComSetLayout';
import TopBarSettings from '@/components/Community/Settings/TopBarSettings';
import LeftCommunitySettings from '@/components/Community/Settings/LeftSetttingsOptions';
import MainContainerSettings from '@/components/Community/Settings/MainContainerSettings' 

export default function Index({}) {


    return(<CommunitySettingsLayout>


      {/* CHILD 0*/}
        <TopBarSettings />


      {/* CHILD 1 */}
        <LeftCommunitySettings />


      {/* CHILD 2 */}
        <MainContainerSettings />
    
    
    </CommunitySettingsLayout>)
}