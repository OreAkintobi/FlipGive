import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  touchableContainer: {
    marginBottom: 8,
    paddingVertical: 8,
    borderRadius: 12,
    justifyContent: 'space-between',
  },
  jobItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  jobContentView: {
    flex: 5,
  },
  dataContainer: {
    flexDirection: 'row',
  },
  jobImage: {
    marginRight: 16,
  },
  imageStyle: {
    height: 60,
    aspectRatio: 1,
    borderRadius: 12,
  },
  jobTitleText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  jobText: {
    fontSize: 10,
  },
  bottomTabsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '70%',
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  timeText: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'flex-end',
    width: '30%',
  },
});

export default styles;
