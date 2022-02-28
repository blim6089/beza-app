import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingTop: 36,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 64,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 26,
  },
  image: {
    marginLeft: 12,
  },
  priceTxt: {
    position: 'absolute',
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 27,
    color: COLORS.BLACK,
    bottom: 18,
  },
  successfulTxt: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    color: COLORS.SUCCESS,
    marginBottom: 42,
  },
  guzogoContainer: {
    marginBottom: 32,
  },
  guzogoTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
    color: COLORS.SUCCESS,
    marginBottom: 27,
  },
  formControl: {
    marginBottom: 27,
  },
  formLabelTxt: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
    color: COLORS.LIGHT,
    marginBottom: 7,
  },
  formValueTxt: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 20,
    color: COLORS.SUCCESS,
  },
  downloadContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 112,
  },
  downloadTxt: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: COLORS.SUCCESS,
    marginRight: 16,
  },
});
