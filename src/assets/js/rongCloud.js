!
  function(a, b) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = b();
    else if ("function" == typeof define && (define.amd || define.cmd)) define(b);
    else {
      var c = b(),
        d = c.RongIMClient,
        e = !!a.RongIMLib;
      if (e) {
        var f = RongIMLib.RongIMClient || {};
        for (var g in f) d[g] = f[g]
      }
      a.RongIMLib = c,
        a.RongIMClient = d
    }
  } (window,
    function() {
      var Polling = {
        SetUserStatusInput: function() {
          var a = {};
          this.setStatus = function(b) {
            a.status = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        SetUserStatusOutput: function() {
          var a = {};
          this.setNothing = function(b) {
            a.nothing = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        GetUserStatusInput: function() {
          var a = {};
          this.setNothing = function(b) {
            a.nothing = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        GetUserStatusOutput: function() {
          var a = {};
          this.setStatus = function(b) {
            a.status = b
          },
            this.setSubUserId = function(b) {
              a.subUserId = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        VoipDynamicInput: function() {
          var a = {};
          this.setEngineType = function(b) {
            a.engineType = b
          },
            this.setChannelName = function(b) {
              a.channelName = b
            },
            this.setChannelExtra = function(b) {
              a.channelExtra = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        VoipDynamicOutput: function() {
          var a = {};
          this.setDynamicKey = function(b) {
            a.dynamicKey = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        SubUserStatusInput: function() {
          var a = {};
          this.setUserid = function(b) {
            a.userid = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        SubUserStatusOutput: function() {
          var a = {};
          this.setNothing = function(b) {
            a.nothing = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        CleanHisMsgInput: function() {
          var a = {};
          this.setTargetId = function(b) {
            a.targetId = b
          },
            this.setDataTime = function(b) {
              a.dataTime = b
            },
            this.setConversationType = function(b) {
              a.conversationType = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        DeleteMsgInput: function() {
          var a = {};
          this.setType = function(b) {
            a.type = b
          },
            this.setConversationId = function(b) {
              a.conversationId = b
            },
            this.setMsgs = function(b) {
              a.msgs = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        DeleteMsg: function() {
          var a = {};
          this.setMsgId = function(b) {
            a.msgId = b
          },
            this.setMsgDataTime = function(b) {
              a.msgDataTime = b
            },
            this.setDirect = function(b) {
              a.direct = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        DeleteMsgOutput: function() {
          var a = {};
          this.setNothing = function(b) {
            a.nothing = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        SearchMpInput: function() {
          var a = {};
          this.setType = function(b) {
            a.type = b
          },
            this.setId = function(b) {
              a.id = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        SearchMpOutput: function() {
          var a = {};
          this.setNothing = function(b) {
            a.nothing = b
          },
            this.setInfo = function(b) {
              a.info = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        MpInfo: function() {
          var a = {};
          this.setMpid = function(b) {
            a.mpid = b
          },
            this.setName = function(b) {
              a.name = b
            },
            this.setType = function(b) {
              a.type = b
            },
            this.setTime = function(b) {
              a.time = b
            },
            this.setPortraitUri = function(b) {
              a.portraitUrl = b
            },
            this.setExtra = function(b) {
              a.extra = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        PullMpInput: function() {
          var a = {};
          this.setMpid = function(b) {
            a.mpid = b
          },
            this.setTime = function(b) {
              a.time = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        PullMpOutput: function() {
          var a = {};
          this.setStatus = function(b) {
            a.status = b
          },
            this.setInfo = function(b) {
              a.info = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        MPFollowInput: function() {
          var a = {};
          this.setId = function(b) {
            a.id = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        MPFollowOutput: function() {
          var a = {};
          this.setNothing = function(b) {
            a.nothing = b
          },
            this.setInfo = function(b) {
              a.info = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        NotifyMsg: function() {
          var a = {};
          this.setType = function(b) {
            a.type = b
          },
            this.setTime = function(b) {
              a.time = b
            },
            this.setChrmId = function(b) {
              a.chrmId = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        SyncRequestMsg: function() {
          var a = {};
          this.setSyncTime = function(b) {
            a.syncTime = b || 0
          },
            this.setIspolling = function(b) {
              a.ispolling = !!b
            },
            this.setIsweb = function(b) {
              a.isweb = !!b
            },
            this.setIsPullSend = function(b) {
              a.isPullSend = !!b
            },
            this.setSendBoxSyncTime = function(b) {
              a.sendBoxSyncTime = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        UpStreamMessage: function() {
          var a = {};
          this.setSessionId = function(b) {
            a.sessionId = b
          },
            this.setClassname = function(b) {
              a.classname = b
            },
            this.setContent = function(b) {
              b && (a.content = b)
            },
            this.setPushText = function(b) {
              a.pushText = b
            },
            this.setUserId = function(b) {
              a.userId = b
            },
            this.setAppData = function(b) {
              a.appData = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        DownStreamMessages: function() {
          var a = {};
          this.setList = function(b) {
            a.list = b
          },
            this.setSyncTime = function(b) {
              a.syncTime = b
            },
            this.setFinished = function(b) {
              a.finished = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        DownStreamMessage: function() {
          var a = {};
          this.setFromUserId = function(b) {
            a.fromUserId = b
          },
            this.setType = function(b) {
              a.type = b
            },
            this.setGroupId = function(b) {
              a.groupId = b
            },
            this.setClassname = function(b) {
              a.classname = b
            },
            this.setContent = function(b) {
              b && (a.content = b)
            },
            this.setDataTime = function(b) {
              a.dataTime = b
            },
            this.setStatus = function(b) {
              a.status = b
            },
            this.setMsgId = function(b) {
              a.msgId = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        CreateDiscussionInput: function() {
          var a = {};
          this.setName = function(b) {
            a.name = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        CreateDiscussionOutput: function() {
          var a = {};
          this.setId = function(b) {
            a.id = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        ChannelInvitationInput: function() {
          var a = {};
          this.setUsers = function(b) {
            a.users = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        LeaveChannelInput: function() {
          var a = {};
          this.setNothing = function(b) {
            a.nothing = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        QueryChatroomInfoInput: function() {
          var a = {};
          this.setCount = function(b) {
            a.count = b
          },
            this.setOrder = function(b) {
              a.order = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        QueryChatroomInfoOutput: function() {
          var a = {};
          this.setUserTotalNums = function(b) {
            a.userTotalNums = b
          },
            this.setUserInfos = function(b) {
              a.userInfos = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        ChannelEvictionInput: function() {
          var a = {};
          this.setUser = function(b) {
            a.user = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        RenameChannelInput: function() {
          var a = {};
          this.setName = function(b) {
            a.name = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        ChannelInfoInput: function() {
          var a = {};
          this.setNothing = function(b) {
            a.nothing = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        ChannelInfoOutput: function() {
          var a = {};
          this.setType = function(b) {
            a.type = b
          },
            this.setChannelId = function(b) {
              a.channelId = b
            },
            this.setChannelName = function(b) {
              a.channelName = b
            },
            this.setAdminUserId = function(b) {
              a.adminUserId = b
            },
            this.setFirstTenUserIds = function(b) {
              a.firstTenUserIds = b
            },
            this.setOpenStatus = function(b) {
              a.openStatus = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        ChannelInfosInput: function() {
          var a = {};
          this.setPage = function(b) {
            a.page = b
          },
            this.setNumber = function(b) {
              a.number = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        ChannelInfosOutput: function() {
          var a = {};
          this.setChannels = function(b) {
            a.channels = b
          },
            this.setTotal = function(b) {
              a.total = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        MemberInfo: function() {
          var a = {};
          this.setUserId = function(b) {
            a.userId = b
          },
            this.setUserName = function(b) {
              a.userName = b
            },
            this.setUserPortrait = function(b) {
              a.userPortrait = b
            },
            this.setExtension = function(b) {
              a.extension = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        GroupMembersInput: function() {
          var a = {};
          this.setPage = function(b) {
            a.page = b
          },
            this.setNumber = function(b) {
              a.number = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        GroupMembersOutput: function() {
          var a = {};
          this.setMembers = function(b) {
            a.members = b
          },
            this.setTotal = function(b) {
              a.total = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        GetUserInfoInput: function() {
          var a = {};
          this.setNothing = function(b) {
            a.nothing = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        GetUserInfoOutput: function() {
          var a = {};
          this.setUserId = function(b) {
            a.userId = b
          },
            this.setUserName = function(b) {
              a.userName = b
            },
            this.setUserPortrait = function(b) {
              a.userPortrait = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        GetSessionIdInput: function() {
          var a = {};
          this.setNothing = function(b) {
            a.nothing = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        GetSessionIdOutput: function() {
          var a = {};
          this.setSessionId = function(b) {
            a.sessionId = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        GetQNupTokenInput: function() {
          var a = {};
          this.setType = function(b) {
            a.type = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        GetQNupTokenOutput: function() {
          var a = {};
          this.setDeadline = function(b) {
            a.deadline = b
          },
            this.setToken = function(b) {
              a.token = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        GetQNdownloadUrlInput: function() {
          var a = {};
          this.setType = function(b) {
            a.type = b
          },
            this.setKey = function(b) {
              a.key = b
            },
            this.setFileName = function(b) {
              a.fileName = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        GetQNdownloadUrlOutput: function() {
          var a = {};
          this.setDownloadUrl = function(b) {
            a.downloadUrl = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        Add2BlackListInput: function() {
          var a = {};
          this.setUserId = function(b) {
            a.userId = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        RemoveFromBlackListInput: function() {
          var a = {};
          this.setUserId = function(b) {
            a.userId = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        QueryBlackListInput: function() {
          var a = {};
          this.setNothing = function(b) {
            a.nothing = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        QueryBlackListOutput: function() {
          var a = {};
          this.setUserIds = function(b) {
            a.userIds = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        BlackListStatusInput: function() {
          var a = {};
          this.setUserId = function(b) {
            a.userId = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        BlockPushInput: function() {
          var a = {};
          this.setBlockeeId = function(b) {
            a.blockeeId = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        ModifyPermissionInput: function() {
          var a = {};
          this.setOpenStatus = function(b) {
            a.openStatus = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        GroupInput: function() {
          var a = {};
          this.setGroupInfo = function(b) {
            for (var c = 0,
                   d = []; c < b.length; c++) d.push({
              id: b[c].getContent().id,
              name: b[c].getContent().name
            });
            a.groupInfo = d
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        GroupOutput: function() {
          var a = {};
          this.setNothing = function(b) {
            a.nothing = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        GroupInfo: function() {
          var a = {};
          this.setId = function(b) {
            a.id = b
          },
            this.setName = function(b) {
              a.name = b
            },
            this.getContent = function() {
              return a
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        GroupHashInput: function() {
          var a = {};
          this.setUserId = function(b) {
            a.userId = b
          },
            this.setGroupHashCode = function(b) {
              a.groupHashCode = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        GroupHashOutput: function() {
          var a = {};
          this.setResult = function(b) {
            a.result = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        ChrmInput: function() {
          var a = {};
          this.setNothing = function(b) {
            a.nothing = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        ChrmOutput: function() {
          var a = {};
          this.setNothing = function(b) {
            a.nothing = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        ChrmPullMsg: function() {
          var a = {};
          this.setSyncTime = function(b) {
            a.syncTime = b
          },
            this.setCount = function(b) {
              a.count = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        RelationsInput: function() {
          var a = {};
          this.setType = function(b) {
            a.type = b
          },
            this.setMsg = function(b) {
              a.msg = b
            },
            this.setCount = function(b) {
              a.count = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        RelationsOutput: function() {
          var a = {};
          this.setInfo = function(b) {
            a.info = b
          },
            this.toArrayBuffer = function() {
              return a
            }
        },
        RelationInfo: function() {
          var a = {};
          this.setType = function(b) {
            a.type = b
          },
            this.setUserId = function(b) {
              a.userId = b
            },
            this.setMsg = function(b) {
              a.msg = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        HistoryMessageInput: function() {
          var a = {};
          this.setTargetId = function(b) {
            a.targetId = b
          },
            this.setDataTime = function(b) {
              a.dataTime = b
            },
            this.setSize = function(b) {
              a.size = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        HistoryMessagesOuput: function() {
          var a = {};
          this.setList = function(b) {
            a.list = b
          },
            this.setSyncTime = function(b) {
              a.syncTime = b
            },
            this.setHasMsg = function(b) {
              a.hasMsg = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        HistoryMsgInput: function() {
          var a = {};
          this.setTargetId = function(b) {
            a.targetId = b
          },
            this.setTime = function(b) {
              a.time = b
            },
            this.setCount = function(b) {
              a.count = b
            },
            this.setOrder = function(b) {
              a.order = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        },
        HistoryMsgOuput: function() {
          var a = {};
          this.setList = function(b) {
            a.list = b
          },
            this.setSyncTime = function(b) {
              a.syncTime = b
            },
            this.setHasMsg = function(b) {
              a.hasMsg = b
            },
            this.toArrayBuffer = function() {
              return a
            }
        }
      };
      for (var f in Polling) Polling[f].decode = function(b) {
        var back = {},
          val = JSON.parse(b) || eval("(" + b + ")");
        for (var i in val) back[i] = val[i],
          back["get" + i.charAt(0).toUpperCase() + i.slice(1)] = function() {
            return val[i]
          };
        return back
      };
      var md5 = function() {
          "use strict";
          function a(a, b) {
            var c = (65535 & a) + (65535 & b);
            return (a >> 16) + (b >> 16) + (c >> 16) << 16 | 65535 & c
          }
          function b(a, b) {
            return a << b | a >>> 32 - b
          }
          function c(c, d, e, f, g, h) {
            return a(b(a(a(d, c), a(f, h)), g), e)
          }
          function d(a, b, d, e, f, g, h) {
            return c(b & d | ~b & e, a, b, f, g, h)
          }
          function e(a, b, d, e, f, g, h) {
            return c(b & e | d & ~e, a, b, f, g, h)
          }
          function f(a, b, d, e, f, g, h) {
            return c(b ^ d ^ e, a, b, f, g, h)
          }
          function g(a, b, d, e, f, g, h) {
            return c(d ^ (b | ~e), a, b, f, g, h)
          }
          function h(b, c) {
            b[c >> 5] |= 128 << c % 32,
              b[14 + (c + 64 >>> 9 << 4)] = c;
            var h, i, j, k, l, m = 1732584193,
              n = -271733879,
              o = -1732584194,
              p = 271733878;
            for (h = 0; h < b.length; h += 16) i = m,
              j = n,
              k = o,
              l = p,
              m = d(m, n, o, p, b[h], 7, -680876936),
              p = d(p, m, n, o, b[h + 1], 12, -389564586),
              o = d(o, p, m, n, b[h + 2], 17, 606105819),
              n = d(n, o, p, m, b[h + 3], 22, -1044525330),
              m = d(m, n, o, p, b[h + 4], 7, -176418897),
              p = d(p, m, n, o, b[h + 5], 12, 1200080426),
              o = d(o, p, m, n, b[h + 6], 17, -1473231341),
              n = d(n, o, p, m, b[h + 7], 22, -45705983),
              m = d(m, n, o, p, b[h + 8], 7, 1770035416),
              p = d(p, m, n, o, b[h + 9], 12, -1958414417),
              o = d(o, p, m, n, b[h + 10], 17, -42063),
              n = d(n, o, p, m, b[h + 11], 22, -1990404162),
              m = d(m, n, o, p, b[h + 12], 7, 1804603682),
              p = d(p, m, n, o, b[h + 13], 12, -40341101),
              o = d(o, p, m, n, b[h + 14], 17, -1502002290),
              n = d(n, o, p, m, b[h + 15], 22, 1236535329),
              m = e(m, n, o, p, b[h + 1], 5, -165796510),
              p = e(p, m, n, o, b[h + 6], 9, -1069501632),
              o = e(o, p, m, n, b[h + 11], 14, 643717713),
              n = e(n, o, p, m, b[h], 20, -373897302),
              m = e(m, n, o, p, b[h + 5], 5, -701558691),
              p = e(p, m, n, o, b[h + 10], 9, 38016083),
              o = e(o, p, m, n, b[h + 15], 14, -660478335),
              n = e(n, o, p, m, b[h + 4], 20, -405537848),
              m = e(m, n, o, p, b[h + 9], 5, 568446438),
              p = e(p, m, n, o, b[h + 14], 9, -1019803690),
              o = e(o, p, m, n, b[h + 3], 14, -187363961),
              n = e(n, o, p, m, b[h + 8], 20, 1163531501),
              m = e(m, n, o, p, b[h + 13], 5, -1444681467),
              p = e(p, m, n, o, b[h + 2], 9, -51403784),
              o = e(o, p, m, n, b[h + 7], 14, 1735328473),
              n = e(n, o, p, m, b[h + 12], 20, -1926607734),
              m = f(m, n, o, p, b[h + 5], 4, -378558),
              p = f(p, m, n, o, b[h + 8], 11, -2022574463),
              o = f(o, p, m, n, b[h + 11], 16, 1839030562),
              n = f(n, o, p, m, b[h + 14], 23, -35309556),
              m = f(m, n, o, p, b[h + 1], 4, -1530992060),
              p = f(p, m, n, o, b[h + 4], 11, 1272893353),
              o = f(o, p, m, n, b[h + 7], 16, -155497632),
              n = f(n, o, p, m, b[h + 10], 23, -1094730640),
              m = f(m, n, o, p, b[h + 13], 4, 681279174),
              p = f(p, m, n, o, b[h], 11, -358537222),
              o = f(o, p, m, n, b[h + 3], 16, -722521979),
              n = f(n, o, p, m, b[h + 6], 23, 76029189),
              m = f(m, n, o, p, b[h + 9], 4, -640364487),
              p = f(p, m, n, o, b[h + 12], 11, -421815835),
              o = f(o, p, m, n, b[h + 15], 16, 530742520),
              n = f(n, o, p, m, b[h + 2], 23, -995338651),
              m = g(m, n, o, p, b[h], 6, -198630844),
              p = g(p, m, n, o, b[h + 7], 10, 1126891415),
              o = g(o, p, m, n, b[h + 14], 15, -1416354905),
              n = g(n, o, p, m, b[h + 5], 21, -57434055),
              m = g(m, n, o, p, b[h + 12], 6, 1700485571),
              p = g(p, m, n, o, b[h + 3], 10, -1894986606),
              o = g(o, p, m, n, b[h + 10], 15, -1051523),
              n = g(n, o, p, m, b[h + 1], 21, -2054922799),
              m = g(m, n, o, p, b[h + 8], 6, 1873313359),
              p = g(p, m, n, o, b[h + 15], 10, -30611744),
              o = g(o, p, m, n, b[h + 6], 15, -1560198380),
              n = g(n, o, p, m, b[h + 13], 21, 1309151649),
              m = g(m, n, o, p, b[h + 4], 6, -145523070),
              p = g(p, m, n, o, b[h + 11], 10, -1120210379),
              o = g(o, p, m, n, b[h + 2], 15, 718787259),
              n = g(n, o, p, m, b[h + 9], 21, -343485551),
              m = a(m, i),
              n = a(n, j),
              o = a(o, k),
              p = a(p, l);
            return [m, n, o, p]
          }
          function i(a) {
            var b, c = "";
            for (b = 0; b < 32 * a.length; b += 8) c += String.fromCharCode(a[b >> 5] >>> b % 32 & 255);
            return c
          }
          function j(a) {
            var b, c = [];
            for (c[(a.length >> 2) - 1] = void 0, b = 0; b < c.length; b += 1) c[b] = 0;
            for (b = 0; b < 8 * a.length; b += 8) c[b >> 5] |= (255 & a.charCodeAt(b / 8)) << b % 32;
            return c
          }
          function k(a) {
            return i(h(j(a), 8 * a.length))
          }
          function l(a, b) {
            var c, d, e = j(a),
              f = [],
              g = [];
            for (f[15] = g[15] = void 0, e.length > 16 && (e = h(e, 8 * a.length)), c = 0; c < 16; c += 1) f[c] = 909522486 ^ e[c],
              g[c] = 1549556828 ^ e[c];
            return d = h(f.concat(j(b)), 512 + 8 * b.length),
              i(h(g.concat(d), 640))
          }
          function m(a) {
            var b, c, d = "0123456789abcdef",
              e = "";
            for (c = 0; c < a.length; c += 1) b = a.charCodeAt(c),
              e += d.charAt(b >>> 4 & 15) + d.charAt(15 & b);
            return e
          }
          function n(a) {
            return unescape(encodeURIComponent(a))
          }
          function o(a) {
            return k(n(a))
          }
          function p(a) {
            return m(o(a))
          }
          function q(a, b) {
            return l(n(a), n(b))
          }
          function r(a, b) {
            return m(q(a, b))
          }
          function s(a, b, c) {
            return b ? c ? q(b, a) : r(b, a) : c ? o(a) : p(a)
          }
          return s
        } (),
        RongIMLib; !
        function(a) { !
          function(a) {
            a[a.ALL = 1] = "ALL",
              a[a.PART = 2] = "PART"
          } (a.MentionedType || (a.MentionedType = {}));
          a.MentionedType; !
            function(a) {
              a[a.CUSTOMER_SERVICE = 1] = "CUSTOMER_SERVICE",
                a[a.RECALL = 2] = "RECALL"
            } (a.MethodType || (a.MethodType = {}));
          a.MethodType; !
            function(a) {
              a[a.IN_BLACK_LIST = 0] = "IN_BLACK_LIST",
                a[a.NOT_IN_BLACK_LIST = 1] = "NOT_IN_BLACK_LIST"
            } (a.BlacklistStatus || (a.BlacklistStatus = {}));
          a.BlacklistStatus; !
            function(a) {
              a[a.XHR_POLLING = 0] = "XHR_POLLING",
                a[a.WEBSOCKET = 1] = "WEBSOCKET",
                a[a.HTTP = 0] = "HTTP",
                a[a.HTTPS = 1] = "HTTPS"
            } (a.ConnectionChannel || (a.ConnectionChannel = {}));
          a.ConnectionChannel; !
            function(a) {
              a[a.ONLY_ROBOT = 1] = "ONLY_ROBOT",
                a[a.ONLY_HUMAN = 2] = "ONLY_HUMAN",
                a[a.ROBOT_FIRST = 3] = "ROBOT_FIRST",
                a[a.HUMAN_FIRST = 4] = "HUMAN_FIRST"
            } (a.CustomerType || (a.CustomerType = {}));
          a.CustomerType; !
            function(a) {
              a[a.NONE = 0] = "NONE",
                a[a.SQQUENCE = 1] = "SQQUENCE",
                a[a.REVERSE = 2] = "REVERSE"
            } (a.GetChatRoomType || (a.GetChatRoomType = {}));
          a.GetChatRoomType; !
            function(a) {
              a[a.CONNECTED = 0] = "CONNECTED",
                a[a.CONNECTING = 1] = "CONNECTING",
                a[a.DISCONNECTED = 2] = "DISCONNECTED",
                a[a.KICKED_OFFLINE_BY_OTHER_CLIENT = 6] = "KICKED_OFFLINE_BY_OTHER_CLIENT",
                a[a.WEBSOCKET_UNAVAILABLE = 7] = "WEBSOCKET_UNAVAILABLE",
                a[a.NETWORK_UNAVAILABLE = 3] = "NETWORK_UNAVAILABLE",
                a[a.DOMAIN_INCORRECT = 12] = "DOMAIN_INCORRECT",
                a[a.APPKEY_IS_FAKE = 20] = "APPKEY_IS_FAKE",
                a[a.CONNECTION_CLOSED = 4] = "CONNECTION_CLOSED",
                a[a.ULTRALIMIT = 1101] = "ULTRALIMIT",
                a[a.REQUEST_NAVI = 201] = "REQUEST_NAVI",
                a[a.RESPONSE_NAVI = 202] = "RESPONSE_NAVI",
                a[a.RESPONSE_NAVI_ERROR = 203] = "RESPONSE_NAVI_ERROR",
                a[a.RESPONSE_NAVI_TIMEOUT = 204] = "RESPONSE_NAVI_TIMEOUT"
            } (a.ConnectionStatus || (a.ConnectionStatus = {}));
          a.ConnectionStatus; !
            function(a) {
              a[a.DO_NOT_DISTURB = 0] = "DO_NOT_DISTURB",
                a[a.NOTIFY = 1] = "NOTIFY"
            } (a.ConversationNotificationStatus || (a.ConversationNotificationStatus = {}));
          a.ConversationNotificationStatus; !
            function(a) {
              a[a.NONE = 0] = "NONE",
                a[a.PRIVATE = 1] = "PRIVATE",
                a[a.DISCUSSION = 2] = "DISCUSSION",
                a[a.GROUP = 3] = "GROUP",
                a[a.CHATROOM = 4] = "CHATROOM",
                a[a.CUSTOMER_SERVICE = 5] = "CUSTOMER_SERVICE",
                a[a.SYSTEM = 6] = "SYSTEM",
                a[a.APP_PUBLIC_SERVICE = 7] = "APP_PUBLIC_SERVICE",
                a[a.PUBLIC_SERVICE = 8] = "PUBLIC_SERVICE"
            } (a.ConversationType || (a.ConversationType = {}));
          a.ConversationType; !
            function(a) {
              a[a.OPENED = 0] = "OPENED",
                a[a.CLOSED = 1] = "CLOSED"
            } (a.DiscussionInviteStatus || (a.DiscussionInviteStatus = {}));
          a.DiscussionInviteStatus; !
            function(a) {
              a[a.RECALL_MESSAGE = 25101] = "RECALL_MESSAGE",
                a[a.SEND_FREQUENCY_TOO_FAST = 20604] = "SEND_FREQUENCY_TOO_FAST",
                a[a.RC_MSG_UNAUTHORIZED = 20406] = "RC_MSG_UNAUTHORIZED",
                a[a.RC_DISCUSSION_GROUP_ID_INVALID = 20407] = "RC_DISCUSSION_GROUP_ID_INVALID",
                a[a.FORBIDDEN_IN_GROUP = 22408] = "FORBIDDEN_IN_GROUP",
                a[a.NOT_IN_DISCUSSION = 21406] = "NOT_IN_DISCUSSION",
                a[a.NOT_IN_GROUP = 22406] = "NOT_IN_GROUP",
                a[a.NOT_IN_CHATROOM = 23406] = "NOT_IN_CHATROOM",
                a[a.FORBIDDEN_IN_CHATROOM = 23408] = "FORBIDDEN_IN_CHATROOM",
                a[a.RC_CHATROOM_USER_KICKED = 23409] = "RC_CHATROOM_USER_KICKED",
                a[a.RC_CHATROOM_NOT_EXIST = 23410] = "RC_CHATROOM_NOT_EXIST",
                a[a.RC_CHATROOM_IS_FULL = 23411] = "RC_CHATROOM_IS_FULL",
                a[a.RC_CHATROOM_PATAMETER_INVALID = 23412] = "RC_CHATROOM_PATAMETER_INVALID",
                a[a.CHATROOM_GET_HISTORYMSG_ERROR = 23413] = "CHATROOM_GET_HISTORYMSG_ERROR",
                a[a.CHATROOM_NOT_OPEN_HISTORYMSG_STORE = 23414] = "CHATROOM_NOT_OPEN_HISTORYMSG_STORE",
                a[a.SENSITIVE_SHIELD = 21501] = "SENSITIVE_SHIELD",
                a[a.SENSITIVE_REPLACE = 21502] = "SENSITIVE_REPLACE",
                a[a.TIMEOUT = -1] = "TIMEOUT",
                a[a.UNKNOWN = -2] = "UNKNOWN",
                a[a.JOIN_IN_DISCUSSION = 21407] = "JOIN_IN_DISCUSSION",
                a[a.CREATE_DISCUSSION = 21408] = "CREATE_DISCUSSION",
                a[a.INVITE_DICUSSION = 21409] = "INVITE_DICUSSION",
                a[a.GET_USERINFO_ERROR = 23407] = "GET_USERINFO_ERROR",
                a[a.REJECTED_BY_BLACKLIST = 405] = "REJECTED_BY_BLACKLIST",
                a[a.RC_NET_CHANNEL_INVALID = 30001] = "RC_NET_CHANNEL_INVALID",
                a[a.RC_NET_UNAVAILABLE = 30002] = "RC_NET_UNAVAILABLE",
                a[a.RC_MSG_RESP_TIMEOUT = 30003] = "RC_MSG_RESP_TIMEOUT",
                a[a.RC_HTTP_SEND_FAIL = 30004] = "RC_HTTP_SEND_FAIL",
                a[a.RC_HTTP_REQ_TIMEOUT = 30005] = "RC_HTTP_REQ_TIMEOUT",
                a[a.RC_HTTP_RECV_FAIL = 30006] = "RC_HTTP_RECV_FAIL",
                a[a.RC_NAVI_RESOURCE_ERROR = 30007] = "RC_NAVI_RESOURCE_ERROR",
                a[a.RC_NODE_NOT_FOUND = 30008] = "RC_NODE_NOT_FOUND",
                a[a.RC_DOMAIN_NOT_RESOLVE = 30009] = "RC_DOMAIN_NOT_RESOLVE",
                a[a.RC_SOCKET_NOT_CREATED = 30010] = "RC_SOCKET_NOT_CREATED",
                a[a.RC_SOCKET_DISCONNECTED = 30011] = "RC_SOCKET_DISCONNECTED",
                a[a.RC_PING_SEND_FAIL = 30012] = "RC_PING_SEND_FAIL",
                a[a.RC_PONG_RECV_FAIL = 30013] = "RC_PONG_RECV_FAIL",
                a[a.RC_MSG_SEND_FAIL = 30014] = "RC_MSG_SEND_FAIL",
                a[a.RC_CONN_ACK_TIMEOUT = 31e3] = "RC_CONN_ACK_TIMEOUT",
                a[a.RC_CONN_PROTO_VERSION_ERROR = 31001] = "RC_CONN_PROTO_VERSION_ERROR",
                a[a.RC_CONN_ID_REJECT = 31002] = "RC_CONN_ID_REJECT",
                a[a.RC_CONN_SERVER_UNAVAILABLE = 31003] = "RC_CONN_SERVER_UNAVAILABLE",
                a[a.RC_CONN_USER_OR_PASSWD_ERROR = 31004] = "RC_CONN_USER_OR_PASSWD_ERROR",
                a[a.RC_CONN_NOT_AUTHRORIZED = 31005] = "RC_CONN_NOT_AUTHRORIZED",
                a[a.RC_CONN_REDIRECTED = 31006] = "RC_CONN_REDIRECTED",
                a[a.RC_CONN_PACKAGE_NAME_INVALID = 31007] = "RC_CONN_PACKAGE_NAME_INVALID",
                a[a.RC_CONN_APP_BLOCKED_OR_DELETED = 31008] = "RC_CONN_APP_BLOCKED_OR_DELETED",
                a[a.RC_CONN_USER_BLOCKED = 31009] = "RC_CONN_USER_BLOCKED",
                a[a.RC_DISCONN_KICK = 31010] = "RC_DISCONN_KICK",
                a[a.RC_DISCONN_EXCEPTION = 31011] = "RC_DISCONN_EXCEPTION",
                a[a.RC_QUERY_ACK_NO_DATA = 32001] = "RC_QUERY_ACK_NO_DATA",
                a[a.RC_MSG_DATA_INCOMPLETE = 32002] = "RC_MSG_DATA_INCOMPLETE",
                a[a.BIZ_ERROR_CLIENT_NOT_INIT = 33001] = "BIZ_ERROR_CLIENT_NOT_INIT",
                a[a.BIZ_ERROR_DATABASE_ERROR = 33002] = "BIZ_ERROR_DATABASE_ERROR",
                a[a.BIZ_ERROR_INVALID_PARAMETER = 33003] = "BIZ_ERROR_INVALID_PARAMETER",
                a[a.BIZ_ERROR_NO_CHANNEL = 33004] = "BIZ_ERROR_NO_CHANNEL",
                a[a.BIZ_ERROR_RECONNECT_SUCCESS = 33005] = "BIZ_ERROR_RECONNECT_SUCCESS",
                a[a.BIZ_ERROR_CONNECTING = 33006] = "BIZ_ERROR_CONNECTING",
                a[a.MSG_ROAMING_SERVICE_UNAVAILABLE = 33007] = "MSG_ROAMING_SERVICE_UNAVAILABLE",
                a[a.MSG_INSERT_ERROR = 33008] = "MSG_INSERT_ERROR",
                a[a.MSG_DEL_ERROR = 33009] = "MSG_DEL_ERROR",
                a[a.CONVER_REMOVE_ERROR = 34001] = "CONVER_REMOVE_ERROR",
                a[a.CONVER_GETLIST_ERROR = 34002] = "CONVER_GETLIST_ERROR",
                a[a.CONVER_SETOP_ERROR = 34003] = "CONVER_SETOP_ERROR",
                a[a.CONVER_TOTAL_UNREAD_ERROR = 34004] = "CONVER_TOTAL_UNREAD_ERROR",
                a[a.CONVER_TYPE_UNREAD_ERROR = 34005] = "CONVER_TYPE_UNREAD_ERROR",
                a[a.CONVER_ID_TYPE_UNREAD_ERROR = 34006] = "CONVER_ID_TYPE_UNREAD_ERROR",
                a[a.CONVER_CLEAR_ERROR = 34007] = "CONVER_CLEAR_ERROR",
                a[a.CLEAR_HIS_ERROR = 34010] = "CLEAR_HIS_ERROR",
                a[a.CLEAR_HIS_TYPE_ERROR = 34008] = "CLEAR_HIS_TYPE_ERROR",
                a[a.CLEAR_HIS_TIME_ERROR = 34011] = "CLEAR_HIS_TIME_ERROR",
                a[a.CONVER_GET_ERROR = 34009] = "CONVER_GET_ERROR",
                a[a.GROUP_SYNC_ERROR = 35001] = "GROUP_SYNC_ERROR",
                a[a.GROUP_MATCH_ERROR = 35002] = "GROUP_MATCH_ERROR",
                a[a.CHATROOM_ID_ISNULL = 36001] = "CHATROOM_ID_ISNULL",
                a[a.CHARTOOM_JOIN_ERROR = 36002] = "CHARTOOM_JOIN_ERROR",
                a[a.CHATROOM_HISMESSAGE_ERROR = 36003] = "CHATROOM_HISMESSAGE_ERROR",
                a[a.BLACK_ADD_ERROR = 37001] = "BLACK_ADD_ERROR",
                a[a.BLACK_GETSTATUS_ERROR = 37002] = "BLACK_GETSTATUS_ERROR",
                a[a.BLACK_REMOVE_ERROR = 37003] = "BLACK_REMOVE_ERROR",
                a[a.DRAF_GET_ERROR = 38001] = "DRAF_GET_ERROR",
                a[a.DRAF_SAVE_ERROR = 38002] = "DRAF_SAVE_ERROR",
                a[a.DRAF_REMOVE_ERROR = 38003] = "DRAF_REMOVE_ERROR",
                a[a.SUBSCRIBE_ERROR = 39001] = "SUBSCRIBE_ERROR",
                a[a.QNTKN_FILETYPE_ERROR = 41001] = "QNTKN_FILETYPE_ERROR",
                a[a.QNTKN_GET_ERROR = 41002] = "QNTKN_GET_ERROR",
                a[a.COOKIE_ENABLE = 51001] = "COOKIE_ENABLE",
                a[a.GET_MESSAGE_BY_ID_ERROR = 61001] = "GET_MESSAGE_BY_ID_ERROR",
                a[a.HAVNODEVICEID = 24001] = "HAVNODEVICEID",
                a[a.DEVICEIDISHAVE = 24002] = "DEVICEIDISHAVE",
                a[a.SUCCESS = 0] = "SUCCESS",
                a[a.FEILD = 24009] = "FEILD",
                a[a.VOIPISNULL = 24013] = "VOIPISNULL",
                a[a.NOENGINETYPE = 24010] = "NOENGINETYPE",
                a[a.NULLCHANNELNAME = 24011] = "NULLCHANNELNAME",
                a[a.VOIPDYANMICERROR = 24012] = "VOIPDYANMICERROR",
                a[a.NOVOIP = 24014] = "NOVOIP",
                a[a.INTERNALERRROR = 24015] = "INTERNALERRROR",
                a[a.VOIPCLOSE = 24016] = "VOIPCLOSE",
                a[a.CLOSE_BEFORE_OPEN = 51001] = "CLOSE_BEFORE_OPEN",
                a[a.ALREADY_IN_USE = 51002] = "ALREADY_IN_USE",
              a[a.INVALID_CHANNEL_NAME = 51003] = "INVALID_CHANNEL_NAME",
              a[a.VIDEO_CONTAINER_IS_NULL = 51004] = "VIDEO_CONTAINER_IS_NULL",
              a[a.DELETE_MESSAGE_ID_IS_NULL = 61001] = "DELETE_MESSAGE_ID_IS_NULL",
              a[a.CANCEL = 1] = "CANCEL",
              a[a.REJECT = 2] = "REJECT",
              a[a.HANGUP = 3] = "HANGUP",
              a[a.BUSYLINE = 4] = "BUSYLINE",
              a[a.NO_RESPONSE = 5] = "NO_RESPONSE",
              a[a.ENGINE_UN_SUPPORTED = 6] = "ENGINE_UN_SUPPORTED",
              a[a.NETWORK_ERROR = 7] = "NETWORK_ERROR",
              a[a.REMOTE_CANCEL = 11] = "REMOTE_CANCEL",
              a[a.REMOTE_REJECT = 12] = "REMOTE_REJECT",
              a[a.REMOTE_HANGUP = 13] = "REMOTE_HANGUP",
              a[a.REMOTE_BUSYLINE = 14] = "REMOTE_BUSYLINE",
              a[a.REMOTE_NO_RESPONSE = 15] = "REMOTE_NO_RESPONSE",
              a[a.REMOTE_ENGINE_UN_SUPPORTED = 16] = "REMOTE_ENGINE_UN_SUPPORTED",
              a[a.REMOTE_NETWORK_ERROR = 17] = "REMOTE_NETWORK_ERROR",
              a[a.VOIP_NOT_AVALIABLE = 18] = "VOIP_NOT_AVALIABLE"
            } (a.ErrorCode || (a.ErrorCode = {}));
          a.ErrorCode; !
            function(a) {
              a[a.MEDIA_AUDIO = 1] = "MEDIA_AUDIO",
                a[a.MEDIA_VEDIO = 2] = "MEDIA_VEDIO"
            } (a.VoIPMediaType || (a.VoIPMediaType = {}));
          a.VoIPMediaType; !
            function(a) {
              a[a.IMAGE = 1] = "IMAGE",
                a[a.AUDIO = 2] = "AUDIO",
                a[a.VIDEO = 3] = "VIDEO",
                a[a.FILE = 100] = "FILE"
            } (a.MediaType || (a.MediaType = {}));
          a.MediaType; !
            function(a) {
              a[a.SEND = 1] = "SEND",
                a[a.RECEIVE = 2] = "RECEIVE"
            } (a.MessageDirection || (a.MessageDirection = {}));
          a.MessageDirection; !
            function(a) {
              a[a.IMAGE = 1] = "IMAGE",
                a[a.AUDIO = 2] = "AUDIO",
                a[a.VIDEO = 3] = "VIDEO",
                a[a.FILE = 4] = "FILE"
            } (a.FileType || (a.FileType = {}));
          a.FileType; !
            function(a) {
              a[a.RC_REAL_TIME_LOCATION_NOT_INIT = -1] = "RC_REAL_TIME_LOCATION_NOT_INIT",
                a[a.RC_REAL_TIME_LOCATION_SUCCESS = 0] = "RC_REAL_TIME_LOCATION_SUCCESS",
                a[a.RC_REAL_TIME_LOCATION_GPS_DISABLED = 1] = "RC_REAL_TIME_LOCATION_GPS_DISABLED",
                a[a.RC_REAL_TIME_LOCATION_CONVERSATION_NOT_SUPPORT = 2] = "RC_REAL_TIME_LOCATION_CONVERSATION_NOT_SUPPORT",
                a[a.RC_REAL_TIME_LOCATION_IS_ON_GOING = 3] = "RC_REAL_TIME_LOCATION_IS_ON_GOING",
                a[a.RC_REAL_TIME_LOCATION_EXCEED_MAX_PARTICIPANT = 4] = "RC_REAL_TIME_LOCATION_EXCEED_MAX_PARTICIPANT",
                a[a.RC_REAL_TIME_LOCATION_JOIN_FAILURE = 5] = "RC_REAL_TIME_LOCATION_JOIN_FAILURE",
                a[a.RC_REAL_TIME_LOCATION_START_FAILURE = 6] = "RC_REAL_TIME_LOCATION_START_FAILURE",
                a[a.RC_REAL_TIME_LOCATION_NETWORK_UNAVAILABLE = 7] = "RC_REAL_TIME_LOCATION_NETWORK_UNAVAILABLE"
            } (a.RealTimeLocationErrorCode || (a.RealTimeLocationErrorCode = {}));
          a.RealTimeLocationErrorCode; !
            function(a) {
              a[a.RC_REAL_TIME_LOCATION_STATUS_IDLE = 0] = "RC_REAL_TIME_LOCATION_STATUS_IDLE",
                a[a.RC_REAL_TIME_LOCATION_STATUS_INCOMING = 1] = "RC_REAL_TIME_LOCATION_STATUS_INCOMING",
                a[a.RC_REAL_TIME_LOCATION_STATUS_OUTGOING = 2] = "RC_REAL_TIME_LOCATION_STATUS_OUTGOING",
                a[a.RC_REAL_TIME_LOCATION_STATUS_CONNECTED = 3] = "RC_REAL_TIME_LOCATION_STATUS_CONNECTED"
            } (a.RealTimeLocationStatus || (a.RealTimeLocationStatus = {}));
          a.RealTimeLocationStatus; !
            function(a) {
              a[a.READ = 1] = "READ",
                a[a.LISTENED = 2] = "LISTENED",
                a[a.DOWNLOADED = 4] = "DOWNLOADED",
                a[a.RETRIEVED = 8] = "RETRIEVED",
                a[a.UNREAD = 0] = "UNREAD"
            } (a.ReceivedStatus || (a.ReceivedStatus = {}));
          a.ReceivedStatus; !
            function(a) {
              a[a.READ = 1] = "READ",
                a[a.LISTENED = 2] = "LISTENED",
                a[a.DOWNLOADED = 4] = "DOWNLOADED",
                a[a.RETRIEVED = 8] = "RETRIEVED",
                a[a.UNREAD = 0] = "UNREAD"
            } (a.ReadStatus || (a.ReadStatus = {}));
          a.ReadStatus; !
            function(a) {
              a[a.EXACT = 0] = "EXACT",
                a[a.FUZZY = 1] = "FUZZY"
            } (a.SearchType || (a.SearchType = {}));
          a.SearchType; !
            function(a) {
              a[a.SENDING = 10] = "SENDING",
                a[a.FAILED = 20] = "FAILED",
                a[a.SENT = 30] = "SENT",
                a[a.RECEIVED = 40] = "RECEIVED",
                a[a.READ = 50] = "READ",
                a[a.DESTROYED = 60] = "DESTROYED"
            } (a.SentStatus || (a.SentStatus = {}));
          a.SentStatus; !
            function(a) {
              a[a.ACCEPTED = 0] = "ACCEPTED",
                a[a.UNACCEPTABLE_PROTOCOL_VERSION = 1] = "UNACCEPTABLE_PROTOCOL_VERSION",
                a[a.IDENTIFIER_REJECTED = 2] = "IDENTIFIER_REJECTED",
                a[a.SERVER_UNAVAILABLE = 3] = "SERVER_UNAVAILABLE",
                a[a.TOKEN_INCORRECT = 4] = "TOKEN_INCORRECT",
                a[a.NOT_AUTHORIZED = 5] = "NOT_AUTHORIZED",
                a[a.REDIRECT = 6] = "REDIRECT",
                a[a.PACKAGE_ERROR = 7] = "PACKAGE_ERROR",
                a[a.APP_BLOCK_OR_DELETE = 8] = "APP_BLOCK_OR_DELETE",
                a[a.BLOCK = 9] = "BLOCK",
                a[a.TOKEN_EXPIRE = 10] = "TOKEN_EXPIRE",
                a[a.DEVICE_ERROR = 11] = "DEVICE_ERROR"
            } (a.ConnectionState || (a.ConnectionState = {}));
          a.ConnectionState; !
            function(a) {
              a[a.ROOM = 1] = "ROOM",
                a[a.PERSON = 2] = "PERSON"
            } (a.RTCAPIType || (a.RTCAPIType = {}));
          a.RTCAPIType
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) {
          var b = function() {
            function b() {}
            return b.getInstance = function() {
              if (!b._instance) throw new Error("RongIMClient is not initialized. Call .init() method first.");
              return b._instance
            },
              b.showError = function(a) {
                console && console.error && console.error(JSON.stringify(a))
              },
              b.logger = function(a) {
                var c = a.code,
                  d = b.LogFactory[c] || a;
                d.funcName = a.funcName,
                  d.msg = a.msg || d.msg,
                b._memoryStore.depend.showError && b.showError(d)
              },
              b.logCallback = function(a, c) {
                return {
                  onSuccess: a.onSuccess,
                  onError: function(d) {
                    b.logger({
                      code: d,
                      funcName: c
                    }),
                      a.onError(d)
                  }
                }
              },
              b.logSendCallback = function(a, c) {
                return {
                  onSuccess: a.onSuccess,
                  onError: function(d, e) {
                    b.logger({
                      code: d,
                      funcName: c
                    }),
                      a.onError(d, e)
                  },
                  onBefore: a.onBefore
                }
              },
              b.init = function(c, d, e, f) {
                if (b._instance) return b._memoryStore.sdkInfo;
                b._instance = new b,
                  e = e || {};
                var g = "http://",
                  h = "ws://";
                "https:" == location.protocol && (h = "wss://", g = "https://");
                var i = !1;
                "function" != typeof WebSocket && (i = !0);
                var j = function() {
                  var a = typeof WebSocket,
                    b = "number" == typeof WebSocket.OPEN;
                  return a && b
                };
                "object" == typeof WebSocket && j() && (i = !1);
                var k = function() {
                  return document.documentElement.addBehavior
                };
                a.RongUtil.supportLocalStorage() ? b._storageProvider = new a.LocalStorageProvider: k() ? b._storageProvider = new a.UserDataProvider: b._storageProvider = new a.MemeoryProvider;
                var l = b._storageProvider.getItem("serverIndex");
                b.serverStore.index = l || 0;
                var m = "{0}{1}",
                  n = {
                    api: "api.cn.ronghub.com"
                  };
                a.RongUtil.forEach(n,
                  function(b, c) {
                    n[c] = a.RongUtil.stringFormat(m, [g, b])
                  }),
                  a.RongUtil.forEach(n,
                    function(b, c) {
                      var d = c in e,
                        f = {
                          path: e[c],
                          tmpl: m,
                          protocol: g,
                          sub: !0
                        };
                      b = d ? a.RongUtil.formatProtoclPath(f) : b,
                        e[c] = b
                    });
                var o = e.navigaters || [];
                e.navi && (o = [e.navi]),
                !e.navi && a.RongUtil.isEqual(o.length, 0) && (o = ["nav.cn.ronghub.com", "nav2-cn.ronghub.com"]),
                  a.RongUtil.forEach(o,
                    function(b, c) {
                      var d = {
                        path: b,
                        tmpl: m,
                        protocol: g,
                        sub: !0
                      };
                      b = a.RongUtil.formatProtoclPath(d),
                        o[c] = b
                    });
                var p = {
                  protobuf: "cdn.ronghub.com/protobuf-2.3.5.min.js"
                };
                a.RongUtil.forEach(p,
                  function(b, c) {
                    p[c] = a.RongUtil.stringFormat(m, [g, b])
                  }),
                  a.RongUtil.extend(p, e);
                var q = {
                  isPolling: i,
                  wsScheme: h,
                  protocol: g,
                  showError: !0,
                  openMp: !0,
                  snifferTime: 2e3,
                  naviTimeout: 5e3,
                  navigaters: o,
                  maxNaviRetry: 10
                };
                delete e.navigaters,
                  a.RongUtil.extend(q, e),
                a.RongUtil.isFunction(e.protobuf) && (b.Protobuf = e.protobuf),
                  b.userStatusObserver = new a.RongObserver,
                  (new a.FeaturePatcher).patchAll();
                var r = {
                  token: "",
                  callback: null,
                  lastReadTime: new a.LimitableMap,
                  historyMessageLimit: new a.MemoryCache,
                  conversationList: [],
                  appKey: c,
                  publicServiceMap: new a.PublicServiceMap,
                  providerType: 1,
                  deltaTime: 0,
                  filterMessages: [],
                  isSyncRemoteConverList: !0,
                  otherDevice: !1,
                  custStore: {},
                  converStore: {
                    latestMessage: {}
                  },
                  connectAckTime: 0,
                  voipStategy: 0,
                  isFirstPingMsg: !0,
                  depend: e,
                  listenerList: b._memoryStore.listenerList,
                  notification: {}
                };
                b._memoryStore = r,
                  d && "[object Object]" == Object.prototype.toString.call(d) ? b._dataAccessProvider = d: b._dataAccessProvider = new a.ServerDataProvider,
                  e.appCallback = f;
                var s = b._dataAccessProvider.init(c, e);
                return b._memoryStore.sdkInfo = s,
                  b._dataAccessProvider.setServerInfo({
                    navi: location.protocol + e.navi + "/navi.xml"
                  }),
                  b.MessageParams = {
                    TextMessage: {
                      objectName: "RC:TxtMsg",
                      msgTag: new a.MessageTag(!0, !0)
                    },
                    ImageMessage: {
                      objectName: "RC:ImgMsg",
                      msgTag: new a.MessageTag(!0, !0)
                    },
                    DiscussionNotificationMessage: {
                      objectName: "RC:DizNtf",
                      msgTag: new a.MessageTag(!1, !0)
                    },
                    VoiceMessage: {
                      objectName: "RC:VcMsg",
                      msgTag: new a.MessageTag(!0, !0)
                    },
                    RichContentMessage: {
                      objectName: "RC:ImgTextMsg",
                      msgTag: new a.MessageTag(!0, !0)
                    },
                    FileMessage: {
                      objectName: "RC:FileMsg",
                      msgTag: new a.MessageTag(!0, !0)
                    },
                    HQVoiceMessage: {
                      objectName: "RC:HQVCMsg",
                      msgTag: new a.MessageTag(!0, !0)
                    },
                    HandshakeMessage: {
                      objectName: "",
                      msgTag: new a.MessageTag(!0, !0)
                    },
                    UnknownMessage: {
                      objectName: "",
                      msgTag: new a.MessageTag(!0, !0)
                    },
                    LocationMessage: {
                      objectName: "RC:LBSMsg",
                      msgTag: new a.MessageTag(!0, !0)
                    },
                    InformationNotificationMessage: {
                      objectName: "RC:InfoNtf",
                      msgTag: new a.MessageTag(!1, !0)
                    },
                    ContactNotificationMessage: {
                      objectName: "RC:ContactNtf",
                      msgTag: new a.MessageTag(!1, !0)
                    },
                    ProfileNotificationMessage: {
                      objectName: "RC:ProfileNtf",
                      msgTag: new a.MessageTag(!1, !0)
                    },
                    CommandNotificationMessage: {
                      objectName: "RC:CmdNtf",
                      msgTag: new a.MessageTag(!0, !0)
                    },
                    PublicServiceRichContentMessage: {
                      objectName: "RC:PSImgTxtMsg",
                      msgTag: new a.MessageTag(!0, !0)
                    },
                    PublicServiceMultiRichContentMessage: {
                      objectName: "RC:PSMultiImgTxtMsg",
                      msgTag: new a.MessageTag(!0, !0)
                    },
                    JrmfRedPacketMessage: {
                      objectName: "RCJrmf:RpMsg",
                      msgTag: new a.MessageTag(!0, !0)
                    },
                    JrmfRedPacketOpenedMessage: {
                      objectName: "RCJrmf:RpOpendMsg",
                      msgTag: new a.MessageTag(!0, !0)
                    },
                    GroupNotificationMessage: {
                      objectName: "RC:GrpNtf",
                      msgTag: new a.MessageTag(!1, !0)
                    },
                    CommandMessage: {
                      objectName: "RC:CmdMsg",
                      msgTag: new a.MessageTag(!1, !1)
                    },
                    TypingStatusMessage: {
                      objectName: "RC:TypSts",
                      msgTag: new a.MessageTag(!1, !1)
                    },
                    PublicServiceCommandMessage: {
                      objectName: "RC:PSCmd",
                      msgTag: new a.MessageTag(!1, !1)
                    },
                    RecallCommandMessage: {
                      objectName: "RC:RcCmd",
                      msgTag: new a.MessageTag(!1, !0)
                    },
                    SyncReadStatusMessage: {
                      objectName: "RC:SRSMsg",
                      msgTag: new a.MessageTag(!1, !1)
                    },
                    ReadReceiptRequestMessage: {
                      objectName: "RC:RRReqMsg",
                      msgTag: new a.MessageTag(!1, !1)
                    },
                    ReadReceiptResponseMessage: {
                      objectName: "RC:RRRspMsg",
                      msgTag: new a.MessageTag(!1, !1)
                    },
                    ChangeModeResponseMessage: {
                      objectName: "RC:CsChaR",
                      msgTag: new a.MessageTag(!1, !1)
                    },
                    ChangeModeMessage: {
                      objectName: "RC:CSCha",
                      msgTag: new a.MessageTag(!1, !1)
                    },
                    EvaluateMessage: {
                      objectName: "RC:CsEva",
                      msgTag: new a.MessageTag(!1, !1)
                    },
                    CustomerContact: {
                      objectName: "RC:CsContact",
                      msgTag: new a.MessageTag(!1, !1)
                    },
                    HandShakeMessage: {
                      objectName: "RC:CsHs",
                      msgTag: new a.MessageTag(!1, !1)
                    },
                    HandShakeResponseMessage: {
                      objectName: "RC:CsHsR",
                      msgTag: new a.MessageTag(!1, !1)
                    },
                    SuspendMessage: {
                      objectName: "RC:CsSp",
                      msgTag: new a.MessageTag(!1, !1)
                    },
                    TerminateMessage: {
                      objectName: "RC:CsEnd",
                      msgTag: new a.MessageTag(!1, !1)
                    },
                    CustomerStatusUpdateMessage: {
                      objectName: "RC:CsUpdate",
                      msgTag: new a.MessageTag(!1, !1)
                    },
                    ReadReceiptMessage: {
                      objectName: "RC:ReadNtf",
                      msgTag: new a.MessageTag(!1, !1)
                    }
                  },
                  b.MessageParams.AcceptMessage = {
                    objectName: "RC:VCAccept",
                    msgTag: new a.MessageTag(!1, !1)
                  },
                  b.MessageParams.RingingMessage = {
                    objectName: "RC:VCRinging",
                    msgTag: new a.MessageTag(!1, !1)
                  },
                  b.MessageParams.SummaryMessage = {
                    objectName: "RC:VCSummary",
                    msgTag: new a.MessageTag(!1, !1)
                  },
                  b.MessageParams.HungupMessage = {
                    objectName: "RC:VCHangup",
                    msgTag: new a.MessageTag(!1, !1)
                  },
                  b.MessageParams.InviteMessage = {
                    objectName: "RC:VCInvite",
                    msgTag: new a.MessageTag(!1, !1)
                  },
                  b.MessageParams.MediaModifyMessage = {
                    objectName: "RC:VCModifyMedia",
                    msgTag: new a.MessageTag(!1, !1)
                  },
                  b.MessageParams.MemberModifyMessage = {
                    objectName: "RC:VCModifyMem",
                    msgTag: new a.MessageTag(!1, !1)
                  },
                  b.MessageType = {
                    TextMessage: "TextMessage",
                    ImageMessage: "ImageMessage",
                    DiscussionNotificationMessage: "DiscussionNotificationMessage",
                    VoiceMessage: "VoiceMessage",
                    RichContentMessage: "RichContentMessage",
                    HandshakeMessage: "HandshakeMessage",
                    UnknownMessage: "UnknownMessage",
                    LocationMessage: "LocationMessage",
                    InformationNotificationMessage: "InformationNotificationMessage",
                    ContactNotificationMessage: "ContactNotificationMessage",
                    ProfileNotificationMessage: "ProfileNotificationMessage",
                    CommandNotificationMessage: "CommandNotificationMessage",
                    CommandMessage: "CommandMessage",
                    TypingStatusMessage: "TypingStatusMessage",
                    ChangeModeResponseMessage: "ChangeModeResponseMessage",
                    ChangeModeMessage: "ChangeModeMessage",
                    EvaluateMessage: "EvaluateMessage",
                    HandShakeMessage: "HandShakeMessage",
                    HandShakeResponseMessage: "HandShakeResponseMessage",
                    SuspendMessage: "SuspendMessage",
                    TerminateMessage: "TerminateMessage",
                    CustomerContact: "CustomerContact",
                    CustomerStatusUpdateMessage: "CustomerStatusUpdateMessage",
                    SyncReadStatusMessage: "SyncReadStatusMessage",
                    ReadReceiptRequestMessage: "ReadReceiptRequestMessage",
                    ReadReceiptResponseMessage: "ReadReceiptResponseMessage",
                    FileMessage: "FileMessage",
                    HQVoiceMessage: "HQVoiceMessage",
                    AcceptMessage: "AcceptMessage",
                    RingingMessage: "RingingMessage",
                    SummaryMessage: "SummaryMessage",
                    HungupMessage: "HungupMessage",
                    InviteMessage: "InviteMessage",
                    MediaModifyMessage: "MediaModifyMessage",
                    MemberModifyMessage: "MemberModifyMessage",
                    JrmfRedPacketMessage: "JrmfRedPacketMessage",
                    JrmfRedPacketOpenedMessage: "JrmfRedPacketOpenedMessage",
                    GroupNotificationMessage: "GroupNotificationMessage",
                    PublicServiceRichContentMessage: "PublicServiceRichContentMessage",
                    PublicServiceMultiRichContentMessage: "PublicServiceMultiRichContentMessage",
                    PublicServiceCommandMessage: "PublicServiceCommandMessage",
                    RecallCommandMessage: "RecallCommandMessage",
                    ReadReceiptMessage: "ReadReceiptMessage"
                  },
                  b.LogFactory = {
                    "-1": {
                      code: "-1",
                      msg: "æœåŠ¡å™¨è¶…æ—¶"
                    },
                    "-2": {
                      code: "-2",
                      msg: "æœªçŸ¥åŽŸå› å¤±è´¥"
                    },
                    "-3": {
                      code: "-3",
                      msg: "å‚æ•°é”™è¯¯"
                    },
                    "-4": {
                      code: "-4",
                      msg: "å‚æ•°ä¸æ­£ç¡®æˆ–å°šæœªå®žä¾‹åŒ–"
                    },
                    25101 : {
                      code: "25101",
                      msg: "æ’¤å›žæ¶ˆæ¯å‚æ•°é”™è¯¯",
                      desc: "è¯·æ£€æŸ¥æ’¤å›žæ¶ˆæ¯å‚æ•° https://rongcloud.github.io/websdk-demo/api-test.html"
                    },
                    25102 : {
                      code: "25101",
                      msg: "åªèƒ½æ’¤å›žè‡ªå‘å‘é€çš„æ¶ˆæ¯"
                    },
                    20604 : {
                      code: "20604",
                      msg: "å‘é€é¢‘çŽ‡è¿‡å¿«",
                      desc: "https://developer.rongcloud.cn/ticket/info/9Q3L6vRKd1cLS7rycA==?type=1"
                    },
                    20406 : {
                      code: "20406",
                      msg: "è¢«ç¦è¨€"
                    },
                    23407 : {
                      code: "23407",
                      msg: "èŽ·å–ç”¨æˆ·å¤±è´¥"
                    },
                    20407 : {
                      code: "20407",
                      msg: "ç¾¤ç»„Idæ— æ•ˆ"
                    },
                    22408 : {
                      code: "22408",
                      msg: "ç¾¤ç»„è¢«ç¦è¨€"
                    },
                    22406 : {
                      code: "22406",
                      msg: "ä¸åœ¨ç¾¤ç»„"
                    },
                    35001 : {
                      code: "35001",
                      msg: "ç¾¤ç»„åŒæ­¥å¼‚å¸¸"
                    },
                    35002 : {
                      code: "35002",
                      msg: "åŒ¹é…ç¾¤ä¿¡æ¯å¼‚å¸¸"
                    },
                    21406 : {
                      code: "21406",
                      msg: "ä¸åœ¨è®¨è®ºç»„"
                    },
                    21407 : {
                      code: "21407",
                      msg: "åŠ å…¥è®¨è®ºå¤±è´¥"
                    },
                    21408 : {
                      code: "21408",
                      msg: "åˆ›å»ºè®¨è®ºç»„å¤±è´¥"
                    },
                    21409 : {
                      code: "21409",
                      msg: "è®¾ç½®è®¨è®ºç»„é‚€è¯·çŠ¶æ€å¤±è´¥"
                    },
                    23406 : {
                      code: "23406",
                      msg: "ä¸åœ¨èŠå¤©å®¤"
                    },
                    23408 : {
                      code: "23408",
                      msg: "èŠå¤©å®¤è¢«ç¦è¨€"
                    },
                    23409 : {
                      code: "23409",
                      msg: "èŠå¤©å®¤ä¸­æˆå‘˜è¢«è¸¢å‡º"
                    },
                    23410 : {
                      code: "23410",
                      msg: "èŠå¤©å®¤ä¸å­˜åœ¨"
                    },
                    23411 : {
                      code: "23411",
                      msg: "èŠå¤©å®¤æˆå‘˜å·²æ»¡"
                    },
                    23412 : {
                      code: "23412",
                      msg: "èŽ·å–èŠå¤©å®¤ä¿¡æ¯å‚æ•°æ— æ•ˆ"
                    },
                    23413 : {
                      code: "23413",
                      msg: "èŠå¤©å®¤å¼‚å¸¸"
                    },
                    23414 : {
                      code: "23414",
                      msg: "æ²¡æœ‰æ‰“å¼€èŠå¤©å®¤æ¶ˆæ¯å­˜å‚¨"
                    },
                    36001 : {
                      code: "36001",
                      msg: "åŠ å…¥èŠå¤©å®¤Idä¸ºç©º"
                    },
                    36002 : {
                      code: "36002",
                      msg: "åŠ å…¥èŠå¤©å®¤å¤±è´¥"
                    },
                    36003 : {
                      code: "36003",
                      msg: "æ‹‰å–èŠå¤©å®¤åŽ†å²æ¶ˆæ¯å¤±è´¥"
                    },
                    24001 : {
                      code: "24001",
                      msg: "æ²¡æœ‰æ³¨å†ŒDeviveId ä¹Ÿå°±æ˜¯ç”¨æˆ·æ²¡æœ‰ç™»é™†"
                    },
                    24002 : {
                      code: "24002",
                      msg: "ç”¨æˆ·å·²ç»å­˜åœ¨"
                    },
                    0 : {
                      code: "0",
                      msg: "æˆåŠŸ"
                    },
                    24009 : {
                      code: "24009",
                      msg: "æ²¡æœ‰å¯¹åº”çš„ç”¨æˆ·æˆ–token"
                    },
                    24013 : {
                      code: "24013",
                      msg: "voipä¸ºç©º"
                    },
                    24010 : {
                      code: "24010",
                      msg: "ä¸æ”¯æŒçš„Voipå¼•æ“Ž"
                    },
                    24011 : {
                      code: "24011",
                      msg: "channelName æ˜¯ç©º"
                    },
                    24012 : {
                      code: "24012",
                      msg: "ç”ŸæˆVoipkeyå¤±è´¥"
                    },
                    24014 : {
                      code: "24014",
                      msg: "æ²¡æœ‰é…ç½®voip"
                    },
                    24015 : {
                      code: "24015",
                      msg: "æœåŠ¡å™¨å†…éƒ¨é”™è¯¯"
                    },
                    24016 : {
                      code: "24016",
                      msg: "VOIP close"
                    },
                    30001 : {
                      code: "30001",
                      msg: "é€šä¿¡è¿‡ç¨‹ä¸­ï¼Œå½“å‰Socketä¸å­˜åœ¨"
                    },
                    30002 : {
                      code: "30002",
                      msg: "Socketè¿žæŽ¥ä¸å¯ç”¨"
                    },
                    30003 : {
                      code: "30003",
                      msg: "é€šä¿¡è¶…æ—¶"
                    },
                    30004 : {
                      code: "30004",
                      msg: "å¯¼èˆªæ“ä½œæ—¶ï¼ŒHttpè¯·æ±‚å¤±è´¥"
                    },
                    30005 : {
                      code: "30005",
                      msg: "HTTPè¯·æ±‚å¤±è´¥"
                    },
                    30006 : {
                      code: "30006",
                      msg: "HTTPæŽ¥æ”¶å¤±è´¥"
                    },
                    30007 : {
                      code: "30007",
                      msg: "å¯¼èˆªèµ„æºé”™è¯¯"
                    },
                    30008 : {
                      code: "30008",
                      msg: "æ²¡æœ‰æœ‰æ•ˆæ•°æ®"
                    },
                    30009 : {
                      code: "30009",
                      msg: "ä¸å­˜åœ¨æœ‰æ•ˆ IP åœ°å€"
                    },
                    30010 : {
                      code: "30010",
                      msg: "åˆ›å»º Socket å¤±è´¥"
                    },
                    30011 : {
                      code: "30011",
                      msg: " Socket è¢«æ–­å¼€"
                    },
                    30012 : {
                      code: "30012",
                      msg: "PING æ“ä½œå¤±è´¥"
                    },
                    30013 : {
                      code: "30013",
                      msg: "PING è¶…æ—¶"
                    },
                    30014 : {
                      code: "30014",
                      msg: "æ¶ˆæ¯å‘é€å¤±è´¥"
                    },
                    30016 : {
                      code: "30016",
                      msg: "æ¶ˆæ¯å¤§å°è¶…é™ï¼Œæœ€å¤§ 128 KB"
                    },
                    31000 : {
                      code: "31000",
                      msg: "åš connect è¿žæŽ¥æ—¶ï¼Œæ”¶åˆ°çš„ ACK è¶…æ—¶"
                    },
                    31001 : {
                      code: "31001",
                      msg: "å‚æ•°é”™è¯¯"
                    },
                    31002 : {
                      code: "31002",
                      msg: "å‚æ•°é”™è¯¯ï¼ŒApp Id é”™è¯¯"
                    },
                    31003 : {
                      code: "31003",
                      msg: "æœåŠ¡å™¨ä¸å¯ç”¨"
                    },
                    31004 : {
                      code: "31004",
                      msg: "Token é”™è¯¯"
                    },
                    31005 : {
                      code: "31005",
                      msg: "App Id ä¸Ž Token ä¸åŒ¹é…"
                    },
                    31006 : {
                      code: "31006",
                      msg: "é‡å®šå‘ï¼Œåœ°å€é”™è¯¯"
                    },
                    31007 : {
                      code: "31007",
                      msg: "NAME ä¸ŽåŽå°æ³¨å†Œä¿¡æ¯ä¸ä¸€è‡´"
                    },
                    31008 : {
                      code: "31008",
                      msg: "APP è¢«å±è”½ã€åˆ é™¤æˆ–ä¸å­˜åœ¨"
                    },
                    31009 : {
                      code: "31009",
                      msg: "ç”¨æˆ·è¢«å±è”½"
                    },
                    31010 : {
                      code: "31010",
                      msg: "Disconnectï¼Œç”±æœåŠ¡å™¨è¿”å›žï¼Œæ¯”å¦‚ç”¨æˆ·äº’è¸¢"
                    },
                    31011 : {
                      code: "31011",
                      msg: "Disconnectï¼Œç”±æœåŠ¡å™¨è¿”å›žï¼Œæ¯”å¦‚ç”¨æˆ·äº’è¸¢"
                    },
                    32001 : {
                      code: "32001",
                      msg: "åè®®å±‚å†…éƒ¨é”™è¯¯ã€‚queryï¼Œä¸Šä¼ ä¸‹è½½è¿‡ç¨‹ä¸­æ•°æ®é”™è¯¯"
                    },
                    32002 : {
                      code: "32002",
                      msg: "åè®®å±‚å†…éƒ¨é”™è¯¯"
                    },
                    33001 : {
                      code: "33001",
                      msg: "æœªè°ƒç”¨ init åˆå§‹åŒ–å‡½æ•°"
                    },
                    33002 : {
                      code: "33002",
                      msg: "æ•°æ®åº“åˆå§‹åŒ–å¤±è´¥"
                    },
                    33003 : {
                      code: "33003",
                      msg: "ä¼ å…¥å‚æ•°æ— æ•ˆ"
                    },
                    33004 : {
                      code: "33004",
                      msg: "é€šé“æ— æ•ˆ"
                    },
                    33005 : {
                      code: "33005",
                      msg: "é‡æ–°è¿žæŽ¥æˆåŠŸ"
                    },
                    33006 : {
                      code: "33006",
                      msg: "è¿žæŽ¥ä¸­ï¼Œå†è°ƒç”¨ connect è¢«æ‹’ç»"
                    },
                    33007 : {
                      code: "33007",
                      msg: "æ¶ˆæ¯æ¼«æ¸¸æœåŠ¡æœªå¼€é€š"
                    },
                    33008 : {
                      code: "33008",
                      msg: "æ¶ˆæ¯æ·»åŠ å¤±è´¥"
                    },
                    33009 : {
                      code: "33009",
                      msg: "æ¶ˆæ¯åˆ é™¤å¤±è´¥"
                    },
                    34001 : {
                      code: "34001",
                      msg: "åˆ é™¤ä¼šè¯å¤±è´¥"
                    },
                    34002 : {
                      code: "34002",
                      msg: "æ‹‰å–åŽ†å²æ¶ˆæ¯å¤±è´¥"
                    },
                    34003 : {
                      code: "34003",
                      msg: "ä¼šè¯æŒ‡å®šå¼‚å¸¸"
                    },
                    34004 : {
                      code: "34004",
                      msg: "èŽ·å–ä¼šè¯æœªè¯»æ¶ˆæ¯æ€»æ•°å¤±è´¥"
                    },
                    34005 : {
                      code: "34005",
                      msg: "èŽ·å–æŒ‡å®šä¼šè¯ç±»åž‹æœªè¯»æ¶ˆæ¯æ•°å¼‚å¸¸"
                    },
                    34006 : {
                      code: "34006",
                      msg: "èŽ·å–æŒ‡å®šç”¨æˆ·ID&ä¼šè¯ç±»åž‹æœªè¯»æ¶ˆæ¯æ•°å¼‚å¸¸"
                    },
                    34007 : {
                      code: "34007",
                      msg: "æ¸…é™¤ä¼šè¯æ¶ˆæ¯å¼‚å¸¸"
                    },
                    34008 : {
                      code: "34008",
                      msg: "èŽ·å–ä¼šè¯æ¶ˆæ¯å¼‚å¸¸"
                    },
                    34009 : {
                      code: "34009",
                      msg: "æ¸…é™¤åŽ†å²æ¶ˆæ¯ä¼šè¯ç±»åž‹ä¸æ­£ç¡®"
                    },
                    34010 : {
                      code: "34010",
                      msg: "æ¸…é™¤åŽ†å²æ¶ˆæ¯å¤±è´¥ï¼Œè¯·æ£€æŸ¥ä¼ å…¥å‚æ•°"
                    },
                    37001 : {
                      code: "37001",
                      msg: "åŠ å…¥é»‘åå•å¼‚å¸¸"
                    },
                    37002 : {
                      code: "37002",
                      msg: "èŽ·å¾—æŒ‡å®šäººå‘˜å†é»‘åå•ä¸­çš„çŠ¶æ€å¼‚å¸¸"
                    },
                    37003 : {
                      code: "37003",
                      msg: "ç§»é™¤é»‘åå•å¼‚å¸¸"
                    },
                    405 : {
                      code: "405",
                      msg: "åœ¨é»‘åå•ä¸­"
                    },
                    38001 : {
                      code: "38001",
                      msg: "èŽ·å–è‰ç¨¿å¤±è´¥"
                    },
                    38002 : {
                      code: "38002",
                      msg: "ä¿å­˜è‰ç¨¿å¤±è´¥"
                    },
                    38003 : {
                      code: "38003",
                      msg: "åˆ é™¤è‰ç¨¿å¤±è´¥"
                    },
                    39001 : {
                      code: "39001",
                      msg: "å…³æ³¨å…¬ä¼—å·å¤±è´¥"
                    },
                    41001 : {
                      code: "41001",
                      msg: "æ–‡ä»¶ç±»åž‹é”™è¯¯"
                    },
                    41002 : {
                      code: "41002",
                      msg: "èŽ·å–ä¸ƒç‰›tokenå¤±è´¥"
                    },
                    51001 : {
                      code: "51001",
                      msg: "æœªå®‰è£…æˆ–æœªå¯åŠ¨æ’ä»¶"
                    },
                    51002 : {
                      code: "51002",
                      msg: "è§†é¢‘å·²ç»å­˜åœ¨"
                    },
                    51003 : {
                      code: "51003",
                      msg: "æ— æ•ˆçš„channelName"
                    },
                    51004 : {
                      code: "51004",
                      msg: "è§†é¢‘å†…å®¹ä¸ºç©º"
                    },
                    61001 : {
                      code: "61001",
                      msg: "åˆ é™¤æ¶ˆæ¯æ•°ç»„é•¿åº¦ä¸º 0"
                    }
                  },
                  s
              },
              b.initApp = function(a, c) {
                b.init(a.appkey, a.dataAccessProvider, a.opts,
                  function() {
                    var a = b._instance;
                    c(null, a)
                  })
              },
              b.connect = function(c, d, e, f) {
                a.CheckParam.getInstance().check(["string", "object", "string|null|object|global|undefined", "object|null|global|undefined"], "connect", !0, arguments);
                var g = {
                  onSuccess: d.onSuccess,
                  onTokenIncorrect: d.onTokenIncorrect,
                  onError: function(a) {
                    b.logger({
                      code: a,
                      funcName: "connect"
                    }),
                      d.onError(a)
                  }
                };
                b._dataAccessProvider.connect(c, g, e, f)
              },
              b.reconnect = function(a, c) {
                var d = {
                  onSuccess: a.onSuccess,
                  onTokenIncorrect: a.onTokenIncorrect,
                  onError: function(c) {
                    b.logger({
                      code: c,
                      funcName: "connect"
                    }),
                      a.onError(c)
                  }
                };
                b._dataAccessProvider.reconnect(d, c)
              },
              b.registerMessageType = function(a, c, d, e, f) {
                b._dataAccessProvider.registerMessageType(a, c, d, e, f),
                  b.RegisterMessage[a].messageName = a,
                  b.MessageType[a] = a,
                  b.MessageParams[a] = {
                    objectName: c,
                    msgTag: d
                  }
              },
              b.prototype.registerMessageTypes = function(a) {
                a = a || {},
                  b._dataAccessProvider.registerMessageTypes(a)
              },
              b.setConnectionStatusListener = function(a) {
                b._dataAccessProvider ? b._dataAccessProvider.setConnectionStatusListener(a) : b._memoryStore.listenerList.push(a)
              },
              b.statusWatch = function(a) {
                "function" == typeof a && b.statusListeners.push(a)
              },
              b.setOnReceiveMessageListener = function(a) {
                b._dataAccessProvider ? b._dataAccessProvider.setOnReceiveMessageListener(a) : b._memoryStore.listenerList.push(a)
              },
              b.prototype.logout = function() {
                b._dataAccessProvider.logout()
              },
              b.prototype.disconnect = function() {
                b._dataAccessProvider.disconnect()
              },
              b.prototype.startCustomService = function(c, d, e) {
                if (c && d) {
                  var f = new a.HandShakeMessage(e),
                    g = this;
                  a.RongIMClient._memoryStore.custStore.isInit = !0,
                    b.getInstance().sendMessage(a.ConversationType.CUSTOMER_SERVICE, c, f, {
                      onSuccess: function(a) {
                        a.isBlack ? (d.onError(), g.stopCustomeService(c, {
                          onSuccess: function() {},
                          onError: function() {}
                        })) : d.onSuccess()
                      },
                      onError: function() {
                        d.onError()
                      },
                      onBefore: function() {}
                    })
                }
              },
              b.prototype.stopCustomeService = function(c, d) {
                if (c && d) {
                  var e = b._memoryStore.custStore[c];
                  if (e) {
                    var f = new a.SuspendMessage({
                      sid: e.sid,
                      uid: e.uid,
                      pid: e.pid
                    });
                    this.sendCustMessage(c, f, {
                      onSuccess: function() {
                        setTimeout(function() {
                          d.onSuccess()
                        })
                      },
                      onError: function() {
                        setTimeout(function() {
                          d.onError()
                        })
                      }
                    })
                  }
                }
              },
              b.prototype.switchToHumanMode = function(c, d) {
                if (c && d) {
                  var e = b._memoryStore.custStore[c];
                  if (e) {
                    var f = new a.ChangeModeMessage({
                      sid: e.sid,
                      uid: e.uid,
                      pid: e.pid
                    });
                    this.sendCustMessage(c, f, d)
                  }
                }
              },
              b.prototype.evaluateRebotCustomService = function(c, d, e, f) {
                if (c && f) {
                  var g = b._memoryStore.custStore[c];
                  if (g) {
                    var h = new a.EvaluateMessage({
                      sid: g.sid,
                      uid: g.uid,
                      pid: g.pid,
                      isRobotResolved: d,
                      sugest: e,
                      type: 0
                    });
                    this.sendCustMessage(c, h, f)
                  }
                }
              },
              b.prototype.evaluateHumanCustomService = function(c, d, e, f) {
                if (c && f) {
                  var g = b._memoryStore.custStore[c];
                  if (g) {
                    var h = new a.EvaluateMessage({
                      sid: g.sid,
                      uid: g.uid,
                      pid: g.pid,
                      humanValue: d,
                      sugest: e,
                      type: 1
                    });
                    this.sendCustMessage(c, h, f)
                  }
                }
              },
              b.prototype.sendCustMessage = function(c, d, e) {
                b.getInstance().sendMessage(a.ConversationType.CUSTOMER_SERVICE, c, d, {
                  onSuccess: function(a) {
                    e.onSuccess()
                  },
                  onError: function() {
                    e.onError()
                  },
                  onBefore: function() {}
                })
              },
              b.prototype.getCurrentConnectionStatus = function() {
                return b._dataAccessProvider.getCurrentConnectionStatus()
              },
              b.prototype.getConnectionChannel = function() {
                return a.Transportations._TransportType == a.Socket.XHR_POLLING ? a.ConnectionChannel.XHR_POLLING: a.Transportations._TransportType == a.Socket.WEBSOCKET ? a.ConnectionChannel.WEBSOCKET: void 0
              },
              b.prototype.getStorageProvider = function() {
                return 1 == b._memoryStore.providerType ? "ServerDataProvider": "OtherDataProvider"
              },
              b.prototype.setFilterMessages = function(a) {
                "[object Array]" == Object.prototype.toString.call(a) && (b._memoryStore.filterMessages = a)
              },
              b.prototype.getAgoraDynamicKey = function(a, c, d) {
                b._dataAccessProvider.getAgoraDynamicKey(a, c, d)
              },
              b.prototype.getCurrentUserId = function() {
                return a.Bridge._client.userId
              },
              b.prototype.getDeltaTime = function() {
                return b._dataAccessProvider.getDelaTime()
              },
              b.prototype.getMessage = function(a, c) {
                b._dataAccessProvider.getMessage(a, b.logCallback(c, "getMessage"))
              },
              b.prototype.deleteLocalMessages = function(a, c, d, e) {
                b._dataAccessProvider.removeLocalMessage(a, c, d, b.logCallback(e, "deleteLocalMessages"))
              },
              b.prototype.updateMessage = function(a, c) {
                b._dataAccessProvider.updateMessage(a, b.logCallback(c, "updateMessage"))
              },
              b.prototype.clearData = function() {
                return b._dataAccessProvider.clearData()
              },
              b.prototype.clearMessages = function(a, c, d) {
                b._dataAccessProvider.clearMessages(a, c, {
                  onSuccess: function(a) {
                    setTimeout(function() {
                      d.onSuccess(a)
                    })
                  },
                  onError: function(a) {
                    setTimeout(function() {
                      b.logger({
                        code: a,
                        funcName: "clearMessages"
                      }),
                        d.onError(a)
                    })
                  }
                })
              },
              b.prototype.clearMessagesUnreadStatus = function(a, c, d) {
                b._dataAccessProvider.updateMessages(a, c, "readStatus", null, {
                  onSuccess: function(a) {
                    setTimeout(function() {
                      d.onSuccess(a)
                    })
                  },
                  onError: function(a) {
                    setTimeout(function() {
                      b.logger({
                        code: a,
                        funcName: "clearMessagesUnreadStatus"
                      }),
                        d.onError(a)
                    })
                  }
                })
              },
              b.prototype.deleteRemoteMessages = function(c, d, e, f) {
                if (a.CheckParam.getInstance().check(["number", "string|number", "array", "object"], "deleteRemoteMessages", !1, arguments), 0 == e.length) {
                  var g = a.ErrorCode.DELETE_MESSAGE_ID_IS_NULL;
                  return b.logger({
                    code: g,
                    funcName: "deleteRemoteMessages"
                  }),
                    void f.onError(a.ErrorCode.DELETE_MESSAGE_ID_IS_NULL)
                }
                e.length > 100 && (e.length = 100),
                  f.onSuccess(!0)
              },
              b.prototype.deleteMessages = function(a, c, d, e) {
                b._dataAccessProvider.removeMessage(a, c, d, {
                  onSuccess: function(a) {
                    setTimeout(function() {
                      e.onSuccess(a)
                    })
                  },
                  onError: function(a) {
                    setTimeout(function() {
                      b.logger({
                        code: a,
                        funcName: "deleteMessages"
                      }),
                        e.onError(a)
                    })
                  }
                })
              },
              b.prototype.sendLocalMessage = function(c, d) {
                a.CheckParam.getInstance().check(["object", "object"], "sendLocalMessage", !1, arguments),
                  b._dataAccessProvider.updateMessage(c),
                  this.sendMessage(c.conversationType, c.targetId, c.content, b.logSendCallback(d, "sendLocalMessage"))
              },
              b.prototype.sendMessage = function(c, d, e, f, g, h, i, j, k) {
                a.CheckParam.getInstance().check(["number", "string|number", "object", "object", "undefined|object|null|global|boolean", "undefined|object|null|global|string", "undefined|object|null|global|string", "undefined|object|null|global|number", "undefined|object|null|global"], "sendMessage", !1, arguments),
                  b._dataAccessProvider.sendMessage(c, d, e, b.logSendCallback(f, "sendMessage"), g, h, i, j, k)
              },
              b.prototype.sendReceiptResponse = function(a, c, d) {
                b._dataAccessProvider.sendReceiptResponse(a, c, b.logSendCallback(d, "sendReceiptResponse"))
              },
              b.prototype.sendTypingStatusMessage = function(a, c, d, e) {
                b._dataAccessProvider.sendTypingStatusMessage(a, c, d, b.logSendCallback(e, "sendTypingStatusMessage"))
              },
              b.prototype.sendStatusMessage = function(a, b, c) {
                throw new Error("Not implemented yet")
              },
              b.prototype.sendTextMessage = function(a, c, d, e) {
                b._dataAccessProvider.sendTextMessage(a, c, d, b.logSendCallback(e, "sendTextMessage"))
              },
              b.prototype.sendRecallMessage = function(c, d) {
                var e = b.logSendCallback(d, "sendRecallMessage");
                if (c.senderUserId != a.Bridge._client.userId) {
                  var e = b.logSendCallback(d, "sendRecallMessage");
                  return void e.onError(a.ErrorCode.RECALL_MESSAGE, c)
                }
                b._dataAccessProvider.sendRecallMessage(c, e)
              },
              b.prototype.insertMessage = function(a, c, d, e) {
                b._dataAccessProvider.addMessage(a, c, d, b.logCallback(e, "insertMessage"))
              },
              b.prototype.setMessageContent = function(a, c, d) {
                b._dataAccessProvider.setMessageContent(a, c, d)
              },
              b.prototype.setMessageSearchField = function(a, c, d) {
                b._dataAccessProvider.setMessageContent(a, c, d)
              },
              b.prototype.getHistoryMessages = function(c, d, e, f, g, h, i) {
                if (a.CheckParam.getInstance().check(["number", "string|number", "number|null|global|object", "number", "object", "undefined|object|null|global|string", "number|null|global|object"], "getHistoryMessages", !1, arguments), f > 20) throw new Error("HistroyMessage count must be less than or equal to 20!");
                if (c.valueOf() < 0) throw new Error("ConversationType must be greater than -1");
                b._dataAccessProvider.getHistoryMessages(c, d, e, f, b.logCallback(g, "getHistoryMessages"), h, i)
              },
              b.prototype.getRemoteHistoryMessages = function(c, d, e, f, g, h) {
                a.CheckParam.getInstance().check(["number", "string|number", "number|null|global|object", "number", "object", "undefined|null|global|object"], "getRemoteHistoryMessages", !1, arguments);
                var i = {
                  errorCode: a.ErrorCode.RC_CONN_PROTO_VERSION_ERROR,
                  funcName: "getRemoteHistoryMessages"
                };
                return f > 20 ? (b.logger(i), void g.onError(a.ErrorCode.RC_CONN_PROTO_VERSION_ERROR)) : c.valueOf() < 0 ? (b.logger(i), void g.onError(a.ErrorCode.RC_CONN_PROTO_VERSION_ERROR)) : void b._dataAccessProvider.getRemoteHistoryMessages(c, d, e, f, b.logCallback(g, "getRemoteHistoryMessages"), h)
              },
              b.prototype.clearHistoryMessages = function(a, c) {
                b._dataAccessProvider.clearHistoryMessages(a, c)
              },
              b.prototype.clearRemoteHistoryMessages = function(a, c) {
                b._dataAccessProvider.clearRemoteHistoryMessages(a, b.logCallback(c, "clearRemoteHistoryMessages"))
              },
              b.prototype.hasRemoteUnreadMessages = function(a, c) {
                b._dataAccessProvider.hasRemoteUnreadMessages(a, b.logCallback(c, "hasRemoteUnreadMessages"))
              },
              b.prototype.getTotalUnreadCount = function(a, c) {
                b._dataAccessProvider.getTotalUnreadCount({
                    onSuccess: function(b) {
                      setTimeout(function() {
                        a.onSuccess(b)
                      })
                    },
                    onError: function(c) {
                      setTimeout(function() {
                        b.logger({
                          code: c,
                          funcName: "getTotalUnreadCount"
                        }),
                          a.onError(c)
                      })
                    }
                  },
                  c)
              },
              b.prototype.getConversationUnreadCount = function(a, c) {
                b._dataAccessProvider.getConversationUnreadCount(a, {
                  onSuccess: function(a) {
                    setTimeout(function() {
                      c.onSuccess(a)
                    })
                  },
                  onError: function(a) {
                    setTimeout(function() {
                      b.logger({
                        code: a,
                        funcName: "getConversationUnreadCount"
                      }),
                        c.onError(a)
                    })
                  }
                })
              },
              b.prototype.getUnreadCount = function(a, c, d) {
                b._dataAccessProvider.getUnreadCount(a, c, {
                  onSuccess: function(a) {
                    setTimeout(function() {
                      d.onSuccess(a)
                    })
                  },
                  onError: function(a) {
                    setTimeout(function() {
                      b.logger({
                        code: a,
                        funcName: "getUnreadCount"
                      }),
                        d.onError(a)
                    })
                  }
                })
              },
              b.prototype.setUnreadCount = function(c, d, e) {
                a.CheckParam.getInstance().check(["number", "string", "number"], "setUnreadCount", !1, arguments),
                  b._dataAccessProvider.setUnreadCount(c, d, e)
              },
              b.prototype.clearUnreadCountByTimestamp = function(a, c, d, e) {
                b._dataAccessProvider.clearUnreadCountByTimestamp(a, c, d, b.logCallback(e, "clearUnreadCountByTimestamp"))
              },
              b.prototype.clearUnreadCount = function(a, c, d) {
                b._dataAccessProvider.clearUnreadCount(a, c, {
                  onSuccess: function(a) {
                    setTimeout(function() {
                      d.onSuccess(a)
                    })
                  },
                  onError: function(a) {
                    setTimeout(function() {
                      b.logger({
                        code: a,
                        funcName: "clearUnreadCount"
                      }),
                        d.onError(a)
                    })
                  }
                })
              },
              b.prototype.clearTotalUnreadCount = function(a) {
                b._dataAccessProvider.clearTotalUnreadCount({
                  onSuccess: function(b) {
                    a.onSuccess(b)
                  },
                  onError: function(c) {
                    setTimeout(function() {
                      b.logger({
                        code: c,
                        funcName: "clearTotalUnreadCount"
                      }),
                        a.onError(c)
                    })
                  }
                })
              },
              b.prototype.clearLocalStorage = function(a) {
                b._storageProvider.clearItem(),
                  a()
              },
              b.prototype.setMessageExtra = function(a, c, d) {
                b._dataAccessProvider.setMessageExtra(a, c, {
                  onSuccess: function(a) {
                    setTimeout(function() {
                      d.onSuccess(a)
                    })
                  },
                  onError: function(a) {
                    setTimeout(function() {
                      b.logger({
                        code: a,
                        funcName: "setMessageExtra"
                      }),
                        d.onError(a)
                    })
                  }
                })
              },
              b.prototype.setMessageReceivedStatus = function(a, c, d) {
                b._dataAccessProvider.setMessageReceivedStatus(a, c, {
                  onSuccess: function(a) {
                    setTimeout(function() {
                      d.onSuccess(a)
                    })
                  },
                  onError: function(a) {
                    setTimeout(function() {
                      b.logger({
                        code: a,
                        funcName: "setMessageReceivedStatus"
                      }),
                        d.onError(a)
                    })
                  }
                })
              },
              b.prototype.setMessageStatus = function(a, c, d, e, f) {
                b._dataAccessProvider.setMessageStatus(a, c, d, e, b.logCallback(f, "setMessageStatus"))
              },
              b.prototype.setMessageSentStatus = function(a, c, d) {
                b._dataAccessProvider.setMessageSentStatus(a, c, {
                  onSuccess: function(a) {
                    setTimeout(function() {
                      d.onSuccess(a)
                    })
                  },
                  onError: function(a) {
                    setTimeout(function() {
                      b.logger({
                        code: a,
                        funcName: "setMessageSentStatus"
                      }),
                        d.onError(a)
                    })
                  }
                })
              },
              b.prototype.clearTextMessageDraft = function(c, d) {
                a.CheckParam.getInstance().check(["number", "string|number", "object"], "clearTextMessageDraft", !1, arguments);
                var e = "darf_" + c + "_" + d;
                return delete b._memoryStore[e],
                  !0
              },
              b.prototype.getTextMessageDraft = function(c, d) {
                if (a.CheckParam.getInstance().check(["number", "string|number", "object"], "getTextMessageDraft", !1, arguments), "" == d || c < 0) throw new Error("params error : " + a.ErrorCode.DRAF_GET_ERROR);
                var e = "darf_" + c + "_" + d;
                return b._memoryStore[e]
              },
              b.prototype.saveTextMessageDraft = function(c, d, e) {
                a.CheckParam.getInstance().check(["number", "string|number", "string", "object"], "saveTextMessageDraft", !1, arguments);
                var f = "darf_" + c + "_" + d;
                return b._memoryStore[f] = e,
                  !0
              },
              b.prototype.searchConversationByContent = function(a, c, d) {
                b._dataAccessProvider.searchConversationByContent(a, b.logCallback(c, "searchConversationByContent"), d)
              },
              b.prototype.searchMessageByContent = function(a, c, d, e, f, g, h) {
                b._dataAccessProvider.searchMessageByContent(a, c, d, e, f, g, b.logCallback(h, "searchMessageByContent"))
              },
              b.prototype.clearCache = function() {
                b._dataAccessProvider.clearCache()
              },
              b.prototype.clearConversations = function(c) {
                for (var d = [], e = 1; e < arguments.length; e++) d[e - 1] = arguments[e];
                0 == d.length && (d = [a.ConversationType.CHATROOM, a.ConversationType.CUSTOMER_SERVICE, a.ConversationType.DISCUSSION, a.ConversationType.GROUP, a.ConversationType.PRIVATE, a.ConversationType.SYSTEM, a.ConversationType.PUBLIC_SERVICE, a.ConversationType.APP_PUBLIC_SERVICE]),
                  b._dataAccessProvider.clearConversations(d, {
                    onSuccess: function(a) {
                      setTimeout(function() {
                        c.onSuccess(a)
                      })
                    },
                    onError: function(a) {
                      setTimeout(function() {
                        b.logger({
                          code: a,
                          funcName: "clearConversations"
                        }),
                          c.onError(a)
                      })
                    }
                  })
              },
              b.prototype.getConversation = function(c, d, e) {
                a.CheckParam.getInstance().check(["number", "string|number", "object"], "getConversation", !1, arguments),
                  b._dataAccessProvider.getConversation(c, d, {
                    onSuccess: function(a) {
                      setTimeout(function() {
                        e.onSuccess(a)
                      })
                    },
                    onError: function(a) {
                      setTimeout(function() {
                        b.logger({
                          code: a,
                          funcName: "getConversation"
                        }),
                          e.onError(a)
                      })
                    }
                  })
              },
              b.prototype.pottingConversation = function(c) {
                var d = this,
                  e = !1;
                b._dataAccessProvider.getConversation(c.type, c.userId, {
                  onSuccess: function(f) {
                    f ? e = !0 : f = new a.Conversation,
                      f.conversationType = c.type,
                      f.targetId = c.userId,
                      f.latestMessage = a.MessageUtil.messageParser(c.msg),
                      f.latestMessageId = f.latestMessage.messageId,
                      f.objectName = f.latestMessage.objectName,
                      f.receivedStatus = f.latestMessage.receivedStatus,
                      f.receivedTime = f.latestMessage.receiveTime,
                      f.sentStatus = f.latestMessage.sentStatus,
                      f.sentTime = f.latestMessage.sentTime;
                    var g = b._storageProvider.getItem("mentioneds_" + a.Bridge._client.userId + "_" + f.conversationType + "_" + f.targetId);
                    if (g) {
                      var h = JSON.parse(g);
                      f.mentionedMsg = h[c.type + "_" + c.userId]
                    }
                    if (!e) if (a.RongUtil.supportLocalStorage()) {
                      var i = b._storageProvider.getItem("cu" + a.Bridge._client.userId + c.type + c.userId);
                      f.unreadMessageCount = Number(i)
                    } else f.unreadMessageCount = 0;
                    f.conversationType == a.ConversationType.DISCUSSION && d.getDiscussion(c.userId, {
                      onSuccess: function(a) {
                        f.conversationTitle = a.name
                      },
                      onError: function(a) {}
                    }),
                      b._dataAccessProvider.addConversation(f, {
                        onSuccess: function(a) {}
                      })
                  },
                  onError: function(a) {}
                })
              },
              b.prototype.addConversation = function(a, c) {
                b._dataAccessProvider.addConversation(a, c)
              },
              b.prototype.sortConversationList = function(a) {
                for (var c = [], d = 0, e = a.length; d < e; d++) if (a[d]) if (a[d].isTop) c.push(a[d]),
                  a.splice(d, 1);
                else for (var f = 0; f < e - d - 1; f++) if (a[f].sentTime < a[f + 1].sentTime) {
                    var g = a[f];
                    a[f] = a[f + 1],
                      a[f + 1] = g
                  }
                return b._memoryStore.conversationList = c.concat(a)
              },
              b.prototype.getConversationList = function(c, d, e, f) {
                a.CheckParam.getInstance().check(["object", "null|undefined|array|object|global", "number|undefined|null|object|global", "boolean|undefined|null|object|global"], "getConversationList", !1, arguments);
                b._dataAccessProvider.getConversationList({
                    onSuccess: function(a) {
                      d || b._dataAccessProvider ? setTimeout(function() {
                        c.onSuccess(a)
                      }) : setTimeout(function() {
                        c.onSuccess(b._memoryStore.conversationList)
                      })
                    },
                    onError: function(a) {
                      setTimeout(function() {
                        b.logger({
                          code: a,
                          funcName: "getConversationList"
                        }),
                          c.onError(a)
                      })
                    }
                  },
                  d, e, f)
              },
              b.prototype.getRemoteConversationList = function(c, d, e, f) {
                a.CheckParam.getInstance().check(["object", "null|array|object|global", "number|undefined|null|object|global", "boolean|undefined|null|object|global"], "getRemoteConversationList", !1, arguments),
                  b._dataAccessProvider.getRemoteConversationList(b.logCallback(c, "getRemoteConversationList"), d, e, f)
              },
              b.prototype.updateConversation = function(a) {
                return b._dataAccessProvider.updateConversation(a)
              },
              b.prototype.createConversation = function(b, c, d) {
                a.CheckParam.getInstance().check(["number", "string|number", "string"], "createConversation", !1, arguments);
                var e = new a.Conversation;
                return e.targetId = c,
                  e.conversationType = b,
                  e.conversationTitle = d,
                  e.latestMessage = {},
                  e.unreadMessageCount = 0,
                  e
              },
              b.prototype.removeConversation = function(c, d, e) {
                a.CheckParam.getInstance().check(["number", "string|number", "object"], "removeConversation", !1, arguments),
                  b._dataAccessProvider.removeConversation(c, d, b.logCallback(e, "removeConversation"))
              },
              b.prototype.setConversationHidden = function(c, d, e) {
                a.CheckParam.getInstance().check(["number", "string|number", "boolean"], "setConversationHidden", !1, arguments),
                  b._dataAccessProvider.setConversationHidden(c, d, e)
              },
              b.prototype.setConversationToTop = function(c, d, e, f) {
                a.CheckParam.getInstance().check(["number", "string|number", "boolean", "object"], "setConversationToTop", !1, arguments),
                  b._dataAccessProvider.setConversationToTop(c, d, e, {
                    onSuccess: function(a) {
                      setTimeout(function() {
                        f.onSuccess(a)
                      })
                    },
                    onError: function(a) {
                      setTimeout(function() {
                        b.logger({
                          code: a,
                          funcName: "setConversationToTop"
                        }),
                          f.onError(a)
                      })
                    }
                  })
              },
              b.prototype.getConversationNotificationStatus = function(a, c, d) {
                var e = {
                  conversationType: a,
                  targetId: c
                };
                b._dataAccessProvider.getConversationNotificationStatus(e, b.logCallback(d, "getConversationNotificationStatus"))
              },
              b.prototype.setConversationNotificationStatus = function(a, c, d, e) {
                var f = {
                  conversationType: a,
                  targetId: c,
                  status: status
                };
                b._dataAccessProvider.setConversationNotificationStatus(f, b.logCallback(e, "setConversationNotificationStatus"))
              },
              b.prototype.getNotificationQuietHours = function(a) {
                throw new Error("Not implemented yet")
              },
              b.prototype.removeNotificationQuietHours = function(a) {
                throw new Error("Not implemented yet")
              },
              b.prototype.setNotificationQuietHours = function(a, b, c) {
                throw new Error("Not implemented yet")
              },
              b.prototype.addMemberToDiscussion = function(c, d, e) {
                a.CheckParam.getInstance().check(["string", "array", "object"], "addMemberToDiscussion", !1, arguments),
                  b._dataAccessProvider.addMemberToDiscussion(c, d, b.logCallback(e, "addMemberToDiscussion"))
              },
              b.prototype.createDiscussion = function(c, d, e) {
                a.CheckParam.getInstance().check(["string", "array", "object"], "createDiscussion", !1, arguments),
                  b._dataAccessProvider.createDiscussion(c, d, e)
              },
              b.prototype.getDiscussion = function(c, d) {
                a.CheckParam.getInstance().check(["string", "object"], "getDiscussion", !1, arguments),
                  b._dataAccessProvider.getDiscussion(c, b.logCallback(d, "getDiscussion"))
              },
              b.prototype.quitDiscussion = function(c, d) {
                a.CheckParam.getInstance().check(["string", "object"], "quitDiscussion", !1, arguments),
                  b._dataAccessProvider.quitDiscussion(c, b.logCallback(d, "quitDiscussion"))
              },
              b.prototype.removeMemberFromDiscussion = function(c, d, e) {
                a.CheckParam.getInstance().check(["string", "string", "object"], "removeMemberFromDiscussion", !1, arguments),
                  b._dataAccessProvider.removeMemberFromDiscussion(c, d, b.logCallback(e, "removeMemberFromDiscussion"))
              },
              b.prototype.setDiscussionInviteStatus = function(c, d, e) {
                a.CheckParam.getInstance().check(["string", "number", "object"], "setDiscussionInviteStatus", !1, arguments),
                  b._dataAccessProvider.setDiscussionInviteStatus(c, d, b.logCallback(e, "setDiscussionInviteStatus"))
              },
              b.prototype.setDiscussionName = function(c, d, e) {
                a.CheckParam.getInstance().check(["string", "string", "object"], "setDiscussionName", !1, arguments),
                  b._dataAccessProvider.setDiscussionName(c, d, b.logCallback(e, "setDiscussionName"))
              },
              b.prototype.joinChatRoom = function(c, d, e) {
                if (a.CheckParam.getInstance().check(["string|number", "number", "object"], "joinChatRoom", !1, arguments), "" == c) return void setTimeout(function() {
                  var c = a.ErrorCode.CHATROOM_ID_ISNULL;
                  b.logger({
                    code: c,
                    funcName: "joinChatRoom"
                  }),
                    e.onError(a.ErrorCode.CHATROOM_ID_ISNULL)
                });
                b._dataAccessProvider.joinChatRoom(c, d, b.logCallback(e, "joinChatRoom"))
              },
              b.prototype.setDeviceInfo = function(a) {
                b._dataAccessProvider.setDeviceInfo(a)
              },
              b.prototype.setChatroomHisMessageTimestamp = function(c, d) {
                a.CheckParam.getInstance().check(["string|number", "number"], "setChatroomHisMessageTimestamp", !1, arguments),
                  b._dataAccessProvider.setChatroomHisMessageTimestamp(c, d)
              },
              b.prototype.getChatRoomHistoryMessages = function(c, d, e, f) {
                a.CheckParam.getInstance().check(["string|number", "number", "number", "object"], "getChatRoomHistoryMessages", !1, arguments),
                  b._dataAccessProvider.getChatRoomHistoryMessages(c, d, e, b.logCallback(f, "getChatRoomHistoryMessages"))
              },
              b.prototype.getChatRoomInfo = function(c, d, e, f) {
                a.CheckParam.getInstance().check(["string|number", "number", "number", "object"], "getChatRoomInfo", !1, arguments),
                  b._dataAccessProvider.getChatRoomInfo(c, d, e, b.logCallback(f, "getChatRoomInfo"))
              },
              b.prototype.quitChatRoom = function(c, d) {
                a.CheckParam.getInstance().check(["string|number", "object"], "quitChatRoom", !1, arguments),
                  b._dataAccessProvider.quitChatRoom(c, b.logCallback(d, "quitChatRoom"))
              },
              b.prototype.getRemotePublicServiceList = function(a, c) {
                b._dataAccessProvider.getRemotePublicServiceList(b.logCallback(a, "getRemotePublicServiceList"), c)
              },
              b.prototype.getPublicServiceList = function(c) {
                b._memoryStore.depend.openMp && (a.CheckParam.getInstance().check(["object"], "getPublicServiceList", !1, arguments), this.getRemotePublicServiceList(b.logCallback(c, "getPublicServiceList")))
              },
              b.prototype.getPublicServiceProfile = function(c, d, e) {
                b._memoryStore.depend.openMp && (a.CheckParam.getInstance().check(["number", "string|number", "object"], "getPublicServiceProfile", !1, arguments), b._dataAccessProvider.getPublicServiceProfile(c, d, b.logCallback(e, "getPublicServiceProfile")))
              },
              b.prototype.pottingPublicSearchType = function(a, c) {
                if (b._memoryStore.depend.openMp) {
                  var d = 0;
                  return 0 == a ? (d |= 3, d |= 0 == c ? 12 : 48) : 1 == a ? (d |= 1, d |= 0 == c ? 8 : 32) : (d |= 2, d |= 0 == a ? 4 : 16),
                    d
                }
              },
              b.prototype.searchPublicService = function(c, d, e) {
                if (b._memoryStore.depend.openMp) {
                  a.CheckParam.getInstance().check(["number", "string", "object"], "searchPublicService", !1, arguments);
                  var f = new b.Protobuf.SearchMpInput;
                  f.setType(this.pottingPublicSearchType(0, c)),
                    f.setId(d),
                    b.bridge.queryMsg(29, a.MessageUtil.ArrayForm(f.toArrayBuffer()), a.Bridge._client.userId, b.logCallback(e, "searchPublicService"), "SearchMpOutput")
                }
              },
              b.prototype.searchPublicServiceByType = function(c, d, e, f) {
                if (b._memoryStore.depend.openMp) {
                  a.CheckParam.getInstance().check(["number", "number", "string", "object"], "searchPublicServiceByType", !1, arguments);
                  var g = c == a.ConversationType.APP_PUBLIC_SERVICE ? 2 : 1,
                    h = new b.Protobuf.SearchMpInput;
                  h.setType(this.pottingPublicSearchType(g, d)),
                    h.setId(e),
                    b.bridge.queryMsg(29, a.MessageUtil.ArrayForm(h.toArrayBuffer()), a.Bridge._client.userId, b.logCallback(f, "searchPublicServiceByType"), "SearchMpOutput")
                }
              },
              b.prototype.subscribePublicService = function(c, d, e) {
                if (b._memoryStore.depend.openMp) {
                  a.CheckParam.getInstance().check(["number", "string|number", "object"], "subscribePublicService", !1, arguments);
                  var f = new b.Protobuf.MPFollowInput,
                    g = this,
                    h = c == a.ConversationType.APP_PUBLIC_SERVICE ? "mcFollow": "mpFollow";
                  f.setId(d),
                    b.bridge.queryMsg(h, a.MessageUtil.ArrayForm(f.toArrayBuffer()), a.Bridge._client.userId, {
                        onSuccess: function() {
                          g.getRemotePublicServiceList({
                            onSuccess: function() {},
                            onError: function() {}
                          }),
                            e.onSuccess()
                        },
                        onError: function(a) {
                          var c = a;
                          b.logger({
                            code: c,
                            funcName: "subscribePublicService"
                          }),
                            e.onError(a)
                        }
                      },
                      "MPFollowOutput")
                }
              },
              b.prototype.unsubscribePublicService = function(c, d, e) {
                if (b._memoryStore.depend.openMp) {
                  a.CheckParam.getInstance().check(["number", "string|number", "object"], "unsubscribePublicService", !1, arguments);
                  var f = new b.Protobuf.MPFollowInput,
                    g = c == a.ConversationType.APP_PUBLIC_SERVICE ? "mcUnFollow": "mpUnFollow";
                  f.setId(d),
                    b.bridge.queryMsg(g, a.MessageUtil.ArrayForm(f.toArrayBuffer()), a.Bridge._client.userId, {
                        onSuccess: function() {
                          b._memoryStore.publicServiceMap.remove(c, d),
                            e.onSuccess()
                        },
                        onError: function(a) {
                          var c = a;
                          b.logger({
                            code: c,
                            funcName: "unsubscribePublicService"
                          }),
                            e.onError(a)
                        }
                      },
                      "MPFollowOutput")
                }
              },
              b.prototype.addToBlacklist = function(c, d) {
                a.CheckParam.getInstance().check(["string|number", "object"], "addToBlacklist", !1, arguments),
                  b._dataAccessProvider.addToBlacklist(c, b.logCallback(d, "addToBlacklist"))
              },
              b.prototype.getBlacklist = function(c) {
                a.CheckParam.getInstance().check(["object"], "getBlacklist", !1, arguments),
                  b._dataAccessProvider.getBlacklist(c)
              },
              b.prototype.getBlacklistStatus = function(c, d) {
                a.CheckParam.getInstance().check(["string|number", "object"], "getBlacklistStatus", !1, arguments),
                  b._dataAccessProvider.getBlacklistStatus(c, b.logCallback(d, "getBlacklistStatus"))
              },
              b.prototype.removeFromBlacklist = function(c, d) {
                a.CheckParam.getInstance().check(["string|number", "object"], "removeFromBlacklist", !1, arguments),
                  b._dataAccessProvider.removeFromBlacklist(c, b.logCallback(d, "removeFromBlacklist"))
              },
              b.prototype.getFileToken = function(c, d) {
                a.CheckParam.getInstance().check(["number", "object"], "getQngetFileTokenTkn", !1, arguments),
                  b._dataAccessProvider.getFileToken(c, b.logCallback(d, "getFileToken"))
              },
              b.prototype.getFileUrl = function(c, d, e, f) {
                a.CheckParam.getInstance().check(["number", "string", "string|global|object|null", "object"], "getFileUrl", !1, arguments),
                  b._dataAccessProvider.getFileUrl(c, d, e, b.logCallback(f, "getFileUrl"))
              },
              b.prototype.addRealTimeLocationListener = function(a, b, c) {
                throw new Error("Not implemented yet")
              },
              b.prototype.getRealTimeLocation = function(a, b) {
                throw new Error("Not implemented yet")
              },
              b.prototype.getRealTimeLocationCurrentState = function(a, b) {
                throw new Error("Not implemented yet")
              },
              b.prototype.getRealTimeLocationParticipants = function(a, b) {
                throw new Error("Not implemented yet")
              },
              b.prototype.joinRealTimeLocation = function(a, b) {
                throw new Error("Not implemented yet")
              },
              b.prototype.quitRealTimeLocation = function(a, b) {
                throw new Error("Not implemented yet")
              },
              b.prototype.startRealTimeLocation = function(a, b) {
                throw new Error("Not implemented yet")
              },
              b.prototype.updateRealTimeLocationStatus = function(a, b, c, d) {
                throw new Error("Not implemented yet")
              },
              b.prototype.startCall = function(c, d, e, f, g, h) {
                if (a.CheckParam.getInstance().check(["number", "string|number", "array", "number", "string", "object"], "startCall", !1, arguments), b._memoryStore.voipStategy) b._voipProvider.startCall(c, d, e, f, g, b.logCallback(h, "startCall"));
                else {
                  var i = a.ErrorCode.VOIP_NOT_AVALIABLE;
                  b.logger({
                    code: i,
                    funcName: "startCall"
                  }),
                    h.onError(a.ErrorCode.VOIP_NOT_AVALIABLE)
                }
              },
              b.prototype.joinCall = function(c, d) {
                if (a.CheckParam.getInstance().check(["number", "object"], "joinCall", !1, arguments), b._memoryStore.voipStategy) b._voipProvider.joinCall(c, b.logCallback(d, "joinCall"));
                else {
                  var e = a.ErrorCode.VOIP_NOT_AVALIABLE;
                  b.logger({
                    code: e,
                    funcName: "joinCall"
                  }),
                    d.onError(a.ErrorCode.VOIP_NOT_AVALIABLE)
                }
              },
              b.prototype.hungupCall = function(c, d, e) {
                a.CheckParam.getInstance().check(["number", "string", "number"], "hungupCall", !1, arguments),
                b._memoryStore.voipStategy && b._voipProvider.hungupCall(c, d, e)
              },
              b.prototype.changeMediaType = function(c, d, e, f) {
                if (a.CheckParam.getInstance().check(["number", "string", "number", "object"], "changeMediaType", !1, arguments), b._memoryStore.voipStategy) b._voipProvider.changeMediaType(c, d, e, b.logCallback(f, "changeMediaType"));
                else {
                  var g = a.ErrorCode.VOIP_NOT_AVALIABLE;
                  b.logger({
                    code: g,
                    funcName: "changeMediaType"
                  }),
                    f.onError(a.ErrorCode.VOIP_NOT_AVALIABLE)
                }
              },
              b.prototype.getUnreadMentionedMessages = function(a, c) {
                return b._dataAccessProvider.getUnreadMentionedMessages(a, c)
              },
              b.prototype.clearListeners = function() {
                b._dataAccessProvider.clearListeners()
              },
              b.prototype.getUserStatus = function(a, c) {
                b._dataAccessProvider.getUserStatus(a, b.logCallback(c, "getUserStatus"))
              },
              b.prototype.setUserStatus = function(a, c) {
                b._dataAccessProvider.setUserStatus(a, b.logCallback(c, "setUserStatus"))
              },
              b.prototype.setUserStatusListener = function(a, c) {
                var d = a.userIds,
                  e = a.multiple;
                b.userStatusObserver.watch({
                  key: d,
                  func: c,
                  multiple: e
                }),
                  b._dataAccessProvider.setUserStatusListener(a, c)
              },
              b.messageWatch = function(a) {
                b.RTCListener = a
              },
              b.prototype.getRTCUserInfoList = function(c, d) {
                a.CheckParam.getInstance().check(["object", "object"], "getRTCUserInfoList", !1, arguments),
                  b._dataAccessProvider.getRTCUserInfoList(c, d)
              },
              b.prototype.getRTCUserList = function(c, d) {
                a.CheckParam.getInstance().check(["object", "object"], "getRTCUserList", !1, arguments),
                  b._dataAccessProvider.getRTCUserList(c, d)
              },
              b.prototype.setRTCUserInfo = function(c, d, e) {
                a.CheckParam.getInstance().check(["object", "object", "object"], "setRTCUserInfo", !1, arguments),
                  b._dataAccessProvider.setRTCUserInfo(c, d, e)
              },
              b.prototype.removeRTCUserInfo = function(c, d, e) {
                a.CheckParam.getInstance().check(["object", "object", "object"], "removeRTCUserInfo", !1, arguments),
                  b._dataAccessProvider.removeRTCUserInfo(c, d, e)
              },
              b.prototype.getRTCRoomInfo = function(c, d) {
                a.CheckParam.getInstance().check(["object", "object"], "getRTCRoomInfo", !1, arguments),
                  b._dataAccessProvider.getRTCRoomInfo(c, d)
              },
              b.prototype.setRTCRoomInfo = function(c, d, e) {
                a.CheckParam.getInstance().check(["object", "object", "object"], "setRTCRoomInfo", !1, arguments),
                  b._dataAccessProvider.setRTCRoomInfo(c, d, e)
              },
              b.prototype.removeRTCRoomInfo = function(c, d, e) {
                a.CheckParam.getInstance().check(["object", "object", "object"], "removeRTCRoomInfo", !1, arguments),
                  b._dataAccessProvider.removeRTCRoomInfo(c, d, e)
              },
              b.prototype.joinRTCRoom = function(c, d) {
                a.CheckParam.getInstance().check(["object", "object"], "joinRTCRoom", !1, arguments),
                  b._dataAccessProvider.joinRTCRoom(c, d)
              },
              b.prototype.quitRTCRoom = function(c, d) {
                a.CheckParam.getInstance().check(["object", "object"], "quitRTCRoom", !1, arguments),
                  b._dataAccessProvider.quitRTCRoom(c, d)
              },
              b.prototype.RTCPing = function(c, d) {
                a.CheckParam.getInstance().check(["object", "object"], "RTCPing", !1, arguments),
                  b._dataAccessProvider.RTCPing(c, d)
              },
              b.prototype.setRTCUserData = function(c, d, e, f, g, h) {
                a.CheckParam.getInstance().check(["string", "string", "string", "boolean", "object", "global|object|null|undefined"], "setRTCUserData", !1, arguments),
                  b._dataAccessProvider.setRTCUserData(c, d, e, f, g, h)
              },
              b.prototype.getRTCUserData = function(c, d, e, f) {
                a.CheckParam.getInstance().check(["string", "array", "boolean", "object", "global|object|null"], "getRTCUserData", !1, arguments),
                  b._dataAccessProvider.getRTCUserData(c, d, e, f)
              },
              b.prototype.removeRTCUserData = function(c, d, e, f, g) {
                a.CheckParam.getInstance().check(["string", "array", "boolean", "object", "global|object|null|undefined"], "removeRTCUserData", !1, arguments),
                  b._dataAccessProvider.removeRTCUserData(c, d, e, f, g)
              },
              b.prototype.setRTCRoomData = function(c, d, e, f, g, h) {
                a.CheckParam.getInstance().check(["string", "string", "string", "boolean", "object", "global|object|null|undefined"], "setRTCRoomData", !1, arguments),
                  b._dataAccessProvider.setRTCRoomData(c, d, e, f, g, h)
              },
              b.prototype.getRTCRoomData = function(c, d, e, f) {
                a.CheckParam.getInstance().check(["string", "array", "boolean", "object"], "getRTCRoomData", !1, arguments),
                  b._dataAccessProvider.getRTCRoomData(c, d, e, f)
              },
              b.prototype.removeRTCRoomData = function(c, d, e, f, g) {
                a.CheckParam.getInstance().check(["string", "array", "boolean", "object", "global|object|null|undefined"], "removeRTCRoomData", !1, arguments),
                  b._dataAccessProvider.removeRTCRoomData(c, d, e, f, g)
              },
              b.prototype.getNavi = function() {
                return b._dataAccessProvider.getNavi()
              },
              b.prototype.getRTCToken = function(c, d) {
                return a.CheckParam.getInstance().check(["object", "object"], "getRTCToken", !1, arguments),
                  b._dataAccessProvider.getRTCToken(c, d)
              },
              b.prototype.getAppInfo = function() {
                return {
                  appKey: b._memoryStore.appKey
                }
              },
              b.RTCListener = function() {},
              b.currentServer = "",
              b.LogFactory = {},
              b.MessageType = {},
              b.RegisterMessage = {},
              b._memoryStore = {
                listenerList: [],
                isPullFinished: !1,
                syncMsgQueue: []
              },
              b.isNotPullMsg = !1,
              b.userStatusObserver = null,
              b.sdkver = "2.5.0",
              b.otherDeviceLoginCount = 0,
              b.serverStore = {
                index: 0
              },
              b.isFirstConnect = !0,
              b.statusListeners = [],
              b.userStatusListener = null,
              b
          } ();
          a.RongIMClient = b
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) { !
          function(a) {
            a[a.AT_MOST_ONCE = 0] = "AT_MOST_ONCE",
              a[a.AT_LEAST_ONCE = 1] = "AT_LEAST_ONCE",
              a[a.EXACTLY_ONCE = 2] = "EXACTLY_ONCE",
              a[a.DEFAULT = 3] = "DEFAULT"
          } (a.Qos || (a.Qos = {}));
          var b = a.Qos; !
            function(a) {
              a[a.CONNECT = 1] = "CONNECT",
                a[a.CONNACK = 2] = "CONNACK",
                a[a.PUBLISH = 3] = "PUBLISH",
                a[a.PUBACK = 4] = "PUBACK",
                a[a.QUERY = 5] = "QUERY",
                a[a.QUERYACK = 6] = "QUERYACK",
                a[a.QUERYCON = 7] = "QUERYCON",
                a[a.SUBSCRIBE = 8] = "SUBSCRIBE",
                a[a.SUBACK = 9] = "SUBACK",
                a[a.UNSUBSCRIBE = 10] = "UNSUBSCRIBE",
                a[a.UNSUBACK = 11] = "UNSUBACK",
                a[a.PINGREQ = 12] = "PINGREQ",
                a[a.PINGRESP = 13] = "PINGRESP",
                a[a.DISCONNECT = 14] = "DISCONNECT"
            } (a.Type || (a.Type = {}));
          var c = (a.Type, ["invtDiz", "crDiz", "qnUrl", "userInf", "dizInf", "userInf", "joinGrp", "quitDiz", "exitGrp", "evctDiz", ["", "ppMsgP", "pdMsgP", "pgMsgP", "chatMsg", "pcMsgP", "", "pmcMsgN", "pmpMsgN", "", "", "", "prMsgS"], "pdOpen", "rename", "uGcmpr", "qnTkn", "destroyChrm", "createChrm", "exitChrm", "queryChrm", "joinChrm", "pGrps", "addBlack", "rmBlack", "getBlack", "blackStat", "addRelation", "qryRelation", "delRelation", "pullMp", "schMp", "qnTkn", "qnUrl", "qryVoipK", "delMsg", "qryCHMsg", "getUserStatus", "setUserStatus", "subUserStatus", "cleanHisMsg"]),
            d = function() {
              function b(c, d) {
                this.connectionStatus = -1;
                var f = d.appId,
                  g = encodeURIComponent(d.token),
                  h = d.sdkVer,
                  i = d.apiVer;
                this.self = d,
                  this.socket = e.getInstance().createServer();
                var j = this,
                  k = a.RongIMClient._storageProvider,
                  l = k.getItem("servers");
                l = JSON.parse(l) || [];
                var m = a.RongIMClient._memoryStore.depend,
                  n = function(b) {
                    j.url = a.RongUtil.tplEngine("{host}/websocket?appId={appId}&token={token}&sdkVer={sdkVer}&apiVer={apiVer}", {
                      host: b,
                      appId: f,
                      token: g,
                      sdkVer: h,
                      apiVer: i
                    }),
                      j.socket.connect(j.url, c);
                    var d = k.getItem("rong_current_user");
                    a.Navigation.Endpoint = {
                      host: b,
                      userId: d
                    }
                  }; ({
                  ws: function() {
                    for (var b = new a.Timer({
                        timeout: 15e3
                      }), c = [], d = [], e = !1, f = function() {
                        for (var a = 0; a < c.length; a++) {
                          var b = c[a];
                          clearTimeout(b)
                        }
                        for (var a = 0; a < d.length; a++) {
                          d[a].abort()
                        }
                        c.length = 0,
                          d.length = 0
                      },
                           g = function(g, h) {
                             var i = g.url,
                               j = g.time;
                             if (!e) {
                               var k = setTimeout(function() {
                                   var c = function() {
                                       e || (f(), e = !0, b.pause(), h(i))
                                     },
                                     g = a.MessageUtil.detectCMP({
                                       url: i,
                                       success: c,
                                       fail: function(a) {
                                         console.log(a)
                                       }
                                     });
                                   d.push(g)
                                 },
                                 j);
                               c.push(k)
                             }
                           },
                           h = function(b) {
                             var c = /(http|https):\/\/([^\/]+)/i,
                               d = b.match(c)[2];
                             a.RongIMClient.currentServer = d,
                               n(d)
                           },
                           i = "{protocol}{server}/ping?r={random}", k = 0; k < l.length; k++) {
                      var o = l[k];
                      o && (o = a.RongUtil.tplEngine(i, {
                        protocol: m.protocol,
                        server: o,
                        random: a.RongUtil.getTimestamp()
                      }), g({
                          url: o,
                          time: 1e3 * k
                        },
                        h))
                    }
                    b.resume(function() {
                      a.Navigation.clear(),
                        f(),
                        j.socket.fire("StatusChanged", a.ConnectionStatus.NETWORK_UNAVAILABLE)
                    })
                  },
                  comet: function() {
                    var a = l[0];
                    n(a)
                  }
                })[m.isPolling ? "comet": "ws"]();
                var o = b._ConnectionStatusListener,
                  p = "object" == typeof o,
                  q = this;
                q.socket.on("StatusChanged",
                  function(b) {
                    if (!p) throw new Error("setConnectStatusListener:Parameter format is incorrect");
                    var c = b == a.ConnectionStatus.NETWORK_UNAVAILABLE,
                      e = !a.RongIMClient._memoryStore.depend.isPolling;
                    if (a.RongIMClient.isFirstConnect && c && e && (b = a.ConnectionStatus.WEBSOCKET_UNAVAILABLE), c) {
                      var f = a.RongIMClient._storageProvider,
                        g = f.getItem("servers");
                      g = JSON.parse(g);
                      var h = a.RongIMClient.currentServer;
                      if (h) {
                        var i = a.RongUtil.indexOf(g, h);
                        if (!a.RongUtil.isEqual(i, -1)) {
                          var j = g.splice(i, 1)[0];
                          g.push(j),
                            f.setItem("servers", JSON.stringify(g))
                        }
                      }
                    }
                    q.connectionStatus = b,
                      setTimeout(function() {
                        o.onChanged(b)
                      }),
                    b == a.ConnectionStatus.DISCONNECTED && d.clearHeartbeat(),
                    b == a.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT && a.RongIMClient.otherDeviceLoginCount++,
                    b == a.ConnectionStatus.CONNECTED && (a.RongIMClient.isFirstConnect = !1),
                    b == a.ConnectionStatus.WEBSOCKET_UNAVAILABLE && (q.changeConnectType(), a.RongIMClient.isFirstConnect = !1, a.RongIMClient.connect(d.token, a.RongIMClient._memoryStore.callback))
                  }),
                  this.socket.on("message", d.handler.handleMessage),
                  this.socket.on("disconnect",
                    function(a) {
                      j.socket.fire("StatusChanged", a || 2)
                    })
              }
              return b.prototype.changeConnectType = function() {
                a.RongIMClient._memoryStore.depend.isPolling = !a.RongIMClient._memoryStore.depend.isPolling,
                  new a.FeatureDectector
              },
                b.prototype.writeAndFlush = function(a) {
                  this.socket.send(a)
                },
                b.prototype.reconnect = function(b) {
                  a.MessageIdHandler.clearMessageId(),
                    this.socket = this.socket.reconnect(),
                  b && (this.self.reconnectObj = b)
                },
                b.prototype.disconnect = function(a) {
                  this.socket.disconnect(a)
                },
                b
            } ();
          a.Channel = d;
          var e = function() {
            function b() {
              this.socket = null,
                this._events = {}
            }
            return b.getInstance = function() {
              return new b
            },
              b.prototype.connect = function(b, c) {
                return this.socket && (b && (a.RongIMClient._storageProvider.setItem("rongSDK", this.checkTransport()), this.on("connect", c || new Function)), b && (this.currentURL = b), this.socket.createTransport(b)),
                  this
              },
              b.prototype.createServer = function() {
                var a = this.getTransport(this.checkTransport());
                if (null === a) throw new Error("the channel was not supported");
                return a
              },
              b.prototype.getTransport = function(c) {
                return c == b.XHR_POLLING ? this.socket = new a.PollingTransportation(this) : c == b.WEBSOCKET && (this.socket = new a.SocketTransportation(this)),
                  this
              },
              b.prototype.send = function(a) {
                this.socket && (this.checkTransport() == b.WEBSOCKET ? this.socket.send(a) : this.socket.send(this._encode(a)))
              },
              b.prototype.onMessage = function(a) {
                this.fire("message", a)
              },
              b.prototype.disconnect = function(a) {
                return this.socket.disconnect(a),
                  this.fire("disconnect", a),
                  this
              },
              b.prototype.reconnect = function() {
                if (this.currentURL && a.RongIMClient._storageProvider.getItem("rongSDK")) return this.connect(this.currentURL, null);
                throw new Error("reconnect:no have URL")
              },
              b.prototype.checkTransport = function() {
                return a.RongIMClient._memoryStore.depend.isPolling && (a.Transportations._TransportType = b.XHR_POLLING),
                  a.Transportations._TransportType
              },
              b.prototype.fire = function(a, b) {
                if (a in this._events) for (var c = 0,
                                              d = this._events[a].length; c < d; c++) this._events[a][c](b);
                return this
              },
              b.prototype.on = function(b, c) {
                return "function" == typeof c && b ? (b in this._events ? -1 == a.MessageUtil.indexOf(this._events, c) && this._events[b].push(c) : this._events[b] = [c], this) : this
              },
              b.prototype.removeEvent = function(a, b) {
                if (a in this._events) for (var c = 0,
                                              d = this._events[a].length; c < d; c++) this._events[a][c] == b && this._events[a].splice(c, 1);
                return this
              },
              b.prototype._encode = function(b) {
                var c = "?messageid=" + b.getMessageId() + "&header=" + b.getHeaderFlag() + "&sessionid=" + a.RongIMClient._storageProvider.getItem("sId" + a.Navigation.Endpoint.userId);
                return /(PubAckMessage|QueryConMessage)/.test(b._name) || (c += "&topic=" + b.getTopic() + "&targetid=" + (b.getTargetId() || "")),
                  {
                    url: c,
                    data: "getData" in b ? b.getData() : ""
                  }
              },
              b.XHR_POLLING = "xhr-polling",
              b.WEBSOCKET = "websocket",
              b
          } ();
          a.Socket = e;
          var f = function() {
            function c(b, c) {
              this.timeoutMillis = 6e3,
                this.timeout_ = 0,
                this.sdkVer = "",
                this.apiVer = Math.floor(1e6 * Math.random()),
                this.channel = null,
                this.handler = null,
                this.userId = "",
                this.reconnectObj = {},
                this.heartbeat = 0,
                this.pullMsgHearbeat = 0,
                this.chatroomId = "",
                this.SyncTimeQueue = [],
                this.cacheMessageIds = [],
                this.token = b,
                this.appId = c,
                this.SyncTimeQueue.state = "complete",
                this.sdkVer = a.RongIMClient.sdkver
            }
            return c.prototype.resumeTimer = function() {
              var b = this;
              this.timeout_ = setTimeout(function() {
                  b.channel.disconnect(a.ConnectionStatus.NETWORK_UNAVAILABLE)
                },
                this.timeoutMillis)
            },
              c.prototype.pauseTimer = function() {
                this.timeout_ && (clearTimeout(this.timeout_), this.timeout_ = 0)
              },
              c.prototype.connect = function(b) {
                this.handler = new h(this),
                  this.handler.setConnectCallback(b);
                var c = this;
                this.channel = new d(function() {
                    a.Transportations._TransportType == e.WEBSOCKET && c.keepLive()
                  },
                  this),
                  this.channel.socket.fire("StatusChanged", a.ConnectionStatus.CONNECTING)
              },
              c.prototype.checkSocket = function(b) {
                this.channel.writeAndFlush(new a.PingReqMessage);
                var c = 0,
                  d = setInterval(function() {
                      a.RongIMClient._memoryStore.isFirstPingMsg ? c > 15 && (clearInterval(d), b.onError()) : (clearInterval(d), b.onSuccess()),
                        c++
                    },
                    100)
              },
              c.prototype.keepLive = function() {
                this.heartbeat > 0 && clearInterval(this.heartbeat);
                var b = this;
                b.heartbeat = setInterval(function() {
                    b.resumeTimer(),
                      b.channel.writeAndFlush(new a.PingReqMessage)
                  },
                  3e4),
                b.pullMsgHearbeat > 0 && clearInterval(b.pullMsgHearbeat),
                  b.pullMsgHearbeat = setInterval(function() {
                      b.syncTime(!0, void 0, void 0, !1)
                    },
                    18e4)
              },
              c.prototype.clearHeartbeat = function() {
                clearInterval(this.heartbeat),
                  this.heartbeat = 0,
                  this.pauseTimer(),
                  clearInterval(this.pullMsgHearbeat),
                  this.pullMsgHearbeat = 0
              },
              c.prototype.publishMessage = function(c, d, e, f, g) {
                var h = a.MessageIdHandler.messageIdPlus(this.channel.reconnect);
                if (h) {
                  var i = new a.PublishMessage(c, d, e);
                  i.setMessageId(h),
                    f ? (i.setQos(b.AT_LEAST_ONCE), this.handler.putCallback(new a.PublishCallback(f.onSuccess, f.onError), i.getMessageId(), g)) : i.setQos(b.AT_MOST_ONCE),
                    this.channel.writeAndFlush(i)
                }
              },
              c.prototype.queryMessage = function(b, d, e, f, g, h) {
                if ("userInf" == b && c.userInfoMapping[e]) return void g.onSuccess(c.userInfoMapping[e]);
                var i = a.MessageIdHandler.messageIdPlus(this.channel.reconnect);
                if (i) {
                  var j = new a.QueryMessage(b, d, e);
                  j.setMessageId(i),
                    j.setQos(f),
                    this.handler.putCallback(new a.QueryCallback(g.onSuccess, g.onError), j.getMessageId(), h),
                    this.channel.writeAndFlush(j)
                }
              },
              c.prototype.invoke = function(c, d, e) {
                var f, h, i, j, k = this,
                  l = this.SyncTimeQueue.shift();
                if (void 0 != l) {
                  this.SyncTimeQueue.state = "pending";
                  var m = a.SyncTimeUtil.get(),
                    n = m.sent;
                  if (2 != l.type) f = m.received,
                    h = new a.RongIMClient.Protobuf.SyncRequestMsg,
                    h.setIspolling(!1),
                    i = "pullMsg",
                    j = this.userId,
                    h.setSendBoxSyncTime(n);
                  else if (j = l.chrmId || k.chatroomId, f = a.RongIMClient._memoryStore.lastReadTime.get(j + g._client.userId + "CST") || 0, h = new a.RongIMClient.Protobuf.ChrmPullMsg, h.setCount(0), i = "chrmPull", !j) throw new Error("syncTime:Received messages of chatroom but was not init");
                  if (l.pulltime <= f) return this.SyncTimeQueue.state = "complete",
                    void this.invoke(c, j, e);
                  c && "setIsPullSend" in h && h.setIsPullSend(!0),
                    h.setSyncTime(f),
                    this.queryMessage(i, a.MessageUtil.ArrayForm(h.toArrayBuffer()), j, b.AT_LEAST_ONCE, {
                        onSuccess: function(b) {
                          var d = a.MessageUtil.int64ToTimestamp(b.syncTime),
                            h = j,
                            l = "chrmPull" == i;
                          if (l) h += g._client.userId + "CST",
                            a.RongIMClient._memoryStore.lastReadTime.set(h, d);
                          else {
                            var m = a.RongIMClient._storageProvider;
                            d > m.getItem(h) && m.setItem(h, d)
                          }
                          var o = b.list,
                            p = b.finished;
                          l && (p = !0),
                          void 0 === p && (p = !0),
                            a.RongIMClient._memoryStore.isPullFinished = p;
                          for (var q = a.RongIMClient._memoryStore.connectAckTime,
                                 r = 0,
                                 s = o.length,
                                 t = s; r < s; r++) {
                            t -= 1;
                            var u = o[r],
                              v = a.MessageUtil.int64ToTimestamp(u.dataTime);
                            if (v > (u.direction == a.MessageDirection.SEND ? n: f)) {
                              var w = v < q;
                              g._client.handler.onReceived(u, void 0, w, t, !1, p)
                            }
                          }
                          k.SyncTimeQueue.state = "complete",
                            k.invoke(c, j, e)
                        },
                        onError: function(a) {
                          k.SyncTimeQueue.state = "complete",
                            k.invoke(c, j, e)
                        }
                      },
                      "DownStreamMessages")
                }
              },
              c.prototype.syncTime = function(a, b, c, d) {
                this.SyncTimeQueue.push({
                  type: a,
                  pulltime: b,
                  chrmId: c
                }),
                1 == this.SyncTimeQueue.length && "complete" == this.SyncTimeQueue.state && this.invoke(!a, c, d)
              },
              c.prototype.__init = function(b) {
                this.handler = new h(this),
                  this.handler.setConnectCallback(a.RongIMClient._memoryStore.callback),
                  this.channel = new d(b, this)
              },
              c.userInfoMapping = {},
              c
          } ();
          a.Client = f;
          var g = function() {
            function e() {}
            return e.getInstance = function() {
              return new e
            },
              e.prototype.connect = function(b, c, d) {
                if (a.RongIMClient.Protobuf) return e._client = (new a.Navigation).connect(b, c, d),
                  e._client
              },
              e.prototype.setListener = function(a) {
                "object" == typeof a && ("function" == typeof a.onChanged ? d._ConnectionStatusListener = a: "function" == typeof a.onReceived && (d._ReceiveMessageListener = a))
              },
              e.prototype.reconnect = function(a) {
                e._client.channel.reconnect(a)
              },
              e.prototype.disconnect = function() {
                e._client.channel.disconnect(2)
              },
              e.prototype.queryMsg = function(a, d, f, g, h) {
                "string" != typeof a && (a = c[a]),
                  e._client.queryMessage(a, d, f, b.AT_MOST_ONCE, g, h)
              },
              e.prototype.pubMsg = function(b, d, f, g, h, i) {
                "number" == typeof i ? i == a.MethodType.CUSTOMER_SERVICE ? e._client.publishMessage("pcuMsgP", d, f, g, h) : i == a.MethodType.RECALL && e._client.publishMessage("recallMsg", d, f, g, h) : e._client.publishMessage(c[10][b], d, f, g, h)
              },
              e
          } ();
          a.Bridge = g;
          var h = function() {
            function b(a) {
              if (this.map = {},
                this.connectCallback = null, !d._ReceiveMessageListener) throw new Error("please set onReceiveMessageListener");
              this._onReceived = d._ReceiveMessageListener.onReceived,
                this._client = a,
                this.syncMsgMap = new Object
            }
            return b.prototype.putCallback = function(a, b, c) {
              var d = {
                Callback: a,
                Message: c
              };
              d.Callback.resumeTimer(),
                this.map[b] = d
            },
              b.prototype.setConnectCallback = function(b) {
                b && (this.connectCallback = new a.ConnectAck(b.onSuccess, b.onError, this._client))
              },
              b.prototype.onReceived = function(b, c, d, e, f) {
                var h, i, j;
                if ("PublishMessage" != b._name) h = b,
                  a.RongIMClient._storageProvider.setItem(this._client.userId, a.MessageUtil.int64ToTimestamp(h.dataTime));
                else {
                  if ("s_ntf" == b.getTopic()) return h = a.RongIMClient.Protobuf.NotifyMsg.decode(b.getData()),
                    void this._client.syncTime(h.type, a.MessageUtil.int64ToTimestamp(h.time), h.chrmId);
                  if ("s_msg" == b.getTopic()) {
                    h = a.RongIMClient.Protobuf.DownStreamMessage.decode(b.getData());
                    var k = a.MessageUtil.int64ToTimestamp(h.dataTime);
                    a.RongIMClient._storageProvider.setItem(this._client.userId, k),
                      a.RongIMClient._memoryStore.lastReadTime.get(this._client.userId, k)
                  } else {
                    if ("s_stat" == b.getTopic()) return h = a.RongIMClient.Protobuf.GetUserStatusOutput.decode(b.getData()),
                      h = a.RongInnerTools.convertUserStatus(h),
                      void a.RongIMClient.userStatusObserver.notify({
                        key: h.userId,
                        entity: h
                      });
                    if (g._client.sdkVer && "1.0.0" == g._client.sdkVer) return;
                    h = a.RongIMClient.Protobuf.UpStreamMessage.decode(b.getData());
                    var l = b.getTopic(),
                      m = l.substr(0, 2);
                    "pp" == m ? h.type = 1 : "pd" == m ? h.type = 2 : "pg" == m ? h.type = 3 : "ch" == m ? h.type = 4 : "pc" == m && (h.type = 5),
                      h.groupId = b.getTargetId(),
                      h.fromUserId = this._client.userId,
                      h.dataTime = Date.parse((new Date).toString())
                  }
                  if (!h) return
                }
                var n = a.RongIMClient._memoryStore.isPullFinished;
                if (n || d) {
                  i = a.MessageUtil.messageParser(h, this._onReceived, d);
                  if (12 == i.conversationType) return a.RongIMClient.RTCListener(i);
                  if (b.getTopic && "recallMsg" == b.getTopic()) {
                    var o = i.content;
                    i.conversationType = o.conversationType,
                      i.targetId = o.targetId,
                      i.messageId = null
                  }
                  if (c && (i.messageUId = c.getMessageUId(), i.sentTime = c.getTimestamp(), a.RongIMClient._storageProvider.setItem(this._client.userId, i.sentTime)), null !== i) {
                    if (! (i.conversationType == a.ConversationType.CHATROOM)) {
                      a.RongIMClient.MessageParams[i.messageType].msgTag.getMessageTag() >= 0 && a.SyncTimeUtil.set(i);
                      if (i.messageDirection == a.MessageDirection.SEND) {
                        var p = a.RongIMClient._storageProvider,
                          q = a.Bridge._client.userId,
                          r = p.getItem("last_sentTime_" + q) || 0;
                        if (i.sentTime <= r && !f) return
                      }
                    }
                    if (a.RongIMClient.MessageParams[i.messageType].msgTag.getMessageTag() > 0) {
                      if (j = a.RongIMClient._dataAccessProvider.getConversation(i.conversationType, i.targetId, {
                        onSuccess: function() {},
                        onError: function() {}
                      }), j || (j = a.RongIMClient.getInstance().createConversation(i.conversationType, i.targetId, "")), i.messageDirection == a.MessageDirection.RECEIVE && 64 == (64 & h.status)) {
                        var s = a.RongIMClient._storageProvider.getItem("mentioneds_" + g._client.userId + "_" + i.conversationType + "_" + i.targetId),
                          t = i.conversationType + "_" + i.targetId,
                          u = {};
                        if (i.content && i.content.mentionedInfo && (u[t] = {
                          uid: i.messageUId,
                          time: i.sentTime,
                          mentionedInfo: i.content.mentionedInfo
                        },
                          a.RongIMClient._storageProvider.setItem("mentioneds_" + g._client.userId + "_" + i.conversationType + "_" + i.targetId, JSON.stringify(u)), s = JSON.stringify(u)), s) {
                          var u = JSON.parse(s);
                          j.mentionedMsg = u[t]
                        }
                      }
                      if (i.messageDirection == a.MessageDirection.RECEIVE && i.senderUserId != g._client.userId && (j.unreadMessageCount = j.unreadMessageCount + 1, a.RongUtil.supportLocalStorage())) {
                        var v = a.RongIMClient._storageProvider.getItem("cu" + g._client.userId + j.conversationType + j.targetId),
                          w = Number(v) + 1;
                        a.RongIMClient._storageProvider.setItem("cu" + g._client.userId + j.conversationType + i.targetId, w),
                          j.unreadMessageCount = w
                      }
                      j.receivedTime = (new Date).getTime(),
                        j.receivedStatus = i.receivedStatus,
                        j.senderUserId = i.sendUserId,
                        j.notificationStatus = a.ConversationNotificationStatus.DO_NOT_DISTURB,
                        j.latestMessageId = i.messageId,
                        j.latestMessage = i,
                        j.sentTime = i.sentTime,
                        a.RongIMClient._dataAccessProvider.addConversation(j, {
                          onSuccess: function(a) {},
                          onError: function() {}
                        })
                    }
                    if (i.conversationType != a.ConversationType.CUSTOMER_SERVICE || "ChangeModeResponseMessage" != i.messageType && "SuspendMessage" != i.messageType && "HandShakeResponseMessage" != i.messageType && "TerminateMessage" != i.messageType && "CustomerStatusUpdateMessage" != i.messageType && "TextMessage" != i.messageType && "InformationNotificationMessage" != i.messageType || a.RongIMClient._memoryStore.custStore.isInit) {
                      if (i.conversationType == a.ConversationType.CUSTOMER_SERVICE && "HandShakeResponseMessage" != i.messageType) {
                        if (!a.RongIMClient._memoryStore.custStore[i.targetId]) return;
                        if ("TerminateMessage" == i.messageType && a.RongIMClient._memoryStore.custStore[i.targetId].sid != i.content.sid) return
                      }
                      if (i.messageType === a.RongIMClient.MessageType.HandShakeResponseMessage) {
                        var x = i.content.data;
                        a.RongIMClient._memoryStore.custStore[i.targetId] = x,
                        x.serviceType != a.CustomerType.ONLY_HUMAN && x.serviceType != a.CustomerType.HUMAN_FIRST || "1" == x.notAutoCha && a.RongIMClient.getInstance().switchToHumanMode(i.targetId, {
                          onSuccess: function() {},
                          onError: function() {}
                        })
                      }
                      var y = new Date,
                        z = y.getMonth() + 1,
                        A = y.getFullYear() + "/" + (1 == z.toString().length ? "0" + z: z) + "/" + y.getDate(),
                        B = new Date(A).getTime() - i.sentTime < 0;
                      if (a.RongUtil.supportLocalStorage() && i.messageType === a.RongIMClient.MessageType.ReadReceiptRequestMessage && B && i.messageDirection == a.MessageDirection.SEND) {
                        var C = g._client.userId + i.content.messageUId + "SENT";
                        a.RongIMClient._storageProvider.setItem(C, JSON.stringify({
                          count: 0,
                          dealtime: i.sentTime,
                          userIds: {}
                        }))
                      } else if (a.RongUtil.supportLocalStorage() && i.messageType === a.RongIMClient.MessageType.ReadReceiptRequestMessage && B) {
                        var D = g._client.userId + i.conversationType + i.targetId + "RECEIVED",
                          E = JSON.parse(a.RongIMClient._storageProvider.getItem(D));
                        if (E) if (i.senderUserId in E) {
                          if (!E[i.senderUserId].uIds || !E[i.senderUserId].uIds || -1 != E[i.senderUserId].uIds.indexOf(i.content.messageUId)) return;
                          E[i.senderUserId].uIds.push(i.content.messageUId),
                            E[i.senderUserId].dealtime = i.sentTime,
                            E[i.senderUserId].isResponse = !1,
                            a.RongIMClient._storageProvider.setItem(D, JSON.stringify(E))
                        } else {
                          var F = {
                            uIds: [i.content.messageUId],
                            dealtime: i.sentTime,
                            isResponse: !1
                          };
                          E[i.senderUserId] = F,
                            a.RongIMClient._storageProvider.setItem(D, JSON.stringify(E))
                        } else {
                          var G = {};
                          G[i.senderUserId] = {
                            uIds: [i.content.messageUId],
                            dealtime: i.sentTime,
                            isResponse: !1
                          },
                            a.RongIMClient._storageProvider.setItem(D, JSON.stringify(G))
                        }
                      }
                      if (a.RongUtil.supportLocalStorage() && i.messageType === a.RongIMClient.MessageType.ReadReceiptResponseMessage && B) {
                        var H, I = i.content,
                          J = I.receiptMessageDic[g._client.userId],
                          C = "";
                        if (i.receiptResponse || (i.receiptResponse = {}), J) {
                          for (var K = [], L = 0, M = J.length; L < M; L++) C = g._client.userId + J[L] + "SENT",
                          !(H = JSON.parse(a.RongIMClient._storageProvider.getItem(C))) || i.senderUserId in H.userIds || (K.push(J[L]), H.count += 1, H.userIds[i.senderUserId] = i.sentTime, i.receiptResponse[J[L]] = H.count, a.RongIMClient._storageProvider.setItem(C, JSON.stringify(H)));
                          I.receiptMessageDic[g._client.userId] = K,
                            i.content = I
                        }
                      }
                      var N = this;
                      if (a.RongIMClient._voipProvider && ["AcceptMessage", "RingingMessage", "HungupMessage", "InviteMessage", "MediaModifyMessage", "MemberModifyMessage"].indexOf(i.messageType) > -1) setTimeout(function() {
                        a.RongIMClient._voipProvider.onReceived(i)
                      });
                      else {
                        var O = e || 0,
                          P = !n;
                        setTimeout(function() {
                          N._onReceived(i, O, P)
                        })
                      }
                    }
                  }
                }
              },
              b.prototype.handleMessage = function(b) {
                if (b) switch (b._name) {
                  case "ConnAckMessage":
                    g._client.handler.connectCallback.process(b.getStatus(), b.getUserId(), b.getTimestamp());
                    break;
                  case "PublishMessage":
                    b.getSyncMsg() || 0 == b.getQos() || g._client.channel.writeAndFlush(new a.PubAckMessage(b.getMessageId())),
                      b.getSyncMsg() && !a.RongIMClient._memoryStore.depend.isPolling ? g._client.handler.syncMsgMap[b.getMessageId()] = b: g._client.handler.onReceived(b);
                    break;
                  case "QueryAckMessage":
                    0 != b.getQos() && g._client.channel.writeAndFlush(new a.QueryConMessage(b.getMessageId()));
                    var c = g._client.handler.map[b.getMessageId()];
                    c && (c.Callback.process(b.getStatus(), b.getData(), b.getDate(), c.Message), delete g._client.handler.map[b.getMessageId()]);
                    break;
                  case "PubAckMessage":
                    var d = g._client.handler.map[b.getMessageId()];
                    if (d) d.Callback.process(b.getStatus() || 0, b.getMessageUId(), b.getTimestamp(), d.Message, b.getMessageId()),
                      delete g._client.handler.map[b.getMessageId()];
                    else {
                      var e = a.Bridge._client.userId;
                      a.RongIMClient._storageProvider.setItem("last_sentTime_" + e, b.timestamp),
                        g._client.handler.onReceived(g._client.handler.syncMsgMap[b.messageId], b, null, null, !0),
                        delete g._client.handler.syncMsgMap[b.getMessageId()]
                    }
                    break;
                  case "PingRespMessage":
                    a.RongIMClient._memoryStore.isFirstPingMsg ? a.RongIMClient._memoryStore.isFirstPingMsg = !1 : g._client.pauseTimer();
                    break;
                  case "DisconnectMessage":
                    g._client.channel.disconnect(b.getStatus())
                }
              },
              b
          } ();
          a.MessageHandler = h
        } (RongIMLib || (RongIMLib = {}));
      var __extends = this && this.__extends ||
        function(a, b) {
          function c() {
            this.constructor = a
          }
          for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
          a.prototype = null === b ? Object.create(b) : (c.prototype = b.prototype, new c)
        },
        RongIMLib; !
        function(a) {
          var b = function() {
            function b(a) {
              this.timeout = null,
                this.onError = null,
                a && "number" == typeof a ? this.timeoutMillis = a: (this.timeoutMillis = 3e4, this.onError = a)
            }
            return b.prototype.resumeTimer = function() {
              var a = this;
              this.timeoutMillis > 0 && !this.timeout && (this.timeout = setTimeout(function() {
                  a.readTimeOut(!0)
                },
                this.timeoutMillis))
            },
              b.prototype.pauseTimer = function() {
                this.timeout && (clearTimeout(this.timeout), this.timeout = null)
              },
              b.prototype.readTimeOut = function(b) {
                b && this.onError ? this.onError(a.ErrorCode.TIMEOUT) : this.pauseTimer()
              },
              b
          } ();
          a.MessageCallback = b;
          var c = function() {
            function b() {
              this.publicServiceList = []
            }
            return b.getInstance = function() {
              return new b
            },
              b.prototype.pottingProfile = function(b) {
                var c;
                this.profile = new a.PublicServiceProfile,
                  c = JSON.parse(b.extra),
                  this.profile.isGlobal = c.isGlobal,
                  this.profile.introduction = c.introduction,
                  this.profile.menu = c.menu,
                  this.profile.hasFollowed = c.follow,
                  this.profile.publicServiceId = b.mpid,
                  this.profile.name = b.name,
                  this.profile.portraitUri = b.portraitUrl,
                  this.profile.conversationType = "mc" == b.type ? a.ConversationType.APP_PUBLIC_SERVICE: a.ConversationType.PUBLIC_SERVICE,
                  this.publicServiceList.push(this.profile)
              },
              b.prototype.mapping = function(b, c) {
                switch (c) {
                  case "GetUserInfoOutput":
                    return new a.UserInfo(b.userId, b.userName, b.userPortrait);
                  case "GetQNupTokenOutput":
                    return {
                      deadline:
                        a.MessageUtil.int64ToTimestamp(b.deadline),
                      token: b.token
                    };
                  case "GetQNdownloadUrlOutput":
                    return {
                      downloadUrl:
                      b.downloadUrl
                    };
                  case "CreateDiscussionOutput":
                    return b.id;
                  case "ChannelInfoOutput":
                    var d = new a.Discussion;
                    return d.creatorId = b.adminUserId,
                      d.id = b.channelId,
                      d.memberIdList = b.firstTenUserIds,
                      d.name = b.channelName,
                      d.isOpen = b.openStatus,
                      d;
                  case "GroupHashOutput":
                    return b.result;
                  case "QueryBlackListOutput":
                    return b.userIds;
                  case "SearchMpOutput":
                  case "PullMpOutput":
                    if (b.info) {
                      var e = this;
                      Array.forEach(b.info,
                        function(a) {
                          setTimeout(function() {
                              e.pottingProfile(a)
                            },
                            100)
                        })
                    }
                    return this.publicServiceList;
                  default:
                    return b
                }
              },
              b
          } ();
          a.CallbackMapping = c;
          var d = function(c) {
            function d(a, b) {
              c.call(this, b),
                this._cb = a,
                this._timeout = b
            }
            return __extends(d, c),
              d.prototype.process = function(b, c, d, e, f) {
                if (this.readTimeOut(), 0 == b) {
                  e && (e.setSentStatus = b);
                  if (a.RongIMClient._memoryStore.isPullFinished) {
                    var g = a.Bridge._client.userId;
                    a.RongIMClient._storageProvider.setItem("last_sentTime_" + g, d),
                      a.SyncTimeUtil.set({
                        messageDirection: a.MessageDirection.SEND,
                        sentTime: d
                      })
                  }
                  this._cb({
                    messageUId: c,
                    timestamp: d,
                    messageId: f
                  })
                } else this._timeout(b, {
                  messageUId: c,
                  sentTime: d
                })
              },
              d.prototype.readTimeOut = function(a) {
                b.prototype.readTimeOut.call(this, a)
              },
              d
          } (b);
          a.PublishCallback = d;
          var e = function(d) {
            function e(a, b) {
              d.call(this, b),
                this._cb = a,
                this._timeout = b
            }
            return __extends(e, d),
              e.prototype.process = function(b, d, e, f) {
                if (this.readTimeOut(), f && d && 0 == b) {
                  try {
                    d = c.getInstance().mapping(a.RongIMClient.Protobuf[f].decode(d), f)
                  } catch(g) {
                    return void this._timeout(a.ErrorCode.UNKNOWN)
                  }
                  "GetUserInfoOutput" == f && (a.Client.userInfoMapping[d.userId] = d),
                    this._cb(d)
                } else b > 0 ? this._timeout(b) : this._cb(b)
              },
              e.prototype.readTimeOut = function(a) {
                b.prototype.readTimeOut.call(this, a)
              },
              e
          } (b);
          a.QueryCallback = e;
          var f = function(c) {
            function d(a, b, d) {
              c.call(this, b),
                this._client = d,
                this._cb = a,
                this._timeout = b
            }
            return __extends(d, c),
              d.prototype.process = function(b, c, d) {
                if (this.readTimeOut(), 0 == b) {
                  this._client.userId = c;
                  var e = this;
                  if (!a.RongIMClient._memoryStore.depend.isPolling && a.RongIMClient._memoryStore.isFirstPingMsg ? a.Bridge._client.checkSocket({
                    onSuccess: function() {
                      a.RongIMClient.isNotPullMsg || e._client.syncTime(void 0, void 0, void 0, !0)
                    },
                    onError: function() {
                      a.RongIMClient._memoryStore.isFirstPingMsg = !1,
                        a.RongIMClient.getInstance().disconnect(),
                        a.RongIMClient.connect(a.RongIMClient._memoryStore.token, a.RongIMClient._memoryStore.callback)
                    }
                  }) : a.RongIMClient.isNotPullMsg || e._client.syncTime(void 0, void 0, void 0, !0), a.Bridge._client.channel.socket.fire("StatusChanged", 0), this._client.reconnectObj.onSuccess) this._client.reconnectObj.onSuccess(c),
                    delete this._client.reconnectObj.onSuccess;
                  else {
                    var f = this;
                    setTimeout(function() {
                        f._cb(c)
                      },
                      500)
                  }
                  a.RongIMClient._memoryStore.connectAckTime = d,
                    (new Date).getTime() - d ? a.RongIMClient._memoryStore.deltaTime = (new Date).getTime() - d: a.RongIMClient._memoryStore.deltaTime = 0
                } else if (6 == b) {
                  a.RongIMClient.getInstance().disconnect();
                  var f = this,
                    g = f._client,
                    h = g.appId,
                    i = g.token; (new a.Navigation).requestNavi(i, h,
                    function() {
                      g.clearHeartbeat();
                      var b = new a.Client(i, h);
                      a.Bridge._client = b,
                        b.__init(function() {
                          "websocket" == a.Transportations._TransportType && b.keepLive()
                        })
                    },
                    f._timeout, !1)
                } else a.Bridge._client.channel.socket.socket._status = b,
                  this._client.reconnectObj.onError ? (this._client.reconnectObj.onError(b), delete this._client.reconnectObj.onError) : this._timeout(b)
              },
              d.prototype.readTimeOut = function(a) {
                b.prototype.readTimeOut.call(this, a)
              },
              d
          } (b);
          a.ConnectAck = f
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) {
          var b = function() {
            function b() {}
            return b.clear = function() {
              var b = a.RongIMClient._storageProvider;
              b.removeItem("rc_uid"),
                b.removeItem("serverIndex"),
                b.removeItem("rongSDK")
            },
              b.prototype.getNaviSuccess = function(b) {
                var c = a.RongIMClient._storageProvider;
                c.setItem("fullnavi", JSON.stringify(b));
                var d = b.server;
                d && (d += ",");
                var e = b.backupServer || "",
                  f = "{server}{backupServer}",
                  g = a.RongUtil.tplEngine(f, {
                    server: d,
                    backupServer: e
                  });
                g = g.split(","),
                  c.setItem("servers", JSON.stringify(g));
                var h = a.RongIMClient._memoryStore.token,
                  i = a.InnerUtil.getUId(h);
                c.setItem("rc_uid", i);
                var j = b.userId;
                if (c.setItem("current_user", j), b.voipCallInfo) {
                  var k = JSON.parse(b.voipCallInfo);
                  a.RongIMClient._memoryStore.voipStategy = k.strategy,
                    c.setItem("voipStrategy", k.strategy)
                }
                var l = b.openMp;
                c.setItem("openMp" + i, l),
                  a.RongIMClient._memoryStore.depend.openMp = l
              },
              b.prototype.connect = function(b, c, d) {
                var e = a.RongIMClient._storageProvider.getItem("appId");
                e && e != b && (a.RongIMClient._storageProvider.clearItem(), a.RongIMClient._storageProvider.setItem("appId", b)),
                e || a.RongIMClient._storageProvider.setItem("appId", b);
                var f = new a.Client(c, b);
                return this.requestNavi(c, b,
                  function() {
                    f.connect(d)
                  },
                  d.onError, !0),
                  f
              },
              b.prototype.requestNavi = function(c, d, e, f, g) {
                if (g) {
                  var h = md5(c).slice(8, 16),
                    i = a.RongIMClient._storageProvider,
                    j = i.getItem("rongSDK"),
                    k = a.Transportations._TransportType == j,
                    l = i.getItem("rc_uid"),
                    m = l == h,
                    n = i.getItem("servers"),
                    o = "string" == typeof n;
                  if (m && k && o) {
                    a.RongIMClient._memoryStore.voipStategy = i.getItem("voipStrategy");
                    var p = i.getItem("openMp" + h);
                    return a.RongIMClient._memoryStore.depend.openMp = p,
                      void e()
                  }
                }
                b.clear();
                var q = a.Channel._ConnectionStatusListener,
                  r = a.RongIMClient._memoryStore.depend,
                  s = r.navigaters,
                  t = r.naviTimeout,
                  u = r.maxNaviRetry,
                  v = this,
                  w = new a.Timer({
                    timeout: t
                  }),
                  x = 1,
                  y = function() {
                    return x >= u
                  },
                  z = new a.IndexTools({
                    items: s,
                    onwheel: function() {
                      x += 1
                    }
                  }),
                  A = function() {
                    if (y()) return void f(a.ConnectionStatus.RESPONSE_NAVI_ERROR);
                    var b = z.get(),
                      g = s[b];
                    z.add();
                    var h = function(b) {
                        w.pause(),
                          q.onChanged(a.ConnectionStatus.RESPONSE_NAVI);
                        var c = b.code;
                        a.RongUtil.isEqual(c, 200) && (v.getNaviSuccess(b), e()),
                        a.RongUtil.isEqual(c, 401) && f(a.ConnectionState.TOKEN_INCORRECT),
                        a.RongUtil.isEqual(c, 403) && q.onChanged(a.ConnectionStatus.APPKEY_IS_FAKE)
                      },
                      i = function(b) {
                        a.RongUtil.isEqual(b, 0) || (w.pause(), q.onChanged(a.ConnectionStatus.RESPONSE_NAVI_ERROR), A())
                      };
                    q.onChanged(a.ConnectionStatus.REQUEST_NAVI);
                    var j = v.request(g, d, c, h, i);
                    w.resume(function() {
                      q.onChanged(a.ConnectionStatus.RESPONSE_NAVI_TIMEOUT),
                        j.abort(),
                        A()
                    })
                  };
                A()
              },
              b.prototype.request = function(b, c, d, e, f) {
                var g = a.RongIMClient._memoryStore.depend,
                  h = g.isPolling ? "cometnavi": "navi";
                d = encodeURIComponent(d);
                var i = a.RongIMClient.sdkver,
                  j = a.RongUtil.getTimestamp(),
                  k = "{navi}/{path}.js?appId={appId}&token={token}&callBack=null&v={sdkver}&r={random}",
                  l = a.RongUtil.tplEngine(k, {
                    navi: b,
                    path: h,
                    appId: c,
                    token: d,
                    sdkver: i,
                    random: j
                  });
                return a.RongUtil.request({
                  url: l,
                  success: function(a) {
                    a = a.replace("null(", "").replace(");", "");
                    var b = a.lastIndexOf(")");
                    b == a.length - 1 && (a = a.substr(0, b)),
                      e(JSON.parse(a))
                  },
                  error: function(a, b) {
                    401 == a || 403 == a ? e(JSON.parse(b)) : f(a)
                  }
                })
              },
              b.Endpoint = new Object,
              b
          } ();
          a.Navigation = b
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) {
          var b = function() {
            function b(b) {
              this._name = "BaseMessage",
                this.lengthSize = 0,
                b instanceof a.Header ? this._header = b: this._header = new a.Header(b, !1, a.Qos.AT_MOST_ONCE, !1)
            }
            return b.prototype.read = function(a, b) {
              this.readMessage(a, b)
            },
              b.prototype.write = function(b) {
                var c = new a.BinaryHelper,
                  d = c.convertStream(b);
                return this._headerCode = this.getHeaderFlag(),
                  d.write(this._headerCode),
                  this.writeMessage(d),
                  d
              },
              b.prototype.getHeaderFlag = function() {
                return this._header.encode()
              },
              b.prototype.getLengthSize = function() {
                return this.lengthSize
              },
              b.prototype.toBytes = function() {
                return this.write([]).getBytesArray()
              },
              b.prototype.isRetained = function() {
                return this._header.retain
              },
              b.prototype.setRetained = function(a) {
                this._header.retain = a
              },
              b.prototype.setQos = function(b) {
                this._header.qos = "[object Object]" == Object.prototype.toString.call(b) ? b: a.Qos[b]
              },
              b.prototype.setDup = function(a) {
                this._header.dup = a
              },
              b.prototype.isDup = function() {
                return this._header.dup
              },
              b.prototype.getType = function() {
                return this._header.type
              },
              b.prototype.getQos = function() {
                return this._header.qos
              },
              b.prototype.messageLength = function() {
                return 0
              },
              b.prototype.writeMessage = function(a) {},
              b.prototype.readMessage = function(a, b) {},
              b.prototype.init = function(a) {
                var b, c, d = this;
                for (c in a) a.hasOwnProperty(c) && (b = c.replace(/^\w/,
                  function(a) {
                    var b = a.charCodeAt(0);
                    return "set" + (b >= 97 ? String.fromCharCode( - 33 & b) : a)
                  })) in d && ("status" == c ? d[b](disconnectStatus[a[c]] ? disconnectStatus[a[c]] : a[c]) : d[b](a[c]))
              },
              b
          } ();
          a.BaseMessage = b;
          var c = function(b) {
            function c(c) {
              switch (b.call(this, 0 == arguments.length || 3 == arguments.length ? a.Type.CONNECT: arguments[0]), this._name = "ConnectMessage", this.CONNECT_HEADER_SIZE = 12, this.protocolId = "RCloud", this.binaryHelper = new a.BinaryHelper, this.protocolVersion = 3, arguments.length) {
                case 0:
                case 1:
                case 3:
                  if (!arguments[0] || arguments[0].length > 64) throw new Error("ConnectMessage:Client Id cannot be null and must be at most 64 characters long: " + arguments[0]);
                  this.clientId = arguments[0],
                    this.cleanSession = arguments[1],
                    this.keepAlive = arguments[2]
              }
            }
            return __extends(c, b),
              c.prototype.messageLength = function() {
                var a = this.binaryHelper.toMQttString(this.clientId).length;
                return a += this.binaryHelper.toMQttString(this.willTopic).length,
                  a += this.binaryHelper.toMQttString(this.will).length,
                  a += this.binaryHelper.toMQttString(this.appId).length,
                (a += this.binaryHelper.toMQttString(this.token).length) + this.CONNECT_HEADER_SIZE
              },
              c.prototype.readMessage = function(a) {
                this.protocolId = a.readUTF(),
                  this.protocolVersion = a.readByte();
                var b = a.readByte();
                if (this.hasAppId = (128 & b) > 0, this.hasToken = (64 & b) > 0, this.retainWill = (32 & b) > 0, this.willQos = b >> 3 & 3, this.hasWill = (4 & b) > 0, this.cleanSession = (32 & b) > 0, this.keepAlive = 256 * a.read() + a.read(), this.clientId = a.readUTF(), this.hasWill && (this.willTopic = a.readUTF(), this.will = a.readUTF()), this.hasAppId) try {
                  this.appId = a.readUTF()
                } catch(c) {
                  throw new Error(c)
                }
                if (this.hasToken) try {
                  this.token = a.readUTF()
                } catch(c) {
                  throw new Error(c)
                }
                return a
              },
              c.prototype.writeMessage = function(a) {
                var b = this.binaryHelper.convertStream(a);
                b.writeUTF(this.protocolId),
                  b.write(this.protocolVersion);
                var c = this.cleanSession ? 2 : 0;
                return c |= this.hasWill ? 4 : 0,
                  c |= this.willQos ? this.willQos >> 3 : 0,
                  c |= this.retainWill ? 32 : 0,
                  c |= this.hasToken ? 64 : 0,
                  c |= this.hasAppId ? 128 : 0,
                  b.write(c),
                  b.writeChar(this.keepAlive),
                  b.writeUTF(this.clientId),
                this.hasWill && (b.writeUTF(this.willTopic), b.writeUTF(this.will)),
                this.hasAppId && b.writeUTF(this.appId),
                this.hasToken && b.writeUTF(this.token),
                  b
              },
              c
          } (b);
          a.ConnectMessage = c;
          var d = function(b) {
            function c(c) {
              b.call(this, 0 == arguments.length ? a.Type.CONNACK: 1 == arguments.length ? arguments[0] instanceof a.Header ? arguments[0] : a.Type.CONNACK: null),
                this._name = "ConnAckMessage",
                this.MESSAGE_LENGTH = 2,
                this.binaryHelper = new a.BinaryHelper;
              var d = this;
              switch (arguments.length) {
                case 0:
                case 1:
                  if (! (arguments[0] instanceof a.Header) && arguments[0] in a.ConnectionState) {
                    if (null == arguments[0]) throw new Error("ConnAckMessage:The status of ConnAskMessage can't be null");
                    d.setStatus(arguments[0])
                  }
              }
            }
            return __extends(c, b),
              c.prototype.messageLength = function() {
                var a = this.MESSAGE_LENGTH;
                return this.userId && (a += this.binaryHelper.toMQttString(this.userId).length),
                  a
              },
              c.prototype.readMessage = function(a, b) {
                a.read();
                var c = +a.read();
                if (! (c >= 0 && c <= 12)) throw new Error("Unsupported CONNACK code:" + c);
                if (this.setStatus(c), b > this.MESSAGE_LENGTH) {
                  this.setUserId(a.readUTF());
                  var d = (a.readUTF(), a.readLong());
                  this.setTimestamp(d)
                }
              },
              c.prototype.writeMessage = function(a) {
                var b = this.binaryHelper.convertStream(a);
                switch (b.write(128), +status) {
                  case 0:
                  case 1:
                  case 2:
                  case 5:
                  case 6:
                    b.write( + status);
                    break;
                  case 3:
                  case 4:
                    b.write(3);
                    break;
                  default:
                    throw new Error("Unsupported CONNACK code:" + status)
                }
                return this.userId && b.writeUTF(this.userId),
                  b
              },
              c.prototype.setStatus = function(a) {
                this.status = a
              },
              c.prototype.setUserId = function(a) {
                this.userId = a
              },
              c.prototype.getStatus = function() {
                return this.status
              },
              c.prototype.getUserId = function() {
                return this.userId
              },
              c.prototype.setTimestamp = function(a) {
                this.timestrap = a
              },
              c.prototype.getTimestamp = function() {
                return this.timestrap
              },
              c
          } (b);
          a.ConnAckMessage = d;
          var e = function(b) {
            function c(c) {
              b.call(this, c instanceof a.Header ? c: a.Type.DISCONNECT),
                this._name = "DisconnectMessage",
                this.MESSAGE_LENGTH = 2,
                this.binaryHelper = new a.BinaryHelper,
              c instanceof a.Header || c in a.ConnectionStatus && (this.status = c)
            }
            return __extends(c, b),
              c.prototype.messageLength = function() {
                return this.MESSAGE_LENGTH
              },
              c.prototype.readMessage = function(a) {
                a.read();
                var b = +a.read();
                if (! (b >= 0 && b <= 5)) throw new Error("Unsupported CONNACK code:" + b);
                this.setStatus(disconnectStatus[b] ? disconnectStatus[b] : b)
              },
              c.prototype.writeMessage = function(a) {
                var b = this.binaryHelper.convertStream(a);
                if (b.write(0), !( + status >= 1 && +status <= 3)) throw new Error("Unsupported CONNACK code:" + status);
                b.write( + status - 1)
              },
              c.prototype.setStatus = function(a) {
                this.status = a
              },
              c.prototype.getStatus = function() {
                return this.status
              },
              c
          } (b);
          a.DisconnectMessage = e;
          var f = function(b) {
            function c(c) {
              b.call(this, c && c instanceof a.Header ? c: a.Type.PINGREQ),
                this._name = "PingReqMessage"
            }
            return __extends(c, b),
              c
          } (b);
          a.PingReqMessage = f;
          var g = function(b) {
            function c(c) {
              b.call(this, c && c instanceof a.Header ? c: a.Type.PINGRESP),
                this._name = "PingRespMessage"
            }
            return __extends(c, b),
              c
          } (b);
          a.PingRespMessage = g;
          var h = function(b) {
            function c(c) {
              b.call(this, c),
                this._name = "RetryableMessage",
                this.binaryHelper = new a.BinaryHelper
            }
            return __extends(c, b),
              c.prototype.messageLength = function() {
                return 2
              },
              c.prototype.writeMessage = function(a) {
                var b = this.binaryHelper.convertStream(a),
                  c = this.getMessageId(),
                  d = 255 & c,
                  e = (65280 & c) >> 8;
                return b.write(e),
                  b.write(d),
                  b
              },
              c.prototype.readMessage = function(a, b) {
                var c = 256 * a.read() + a.read();
                this.setMessageId(parseInt(c, 10))
              },
              c.prototype.setMessageId = function(a) {
                this.messageId = a
              },
              c.prototype.getMessageId = function() {
                return this.messageId
              },
              c
          } (b);
          a.RetryableMessage = h;
          var i = function(b) {
            function c(c) {
              b.call(this, c instanceof a.Header ? c: a.Type.PUBACK),
                this.msgLen = 2,
                this.date = 0,
                this.millisecond = 0,
                this.timestamp = 0,
                this.binaryHelper = new a.BinaryHelper,
                this._name = "PubAckMessage",
              c instanceof a.Header || b.prototype.setMessageId.call(this, c)
            }
            return __extends(c, b),
              c.prototype.messageLength = function() {
                return this.msgLen
              },
              c.prototype.writeMessage = function(a) {
                var b = this.binaryHelper.convertStream(a);
                h.prototype.writeMessage.call(this, b)
              },
              c.prototype.readMessage = function(a, b) {
                h.prototype.readMessage.call(this, a),
                  this.date = a.readInt(),
                  this.status = 256 * a.read() + a.read(),
                  this.millisecond = 256 * a.read() + a.read(),
                  this.timestamp = 1e3 * this.date + this.millisecond,
                  this.messageUId = a.readUTF()
              },
              c.prototype.setStatus = function(a) {
                this.status = a
              },
              c.prototype.setTimestamp = function(a) {
                this.timestamp = a
              },
              c.prototype.setMessageUId = function(a) {
                this.messageUId = a
              },
              c.prototype.getStatus = function() {
                return this.status
              },
              c.prototype.getDate = function() {
                return this.date
              },
              c.prototype.getTimestamp = function() {
                return this.timestamp
              },
              c.prototype.getMessageUId = function() {
                return this.messageUId
              },
              c
          } (h);
          a.PubAckMessage = i;
          var j = function(b) {
            function c(c, d, e) {
              b.call(this, 1 == arguments.length && c instanceof a.Header ? c: 3 == arguments.length ? a.Type.PUBLISH: 0),
                this._name = "PublishMessage",
                this.binaryHelper = new a.BinaryHelper,
                this.syncMsg = !1,
              3 == arguments.length && (this.topic = c, this.targetId = e, this.data = "string" == typeof d ? this.binaryHelper.toMQttString(d) : d)
            }
            return __extends(c, b),
              c.prototype.messageLength = function() {
                var a = 10;
                return a += this.binaryHelper.toMQttString(this.topic).length,
                  a += this.binaryHelper.toMQttString(this.targetId).length,
                  a += this.data.length
              },
              c.prototype.writeMessage = function(a) {
                var b = this.binaryHelper.convertStream(a);
                b.writeUTF(this.topic),
                  b.writeUTF(this.targetId),
                  h.prototype.writeMessage.apply(this, arguments),
                  b.write(this.data)
              },
              c.prototype.readMessage = function(a, b) {
                var c = 6;
                this.date = a.readInt(),
                  this.topic = a.readUTF(),
                  c += this.binaryHelper.toMQttString(this.topic).length,
                  this.targetId = a.readUTF(),
                  c += this.binaryHelper.toMQttString(this.targetId).length,
                  h.prototype.readMessage.apply(this, arguments),
                  this.data = new Array(b - c),
                  this.data = a.read(this.data)
              },
              c.prototype.setTopic = function(a) {
                this.topic = a
              },
              c.prototype.setData = function(a) {
                this.data = a
              },
              c.prototype.setTargetId = function(a) {
                this.targetId = a
              },
              c.prototype.setDate = function(a) {
                this.date = a
              },
              c.prototype.setSyncMsg = function(a) {
                this.syncMsg = a
              },
              c.prototype.getSyncMsg = function() {
                return this.syncMsg
              },
              c.prototype.getTopic = function() {
                return this.topic
              },
              c.prototype.getData = function() {
                return this.data
              },
              c.prototype.getTargetId = function() {
                return this.targetId
              },
              c.prototype.getDate = function() {
                return this.date
              },
              c
          } (h);
          a.PublishMessage = j;
          var k = function(b) {
            function c(c, d, e) {
              b.call(this, c instanceof a.Header ? c: 3 == arguments.length ? a.Type.QUERY: null),
                this.binaryHelper = new a.BinaryHelper,
                this._name = "QueryMessage",
              3 == arguments.length && (this.data = "string" == typeof d ? this.binaryHelper.toMQttString(d) : d, this.topic = c, this.targetId = e)
            }
            return __extends(c, b),
              c.prototype.messageLength = function() {
                var a = 0;
                return a += this.binaryHelper.toMQttString(this.topic).length,
                  a += this.binaryHelper.toMQttString(this.targetId).length,
                  a += 2,
                  a += this.data.length
              },
              c.prototype.writeMessage = function(a) {
                var b = this.binaryHelper.convertStream(a);
                b.writeUTF(this.topic),
                  b.writeUTF(this.targetId),
                  h.prototype.writeMessage.call(this, b),
                  b.write(this.data)
              },
              c.prototype.readMessage = function(a, b) {
                var c = 0;
                this.topic = a.readUTF(),
                  this.targetId = a.readUTF(),
                  c += this.binaryHelper.toMQttString(this.topic).length,
                  c += this.binaryHelper.toMQttString(this.targetId).length,
                  this.readMessage.apply(this, arguments),
                  c += 2,
                  this.data = new Array(b - c),
                  a.read(this.data)
              },
              c.prototype.setTopic = function(a) {
                this.topic = a
              },
              c.prototype.setData = function(a) {
                this.data = a
              },
              c.prototype.setTargetId = function(a) {
                this.targetId = a
              },
              c.prototype.getTopic = function() {
                return this.topic
              },
              c.prototype.getData = function() {
                return this.data
              },
              c.prototype.getTargetId = function() {
                return this.targetId
              },
              c
          } (h);
          a.QueryMessage = k;
          var l = function(b) {
            function c(c) {
              b.call(this, c instanceof a.Header ? c: a.Type.QUERYCON),
                this._name = "QueryConMessage",
              c instanceof a.Header || b.prototype.setMessageId.call(this, c)
            }
            return __extends(c, b),
              c
          } (h);
          a.QueryConMessage = l;
          var m = function(b) {
            function c(c) {
              b.call(this, c),
                this._name = "QueryAckMessage",
                this.binaryHelper = new a.BinaryHelper
            }
            return __extends(c, b),
              c.prototype.readMessage = function(a, b) {
                h.prototype.readMessage.call(this, a),
                  this.date = a.readInt(),
                  this.setStatus(256 * a.read() + a.read()),
                b > 0 && (this.data = new Array(b - 8), this.data = a.read(this.data))
              },
              c.prototype.getData = function() {
                return this.data
              },
              c.prototype.getStatus = function() {
                return this.status
              },
              c.prototype.getDate = function() {
                return this.date
              },
              c.prototype.setDate = function(a) {
                this.date = a
              },
              c.prototype.setStatus = function(a) {
                this.status = a
              },
              c.prototype.setData = function(a) {
                this.data = a
              },
              c
          } (h);
          a.QueryAckMessage = m
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) {
          var b = function() {
            function b(b) {
              var c = new a.BinaryHelper;
              this.out = c.convertStream(b)
            }
            return b.prototype.writeMessage = function(b) {
              b instanceof a.BaseMessage && b.write(this.out)
            },
              b
          } ();
          a.MessageOutputStream = b;
          var c = function() {
            function b(b, c) {
              if (c) this.flags = b.headerCode;
              else {
                var d = (new a.BinaryHelper).convertStream(b);
                this.flags = d.readByte(),
                  this._in = d
              }
              this.header = new a.Header(this.flags),
                this.isPolling = c,
                this.In = b
            }
            return b.prototype.readMessage = function() {
              switch (this.header.getType()) {
                case 1:
                  this.msg = new a.ConnectMessage(this.header);
                  break;
                case 2:
                  this.msg = new a.ConnAckMessage(this.header);
                  break;
                case 3:
                  this.msg = new a.PublishMessage(this.header),
                    this.msg.setSyncMsg(this.header.getSyncMsg());
                  break;
                case 4:
                  this.msg = new a.PubAckMessage(this.header);
                  break;
                case 5:
                  this.msg = new a.QueryMessage(this.header);
                  break;
                case 6:
                  this.msg = new a.QueryAckMessage(this.header);
                  break;
                case 7:
                  this.msg = new a.QueryConMessage(this.header);
                  break;
                case 9:
                case 11:
                case 13:
                  this.msg = new a.PingRespMessage(this.header);
                  break;
                case 8:
                case 10:
                case 12:
                  this.msg = new a.PingReqMessage(this.header);
                  break;
                case 14:
                  this.msg = new a.DisconnectMessage(this.header);
                  break;
                default:
                  throw new Error("No support for deserializing " + this.header.getType() + " messages")
              }
              return this.isPolling ? this.msg.init(this.In) : this.msg.read(this._in, this.In.length - 1),
                this.msg
            },
              b
          } ();
          a.MessageInputStream = c;
          var d = function() {
            function b(b, c, d, e) {
              this.retain = !1,
                this.qos = a.Qos.AT_LEAST_ONCE,
                this.dup = !1,
                this.syncMsg = !1,
                b && +b == b && 1 == arguments.length ? (this.retain = (1 & b) > 0, this.qos = (6 & b) >> 1, this.dup = (8 & b) > 0, this.type = b >> 4 & 15, this.syncMsg = 8 == (8 & b)) : (this.type = b, this.retain = c, this.qos = d, this.dup = e)
            }
            return b.prototype.getSyncMsg = function() {
              return this.syncMsg
            },
              b.prototype.getType = function() {
                return this.type
              },
              b.prototype.encode = function() {
                var b = this;
                switch (this.qos) {
                  case a.Qos[0]:
                    b.qos = a.Qos.AT_MOST_ONCE;
                    break;
                  case a.Qos[1]:
                    b.qos = a.Qos.AT_LEAST_ONCE;
                    break;
                  case a.Qos[2]:
                    b.qos = a.Qos.EXACTLY_ONCE;
                    break;
                  case a.Qos[3]:
                    b.qos = a.Qos.DEFAULT
                }
                var c = this.type << 4;
                return c |= this.retain ? 1 : 0,
                  c |= this.qos << 1,
                  c |= this.dup ? 8 : 0
              },
              b.prototype.toString = function() {
                return "Header [type=" + this.type + ",retain=" + this.retain + ",qos=" + this.qos + ",dup=" + this.dup + "]"
              },
              b
          } ();
          a.Header = d;
          var e = function() {
            function a() {}
            return a.prototype.writeUTF = function(a, b) {
              for (var c = [], d = 0, e = 0, f = a.length; e < f; e++) {
                var g = a.charCodeAt(e);
                g >= 0 && g <= 127 ? (d += 1, c.push(g)) : g >= 128 && g <= 2047 ? (d += 2, c.push(192 | 31 & g >> 6), c.push(128 | 63 & g)) : g >= 2048 && g <= 65535 && (d += 3, c.push(224 | 15 & g >> 12), c.push(128 | 63 & g >> 6), c.push(128 | 63 & g))
              }
              for (var e = 0,
                     f = c.length; e < f; e++) c[e] > 255 && (c[e] &= 255);
              return b ? c: d <= 255 ? [0, d].concat(c) : [d >> 8, 255 & d].concat(c)
            },
              a.prototype.readUTF = function(a) {
                if ("[object String]" == Object.prototype.toString.call(a)) return a;
                for (var b = "",
                       c = a,
                       d = 0,
                       e = c.length; d < e; d++) {
                  c[d] < 0 && (c[d] += 256);
                  var f = c[d].toString(2),
                    g = f.match(/^1+?(?=0)/);
                  if (g && 8 == f.length) {
                    for (var h = g[0].length, i = "", j = 0; j < h; j++) i += c[j + d].toString(2).slice(2);
                    b += String.fromCharCode(parseInt(i, 2)),
                      d += h - 1
                  } else b += String.fromCharCode(c[d])
                }
                return b
              },
              a.prototype.convertStream = function(a) {
                return a instanceof f ? a: new f(a)
              },
              a.prototype.toMQttString = function(a) {
                return this.writeUTF(a)
              },
              a
          } ();
          a.BinaryHelper = e;
          var f = function() {
            function a(a) {
              this.position = 0,
                this.writen = 0,
                this.poolLen = 0,
                this.binaryHelper = new e,
                this.pool = a,
                this.poolLen = a.length
            }
            return a.prototype.check = function() {
              return this.position >= this.pool.length
            },
              a.prototype.readInt = function() {
                if (this.check()) return - 1;
                for (var a = "",
                       b = 0; b < 4; b++) {
                  var c = this.pool[this.position++].toString(16);
                  1 == c.length && (c = "0" + c),
                    a += c.toString(16)
                }
                return parseInt(a, 16)
              },
              a.prototype.readLong = function() {
                if (this.check()) return - 1;
                for (var a = "",
                       b = 0; b < 8; b++) {
                  var c = this.pool[this.position++].toString(16);
                  1 == c.length && (c = "0" + c),
                    a += c
                }
                return parseInt(a, 16)
              },
              a.prototype.readTimestamp = function() {
                if (this.check()) return - 1;
                for (var a = "",
                       b = 0; b < 8; b++) a += this.pool[this.position++].toString(16);
                return a = a.substring(2, 8),
                  parseInt(a, 16)
              },
              a.prototype.readUTF = function() {
                if (this.check()) return - 1;
                var a = this.readByte() << 8 | this.readByte();
                return this.binaryHelper.readUTF(this.pool.subarray(this.position, this.position += a))
              },
              a.prototype.readByte = function() {
                if (this.check()) return - 1;
                var a = this.pool[this.position++];
                return a > 255 && (a &= 255),
                  a
              },
              a.prototype.read = function(a) {
                return a ? this.pool.subarray(this.position, this.poolLen) : this.readByte()
              },
              a.prototype.write = function(a) {
                var b = a;
                return "[object array]" == Object.prototype.toString.call(b).toLowerCase() ? [].push.apply(this.pool, b) : +b == b && (b > 255 && (b &= 255), this.pool.push(b), this.writen++),
                  b
              },
              a.prototype.writeChar = function(a) {
                if ( + a != a) throw new Error("writeChar:arguments type is error");
                this.write(a >> 8 & 255),
                  this.write(255 & a),
                  this.writen += 2
              },
              a.prototype.writeUTF = function(a) {
                var b = this.binaryHelper.writeUTF(a); [].push.apply(this.pool, b),
                  this.writen += b.length
              },
              a.prototype.toComplements = function() {
                for (var a = this.pool,
                       b = 0; b < this.poolLen; b++) a[b] > 128 && (a[b] -= 256);
                return a
              },
              a.prototype.getBytesArray = function(a) {
                return a ? this.toComplements() : this.pool
              },
              a
          } ();
          a.RongIMStream = f
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) {
          var b = function() {
            function b(a) {
              return this.connected = !1,
                this.isClose = !1,
                this.queue = [],
                this.empty = new Function,
                this._socket = a,
                this
            }
            return b.prototype.createTransport = function(b, c) {
              if (!b) throw new Error("URL can't be empty");
              this.url = b;
              var d = a.RongIMClient._memoryStore.depend,
                e = d.wsScheme;
              return b = a.RongUtil.tplEngine("{wsScheme}{url}", {
                wsScheme: e,
                url: b
              }),
                this.socket = new WebSocket(b),
                this.socket.binaryType = "arraybuffer",
                this.addEvent(),
                this.socket
            },
              b.prototype.send = function(b) {
                if (!this.connected && !this.isClose) return void this.queue.push(b);
                if (this.isClose) return void this._socket.fire("StatusChanged", a.ConnectionStatus.CONNECTION_CLOSED);
                var c = new a.RongIMStream([]);
                new a.MessageOutputStream(c).writeMessage(b);
                var d = c.getBytesArray(!0),
                  e = new Int8Array(d);
                return this.socket.send(e.buffer),
                  this
              },
              b.prototype.onData = function(b) {
                return a.MessageUtil.isArray(b) ? this._socket.onMessage(new a.MessageInputStream(b).readMessage()) : this._socket.onMessage(new a.MessageInputStream(a.MessageUtil.ArrayFormInput(b)).readMessage()),
                  ""
              },
              b.prototype.onClose = function(b) {
                var c = this;
                c.isClose = !0,
                  c.socket = this.empty,
                  a.Bridge._client.clearHeartbeat(),
                  1006 != b.code || this._status ? c._status = 0 : c._socket.fire("StatusChanged", a.ConnectionStatus.NETWORK_UNAVAILABLE)
              },
              b.prototype.onError = function(a) {
                throw new Error(a)
              },
              b.prototype.addEvent = function() {
                var a = this;
                a.socket.onopen = function() {
                  a.connected = !0,
                    a.isClose = !1,
                    a.doQueue(),
                    a._socket.fire("connect")
                },
                  a.socket.onmessage = function(b) {
                    "string" == typeof b.data ? a.onData(b.data.split(",")) : a.onData(b.data)
                  },
                  a.socket.onerror = function(b) {
                    a.onError(b)
                  },
                  a.socket.onclose = function(b) {
                    a.onClose(b)
                  }
              },
              b.prototype.doQueue = function() {
                for (var a = this,
                       b = 0,
                       c = a.queue.length; b < c; b++) a.send(a.queue[b])
              },
              b.prototype.disconnect = function(a) {
                var b = this;
                b.socket.readyState && (b.isClose = !0, a && (b._status = a), b.socket.close())
              },
              b.prototype.reconnect = function() {
                this.disconnect(),
                  this.createTransport(this.url)
              },
              b.prototype.close = function() {
                this.socket.close()
              },
              b
          } ();
          a.SocketTransportation = b
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) {
          var b = function() {
            function b(a) {
              return this.empty = new Function,
                this.connected = !1,
                this.pid = +new Date + Math.random() + "",
                this.queue = [],
                this.socket = a,
                this
            }
            return b.prototype.createTransport = function(b, c) {
              if (!b) throw new Error("Url is empty,Please check it!");
              this.url = b;
              var d = a.RongIMClient._storageProvider.getItem("sId" + a.Navigation.Endpoint.userId),
                e = this;
              return d ? (setTimeout(function() {
                  e.onSuccess('{"status":0,"userId":"' + a.Navigation.Endpoint.userId + '","headerCode":32,"messageId":0,"sessionid":"' + d + '"}'),
                    e.connected = !0
                },
                500), this) : (this.getRequest(b, !0), this)
            },
              b.prototype.requestFactory = function(b, c, d) {
                var e = this.XmlHttpRequest();
                return d && (e.multipart = !0),
                  e.open(c || "GET", a.RongIMClient._memoryStore.depend.protocol + b),
                "POST" == c && "setRequestHeader" in e && e.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8"),
                  e
              },
              b.prototype.getRequest = function(a, b) {
                var c = this;
                c.xhr = this.requestFactory(a + "&pid=" + encodeURIComponent(c.pid), "GET"),
                  "onload" in c.xhr ? (c.xhr.onload = function() {
                    c.xhr.onload = c.empty,
                      "lost params" == this.responseText ? c.onError() : c.onSuccess(this.responseText, b)
                  },
                    c.xhr.onerror = function() {
                      c.disconnect()
                    }) : c.xhr.onreadystatechange = function() {
                    4 == c.xhr.readyState && (c.xhr.onreadystatechange = c.empty, /^(200|202)$/.test(c.xhr.status) ? c.onSuccess(c.xhr.responseText, b) : /^(400|403)$/.test(c.xhr.status) ? c.onError() : c.disconnect())
                  },
                  c.xhr.send()
              },
              b.prototype.send = function(b) {
                var c = this,
                  d = c.sendxhr = this.requestFactory(a.Navigation.Endpoint.host + "/websocket" + b.url + "&pid=" + encodeURIComponent(c.pid), "POST");
                "onload" in d ? (d.onload = function() {
                  d.onload = c.empty,
                    c.onData(d.responseText)
                },
                  d.onerror = function() {
                    d.onerror = c.empty
                  }) : d.onreadystatechange = function() {
                  4 == d.readyState && (this.onreadystatechange = this.empty, /^(202|200)$/.test(d.status) && c.onData(d.responseText))
                },
                  d.send(JSON.stringify(b.data))
              },
              b.prototype.onData = function(b, c) {
                if (b && "lost params" != b) {
                  var d = this,
                    e = JSON.parse(b);
                  return e.userId && (a.Navigation.Endpoint.userId = e.userId),
                  c && a.RongIMClient._storageProvider.setItem("sId" + a.Navigation.Endpoint.userId, c),
                  a.MessageUtil.isArray(e) || (e = [e]),
                    Array.forEach(e,
                      function(b) {
                        d.socket.fire("message", new a.MessageInputStream(b, !0).readMessage())
                      }),
                    ""
                }
              },
              b.prototype.XmlHttpRequest = function() {
                var a = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
                return "undefined" != typeof XMLHttpRequest && a ? new XMLHttpRequest: "undefined" != typeof XDomainRequest ? new XDomainRequest: new ActiveXObject("Microsoft.XMLHTTP")
              },
              b.prototype.onClose = function() {
                this.xhr && (this.xhr.onload ? this.xhr.onreadystatechange = this.xhr.onload = this.empty: this.xhr.onreadystatechange = this.empty, this.xhr.abort(), this.xhr = null),
                this.sendxhr && (this.sendxhr.onload ? this.sendxhr.onreadystatechange = this.sendxhr.onload = this.empty: this.sendxhr.onreadystatechange = this.empty, this.sendxhr.abort(), this.sendxhr = null)
              },
              b.prototype.disconnect = function() {
                a.RongIMClient._storageProvider.removeItem("sId" + a.Navigation.Endpoint.userId),
                  a.RongIMClient._storageProvider.removeItem(a.Navigation.Endpoint.userId + "msgId"),
                  this.onClose()
              },
              b.prototype.reconnect = function() {
                this.disconnect(),
                  this.createTransport(this.url)
              },
              b.prototype.onSuccess = function(b, c) {
                var d = b.match(/"sessionid":"\S+?(?=")/);
                if (this.onData(b, d ? d[0].slice(13) : 0), /"headerCode":-32,/.test(b)) return a.RongIMClient._storageProvider.removeItem("sId" + a.Navigation.Endpoint.userId),
                  void a.RongIMClient._storageProvider.removeItem(a.Navigation.Endpoint.userId + "msgId");
                this.getRequest(a.Navigation.Endpoint.host + "/pullmsg.js?sessionid=" + a.RongIMClient._storageProvider.getItem("sId" + a.Navigation.Endpoint.userId) + "&timestrap=" + encodeURIComponent((new Date).getTime() + Math.random() + "")),
                  this.connected = !0,
                c && this.socket.fire("connect")
              },
              b.prototype.onError = function() {
                a.RongIMClient._storageProvider.removeItem("sId" + a.Navigation.Endpoint.userId),
                  a.RongIMClient._storageProvider.removeItem(a.Navigation.Endpoint.userId + "msgId"),
                  this.onClose(),
                  this.connected = !1,
                  this.socket.fire("disconnect")
              },
              b.prototype.close = function() {
                this.xhr.abort(),
                  this.sendxhr = null
              },
              b
          } ();
          a.PollingTransportation = b
        } (RongIMLib || (RongIMLib = {}));
      var typeMapping = {
          "RC:TxtMsg": "TextMessage",
          "RC:ImgMsg": "ImageMessage",
          "RC:VcMsg": "VoiceMessage",
          "RC:ImgTextMsg": "RichContentMessage",
          "RC:FileMsg": "FileMessage",
          "RC:HQVCMsg": "HQVoiceMessage",
          "RC:LBSMsg": "LocationMessage",
          "RC:InfoNtf": "InformationNotificationMessage",
          "RC:ContactNtf": "ContactNotificationMessage",
          "RC:ProfileNtf": "ProfileNotificationMessage",
          "RC:CmdNtf": "CommandNotificationMessage",
          "RC:DizNtf": "DiscussionNotificationMessage",
          "RC:CmdMsg": "CommandMessage",
          "RC:TypSts": "TypingStatusMessage",
          "RC:CsChaR": "ChangeModeResponseMessage",
          "RC:CsHsR": "HandShakeResponseMessage",
          "RC:CsEnd": "TerminateMessage",
          "RC:CsSp": "SuspendMessage",
          "RC:CsUpdate": "CustomerStatusUpdateMessage",
          "RC:ReadNtf": "ReadReceiptMessage",
          "RC:VCAccept": "AcceptMessage",
          "RC:VCRinging": "RingingMessage",
          "RC:VCSummary": "SummaryMessage",
          "RC:VCHangup": "HungupMessage",
          "RC:VCInvite": "InviteMessage",
          "RC:VCModifyMedia": "MediaModifyMessage",
          "RC:VCModifyMem": "MemberModifyMessage",
          "RC:CsContact": "CustomerContact",
          "RC:PSImgTxtMsg": "PublicServiceRichContentMessage",
          "RC:PSMultiImgTxtMsg": "PublicServiceMultiRichContentMessage",
          "RC:GrpNtf": "GroupNotificationMessage",
          "RC:PSCmd": "PublicServiceCommandMessage",
          "RC:RcCmd": "RecallCommandMessage",
          "RC:SRSMsg": "SyncReadStatusMessage",
          "RC:RRReqMsg": "ReadReceiptRequestMessage",
          "RC:RRRspMsg": "ReadReceiptResponseMessage",
          "RCJrmf:RpMsg": "JrmfRedPacketMessage",
          "RCJrmf:RpOpendMsg": "JrmfRedPacketOpenedMessage"
        },
        registerMessageTypeMapping = {},
        HistoryMsgType = {
          4 : "qryCMsg",
          2 : "qryDMsg",
          3 : "qryGMsg",
          1 : "qryPMsg",
          6 : "qrySMsg",
          7 : "qryPMsg",
          8 : "qryPMsg",
          5 : "qryCMsg"
        },
        disconnectStatus = {
          1 : 6
        },
        RongIMLib; !
        function(RongIMLib) {
          var Transportations = function() {
            function a() {}
            return a._TransportType = RongIMLib.Socket.WEBSOCKET,
              a
          } ();
          RongIMLib.Transportations = Transportations;
          var SyncTimeUtil = function() {
            function a() {}
            return a.$getKey = function(a) {
              var b = RongIMLib.Bridge._client,
                c = b.userId,
                d = 1 == a.messageDirection ? "send": "receive",
                e = RongIMLib.RongIMClient._memoryStore.appKey;
              return RongIMLib.RongUtil.tplEngine("{appkey}_{userId}_{direction}box", {
                appkey: e,
                userId: c,
                direction: d
              })
            },
              a.set = function(b) {
                var c = a.$getKey(b),
                  d = b.sentTime;
                RongIMLib.RongIMClient._storageProvider.setItem(c, d)
              },
              a.get = function() {
                var b = a.$getKey({
                    messageDirection: RongIMLib.MessageDirection.SEND
                  }),
                  c = a.$getKey({
                    messageDirection: RongIMLib.MessageDirection.RECEIVE
                  }),
                  d = RongIMLib.RongIMClient._storageProvider;
                return {
                  sent: Number(d.getItem(b) || 0),
                  received: Number(d.getItem(c) || 0)
                }
              },
              a
          } ();
          RongIMLib.SyncTimeUtil = SyncTimeUtil;
          var MessageUtil = function() {
            function MessageUtil() {}
            return MessageUtil.checkStorageSize = function() {
              return JSON.stringify(localStorage).length < 468e4
            },
              MessageUtil.getFirstKey = function(a) {
                var b = "";
                for (var c in a) {
                  b = c;
                  break
                }
                return b
              },
              MessageUtil.isEmpty = function(a) {
                var b = !0;
                for (var c in a) {
                  b = !1;
                  break
                }
                return b
              },
              MessageUtil.ArrayForm = function(a) {
                if ("[object ArrayBuffer]" == Object.prototype.toString.call(a)) {
                  var b = new Int8Array(a);
                  return [].slice.call(b)
                }
                return a
              },
              MessageUtil.ArrayFormInput = function(a) {
                if ("[object ArrayBuffer]" == Object.prototype.toString.call(a)) {
                  return new Uint8Array(a)
                }
                return a
              },
              MessageUtil.indexOf = function(a, b, c) {
                for (var d = a.length,
                       e = c < 0 ? Math.max(0, +c) : c || 0; e < d; e++) if (a[e] == b) return e;
                return - 1
              },
              MessageUtil.isArray = function(a) {
                return "[object Array]" == Object.prototype.toString.call(a)
              },
              MessageUtil.forEach = function(a, b) {
                return [].forEach ?
                  function(a, b) { [].forEach.call(a, b)
                  }: function(a, b) {
                    for (var c = 0; c < a.length; c++) b.call(a, a[c], c, a)
                  }
              },
              MessageUtil.remove = function(a, b) {
                for (var c = 0,
                       d = a.length; c < d; c++) if (b(a[c])) return a.splice(c, 1)[0];
                return null
              },
              MessageUtil.int64ToTimestamp = function(a, b) {
                if (void 0 === a.low) return a;
                var c = a.low;
                c < 0 && (c += 4294967296),
                  c = c.toString(16);
                var d = parseInt(a.high.toString(16) + "00000000".replace(new RegExp("0{" + c.length + "}$"), c), 16);
                return b ? new Date(d) : d
              },
              MessageUtil.messageParser = function(entity, onReceived, offlineMsg) {
                var message = new RongIMLib.Message,
                  content = entity.content,
                  de, objectName = entity.classname,
                  val, isUseDef = !1;
                try {
                  RongIMLib.RongIMClient._memoryStore.depend.isPolling ? (val = (new RongIMLib.BinaryHelper).readUTF(content.offset ? MessageUtil.ArrayForm(content.buffer).slice(content.offset, content.limit) : content), de = JSON.parse(val)) : (val = (new RongIMLib.BinaryHelper).readUTF(content.offset ? MessageUtil.ArrayFormInput(content.buffer).subarray(content.offset, content.limit) : content), de = JSON.parse(val))
                } catch(ex) {
                  de = val,
                    isUseDef = !0
                }
                if (objectName in typeMapping) {
                  var str = "new RongIMLib." + typeMapping[objectName] + "(de)";
                  message.content = eval(str),
                    message.messageType = typeMapping[objectName]
                } else if (objectName in registerMessageTypeMapping) {
                  var str = "new RongIMLib.RongIMClient.RegisterMessage." + registerMessageTypeMapping[objectName] + "(de)";
                  message.content = isUseDef ? eval(str).decode(de) : eval(str),
                    message.messageType = registerMessageTypeMapping[objectName]
                } else message.content = new RongIMLib.UnknownMessage({
                  content: de,
                  objectName: objectName
                }),
                  message.messageType = "UnknownMessage";
                var dateTime = MessageUtil.int64ToTimestamp(entity.dataTime);
                message.sentTime = dateTime > 0 ? dateTime: +new Date,
                  message.senderUserId = entity.fromUserId,
                  message.conversationType = entity.type,
                  entity.fromUserId == RongIMLib.Bridge._client.userId ? message.targetId = entity.groupId: message.targetId = /^[234]$/.test(entity.type || entity.getType()) ? entity.groupId: message.senderUserId;
                var selfUserId = RongIMLib.Bridge._client.userId,
                  isSelfSend = 1 == entity.direction || message.senderUserId === selfUserId;
                isSelfSend ? (message.messageDirection = RongIMLib.MessageDirection.SEND, message.senderUserId = RongIMLib.Bridge._client.userId) : message.messageDirection = RongIMLib.MessageDirection.RECEIVE;
                var isSelfToSelf = message.senderUserId === selfUserId && message.targetId === selfUserId;
                return isSelfToSelf && (message.messageDirection = RongIMLib.MessageDirection.RECEIVE),
                  message.messageUId = entity.msgId,
                  message.receivedTime = (new Date).getTime(),
                  message.messageId = message.conversationType + "_" + ~~ (16777215 * Math.random()),
                  message.objectName = objectName,
                  message.receivedStatus = RongIMLib.ReceivedStatus.READ,
                2 == (2 & entity.status) && (message.receivedStatus = RongIMLib.ReceivedStatus.RETRIEVED),
                  message.offLineMessage = !!offlineMsg,
                offlineMsg || RongIMLib.RongIMClient._memoryStore.connectAckTime > message.sentTime && (message.offLineMessage = !0),
                  message
              },
              MessageUtil.detectCMP = function(a) {
                var b = new XMLHttpRequest;
                b.onreadystatechange = function() {
                  if (4 == b.readyState) {
                    200 == b.status ? a.success() : a.fail(b.status)
                  }
                };
                var c = a.url,
                  d = a.url,
                  c = a.method || "GET";
                b.open(c, d);
                var e = a.headers;
                for (var f in e) {
                  var g = e[f];
                  b.setRequestHeader(f, g)
                }
                var h = JSON.stringify(a.body || {});
                return b.send(h),
                  b
              },
              MessageUtil.sign = {
                converNum: 1,
                msgNum: 1,
                isMsgStart: !0,
                isConvStart: !0
              },
              MessageUtil
          } ();
          RongIMLib.MessageUtil = MessageUtil;
          var MessageIdHandler = function() {
            function a() {}
            return a.init = function() {
              this.messageId = +(RongIMLib.RongIMClient._storageProvider.getItem(RongIMLib.Navigation.Endpoint.userId + "msgId") || RongIMLib.RongIMClient._storageProvider.setItem(RongIMLib.Navigation.Endpoint.userId + "msgId", 0) || 0)
            },
              a.messageIdPlus = function(a) {
                return RongIMLib.RongIMClient._memoryStore.depend.isPolling && this.init(),
                  this.messageId >= 65535 ? (a(), !1) : (this.messageId++, RongIMLib.RongIMClient._memoryStore.depend.isPolling && RongIMLib.RongIMClient._storageProvider.setItem(RongIMLib.Navigation.Endpoint.userId + "msgId", this.messageId), this.messageId)
              },
              a.clearMessageId = function() {
                this.messageId = 0,
                RongIMLib.RongIMClient._memoryStore.depend.isPolling && RongIMLib.RongIMClient._storageProvider.setItem(RongIMLib.Navigation.Endpoint.userId + "msgId", this.messageId)
              },
              a.getMessageId = function() {
                return RongIMLib.RongIMClient._memoryStore.depend.isPolling && this.init(),
                  this.messageId
              },
              a.messageId = 0,
              a
          } ();
          RongIMLib.MessageIdHandler = MessageIdHandler;
          var RongInnerTools = function() {
            function a() {}
            return a.convertUserStatus = function(a) {
              a = RongIMLib.RongUtil.rename(a, {
                subUserId: "userId"
              });
              var b = JSON.parse(a.status),
                c = b.us;
              return c ? (a.status = RongIMLib.RongUtil.rename(c, {
                o: "online",
                p: "platform",
                s: "status"
              }), a) : a
            },
              a
          } ();
          RongIMLib.RongInnerTools = RongInnerTools
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) {
          var b = function() {
            function a(a) {
              throw new Error("This method is abstract, you must implement this method in inherited class.")
            }
            return a.obtain = function() {
              throw new Error("This method is abstract, you must implement this method in inherited class.")
            },
              a
          } ();
          a.MessageContent = b;
          var c = function(a) {
            function b() {
              a.apply(this, arguments)
            }
            return __extends(b, a),
              b
          } (b);
          a.NotificationMessage = c;
          var d = function(a) {
            function b() {
              a.apply(this, arguments)
            }
            return __extends(b, a),
              b
          } (b);
          a.StatusMessage = d;
          var e = function() {
            function b() {}
            return b.modelClone = function(a) {
              var b = {};
              for (var c in a)"messageName" != c && "encode" != c && (b[c] = a[c]);
              return b
            },
              b.modleCreate = function(b, c) {
                var d = function(e) {
                  var f = this;
                  for (var g in b) f[b[g]] = e[b[g]];
                  d.prototype.messageName = c,
                    d.prototype.encode = function() {
                      return JSON.stringify(a.ModelUtil.modelClone(this))
                    }
                };
                return d
              },
              b
          } ();
          a.ModelUtil = e
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) {
          var b = function() {
            function b(a) {
              this.messageName = "CustomerStatusMessage",
                this.status = a.status
            }
            return b.obtain = function() {
              return null
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.CustomerStatusMessage = b;
          var c = function() {
            function b(a) {
              this.messageName = "ChangeModeResponseMessage",
                this.code = a.code,
                this.data = a.data,
                this.msg = a.msg
            }
            return b.obtain = function() {
              return null
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.ChangeModeResponseMessage = c;
          var d = function() {
            function b(a) {
              this.messageName = "ChangeModeMessage",
                this.uid = a.uid,
                this.sid = a.sid,
                this.pid = a.pid
            }
            return b.obtain = function() {
              return null
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.ChangeModeMessage = d;
          var e = function() {
            function b(a) {
              this.messageName = "CustomerStatusUpdateMessage",
                this.serviceStatus = a.serviceStatus,
                this.sid = a.sid
            }
            return b.obtain = function() {
              return null
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.CustomerStatusUpdateMessage = e;
          var f = function() {
            function b(a) {
              this.messageName = "HandShakeMessage",
              a && (this.requestInfo = a.requestInfo, this.userInfo = a.userInfo)
            }
            return b.obtain = function() {
              return null
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.HandShakeMessage = f;
          var g = function() {
            function b(a) {
              this.messageName = "CustomerContact",
                this.page = a.page,
                this.nickName = a.nickName,
                this.routingInfo = a.routingInfo,
                this.info = a.info,
                this.requestInfo = a.requestInfo
            }
            return b.prototype.encode = function() {
              return JSON.stringify(a.ModelUtil.modelClone(this))
            },
              b
          } ();
          a.CustomerContact = g;
          var h = function() {
            function b(a) {
              this.messageName = "EvaluateMessage",
                this.uid = a.uid,
                this.sid = a.sid,
                this.pid = a.pid,
                this.source = a.source,
                this.suggest = a.suggest,
                this.isresolve = a.isresolve,
                this.type = a.type
            }
            return b.obtain = function() {
              return null
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.EvaluateMessage = h;
          var i = function() {
            function b(a) {
              this.messageName = "HandShakeResponseMessage",
                this.msg = a.msg,
                this.status = a.status,
                this.data = a.data
            }
            return b.obtain = function() {
              return null
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.HandShakeResponseMessage = i;
          var j = function() {
            function b(a) {
              this.messageName = "SuspendMessage",
                this.uid = a.uid,
                this.sid = a.sid,
                this.pid = a.pid
            }
            return b.obtain = function() {
              return null
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.SuspendMessage = j;
          var k = function() {
            function b(a) {
              this.messageName = "TerminateMessage",
                this.code = a.code,
                this.msg = a.msg,
                this.sid = a.sid
            }
            return b.obtain = function() {
              return null
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.TerminateMessage = k
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) {
          var b = function() {
            function a(a) {
              this.messageName = "IsTypingStatusMessage"
            }
            return a.prototype.encode = function() {},
              a.prototype.getMessage = function() {
                return null
              },
              a
          } ();
          a.IsTypingStatusMessage = b
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) {
          var b = function() {
            function b(a) {
              if (this.messageName = "InformationNotificationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> InformationNotificationMessage.");
              this.message = a.message,
                this.extra = a.extra,
              a.user && (this.user = a.user)
            }
            return b.obtain = function(a) {
              return new b({
                message: a,
                extra: ""
              })
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.InformationNotificationMessage = b;
          var c = function() {
            function b(a) {
              if (this.messageName = "CommandMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> CommandMessage.");
              try {
                "[object String]" == Object.prototype.toString.call(a.data) ? this.data = JSON.parse(a.data) : this.data = a.data
              } catch(b) {
                this.data = a.data
              }
              this.name = a.name,
                this.extra = a.extra
            }
            return b.obtain = function(a) {
              return new b({
                data: a,
                extra: ""
              })
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.CommandMessage = c;
          var d = function() {
            function c(a) {
              if (this.messageName = "ContactNotificationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ContactNotificationMessage.");
              this.operation = a.operation,
                this.targetUserId = a.targetUserId,
                this.message = a.message,
                this.extra = a.extra,
                this.sourceUserId = a.sourceUserId,
              a.user && (this.user = a.user)
            }
            return c.obtain = function(a, c, d, e) {
              return new b({
                operation: a,
                sourceUserId: c,
                targetUserId: d,
                message: e
              })
            },
              c.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              c.CONTACT_OPERATION_ACCEPT_RESPONSE = "ContactOperationAcceptResponse",
              c.CONTACT_OPERATION_REJECT_RESPONSE = "ContactOperationRejectResponse",
              c.CONTACT_OPERATION_REQUEST = "ContactOperationRequest",
              c
          } ();
          a.ContactNotificationMessage = d;
          var e = function() {
            function b(a) {
              if (this.messageName = "ProfileNotificationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ProfileNotificationMessage.");
              this.operation = a.operation;
              try {
                "[object String]" == Object.prototype.toString.call(a.data) ? this.data = JSON.parse(a.data) : this.data = a.data
              } catch(b) {
                this.data = a.data
              }
              this.extra = a.extra,
              a.user && (this.user = a.user)
            }
            return b.obtain = function(a, c) {
              return new b({
                operation: a,
                data: c
              })
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.ProfileNotificationMessage = e;
          var f = function() {
            function b(a) {
              if (this.messageName = "CommandNotificationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ProfileNotificationMessage.");
              try {
                "[object String]" == Object.prototype.toString.call(a.data) ? this.data = JSON.parse(a.data) : this.data = a.data
              } catch(b) {
                this.data = a.data
              }
              this.name = a.name,
                this.extra = a.extra,
              a.user && (this.user = a.user)
            }
            return b.obtain = function(a, c) {
              return new b({
                name: a,
                data: c,
                extra: ""
              })
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.CommandNotificationMessage = f;
          var g = function() {
            function b(a) {
              if (this.messageName = "DiscussionNotificationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> DiscussionNotificationMessage.");
              this.extra = a.extra,
                this.extension = a.extension,
                this.type = a.type,
                this.isHasReceived = a.isHasReceived,
                this.operation = a.operation,
                this.user = a.user,
              a.user && (this.user = a.user)
            }
            return b.prototype.encode = function() {
              return JSON.stringify(a.ModelUtil.modelClone(this))
            },
              b
          } ();
          a.DiscussionNotificationMessage = g;
          var h = function() {
            function b(a) {
              if (this.messageName = "GroupNotificationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> GroupNotificationMessage.");
              a.operatorUserId && (this.operatorUserId = a.operatorUserId),
              a.operation && (this.operation = a.operation),
              a.data && (this.data = a.data),
              a.message && (this.message = a.message),
              a.extra && (this.extra = a.extra)
            }
            return b.prototype.encode = function() {
              return JSON.stringify(a.ModelUtil.modelClone(this))
            },
              b
          } ();
          a.GroupNotificationMessage = h
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) {
          var b = function() {
            function b(a) {
              if (this.messageName = "TextMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> TextMessage.");
              this.content = a.content,
                this.extra = a.extra,
              a.user && (this.user = a.user),
              a.mentionedInfo && (this.mentionedInfo = a.mentionedInfo)
            }
            return b.obtain = function(a) {
              return new b({
                extra: "",
                content: a
              })
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.TextMessage = b;
          var c = function() {
            function b(a) {
              if (this.messageName = "TypingStatusMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> TypingStatusMessage.");
              this.typingContentType = a.typingContentType,
                this.data = a.data
            }
            return b.obtain = function(a, c) {
              return new b({
                typingContentType: a,
                data: c
              })
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.TypingStatusMessage = c;
          var d = function() {
            function b(a) {
              if (this.messageName = "ReadReceiptMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ReadReceiptMessage.");
              this.lastMessageSendTime = a.lastMessageSendTime,
                this.messageUId = a.messageUId,
                this.type = a.type
            }
            return b.obtain = function(a, c, d) {
              return new b({
                messageUId: a,
                lastMessageSendTime: c,
                type: d
              })
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.ReadReceiptMessage = d;
          var e = function() {
            function b(a) {
              if (this.messageName = "VoiceMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> VoiceMessage.");
              this.content = a.content,
                this.duration = a.duration,
                this.extra = a.extra,
              a.user && (this.user = a.user),
              a.mentionedInfo && (this.mentionedInfo = a.mentionedInfo)
            }
            return b.obtain = function(a, c) {
              return new b({
                content: a,
                duration: c,
                extra: ""
              })
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.VoiceMessage = e;
          var f = function() {
            function b(a) {
              this.messageName = "RecallCommandMessage",
                this.messageUId = a.messageUId,
                this.conversationType = a.conversationType,
                this.targetId = a.targetId,
                this.sentTime = a.sentTime,
              a.extra && (this.extra = a.extra),
              a.user && (this.user = a.user)
            }
            return b.prototype.encode = function() {
              return JSON.stringify(a.ModelUtil.modelClone(this))
            },
              b
          } ();
          a.RecallCommandMessage = f;
          var g = function() {
            function b(a) {
              if (this.messageName = "ImageMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ImageMessage.");
              this.content = a.content,
                this.imageUri = a.imageUri,
              a.extra && (this.extra = a.extra),
              a.user && (this.user = a.user),
              a.mentionedInfo && (this.mentionedInfo = a.mentionedInfo)
            }
            return b.obtain = function(a, c) {
              return new b({
                content: a,
                imageUri: c,
                extra: ""
              })
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.ImageMessage = g;
          var h = function() {
            function b(a) {
              if (this.messageName = "LocationMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> LocationMessage.");
              this.latitude = a.latitude,
                this.longitude = a.longitude,
                this.poi = a.poi,
                this.content = a.content,
                this.extra = a.extra,
              a.user && (this.user = a.user),
              a.mentionedInfo && (this.mentionedInfo = a.mentionedInfo)
            }
            return b.obtain = function(a, c, d, e) {
              return new b({
                latitude: a,
                longitude: c,
                poi: d,
                content: e,
                extra: ""
              })
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.LocationMessage = h;
          var i = function() {
            function b(a) {
              if (this.messageName = "RichContentMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> RichContentMessage.");
              this.title = a.title,
                this.content = a.content,
                this.imageUri = a.imageUri,
                this.extra = a.extra,
                this.url = a.url,
              a.user && (this.user = a.user)
            }
            return b.obtain = function(a, c, d, e) {
              return new b({
                title: a,
                content: c,
                imageUri: d,
                url: e,
                extra: ""
              })
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.RichContentMessage = i;
          var j = function() {
            function a(a) {
              this.messageName = "JrmfRedPacketMessage",
              a && (this.message = a)
            }
            return a.prototype.encode = function() {
              return ""
            },
              a
          } ();
          a.JrmfRedPacketMessage = j;
          var k = function() {
            function a(a) {
              this.messageName = "JrmfRedPacketOpenedMessage",
              a && (this.message = a)
            }
            return a.prototype.encode = function() {
              return ""
            },
              a
          } ();
          a.JrmfRedPacketOpenedMessage = k;
          var l = function() {
            function a(a) {
              if (this.messageName = "UnknownMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> UnknownMessage.");
              this.message = a
            }
            return a.prototype.encode = function() {
              return ""
            },
              a
          } ();
          a.UnknownMessage = l;
          var m = function() {
            function b(a) {
              if (this.messageName = "PublicServiceCommandMessage", 0 == arguments.length) throw new Error("Can not instantiate with empty parameters, use obtain method instead -> PublicServiceCommandMessage.");
              this.content = a.content,
                this.extra = a.extra,
                this.menuItem = a.menuItem,
              a.user && (this.user = a.user),
              a.mentionedInfo && (this.mentionedInfo = a.mentionedInfo)
            }
            return b.obtain = function(a) {
              return new b({
                content: "",
                command: "",
                menuItem: a,
                extra: ""
              })
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.PublicServiceCommandMessage = m;
          var n = function() {
            function a(a) {
              this.messageName = "PublicServiceMultiRichContentMessage",
                this.richContentMessages = a
            }
            return a.prototype.encode = function() {
              return null
            },
              a
          } ();
          a.PublicServiceMultiRichContentMessage = n;
          var o = function() {
            function b(a) {
              this.messageName = "SyncReadStatusMessage",
              a.lastMessageSendTime && (this.lastMessageSendTime = a.lastMessageSendTime)
            }
            return b.prototype.encode = function() {
              return JSON.stringify(a.ModelUtil.modelClone(this))
            },
              b
          } ();
          a.SyncReadStatusMessage = o;
          var p = function() {
            function b(a) {
              this.messageName = "ReadReceiptRequestMessage",
              a.messageUId && (this.messageUId = a.messageUId)
            }
            return b.prototype.encode = function() {
              return JSON.stringify(a.ModelUtil.modelClone(this))
            },
              b
          } ();
          a.ReadReceiptRequestMessage = p;
          var q = function() {
            function b(a) {
              this.messageName = "ReadReceiptResponseMessage",
              a.receiptMessageDic && (this.receiptMessageDic = a.receiptMessageDic)
            }
            return b.prototype.encode = function() {
              return JSON.stringify(a.ModelUtil.modelClone(this))
            },
              b
          } ();
          a.ReadReceiptResponseMessage = q;
          var r = function() {
            function b(a) {
              this.messageName = "PublicServiceRichContentMessage",
                this.richContentMessage = a
            }
            return b.prototype.encode = function() {
              return JSON.stringify(a.ModelUtil.modelClone(this))
            },
              b
          } ();
          a.PublicServiceRichContentMessage = r;
          var s = function() {
            function b(a) {
              this.messageName = "FileMessage",
              a.name && (this.name = a.name),
              a.size && (this.size = a.size),
              a.type && (this.type = a.type),
              a.fileUrl && (this.fileUrl = a.fileUrl),
              a.extra && (this.extra = a.extra),
              a.user && (this.user = a.user)
            }
            return b.obtain = function(a) {
              return new b({
                name: a.name,
                size: a.size,
                type: a.type,
                fileUrl: a.fileUrl
              })
            },
              b.prototype.encode = function() {
                return JSON.stringify(a.ModelUtil.modelClone(this))
              },
              b
          } ();
          a.FileMessage = s;
          var t = function() {
            function b(a) {
              this.messageName = "HQVoiceMessage",
                this.type = a.type || "aac",
              a.localPath && (this.localPath = a.localPath),
              a.remoteUrl && (this.remoteUrl = a.remoteUrl),
              a.duration && (this.duration = a.duration),
              a.extra && (this.extra = a.extra),
              a.user && (this.user = a.user)
            }
            return b.prototype.encode = function() {
              return JSON.stringify(a.ModelUtil.modelClone(this))
            },
              b
          } ();
          a.HQVoiceMessage = t;
          var u = function() {
            function b(a) {
              this.messageName = "AcceptMessage",
                this.mediaId = a.mediaId,
                this.callId = a.callId,
                this.mediaType = a.mediaType,
                this.mode = a.mode,
                this.subInfo = a.subInfo
            }
            return b.prototype.encode = function() {
              return JSON.stringify(a.ModelUtil.modelClone(this))
            },
              b
          } ();
          a.AcceptMessage = u;
          var v = function() {
            function b(a) {
              this.messageName = "RingingMessage",
                this.callId = a.callId
            }
            return b.prototype.encode = function() {
              return JSON.stringify(a.ModelUtil.modelClone(this))
            },
              b
          } ();
          a.RingingMessage = v;
          var w = function() {
            function b(a) {
              this.messageName = "SummaryMessage",
                this.caller = a.caller,
                this.inviter = a.inviter,
                this.mediaType = a.mediaType,
                this.memberIdList = a.memberIdList,
                this.startTime = a.startTime,
                this.connectedTime = a.connectedTime,
                this.duration = a.duration,
                this.status = a.status
            }
            return b.prototype.encode = function() {
              return JSON.stringify(a.ModelUtil.modelClone(this))
            },
              b
          } ();
          a.SummaryMessage = w;
          var x = function() {
            function b(a) {
              this.messageName = "HungupMessage",
                this.callId = a.callId,
                this.reason = a.reason,
                this.mode = a.mode,
                this.subInfo = a.subInfo
            }
            return b.prototype.encode = function() {
              return JSON.stringify(a.ModelUtil.modelClone(this))
            },
              b
          } ();
          a.HungupMessage = x;
          var y = function() {
            function b(a) {
              this.messageName = "InviteMessage",
                this.mediaId = a.mediaId,
                this.callId = a.callId,
                this.engineType = a.engineType,
                this.channelInfo = a.channelInfo,
                this.mediaType = a.mediaType,
                this.extra = a.extra,
                this.inviteUserIds = a.inviteUserIds,
                this.observerUserIds = a.observerUserIds,
                this.mode = a.mode,
                this.subInfo = a.subInfo
            }
            return b.prototype.encode = function() {
              return JSON.stringify(a.ModelUtil.modelClone(this))
            },
              b
          } ();
          a.InviteMessage = y;
          var z = function() {
            function b(a) {
              this.messageName = "MediaModifyMessage",
                this.callId = a.callId,
                this.mediaType = a.mediaType,
                this.mode = a.mode,
                this.subInfo = a.subInfo
            }
            return b.prototype.encode = function() {
              return JSON.stringify(a.ModelUtil.modelClone(this))
            },
              b
          } ();
          a.MediaModifyMessage = z;
          var A = function() {
            function b(a) {
              this.messageName = "MemberModifyMessage",
                this.modifyMemType = a.modifyMemType,
                this.callId = a.callId,
                this.caller = a.caller,
                this.engineType = a.engineType,
                this.channelInfo = a.channelInfo,
                this.mediaType = a.mediaType,
                this.extra = a.extra,
                this.inviteUserIds = a.inviteUserIds,
                this.existedMemberStatusList = a.existedMemberStatusList,
                this.existedUserPofiles = a.existedUserPofiles,
                this.observerUserIds = a.observerUserIds,
                this.mode = a.mode,
                this.subInfo = a.subInfo
            }
            return b.prototype.encode = function() {
              return JSON.stringify(a.ModelUtil.modelClone(this))
            },
              b
          } ();
          a.MemberModifyMessage = A
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) {
          var b = function() {
            function a(a, b) {
              this.Id = a,
                this.Key = b
            }
            return a
          } ();
          a.ChannelInfo = b;
          var c = function() {
            function a(a, b, c) {
              this.platform = a,
                this.online = b,
                this.status = c
            }
            return a
          } ();
          a.UserStatus = c;
          var d = function() {
            function a(a, b, c) {}
            return a
          } ();
          a.MentionedInfo = d;
          var e = function() {
            function a(a, b, c) {
              this.msgId = a,
                this.msgDataTime = b,
                this.direct = c
            }
            return a
          } ();
          a.DeleteMessage = e;
          var f = function() {
            function a(a, b, c) {}
            return a
          } ();
          a.CustomServiceConfig = f;
          var g = function() {
            function a(a, b, c, d, e, f, g) {}
            return a
          } ();
          a.CustomServiceSession = g;
          var h = function() {
            function b(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u) {
              this.conversationTitle = a,
                this.conversationType = b,
                this.draft = c,
                this.isTop = d,
                this.latestMessage = e,
                this.latestMessageId = f,
                this.notificationStatus = g,
                this.objectName = h,
                this.receivedStatus = i,
                this.receivedTime = j,
                this.senderUserId = k,
                this.senderUserName = l,
                this.sentStatus = m,
                this.sentTime = n,
                this.targetId = o,
                this.unreadMessageCount = p,
                this.senderPortraitUri = q,
                this.isHidden = r,
                this.mentionedMsg = s,
                this.hasUnreadMention = t,
                this._readTime = u
            }
            return b.prototype.setTop = function() {
              a.RongIMClient._dataAccessProvider.addConversation(this, {
                onSuccess: function(a) {}
              })
            },
              b
          } ();
          a.Conversation = h;
          var i = function() {
            function a(a, b, c, d, e) {
              this.creatorId = a,
                this.id = b,
                this.memberIdList = c,
                this.name = d,
                this.isOpen = e
            }
            return a
          } ();
          a.Discussion = i;
          var j = function() {
            function a(a, b, c) {
              this.id = a,
                this.name = b,
                this.portraitUri = c
            }
            return a
          } ();
          a.Group = j;
          var k = function() {
            function a(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q) {
              this.content = a,
                this.conversationType = b,
                this.extra = c,
                this.objectName = d,
                this.messageDirection = e,
                this.messageId = f,
                this.receivedStatus = g,
                this.receivedTime = h,
                this.senderUserId = i,
                this.sentStatus = j,
                this.sentTime = k,
                this.targetId = l,
                this.messageType = m,
                this.messageUId = n,
                this.isLocalMessage = o,
                this.offLineMessage = p,
                this.receiptResponse = q
            }
            return a
          } ();
          a.Message = k;
          var l = function() {
            function a(a, b) {
              this.isCounted = a,
                this.isPersited = b
            }
            return a.prototype.getMessageTag = function() {
              return this.isCounted && this.isPersited ? 3 : this.isCounted ? 2 : this.isPersited ? 1 : this.isCounted || this.isPersited ? void 0 : 0
            },
              a.getTagByStatus = function(a) {
                var b = {
                  3 : {
                    isCounted: !0,
                    isPersited: !0
                  },
                  2 : {
                    isCounted: !0,
                    isPersited: !1
                  },
                  1 : {
                    isCounted: !0,
                    isPersited: !0
                  },
                  0 : {
                    isCounted: !0,
                    isPersited: !0
                  }
                };
                return b[a] || b[3]
              },
              a
          } ();
          a.MessageTag = l;
          var m = function() {
            function a(a, b, c, d, e) {
              this.id = a,
                this.name = b,
                this.type = c,
                this.sunMenuItems = d,
                this.url = e
            }
            return a
          } ();
          a.PublicServiceMenuItem = m;
          var n = function() {
            function a(a, b, c, d, e, f, g, h) {
              this.conversationType = a,
                this.introduction = b,
                this.menu = c,
                this.name = d,
                this.portraitUri = e,
                this.publicServiceId = f,
                this.hasFollowed = g,
                this.isGlobal = h
            }
            return a
          } ();
          a.PublicServiceProfile = n;
          var o = function() {
            function a(a, b, c) {
              this.id = a,
                this.name = b,
                this.portraitUri = c
            }
            return a
          } ();
          a.UserInfo = o;
          var p = function() {
            function a(a, b) {
              this.id = a,
                this.token = b
            }
            return a
          } ();
          a.User = p;
          var q = function() {
            function a(a, b, c) {
              this.id = a,
                this.user = b,
                this.mode = c
            }
            return a
          } ();
          a.Room = q
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) {
          var b = function() {
            function b() {
              this.userStatusListener = null
            }
            return b.prototype.init = function(b, c) {
              new a.FeatureDectector(c.appCallback)
            },
              b.prototype.connect = function(b, c, d, e) {
                a.RongIMClient.bridge = a.Bridge.getInstance(),
                  a.RongIMClient._memoryStore.token = b,
                  a.RongIMClient._memoryStore.callback = c,
                  d = d || "",
                  e = e || {};
                var f = !1,
                  g = !1;
                if (a.Bridge._client && a.Bridge._client.channel && (f = a.Bridge._client.channel.connectionStatus == a.ConnectionStatus.CONNECTING, g = a.Bridge._client.channel.connectionStatus == a.ConnectionStatus.CONNECTED), !g && !f) {
                  if (a.RongIMClient.otherDeviceLoginCount > 5) return void c.onError(a.ConnectionStatus.ULTRALIMIT);
                  e.force && a.RongIMClient._storageProvider.removeItem("servers");
                  for (var h = 0,
                         i = a.RongIMClient._memoryStore.listenerList.length; h < i; h++) a.RongIMClient.bridge.setListener(a.RongIMClient._memoryStore.listenerList[h]);
                  a.RongIMClient._memoryStore.listenerList.length = 0,
                    a.RongIMClient.bridge.connect(a.RongIMClient._memoryStore.appKey, b, {
                      onSuccess: function(a) {
                        setTimeout(function() {
                          c.onSuccess(a)
                        })
                      },
                      onError: function(b) {
                        b != a.ConnectionState.TOKEN_INCORRECT && b ? setTimeout(function() {
                          c.onError(b)
                        }) : setTimeout(function() {
                          c.onTokenIncorrect()
                        })
                      }
                    })
                }
              },
              b.prototype.reconnect = function(b, c) {
                var d = a.RongIMClient._memoryStore,
                  e = d.token;
                if (!e) throw new Error("reconnect: token is empty.");
                if (a.Bridge._client && a.Bridge._client.channel && a.Bridge._client.channel.connectionStatus != a.ConnectionStatus.CONNECTED && a.Bridge._client.channel.connectionStatus != a.ConnectionStatus.CONNECTING) {
                  c = c || {};
                  var f = c.auto ? "auto": "custom"; ({
                    auto: function() {
                      var d = function(b) {
                          var c = b.step(),
                            d = b.url,
                            e = function() {
                              a.RongUtil.request({
                                url: d,
                                success: function() {
                                  b.done()
                                },
                                error: function() {
                                  f()
                                }
                              })
                            },
                            f = function() {
                              var d = c();
                              if ("done" == d) {
                                var f = a.ConnectionStatus.NETWORK_UNAVAILABLE;
                                return void b.done(f)
                              }
                              setTimeout(e, d)
                            };
                          f()
                        },
                        f = a.RongIMClient._memoryStore.depend.protocol,
                        g = c.url || "cdn.ronghub.com/RongIMLib-2.2.6.min.js",
                        h = {
                          protocol: f,
                          path: g
                        };
                      g = a.RongUtil.formatProtoclPath(h);
                      var i = c.rate || [100, 1e3, 3e3, 6e3, 1e4, 18e3];
                      i.push("done"),
                        d({
                          url: g,
                          step: function() {
                            var a = 0;
                            return function() {
                              var b = i[a];
                              return a++,
                                b
                            }
                          },
                          done: function(c) {
                            if (c) return void b.onError(c);
                            a.RongIMClient.connect(e, b)
                          }
                        })
                    },
                    custom: function() {
                      a.RongIMClient.connect(e, b)
                    }
                  })[f]()
                }
              },
              b.prototype.logout = function() {
                a.RongIMClient.bridge.disconnect(),
                  a.RongIMClient.bridge = null
              },
              b.prototype.disconnect = function() {
                a.RongIMClient.bridge.disconnect()
              },
              b.prototype.sendReceiptResponse = function(b, c, d) {
                var e = a.Bridge._client.userId + b + c + "RECEIVED",
                  f = this;
                if (a.RongUtil.supportLocalStorage()) {
                  var g = JSON.parse(a.RongIMClient._storageProvider.getItem(e));
                  if (g) {
                    var h = [];
                    for (var i in g) {
                      var j = {};
                      j[i] = g[i].uIds,
                      g[i].isResponse || h.push(j)
                    }
                    if (0 == h.length) return void d.onSuccess();
                    var k = setInterval(function() {
                        1 == h.length && clearInterval(k);
                        var i = h.splice(0, 1)[0],
                          j = new a.ReadReceiptResponseMessage({
                            receiptMessageDic: i
                          });
                        f.sendMessage(b, c, j, {
                          onSuccess: function(b) {
                            var c = a.MessageUtil.getFirstKey(i);
                            g[c].isResponse = !0,
                              a.RongIMClient._storageProvider.setItem(e, JSON.stringify(g)),
                              d.onSuccess(b)
                          },
                          onError: function(a, b) {
                            d.onError(a, b)
                          }
                        })
                      },
                      200)
                  } else d.onSuccess()
                } else d.onSuccess()
              },
              b.prototype.sendTypingStatusMessage = function(b, c, d, e) {
                var f = this;
                d in a.RongIMClient.MessageParams && f.sendMessage(b, c, a.TypingStatusMessage.obtain(a.RongIMClient.MessageParams[d].objectName, ""), {
                  onSuccess: function() {
                    setTimeout(function() {
                      e.onSuccess()
                    })
                  },
                  onError: function(a) {
                    setTimeout(function() {
                      e.onError(a, null)
                    })
                  },
                  onBefore: function() {}
                })
              },
              b.prototype.sendRecallMessage = function(b, c) {
                var d = new a.RecallCommandMessage({
                  conversationType: b.conversationType,
                  targetId: b.targetId,
                  sentTime: b.sentTime,
                  messageUId: b.messageUId,
                  extra: b.extra,
                  user: b.user
                });
                this.sendMessage(b.conversationType, b.senderUserId, d, c, !1, null, null, 2)
              },
              b.prototype.sendTextMessage = function(b, c, d, e) {
                var f = a.TextMessage.obtain(d);
                this.sendMessage(b, c, f, e)
              },
              b.prototype.getRemoteHistoryMessages = function(b, c, d, e, f, g) {
                if (e <= 1) throw new Error("the count must be greater than 1.");
                g = g || {};
                var h = g.order || 0,
                  i = function() {
                    return [b, c, "_", h].join("")
                  },
                  j = i();
                a.RongUtil.isNumber(d) || (d = a.RongIMClient._memoryStore.lastReadTime.get(j));
                var k = a.RongIMClient._memoryStore,
                  l = k.historyMessageLimit,
                  m = l.get(j) || {},
                  n = m.hasMore;
                if (!n && m.time == d && 0 == h) return f.onSuccess([], n);
                var o = new a.RongIMClient.Protobuf.HistoryMsgInput;
                o.setTargetId(c),
                  o.setTime(d),
                  o.setCount(e),
                  o.setOrder(h),
                  a.RongIMClient.bridge.queryMsg(HistoryMsgType[b], a.MessageUtil.ArrayForm(o.toArrayBuffer()), c, {
                      onSuccess: function(b) {
                        var d = a.MessageUtil.int64ToTimestamp(b.syncTime);
                        a.RongIMClient._memoryStore.lastReadTime.set(j, d),
                          l.set(j, {
                            hasMore: !!b.hasMsg,
                            time: d
                          });
                        var e, g = b.list.reverse(),
                          h = null,
                          i = a.SentStatus.READ;
                        if (a.RongUtil.supportLocalStorage()) for (var k = 0,
                                                                     m = g.length; k < m; k++) h = a.MessageUtil.messageParser(g[k]),
                          e = JSON.parse(a.RongIMClient._storageProvider.getItem(a.Bridge._client.userId + h.messageUId + "SENT")),
                        e && (h.receiptResponse || (h.receiptResponse = {}), h.receiptResponse[h.messageUId] = e.count),
                          h.sentStatus = i,
                          h.targetId = c,
                          g[k] = h;
                        else for (var k = 0,
                                    m = g.length; k < m; k++) {
                          var h = a.MessageUtil.messageParser(g[k]);
                          h.sentStatus = i,
                            g[k] = h
                        }
                        setTimeout(function() {
                          f.onSuccess(g, !!b.hasMsg)
                        })
                      },
                      onError: function(a) {
                        setTimeout(function() {
                          f.onError(a)
                        })
                      }
                    },
                    "HistoryMessagesOuput")
              },
              b.prototype.hasRemoteUnreadMessages = function(b, c) {
                var d = null;
                window.RCCallback = function(a) {
                  setTimeout(function() {
                    c.onSuccess( !! +a.status)
                  }),
                    d.parentNode.removeChild(d)
                },
                  d = document.createElement("script"),
                  d.src = a.RongIMClient._memoryStore.depend.api + "/message/exist.js?appKey=" + encodeURIComponent(a.RongIMClient._memoryStore.appKey) + "&token=" + encodeURIComponent(b) + "&callBack=RCCallback&_=" + a.RongUtil.getTimestamp(),
                  document.body.appendChild(d),
                  d.onerror = function() {
                    setTimeout(function() {
                      c.onError(a.ErrorCode.UNKNOWN)
                    }),
                      d.parentNode.removeChild(d)
                  }
              },
              b.prototype.getRemoteConversationList = function(b, c, d) {
                var e = new a.RongIMClient.Protobuf.RelationsInput,
                  f = this;
                e.setType(1),
                  void 0 === d ? e.setCount(0) : e.setCount(d),
                  a.RongIMClient.bridge.queryMsg(26, a.MessageUtil.ArrayForm(e.toArrayBuffer()), a.Bridge._client.userId, {
                      onSuccess: function(d) {
                        if (d.info) {
                          d.info = d.info.reverse();
                          for (var e = 0,
                                 g = d.info.length; e < g; e++) a.RongIMClient.getInstance().pottingConversation(d.info[e])
                        }
                        var h = a.RongIMClient._memoryStore.conversationList;
                        setTimeout(function() {
                          if (c) return b.onSuccess(f.filterConversations(c, h));
                          b.onSuccess(h)
                        })
                      },
                      onError: function(a) {
                        b.onError(a)
                      }
                    },
                    "RelationsOutput")
              },
              b.prototype.addMemberToDiscussion = function(b, c, d) {
                var e = new a.RongIMClient.Protobuf.ChannelInvitationInput;
                e.setUsers(c),
                  a.RongIMClient.bridge.queryMsg(0, a.MessageUtil.ArrayForm(e.toArrayBuffer()), b, {
                    onSuccess: function() {
                      setTimeout(function() {
                        d.onSuccess()
                      })
                    },
                    onError: function(a) {
                      setTimeout(function() {
                        d.onError(a)
                      })
                    }
                  })
              },
              b.prototype.createDiscussion = function(b, c, d) {
                var e = new a.RongIMClient.Protobuf.CreateDiscussionInput,
                  f = this;
                e.setName(b),
                  a.RongIMClient.bridge.queryMsg(1, a.MessageUtil.ArrayForm(e.toArrayBuffer()), a.Bridge._client.userId, {
                      onSuccess: function(a) {
                        c.length > 0 && f.addMemberToDiscussion(a, c, {
                          onSuccess: function() {},
                          onError: function(a) {
                            setTimeout(function() {
                              d.onError(a)
                            })
                          }
                        }),
                          setTimeout(function() {
                            d.onSuccess(a)
                          })
                      },
                      onError: function(a) {
                        setTimeout(function() {
                          d.onError(a)
                        })
                      }
                    },
                    "CreateDiscussionOutput")
              },
              b.prototype.getDiscussion = function(b, c) {
                var d = new a.RongIMClient.Protobuf.ChannelInfoInput;
                d.setNothing(1),
                  a.RongIMClient.bridge.queryMsg(4, a.MessageUtil.ArrayForm(d.toArrayBuffer()), b, {
                      onSuccess: function(a) {
                        setTimeout(function() {
                          c.onSuccess(a)
                        })
                      },
                      onError: function(a) {
                        setTimeout(function() {
                          c.onError(a)
                        })
                      }
                    },
                    "ChannelInfoOutput")
              },
              b.prototype.quitDiscussion = function(b, c) {
                var d = new a.RongIMClient.Protobuf.LeaveChannelInput;
                d.setNothing(1),
                  a.RongIMClient.bridge.queryMsg(7, a.MessageUtil.ArrayForm(d.toArrayBuffer()), b, {
                    onSuccess: function() {
                      setTimeout(function() {
                        c.onSuccess()
                      })
                    },
                    onError: function(a) {
                      setTimeout(function() {
                        c.onError(a)
                      })
                    }
                  })
              },
              b.prototype.removeMemberFromDiscussion = function(b, c, d) {
                var e = new a.RongIMClient.Protobuf.ChannelEvictionInput;
                e.setUser(c),
                  a.RongIMClient.bridge.queryMsg(9, a.MessageUtil.ArrayForm(e.toArrayBuffer()), b, {
                    onSuccess: function() {
                      setTimeout(function() {
                        d.onSuccess()
                      })
                    },
                    onError: function(a) {
                      setTimeout(function() {
                        d.onError(a)
                      })
                    }
                  })
              },
              b.prototype.setDiscussionInviteStatus = function(b, c, d) {
                var e = new a.RongIMClient.Protobuf.ModifyPermissionInput;
                e.setOpenStatus(c.valueOf()),
                  a.RongIMClient.bridge.queryMsg(11, a.MessageUtil.ArrayForm(e.toArrayBuffer()), b, {
                    onSuccess: function(a) {
                      setTimeout(function() {
                        d.onSuccess()
                      })
                    },
                    onError: function(a) {
                      setTimeout(function() {
                        d.onError(a)
                      })
                    }
                  })
              },
              b.prototype.setDiscussionName = function(b, c, d) {
                var e = new a.RongIMClient.Protobuf.RenameChannelInput;
                e.setName(c),
                  a.RongIMClient.bridge.queryMsg(12, a.MessageUtil.ArrayForm(e.toArrayBuffer()), b, {
                    onSuccess: function() {
                      setTimeout(function() {
                        d.onSuccess()
                      })
                    },
                    onError: function(a) {
                      d.onError(a)
                    }
                  })
              },
              b.prototype.joinChatRoom = function(b, c, d) {
                var e = new a.RongIMClient.Protobuf.ChrmInput;
                e.setNothing(1),
                  a.Bridge._client.chatroomId = b,
                  a.RongIMClient.bridge.queryMsg(19, a.MessageUtil.ArrayForm(e.toArrayBuffer()), b, {
                      onSuccess: function() {
                        setTimeout(function() {
                          d.onSuccess()
                        });
                        var e = new a.RongIMClient.Protobuf.ChrmPullMsg;
                        0 == c && (c = -1),
                          e.setCount(c),
                          e.setSyncTime(0),
                          a.Bridge._client.queryMessage("chrmPull", a.MessageUtil.ArrayForm(e.toArrayBuffer()), b, 1, {
                              onSuccess: function(c) {
                                var d = c.list,
                                  e = a.MessageUtil.int64ToTimestamp(c.syncTime),
                                  f = d[d.length - 1];
                                f && (f = a.MessageUtil.messageParser(f), e = f.sentTime),
                                  a.RongIMClient._memoryStore.lastReadTime.set(b + a.Bridge._client.userId + "CST", e);
                                for (var g = a.Bridge._client,
                                       h = 0,
                                       i = d.length; h < i; h++) {
                                  var j = "R" + d[h].msgId;
                                  if (! (j in g.cacheMessageIds)) {
                                    g.cacheMessageIds[j] = !0;
                                    var k = a.RongUtil.keys(g.cacheMessageIds);
                                    if (k.length > 10 && (j = k[0], delete g.cacheMessageIds[j]), a.RongIMClient._memoryStore.filterMessages.length > 0) for (var l = 0,
                                                                                                                                                                m = a.RongIMClient._memoryStore.filterMessages.length; l < m; l++) a.RongIMClient.MessageParams[a.RongIMClient._memoryStore.filterMessages[l]].objectName != d[h].classname && g.handler.onReceived(d[h]);
                                    else g.handler.onReceived(d[h])
                                  }
                                }
                              },
                              onError: function(b) {
                                setTimeout(function() {
                                  d.onError(a.ErrorCode.CHATROOM_HISMESSAGE_ERROR)
                                })
                              }
                            },
                            "DownStreamMessages")
                      },
                      onError: function(a) {
                        setTimeout(function() {
                          d.onError(a)
                        })
                      }
                    },
                    "ChrmOutput")
              },
              b.prototype.getChatRoomInfo = function(b, c, d, e) {
                var f = new a.RongIMClient.Protobuf.QueryChatroomInfoInput;
                f.setCount(c),
                  f.setOrder(d),
                  a.RongIMClient.bridge.queryMsg("queryChrmI", a.MessageUtil.ArrayForm(f.toArrayBuffer()), b, {
                      onSuccess: function(b) {
                        b.userInfos.forEach(function(b) {
                          b.time = a.MessageUtil.int64ToTimestamp(b.time)
                        }),
                          setTimeout(function() {
                            e.onSuccess(b)
                          })
                      },
                      onError: function(a) {
                        setTimeout(function() {
                          e.onError(a)
                        })
                      }
                    },
                    "QueryChatroomInfoOutput")
              },
              b.prototype.quitChatRoom = function(b, c) {
                var d = new a.RongIMClient.Protobuf.ChrmInput;
                d.setNothing(1),
                  a.RongIMClient.bridge.queryMsg(17, a.MessageUtil.ArrayForm(d.toArrayBuffer()), b, {
                      onSuccess: function() {
                        setTimeout(function() {
                          c.onSuccess()
                        })
                      },
                      onError: function(a) {
                        setTimeout(function() {
                          c.onError(a)
                        })
                      }
                    },
                    "ChrmOutput")
              },
              b.prototype.setChatroomHisMessageTimestamp = function(b, c) {
                a.RongIMClient._memoryStore.lastReadTime.set("chrhis_" + b, c)
              },
              b.prototype.getChatRoomHistoryMessages = function(b, c, d, e) {
                var f = new a.RongIMClient.Protobuf.HistoryMsgInput;
                f.setTargetId(b);
                var g = a.RongIMClient._memoryStore.lastReadTime.get("chrhis_" + b) || 0;
                f.setTime(g),
                  f.setCount(c),
                  f.setOrder(d),
                  a.RongIMClient.bridge.queryMsg(34, a.MessageUtil.ArrayForm(f.toArrayBuffer()), a.Bridge._client.userId, {
                      onSuccess: function(c) {
                        a.RongIMClient._memoryStore.lastReadTime.set("chrhis_" + b, a.MessageUtil.int64ToTimestamp(c.syncTime));
                        for (var d = c.list.reverse(), f = 0, g = d.length; f < g; f++) d[f] = a.MessageUtil.messageParser(d[f]);
                        setTimeout(function() {
                          e.onSuccess(d, !!c.hasMsg)
                        })
                      },
                      onError: function(a) {
                        setTimeout(function() {
                          e.onError(a)
                        })
                      }
                    },
                    "HistoryMsgOuput")
              },
              b.prototype.setMessageStatus = function(a, b, c, d, e) {
                setTimeout(function() {
                  e.onSuccess(!0)
                })
              },
              b.prototype.addToBlacklist = function(b, c) {
                var d = new a.RongIMClient.Protobuf.Add2BlackListInput;
                d.setUserId(b),
                  a.RongIMClient.bridge.queryMsg(21, a.MessageUtil.ArrayForm(d.toArrayBuffer()), b, {
                    onSuccess: function() {
                      setTimeout(function() {
                        c.onSuccess()
                      })
                    },
                    onError: function(a) {
                      setTimeout(function() {
                        c.onError(a)
                      })
                    }
                  })
              },
              b.prototype.getBlacklist = function(b) {
                var c = new a.RongIMClient.Protobuf.QueryBlackListInput;
                c.setNothing(1),
                  a.RongIMClient.bridge.queryMsg(23, a.MessageUtil.ArrayForm(c.toArrayBuffer()), a.Bridge._client.userId, {
                      onSuccess: function(a) {
                        setTimeout(function() {
                          b.onSuccess(a)
                        })
                      },
                      onError: function(a) {
                        setTimeout(function() {
                          b.onError(a)
                        })
                      }
                    },
                    "QueryBlackListOutput")
              },
              b.prototype.getBlacklistStatus = function(b, c) {
                var d = new a.RongIMClient.Protobuf.BlackListStatusInput;
                d.setUserId(b),
                  a.RongIMClient.bridge.queryMsg(24, a.MessageUtil.ArrayForm(d.toArrayBuffer()), b, {
                    onSuccess: function(b) {
                      setTimeout(function() {
                        c.onSuccess(a.BlacklistStatus[b])
                      })
                    },
                    onError: function(a) {
                      setTimeout(function() {
                        c.onError(a)
                      })
                    }
                  })
              },
              b.prototype.removeFromBlacklist = function(b, c) {
                var d = new a.RongIMClient.Protobuf.RemoveFromBlackListInput;
                d.setUserId(b),
                  a.RongIMClient.bridge.queryMsg(22, a.MessageUtil.ArrayForm(d.toArrayBuffer()), b, {
                    onSuccess: function() {
                      setTimeout(function() {
                        c.onSuccess()
                      })
                    },
                    onError: function(a) {
                      setTimeout(function() {
                        c.onError(a)
                      })
                    }
                  })
              },
              b.prototype.getFileToken = function(b, c) {
                if (!/(1|2|3|4)/.test(b.toString())) return void setTimeout(function() {
                  c.onError(a.ErrorCode.QNTKN_FILETYPE_ERROR)
                });
                var d = new a.RongIMClient.Protobuf.GetQNupTokenInput;
                d.setType(b),
                  a.RongIMClient.bridge.queryMsg(30, a.MessageUtil.ArrayForm(d.toArrayBuffer()), a.Bridge._client.userId, {
                      onSuccess: function(a) {
                        setTimeout(function() {
                          c.onSuccess(a)
                        })
                      },
                      onError: function(a) {
                        setTimeout(function() {
                          c.onError(a)
                        })
                      }
                    },
                    "GetQNupTokenOutput")
              },
              b.prototype.getFileUrl = function(b, c, d, e) {
                if (!/(1|2|3|4)/.test(b.toString())) return void setTimeout(function() {
                  e.onError(a.ErrorCode.QNTKN_FILETYPE_ERROR)
                });
                var f = new a.RongIMClient.Protobuf.GetQNdownloadUrlInput;
                f.setType(b),
                  f.setKey(c),
                d && f.setFileName(d),
                  a.RongIMClient.bridge.queryMsg(31, a.MessageUtil.ArrayForm(f.toArrayBuffer()), a.Bridge._client.userId, {
                      onSuccess: function(a) {
                        setTimeout(function() {
                          e.onSuccess(a)
                        })
                      },
                      onError: function(a) {
                        setTimeout(function() {
                          e.onError(a)
                        })
                      }
                    },
                    "GetQNdownloadUrlOutput")
              },
              b.prototype.sendMessage = function(b, c, d, e, f, g, h, i, j) {
                if (!a.Bridge._client.channel) return void setTimeout(function() {
                  e.onError(a.ErrorCode.RC_NET_UNAVAILABLE, null)
                });
                if (!a.Bridge._client.channel.socket.socket.connected) throw setTimeout(function() {
                  e.onError(a.ErrorCode.TIMEOUT, null)
                }),
                  new Error("connect is timeout! postion:sendMessage");
                var k = b == a.ConversationType.DISCUSSION || b == a.ConversationType.GROUP,
                  l = new a.RongIMClient.Protobuf.UpStreamMessage;
                if (f && k ? l.setSessionId(7) : l.setSessionId(a.RongIMClient.MessageParams[d.messageName].msgTag.getMessageTag()), g && l.setPushText(g), h && l.setAppData(h), k && d.messageName == a.RongIMClient.MessageType.ReadReceiptResponseMessage) {
                  var m = d;
                  if (m.receiptMessageDic) {
                    var n = [];
                    for (var o in m.receiptMessageDic) n.push(o);
                    l.setUserId(n)
                  }
                }
                k && d.messageName == a.RongIMClient.MessageType.SyncReadStatusMessage && l.setUserId(a.Bridge._client.userId),
                  j = j || {};
                var p = j.userIds;
                k && p && l.setUserId(p),
                  l.setClassname(a.RongIMClient.MessageParams[d.messageName].objectName),
                  l.setContent(d.encode());
                var q = l.toArrayBuffer();
                "[object ArrayBuffer]" == Object.prototype.toString.call(q) && (q = [].slice.call(new Int8Array(q)));
                var r = this,
                  s = new a.Message,
                  t = this.getConversation(b, c);
                3 == a.RongIMClient.MessageParams[d.messageName].msgTag.getMessageTag() && (t || (t = a.RongIMClient.getInstance().createConversation(b, c, "")), t.sentTime = (new Date).getTime(), t.sentStatus = a.SentStatus.SENDING, t.senderUserName = "", t.senderUserId = a.Bridge._client.userId, t.notificationStatus = a.ConversationNotificationStatus.DO_NOT_DISTURB, t.latestMessage = s, t.unreadMessageCount = 0, a.RongIMClient._dataAccessProvider.addConversation(t, {
                  onSuccess: function(a) {}
                })),
                  a.RongIMClient._memoryStore.converStore = t,
                  s.content = d,
                  s.conversationType = b,
                  s.senderUserId = a.Bridge._client.userId,
                  s.objectName = a.RongIMClient.MessageParams[d.messageName].objectName,
                  s.targetId = c,
                  s.sentTime = (new Date).getTime(),
                  s.messageDirection = a.MessageDirection.SEND,
                  s.sentStatus = a.SentStatus.SENT,
                  s.messageType = d.messageName,
                  a.RongIMClient.bridge.pubMsg(b.valueOf(), q, c, {
                      onSuccess: function(f) {
                        if (f && f.timestamp && a.RongIMClient._memoryStore.lastReadTime.set("converST_" + a.Bridge._client.userId + b + c, f.timestamp), (b == a.ConversationType.DISCUSSION || b == a.ConversationType.GROUP) && d.messageName == a.RongIMClient.MessageType.ReadReceiptRequestMessage) {
                          var g = s.content,
                            h = a.Bridge._client.userId + g.messageUId + "SENT";
                          a.RongIMClient._storageProvider.setItem(h, JSON.stringify({
                            count: 0,
                            dealtime: f.timestamp,
                            userIds: {}
                          }))
                        }
                        if (3 == a.RongIMClient.MessageParams[s.messageType].msgTag.getMessageTag()) {
                          var i = a.RongIMClient._memoryStore.converStore;
                          i.sentStatus = s.sentStatus,
                            i.latestMessage = s,
                            r.updateConversation(i),
                            a.RongIMClient._dataAccessProvider.addMessage(b, c, s, {
                              onSuccess: function(b) {
                                s = b,
                                  s.messageUId = f.messageUId,
                                  s.sentTime = f.timestamp,
                                  s.sentStatus = a.SentStatus.SENT,
                                  s.messageId = f.messageId,
                                  a.RongIMClient._dataAccessProvider.updateMessage(s)
                              },
                              onError: function() {}
                            })
                        }
                        setTimeout(function() {
                          i && r.updateConversation(i),
                            s.sentTime = f.timestamp,
                            s.messageUId = f.messageUId,
                            e.onSuccess(s)
                        })
                      },
                      onError: function(d, f) {
                        s.sentStatus = a.SentStatus.FAILED,
                        f && (s.messageUId = f.messageUId, s.sentTime = f.sentTime),
                        3 == a.RongIMClient.MessageParams[s.messageType].msgTag.getMessageTag() && (a.RongIMClient._memoryStore.converStore.latestMessage = s),
                          a.RongIMClient._dataAccessProvider.addMessage(b, c, s, {
                            onSuccess: function(b) {
                              s.messageId = b.messageId,
                                a.RongIMClient._dataAccessProvider.updateMessage(s)
                            },
                            onError: function() {}
                          }),
                          setTimeout(function() {
                            e.onError(d, s)
                          })
                      }
                    },
                    null, i),
                e.onBefore && e.onBefore(a.MessageIdHandler.messageId),
                  s.messageId = a.MessageIdHandler.messageId + ""
              },
              b.prototype.setConnectionStatusListener = function(b) {
                var c = {
                  onChanged: function(c) {
                    b.onChanged(c),
                      a.RongUtil.forEach(a.RongIMClient.statusListeners,
                        function(a) {
                          a(c)
                        })
                  }
                };
                a.RongIMClient.bridge ? a.RongIMClient.bridge.setListener(c) : a.RongIMClient._memoryStore.listenerList.push(c)
              },
              b.prototype.setOnReceiveMessageListener = function(b) {
                a.RongIMClient.bridge ? a.RongIMClient.bridge.setListener(b) : a.RongIMClient._memoryStore.listenerList.push(b)
              },
              b.prototype.registerMessageType = function(b, c, d, e, f) {
                if (!b) throw new Error("messageType can't be empty,postion -> registerMessageType");
                if (!c) throw new Error("objectName can't be empty,postion -> registerMessageType");
                if ("[object Array]" == Object.prototype.toString.call(e)) {
                  var g = a.ModelUtil.modleCreate(e, b);
                  a.RongIMClient.RegisterMessage[b] = g
                } else {
                  if ("[object Function]" != Object.prototype.toString.call(e) && "[object Object]" != Object.prototype.toString.call(e)) throw new Error("The index of 3 parameter was wrong type  must be object or function or array-> registerMessageType");
                  if (!e.encode) throw new Error("encode method has not realized or messageName is undefined-> registerMessageType");
                  if (!e.decode) throw new Error("decode method has not realized -> registerMessageType")
                }
                registerMessageTypeMapping[c] = b
              },
              b.prototype.registerMessageTypes = function(b) {
                var c = [],
                  d = function(a) {
                    var b = [];
                    for (var c in a) b.push(c);
                    return b
                  };
                for (var e in b) {
                  var f = b[e],
                    g = f.proto,
                    h = d(g),
                    i = f.flag || 3,
                    j = a.MessageTag.getTagByStatus(i);
                  i = new a.MessageTag(j.isCounted, j.isPersited),
                    c.push({
                      type: e,
                      name: f.name,
                      flag: i,
                      protos: h
                    })
                }
                for (var k = function(b) {
                    var c = b.type,
                      d = b.name,
                      e = b.flag,
                      f = b.protos;
                    a.RongIMClient.registerMessageType(c, d, e, f)
                  },
                       l = 0, m = c.length; l < m; l++) {
                  var f = c[l];
                  k(f)
                }
              },
              b.prototype.addConversation = function(b, c) {
                for (var d = !0,
                       e = 0,
                       f = a.RongIMClient._memoryStore.conversationList.length; e < f; e++) if (a.RongIMClient._memoryStore.conversationList[e].conversationType === b.conversationType && a.RongIMClient._memoryStore.conversationList[e].targetId === b.targetId) {
                  a.RongIMClient._memoryStore.conversationList.unshift(a.RongIMClient._memoryStore.conversationList.splice(e, 1)[0]),
                    d = !1;
                  break
                }
                d && a.RongIMClient._memoryStore.conversationList.unshift(b),
                c && c.onSuccess(!0)
              },
              b.prototype.updateConversation = function(b) {
                for (var c, d = 0,
                       e = a.RongIMClient._memoryStore.conversationList.length; d < e; d++) {
                  var f = a.RongIMClient._memoryStore.conversationList[d];
                  if (b.conversationType === f.conversationType && b.targetId === f.targetId) {
                    b.conversationTitle && (f.conversationTitle = b.conversationTitle),
                    b.senderUserName && (f.senderUserName = b.senderUserName),
                    b.senderPortraitUri && (f.senderPortraitUri = b.senderPortraitUri),
                    b.latestMessage && (f.latestMessage = b.latestMessage),
                    b.sentStatus && (f.sentStatus = b.sentStatus);
                    break
                  }
                }
                return c
              },
              b.prototype.removeConversation = function(b, c, d) {
                var e = new a.RongIMClient.Protobuf.RelationsInput;
                e.setType(b),
                  a.RongIMClient.bridge.queryMsg(27, a.MessageUtil.ArrayForm(e.toArrayBuffer()), c, {
                    onSuccess: function() {
                      for (var e = a.RongIMClient._memoryStore.conversationList,
                             f = e.length,
                             g = 0; g < f; g++) if (e[g].conversationType == b && c == e[g].targetId) {
                        e.splice(g, 1);
                        break
                      }
                      d.onSuccess(!0)
                    },
                    onError: function(a) {
                      setTimeout(function() {
                        d.onError(a)
                      })
                    }
                  })
              },
              b.prototype.getMessage = function(b, c) {
                c.onSuccess(new a.Message)
              },
              b.prototype.addMessage = function(a, b, c, d) {
                d && d.onSuccess(c)
              },
              b.prototype.removeMessage = function(b, c, d, e) {
                a.RongIMClient.getInstance().deleteRemoteMessages(b, c, d, e)
              },
              b.prototype.removeLocalMessage = function(a, b, c, d) {
                d.onSuccess(!0)
              },
              b.prototype.updateMessage = function(a, b) {
                b && b.onSuccess(a)
              },
              b.prototype.clearRemoteHistoryMessages = function(b, c) {
                var d = new a.RongIMClient.Protobuf.CleanHisMsgInput,
                  e = b.conversationType,
                  f = {
                    1 : "cleanPMsg",
                    2 : "cleanDMsg",
                    3 : "cleanGMsg",
                    5 : "cleanCMsg",
                    6 : "cleanSMsg"
                  },
                  g = f[e];
                if (!g) return void c.onError(a.ErrorCode.CLEAR_HIS_TYPE_ERROR);
                var h = b.timestamp;
                if ("number" != typeof h) return void c.onError(a.ErrorCode.CLEAR_HIS_TIME_ERROR);
                d.setDataTime(h);
                var i = b.targetId;
                d.setTargetId(i),
                  a.RongIMClient.bridge.queryMsg(g, a.MessageUtil.ArrayForm(d.toArrayBuffer()), i, {
                    onSuccess: function(a) {
                      c.onSuccess(!a)
                    },
                    onError: function(b) {
                      1 == b && (b = a.ErrorCode.CLEAR_HIS_ERROR),
                        setTimeout(function() {
                          c.onError(b)
                        })
                    }
                  })
              },
              b.prototype.clearHistoryMessages = function(a, b) {
                this.clearRemoteHistoryMessages(a, b)
              },
              b.prototype.clearMessages = function(a, b, c) {},
              b.prototype.updateMessages = function(b, c, d, e, f) {
                var g = this;
                "readStatus" == d && a.RongIMClient._memoryStore.conversationList.length > 0 && g.getConversationList({
                    onSuccess: function(a) {
                      Array.forEach(a,
                        function(a) {
                          a.conversationType == b && a.targetId == c && (a.unreadMessageCount = 0)
                        })
                    },
                    onError: function(a) {
                      setTimeout(function() {
                        f.onError(a)
                      })
                    }
                  },
                  null),
                  setTimeout(function() {
                    f.onSuccess(!0)
                  })
              },
              b.prototype.getConversation = function(b, c, d) {
                for (var e = null,
                       f = 0,
                       g = a.RongIMClient._memoryStore.conversationList.length; f < g; f++) if (a.RongIMClient._memoryStore.conversationList[f].conversationType == b && a.RongIMClient._memoryStore.conversationList[f].targetId == c && (e = a.RongIMClient._memoryStore.conversationList[f], a.RongUtil.supportLocalStorage())) {
                  var h = a.RongIMClient._storageProvider.getItem("cu" + a.Bridge._client.userId + b + c);
                  0 == e.unreadMessageCount && (e.unreadMessageCount = Number(h))
                }
                return setTimeout(function() {
                  d && d.onSuccess(e)
                }),
                  e
              },
              b.prototype.filterConversations = function(b, c) {
                var d = [];
                return a.RongUtil.forEach(b,
                  function(b) {
                    a.RongUtil.forEach(c,
                      function(a) {
                        a.conversationType == b && d.push(a)
                      })
                  }),
                  d
              },
              b.prototype.getConversationList = function(b, c, d, e) {
                var f = this,
                  g = a.RongIMClient._memoryStore.isSyncRemoteConverList,
                  h = a.RongIMClient._memoryStore.conversationList,
                  i = h.length > d;
                if (!g && i) return void setTimeout(function() {
                  var a = h.slice(0, d);
                  c && (a = f.filterConversations(c, a)),
                    b.onSuccess(a)
                });
                a.RongIMClient.getInstance().getRemoteConversationList({
                    onSuccess: function(c) {
                      a.RongUtil.supportLocalStorage() && Array.forEach(a.RongIMClient._memoryStore.conversationList,
                        function(b) {
                          var c = a.RongIMClient._storageProvider.getItem("cu" + a.Bridge._client.userId + b.conversationType + b.targetId);
                          0 == b.unreadMessageCount && (b.unreadMessageCount = Number(c))
                        }),
                        a.RongIMClient._memoryStore.isSyncRemoteConverList = !1,
                        setTimeout(function() {
                          b.onSuccess(c)
                        })
                    },
                    onError: function(a) {
                      setTimeout(function() {
                        b.onError(a)
                      })
                    }
                  },
                  c, d, e)
              },
              b.prototype.clearCache = function() {
                var b = a.RongIMClient._memoryStore || {};
                b.conversationList = [],
                  b.isSyncRemoteConverList = !0
              },
              b.prototype.clearConversations = function(b, c) {
                Array.forEach(b,
                  function(b) {
                    Array.forEach(a.RongIMClient._memoryStore.conversationList,
                      function(c) {
                        b == c.conversationType && a.RongIMClient.getInstance().removeConversation(c.conversationType, c.targetId, {
                          onSuccess: function() {},
                          onError: function() {}
                        })
                      })
                  }),
                  setTimeout(function() {
                    c.onSuccess(!0)
                  })
              },
              b.prototype.setMessageContent = function(a, b, c) {},
              b.prototype.setMessageSearchField = function(a, b, c) {},
              b.prototype.getHistoryMessages = function(b, c, d, e, f, g, h) {
                var i = {
                  objectname: g,
                  order: h
                };
                a.RongIMClient.getInstance().getRemoteHistoryMessages(b, c, d, e, f, i)
              },
              b.prototype.getTotalUnreadCount = function(b, c) {
                var d = 0,
                  e = a.RongIMClient._storageProvider;
                if (c) a.RongUtil.forEach(c,
                  function(b) {
                    var c = e.getItemKeyList("cu" + a.Bridge._client.userId + b);
                    a.RongUtil.forEach(c,
                      function(a) {
                        var b = e.getItem(a),
                          c = Number(b) || 0;
                        d += c
                      })
                  });
                else {
                  var f = e.getItemKeyList("cu" + a.Bridge._client.userId);
                  a.RongUtil.forEach(f,
                    function(a) {
                      var b = e.getItem(a),
                        c = Number(b) || 0;
                      d += c
                    })
                }
                b.onSuccess(d)
              },
              b.prototype.getConversationUnreadCount = function(b, c) {
                var d = 0;
                Array.forEach(b,
                  function(b) {
                    Array.forEach(a.RongIMClient._memoryStore.conversationList,
                      function(a) {
                        a.conversationType == b && (d += a.unreadMessageCount)
                      })
                  }),
                  setTimeout(function() {
                    c.onSuccess(d)
                  })
              },
              b.prototype.setUnreadCount = function(b, c, d) {
                var e = a.RongIMClient._storageProvider,
                  f = "cu" + a.Bridge._client.userId + b + c;
                e.setItem(f, d)
              },
              b.prototype.getUnreadCount = function(b, c, d) {
                var e = "cu" + a.Bridge._client.userId + b + c,
                  f = a.RongIMClient._storageProvider.getItem(e),
                  g = Number(f);
                setTimeout(function() {
                  d.onSuccess(g || 0)
                })
              },
              b.prototype.cleanMentioneds = function(b) {
                if (b) {
                  b.mentionedMsg = null;
                  var c = b.targetId,
                    d = b.conversationType,
                    e = a.RongIMClient._storageProvider.getItem("mentioneds_" + a.Bridge._client.userId + "_" + d + "_" + c);
                  if (e) {
                    var f = JSON.parse(e);
                    delete f[d + "_" + c],
                      a.MessageUtil.isEmpty(f) ? a.RongIMClient._storageProvider.removeItem("mentioneds_" + a.Bridge._client.userId + "_" + d + "_" + c) : a.RongIMClient._storageProvider.setItem("mentioneds_" + a.Bridge._client.userId + "_" + d + "_" + c, JSON.stringify(f))
                  }
                }
              },
              b.prototype.clearUnreadCountByTimestamp = function(a, b, c, d) {
                setTimeout(function() {
                  d.onSuccess(!0)
                })
              },
              b.prototype.clearUnreadCount = function(b, c, d) {
                var e = this;
                a.RongIMClient._storageProvider.removeItem("cu" + a.Bridge._client.userId + b + c),
                  this.getConversation(b, c, {
                    onSuccess: function(a) {
                      a && (a.unreadMessageCount = 0, e.cleanMentioneds(a)),
                        setTimeout(function() {
                          d.onSuccess(!0)
                        })
                    },
                    onError: function(a) {
                      setTimeout(function() {
                        d.onError(a)
                      })
                    }
                  })
              },
              b.prototype.clearTotalUnreadCount = function(b) {
                var c = a.RongIMClient._memoryStore.conversationList,
                  d = this;
                if (c) for (var e = 0; e < c.length; e++) {
                  var f = c[e];
                  f && (f.unreadMessageCount = 0, d.cleanMentioneds(f))
                }
                var g = a.RongIMClient._storageProvider.getItemKeyList("cu" + a.Bridge._client.userId);
                a.RongUtil.forEach(g,
                  function(b) {
                    a.RongIMClient._storageProvider.removeItem(b)
                  }),
                  setTimeout(function() {
                    b.onSuccess(!0)
                  })
              },
              b.prototype.setConversationToTop = function(a, b, c, d) {
                var e = this;
                this.getConversation(a, b, {
                  onSuccess: function(a) {
                    a.isTop = c,
                      e.addConversation(a, d),
                      setTimeout(function() {
                        d.onSuccess(!0)
                      })
                  },
                  onError: function(a) {
                    setTimeout(function() {
                      d.onError(a)
                    })
                  }
                })
              },
              b.prototype.getConversationNotificationStatus = function(b, c) {
                var d = b.targetId,
                  e = b.conversationType,
                  f = a.RongIMClient._memoryStore.notification,
                  g = function() {
                    return e + "_" + d
                  },
                  h = g(),
                  i = f[h];
                if ("number" == typeof i) return void c.onSuccess(i);
                var j = {
                    1 : "qryPPush",
                    3 : "qryDPush"
                  },
                  k = j[e];
                if (!k) {
                  return void c.onError(8001)
                }
                var l = new a.RongIMClient.Protobuf.BlockPushInput;
                l.setBlockeeId(d);
                var m = a.Bridge._client.userId,
                  n = function(a) {
                    f[h] = a,
                      setTimeout(function() {
                        c.onSuccess(a)
                      })
                  };
                a.RongIMClient.bridge.queryMsg(k, a.MessageUtil.ArrayForm(l.toArrayBuffer()), m, {
                  onSuccess: function(a) {
                    n(a)
                  },
                  onError: function(a) {
                    1 == a ? n(a) : setTimeout(function() {
                      c.onError(a)
                    })
                  }
                })
              },
              b.prototype.setConversationNotificationStatus = function(b, c) {
                var d = b.conversationType,
                  e = b.targetId,
                  f = b.status,
                  g = function() {
                    return d + "_" + f
                  },
                  h = {
                    "1_1": "blkPPush",
                    "3_1": "blkDPush",
                    "1_0": "unblkPPush",
                    "3_0": "unblkDPush"
                  },
                  i = g();
                a.RongIMClient._memoryStore.notification[i] = f;
                var j = h[i];
                if (!j) {
                  return void setTimeout(function() {
                    c.onError(8001)
                  })
                }
                var k = new a.RongIMClient.Protobuf.BlockPushInput;
                k.setBlockeeId(e);
                var l = a.Bridge._client.userId;
                a.RongIMClient.bridge.queryMsg(j, a.MessageUtil.ArrayForm(k.toArrayBuffer()), l, {
                  onSuccess: function(a) {
                    setTimeout(function() {
                      c.onSuccess(a)
                    })
                  },
                  onError: function(a) {
                    setTimeout(function() {
                      c.onError(a)
                    })
                  }
                })
              },
              b.prototype.getUserStatus = function(b, c) {
                var d = new a.RongIMClient.Protobuf.GetUserStatusInput;
                b = a.Bridge._client.userId,
                  a.RongIMClient.bridge.queryMsg(35, a.MessageUtil.ArrayForm(d.toArrayBuffer()), b, {
                      onSuccess: function(b) {
                        b = a.RongInnerTools.convertUserStatus(b),
                          setTimeout(function() {
                            c.onSuccess(b)
                          })
                      },
                      onError: function(a) {
                        setTimeout(function() {
                          c.onError(a)
                        })
                      }
                    },
                    "GetUserStatusOutput")
              },
              b.prototype.setUserStatus = function(b, c) {
                var d = new a.RongIMClient.Protobuf.SetUserStatusInput,
                  e = a.Bridge._client.userId;
                b && d.setStatus(b),
                  a.RongIMClient.bridge.queryMsg(36, a.MessageUtil.ArrayForm(d.toArrayBuffer()), e, {
                      onSuccess: function(a) {
                        setTimeout(function() {
                          c.onSuccess(!0)
                        })
                      },
                      onError: function(a) {
                        setTimeout(function() {
                          c.onError(a)
                        })
                      }
                    },
                    "SetUserStatusOutput")
              },
              b.prototype.subscribeUserStatus = function(b, c) {
                var d = new a.RongIMClient.Protobuf.SubUserStatusInput,
                  e = a.Bridge._client.userId;
                d.setUserid(b),
                  a.RongIMClient.bridge.queryMsg(37, a.MessageUtil.ArrayForm(d.toArrayBuffer()), e, {
                      onSuccess: function(a) {
                        setTimeout(function() {
                          c && c.onSuccess(!0)
                        })
                      },
                      onError: function(a) {
                        setTimeout(function() {
                          c && c.onError(a)
                        })
                      }
                    },
                    "SubUserStatusOutput")
              },
              b.prototype.setUserStatusListener = function(b, c) {
                a.RongIMClient.userStatusListener = c;
                var d = b.userIds || [];
                d.length && a.RongIMClient._dataAccessProvider.subscribeUserStatus(d)
              },
              b.prototype.clearListeners = function() {},
              b.prototype.setServerInfo = function(a) {},
              b.prototype.getUnreadMentionedMessages = function(a, b) {
                return null
              },
              b.prototype.setConversationHidden = function(a, b, c) {},
              b.prototype.setMessageExtra = function(a, b, c) {
                setTimeout(function() {
                  c.onSuccess(!0)
                })
              },
              b.prototype.setMessageReceivedStatus = function(a, b, c) {
                setTimeout(function() {
                  c.onSuccess(!0)
                })
              },
              b.prototype.setMessageSentStatus = function(a, b, c) {
                setTimeout(function() {
                  c.onSuccess(!0)
                })
              },
              b.prototype.getAllConversations = function(a) {
                setTimeout(function() {
                  a.onSuccess([])
                })
              },
              b.prototype.getConversationByContent = function(a, b) {
                setTimeout(function() {
                  b.onSuccess([])
                })
              },
              b.prototype.getMessagesFromConversation = function(a, b, c, d) {
                setTimeout(function() {
                  d.onSuccess([])
                })
              },
              b.prototype.searchConversationByContent = function(a, b, c) {
                setTimeout(function() {
                  b.onSuccess([])
                })
              },
              b.prototype.searchMessageByContent = function(a, b, c, d, e, f, g) {
                setTimeout(function() {
                  g.onSuccess([])
                })
              },
              b.prototype.getDelaTime = function() {
                return a.RongIMClient._memoryStore.deltaTime
              },
              b.prototype.getCurrentConnectionStatus = function() {
                var b = a.Bridge._client || {},
                  c = b.channel || {},
                  d = a.ConnectionStatus.CONNECTION_CLOSED;
                return "number" == typeof c.connectionStatus && (d = c.connectionStatus),
                  d
              },
              b.prototype.getAgoraDynamicKey = function(b, c, d) {
                var e = new a.RongIMClient.Protobuf.VoipDynamicInput;
                e.setEngineType(b),
                  e.setChannelName(c),
                  a.RongIMClient.bridge.queryMsg(32, a.MessageUtil.ArrayForm(e.toArrayBuffer()), a.Bridge._client.userId, {
                      onSuccess: function(a) {
                        setTimeout(function() {
                          d.onSuccess(a)
                        })
                      },
                      onError: function(a) {
                        setTimeout(function() {
                          d.onError(a)
                        })
                      }
                    },
                    "VoipDynamicOutput")
              },
              b.prototype.setDeviceInfo = function(a) {},
              b.prototype.setEnvironment = function(a) {},
              b.prototype.clearData = function() {
                return ! 0
              },
              b.prototype.getPublicServiceProfile = function(b, c, d) {
                var e = a.RongIMClient._memoryStore.publicServiceMap.get(b, c);
                setTimeout(function() {
                  d.onSuccess(e)
                })
              },
              b.prototype.getRemotePublicServiceList = function(b, c) {
                if (a.RongIMClient._memoryStore.depend.openMp) {
                  var d = new a.RongIMClient.Protobuf.PullMpInput;
                  c ? d.setTime(c) : d.setTime(0),
                    d.setMpid(""),
                    a.RongIMClient.bridge.queryMsg(28, a.MessageUtil.ArrayForm(d.toArrayBuffer()), a.Bridge._client.userId, {
                        onSuccess: function(c) {
                          a.RongIMClient._memoryStore.publicServiceMap.publicServiceList.length = 0,
                            a.RongIMClient._memoryStore.publicServiceMap.publicServiceList = c,
                            setTimeout(function() {
                              b && b.onSuccess(c)
                            })
                        },
                        onError: function(a) {
                          setTimeout(function() {
                            b && b.onError(a)
                          })
                        }
                      },
                      "PullMpOutput")
                }
              },
              b.prototype.getRTCUserInfoList = function(b, c) {
                var d = new a.RongIMClient.Protobuf.RtcQueryListInput;
                d.setOrder(2),
                  a.RongIMClient.bridge.queryMsg("rtcUData", a.MessageUtil.ArrayForm(d.toArrayBuffer()), b.id, {
                      onSuccess: function(b) {
                        var d = {},
                          e = b.list;
                        a.RongUtil.forEach(e,
                          function(b) {
                            var c = b.userId,
                              e = {};
                            a.RongUtil.forEach(b.userData,
                              function(a) {
                                var b = a.key,
                                  c = a.value;
                                e[b] = c
                              }),
                              d[c] = e
                          }),
                          c.onSuccess(d)
                      },
                      onError: function(a) {
                        c.onError(a)
                      }
                    },
                    "RtcUserListOutput")
              },
              b.prototype.getRTCUserList = function(b, c) {
                var d = new a.RongIMClient.Protobuf.RtcQueryListInput;
                d.setOrder(2),
                  a.RongIMClient.bridge.queryMsg("rtcUList", a.MessageUtil.ArrayForm(d.toArrayBuffer()), b.id, {
                      onSuccess: function(a) {
                        c.onSuccess({
                          users: a.list
                        })
                      },
                      onError: function(a) {
                        c.onError(a)
                      }
                    },
                    "RtcUserListOutput")
              },
              b.prototype.setRTCUserInfo = function(b, c, d) {
                var e = new a.RongIMClient.Protobuf.RtcValueInfo;
                e.setKey(c.key),
                  e.setValue(c.value),
                  a.RongIMClient.bridge.queryMsg("rtcUPut", a.MessageUtil.ArrayForm(e.toArrayBuffer()), b.id, {
                    onSuccess: function() {
                      d.onSuccess(!0)
                    },
                    onError: function(a) {
                      d.onError(a)
                    }
                  })
              },
              b.prototype.removeRTCUserInfo = function(b, c, d) {
                var e = new a.RongIMClient.Protobuf.RtcKeyDeleteInput,
                  f = c.keys || [];
                a.RongUtil.isArray(f) || (f = [f]),
                  e.setKey(f),
                  a.RongIMClient.bridge.queryMsg("rtcUDel", a.MessageUtil.ArrayForm(e.toArrayBuffer()), b.id, {
                    onSuccess: function() {
                      d.onSuccess(!0)
                    },
                    onError: function(a) {
                      d.onError(a)
                    }
                  })
              },
              b.prototype.getRTCRoomInfo = function(b, c) {
                var d = new a.RongIMClient.Protobuf.RtcQueryListInput;
                d.setOrder(2),
                  a.RongIMClient.bridge.queryMsg("rtcRInfo", a.MessageUtil.ArrayForm(d.toArrayBuffer()), b.id, {
                      onSuccess: function(b) {
                        var d = {
                          id: b.roomId,
                          total: b.userCount
                        };
                        a.RongUtil.forEach(b.roomData,
                          function(a) {
                            d[a.key] = a.value
                          }),
                          c.onSuccess(d)
                      },
                      onError: function(a) {
                        c.onError(a)
                      }
                    },
                    "RtcRoomInfoOutput")
              },
              b.prototype.setRTCRoomInfo = function(b, c, d) {
                var e = new a.RongIMClient.Protobuf.RtcValueInfo;
                e.setKey(c.key),
                  e.setValue(c.value),
                  a.RongIMClient.bridge.queryMsg("rtcRPut", a.MessageUtil.ArrayForm(e.toArrayBuffer()), b.id, {
                    onSuccess: function() {
                      d.onSuccess(!0)
                    },
                    onError: function(a) {
                      d.onError(a)
                    }
                  })
              },
              b.prototype.removeRTCRoomInfo = function(b, c, d) {
                var e = new a.RongIMClient.Protobuf.RtcKeyDeleteInput,
                  f = c.keys || [];
                a.RongUtil.isArray(f) || (f = [f]),
                  e.setKey(f),
                  a.RongIMClient.bridge.queryMsg("rtcRDel", a.MessageUtil.ArrayForm(e.toArrayBuffer()), b.id, {
                    onSuccess: function() {
                      d.onSuccess(!0)
                    },
                    onError: function(a) {
                      d.onError(a)
                    }
                  })
              },
              b.prototype.joinRTCRoom = function(b, c) {
                var d = new a.RongIMClient.Protobuf.RtcInput;
                d.setNothing(b.mode),
                  a.RongIMClient.bridge.queryMsg("rtcRJoin_data", a.MessageUtil.ArrayForm(d.toArrayBuffer()), b.id, {
                      onSuccess: function(b) {
                        var d = {},
                          e = b.list,
                          f = b.token;
                        a.RongUtil.forEach(e,
                          function(b) {
                            var c = b.userId,
                              e = {};
                            a.RongUtil.forEach(b.userData,
                              function(a) {
                                var b = a.key,
                                  c = a.value;
                                e[b] = c
                              }),
                              d[c] = e
                          }),
                          c.onSuccess({
                            users: d,
                            token: f
                          })
                      },
                      onError: function(a) {
                        c.onError(a)
                      }
                    },
                    "RtcUserListOutput")
              },
              b.prototype.quitRTCRoom = function(b, c) {
                var d = new a.RongIMClient.Protobuf.SetUserStatusInput;
                a.RongIMClient.bridge.queryMsg("rtcRExit", a.MessageUtil.ArrayForm(d.toArrayBuffer()), b.id, {
                  onSuccess: function() {
                    c.onSuccess(!0)
                  },
                  onError: function(a) {
                    c.onError(a)
                  }
                })
              },
              b.prototype.RTCPing = function(b, c) {
                var d = new a.RongIMClient.Protobuf.RtcInput;
                a.RongIMClient.bridge.queryMsg("rtcPing", a.MessageUtil.ArrayForm(d.toArrayBuffer()), b.id, c)
              },
              b.prototype.setRTCData = function(b, c, d, e, f, g, h) {
                var i = new a.RongIMClient.Protobuf.RtcSetDataInput;
                i.setInterior(e),
                  i.setTarget(f),
                  i.setKey(c),
                  i.setValue(d),
                  h = h || {};
                var j = h.name,
                  k = h.content;
                j && i.setObjectName(j),
                k && (a.RongUtil.isString(k) || (k = JSON.stringify(k)), i.setContent(k)),
                  a.RongIMClient.bridge.queryMsg("rtcSetData", a.MessageUtil.ArrayForm(i.toArrayBuffer()), b, g, "RtcOutput")
              },
              b.prototype.getRTCData = function(b, c, d, e, f) {
                var g = new a.RongIMClient.Protobuf.RtcDataInput;
                g.setInterior(d),
                  g.setTarget(e),
                  g.setKey(c),
                  a.RongIMClient.bridge.queryMsg("rtcQryData", a.MessageUtil.ArrayForm(g.toArrayBuffer()), b, {
                      onSuccess: function(b) {
                        var c = {},
                          d = b.outInfo;
                        a.RongUtil.forEach(d,
                          function(a) {
                            c[a.key] = a.value
                          }),
                          f.onSuccess(c)
                      },
                      onError: f.onError
                    },
                    "RtcQryOutput")
              },
              b.prototype.removeRTCData = function(b, c, d, e, f, g) {
                var h = new a.RongIMClient.Protobuf.RtcDataInput;
                h.setInterior(d),
                  h.setTarget(e),
                  h.setKey(c),
                  g = g || {};
                var i = g.name,
                  j = g.content;
                i && h.setObjectName(i),
                j && (a.RongUtil.isString(j) || (j = JSON.stringify(j)), h.setContent(j)),
                  a.RongIMClient.bridge.queryMsg("rtcDelData", a.MessageUtil.ArrayForm(h.toArrayBuffer()), b, f, "RtcOutput")
              },
              b.prototype.setRTCUserData = function(b, c, d, e, f, g) {
                this.setRTCData(b, c, d, e, a.RTCAPIType.PERSON, f, g)
              },
              b.prototype.getRTCUserData = function(b, c, d, e, f) {
                this.getRTCData(b, c, d, a.RTCAPIType.PERSON, e)
              },
              b.prototype.removeRTCUserData = function(b, c, d, e, f) {
                this.removeRTCData(b, c, d, a.RTCAPIType.PERSON, e, f)
              },
              b.prototype.setRTCRoomData = function(b, c, d, e, f, g) {
                this.setRTCData(b, c, d, e, a.RTCAPIType.ROOM, f, g)
              },
              b.prototype.getRTCRoomData = function(b, c, d, e, f) {
                this.getRTCData(b, c, d, a.RTCAPIType.ROOM, e)
              },
              b.prototype.removeRTCRoomData = function(b, c, d, e, f) {
                this.removeRTCData(b, c, d, a.RTCAPIType.ROOM, e, f)
              },
              b.prototype.getNavi = function() {
                var b = a.RongIMClient._storageProvider.getItem("fullnavi") || "{}";
                return JSON.parse(b)
              },
              b.prototype.getRTCToken = function(b, c) {
                var d = new a.RongIMClient.Protobuf.RtcInput;
                a.RongIMClient.bridge.queryMsg("rtcToken", a.MessageUtil.ArrayForm(d.toArrayBuffer()), b.id, {
                    onSuccess: function(a) {
                      c.onSuccess(a)
                    },
                    onError: function(a) {
                      c.onError(a)
                    }
                  },
                  "RtcTokenOutput")
              },
              b
          } ();
          a.ServerDataProvider = b
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) {
          var b = function() {
            function b(a) {
              this.version = "2.8.27",
                this.userId = "",
                this.useConsole = !1,
                this.appKey = "",
                this.token = "",
                this.addon = a
            }
            return b.prototype.init = function(a, b) {
              this.appKey = a,
              this.useConsole && console.log("init"),
                b = b || {},
                b.version = this.version;
              var c = this.addon.initWithAppkey(a, b.dbPath, b);
              return c && (c = JSON.parse(c)),
                this.addon.registerMessageType("RC:VcMsg", 3),
                this.addon.registerMessageType("RC:ImgTextMsg", 3),
                this.addon.registerMessageType("RC:FileMsg", 3),
                this.addon.registerMessageType("RC:LBSMsg", 3),
                this.addon.registerMessageType("RC:PSImgTxtMsg", 3),
                this.addon.registerMessageType("RC:PSMultiImgTxtMsg", 3),
                this.addon.registerMessageType("RCJrmf:RpMsg", 3),
                this.addon.registerMessageType("RCJrmf:RpOpendMsg", 1),
                this.addon.registerMessageType("RC:GrpNtf", 1),
                this.addon.registerMessageType("RC:DizNtf", 0),
                this.addon.registerMessageType("RC:InfoNtf", 0),
                this.addon.registerMessageType("RC:ContactNtf", 0),
                this.addon.registerMessageType("RC:ProfileNtf", 0),
                this.addon.registerMessageType("RC:CmdNtf", 0),
                this.addon.registerMessageType("RC:CmdMsg", 0),
                this.addon.registerMessageType("RC:TypSts", 0),
                this.addon.registerMessageType("RC:CsChaR", 0),
                this.addon.registerMessageType("RC:CsHsR", 0),
                this.addon.registerMessageType("RC:CsEnd", 0),
                this.addon.registerMessageType("RC:CsSp", 0),
                this.addon.registerMessageType("RC:CsUpdate", 0),
                this.addon.registerMessageType("RC:CsContact", 0),
                this.addon.registerMessageType("RC:ReadNtf", 0),
                this.addon.registerMessageType("RC:VCAccept", 0),
                this.addon.registerMessageType("RC:VCRinging", 0),
                this.addon.registerMessageType("RC:VCSummary", 0),
                this.addon.registerMessageType("RC:VCHangup", 0),
                this.addon.registerMessageType("RC:VCInvite", 0),
                this.addon.registerMessageType("RC:VCModifyMedia", 0),
                this.addon.registerMessageType("RC:VCModifyMem", 0),
                this.addon.registerMessageType("RC:PSCmd", 0),
                this.addon.registerMessageType("RC:RcCmd", 0),
                this.addon.registerMessageType("RC:SRSMsg", 0),
                this.addon.registerMessageType("RC:RRReqMsg", 0),
                this.addon.registerMessageType("RC:RRRspMsg", 0),
                c
            },
              b.prototype.connect = function(b, c, d, e) {
                this.useConsole && console.log("connect"),
                  this.userId = d,
                  this.connectCallback = c,
                  a.Bridge._client = {
                    userId: d
                  },
                  e = e || {};
                var f = !!e.openMp,
                  g = !!e.openUS;
                e.type && this.addon.setEnvironment(!0),
                  this.addon.connectWithToken(b, d, e.serverList, f, g)
              },
              b.prototype.setServerInfo = function(a) {
                "setServerInfo" in this.addon && this.addon.setServerInfo(a.navi)
              },
              b.prototype.logout = function() {
                this.useConsole && console.log("logout"),
                  this.disconnect()
              },
              b.prototype.disconnect = function() {
                this.useConsole && console.log("disconnect"),
                  this.addon.disconnect(!0)
              },
              b.prototype.clearListeners = function() {
                this.addon.setOnReceiveStatusListener(),
                  this.addon.setConnectionStatusListener(),
                  this.addon.setOnReceiveMessageListener()
              },
              b.prototype.clearData = function() {
                return this.useConsole && console.log("clearData"),
                  this.addon.clearData()
              },
              b.prototype.setConnectionStatusListener = function(b) {
                var c = this;
                c.connectListener = b,
                this.useConsole && console.log("setConnectionStatusListener"),
                c.addon && c.addon.setConnectionStatusListener(function(d) {
                  switch (d) {
                    case 10:
                      setTimeout(function() {
                        b.onChanged(a.ConnectionStatus.CONNECTING)
                      });
                      break;
                    case 31004:
                      setTimeout(function() {
                        c.connectCallback.onTokenIncorrect()
                      });
                      break;
                    case 1:
                    case 8:
                    case 9:
                    case 11:
                    case 12:
                    case 31011:
                    case 3e4:
                    case 30002:
                      setTimeout(function() {
                        b.onChanged(a.ConnectionStatus.DISCONNECTED)
                      });
                      break;
                    case 0:
                    case 33005:
                      setTimeout(function() {
                        c.connectCallback.onSuccess(c.userId),
                          b.onChanged(a.ConnectionStatus.CONNECTED)
                      });
                      break;
                    case 6:
                      setTimeout(function() {
                        b.onChanged(a.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT)
                      });
                      break;
                    default:
                      setTimeout(function() {
                        b.onChanged(d)
                      })
                  }
                })
              },
              b.prototype.setOnReceiveMessageListener = function(b) {
                var c = this;
                c.messageListener = b,
                this.useConsole && console.log("setOnReceiveMessageListener"),
                c.addon && c.addon.setOnReceiveMessageListener(function(d, e, f, g) {
                  var h = c.buildMessage(d);
                  h.offLineMessage = f,
                    setTimeout(function() { ["AcceptMessage", "RingingMessage", "HungupMessage", "InviteMessage", "MediaModifyMessage", "MemberModifyMessage"].indexOf(h.messageType) > -1 ? a.RongIMClient._voipProvider && a.RongIMClient._voipProvider.onReceived(h) : b.onReceived(h, e, g)
                    })
                })
              },
              b.prototype.sendTypingStatusMessage = function(b, c, d, e) {
                var f = this;
                this.useConsole && console.log("sendTypingStatusMessage"),
                d in a.RongIMClient.MessageParams && f.sendMessage(b, c, a.TypingStatusMessage.obtain(a.RongIMClient.MessageParams[d].objectName, ""), {
                  onSuccess: function() {
                    setTimeout(function() {
                      e.onSuccess()
                    })
                  },
                  onError: function(a) {
                    setTimeout(function() {
                      e.onError(a, null)
                    })
                  },
                  onBefore: function() {}
                })
              },
              b.prototype.setMessageStatus = function(a, b, c, d, e) {
                this.addon.updateMessageReceiptStatus(a, b, c),
                  e.onSuccess(!0)
              },
              b.prototype.sendTextMessage = function(b, c, d, e) {
                var f = a.TextMessage.obtain(d);
                this.useConsole && console.log("sendTextMessage"),
                  this.sendMessage(b, c, f, e)
              },
              b.prototype.getRemoteHistoryMessages = function(b, c, d, e, f, g) {
                try {
                  var h = this;
                  h.useConsole && console.log("getRemoteHistoryMessages"),
                    h.addon.getRemoteHistoryMessages(b, c, d || 0, e,
                      function(b, c) {
                        var d = b ? JSON.parse(b).list: [],
                          e = [];
                        d.reverse();
                        for (var g = 0,
                               i = d.length; g < i; g++) {
                          var j = h.buildMessage(d[g].obj);
                          j.sentStatus = a.SentStatus.READ,
                            e[g] = j
                        }
                        f.onSuccess(e, !!c)
                      },
                      function(a) {
                        f.onError(a)
                      })
                } catch(i) {
                  f.onError(i)
                }
              },
              b.prototype.getRemoteConversationList = function(a, b, c, d) {
                try {
                  this.useConsole && console.log("getRemoteConversationList");
                  var e = b || [1, 2, 3, 4, 5, 6, 7, 8],
                    f = this.addon.getConversationList(e),
                    g = JSON.parse(f).list,
                    h = [],
                    i = this,
                    j = 0;
                  g.reverse(),
                    d = "boolean" == typeof d && d;
                  for (var k = 0,
                         l = g.length; k < l; k++) {
                    var m = g[k].obj,
                      n = JSON.parse(m);
                    if ("" != n) {
                      if (1 == n.isHidden && d) continue;
                      h[j] = i.buildConversation(m),
                        j++
                    }
                  }
                  h.reverse();
                  var o = h.length;
                  c = c || o,
                  o > c && (h.length = c),
                    a.onSuccess(h)
                } catch(p) {
                  a.onError(p)
                }
              },
              b.prototype.removeConversation = function(b, c, d) {
                try {
                  this.useConsole && console.log("removeConversation"),
                    this.addon.removeConversation(b, c);
                  for (var e = a.RongIMClient._memoryStore.conversationList,
                         f = e.length,
                         g = 0; g < f; g++) if (e[g].conversationType == b && c == e[g].targetId) {
                    e.splice(g, 1);
                    break
                  }
                  d.onSuccess(!0)
                } catch(h) {
                  d.onError(h)
                }
              },
              b.prototype.joinChatRoom = function(a, b, c) {
                this.useConsole && console.log("joinChatRoom"),
                  this.addon.joinChatRoom(a, b,
                    function() {
                      c.onSuccess()
                    },
                    function(a) {
                      c.onError(a)
                    })
              },
              b.prototype.quitChatRoom = function(a, b) {
                this.useConsole && console.log("quitChatRoom"),
                  this.addon.quitChatRoom(a,
                    function() {
                      b.onSuccess()
                    },
                    function(a) {
                      b.onError(a)
                    })
              },
              b.prototype.addToBlacklist = function(a, b) {
                this.useConsole && console.log("addToBlacklist"),
                  this.addon.addToBlacklist(a,
                    function() {
                      b.onSuccess()
                    },
                    function(a) {
                      b.onError(a)
                    })
              },
              b.prototype.getBlacklist = function(a) {
                this.useConsole && console.log("getBlacklist"),
                  this.addon.getBlacklist(function(b) {
                      a.onSuccess(b)
                    },
                    function(b) {
                      a.onError(b)
                    })
              },
              b.prototype.getBlacklistStatus = function(a, b) {
                this.useConsole && console.log("getBlacklistStatus"),
                  this.addon.getBlacklistStatus(a,
                    function(a) {
                      b.onSuccess(a)
                    },
                    function(a) {
                      b.onError(a)
                    })
              },
              b.prototype.removeFromBlacklist = function(a, b) {
                this.useConsole && console.log("removeFromBlacklist"),
                  this.addon.removeFromBlacklist(a,
                    function() {
                      b.onSuccess()
                    },
                    function(a) {
                      b.onError(a)
                    })
              },
              b.prototype.sendMessage = function(b, c, d, e, f, g, h, i, j) {
                var k = this,
                  l = [];
                k.useConsole && console.log("sendMessage"),
                  j = j || {};
                var m = b == a.ConversationType.DISCUSSION || b == a.ConversationType.GROUP;
                if (m && d.messageName == a.RongIMClient.MessageType.ReadReceiptResponseMessage) {
                  l = [];
                  var n = d;
                  if (n.receiptMessageDic) {
                    var o = [];
                    for (var p in n.receiptMessageDic) o.push(p);
                    l = o
                  }
                }
                m && d.messageName == a.RongIMClient.MessageType.SyncReadStatusMessage && (l = [], l.push(k.userId));
                var q = j.userIds;
                m && q && (l = q);
                var r = k.addon.sendMessage(b, c, a.RongIMClient.MessageParams[d.messageName].objectName, d.encode(), g || "", h || "",
                  function(a) {},
                  function(b, c) {
                    var d = k.buildMessage(b),
                      f = a.ErrorCode.SENSITIVE_REPLACE;
                    if (c == f) return e.onError(f, d);
                    e.onSuccess(d)
                  },
                  function(a, b) {
                    e.onError(b, k.buildMessage(a))
                  },
                  l, f),
                  s = JSON.parse(r);
                e.onBefore && e.onBefore(s.messageId),
                  a.MessageIdHandler.messageId = s.messageId
              },
              b.prototype.registerMessageType = function(b, c, d, e, f) {
                this.useConsole && console.log("registerMessageType"),
                  this.addon.registerMessageType(c, d.getMessageTag(), f);
                var g = a.ModelUtil.modleCreate(e, b);
                a.RongIMClient.RegisterMessage[b] = g,
                  a.RongIMClient.RegisterMessage[b].messageName = b,
                  registerMessageTypeMapping[c] = b,
                  a.RongIMClient.MessageType[b] = b,
                  a.RongIMClient.MessageParams[b] = {
                    objectName: c,
                    msgTag: d
                  },
                  typeMapping[c] = b
              },
              b.prototype.registerMessageTypes = function(b) {
                var c = [],
                  d = function(a) {
                    var b = [];
                    for (var c in a) b.push(c);
                    return b
                  };
                for (var e in b) {
                  var f = b[e],
                    g = f.proto,
                    h = d(g),
                    i = f.flag || 3,
                    j = a.MessageTag.getTagByStatus(i);
                  i = new a.MessageTag(j.isCounted, j.isPersited),
                    c.push({
                      type: e,
                      name: f.name,
                      flag: i,
                      protos: h
                    })
                }
                for (var k = function(b) {
                    var c = b.type,
                      d = b.name,
                      e = b.flag,
                      f = b.protos;
                    a.RongIMClient.registerMessageType(c, d, e, f)
                  },
                       l = 0, m = c.length; l < m; l++) {
                  var f = c[l];
                  k(f)
                }
              },
              b.prototype.addMessage = function(b, c, d, e) {
                this.useConsole && console.log("addMessage");
                var f = d.direction,
                  g = this.addon.insertMessage(b, c, d.senderUserId, d.objectName, JSON.stringify(d.content),
                    function() {
                      e.onSuccess(h.buildMessage(g))
                    },
                    function() {
                      e.onError(a.ErrorCode.MSG_INSERT_ERROR)
                    },
                    f),
                  h = this
              },
              b.prototype.removeMessage = function(a, b, c, d) {},
              b.prototype.removeLocalMessage = function(a, b, c, d) {
                try {
                  this.useConsole && console.log("removeLocalMessage"),
                    this.addon.deleteMessages(c),
                    d.onSuccess(!0)
                } catch(e) {
                  d.onError(e)
                }
              },
              b.prototype.getMessage = function(a, b) {
                try {
                  this.useConsole && console.log("getMessage");
                  var c = this.buildMessage(this.addon.getMessage(a));
                  b.onSuccess(c)
                } catch(d) {
                  b.onError(d)
                }
              },
              b.prototype.clearMessages = function(a, b, c) {
                try {
                  this.useConsole && console.log("clearMessages"),
                    this.addon.clearMessages(a, b),
                    c.onSuccess(!0)
                } catch(d) {
                  c.onError(d)
                }
              },
              b.prototype.setUnreadCount = function(a, b, c) {},
              b.prototype.getConversation = function(a, b, c) {
                try {
                  this.useConsole && console.log("getConversation");
                  var d = this.addon.getConversation(a, b);
                  c.onSuccess(this.buildConversation(d))
                } catch(e) {
                  c.onError(e)
                }
              },
              b.prototype.getConversationList = function(a, b, c, d) {
                this.useConsole && console.log("getConversationList"),
                  this.getRemoteConversationList(a, b, c, d)
              },
              b.prototype.clearCache = function() {
                var b = a.RongIMClient._memoryStore || {};
                b.conversationList = [],
                  b.isSyncRemoteConverList
              },
              b.prototype.clearConversations = function(a, b) {
                try {
                  this.useConsole && console.log("clearConversations"),
                    this.addon.clearConversations(),
                    b.onSuccess(!0)
                } catch(c) {
                  b.onError(c)
                }
              },
              b.prototype.setMessageContent = function(a, b, c) {
                b = JSON.stringify(b),
                  this.addon.setMessageContent(a, b, c)
              },
              b.prototype.setMessageSearchField = function(a, b, c) {
                b = JSON.stringify(b),
                  this.addon.setMessageContent(a, b, c)
              },
              b.prototype.getHistoryMessages = function(b, c, d, e, f, g, h) {
                if (this.useConsole && console.log("getHistoryMessages"), e <= 0) return void f.onError(a.ErrorCode.TIMEOUT);
                g = g || "",
                  h = void 0 === h || h;
                try {
                  var i = this.addon.getHistoryMessages(b, c, d || 0, e, g, h),
                    j = i ? JSON.parse(i).list: [],
                    k = [],
                    l = this;
                  j.reverse();
                  for (var m = 0,
                         n = j.length; m < n; m++) {
                    var o = l.buildMessage(j[m].obj);
                    k[m] = o
                  }
                  f.onSuccess(k, n == e)
                } catch(p) {
                  f.onError(p)
                }
              },
              b.prototype.clearRemoteHistoryMessages = function(b, c) {
                var d = b.conversationType,
                  e = b.targetId,
                  f = b.timestamp;
                return {
                  1 : !0,
                  2 : !0,
                  3 : !0,
                  5 : !0,
                  6 : !0
                } [d] ? "number" != typeof f ? void c.onError(a.ErrorCode.CLEAR_HIS_TIME_ERROR) : void this.addon.clearRemoteHistoryMessages( + d, e, f,
                  function() {
                    c.onSuccess(!0)
                  },
                  function(b) {
                    1 == b && (b = a.ErrorCode.CLEAR_HIS_ERROR),
                      c.onError(b)
                  }) : void c.onError(a.ErrorCode.CLEAR_HIS_TYPE_ERROR)
              },
              b.prototype.clearHistoryMessages = function(b, c) {
                var d = +b.conversationType,
                  e = b.targetId;
                try {
                  this.addon.clearMessages(d, e);
                  c.onSuccess(!0)
                } catch(f) {
                  console.log(f),
                    c.onError(a.ErrorCode.CLEAR_HIS_ERROR)
                }
              },
              b.prototype.getTotalUnreadCount = function(a, b) {
                try {
                  var c;
                  this.useConsole && console.log("getTotalUnreadCount"),
                    c = b ? this.addon.getTotalUnreadCount(b) : this.addon.getTotalUnreadCount(),
                    a.onSuccess(c)
                } catch(d) {
                  a.onError(d)
                }
              },
              b.prototype.getConversationUnreadCount = function(a, b) {
                this.useConsole && console.log("getConversationUnreadCount"),
                  this.getTotalUnreadCount(b, a)
              },
              b.prototype.getUnreadCount = function(a, b, c) {
                try {
                  this.useConsole && console.log("getUnreadCount");
                  var d = this.addon.getUnreadCount(a, b);
                  c.onSuccess(d)
                } catch(e) {
                  c.onError(e)
                }
              },
              b.prototype.clearUnreadCount = function(a, b, c) {
                try {
                  this.useConsole && console.log("clearUnreadCount");
                  this.addon.clearUnreadCount(a, b);
                  c.onSuccess(!0)
                } catch(d) {
                  c.onError(d)
                }
              },
              b.prototype.clearTotalUnreadCount = function(a) {
                this.useConsole && console.log("clearTotalUnreadCount")
              },
              b.prototype.clearUnreadCountByTimestamp = function(a, b, c, d) {
                try {
                  this.useConsole && console.log("clearUnreadCountByTimestamp");
                  this.addon.clearUnreadCountByTimestamp(a, b, c);
                  d.onSuccess(!0)
                } catch(e) {
                  d.onError(e)
                }
              },
              b.prototype.setConversationToTop = function(a, b, c, d) {
                try {
                  this.useConsole && console.log("setConversationToTop"),
                    this.addon.setConversationToTop(a, b, c),
                    d.onSuccess(!0)
                } catch(e) {
                  d.onError(e)
                }
              },
              b.prototype.setConversationHidden = function(a, b, c) {
                this.addon.setConversationHidden(a, b, c)
              },
              b.prototype.setMessageReceivedStatus = function(a, b, c) {
                try {
                  this.useConsole && console.log("setMessageReceivedStatus"),
                    this.addon.setMessageReceivedStatus(a, b),
                    c.onSuccess(!0)
                } catch(d) {
                  c.onError(d)
                }
              },
              b.prototype.setMessageSentStatus = function(a, b, c) {
                try {
                  this.useConsole && console.log("setMessageSentStatus"),
                    this.addon.setMessageSentStatus(a, b),
                    c.onSuccess(!0)
                } catch(d) {
                  c.onError(d)
                }
              },
              b.prototype.getFileToken = function(a, b) {
                this.useConsole && console.log("getFileToken"),
                  this.addon.getUploadToken(a,
                    function(a) {
                      b.onSuccess({
                        token: a
                      })
                    },
                    function(a) {
                      b.onError(a)
                    })
              },
              b.prototype.getFileUrl = function(a, b, c, d) {
                this.useConsole && console.log("getFileUrl"),
                  this.addon.getDownloadUrl(a, b, c,
                    function(a) {
                      d.onSuccess({
                        downloadUrl: a
                      })
                    },
                    function(a) {
                      d.onError(a)
                    })
              },
              b.prototype.searchConversationByContent = function(a, b, c) {
                var d = [];
                d = void 0 === c ? [1, 2, 3, 4, 5, 6, 7] : c;
                try {
                  this.useConsole && console.log("searchConversationByContent");
                  var e = this.addon.searchConversationByContent(d, a),
                    f = JSON.parse(e).list,
                    g = [],
                    h = this;
                  f.reverse();
                  for (var i = 0,
                         j = f.length; i < j; i++) g[i] = h.buildConversation(f[i].obj);
                  b.onSuccess(g)
                } catch(k) {
                  b.onError(k)
                }
              },
              b.prototype.searchMessageByContent = function(a, b, c, d, e, f, g) {
                var h = this;
                try {
                  this.useConsole && console.log("searchMessageByContent"),
                    this.addon.searchMessageByContent(a, b, c, d, e, f,
                      function(a, b) {
                        var c = a ? JSON.parse(a).list: [],
                          d = [];
                        c.reverse();
                        for (var e = 0,
                               f = c.length; e < f; e++) d[e] = h.buildMessage(c[e].obj);
                        g.onSuccess(d, b)
                      })
                } catch(i) {
                  g.onError(i)
                }
              },
              b.prototype.getChatRoomInfo = function(a, b, c, d) {
                this.useConsole && console.log("getChatRoomInfo"),
                  this.addon.getChatroomInfo(a, b, c,
                    function(a, b) {
                      var c = a ? JSON.parse(a).list: [],
                        e = {
                          userInfos: [],
                          userTotalNums: b
                        };
                      if (c.length > 0) for (var f = 0,
                                               g = c.length; f < g; f++) e.userInfos.push(JSON.parse(c[f].obj));
                      d.onSuccess(e)
                    },
                    function(a) {
                      d.onError(a)
                    })
              },
              b.prototype.setChatroomHisMessageTimestamp = function(a, b) {},
              b.prototype.getChatRoomHistoryMessages = function(a, b, c, d) {},
              b.prototype.getDelaTime = function() {
                return this.addon.getDeltaTime()
              },
              b.prototype.getUserStatus = function(b, c) {
                this.addon.getUserStatus(b,
                  function(b) {
                    var d = a.RongInnerTools.convertUserStatus({
                      status: b,
                      userId: ""
                    });
                    c.onSuccess(d)
                  },
                  function(a) {
                    c.onError(a)
                  })
              },
              b.prototype.setUserStatus = function(a, b) {
                this.addon.setUserStatus(a,
                  function() {
                    b.onSuccess(!0)
                  },
                  function(a) {
                    b.onError(a)
                  })
              },
              b.prototype.subscribeUserStatus = function(a, b) {
                this.addon.subscribeUserStatus(a,
                  function() {
                    b && b.onSuccess(!0)
                  },
                  function(a) {
                    b && b.onError(a)
                  })
              },
              b.prototype.setUserStatusListener = function(b, c) {
                this.addon.setOnReceiveStatusListener(function(b, c) {
                  var d = a.RongInnerTools.convertUserStatus({
                    userId: b,
                    status: c
                  });
                  a.RongIMClient.userStatusObserver.notify({
                    key: b,
                    entity: d
                  })
                });
                var d = b.userIds || [];
                d.length && a.RongIMClient._dataAccessProvider.subscribeUserStatus(d)
              },
              b.prototype.getUnreadMentionedMessages = function(a, b) {
                for (var c = this,
                       d = JSON.parse(c.addon.getUnreadMentionedMessages(a, b)).list, e = 0, f = d.length; e < f; e++) {
                  var g = JSON.parse(d[e].obj);
                  g.content = JSON.parse(g.content),
                    d[e] = g
                }
                return d
              },
              b.prototype.hasRemoteUnreadMessages = function(a, b) {
                b.onSuccess(!1)
              },
              b.prototype.sendRecallMessage = function(a, b) {
                var c = this;
                c.addon.recallMessage("RC:RcCmd", JSON.stringify(a), a.push || "",
                  function() {
                    a.objectName = "RC:RcCmd",
                      b.onSuccess(c.buildMessage(JSON.stringify(a)))
                  },
                  function(a) {
                    b.onError(a)
                  })
              },
              b.prototype.updateMessage = function(a, b) {},
              b.prototype.updateMessages = function(a, b, c, d, e) {},
              b.prototype.reconnect = function(a) {},
              b.prototype.sendReceiptResponse = function(a, b, c) {},
              b.prototype.setMessageExtra = function(a, b, c) {},
              b.prototype.addMemberToDiscussion = function(a, b, c) {},
              b.prototype.createDiscussion = function(a, b, c) {},
              b.prototype.getDiscussion = function(a, b) {},
              b.prototype.quitDiscussion = function(a, b) {},
              b.prototype.removeMemberFromDiscussion = function(a, b, c) {},
              b.prototype.setDiscussionInviteStatus = function(a, b, c) {},
              b.prototype.setDiscussionName = function(a, b, c) {},
              b.prototype.setEnvironment = function(a) {
                this.addon.setEnvironment(a)
              },
              b.prototype.addConversation = function(a, b) {},
              b.prototype.updateConversation = function(a) {
                return null
              },
              b.prototype.getConversationNotificationStatus = function(b, c) {
                var d = b.conversationType,
                  e = b.targetId,
                  f = a.RongIMClient._memoryStore.notification,
                  g = d + "_" + e,
                  h = f[g];
                if ("number" == typeof h) return void c.onSuccess(h);
                this.addon.getConversationNotificationStatus(d, e,
                  function(a) {
                    f[g] = a,
                      c.onSuccess(a)
                  },
                  function(a) {
                    c.onError(a)
                  })
              },
              b.prototype.setConversationNotificationStatus = function(b, c) {
                var d = b.conversationType,
                  e = b.targetId,
                  f = b.status;
                a.RongIMClient._memoryStore.notification[d + "_" + e] = f;
                var g = !!f;
                this.addon.setConversationNotificationStatus(d, e, g,
                  function() {
                    c.onSuccess(f)
                  },
                  function(a) {
                    c.onError(a)
                  })
              },
              b.prototype.getCurrentConnectionStatus = function() {
                return this.addon.getConnectionStatus()
              },
              b.prototype.getAgoraDynamicKey = function(a, b, c) {
                this.addon.getVoIPKey(a, b, "",
                  function(a) {
                    c.onSuccess(a)
                  },
                  function(a) {
                    c.onError(a)
                  })
              },
              b.prototype.getPublicServiceProfile = function(b, c, d) {
                var e = a.RongIMClient._memoryStore.publicServiceMap.get(b, c);
                d.onSuccess(e)
              },
              b.prototype.setDeviceInfo = function(a) {
                var b = a.id || "";
                this.addon.setDeviceId(b)
              },
              b.prototype.getRemotePublicServiceList = function(b, c) {
                var d = [],
                  e = this.addon.getAccounts(),
                  f = function(a) {
                    var b = {
                      hasFollowed: !1,
                      isGlobal: !1,
                      menu: null
                    };
                    if (!a.obj) {
                      var c = {
                        error: a
                      };
                      throw new Error("å…¬ä¼—è´¦å·æ•°æ®æ ¼å¼é”™è¯¯: " + JSON.stringify(c))
                    }
                    var d = JSON.parse(a.obj),
                      e = {
                        aType: "conversationType",
                        aId: "publicServiceId",
                        aName: "introduction",
                        aUri: "portraitUri",
                        follow: "hasFollowed",
                        isGlobal: "isGlobal"
                      };
                    for (var f in d) {
                      var g = d[f];
                      if ("aExtra" == f) {
                        var h = JSON.parse(g);
                        b.hasFollowed = h.follow,
                          b.isGlobal = h.isGlobal,
                          b.menu = h.menu
                      }
                      var i = e[f];
                      i && (b[i] = g)
                    }
                    return b
                  };
                if (e) {
                  e = JSON.parse(e);
                  for (var g = e.list,
                         h = 0,
                         i = g.length; h < i; h++) {
                    var j = g[h];
                    j = f(j),
                      d.push(j)
                  }
                }
                d.length > 0 && (a.RongIMClient._memoryStore.publicServiceMap.publicServiceList.length = 0, a.RongIMClient._memoryStore.publicServiceMap.publicServiceList = d),
                  b.onSuccess(a.RongIMClient._memoryStore.publicServiceMap.publicServiceList)
              },
              b.prototype.buildMessage = function(b) {
                var c = new a.Message,
                  d = JSON.parse(b);
                c.conversationType = d.conversationType,
                  c.targetId = d.targetId,
                  c.messageDirection = d.direction,
                  c.senderUserId = d.senderUserId,
                  d.direction == a.MessageDirection.RECEIVE ? c.receivedStatus = d.status: d.direction == a.MessageDirection.SEND && (c.sentStatus = d.status),
                  c.sentTime = d.sentTime,
                  c.objectName = d.objectName;
                var e = d.content ? JSON.parse(d.content) : d.content,
                  f = typeMapping[d.objectName] || registerMessageTypeMapping[d.objectName];
                return e && (e.messageName = f),
                  c.content = e,
                  c.messageId = d.messageId,
                  c.messageUId = d.messageUid,
                  c.messageType = f,
                  c
              },
              b.prototype.buildConversation = function(b) {
                if ("" === b) return null;
                var c = new a.Conversation,
                  d = JSON.parse(b),
                  e = d.lastestMsg ? this.buildMessage(d.lastestMsg) : {};
                c.conversationTitle = d.title,
                  c.conversationType = d.conversationType,
                  c.draft = d.draft,
                  c.isTop = d.isTop,
                  c.isHidden = d.isHidden,
                  e.conversationType = d.conversationType,
                  e.targetId = d.targetId,
                  c.latestMessage = e,
                  c.latestMessageId = e.messageId,
                  c.latestMessage.messageType = typeMapping[e.objectName] || registerMessageTypeMapping[e.objectName],
                  c.objectName = e.objectName,
                  c.receivedStatus = a.ReceivedStatus.READ,
                  c.sentTime = e.sentTime,
                  c.senderUserId = e.senderUserId,
                  c.sentStatus = e.status,
                  c.targetId = d.targetId,
                  c.unreadMessageCount = d.unreadCount,
                  c.hasUnreadMention = d.m_hasUnreadMention;
                var f = this.getUnreadMentionedMessages(d.conversationType, d.targetId);
                if (f.length > 0) {
                  var g = f.pop();
                  c.mentionedMsg = {
                    uid: g.messageUid,
                    time: g.sentTime,
                    mentionedInfo: g.content.mentionedInfo,
                    sendUserId: g.senderUserId
                  }
                }
                return c
              },
              b.prototype.getRTCUserInfoList = function(a, b) {},
              b.prototype.setRTCUserInfo = function(a, b, c) {},
              b.prototype.removeRTCUserInfo = function(a, b, c) {},
              b.prototype.getRTCUserList = function(a, b) {},
              b.prototype.getRTCRoomInfo = function(a, b) {},
              b.prototype.setRTCRoomInfo = function(a, b, c) {},
              b.prototype.removeRTCRoomInfo = function(a, b, c) {},
              b.prototype.joinRTCRoom = function(a, b) {},
              b.prototype.quitRTCRoom = function(a, b) {},
              b.prototype.RTCPing = function(a, b) {},
              b.prototype.setRTCUserData = function(a, b, c, d, e, f) {},
              b.prototype.getRTCUserData = function(a, b, c, d, e) {},
              b.prototype.removeRTCUserData = function(a, b, c, d, e) {},
              b.prototype.setRTCRoomData = function(a, b, c, d, e, f) {},
              b.prototype.getRTCRoomData = function(a, b, c, d, e) {},
              b.prototype.removeRTCRoomData = function(a, b, c, d, e) {},
              b.prototype.getNavi = function() {},
              b.prototype.getRTCToken = function(a, b) {},
              b
          } ();
          a.VCDataProvider = b
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) {
          var b = function() {
            function a() {
              this._memeoryStore = {},
                this.prefix = "rong_"
            }
            return a.prototype.setItem = function(a, b) {
              this._memeoryStore[a] = decodeURIComponent(b)
            },
              a.prototype.getItem = function(a) {
                return this._memeoryStore[a]
              },
              a.prototype.removeItem = function(a) {
                this.getItem(a) && delete this._memeoryStore[a]
              },
              a.prototype.getItemKey = function(a) {
                var b = this,
                  c = null,
                  d = new RegExp(a + "\\w+");
                for (var e in b._memeoryStore) {
                  e.match(d) && (c = e)
                }
                return c
              },
              a.prototype.getItemKeyList = function(a) {
                var b = this.prefix,
                  c = this,
                  d = [],
                  e = new RegExp(a + "\\w+");
                for (var f in c._memeoryStore) {
                  f.match(e) && (f = f.substring(b.length), d.push(f))
                }
                return d
              },
              a.prototype.clearItem = function() {
                var a = this;
                for (var b in a._memeoryStore) delete a._memeoryStore[b]
              },
              a.prototype.onOutOfQuota = function() {
                return 4096
              },
              a
          } ();
          a.MemeoryProvider = b
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) {
          var b = function() {
            function b() {
              this.prefix = "rong_",
                this._host = "";
              var b = new Date,
                c = b.getMonth() + 1,
                d = b.getFullYear() + "/" + (1 == c.toString().length ? "0" + c: c) + "/" + b.getDate(),
                e = new Date(d).getTime();
              for (var f in localStorage) {
                if (f.lastIndexOf("RECEIVED") > -1) {
                  var g = JSON.parse(localStorage.getItem(f));
                  for (var h in g) e - g[h].dealtime > 0 && delete g[h];
                  a.RongUtil.isEmpty(g) ? localStorage.removeItem(f) : localStorage.setItem(f, JSON.stringify(g))
                }
                if (f.lastIndexOf("SENT") > -1) {
                  e - JSON.parse(localStorage.getItem(f)).dealtime > 0 && localStorage.removeItem(f)
                }
              }
            }
            return b.prototype.setItem = function(a, b) {
              a && ( - 1 == a.indexOf(this.prefix) && (a = this.prefix + a), localStorage.setItem(a, b))
            },
              b.prototype.getItem = function(a) {
                return a ? ( - 1 == a.indexOf(this.prefix) && (a = this.prefix + a), localStorage.getItem(a || "")) : ""
              },
              b.prototype.getItemKey = function(a) {
                var b = "",
                  c = this.prefix + a;
                for (var d in localStorage) if (0 == d.indexOf(c)) {
                  b = d;
                  break
                }
                return b
              },
              b.prototype.getItemKeyList = function(a) {
                var b = [],
                  c = this.prefix,
                  d = c + a;
                for (var e in localStorage) 0 == e.indexOf(d) && (e = e.substring(c.length), b.push(e));
                return b
              },
              b.prototype.removeItem = function(a) {
                a && ( - 1 == a.indexOf(this.prefix) && (a = this.prefix + a), localStorage.removeItem(a.toString()))
              },
              b.prototype.clearItem = function() {
                var a = this;
                for (var b in localStorage) b.indexOf(a.prefix) > -1 && a.removeItem(b)
              },
              b.prototype.onOutOfQuota = function() {
                return JSON.stringify(localStorage).length
              },
              b
          } ();
          a.LocalStorageProvider = b
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) {
          var b = function() {
            function a() {
              this.opersistName = "RongIMLib",
                this.keyManager = "RongUserDataKeyManager",
                this._host = "",
                this.prefix = "rong_",
                this.oPersist = document.createElement("div"),
                this.oPersist.style.display = "none",
                this.oPersist.style.behavior = "url('#default#userData')",
                document.body.appendChild(this.oPersist),
                this.oPersist.load(this.opersistName)
            }
            return a.prototype.setItem = function(a, b) {
              a && -1 == a.indexOf(this.prefix) && (a = this.prefix + a),
                this.oPersist.setAttribute(a, b);
              var c = this.getItem(this.keyManager);
              c ? -1 == c.indexOf(a) && (c += "," + a) : c = a,
                this.oPersist.setAttribute(this.prefix + this.keyManager, c),
                this.oPersist.save(this.opersistName)
            },
              a.prototype.getItem = function(a) {
                return a && -1 == a.indexOf(this.prefix) && (a = this.prefix + a),
                  a ? this.oPersist.getAttribute(a) : a
              },
              a.prototype.removeItem = function(a) {
                a && -1 == a.indexOf(this.prefix) && (a = this.prefix + a),
                  this.oPersist.removeAttribute(a),
                  this.oPersist.save(this.opersistName);
                for (var b = this.getItem(this.keyManager), c = b && b.split(",") || [], d = 0, e = c.length; d < e; d++) c[d] == a && c.splice(d, 1);
                this.oPersist.setAttribute(this.prefix + this.keyManager, c.join(",")),
                  this.oPersist.save(this.opersistName)
              },
              a.prototype.getItemKey = function(a) {
                var b = null,
                  c = this.getItem(this.keyManager),
                  d = c && c.split(",") || [],
                  e = this.prefix + a;
                if (d.length) for (var f = 0,
                                     g = d.length; f < g; f++) if (d[f] && 0 == d[f].indexOf(e)) {
                  b = d[f];
                  break
                }
                return b
              },
              a.prototype.getItemKeyList = function(a) {
                var b = [],
                  c = this.getItem(this.keyManager),
                  d = c && c.split(",") || [],
                  e = this.prefix,
                  f = e + a;
                if (d.length) for (var g = 0,
                                     h = d.length; g < h; g++) if (d[g] && 0 == d[g].indexOf(f)) {
                  var i = d[g];
                  i = i.substring(e.length),
                    b.push(d[g])
                }
                return b
              },
              a.prototype.clearItem = function() {
                var a = this.getItem(this.keyManager),
                  b = [],
                  c = this;
                if (a && (b = a.split(",")), b.length) {
                  for (var d = 0,
                         e = b.length; d < e; d++) b[d] && c.removeItem(b[d]);
                  c.removeItem(c.keyManager)
                }
              },
              a.prototype.onOutOfQuota = function() {
                return 10485760
              },
              a
          } ();
          a.UserDataProvider = b
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) {
          var b = function() {
            function b(b) {
              if (this.script = document.createElement("script"), this.head = document.getElementsByTagName("head")[0], "WebSocket" in window && "ArrayBuffer" in window && 3 === WebSocket.prototype.CLOSED && !a.RongIMClient._memoryStore.depend.isPolling) {
                if (a.Transportations._TransportType = a.Socket.WEBSOCKET, !a.RongIMClient.Protobuf) {
                  var c = a.RongIMClient._memoryStore.depend.protobuf,
                    d = this.script;
                  d.src = c,
                    this.head.appendChild(d),
                    d.onload = d.onreadystatechange = function() {
                      if (! (this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (d.onload = d.onreadystatechange = null, b && b(), b))) {
                        var c = a.RongIMClient._memoryStore.token,
                          e = a.RongIMClient._memoryStore.callback;
                        c && a.RongIMClient.connect(c, e)
                      }
                    }
                }
              } else a.Transportations._TransportType = "xhr-polling",
                a.RongIMClient.Protobuf = Polling
            }
            return b
          } ();
          a.FeatureDectector = b
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(RongIMLib) {
          var FeaturePatcher = function() {
            function FeaturePatcher() {}
            return FeaturePatcher.prototype.patchAll = function() {
              this.patchJSON(),
                this.patchForEach()
            },
              FeaturePatcher.prototype.patchForEach = function() {
                Array.forEach || (Array.forEach = function(a, b) {
                  for (var c = 0; c < a.length; c++) b.call(a, a[c], c, a)
                })
              },
              FeaturePatcher.prototype.patchJSON = function() {
                window.JSON || (window.JSON = function() {
                  function JSON() {}
                  return JSON.parse = function(sJSON) {
                    return eval("(" + sJSON + ")")
                  },
                    JSON.stringify = function(a) {
                      return this.str("", {
                        "": a
                      })
                    },
                    JSON.str = function(a, b) {
                      var c, d, e, f, g, h = b[a],
                        i = this;
                      switch (h && "object" == typeof h && "function" == typeof h.toJSON && (h = h.toJSON(a)), typeof h) {
                        case "string":
                          return i.quote(h);
                        case "number":
                          return isFinite(h) ? String(h) : "null";
                        case "boolean":
                        case "null":
                          return String(h);
                        case "object":
                          if (!h) return "null";
                          if (g = [], "[object Array]" === Object.prototype.toString.apply(h)) {
                            for (f = h.length, c = 0; c < f; c += 1) g[c] = i.str(c, h) || "null";
                            return e = 0 === g.length ? "[]": "[" + g.join(",") + "]"
                          }
                          for (d in h) Object.prototype.hasOwnProperty.call(h, d) && (e = i.str(d, h)) && g.push(i.quote(d) + ":" + e);
                          return e = 0 === g.length ? "{}": "{" + g.join(",") + "}"
                      }
                    },
                    JSON.quote = function(a) {
                      var b = this;
                      return b.rx_escapable.lastIndex = 0,
                        b.rx_escapable.test(a) ? '"' + a.replace(b.rx_escapable,
                          function(a) {
                            var c = b.meta[a];
                            return "string" == typeof c ? c: "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
                          }) + '"': '"' + a + '"'
                    },
                    JSON.rx_escapable = new RegExp('[\\"\\\\"\0--ÂŸÂ­Ø€-Ø„Üáž´ážµâ€Œ-â€\u2028-â€¯â -â¯\ufeffï¿°-ï¿¿]', "g"),
                    JSON.meta = {
                      "\b": "\\b",
                      "\t": "\\t",
                      "\n": "\\n",
                      "\f": "\\f",
                      "\r": "\\r",
                      '"': '\\"',
                      "''": "\\''",
                      "\\": "\\\\"
                    },
                    JSON
                } ())
              },
              FeaturePatcher
          } ();
          RongIMLib.FeaturePatcher = FeaturePatcher
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib; !
        function(a) { !
          function() {
            function a() {}
            a.prototype.load = function(a, b, c) {
              var d = document.createElement("script");
              d.async = !0,
              b && (d.addEventListener ? d.addEventListener("load",
                function(a) {
                  var c = a.target || a.srcElement;
                  b(c.src)
                },
                !1) : d.readyState && (d.onreadystatechange = function(a) {
                var c = a.srcElement;
                b(c.src)
              })),
              c && (d.onerror = function(a) {
                var b = a.target || a.srcElement;
                c(b.src)
              }),
                (document.head || document.getElementsByTagName("head")[0]).appendChild(d),
                d.src = a
            }
          } ()
        } (RongIMLib || (RongIMLib = {}));
      var RongIMLib;
      return function(a) {
        var b = function() {
          function a() {
            this.publicServiceList = []
          }
          return a.prototype.get = function(a, b) {
            for (var c = 0,
                   d = this.publicServiceList.length; c < d; c++) if (this.publicServiceList[c].conversationType == a && b == this.publicServiceList[c].publicServiceId) return this.publicServiceList[c]
          },
            a.prototype.add = function(a) {
              for (var b = !0,
                     c = this,
                     d = 0,
                     e = this.publicServiceList.length; d < e; d++) if (c.publicServiceList[d].conversationType == a.conversationType && a.publicServiceId == c.publicServiceList[d].publicServiceId) {
                this.publicServiceList.unshift(this.publicServiceList.splice(d, 1)[0]),
                  b = !1;
                break
              }
              b && this.publicServiceList.unshift(a)
            },
            a.prototype.replace = function(a) {
              for (var b = this,
                     c = 0,
                     d = this.publicServiceList.length; c < d; c++) if (b.publicServiceList[c].conversationType == a.conversationType && a.publicServiceId == b.publicServiceList[c].publicServiceId) {
                b.publicServiceList.splice(c, 1, a);
                break
              }
            },
            a.prototype.remove = function(a, b) {
              for (var c = this,
                     d = 0,
                     e = this.publicServiceList.length; d < e; d++) if (c.publicServiceList[d].conversationType == a && b == c.publicServiceList[d].publicServiceId) {
                this.publicServiceList.splice(d, 1);
                break
              }
            },
            a
        } ();
        a.PublicServiceMap = b;
        var c = function() {
          function a() {
            this.conversationList = []
          }
          return a.prototype.get = function(a, b) {
            for (var c = 0,
                   d = this.conversationList.length; c < d; c++) if (this.conversationList[c].conversationType == a && this.conversationList[c].targetId == b) return this.conversationList[c];
            return null
          },
            a.prototype.add = function(a) {
              for (var b = !0,
                     c = 0,
                     d = this.conversationList.length; c < d; c++) if (this.conversationList[c].conversationType === a.conversationType && this.conversationList[c].targetId === a.targetId) {
                this.conversationList.unshift(this.conversationList.splice(c, 1)[0]),
                  b = !1;
                break
              }
              b && this.conversationList.unshift(a)
            },
            a.prototype.replace = function(a) {
              for (var b = 0,
                     c = this.conversationList.length; b < c; b++) if (this.conversationList[b].conversationType === a.conversationType && this.conversationList[b].targetId === a.targetId) {
                this.conversationList.splice(b, 1, a);
                break
              }
            },
            a.prototype.remove = function(a) {
              for (var b = 0,
                     c = this.conversationList.length; b < c; b++) if (this.conversationList[b].conversationType === a.conversationType && this.conversationList[b].targetId === a.targetId) {
                this.conversationList.splice(b, 1);
                break
              }
            },
            a
        } ();
        a.ConversationMap = c;
        var d = function() {
          function b() {}
          return b.getInstance = function() {
            return b._instance || (b._instance = new b),
              b._instance
          },
            b.prototype.logger = function(b, c, d) {
              a.RongIMClient.logger({
                code: b,
                funcName: c,
                msg: d
              })
            },
            b.prototype.check = function(b, c, d, e) {
              if (a.RongIMClient._dataAccessProvider || d) {
                for (var f = 0,
                       g = e.length; f < g; f++) if (!new RegExp(this.getType(e[f])).test(b[f])) {
                  var h = "ç¬¬" + (f + 1) + "ä¸ªå‚æ•°é”™è¯¯, é”™è¯¯ç±»åž‹ï¼š" + this.getType(e[f]) + " [" + b[f] + "] -> ä½ç½®:" + c;
                  this.logger("-3", c, h)
                }
              } else {
                var h = "è¯¥å‚æ•°ä¸æ­£ç¡®æˆ–å°šæœªå®žä¾‹åŒ–RongIMClient -> ä½ç½®:" + c;
                this.logger("-4", c, h)
              }
            },
            b.prototype.getType = function(a) {
              var b = Object.prototype.toString.call(a).toLowerCase();
              return b.slice(8, b.length - 1)
            },
            b.prototype.checkCookieDisable = function() {
              document.cookie = "checkCookie=1";
              var a = document.cookie.match(new RegExp("(^| )checkCookie=([^;]*)(;|$)")),
                b = !1;
              return a || (b = !0),
                document.cookie = "checkCookie=1;expires=Thu, 01-Jan-1970 00:00:01 GMT",
                b
            },
            b
        } ();
        a.CheckParam = d;
        var e = function() {
          function a(a) {
            this.map = {},
              this.keys = [],
              this.limit = a || 10
          }
          return a.prototype.set = function(a, b) {
            this.map[a] = b
          },
            a.prototype.get = function(a) {
              return this.map[a] || 0
            },
            a.prototype.remove = function(a) {
              delete this.map[a]
            },
            a
        } ();
        a.LimitableMap = e;
        var f = function() {
          function a() {
            this.cache = {}
          }
          return a.prototype.set = function(a, b) {
            this.cache[a] = b
          },
            a.prototype.get = function(a) {
              return this.cache[a]
            },
            a.prototype.remove = function(a) {
              delete this.cache[a]
            },
            a
        } ();
        a.MemoryCache = f;
        var g = function() {
          function a(a) {
            var b = this;
            b.xmlhttp = null,
              b.options = a;
            var c = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
            "undefined" != typeof XMLHttpRequest && c ? b.xmlhttp = new XMLHttpRequest: "undefined" != typeof XDomainRequest ? b.xmlhttp = new XDomainRequest: b.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
          }
          return a.prototype.send = function(a) {
            var b = this;
            b.options.url || (b.options.url = "http://upload.qiniu.com/putb64/-1"),
              b.xmlhttp.onreadystatechange = function() {
                4 == b.xmlhttp.readyState && (b.options.type ? a() : a(JSON.parse(b.xmlhttp.responseText.replace(/'/g, '"'))))
              },
              b.xmlhttp.open("POST", b.options.url, !0),
              b.xmlhttp.withCredentials = !1,
            "setRequestHeader" in b.xmlhttp && (b.options.type ? b.xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8") : (b.xmlhttp.setRequestHeader("Content-type", "application/octet-stream"), b.xmlhttp.setRequestHeader("Authorization", "UpToken " + b.options.token))),
              b.xmlhttp.send(b.options.type ? "appKey=" + b.options.appKey + "&deviceId=" + b.options.deviceId + "&timestamp=" + b.options.timestamp + "&deviceInfo=" + b.options.deviceInfo + "&privateInfo=" + JSON.stringify(b.options.privateInfo) : b.options.base64)
          },
            a
        } ();
        a.RongAjax = g;
        var h = function() {
          function a() {}
          return a.noop = function() {},
            a.isEmpty = function(a) {
              var b = !0;
              for (var c in a) {
                b = !1;
                break
              }
              return b
            },
            a.MD5 = function(a, b, c) {
              return md5(a, b, c)
            },
            a.isObject = function(a) {
              return "[object Object]" == Object.prototype.toString.call(a)
            },
            a.isArray = function(a) {
              return "[object Array]" == Object.prototype.toString.call(a)
            },
            a.isString = function(a) {
              return "[object String]" == Object.prototype.toString.call(a)
            },
            a.isFunction = function(a) {
              return "[object Function]" == Object.prototype.toString.call(a)
            },
            a.isUndefined = function(a) {
              return "[object Undefined]" == Object.prototype.toString.call(a)
            },
            a.isEqual = function(a, b) {
              return a === b
            },
            a.indexOf = function(a, b) {
              for (var c = -1,
                     d = 0; d < a.length; d++) if (b === a[d]) {
                c = d;
                break
              }
              return c
            },
            a.stringFormat = function(a, b) {
              for (var c = 0,
                     d = b.length; c < d; c++) {
                var e = b[c],
                  f = new RegExp("\\{" + c + "\\}", "g");
                a = a.replace(f, e)
              }
              return a
            },
            a.tplEngine = function(a, b, c) {
              function d(b) {
                return a.replace(c || /{([^}]+)}/g,
                  function(a, c) {
                    return "\\" == a.charAt(0) ? a.slice(1) : void 0 != b[c] ? b[c] : "{" + c + "}"
                  })
              }
              "[object Array]" !== Object.prototype.toString.call(b) && (b = [b]);
              for (var e = [], f = 0, g = b.length; f < g; f++) e.push(d(b[f]));
              return e.join("")
            },
            a.forEach = function(b, c) {
              c = c || a.noop;
              var d = function() {
                  for (var a in b) b.hasOwnProperty(a) && c(b[a], a, b)
                },
                e = function() {
                  for (var a = 0,
                         d = b.length; a < d; a++) c(b[a], a)
                };
              a.isObject(b) && d(),
              a.isArray(b) && e()
            },
            a.extend = function(b, c, d, e) {
              return a.forEach(b,
                function(a, b) {
                  var d = b in c;
                  e && d && (c[b] = a),
                  d || (c[b] = a)
                }),
                c
            },
            a.createXHR = function() {
              var a = {
                  XMLHttpRequest: function() {
                    return new XMLHttpRequest
                  },
                  XDomainRequest: function() {
                    return new XDomainRequest
                  },
                  ActiveXObject: function() {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                  }
                },
                b = "function" == typeof XMLHttpRequest,
                c = "function" == typeof XDomainRequest;
              return a[b ? "XMLHttpRequest": c ? "XDomainRequest": "ActiveXObject"]()
            },
            a.request = function(b) {
              var c = b.url,
                d = b.success,
                e = b.error,
                f = b.method || "GET",
                g = a.createXHR();
              return g.onreadystatechange = function() {
                if (4 == g.readyState) {
                  var a = g.status;
                  200 == a ? d(g.responseText) : e(a, g.responseText)
                }
              },
                g.open(f, c, !0),
                g.send(null),
                g
            },
            a.formatProtoclPath = function(b) {
              var c = b.path,
                d = b.protocol,
                e = b.tmpl || "{0}{1}",
                f = b.sub,
                g = "://",
                h = c.indexOf(g); (h > -1 && (h += g.length, c = c.substring(h)), f) && ((h = c.indexOf("/")) > -1 && (c = c.substr(0, h)));
              return a.stringFormat(e, [d, c])
            },
            a.supportLocalStorage = function() {
              var a = !1;
              if ("object" == typeof localStorage) try {
                var b = "RC_TMP_KEY",
                  c = "RC_TMP_VAL";
                localStorage.setItem(b, c);
                localStorage.getItem(b) == c && (a = !0)
              } catch(d) {
                console.log("localStorage is disabled.")
              }
              return a
            },
            a.rename = function(b, c) {
              var d = a.isObject(b);
              d && (b = [b]),
                b = JSON.parse(JSON.stringify(b));
              var e = function(a, b, d) {
                delete d[b],
                  b = c[b],
                  d[b] = a
              };
              return a.forEach(b,
                function(b) {
                  a.forEach(b,
                    function(b, d, f) { (d in c ? e: a.noop)(b, d, f)
                    })
                }),
                d ? b[0] : b
            },
            a.some = function(a, b) {
              for (var c = !1,
                     d = 0,
                     e = a.length; d < e; d++) if (b(a[d])) {
                c = !0;
                break
              }
              return c
            },
            a.keys = function(a) {
              var b = [];
              for (var c in a) b.push(c);
              return b
            },
            a.isNumber = function(a) {
              return "[object Number]" == Object.prototype.toString.call(a)
            },
            a.getTimestamp = function() {
              return (new Date).getTime()
            },
            a
        } ();
        a.RongUtil = h;
        var i = function() {
          function a() {
            this.watchers = {}
          }
          return a.prototype.genUId = function(a) {
            return [a, (new Date).getTime()].join("_")
          },
            a.prototype.watch = function(a) {
              var b = this,
                c = a.key,
                d = a.multiple;
              c = h.isArray(c) ? c: [c];
              var e = a.func;
              h.forEach(c,
                function(a) {
                  a = d ? b.genUId(a) : a,
                    b.watchers[a] = e
                })
            },
            a.prototype.notify = function(a) {
              var b = this,
                c = a.key,
                d = a.entity;
              for (var e in b.watchers) {
                0 == e.indexOf(c) && b.watchers[e](d)
              }
            },
            a.prototype.remove = function() {},
            a
        } ();
        a.RongObserver = i;
        var j = function() {
          function a(a) {
            this.timeout = 0,
              this.timers = [],
              this.timeout = a.timeout
          }
          return a.prototype.resume = function(a) {
            var b = setTimeout(a, this.timeout);
            this.timers.push(b)
          },
            a.prototype.pause = function() {
              h.forEach(this.timers,
                function(a) {
                  clearTimeout(a)
                })
            },
            a
        } ();
        a.Timer = j;
        var k = function() {
          function a(a) {
            this.items = [],
              this.index = 0,
              this.onwheel = function() {},
              this.items = a.items,
              this.onwheel = a.onwheel
          }
          return a.prototype.get = function() {
            var a = this,
              b = a.items,
              c = a.index,
              d = c >= b.length;
            return d && a.onwheel(),
              d ? 0 : c
          },
            a.prototype.add = function() {
              this.index += 1
            },
            a
        } ();
        a.IndexTools = k;
        var l = function() {
          function a() {}
          return a.getUId = function(a) {
            return md5(a).slice(8, 16)
          },
            a
        } ();
        a.InnerUtil = l
      } (RongIMLib || (RongIMLib = {})),
        RongIMLib
    });
