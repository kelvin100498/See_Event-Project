import React from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';

//helper
import COLOR from '../../Config/color';
import Poppins from '../Popins';
import {stylesCardEventExplore} from './style';
import {navigate} from '../../Helper/navigate';

//redux
import {setDetailEvent} from '../../Screen/Home/redux/action';

//card event explore
export default function CardEventExplore({data}) {
  //take reducer
  const dispatch = useDispatch();
  const setEventDetail = data => {
    dispatch(setDetailEvent(data));
  };
  return (
    <View style={stylesCardEventExplore.container}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        vertical
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setEventDetail(item);
                navigate('Event Detail');
              }}>
              <View style={stylesCardEventExplore.content}>
                {/* description */}
                <View style={{flex: 1}}>
                  {/* date */}
                  <Poppins size={10} align="left" color={COLOR.Black}>
                    {moment(item.eventDate)
                      .format('ddd, MMM DD @ h:mm A')
                      .toUpperCase()}{' '}
                    ICT
                  </Poppins>
                  {/* title */}
                  <Poppins
                    marginTop={moderateScale(5)}
                    size={14}
                    align="left"
                    color={COLOR.Primary}
                    type="Bold">
                    {item.title}
                  </Poppins>
                  {/* author */}
                  <Poppins
                    marginTop={moderateScale(2)}
                    size={12}
                    align="left"
                    color="#999999">
                    By Adit nento
                  </Poppins>
                  {/* category */}

                  <Poppins
                    size={12}
                    align="center"
                    color={COLOR.Primary}
                    style={{
                      marginBottom: moderateScale(16),
                      width: moderateScale(
                        item.category.categoryName.length * 10,
                      ),
                      maxWidth: '100%',
                      backgroundColor: COLOR.cloud,
                      padding: moderateScale(5),
                      borderRadius: moderateScale(5),
                    }}>
                    {item.category.categoryName}
                  </Poppins>
                </View>
                {/* image */}
                <View style={{flex: 1, paddingLeft: 10}}>
                  <FastImage
                    source={{
                      uri: item.image,
                    }}
                    style={{
                      height: moderateScale(88),
                      width: moderateScale(132),
                      backgroundColor: 'white',
                      borderRadius: 10,
                    }}
                    resizeMode="cover"
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
