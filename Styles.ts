import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
  },
  buttonItemLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  buttonItemRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
  },
});
