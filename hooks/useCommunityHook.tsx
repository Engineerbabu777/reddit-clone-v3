
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth ,db } from '@/firebase/firebase.config';
import {toast} from 'react-hot-toast';
import {updateDoc , doc , } from 'firebase/firestore';
import {useRouter} from 'next/router';

export default function useCommunityHook() {

  const [user] = useAuthState(auth);
  const router = useRouter();

    // ON JOINED COMMUNITY!
    const onJoined = async(Name:string,memberIds:[string],setIsJoined:any,isJoined:boolean, setIsLoading:any) => {
         const MemberIds = [...memberIds , user?.uid];
          
         // UPDATE DOC!
         await updateDoc(doc(db , "communities" , Name),{ MemberIds, });
         toast.success("new user joined!");
         setIsJoined(!isJoined);
         setIsLoading(false);

    router.reload();

    }

    // ON LEAVE COMMUNITY!
    const onLeave = async(Name:string,memberIds:[string],setIsJoined:any,isJoined:boolean,setIsLoading:any) => {
        const MemberIds = memberIds?.filter((id:any) => id !== user?.uid );
          
        // UPDATE DOC!
        await updateDoc(doc(db , "communities" , Name),{ MemberIds, })
        toast.success("old user leaved!");
        setIsJoined(!isJoined);
        setIsLoading(false);

        router.reload();

    }


    return{
onJoined , onLeave
    }
}