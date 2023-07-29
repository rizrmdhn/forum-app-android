import {StyleSheet, View, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {IThread} from '../types/interface';
import api from '../utils/api';
import AddNewThreadButton from '../components/AddNewThreadButton';
import useSelectState from '../hooks/useSelectState';
import ThreadCard from '../components/ThreadCard';
import {ScrollView} from 'native-base';
import tw from '../lib/tailwind';
import ThreadPageLayout from '../layout/ThreadPageLayout';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  threadCardContainer: {
    height: windowHeight - 185,
  },
});

export default function ThreadPage() {
  const dispatch = useDispatch();

  const [data, setData] = useState<IThread[]>([]);

  useEffect(() => {
    api.getAllThreads().then(res => {
      setData(res);
    });
  }, [dispatch]);

  return (
    <ThreadPageLayout>
      <ScrollView style={styles.threadCardContainer}>
        <View style={tw.style('dark:bg-dark bg-light flex flex-col items-center overflow-scroll')}>
          {data.map(thread => {
            return <ThreadCard key={thread.id} {...thread} />;
          })}
        </View>
      </ScrollView>
      <AddNewThreadButton />
    </ThreadPageLayout>
  );
}
