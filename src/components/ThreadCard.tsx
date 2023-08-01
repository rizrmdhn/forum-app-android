import {VStack, Box, Text, View} from 'native-base';
import React from 'react';
import {IThread, IUser} from '../types/interface';
import tw from '../lib/tailwind';
import {Pressable, Appearance, useWindowDimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import RenderHtml from 'react-native-render-html';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../states';
import {asyncGetThreadDetail} from '../states/detailThread/action';
import moment from 'moment';
import 'moment/locale/id';
import useSelectState from '../hooks/useSelectState';
import useLocale from '../hooks/useLocale';

export default function ThreadCard({
  id,
  title,
  body,
  createdAt,
  category,
  downVotesBy,
  upVotesBy,
  ownerId,
  totalComments,
  navigation,
}: IThread & {navigation: any}) {
  const user = useSelectState('user') as IUser[];
  const locale = useSelectState('locale') as string;

  const {textCreatedBy} = useLocale();

  const isDarkMode = Appearance.getColorScheme() === 'dark';

  const {width} = useWindowDimensions();

  const dispatch = useDispatch<AppDispatch>();

  const creator = user.find((u: any) => u.id === ownerId);
  const creatorName = creator ? creator.name : '';

  const onGetDetailThread = () => {
    dispatch(asyncGetThreadDetail({threadId: id}));
    setTimeout(() => {
      navigation.navigate('DetailThread', {
        threadId: id,
      });
    }, 500);
  };

  return (
    <Box
      style={tw.style(
        'w-72 h-52 rounded-xl py-3 px-8 flex-col flex justify-start my-3',
        {
          'bg-threadCard': !isDarkMode,
          'bg-threadCardDark': isDarkMode,
        },
      )}>
      <VStack>
        <Box
          style={tw.style('self-start p-1 rounded items-baseline', {
            'bg-categoryDark': isDarkMode,
            'bg-light': !isDarkMode,
          })}>
          <Text
            style={tw.style({
              'text-white': isDarkMode,
              'text-black': !isDarkMode,
            })}>
            #{category}
          </Text>
        </Box>
        <Pressable onPress={onGetDetailThread}>
          <Text
            style={tw.style('text-dark dark:text-white underline my-2', {
              'text-black': !isDarkMode,
              'text-white': isDarkMode,
            })}
            numberOfLines={1}>
            {title}
          </Text>
        </Pressable>
        <Box style={tw.style('overflow-scroll w-60 h-11 my-1')}>
          <RenderHtml
            baseStyle={{
              color: isDarkMode ? 'white' : 'black',
            }}
            contentWidth={width}
            source={{html: body}}
          />
        </Box>
        <Box style={tw.style('w-auto flex flex-row')}>
          <Pressable
            style={tw.style('w-20 mt-2 flex flex-row')}
            onPress={() => console.log('upvoted')}>
            <MaterialIcons
              name="thumb-up-off-alt"
              size={25}
              color={isDarkMode ? 'white' : 'black'}
            />
            <Text
              style={tw.style('ml-2 ', {
                'text-white': isDarkMode,
                'text-black': !isDarkMode,
              })}>
              {upVotesBy.length}
            </Text>
          </Pressable>
          <Pressable
            style={tw.style('w-20 mt-2 flex flex-row')}
            onPress={() => console.log('downvoted')}>
            <MaterialIcons
              name="thumb-down-off-alt"
              size={25}
              color={isDarkMode ? 'white' : 'black'}
            />
            <Text
              style={tw.style('ml-2 ', {
                'text-white': isDarkMode,
                'text-black': !isDarkMode,
              })}>
              {downVotesBy.length}
            </Text>
          </Pressable>
          <View style={tw.style('w-20 mt-2 flex flex-row')}>
            <MaterialIcons
              name="chat-bubble-outline"
              size={25}
              color={isDarkMode ? 'white' : 'black'}
            />
          </View>
        </Box>
        <Box style={tw.style('w-auto flex flex-row justify-between')}>
          <Text
            style={tw.style('text-dark dark:text-white my-2', {
              'text-black': !isDarkMode,
              'text-white': isDarkMode,
            })}
            numberOfLines={1}>
            {moment(createdAt).locale(locale).fromNow()}
          </Text>
          <View style={tw.style('flex flex-row w-32')}>
            <Text
              style={tw.style('text-dark dark:text-white my-2', {
                'text-black': !isDarkMode,
                'text-white': isDarkMode,
              })}
              numberOfLines={1}>
              {textCreatedBy}{' '}
              <Text style={tw.style('font-bold')}>{creatorName}</Text>
            </Text>
          </View>
        </Box>
      </VStack>
    </Box>
  );
}
