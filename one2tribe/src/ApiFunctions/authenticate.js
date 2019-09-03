import axios from 'axios';

export function authenticate(username, password) {
    return axios({
        method: 'post',
        // Nie wiedziałęm, że to ten URL, domyśliłem się. Ogólnie wysyłąjąc do jakiegoś API login i hasło
        // Spodziewałbym się, żę będę gadał do jakiegoś authoriize / autheinticate /login etc.
        url: 'http://frontend-recruitment.one2tribe.pl:8080/api/authenticate',
        data: {
            username,
            password,
        },
    }).then(function (response) {
        // Jak sobie podejrzysz w jakiej postaci przychodzi response
        // i co tam siedzi to będziesz widział dlaczego tak a nie inaczej :D
        return response.headers.authorization;
    }).catch(function (error) {
        console.log('Error on Authentication, error: ', error);
    });
}
