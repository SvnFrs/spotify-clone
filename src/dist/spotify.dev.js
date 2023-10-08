"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginUrl = exports.getTokenFromUrl = exports.authEndpoint = void 0;
var authEndpoint = "https://accounts.spotify.com/authorize";
exports.authEndpoint = authEndpoint;
var redirectUri = "http://localhost:3000/";
var cliendId = "203615f68a1d4ea78ce50c45dc1f69f6";
var scope = ["user-read-currently-playing", "user-read-recently-played", "user-read-playback-state", "user-top-read", "user-modify-playback-state"];

var getTokenFromUrl = function getTokenFromUrl() {
  return window.location.hash.substring(1).split("&").reduce(function (initial, item) {
    var parts = item.split("=");
    initial[parts[0]] = decodeURIComponent(parts[1]);
    return initial;
  }, {});
};

exports.getTokenFromUrl = getTokenFromUrl;
var loginUrl = "".concat(authEndpoint, "?client_id=").concat(cliendId, "&redirect_uri=").concat(redirectUri, "&scope=").concat(scope.join("%20"), "&response_type=token&show_dialog=true");
exports.loginUrl = loginUrl;