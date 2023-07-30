import {StyleSheet, View, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {IThread} from '../types/interface';
import AddNewThreadButton from '../components/AddNewThreadButton';
import useSelectState from '../hooks/useSelectState';
import ThreadCard from '../components/ThreadCard';
import {ScrollView} from 'native-base';
import tw from '../lib/tailwind';
import {asyncPopulateUsersAndThreads} from '../states/shared/action';
import {AppDispatch} from '../states';
import HeaderThreadPage from '../components/HeaderThreadPage';
import CategoryListMenu from '../components/CategoryListMenu';
import MenuItem from '../components/MenuItem';
import InputModal from '../components/InputModal';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  threadCardContainer: {
    height: windowHeight - 180,
  },
});

export default function ThreadPage() {
  const thread = useSelectState('thread') as IThread[];
  const threadTitle = useSelectState('threadTitle');
  const showMenu = useSelectState('showMenu');
  const showCategory = useSelectState('showCategory');

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const filterThreadByTitle = (thread: IThread[]) => {
    return thread.filter(threads => {
      if (threadTitle === null) {
        return threads;
      } else if (threadTitle === undefined) {
        return threads;
      } else if (typeof threadTitle === 'string') {
        return threads.title.toLowerCase().includes(threadTitle.toLowerCase());
      }
      return false;
    });
  };

  return (
    <View>
      <HeaderThreadPage />
      <ScrollView style={styles.threadCardContainer}>
        <View style={tw.style('dark:bg-dark bg-light flex flex-col items-center overflow-scroll')}>
          {filterThreadByTitle(thread).map(threads => {
            return <ThreadCard key={threads.id} {...threads} />;
          })}
        </View>
      </ScrollView>
      {showCategory && <CategoryListMenu />}
      {showMenu && <MenuItem />}
      <AddNewThreadButton />
      <InputModal />
    </View>
  );
}
