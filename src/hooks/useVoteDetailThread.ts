import {useDispatch} from 'react-redux';
import useLocale from './useLocale';
import {
  asyncDownVoteThreadDetail,
  asyncNeutralVoteThreadDetail,
  asyncUpVoteThreadDetail,
} from '../states/detailThread/action';

function useVoteDetailThread() {
  const {
    textErrorUpVote,
    textUpVoteSuccess,
    textLoginToVote,
    textDownVoteSuccess,
    textErrorDownVote,
    textRemoveVoteSuccess,
    textErrorRemoveVote,
  } = useLocale();

  const dispatch = useDispatch();

  const upVoteDetailThread = (threadId: string) => {
    dispatch(
      asyncUpVoteThreadDetail({
        threadId,
        textErrorUpVote,
        textLoginToVote,
        textUpVoteSuccess,
      }),
    );
  };

  const downVoteDetailThread = (threadId: string) => {
    dispatch(
      asyncDownVoteThreadDetail({
        threadId,
        textDownVoteSuccess,
        textLoginToVote,
        textErrorDownVote,
      }),
    );
  };

  const neutralVoteDetailThread = (threadId: string) => {
    dispatch(
      asyncNeutralVoteThreadDetail({
        threadId,
        textRemoveVoteSuccess,
        textLoginToVote,
        textErrorRemoveVote,
      }),
    );
  };

  return [upVoteDetailThread, downVoteDetailThread, neutralVoteDetailThread];
}

export default useVoteDetailThread;
