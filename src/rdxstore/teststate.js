export const defaultState = {
    auth: {
        connected: false
    },
    cart: {
        items: [
        {productCode:'blgmu',quantity:2}
        ]
    },
    checkout:{
        activeStep:0,
        token: null,
        orderComplete: false,
        firstName: 'Yegwheel',
        lastName: '',
        email: 'something@yegwheel.com',
        phone: '1234567891',
        address: '',
        city: '',
        province: '',
        country:'',
        postalCode: '',
        comments: 'Hi there',
    }
}
