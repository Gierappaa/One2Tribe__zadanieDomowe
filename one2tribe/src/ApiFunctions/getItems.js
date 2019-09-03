import axios from 'axios';

export function getItems(token) {
    return axios({
        method: 'get',
        url: 'http://frontend-recruitment.one2tribe.pl:8080/api/v1/item',
        // jako header do autoryzacji dla nasteppnego calla ustawiasz token z requesta do authenticate
        headers: {
            Authorization: token,
        },
    }).then(function (response) {
        return response;
    }).catch(function (error) {
        console.log('Error on Authentication, error: ', error);
    });
}
