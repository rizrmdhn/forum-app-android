import {useDispatch} from 'react-redux';
import useLocale from './useLocale';
import {
  asyncDownVoteThread,
  asyncNeturalVoteThread,
  asyncUpVoteThread,
} from '../states/thread/action';

function useVoteThread() {
  const {
    textLoginToVote,
    textUpVoteSuccess,
    textDownVoteSuccess,
    textErrorUpVote,
    textErrorDownVote,
    textRemoveVoteSuccess,
    textErrorRemoveVote,
  } = useLocale();

  const dispatch = useDispatch();

  const upVoteThread: any = (threadId: string) => {
    dispatch(
      asyncUpVoteThread({
        threadId,
        textUpVoteSuccess,
        textErrorUpVote,
        textLoginToVote,
      }),
    );
  };

  const downVoteThread: any = (threadId: string) => {
    dispatch(
      asyncDownVoteThread({
        threadId,
        textDownVoteSuccess,
        textErrorDownVote,
        textLoginToVote,
      }),
    );
  };

  const removeVoteThread: any = (threadId: string) => {
    dispatch(
      asyncNeturalVoteThread({
        threadId,
        textRemoveVoteSuccess,
        textErrorRemoveVote,
        textLoginToVote,
      }),
    );
  };

  return [upVoteThread, downVoteThread, removeVoteThread];
}

export default useVoteThread;
