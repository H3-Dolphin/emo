# Description:
#   えもがテレビ番組の時間をお知らせしてくれる機能です。
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   None
#
# Notes:
#   日曜日はプリチャン
#
# Author:
#   h3-dolphin

cronJob = require('cron').CronJob

module.exports = (robot) ->

  cronjob = new cronJob(
    cronTime: "0 0 10 * * sun"    # 時間
    start:    true                # すぐにcronのjobを実行するか
    timeZone: "Asia/Tokyo"        # タイムゾーン
    onTick: ->                   
      robot.send "今日の朝10時はプリチャンだよ～"
  )
