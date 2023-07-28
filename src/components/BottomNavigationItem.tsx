import React from 'react';
import tw from '../lib/tailwind';
import {Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type BottomNavigationItemProps = {
  className?: string;
  iconName: string;
  label: string;
};

export default function BottomNavigationItem({
  className,
  iconName,
  label,
}: BottomNavigationItemProps) {
  return (
    <TouchableOpacity style={tw.style(className)}>
      <MaterialIcons name={iconName} size={30} color={`#fff`} />
      <Text style={tw.style('font-bold text-white')}>{label}</Text>
    </TouchableOpacity>
  );
}
