import {VStack, Box, Divider, Text, View} from 'native-base';
import React from 'react';
import {IThread} from '../types/interface';
import tw from '../lib/tailwind';
import {Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
}: IThread) {
  return (
    <Box
      style={tw.style(
        'w-72 h-44 rounded-xl py-3 px-8 flex-col flex justify-start my-3 bg-threadCard dark:bg-threadCardDark',
      )}>
      <VStack>
        <Box
          style={tw.style(' self-start p-1 rounded dark:bg-categoryDark bg-light items-baseline')}>
          <Text>#{category}</Text>
        </Box>
        <Pressable onPress={() => console.log(id)}>
          <Text style={tw.style('text-dark dark:text-white underline my-2')} numberOfLines={1}>
            {title}
          </Text>
        </Pressable>
        <Box style={tw.style('overflow-scroll w-60 h-11 my-1')}>
          <Text style={tw.style('text-black dark:text-white')}>{body}</Text>
        </Box>
        <Box style={tw.style('w-auto flex flex-row')}>
          <Pressable
            style={tw.style('w-20 mt-2 flex flex-row')}
            onPress={() => console.log('upvoted')}>
            <MaterialIcons name="thumb-up-off-alt" size={25} color="black" />
            <Text style={tw.style('ml-2 dark:text-white text-black')}>{upVotesBy.length}</Text>
          </Pressable>
          <Pressable
            style={tw.style('w-20 mt-2 flex flex-row')}
            onPress={() => console.log('downvoted')}>
            <MaterialIcons name="thumb-down-off-alt" size={25} color="black" />
            <Text style={tw.style('ml-2 dark:text-white text-black')}>{downVotesBy.length}</Text>
          </Pressable>
          <View style={tw.style('w-20 mt-2 flex flex-row')}>
            <MaterialIcons name="chat-bubble-outline" size={25} color="black" />
          </View>
        </Box>
      </VStack>
    </Box>
  );
}
