import {useState} from 'react';
import {useDispatch} from 'react-redux';
import useLocale from './useLocale';
import {asyncCreateCommentThreadDetail} from '../states/detailThread/action';

function useCreateComment(defaultValue = '') {
  const {textCommentCreated, textErrorCreateComment} = useLocale();

  const dispatch = useDispatch();

  const [content, setContent] = useState(defaultValue);

  const onChangeContent = (value: string) => {
    setContent(value);
  };

  const createComment: any = (threadId: string) => {
    dispatch(
      asyncCreateCommentThreadDetail({
        content,
        threadId,
        textCommentCreated,
        textErrorCreateComment,
      }),
    );
    setContent('');
  };

  return [content, onChangeContent, createComment];
}

export default useCreateComment;
