import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

const Register = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const submitData = () => {
        ffetch('https://boxeyi.herokuapp.com/api/login/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: value.username,
                password: value.password

            })
        })

            .then(async (res) => {
                const data = res.json();
                if (res.status == 200) {
                    // storeToken(data).then(() => {
                    console.log("Successfull", data)
                    // Toast.show("Successfully login", Toast.LONG)



                }
                else {
                    console.log("Credientials are not correct")
                    Toast.show("Username or Password is incorrect", Toast.LONG)
                }

            },
                (error) => {
                    console.log("Something went wrong", error);
                }
            )
    }
    return (
        <View>
            <Text style={{ textAlign: "center", fontSize: 30 }}>Registration</Text>
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
                <Text style={{ textAlign: "center" }}>Login</Text>
            </TouchableOpacity>
            <Text>Signup Button</Text>
        </View>
    )
}

export default Register
