function mute(player) {
  return player.mute();
}

function unmute(player) {
  return player.unMute();
}

function groupMute(player) {
  player.coordinator.groupMute(true);
}

function groupUnmute(player) {
  player.coordinator.groupMute(false);
}

module.exports = function (api) {
  api.registerAction('mute', mute);
  api.registerAction('unmute', unmute);
  api.registerAction('groupmute', groupMute);
  api.registerAction('groupunmute', groupUnmute);
}
