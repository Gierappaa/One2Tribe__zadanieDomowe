import axios from 'axios';

export function postItem(token, text) {
    return axios({
        method: 'post',
        url: 'http://frontend-recruitment.one2tribe.pl:8080/api/v1/item',
        headers: {
            Authorization: token,
        },
        data: {
            name: text,
        }
    }).then(function (response) {
        return response;
    }).catch(function (error) {
        console.log('Error on Authentication, error: ', error);
    });
}
