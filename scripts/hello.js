'use strict';
module.exports = (robot) => {
    robot.hear(/hello>/i, (msg) => {
        const username = msg.message.user.name;
        msg.send('はろー, ' + username);
    });
    robot.hear(/おみくじ/i, (msg) => {
        const username = msg.message.user.name;
        const lots = ['大吉','吉','中吉','末吉','凶'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(lot + ', ' + username);
    });
    robot.hear(/lot>/i, (msg) => {
        const username = msg.message.user.name;
        const lots = ['大吉','吉','中吉','末吉','凶'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(lot + ', ' + username);
    });
    robot.hear(/好きだよ/i, (msg) => {
        const username = msg.message.user.name;
        msg.send('え～えもくない');
    });
    robot.hear(/ちゅー/i, (msg) => {
        const username = msg.message.user.name;
        msg.send('やめてよ～');
    });
    robot.hear(/えもちゃん、(.+)/i, (msg) => {
        const username = msg.message.user.name;
        msg.send('わからないよ～');
    });
};
