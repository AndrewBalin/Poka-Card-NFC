class Profile {
    join = false;
    login;
    email;

    password;
    id;

    constructor(login, password, email) {
        var n = this.getId(login, password);

        this.login = login;
        this.email = email;
        this.password = password;

        if(n == 0){
            this.join = false;
            return
        }
        this.join = true;
    }

    getId = (login, password) => {
        console.log('https://digital-school72.ru/pokacard.php?n='+"'"+login+"'"+'&p='+"'"+password+"'"+'&w=id')
        fetch('https://digital-school72.ru/pokacard.php?n='+"'"+login+"'"+'&p='+"'"+password+"'"+'&w=id',{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.text())
            .then(async data => {
                if(data != null){
                    await this.setId(data);
                } else {
                    return 0;
                }

            })
            .catch(err => console.error(err));
    }

    setId(data) {
        this.id = data;
        console.log(this.id);
    }
    /*getId = async (login, password) => {
        console.log('https://digital-school72.ru/pokacard.php?n='+login+'&p='+password+'&w=id')
        var request = await fetch('https://digital-school72.ru/pokacard.php?n='+login+'&p='+password+'&w=id',{
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }}).then((response) => {
            console.log('Response:')
            console.log(response.json())
            console.info('=================================')
        });
        return request;
    }*/

    getCards() {
        fetch('https://digital-school72.ru/pokacard.php', {
            method: 'GET',
            body: JSON.stringify({
                'n': "'"+this.login+"'",
                'p': "'"+this.password+"'",
                'w': "'cards'"
            })
        });
    }

    getUsing() {
        fetch('https://digital-school72.ru/pokacard.php', {
            method: 'GET',
            body: JSON.stringify({
                'n': "'"+this.login+"'",
                'p': "'"+this.password+"'",
                'w': "'carduse'"
            })
        });
    }
}

export default Profile;