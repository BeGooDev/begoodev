
const appConfig = {
    pseudo: "GiBoOw",
    email: "contact@begoodev.fr",
    githubUser: "giboow",
    twitterUser: "giboow",
    twitterRecipientId: "91543080",
    linkdeInUser: "pgibert",
    phoneNumber: "+33689247611",
}

const getPseudo = () => {
    return appConfig.pseudo;
}

/**
 * Get twitterUrl
 * @returns {string}
 */
const getTwitterUrl = () => {
    return "https://twitter.com/" +  appConfig.twitterUser;
}

/**
 * Get linkedInUrl
 * @returns {string}
 */
const getLinkedInUrl = () => {
    return "https://linkedin.com/in/" + appConfig.linkdeInUser;
}

/**
 * Get Github Url
 * @returns {string}
 */
const getGithubUrl = () => {
    return "https://github.com/" + appConfig.githubUser;
}

/**
 * Get phone number
 * @returns {string}
 */
const getPhoneNum = () => {
    return appConfig.phoneNumber;
}

/**
 * Get email
 * @returns {string}
 */
const getEmail = () => {
    return appConfig.email
}

const getTwitterDirectMessageUrl = () => {
    return "https://twitter.com/messages/compose?recipient_id=" + appConfig.twitterRecipientId;
}


export default appConfig;

export {getTwitterUrl, getLinkedInUrl, getPhoneNum, getPseudo, getGithubUrl, getEmail, getTwitterDirectMessageUrl};

