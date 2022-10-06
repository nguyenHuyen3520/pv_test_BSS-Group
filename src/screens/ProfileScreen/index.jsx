import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
const ProfileScreen = (props) => {
    const { navigation } = props;
    const { profile } = props?.route?.params;
    console.log("profile: ", profile);
    return (
        <View style={styles.profileContainer}>
            <View style={styles.header}>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Text>
                            &lt; Back
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.headerText}>
                        Profile
                    </Text>
                </View>
                <View>

                </View>
            </View>
            <View>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: profile.avatar ? profile.avatar : '' }}
                        style={styles.image}
                    />
                    <View>
                        <Text style={styles.name}>
                            {profile?.first_name} {profile?.last_name}
                        </Text>
                    </View>

                </View>
            </View>
            <View style={{ padding: 10 }}>
                <View style={styles.fields}>
                    <Text style={styles.fieldLeft}>
                        Date of birth:
                    </Text>
                    <Text>
                        {profile?.date_of_birth}
                    </Text>
                </View>
                <View style={styles.fields}>
                    <Text style={styles.fieldLeft}>
                        Email:
                    </Text>
                    <Text>
                        {profile?.email}
                    </Text>
                </View>
                <View style={styles.fields}>
                    <Text style={styles.fieldLeft}>
                        Address:
                    </Text>
                    <Text>
                        {profile?.address?.street_address} {profile?.address?.street_address?.city}
                    </Text>
                </View>
                <View style={styles.fields}>
                    <Text style={styles.fieldLeft}>
                        Phone number:
                    </Text>
                    <Text>
                        {profile?.phone_number}
                    </Text>
                </View>

            </View>
        </View>
    )
}

export default ProfileScreen