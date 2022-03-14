import React from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';

//helper
import COLOR from '../../Config/color';
import Poppins from '../Popins';
import {styles} from './style';
import {navigate} from '../../Helper/navigate';

//redux
import {setDetailEvent} from '../../Screen/Home/redux/action';

export default function CardEvent({title, data}) {
  const dispatch = useDispatch();

  const setEventDetail = data => {
    dispatch(setDetailEvent(data));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Poppins type="Bold" color={COLOR.Black} size={moderateScale(17)}>
          {title}
        </Poppins>
        <TouchableOpacity style={styles.buttonSeeAll}>
          <Poppins color={COLOR.seeAll} size={13}>
            see all
          </Poppins>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setEventDetail(item);
                navigate('Event Detail');
              }}
              style={styles.content}>
              <View
                style={{
                  marginBottom: moderateScale(18),
                  flex: 1,
                }}>
                <FastImage
                  source={{
                    uri: item.image,
                  }}
                  style={{
                    borderTopLeftRadius: moderateScale(10),
                    borderTopRightRadius: moderateScale(10),
                    height: moderateScale(200),
                  }}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  paddingHorizontal: moderateScale(10),
                  flex: 1,
                }}>
                <Poppins
                  align="center"
                  color={COLOR.Primary}
                  size={14}
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

                <Poppins
                  color="black"
                  align="left"
                  size={14}
                  style={{
                    marginTop: moderateScale(0),
                  }}>
                  {moment(item.eventDate)
                    .format('ddd, MMM DD @ h:mm A')
                    .toUpperCase()}{' '}
                  ICT
                </Poppins>
                <Poppins
                  align="left"
                  type="Bold"
                  color={COLOR.Primary}
                  size={16}
                  style={{
                    height: moderateScale(60),
                  }}>
                  {item.title}
                </Poppins>
                <Poppins
                  align="left"
                  color={COLOR.Ash}
                  size={16}
                  style={{
                    height: moderateScale(60),
                  }}>
                  By Adit Nento
                </Poppins>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

