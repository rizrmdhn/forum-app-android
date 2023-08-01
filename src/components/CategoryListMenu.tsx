import {Text, View, Pressable, Appearance} from 'react-native';
import React from 'react';
import tw from '../lib/tailwind';
import * as Animatable from 'react-native-animatable';
import {IThread} from '../types/interface';
import useSelectState from '../hooks/useSelectState';
import {AppDispatch} from '../states';
import {useDispatch} from 'react-redux';
import {setFilterThreadByCategory} from '../states/filterThreadByCategory/action';
import useLocale from '../hooks/useLocale';

export default function CategoryListMenu() {
  const thread = useSelectState('thread') as IThread[];
  const category = useSelectState('category');

  const {textCategoryList} = useLocale();

  const dispatch = useDispatch<AppDispatch>();

  const isDarkMode = Appearance.getColorScheme() === 'dark';
  const uniqueCategory = [] as string[];

  const filterThreadByTitle = (text: string) => {
    if (category === text) {
      dispatch(setFilterThreadByCategory(''));
    } else {
      dispatch(setFilterThreadByCategory(text));
    }
  };

  return (
    <Animatable.View
      animation={'fadeInLeftBig'}
      style={tw.style('absolute top-20 left-0 w-36 rounded-br-2xl', {
        'bg-defaultLightHeaders': !isDarkMode,
        'bg-defaultDarkHeaders': isDarkMode,
      })}>
      <View style={tw.style('flex flex-col items-center')}>
        <Text style={tw.style('text-white dark:text-white')}>
          {textCategoryList}
        </Text>
      </View>
      <View style={tw.style('flex flex-row flex-wrap p-2')}>
        {thread.map(threads => {
          if (!uniqueCategory.includes(threads.category)) {
            uniqueCategory.push(threads.category);
            return (
              <Pressable
                key={threads.id}
                onPress={() => filterThreadByTitle(threads.category)}
                style={tw.style(
                  'self-start p-1 ml-3 rounded my-2 bg-light items-baseline',
                )}>
                <Text style={tw.style('text-black dark:text-white')}>
                  #{threads.category}
                </Text>
              </Pressable>
            );
          }
        })}
      </View>
    </Animatable.View>
  );
}
