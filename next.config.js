const withTM = require('next-transpile-modules')(['three','emailjs-com'])
module.exports = withTM({
    env:{
        REACT_APP_SERVICE_ID : "default_service",
        REACT_APP_USER_ID :  "user_ra9kLqa47SSFhb4QI3Swp",
        REACT_APP_TEMPLATE_ID : "template_xoc1upm"
    }
});