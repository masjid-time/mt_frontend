import PublicIp from 'public-ip'
import IpLocation from 'iplocation'

function getGeoLocation() {
    return new Promise(
        (resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                pos => {resolve({latitude: pos.coords.latitude, longitude: pos.coords.longitude})},
                err => {reject(err)},
                {enableHighAccuracy: true, timeout: 5000, maximumAge: 0}
            )
        }
    )
}

async function getIpLocation() {
    let location
    try {
        let ip = await PublicIp.v4()
        location = await IpLocation(ip, [])
        return {latitude: location.latitude, longitude: location.longitude}
    } catch(err) {
        throw new Error('Could not find ip location')
    }
}

async function getLocation() {
    let position
    try {
        if (navigator.geolocation) {
            position = await getGeoLocation()
        } else {
            throw new Error('Unable to get location object')
        }
    } catch(err) {
        position = await getIpLocation()
    }
    return position
}


export {getLocation}