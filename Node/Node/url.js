const url=require('url')
const address="http://124.0.0.1:8000/reg.html?name=Hemanth&age=33"
const parsedAddress=url.parse(address,true)
console.log(parsedAddress)
console.log("Hostname: " ,parsedAddress.hostname)
console.log("portNumber: ",parsedAddress.port)
console.log("parameters: ",parsedAddress.query)
const {name,age}=parsedAddress.query
console.log("parameters: ",parsedAddress.query.name)
console.log("Name: " ,name)
console.log("Age :" ,age)