import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    profileContainer: { backgroundColor: 'white', height: '100%' },
    header: { height: 50, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10, borderBottomWidth: 0 },
    headerText: { fontWeight: 'bold', fontSize: 18 },
    imageContainer: { height: 200, justifyContent: 'center', alignItems: 'center' },
    image: { height: 150, width: 150, borderRadius: 99, backgroundColor: 'white', marginBottom: 10, },
    name: { fontWeight: 'bold', fontSize: 20 },
    fields: { flexDirection: 'row', margin: 5 },
    fieldLeft: { marginRight: 5, fontWeight: 'bold' }
});

export default styles;