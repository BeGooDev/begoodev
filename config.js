
const appConfig = {
    pseudo: "GiBoOw",
    email: "contact@begoodev.fr",
    githubUser: "giboow",
    twitterUser: "giboow",
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
    return "http://twitter.com/" +  appConfig.twitterUser;
}

/**
 * Get linkedInUrl
 * @returns {string}
 */
const getLinkedInUrl = () => {
    return "http://linkedin.com/" + appConfig.linkdeInUser;
}

/**
 * Get Github Url
 * @returns {string}
 */
const getGithubUrl = () => {
    return "http://github.com/" + appConfig.githubUser;
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


export default appConfig;

export {getTwitterUrl, getLinkedInUrl, getPhoneNum, getPseudo, getGithubUrl, getEmail};

