import {ActionType} from './action';
import {Action, DetailThreadState} from './types/type';

const initialState: DetailThreadState = null;

export default function detailThreadReducer(
  state: DetailThreadState = initialState,
  action: Action,
): DetailThreadState {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS_DETAIL:
      return action.payload.threadDetail;
    case ActionType.SET_THREADS_DETAIL_TO_NULL:
      return null;
    case ActionType.CREATE_COMMENT_THREAD_DETAIL:
      if (!state) {
        return state;
      }
      return {
        ...state,
        comments: [...state.comments, action.payload.comment],
      };
    case ActionType.UP_VOTE_THREAD_DETAIL:
      if (!state) {
        return state;
      }
      return {
        ...state,
        upVotesBy: [...state.upVotesBy, action.payload.userId],
        downVotesBy: state.downVotesBy.filter(
          userId => userId !== action.payload.userId,
        ),
      };
    case ActionType.DOWN_VOTE_THREAD_DETAIL:
      if (!state) {
        return state;
      }
      return {
        ...state,
        upVotesBy: state.upVotesBy.filter(
          userId => userId !== action.payload.userId,
        ),
        downVotesBy: [...state.downVotesBy, action.payload.userId],
      };
    case ActionType.NEUTRAL_VOTE_THREAD_DETAIL:
      if (!state) {
        return state;
      }
      return {
        ...state,
        upVotesBy: state.upVotesBy.filter(
          userId => userId !== action.payload.userId,
        ),
        downVotesBy: state.downVotesBy.filter(
          userId => userId !== action.payload.userId,
        ),
      };
    case ActionType.UP_VOTE_COMMENT_THREAD_DETAIL:
      if (!state) {
        return state;
      }
      return {
        ...state,
        comments: state.comments.map(comment => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: [...comment.upVotesBy, action.payload.userId],
              downVotesBy: comment.downVotesBy.filter(
                userId => userId !== action.payload.userId,
              ),
            };
          }
          return comment;
        }),
      };
    case ActionType.DOWN_VOTE_COMMENT_THREAD_DETAIL:
      if (!state) {
        return state;
      }
      return {
        ...state,
        comments: state.comments.map(comment => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter(
                userId => userId !== action.payload.userId,
              ),
              downVotesBy: [...comment.downVotesBy, action.payload.userId],
            };
          }
          return comment;
        }),
      };
    case ActionType.NEUTRAL_VOTE_COMMENT_THREAD_DETAIL:
      if (!state) {
        return state;
      }
      return {
        ...state,
        comments: state.comments.map(comment => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.filter(
                userId => userId !== action.payload.userId,
              ),
              downVotesBy: comment.downVotesBy.filter(
                userId => userId !== action.payload.userId,
              ),
            };
          }
          return comment;
        }),
      };
    default:
      return state;
  }
}
