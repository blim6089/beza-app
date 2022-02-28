import {StyleSheet} from 'react-native';
import {COLORS} from '@/themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusContainer: {
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceTxt: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 22,
    color: COLORS.SUCCESS,
  },
  statusContainer: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 18,
  },
  nameTxt: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: COLORS.SUCCESS,
    marginBottom: 4,
  },
  timeTxt: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: COLORS.SUCCESS,
  },
});
