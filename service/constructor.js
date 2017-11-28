class globalParam {
    constructor() {
        this.host = "https://code-academy-backend.herokuapp.com";
        this.login = `${this.host}/login`;
        this.prepaid  = `${this.host}/prepaid `;
        this.postpaid   = `${this.host}/postpaid`;
        this.userdata   = `${this.host}/userdata`;
    }
}

globalParam.prototype.getHost = function(){return this.host}
globalParam.prototype.getLogin = function(){return this.login}
globalParam.prototype.getPrepaid = function(){return this.prepaid}
globalParam.prototype.getPostpaid = function(){return this.postpaid}
globalParam.prototype.getUserdata = function(){return this.userdata}

module.exports = {globalParam:globalParam}