const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    lrcType: 3,
    autoplay: true,
    loop: 'all',
    order: 'random',
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
        },
        {
            name: 'Squall',
            artist: 'Pasteboard',
            url: 'https://oss.deqiang.wang/music/squall.mp3',
            cover: 'https://oss.deqiang.wang/music/squall.jpg',
            lrc: 'https://oss.deqiang.wang/music/squall.lrc'
        },
        {
            name: 'Out of Time',
            artist: 'Kalax',
            url: 'https://oss.deqiang.wang/music/OutofTime.mp3',
            cover: 'https://oss.deqiang.wang/music/OutofTime.jpg',
            lrc: 'https://oss.deqiang.wang/music/OutofTime.lrc'
        },
        // {
        //     name: 'Hold On',
        //     artist: 'Kalax',
        //     url: 'https://oss.deqiang.wang/music/holdon.mp3',
        //     cover: 'https://oss.deqiang.wang/music/holdon.jpg',
        //     lrc: 'https://oss.deqiang.wang/music/holdon.lrc'
        // },
        {
            name: '95 at Night',
            artist: 'Fiji Blue',
            url: 'https://oss.deqiang.wang/music/95atnight.m4a',
            cover: 'https://oss.deqiang.wang/music/inthisrome.jpg',
            lrc: 'https://oss.deqiang.wang/music/95atnight.lrc'
        },
        {
            name: 'Pale Blue',
            artist: 'The fin.',
            url: 'https://oss.deqiang.wang/music/paleblue.m4a',
            cover: 'https://oss.deqiang.wang/music/meltintotheblue.jpg',
            lrc: 'https://oss.deqiang.wang/music/paleblue.lrc'
        },
    ]
});
ap.lrc.hide()