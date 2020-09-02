'use strict';
const todo = require('todo');
module.exports = (robot) => {
    robot.respond(/todo (.+)/i, (msg) => {
	const task = msg.match[1].trim();
	todo.todo(task);
	msg.send('追加しました: '+ task);
    });

    robot.respond(/done (.+)/i, (msg) => {
	const task = msg.match[1].trim();
	todo.done(task);
	msg.send('完了にしました: '+ task);
    });

    robot.respond(/del (.+)/i, (msg) => {
	const task = msg.match[1].trim();
	todo.del(task);
	msg.send('削除しました: '+ task);
    });

    robot.respond(/list/i, (msg) => {
	msg.send(todo.list().join('\n'));
    });

    robot.respond(/donelist/i, (msg) => {
	msg.send(todo.donelist().join('\n'));
    });

    robot.hear(/hello>/i, (msg) => {
        const username = msg.message.user.name;
        msg.send('はろー, ' + username);
    });
    robot.hear(/おみくじ/i, (msg) => {
        const username = msg.message.user.name;
        const lots = ['大吉','吉','中吉','末吉','凶'];
        const lot = lots[Math.floor(Math.random() * lots.length)];
        msg.send(lot + 'だよ～ ' + username + 'さん');
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
