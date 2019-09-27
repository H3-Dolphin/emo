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
    cronTime: "20 * * * * fri"    # 時間
    start:    true                # すぐにcronのjobを実行するか
    timeZone: "Asia/Tokyo"        # タイムゾーン
    onTick: ->                   
      robot.send "定期実行のテストだよ～！"
  )
