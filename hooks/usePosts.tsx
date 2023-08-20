
import { auth, db } from '@/firebase/firebase.config';
import { toast } from 'react-hot-toast';
import { getDoc, doc, updateDoc, collection, getDocs } from 'firebase/firestore';
import {useRouter} from 'next/router';


export default function usePostsHook() {
  const router = useRouter();


  // WHENEVER USER LIKES POSTS/REMOVE LIKE FROM POSTS!
  const onVoteUp = async (upVotesIds: [string] | [], user: any, id: string,
    downVotesIds: [string] | [], voteStatus: number, set: any) => {

    // CHECKS IF ALREADY LIKED A POST!
    const isAlreadyLiked = upVotesIds?.includes(user?.uid as never);
    // CHECKS IF USER DISLIKED IT OR NOT!
    const isUserDislikedAlready = downVotesIds?.includes(user?.uid as never);


    // DISLIKE TO LIKE!
    if (isUserDislikedAlready) {

      // ADDING ADD NEW ID TO UP-VOTE-IDS!
      const NEW_UPVOTE_DATA = [...upVotesIds, user?.uid]; // ADDING NEW!

      // REMOVING ID FROM DOWN-VOTE-IDS!
      const NEW_DOWNVOTE_DATA = [...downVotesIds.filter((id) => id !== user?.uid)];

      // UPDATING VOTES STATE!
      set((prev: any) => ({ ...prev, numberOfVotes: voteStatus + 2 }));

      // UPDATING DATA!
      await updateDoc(doc(db, "Posts", id), {
        upVotesIds: NEW_UPVOTE_DATA,
        downVotesIds: NEW_DOWNVOTE_DATA,
        voteStatus: voteStatus + 2,
      });

      // SHOWING TOAST!
      toast.success("Türkiye 😉😉");
      return;
    }


    // REMOVED THE EXISTING LIKE!
    if (isAlreadyLiked) {
      // CREATING CUSTOM STATE TO FOLLOW LIKEDIDS & UPDATING!
      const newData = upVotesIds.filter(id => id !== user?.uid)

      // UPDATING VOTES STATE!
      set((prev: any) => ({ ...prev, numberOfVotes: newData?.length - downVotesIds?.length }));

      // UPDATING CLOUD DATA!
      await updateDoc(doc(db, 'Posts', id), {
        upVotesIds: newData,
        voteStatus: newData?.length - downVotesIds?.length,
      });

toast.success("Türkiye 😉😉");
      return;
    }


    // NEW LIKE TO BE ADDED!
    if (!isAlreadyLiked) {
      // CREATING CUSTOM STATE TO FOLLOW LIKEDIDS & UPDATING!
      const newData = [...upVotesIds, user?.uid]; // ADDING NEW USER!

      // UPDATING VOTES STATE!
      set((prev: any) => ({ ...prev, numberOfVotes: newData?.length - downVotesIds?.length }));

      // UPDATING CLOUD DATA! 
      await updateDoc(doc(db, 'Posts', id), {
        upVotesIds: newData,
        voteStatus: newData?.length - downVotesIds?.length,
      });

      toast.success("Türkiye 😉😉");
      return;
    }

  }


  // WHENEVER USER DISLIKES POSTS/REMOVE DISLIKE FROM POSTS!
  const onVoteDown = async (downVotesIds: [string], user: any, id: string, upVotesIds: [string] | [], voteStatus: number, set: any) => {

    // CHECKS IF ALREADY LIKED A POST!
    const isAlreadyDisLiked = downVotesIds?.includes(user?.uid);
    const isUserlikedAlready = upVotesIds?.includes(user?.uid);

    // LIKE TO DISLIKE!
    if (isUserlikedAlready) {

      // ADDING NEW TO DOWN-VOTE-IDS!
      const NEW_DOWN_VOTES = [...downVotesIds, user?.uid];

      // REMOVING ID TO UP-VOTES-IDS!
      const NEW_UP_VOTES = [...upVotesIds.filter((id) => id !== user?.uid)];

      set((prev: any) => ({ ...prev, numberOfVotes: voteStatus - 2 }));

      // UPDATING DOC!
      await updateDoc(doc(db, "Posts", id), {
        upVotesIds: NEW_UP_VOTES,
        downVotesIds: NEW_DOWN_VOTES,
        voteStatus: voteStatus - 2,
      })


      toast.success("Türkiye 😉😉");
      return;

    }

    // REMOVED THE EXISTING DISLIKE!
    if (isAlreadyDisLiked) {

      const newData = downVotesIds.filter(id => id !== user?.uid)

      set((prev: any) => ({ ...prev, numberOfVotes: upVotesIds?.length - newData?.length }));

      // UPDATING CLOUD DATA!
      await updateDoc(doc(db, 'Posts', id), {
        downVotesIds: newData,
        voteStatus: upVotesIds?.length - newData?.length,
      });


      toast.success("Türkiye 😉😉");
      return;
    }

    // NEW DISLIKED TO BE ADDED!
    if (!isAlreadyDisLiked) {

      const newData = [...downVotesIds, user?.uid]; // ADDING NEW USER!

      set((prev: any) => ({ ...prev, numberOfVotes: upVotesIds?.length - newData?.length })); // UPDATATING STATE!

      // UPDATING CLOUD DATA! 
      await updateDoc(doc(db, 'Posts', id), {
        downVotesIds: newData,
        voteStatus: upVotesIds?.length - newData?.length,
      });



      toast.success("Türkiye 😉😉");

      return;
    }


  }


  return {
    onVoteUp, onVoteDown
  }
}