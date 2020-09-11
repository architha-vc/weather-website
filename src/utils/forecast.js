const request = require('request')

const forecast = (latitude, longitude, callback) => {
    console.log(latitude,longitude)
    const url = 'http://api.weatherstack.com/current?access_key=e900330f66e19d5918d3ecb2ab2d3b7e&query='+ latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        console.log(body)
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location:::::>>>', undefined)
        } else {
            callback(undefined,  {
                forcastDescription: ' It is currently '+body.current.weather_descriptions +' and the temperature is '+ 
                body.current.temperature,
                forcastData: body.current
               }
            )
        }
        
    })
}

module.exports = forecast