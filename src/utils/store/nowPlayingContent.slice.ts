import { PayloadAction, ThunkAction, createSlice } from '@reduxjs/toolkit';
import {
    ContentDetails,
    ContentList,
    VideoList,
} from '../../types/content.type';
import { getNowPlayingContent, getVideosById } from '../api/content.service';

type NowPlayingContentState = {
    contentInfo: ContentDetails | null;
    ytVideoId: string;
};

const initialState: NowPlayingContentState = {
    contentInfo: null,
    ytVideoId: '',
};

const nowPlayingContentSlice = createSlice({
    name: 'nowPlayingContent',
    initialState,
    reducers: {
        setNowPlayingContentInfo: (
            state,
            action: PayloadAction<ContentList>
        ) => {
            state.contentInfo = action.payload.results[0];
        },
        setYtVideoId: (state, action: PayloadAction<VideoList>) => {
            const trailerId = action.payload.results
                .map((item: any) => {
                    if (item.type.toLowerCase() === 'trailer') {
                        return item.key;
                    }
                })
                .filter((item: any) => item)[0];
            state.ytVideoId = trailerId;
        },
    },
});

export const { setNowPlayingContentInfo, setYtVideoId } =
    nowPlayingContentSlice.actions;

export default nowPlayingContentSlice.reducer;

export const fetchNowPlayingContentInfo =
    (): ThunkAction<void, NowPlayingContentState, unknown, any> =>
    async (dispatch) => {
        const data = await getNowPlayingContent();
        dispatch(setNowPlayingContentInfo(data));
    };

export const fetchContentVideos =
    (
        id: string,
        type: 'movie' | 'tv_series'
    ): ThunkAction<void, NowPlayingContentState, unknown, any> =>
    async (dispatch) => {
        const data = await getVideosById(id, type);
        dispatch(setYtVideoId(data));
    };
