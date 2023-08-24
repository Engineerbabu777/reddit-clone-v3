
import {atom} from 'recoil';

export type Post = {
    communityId: string | undefined | string[];
    creatorID: string;
    title: string;
    image?: string;
    numberOfComments: number;
    voteStatus: number;
    createdAt: any;
    creatorName: string | undefined;
    type: 'image' | 'post' | 'link' | 'poll';
    votesIds?: [string] | [];
    upVotesIds: [string] | [];
    downVotesIds: [string] | [],
    key?:string;
}