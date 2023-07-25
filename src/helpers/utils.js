export function getFormBody(params) {
    let formBody = [];
    for( let property in formBody) {
        let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
        let encodedValue = encodeURIComponent(params[property]); //gaurav 123 => 'gaurav%20123'
        formBody(encodedKey + '=' + encodedValue);

    }
    return formBody.join('&'); // username='gaurav'&email='g@gmail.com'
}