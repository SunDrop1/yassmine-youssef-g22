const config = {};
config.host = process.env.HOST || "https://yassmine-youssef-g22.documents.azure.com:443/";
config.authKey =
 process.env.AUTH_KEY || "Ccrnwp4zPSIl8XR3LnADsAhamwT1QeadZqQbnmIXlU2gntD6vn1Xzk5lwHgRMHECz2IOzrTZb5I0ACDbYfoYlA==";
config.databaseId = "yassmine-youssef-g22";
config.containerId = "Items";
if (config.host.includes("https://localhost:")) {
 console.log("Local environment detected");
 console.log("WARNING: Disabled checking of self-signed certs. Do nothave this code in production.");
 process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
 console.log(`Go to http://localhost:${process.env.PORT || '3000'} to
try the sample.`);
}
module.exports = config;