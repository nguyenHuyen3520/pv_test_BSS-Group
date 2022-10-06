import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles';
const HomeScreen = ({ navigation }) => {    
    const [data, setData] = useState([]);
    const fetchData = async () => {
        const fetData = await fetch('https://random-data-api.com/api/users/random_user?size=10');
        const data = await fetData.json();
        setData(data);
    }
    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        // console.log("data trong useEffect: ",typeof data);
    }, [data]);
    const renderItem = ({ item, index }) => {
        return (
            <View key={index} style={styles.itemContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Profile', { profile: item })}
                >
                    <Image
                        source={{ uri: item?.avatar ? item?.avatar : '' }}
                        style={styles.itemImage}
                    />
                    <View style={{ padding: 10 }}>
                        <Text style={styles.itemText}>
                            {item?.first_name} {item?.last_name}
                        </Text>
                        <Text numberOfLines={1}>
                            {item?.employment?.title}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    if (data?.length > 0) {
        return (
            <View>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonView}>
                        <TouchableOpacity onPress={() => fetchData()}>
                            <Text style={styles.buttonText}>
                                Fetch Random
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={data}
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    } else {
        return (
            <View>
                <Text>
                    Loading...
                </Text>
            </View>
        )
    }
}

export default HomeScreen