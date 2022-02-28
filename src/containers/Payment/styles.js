import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingTop: 44,
    paddingLeft: 32,
    paddingRight: 32,
  },
  titleTxt: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    color: COLORS.SUCCESS,
    marginTop: 44,
    marginBottom: 62,
  },
  paymentCardContainer: {
    marginBottom: 20,
  },
});
