import {useState} from 'react';
import {useDispatch} from 'react-redux';
import useLocale from './useLocale';
import {asyncCreateThread} from '../states/thread/action';
import {AppDispatch} from '../states';

function useCreateThread(defaultValue = '') {
  const {textThreadCreated, textErrorCreateThread} = useLocale();

  const dispatch = useDispatch<AppDispatch>();

  const [title, setTitle] = useState(defaultValue);
  const [body, setBody] = useState(defaultValue);
  const [category, setCategory] = useState(defaultValue);

  const onChangeTitle: any = (text: string) => {
    setTitle(text);
  };

  const onChangeBody: any = (text: string) => {
    setBody(text);
  };

  const onChangeCategory: any = (text: string) => {
    setCategory(text);
  };

  const onSubmit = () => {
    dispatch(
      asyncCreateThread({
        title,
        body,
        category,
        textErrorCreateThread,
        textThreadCreated,
      }),
    );
    setTitle('');
    setBody('');
    setCategory('');
  };

  return [
    title,
    onChangeTitle,
    body,
    onChangeBody,
    category,
    onChangeCategory,
    onSubmit,
  ];
}

export default useCreateThread;
