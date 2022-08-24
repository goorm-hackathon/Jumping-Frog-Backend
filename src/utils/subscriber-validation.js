class SubValidation {
    async createSubscription(subscriptionInfo) {
        const {
            age, gender, interests, surveyOne, surveyTwo, name, email
        } = subscriptionInfo;

        if(name.length < 2) {
            const error = new Error('이름은 2글자 이상이어야 합니다.');
            error.name = 'BadRequest';
            throw error;
        }

        if(name.length > 10) {
            const error = new Error('이름은 10글자 이하여야 합니다.');
            error.name = 'BadRequest';
            throw error;
        }

        const nameFormat = /^[가-힣]{2,10}$/;
        if(!name.match(nameFormat)) {
            const error = new Error('이름은 한글이어야 합니다');
            error.name = 'BadRequest';
            throw error;
        }

        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email.match(mailFormat)) {
            const error = new Error('유효한 이메일 형식이 아닙니다.');
            error.name = 'BadRequest';
            throw error;
        }
    }
}