import {useDispatch} from 'react-redux';
import useLocale from './useLocale';
import {
  asyncDownVoteCommentThreadDetail,
  asyncNeutralVoteCommentThreadDetail,
  asyncUpVoteCommentThreadDetail,
} from '../states/detailThread/action';

function useVoteComment() {
  const {
    textLoginToVote,
    textUpVoteSuccess,
    textDownVoteSuccess,
    textRemoveVoteSuccess,
    textErrorUpVote,
    textErrorDownVote,
    textErrorRemoveVote,
  } = useLocale();

  const dispatch = useDispatch();

  const upVoteComment = (commentId: string, threadId: string) => {
    dispatch(
      asyncUpVoteCommentThreadDetail({
        commentId,
        threadId,
        textErrorUpVote,
        textLoginToVote,
        textUpVoteSuccess,
      }),
    );
  };

  const downVoteComment = (commentId: string, threadId: string) => {
    dispatch(
      asyncDownVoteCommentThreadDetail({
        commentId,
        threadId,
        textDownVoteSuccess,
        textLoginToVote,
        textErrorDownVote,
      }),
    );
  };

  const neutralVoteComment = (commentId: string, threadId: string) => {
    dispatch(
      asyncNeutralVoteCommentThreadDetail({
        commentId,
        threadId,
        textRemoveVoteSuccess,
        textLoginToVote,
        textErrorRemoveVote,
      }),
    );
  };

  return [upVoteComment, downVoteComment, neutralVoteComment];
}

export default useVoteComment;
