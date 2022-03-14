import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';


export const categoryStyles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(12),
    marginRight: moderateScale(8),
    borderRadius: moderateScale(20),
  },
  buttonActive: {
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(4),
    marginRight: moderateScale(8),
    borderRadius: moderateScale(4),
  },
  button2: {
    backgroundColor: 'white',
    paddingHorizontal: moderateScale(20),
    paddingVertical: moderateScale(4),
    marginRight: moderateScale(8),
    borderRadius: moderateScale(10),
  },
  buttonActive2: {
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(4),
    marginRight: moderateScale(8),
    borderRadius: moderateScale(10),
  },
});
