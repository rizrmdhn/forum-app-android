import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React, {PropsWithChildren, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {IThread} from '../types/interface';
import api from '../utils/api';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AddNewThreadButton from '../components/AddNewThreadButton';
import BottomNavigation from '../components/BottomNavigation';
import useSelectState from '../hooks/useSelectState';
import InputModal from '../components/InputModal';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

export default function DefaultPage() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const dispatch = useDispatch();

  const [data, setData] = useState<IThread[]>([]);

  useEffect(() => {
    api.getAllThreads().then(res => {
      setData(res);
    });
  }, [dispatch]);

  return (
    <>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        {data.map(item => {
          return (
            <Section key={item.id} title={item.title}>
              {item.body}
            </Section>
          );
        })}
      </View>
      <AddNewThreadButton />
      <BottomNavigation />
      <InputModal />
    </>
  );
}
