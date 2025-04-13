import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const countries = [
    { label: "omen", value: "1", flag: require("../assets/images/oman.jpg") },
    { label: "emirates", value: "2", flag: require("../assets/images/Emirates.png") },
];

const CountryDropdown = () => {
    const [selectedCountry, setSelectedCountry] = useState(countries[0].value);

    return (
        <View style={styles.container}>
            <Dropdown
                style={styles.dropdown}
                data={countries}
                labelField="label"
                valueField="value"
                value={selectedCountry}
                onChange={(item) => setSelectedCountry(item.value)}

                // Show only the first flag as the dropdown icon
                renderLeftIcon={() => (
                    <Image
                        source={countries.find((c) => c.value === selectedCountry)?.flag}
                        style={styles.flag}
                    />
                )}

                // Show only flags in the dropdown list
                renderItem={(item) => (
                    <View style={styles.item}>
                        <Image source={item.flag} style={styles.flag} />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    dropdown: {
        height: 44,
        width: "100%",
        borderWidth: 1,
        borderColor: "#a3a3a3",
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: "white",
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
    },
    flag: {
        width: 20,
        height: 12,
        marginRight: 10,
    },
});

export default CountryDropdown;