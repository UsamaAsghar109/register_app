import { SET_LOGIN_DATA } from '../Actions/ApiData'

const initialState = {
    clientId: 0,
    name: "",
    firstName: "",
    lastName: "",
    email: "",
    token: "",
    phoneNumber: 0,
    NewDealsData: "",
    BusinessTypeData: "",
    story: '',
    bio: '',
    userName: '',
    profilePic: '',
    location: '',
    code: '',
    paymentSelection: '',
    link_token: ''
};

const ApiData = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_DATA:
            const My_Response = action.response;
            state.email = My_Response.data.email;
            state.phoneNumber = My_Response.data.phoneNo;
            state.token = My_Response.token;
            state.name = My_Response.data.firstName + " " + My_Response.data.lastName;
            state.firstName = My_Response.data.firstName;
            state.lastName = My_Response.data.lastName;
            state.clientId = My_Response.data.id;
            state.code = My_Response.data.referralCode;

            state.bio = My_Response.data.bio == null ? "" : My_Response.data.bio;
            state.userName = My_Response.data.userName;
            state.profilePic = My_Response.data.profilePhoto;
            console.log("state.email", state.email);
            console.log("state.phoneNumber", state.phoneNumber);
            console.log("state.name", state.name);
            console.log("state.firstName", state.firstName);
            console.log("state.lastName", state.lastName);
            console.log("state.token", state.token);
            console.log("ClientId", state.clientId);


            return state;
        default:
            return state;
    }
}

export default ApiData