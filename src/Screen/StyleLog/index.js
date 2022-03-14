import {StyleSheet} from 'react-native';
import COLOR from '../../Config/color';
import {moderateScale} from 'react-native-size-matters';

const STYLES = StyleSheet.create({
  inputContainer: {flexDirection: 'row', marginTop: 19},
  input: {
    backgroundColor: 'white',
    paddingHorizontal: moderateScale(20),
    borderColor: COLOR.Ash,
    flex: 1,
    fontSize: 17,
    color: COLOR.Ash,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: moderateScale(24),
    height: moderateScale(48),
  },
  inputPassword: {
    flex: 1,
    fontSize: 17,
    color: COLOR.Ash,
    borderRadius: 10,
    paddingRight: moderateScale(12),
    height: moderateScale(48),
  },
  hidePassword: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingLeft: moderateScale(18),
    paddingRight: moderateScale(20),
    borderColor: COLOR.Ash,
    flex: 1,
    color: COLOR.Ash,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: moderateScale(24),
    height: moderateScale(48),
    alignItems: 'center',
  },
  inputComment: {
    backgroundColor: 'white',
    paddingHorizontal: moderateScale(20),
    borderColor: COLOR.Ash,
    flex: 1,
    fontSize: 17,
    color: COLOR.Ash,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: moderateScale(24),
    height: moderateScale(120),
  },
});

export default STYLES;
