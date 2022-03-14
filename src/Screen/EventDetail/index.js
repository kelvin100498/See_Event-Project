import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import CardEventDetail from '../../Component/cardEventDetail';
import Poppins from '../../Component/Popins';
import COLOR from '../../Config/color';
import Feather from 'react-native-vector-icons/Feather';
import Detail from '../../Component/cardEventDetail/details';
import STYLES from '../StyleLog';
import ButtonPrimary from '../../Component/Button';
import {useDispatch, useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import moment from 'moment';
import {postComment} from './redux/action';


const EventDetail = (props, item) => {
  const [comments, setComments] = useState('');
  const {detailEvent} = useSelector(state => state.Home);

  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            marginBottom: moderateScale(32),
            paddingHorizontal: widthPercentageToDP(4),
          }}>
          <View style={{}}>
            <CardEventDetail title={detailEvent.title} />
            <View style={styles.header}>
              <Feather
                color={'black'}
                style={{
                  marginRight: moderateScale(14),
                }}
                name="calendar"
                size={21}
              />
              <View
                style={{
                  marginBottom: moderateScale(16),
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Poppins
                  type="Regular"
                  color={COLOR.Black}
                  size={moderateScale(14)}>
                  {moment(detailEvent.eventDate)
                    .format('ddd, MMM DD @ h:mm A')
                    .toUpperCase()}{' '}
                  ICT
                </Poppins>
                <Poppins
                  style={{}}
                  type="Regular"
                  color={COLOR.Black}
                  size={moderateScale(14)}>
                  {detailEvent.category.categoryName}
                </Poppins>
              </View>
            </View>
            <FastImage
              source={{
                uri: detailEvent.image,
              }}
              style={{
                borderRadius: moderateScale(10),
                height: moderateScale(200),
                width: widthPercentageToDP(92),
              }}
              resizeMode="cover"
            />
          </View>
          {/* Details Card */}
          <View style={styles.details}>
            <Detail title={'Details'} />
            <Poppins color="black" align="left">
              {detailEvent.description}
            </Poppins>
          </View>

          {/* Comment Card */}
          <View style={styles.comments}>
            <Detail title={'Comments'} />
          </View>

          {/* Input comment */}
          <View style={{}}>
            <View style={STYLES.inputContainer}>
              <TextInput
                onChangeText={text => setComments(text)}
                placeholder="Enter your comment here"
                multiline={true}
                numberOfLines={10}
                style={STYLES.inputComment}
                value={comments}
                placeholderTextColor={COLOR.Ash}
              />
            </View>
            {/* Submit Button */}
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  postComment({
                    comment: comments,
                  }),
                )
              }>
              <ButtonPrimary
                icon={{
                  active: true,
                  content: (
                    <Feather
                      color="white"
                      name="message-circle"
                      size={21}
                      style={{}}
                    />
                  ),
                }}
                style={{}}
                text={'Submit'}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* FOOTER */}
        <View
          style={{
            paddingHorizontal: 0,
            flex: 1,
            backgroundColor: 'white',
            height: moderateScale(100),
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <ButtonPrimary
              icon={{
                active: true,
                content: (
                  <Feather color={COLOR.Primary} name="share-2" size={21} />
                ),
              }}
              style={{
                width: moderateScale(120),
              }}
              text={'Share'}
              color={COLOR.Primary}
              backgroundColor="white"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <ButtonPrimary
              icon={{
                active: true,
                content: (
                  <Feather
                    name="bookmark"
                    size={21}
                    style={{
                      color: 'white',
                    }}
                  />
                ),
              }}
              style={{
                width: moderateScale(120),
              }}
              text={'Save'}
              color="white"
              backgroundColor={COLOR.Primary}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetail;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  details: {},
  comments: {},
});
