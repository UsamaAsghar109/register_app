import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

const App = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const submitData = () => {
        fetch('https://boxeyi.herokuapp.com/api/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                username: userName,
                password: password

            })
        })

            .then(async (res) => {
                console.log("Response of API", res);
                let data = await res.json();
                console.log("Successfull", data)
            })
            .catch((error) => {
                console.log("Something went wrong", error)
            })
    }
    return (
        <View>
            <Text style={{ textAlign: "center", fontSize: 30 }}>Registration</Text>
            <TextInput
                style={{ margin: 10, borderWidth: 2 }}
                placeholder="First Name"
                value={firstName}
                onChangeText={(val) => setFirstName(val)}
            />
            <TextInput
                style={{ margin: 10, borderWidth: 2 }}
                placeholder="Last Name"
                value={lastName}
                onChangeText={(val) => setLastName(val)}
            />
            <TextInput
                style={{ margin: 10, borderWidth: 2 }}
                placeholder="Username"
                value={userName}
                onChangeText={(val) => setUserName(val)}
            />
            <TextInput
                style={{ margin: 10, borderWidth: 2 }}
                placeholder="Password"
                value={password}
                onChangeText={(val) => setPassword(val)}
            />
            <TouchableOpacity
                style={{ backgroundColor: 'skyblue', margin: 30, padding: 10 }} onPress={submitData}>
                <Text style={{ textAlign: "center" }}>Signup</Text>
            </TouchableOpacity>
            <Text>Login Button</Text>
        </View>
    )
}

export default App
