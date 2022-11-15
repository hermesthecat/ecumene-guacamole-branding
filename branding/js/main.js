const wallpapers = {
    blue1: {
        url: 'app/ext/ecumene/images/blue2.jpg',
        theme: 'light',
        windowColor: 'rgba(255,255,255,0.05)',
        windowBrightness: '1.3',
        //windowBrightness: '1.3',
    },
    reach: {
        url: 'app/ext/ecumene/images/reach.jpg',
        theme: 'light',
        windowColor: 'rgba(255,255,255,0.15)',
        windowBrightness: '1.1',
        //windowBrightness: '1.3',
    },
}

const randomProperty = (obj) => {
    let keys = Object.keys(obj);
    return obj[keys[ keys.length * Math.random() << 0]];
};

const bg = randomProperty(wallpapers)

let elem = document.querySelector('div.login-ui');
elem.style.backgroundImage= bg.url;
