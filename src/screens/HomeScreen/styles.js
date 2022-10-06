import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    itemContainer: {
        width: '48%', borderWidth: 1, borderColor: '#e0e0e0', borderRadius: 8, margin: 5, backgroundColor: 'white'
    },
    itemImage: { height: 150, width: '100%' },
    itemText: { fontWeight: 'bold' },
    buttonContainer: { justifyContent: 'center', alignItems: 'center', marginVertical: 10 },
    buttonView: { paddingVertical: 5, paddingHorizontal: 15, backgroundColor: '#f0003c', borderRadius: 8 },
    buttonText: { color: 'white', fontWeight: 'bold' },
    flatListContainer:{ padding: 10, backgroundColor: '#e1f5dc', marginBottom: 100 }
});

export default styles;