const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    lrcType: 3,
    autoplay: true,
    audio: [
        {
            name: 'Last Train',
            artist: 'The Midnight',
            url: 'https://oss.deqiang.wang/music/lasttrain.mp3',
            cover: 'https://oss.deqiang.wang/music/lasttrain.jpg',
            lrc: 'https://oss.deqiang.wang/music/lasttrain.lrc'
        },
        {
            name: 'I Really Want to Stay At Your House.mp3',
            artist: 'Rosa Walton/Hallie Coggins',
            url: 'https://oss.deqiang.wang/music/IReallyWanttoStayAtYourHouse.mp3',
            cover: 'https://oss.deqiang.wang/music/IReallyWanttoStayAtYourHouse.jpg',
            lrc: 'https://oss.deqiang.wang/music/IReallyWanttoStayAtYourHouse.lrc'
        }
    ]
});
ap.lrc.hide()