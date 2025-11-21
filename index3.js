const _0x576581 = _0x5adc;
(function (_0x1a8b4e, _0x35e375) {
  const _0x668074 = _0x5adc,
    _0xff17ac = _0x1a8b4e();
  while (!![]) {
    try {
      const _0x163308 =
        -parseInt(_0x668074(0x261)) / 0x1 +
        (parseInt(_0x668074(0x26f)) / 0x2) *
          (-parseInt(_0x668074(0x21b)) / 0x3) +
        (parseInt(_0x668074(0x2c2)) / 0x4) *
          (parseInt(_0x668074(0x1b8)) / 0x5) +
        -parseInt(_0x668074(0x1df)) / 0x6 +
        (parseInt(_0x668074(0x212)) / 0x7) *
          (parseInt(_0x668074(0x291)) / 0x8) +
        -parseInt(_0x668074(0x2d0)) / 0x9 +
        (-parseInt(_0x668074(0x279)) / 0xa) *
          (-parseInt(_0x668074(0x247)) / 0xb);
      if (_0x163308 === _0x35e375) break;
      else _0xff17ac["push"](_0xff17ac["shift"]());
    } catch (_0x11817e) {
      _0xff17ac["push"](_0xff17ac["shift"]());
    }
  }
})(_0x1b77, 0x5af15);
const {
    default: makeWASocket,
    getAggregateVotesInPollMessage,
    useMultiFileAuthState,
    DisconnectReason,
    getDevice,
    fetchLatestBaileysVersion,
    jidNormalizedUser,
    getContentType,
    Browsers,
    makeInMemoryStore,
    makeCacheableSignalKeyStore,
    downloadContentFromMessage,
    generateForwardMessageContent,
    generateWAMessageFromContent,
    prepareWAMessageMedia,
    proto,
  } = require(_0x576581(0x1f2)),
  fs = require("fs"),
  P = require(_0x576581(0x2d7)),
  config = require(_0x576581(0x227)),
  qrcode = require("qrcode-terminal"),
  NodeCache = require(_0x576581(0x1dc)),
  util = require(_0x576581(0x1ed)),
  axios = require(_0x576581(0x242)),
  { File } = require(_0x576581(0x2ba)),
  path = require(_0x576581(0x280)),
  msgRetryCounterCache = new NodeCache(),
  FileType = require(_0x576581(0x1ab)),
  l = console[_0x576581(0x1a1)],
  SESSION_DIR = "./" + config[_0x576581(0x1d6)];
!fs["existsSync"](SESSION_DIR) && fs[_0x576581(0x1ca)](SESSION_DIR);
const df = __dirname + ("/" + config[_0x576581(0x1d6)] + "/creds.json");
if (!fs[_0x576581(0x1c4)](df)) {
  if (config["SESSION_ID"]) {
    const sessdata = config[_0x576581(0x293)][_0x576581(0x2ae)](
      _0x576581(0x29f),
      "",
    );
    if (sessdata["includes"]("#")) {
      const filer = File["fromURL"]("https://mega.nz/file/" + sessdata);
      filer[_0x576581(0x214)]((_0x7bfd71, _0x188e82) => {
        const _0x9ff994 = _0x576581;
        if (_0x7bfd71) throw _0x7bfd71;
        fs[_0x9ff994(0x20c)](df, _0x188e82, () => {
          const _0xba361f = _0x9ff994;
          console[_0xba361f(0x1a1)](_0xba361f(0x204));
        });
      });
    } else downloadSession(sessdata, df);
  }
}
async function downloadSession(_0x3d385c, _0x1df897) {
  const _0x4d6de2 = _0x576581,
    _0x5d8655 = ["https://saviya-kolla-database.koyeb.app/", _0x4d6de2(0x2c5)];
  let _0x4f6213 = ![];
  for (let _0x49a273 = 0x0; _0x49a273 < _0x5d8655["length"]; _0x49a273++) {
    const _0x73193b = _0x5d8655[_0x49a273] + "SESSIONS/" + _0x3d385c;
    console["log"](_0x4d6de2(0x244) + (_0x49a273 + 0x1) + ")");
    try {
      const _0x2a9541 = await axios[_0x4d6de2(0x1c0)](_0x73193b);
      if (
        _0x2a9541[_0x4d6de2(0x1fa)] &&
        Object[_0x4d6de2(0x255)](_0x2a9541[_0x4d6de2(0x1fa)])[
          _0x4d6de2(0x1d2)
        ] > 0x0
      ) {
        (await sleep(0x3e8),
          fs[_0x4d6de2(0x23e)](
            _0x1df897,
            JSON[_0x4d6de2(0x1b7)](_0x2a9541[_0x4d6de2(0x1fa)], null, 0x2),
          ),
          console["log"](
            _0x4d6de2(0x1f1) +
              (_0x49a273 + 0x1) +
              "\x20and\x20saved\x20to\x20creds.json",
          ),
          (_0x4f6213 = !![]));
        break;
      } else
        console[_0x4d6de2(0x1e4)](
          _0x4d6de2(0x2e5) + (_0x49a273 + 0x1) + _0x4d6de2(0x2c3),
        );
    } catch (_0x4519ed) {
      console[_0x4d6de2(0x2f0)](
        _0x4d6de2(0x2c7) +
          (_0x49a273 + 0x1) +
          ":\x20" +
          _0x4519ed[_0x4d6de2(0x2e1)],
      );
    }
  }
  !_0x4f6213 && console[_0x4d6de2(0x2f0)](_0x4d6de2(0x220));
}
const express = require("express"),
  app = express(),
  port = process["env"][_0x576581(0x2e8)] || config[_0x576581(0x2e8)],
  { exec } = require(_0x576581(0x1c9)),
  AdmZip = require(_0x576581(0x1b6)),
  PLUGINS_DIR = _0x576581(0x2d1),
  LIB_DIR = _0x576581(0x2b0),
  DATA_DIR = _0x576581(0x2c6),
  ZIP_DIR = "./";
async function connect() {
  const _0x3fec18 = _0x576581;
  let _0x4f187f = await axios[_0x3fec18(0x1c0)](_0x3fec18(0x27b));
  const _0x4339fd = "" + _0x4f187f[_0x3fec18(0x1fa)]["megaurl2"];
  !fs["existsSync"](PLUGINS_DIR) &&
    fs["mkdirSync"](PLUGINS_DIR, { recursive: !![] });
  fs[_0x3fec18(0x1c4)](DATA_DIR) &&
    fs["rmSync"](DATA_DIR, { recursive: !![], force: !![] });
  !fs[_0x3fec18(0x1c4)](LIB_DIR) &&
    fs[_0x3fec18(0x1ca)](LIB_DIR, { recursive: !![] });
  console["log"]("Fetching\x20ZIP\x20file\x20from\x20Mega.nz...");
  const _0x1c948f = File["fromURL"]("" + _0x4339fd),
    _0x4c4cab = await _0x1c948f["downloadBuffer"](),
    _0x5f5ada = path[_0x3fec18(0x1d9)](__dirname, _0x3fec18(0x1bb));
  (fs[_0x3fec18(0x23e)](_0x5f5ada, _0x4c4cab),
    console[_0x3fec18(0x1a1)](_0x3fec18(0x2ca)));
  const _0x41112f = new AdmZip(_0x5f5ada);
  (_0x41112f[_0x3fec18(0x270)](ZIP_DIR, !![]),
    console[_0x3fec18(0x1a1)](_0x3fec18(0x20a)),
    console["log"]("Lib\x20extracted\x20successfully\x20✅"),
    console["log"](_0x3fec18(0x2bb)),
    fs[_0x3fec18(0x2b7)](_0x3fec18(0x1ea))[_0x3fec18(0x1f6)]((_0x28b729) => {
      const _0x1ab657 = _0x3fec18;
      path[_0x1ab657(0x219)](_0x28b729)[_0x1ab657(0x2b9)]() == ".js" &&
        require(_0x1ab657(0x1ea) + _0x28b729);
    }),
    fs["unlinkSync"](_0x5f5ada));
  const { sleep: _0x21b350 } = require(_0x3fec18(0x2b6));
  var { connectdb: _0x1825c7, updb: _0x10f700 } = require(_0x3fec18(0x1ff));
  (await _0x1825c7(),
    await _0x10f700(),
    console[_0x3fec18(0x1a1)]("RED_MOON\x20CONNECTED\x20✅"),
    await _0x21b350(0xbb8),
    await connectToWA());
}
async function connectToWA() {
  const _0x3924a6 = _0x576581,
    { version: _0x1fc145, isLatest: _0x3feb54 } =
      await fetchLatestBaileysVersion(),
    {
      getBuffer: _0x44f901,
      getGroupAdmins: _0x399c3c,
      getRandom: _0x316423,
      sleep: _0x236931,
      fetchJson: _0x5c7c38,
    } = require(_0x3924a6(0x2b6)),
    { sms: _0x2ca882 } = require(_0x3924a6(0x27f));
  var {
    updateCMDStore: _0x18815b,
    isbtnID: _0x315133,
    getCMDStore: _0x5319f7,
    getCmdForCmdId: _0x26a3cb,
    input: _0x1901bb,
    get: _0x297d13,
    getalls: _0x58bec9,
    updfb: _0x5175c4,
    upresbtn: _0x3086fa,
  } = require(_0x3924a6(0x1ff));
  const _0x8bd260 = config["PREFIX"],
    _0xa4c60f = config[_0x3924a6(0x215)],
    _0x916b13 = config[_0x3924a6(0x23d)],
    _0x1e3f46 = config[_0x3924a6(0x2d6)],
    _0x2bf4ef = config[_0x3924a6(0x1da)],
    _0x4daffb = config[_0x3924a6(0x267)],
    _0x523001 = config[_0x3924a6(0x22f)],
    _0x428f48 = config[_0x3924a6(0x1d1)],
    _0x549b7b = config[_0x3924a6(0x24c)],
    _0x2ba274 = config[_0x3924a6(0x1eb)],
    _0x99c53d = config[_0x3924a6(0x1cd)],
    _0xef4dc2 = config[_0x3924a6(0x262)],
    _0x188478 = config[_0x3924a6(0x232)],
    _0x4a8670 = config[_0x3924a6(0x20e)],
    _0xa1d982 = (
      await axios[_0x3924a6(0x1c0)](
        "https://raw.githubusercontent.com/ZombieLN/zombie-db/refs/heads/main/main_var.json",
      )
    )[_0x3924a6(0x1fa)],
    _0x13462f = "" + _0xa1d982[_0x3924a6(0x2ad)],
    _0x554961 = "" + _0xa1d982[_0x3924a6(0x20f)],
    { state: _0x1a026e, saveCreds: _0x8f59a } = await useMultiFileAuthState(
      __dirname + ("/" + config[_0x3924a6(0x1d6)] + "/"),
    ),
    _0x736553 = makeWASocket({
      logger: P({ level: _0x3924a6(0x1cc) })[_0x3924a6(0x298)]({
        level: _0x3924a6(0x1cc),
      }),
      printQRInTerminal: !![],
      generateHighQualityLinkPreview: !![],
      auth: _0x1a026e,
      defaultQueryTimeoutMs: undefined,
      msgRetryCounterCache: msgRetryCounterCache,
    });
  (_0x736553["ev"]["on"](_0x3924a6(0x1a7), async (_0x29fbbb) => {
    const _0x5229e7 = _0x3924a6,
      { connection: _0x8885f1, lastDisconnect: _0x2e4a41 } = _0x29fbbb;
    if (_0x8885f1 === "close") {
      const _0x380afc =
        _0x2e4a41?.[_0x5229e7(0x2f0)]?.[_0x5229e7(0x202)]?.[
          _0x5229e7(0x296)
        ] !== DisconnectReason[_0x5229e7(0x19d)];
      (console[_0x5229e7(0x1a1)](
        "❌\x20Disconnected:\x20" +
          (_0x2e4a41?.[_0x5229e7(0x2f0)]?.[_0x5229e7(0x2e1)] ||
            _0x5229e7(0x1c5)) +
          "\x20(" +
          (_0x380afc ? "Reconnecting" : _0x5229e7(0x28d)) +
          ")",
      ),
        _0x380afc && connectToWA());
    } else
      _0x8885f1 === _0x5229e7(0x1cf) &&
        (console[_0x5229e7(0x1a1)](_0x5229e7(0x2e2)),
        setTimeout(async () => {
          const _0x2c44e2 = _0x5229e7;
          try {
            const _0x48fc50 = _0x4a8670[0x0][_0x2c44e2(0x2cc)](_0x2c44e2(0x294))
              ? _0x4a8670[0x0]
              : _0x4a8670[0x0] + _0x2c44e2(0x294);
            let _0x56106e = "✅\x20RED_MOON\x20connected\x20successfully!";
            try {
              const _0x40e358 = await axios[_0x2c44e2(0x1c0)](
                  "https://raw.githubusercontent.com/ZombieLN/zombie-db/refs/heads/main/main_var.json",
                ),
                _0x5a750b = _0x40e358[_0x2c44e2(0x1fa)];
              _0x56106e = _0x5a750b?.[_0x2c44e2(0x2ad)] || _0x56106e;
            } catch (_0xe1584b) {
              console[_0x2c44e2(0x1e4)](_0x2c44e2(0x22d), _0xe1584b["message"]);
            }
            (await _0x736553[_0x2c44e2(0x1a6)](_0x2c44e2(0x2b3), {
              image: {
                url: "https://files.catbox.moe/h131nw.jpg",
              },
              caption: _0x56106e,
            }),
              console[_0x2c44e2(0x1a1)](_0x2c44e2(0x208)));
          } catch (_0x27a3b6) {
            console["error"](_0x2c44e2(0x1d3), _0x27a3b6["message"]);
          }
        }, 0x7d0));
  }),
    _0x736553["ev"]["on"](_0x3924a6(0x1be), _0x8f59a),
    _0x736553["ev"]["on"](_0x3924a6(0x1ce), async (_0x144bf7) => {
      const _0x29f923 = _0x3924a6;
      try {
        async function _0x102db2() {
          const _0x2d1d9d = _0x5adc,
            _0x1b3437 = await _0x58bec9();
          _0x1b3437 && Object[_0x2d1d9d(0x226)](config, _0x1b3437);
        }
        (_0x102db2()[_0x29f923(0x2c8)](console[_0x29f923(0x2f0)]),
          (_0x144bf7 = _0x144bf7[_0x29f923(0x1e7)][0x0]));
        if (!_0x144bf7["message"]) return;
        _0x144bf7[_0x29f923(0x2e1)] =
          getContentType(_0x144bf7["message"]) === _0x29f923(0x29b)
            ? _0x144bf7[_0x29f923(0x2e1)][_0x29f923(0x29b)][_0x29f923(0x2e1)]
            : _0x144bf7[_0x29f923(0x2e1)];
        if (!_0x144bf7[_0x29f923(0x2e1)]) return;
        _0x144bf7[_0x29f923(0x2e1)] =
          getContentType(_0x144bf7[_0x29f923(0x2e1)]) === _0x29f923(0x29b)
            ? _0x144bf7[_0x29f923(0x2e1)][_0x29f923(0x29b)][_0x29f923(0x2e1)]
            : _0x144bf7[_0x29f923(0x2e1)];
        if (
          _0x144bf7[_0x29f923(0x254)] &&
          _0x144bf7[_0x29f923(0x254)]["remoteJid"] === _0x29f923(0x1ae) &&
          config[_0x29f923(0x215)] === _0x29f923(0x21d)
        ) {
          const _0x11f0dc = [
              "🧩",
              "🍉",
              "💜",
              "🌸",
              "🪴",
              "💊",
              "💫",
              "🍂",
              "🌟",
              "🎋",
              _0x29f923(0x25e),
              "🫀",
              "🧿",
              "👀",
              "🤖",
              "🚩",
              "🥰",
              "🗿",
              "💜",
              "💙",
              "🌝",
              "🖤",
              "💚",
            ],
            _0x1907f1 =
              _0x11f0dc[
                Math[_0x29f923(0x258)](
                  Math[_0x29f923(0x1af)]() * _0x11f0dc[_0x29f923(0x1d2)],
                )
              ];
          await _0x736553[_0x29f923(0x1dd)]([_0x144bf7[_0x29f923(0x254)]]);
          const _0x2b756a = await jidNormalizedUser(_0x736553["user"]["id"]);
          await _0x736553[_0x29f923(0x1a6)](
            _0x144bf7[_0x29f923(0x254)]["remoteJid"],
            { react: { key: _0x144bf7["key"], text: _0x1907f1 } },
            { statusJidList: [_0x144bf7["key"][_0x29f923(0x240)], _0x2b756a] },
          );
        }
        if (
          _0x144bf7[_0x29f923(0x254)] &&
          _0x144bf7["key"][_0x29f923(0x224)] === _0x29f923(0x1ae)
        )
          return;
        const _0x546dff = await _0x736553["newsletterMetadata"](
          _0x29f923(0x213),
          "" + _0xa1d982[_0x29f923(0x29c)],
        );
        _0x546dff["viewer_metadata"] === null &&
          (await _0x736553[_0x29f923(0x2c9)]("" + _0xa1d982[_0x29f923(0x29c)]),
          console[_0x29f923(0x1a1)](_0x29f923(0x1a2)));
        const _0x204e0c = await _0x736553["newsletterMetadata"](
          "jid",
          _0x29f923(0x1a0),
        );
        _0x204e0c[_0x29f923(0x2f6)] === null &&
          (await _0x736553[_0x29f923(0x2c9)](_0x29f923(0x1a0)),
          console["log"](
            "INFINITY\x20-\x20DEVELOPERS\x20CHANAL\x20FOLLOW\x20✅",
          ));
        const _0x273c9c = await _0x736553[_0x29f923(0x21f)](
          "jid",
          "120363421953535024@newsletter",
        );
        _0x273c9c[_0x29f923(0x2f6)] === null &&
          (await _0x736553["newsletterFollow"](_0x29f923(0x273)),
          console[_0x29f923(0x1a1)](_0x29f923(0x1b2)));
        const _0x1f53c2 = await _0x736553[_0x29f923(0x21f)](
          _0x29f923(0x213),
          _0x29f923(0x28a),
        );
        _0x1f53c2["viewer_metadata"] === null &&
          (await _0x736553[_0x29f923(0x2c9)]("120363421953535024@newsletter"),
          console[_0x29f923(0x1a1)]("Manoj\x20X\x20CHANAL\x20FOLLOW\x20✅"));
        const _0x161111 = await _0x736553[_0x29f923(0x21f)](
          _0x29f923(0x213),
          _0x29f923(0x1e3),
        );
        _0x161111[_0x29f923(0x2f6)] === null &&
          (await _0x736553[_0x29f923(0x2c9)](_0x29f923(0x1e3)),
          console[_0x29f923(0x1a1)](_0x29f923(0x25c)));
        const _0x2c910e = _0x2ca882(_0x736553, _0x144bf7),
          _0x13b9ac = getContentType(_0x144bf7[_0x29f923(0x2e1)]),
          _0x3a7259 = JSON[_0x29f923(0x1b7)](_0x144bf7[_0x29f923(0x2e1)]),
          _0x29a4f4 = _0x144bf7[_0x29f923(0x254)][_0x29f923(0x224)],
          _0x48fba7 =
            _0x13b9ac == _0x29f923(0x2a5) &&
            _0x144bf7[_0x29f923(0x2e1)][_0x29f923(0x2a5)]["contextInfo"] != null
              ? _0x144bf7["message"][_0x29f923(0x2a5)]["contextInfo"][
                  _0x29f923(0x1f4)
                ] || []
              : [],
          _0x26d9eb =
            _0x13b9ac === _0x29f923(0x2f5)
              ? _0x144bf7["message"][_0x29f923(0x2f5)]
              : _0x13b9ac === _0x29f923(0x2a5) &&
                  _0x144bf7[_0x29f923(0x2e1)][_0x29f923(0x2a5)]?.[
                    _0x29f923(0x236)
                  ]?.["quotedMessage"] &&
                  (await _0x315133(
                    _0x144bf7[_0x29f923(0x2e1)][_0x29f923(0x2a5)][
                      _0x29f923(0x236)
                    ][_0x29f923(0x1d7)],
                  ))
                ? await _0x26a3cb(
                    await _0x5319f7(
                      _0x144bf7[_0x29f923(0x2e1)]["extendedTextMessage"][
                        _0x29f923(0x236)
                      ]["stanzaId"],
                    ),
                    _0x144bf7[_0x29f923(0x2e1)][_0x29f923(0x2a5)][
                      _0x29f923(0x1d0)
                    ],
                  )
                : _0x13b9ac === _0x29f923(0x2a5)
                  ? _0x144bf7[_0x29f923(0x2e1)][_0x29f923(0x2a5)][
                      _0x29f923(0x1d0)
                    ]
                  : _0x13b9ac === _0x29f923(0x1e6)
                    ? _0x144bf7[_0x29f923(0x2e1)][_0x29f923(0x1e6)]?.[
                        _0x29f923(0x1f3)
                      ]
                    : _0x13b9ac === "interactiveResponseMessage"
                      ? (() => {
                          const _0x4097ec = _0x29f923;
                          try {
                            const _0x3a3c86 = JSON["parse"](
                              _0x144bf7[_0x4097ec(0x2e1)][_0x4097ec(0x2b1)]?.[
                                "nativeFlowResponseMessage"
                              ]?.[_0x4097ec(0x243)],
                            );
                            return _0x3a3c86?.["id"] || "";
                          } catch {
                            return "";
                          }
                        })()
                      : _0x13b9ac === _0x29f923(0x1f8) &&
                          _0x144bf7[_0x29f923(0x2e1)][_0x29f923(0x1f8)]?.[
                            _0x29f923(0x245)
                          ]
                        ? _0x144bf7[_0x29f923(0x2e1)][_0x29f923(0x1f8)][
                            _0x29f923(0x245)
                          ]
                        : _0x13b9ac === "videoMessage" &&
                            _0x144bf7["message"]["videoMessage"]?.[
                              _0x29f923(0x245)
                            ]
                          ? _0x144bf7[_0x29f923(0x2e1)][_0x29f923(0x22c)][
                              _0x29f923(0x245)
                            ]
                          : _0x2c910e["msg"]?.[_0x29f923(0x1d0)] ||
                            _0x2c910e["msg"]?.[_0x29f923(0x2f5)] ||
                            _0x2c910e[_0x29f923(0x2e7)]?.[_0x29f923(0x245)] ||
                            _0x2c910e[_0x29f923(0x2e1)]?.[_0x29f923(0x2f5)] ||
                            _0x2c910e[_0x29f923(0x2e7)]?.["selectedButtonId"] ||
                            _0x2c910e[_0x29f923(0x2e7)]?.[_0x29f923(0x284)]?.[
                              _0x29f923(0x266)
                            ] ||
                            _0x2c910e[_0x29f923(0x2e7)]?.[_0x29f923(0x1f3)] ||
                            _0x2c910e[_0x29f923(0x2e7)]?.[_0x29f923(0x2d8)] ||
                            _0x2c910e[_0x29f923(0x2e7)]?.[
                              "selectedDisplayText"
                            ] ||
                            _0x2c910e[_0x29f923(0x2e7)]?.["title"] ||
                            _0x2c910e[_0x29f923(0x2e7)]?.[_0x29f923(0x23c)] ||
                            "",
          _0x5da2df = config["PREFIX"],
          _0x517e7d = _0x26d9eb[_0x29f923(0x283)](_0x5da2df),
          _0x16def7 = _0x517e7d
            ? _0x26d9eb[_0x29f923(0x22b)](_0x5da2df[_0x29f923(0x1d2)])
                [_0x29f923(0x2a3)]()
                [_0x29f923(0x26c)]("\x20")
                [_0x29f923(0x21a)]()
                [_0x29f923(0x2b9)]()
            : "",
          _0x4973fa = _0x26d9eb[_0x29f923(0x2a3)]()
            [_0x29f923(0x26c)](/ +/)
            ["slice"](0x1),
          _0x241822 = _0x4973fa[_0x29f923(0x1d9)]("\x20"),
          _0x58d917 = _0x29a4f4[_0x29f923(0x2b8)](_0x29f923(0x1ee)),
          _0x311c75 = _0x144bf7[_0x29f923(0x254)][_0x29f923(0x20b)]
            ? _0x736553[_0x29f923(0x29a)]["id"]["split"](":")[0x0] +
                "@s.whatsapp.net" || _0x736553[_0x29f923(0x29a)]["id"]
            : _0x144bf7[_0x29f923(0x254)][_0x29f923(0x240)] ||
              _0x144bf7["key"][_0x29f923(0x224)],
          _0xd57e78 = _0x311c75[_0x29f923(0x26c)]("@")[0x0],
          _0x34f6a7 = _0x736553[_0x29f923(0x29a)]["id"]["split"](":")[0x0],
          _0x1da783 = _0x144bf7[_0x29f923(0x2aa)] || "Sin\x20Nombre",
          _0x5447f9 = "94754871798,94775700815",
          _0x4fbaa8 = _0x5447f9[_0x29f923(0x26c)](","),
          _0x4cef8b = _0x34f6a7[_0x29f923(0x2cc)](_0xd57e78),
          _0x103d46 = _0x4fbaa8[_0x29f923(0x2cc)](_0xd57e78),
          _0x3c7ce0 = _0x4cef8b ? _0x4cef8b : _0x103d46,
          _0xa5623b = _0x4a8670[_0x29f923(0x2cc)](_0xd57e78) || _0x3c7ce0,
          _0x578d69 = await jidNormalizedUser(
            _0x736553[_0x29f923(0x29a)]["id"],
          ),
          _0x11902d = _0x58d917
            ? await _0x736553[_0x29f923(0x2da)](_0x29a4f4)["catch"](
                (_0x5f4cc5) => null,
              )
            : null,
          _0xae4227 = _0x58d917 && _0x11902d ? _0x11902d[_0x29f923(0x292)] : "",
          _0x512808 = _0x58d917 && _0x11902d ? _0x11902d[_0x29f923(0x22a)] : [],
          _0x7207c6 = _0x58d917 ? _0x399c3c(_0x512808) : [],
          _0x5e45ed = _0x58d917 ? _0x7207c6[_0x29f923(0x2cc)](_0x578d69) : ![],
          _0xdccf2a = _0x58d917 ? _0x7207c6[_0x29f923(0x2cc)](_0x311c75) : ![],
          _0x4158eb = _0x2c910e[_0x29f923(0x2e1)][_0x29f923(0x257)]
            ? !![]
            : ![],
          _0x3fff1c = (_0x13391c) => {
            let _0x5890b3 = _0x13391c;
            for (
              let _0xf8ac29 = 0x0;
              _0xf8ac29 < _0x5890b3["length"];
              _0xf8ac29++
            ) {
              if (_0x5890b3[_0xf8ac29] === _0x29a4f4) return !![];
            }
            return ![];
          },
          _0x590806 = async (_0x2e4e08) => {
            const _0x1de4f3 = _0x29f923;
            return await _0x736553[_0x1de4f3(0x1a6)](
              _0x29a4f4,
              { text: _0x2e4e08 },
              { quoted: _0x144bf7 },
            );
          };
        _0x736553["replyad"] = async (_0x357dd6) => {
          const _0x2e071d = _0x29f923;
          await _0x736553[_0x2e071d(0x1a6)](
            _0x29a4f4,
            { text: _0x357dd6 },
            { quoted: _0x144bf7 },
          );
        };
        const _0x4b7f7f = !![];
        ((_0x736553[_0x29f923(0x290)] = async (
          _0x3ca76c,
          _0x2b4bfa,
          _0x40b9b5,
        ) => {
          const _0x5920e2 = _0x29f923;
          if (!_0x4b7f7f)
            await _0x736553[_0x5920e2(0x1a6)](_0x3ca76c, _0x2b4bfa);
          else {
            if (_0x4b7f7f) {
              let _0x5e44df = "";
              const _0xf5c6a2 = [];
              _0x2b4bfa["buttons"][_0x5920e2(0x1f6)]((_0x127626, _0x255487) => {
                const _0x4371d7 = _0x5920e2,
                  _0x2b969d = "" + (_0x255487 + 0x1);
                ((_0x5e44df +=
                  "\x0a*" +
                  _0x2b969d +
                  _0x4371d7(0x1a5) +
                  _0x127626[_0x4371d7(0x229)][_0x4371d7(0x264)]),
                  _0xf5c6a2["push"]({
                    cmdId: _0x2b969d,
                    cmd: _0x127626[_0x4371d7(0x1a8)],
                  }));
              });
              if (_0x2b4bfa[_0x5920e2(0x1f0)] === 0x1) {
                const _0x5cdb19 =
                    _0x2b4bfa[_0x5920e2(0x1d0)] +
                    _0x5920e2(0x2c1) +
                    _0x5e44df +
                    "\x0a\x0a" +
                    _0x2b4bfa[_0x5920e2(0x2a1)],
                  _0x5c95ee = await _0x736553["sendMessage"](
                    _0x29a4f4,
                    { text: _0x5cdb19 },
                    { quoted: _0x40b9b5 || _0x144bf7 },
                  );
                await _0x18815b(_0x5c95ee["key"]["id"], _0xf5c6a2);
              } else {
                if (_0x2b4bfa[_0x5920e2(0x1f0)] === 0x4) {
                  const _0x729019 =
                      _0x2b4bfa[_0x5920e2(0x245)] +
                      _0x5920e2(0x2c1) +
                      _0x5e44df +
                      "\x0a\x0a" +
                      _0x2b4bfa[_0x5920e2(0x2a1)],
                    _0x339953 = await _0x736553[_0x5920e2(0x1a6)](
                      _0x3ca76c,
                      { image: _0x2b4bfa["image"], caption: _0x729019 },
                      { quoted: _0x40b9b5 || _0x144bf7 },
                    );
                  await _0x18815b(_0x339953[_0x5920e2(0x254)]["id"], _0xf5c6a2);
                }
              }
            }
          }
        }),
          (_0x736553[_0x29f923(0x19c)] = async (
            _0x1834f1,
            _0x3f4bcc,
            _0x4d07b7,
          ) => {
            const _0x5152a5 = _0x29f923;
            if (!_0x4b7f7f)
              await _0x736553[_0x5152a5(0x1a6)](_0x1834f1, _0x3f4bcc);
            else {
              if (_0x4b7f7f) {
                let _0x590889 = "";
                const _0x3cbb3a = [];
                _0x3f4bcc[_0x5152a5(0x295)][_0x5152a5(0x1f6)](
                  (_0x2b5692, _0x2c0cde) => {
                    const _0x41bc73 = _0x5152a5,
                      _0x1b3402 = "" + (_0x2c0cde + 0x1);
                    ((_0x590889 +=
                      "\x0a*" +
                      _0x1b3402 +
                      _0x41bc73(0x1a5) +
                      _0x2b5692[_0x41bc73(0x229)][_0x41bc73(0x264)]),
                      _0x3cbb3a[_0x41bc73(0x205)]({
                        cmdId: _0x1b3402,
                        cmd: _0x2b5692["buttonId"],
                      }));
                  },
                );
                if (_0x3f4bcc[_0x5152a5(0x1f0)] === 0x1) {
                  const _0x2f401c =
                      (_0x3f4bcc[_0x5152a5(0x1d0)] ||
                        _0x3f4bcc[_0x5152a5(0x245)]) +
                      _0x5152a5(0x1d8) +
                      _0x590889 +
                      "\x0a\x0a" +
                      _0x3f4bcc[_0x5152a5(0x2a1)],
                    _0x22dc07 = await _0x736553["sendMessage"](
                      _0x29a4f4,
                      { text: _0x2f401c },
                      { quoted: _0x4d07b7 || _0x144bf7 },
                    );
                  await _0x18815b(_0x22dc07[_0x5152a5(0x254)]["id"], _0x3cbb3a);
                } else {
                  if (_0x3f4bcc["headerType"] === 0x4) {
                    const _0x3f3309 =
                        _0x3f4bcc[_0x5152a5(0x245)] +
                        _0x5152a5(0x1d8) +
                        _0x590889 +
                        "\x0a\x0a" +
                        _0x3f4bcc[_0x5152a5(0x2a1)],
                      _0x4359ed = await _0x736553[_0x5152a5(0x1a6)](
                        _0x1834f1,
                        {
                          image: _0x3f4bcc[_0x5152a5(0x2a8)],
                          caption: _0x3f3309,
                        },
                        { quoted: _0x4d07b7 || _0x144bf7 },
                      );
                    await _0x18815b(
                      _0x4359ed[_0x5152a5(0x254)]["id"],
                      _0x3cbb3a,
                    );
                  }
                }
              }
            }
          }),
          (_0x736553["listMessage2"] = async (
            _0x4d0b0e,
            _0x542b60,
            _0x3e1330,
          ) => {
            const _0x2daabc = _0x29f923;
            if (!_0x4b7f7f)
              await _0x736553["sendMessage"](_0x4d0b0e, _0x542b60);
            else {
              if (_0x4b7f7f) {
                let _0x26b4ee = "";
                const _0x12ca50 = [];
                _0x542b60[_0x2daabc(0x2bd)][_0x2daabc(0x1f6)](
                  (_0x521da6, _0x1f7d08) => {
                    const _0x2ff612 = _0x2daabc,
                      _0x589326 = "" + (_0x1f7d08 + 0x1);
                    ((_0x26b4ee +=
                      "\x0a*" + _0x521da6[_0x2ff612(0x207)] + _0x2ff612(0x265)),
                      _0x521da6["rows"][_0x2ff612(0x1f6)](
                        (_0x16ca7b, _0x449b92) => {
                          const _0x4503f0 = _0x2ff612,
                            _0x5d87d9 = _0x589326 + "." + (_0x449b92 + 0x1),
                            _0x4a01fb =
                              "*" +
                              _0x5d87d9 +
                              "\x20||*\x20" +
                              _0x16ca7b[_0x4503f0(0x207)];
                          ((_0x26b4ee += _0x4a01fb + "\x0a"),
                            _0x16ca7b[_0x4503f0(0x2de)] &&
                              (_0x26b4ee +=
                                _0x4503f0(0x268) +
                                _0x16ca7b[_0x4503f0(0x2de)] +
                                "\x0a\x0a"),
                            _0x12ca50[_0x4503f0(0x205)]({
                              cmdId: _0x5d87d9,
                              cmd: _0x16ca7b["rowId"],
                            }));
                        },
                      ));
                  },
                );
                const _0x25be67 =
                    _0x542b60[_0x2daabc(0x1d0)] +
                    "\x0a\x0a" +
                    _0x542b60["buttonText"] +
                    "," +
                    _0x26b4ee +
                    "\x0a" +
                    _0x542b60["footer"],
                  _0x26607f = await _0x736553["sendMessage"](
                    _0x29a4f4,
                    { text: _0x25be67 },
                    { quoted: _0x3e1330 || _0x144bf7 },
                  );
                await _0x18815b(_0x26607f[_0x2daabc(0x254)]["id"], _0x12ca50);
              }
            }
          }),
          (_0x736553[_0x29f923(0x28e)] = async (
            _0x22f2f6,
            _0xe67d22,
            _0x1ca3b8,
          ) => {
            const _0x383b84 = _0x29f923;
            try {
              if (
                _0xe67d22[_0x383b84(0x2bd)] &&
                _0xe67d22["buttonText"] &&
                !_0x4b7f7f
              ) {
                const _0x267d3e =
                  _0x1ca3b8 &&
                  _0x1ca3b8[_0x383b84(0x254)] &&
                  _0x1ca3b8[_0x383b84(0x2e1)]
                    ? { quoted: _0x1ca3b8 }
                    : {};
                return await _0x736553[_0x383b84(0x1a6)](
                  _0x22f2f6,
                  _0xe67d22,
                  _0x267d3e,
                );
              }
              let _0x331415 = "";
              const _0x5e3366 = [];
              _0xe67d22["sections"][_0x383b84(0x1f6)](
                (_0x38a22b, _0x36f012) => {
                  const _0x4799d2 = _0x383b84,
                    _0x16bd93 = "" + (_0x36f012 + 0x1);
                  ((_0x331415 +=
                    "\x0a*" + _0x38a22b[_0x4799d2(0x207)] + _0x4799d2(0x265)),
                    _0x38a22b[_0x4799d2(0x19f)]["forEach"](
                      (_0x1572a1, _0xb4c364) => {
                        const _0x1c2a01 = _0x4799d2,
                          _0x4b86e1 = _0x16bd93 + "." + (_0xb4c364 + 0x1),
                          _0x540ae3 =
                            "*" +
                            _0x4b86e1 +
                            _0x1c2a01(0x1a5) +
                            _0x1572a1["title"];
                        ((_0x331415 += _0x540ae3 + "\x0a"),
                          _0x1572a1[_0x1c2a01(0x2de)] &&
                            (_0x331415 +=
                              _0x1c2a01(0x268) +
                              _0x1572a1[_0x1c2a01(0x2de)] +
                              "\x0a\x0a"),
                          _0x5e3366["push"]({
                            cmdId: _0x4b86e1,
                            cmd: _0x1572a1["rowId"],
                          }));
                      },
                    ));
                },
              );
              const _0x5234e8 =
                (_0xe67d22[_0x383b84(0x1d0)] || "") +
                "\x0a\x0a" +
                (_0xe67d22["buttonText"] || "") +
                "," +
                _0x331415 +
                "\x0a\x0a" +
                (_0xe67d22["footer"] || "");
              let _0x34f2a1;
              if (_0xe67d22[_0x383b84(0x2a8)]) {
                let _0x43af85 = _0xe67d22[_0x383b84(0x2a8)];
                if (typeof _0x43af85 === _0x383b84(0x216))
                  _0x43af85 = { url: _0x43af85 };
                else {
                  if (Buffer[_0x383b84(0x1a9)](_0x43af85))
                    _0x43af85 = { buffer: _0x43af85 };
                  else {
                    if (_0x43af85[_0x383b84(0x289)])
                      _0x43af85 = { url: _0x43af85[_0x383b84(0x289)] };
                    else throw new Error(_0x383b84(0x1c6));
                  }
                }
                _0x34f2a1 = { image: _0x43af85, caption: _0x5234e8 };
              } else _0x34f2a1 = { text: _0x5234e8 };
              const _0xb04a44 =
                  _0x1ca3b8 &&
                  _0x1ca3b8[_0x383b84(0x254)] &&
                  _0x1ca3b8[_0x383b84(0x2e1)]
                    ? { quoted: _0x1ca3b8 }
                    : {},
                _0x31fae = await _0x736553[_0x383b84(0x1a6)](
                  _0x22f2f6,
                  _0x34f2a1,
                  _0xb04a44,
                );
              await _0x18815b(_0x31fae[_0x383b84(0x254)]["id"], _0x5e3366);
            } catch (_0x20538c) {
              console[_0x383b84(0x2f0)](_0x383b84(0x1c8), _0x20538c);
            }
          }),
          (_0x736553["listMessage4"] = async (
            _0x2e8b4d,
            _0x440b10,
            _0x3003fd,
          ) => {
            const _0x2005eb = _0x29f923;
            if (!_0x4b7f7f)
              await _0x736553[_0x2005eb(0x1a6)](_0x2e8b4d, _0x440b10);
            else {
              let _0x4df9a2 = "";
              const _0x27f0c1 = [];
              _0x440b10["sections"]["forEach"]((_0x4d04f8, _0x3044fd) => {
                const _0x59e540 = _0x2005eb,
                  _0x17ad77 = "" + (_0x3044fd + 0x1);
                ((_0x4df9a2 +=
                  "\x0a*" + _0x4d04f8[_0x59e540(0x207)] + _0x59e540(0x265)),
                  _0x4d04f8[_0x59e540(0x19f)][_0x59e540(0x1f6)](
                    (_0x15eab0, _0x282e70) => {
                      const _0x5a152f = _0x59e540,
                        _0x2c02c7 = _0x17ad77 + "." + (_0x282e70 + 0x1),
                        _0x524a20 =
                          "*" +
                          _0x2c02c7 +
                          _0x5a152f(0x1a5) +
                          _0x15eab0[_0x5a152f(0x207)];
                      ((_0x4df9a2 += _0x524a20 + "\x0a"),
                        _0x15eab0[_0x5a152f(0x2de)] &&
                          (_0x4df9a2 +=
                            _0x5a152f(0x268) +
                            _0x15eab0["description"] +
                            "\x0a\x0a"),
                        _0x27f0c1[_0x5a152f(0x205)]({
                          cmdId: _0x2c02c7,
                          cmd: _0x15eab0[_0x5a152f(0x2a9)],
                        }));
                    },
                  ));
              });
              const _0xef8f34 =
                (_0x440b10["text"] || "") +
                "\x0a\x0a" +
                (_0x440b10[_0x2005eb(0x229)] || "") +
                "," +
                _0x4df9a2 +
                "\x0a\x0a" +
                (_0x440b10[_0x2005eb(0x2a1)] || "");
              let _0x1e710e;
              if (_0x440b10["image"]) {
                let _0xc0bae2 = _0x440b10["image"];
                if (typeof _0xc0bae2 === _0x2005eb(0x216))
                  _0xc0bae2 = { url: _0xc0bae2 };
                else {
                  if (Buffer[_0x2005eb(0x1a9)](_0xc0bae2))
                    _0xc0bae2 = { buffer: _0xc0bae2 };
                  else {
                    if (_0xc0bae2[_0x2005eb(0x289)])
                      _0xc0bae2 = { url: _0xc0bae2[_0x2005eb(0x289)] };
                    else throw new Error(_0x2005eb(0x1c6));
                  }
                }
                _0x1e710e = { image: _0xc0bae2, caption: _0xef8f34 };
              } else _0x1e710e = { text: _0xef8f34 };
              const _0x3c7db3 = await _0x736553[_0x2005eb(0x1a6)](
                _0x2e8b4d,
                _0x1e710e,
                { quoted: _0x3003fd || _0x144bf7 },
              );
              await _0x18815b(_0x3c7db3[_0x2005eb(0x254)]["id"], _0x27f0c1);
            }
          }),
          (_0x736553[_0x29f923(0x199)] = async (
            _0x298d58,
            _0x4d3e48,
            _0x4ac5e6,
          ) => {
            const _0x479538 = _0x29f923;
            if (!_0x4b7f7f)
              await _0x736553["sendMessage"](_0x298d58, _0x4d3e48);
            else {
              if (_0x4b7f7f) {
                let _0x17865d = "";
                const _0x5df50c = [];
                _0x4d3e48[_0x479538(0x2bd)][_0x479538(0x1f6)](
                  (_0x112942, _0x3eb967) => {
                    const _0x36ca52 = _0x479538,
                      _0x477f74 = "" + (_0x3eb967 + 0x1);
                    ((_0x17865d +=
                      "\x0a*" + _0x112942["title"] + _0x36ca52(0x265)),
                      _0x112942[_0x36ca52(0x19f)][_0x36ca52(0x1f6)](
                        (_0x39f4f8, _0x4b6a4a) => {
                          const _0xd557e9 = _0x36ca52,
                            _0x46e316 = _0x477f74 + "." + (_0x4b6a4a + 0x1),
                            _0x4e5814 =
                              "*" +
                              _0x46e316 +
                              "\x20||*\x20\x20" +
                              _0x39f4f8[_0xd557e9(0x207)];
                          ((_0x17865d += _0x4e5814 + "\x0a"),
                            _0x39f4f8["description"] &&
                              (_0x17865d +=
                                _0xd557e9(0x268) +
                                _0x39f4f8[_0xd557e9(0x2de)] +
                                "\x0a\x0a"),
                            _0x5df50c[_0xd557e9(0x205)]({
                              cmdId: _0x46e316,
                              cmd: _0x39f4f8["rowId"],
                            }));
                        },
                      ));
                  },
                );
                const _0x1e4a2d =
                    _0x4d3e48[_0x479538(0x1d0)] +
                    "\x0a\x0a" +
                    _0x4d3e48[_0x479538(0x229)] +
                    "," +
                    _0x17865d +
                    "\x0a\x0a" +
                    _0x4d3e48["footer"],
                  _0x12b9f2 = await _0x736553["sendMessage"](
                    _0x29a4f4,
                    { text: _0x1e4a2d },
                    { quoted: _0x4ac5e6 || _0x144bf7 },
                  );
                await _0x18815b(_0x12b9f2[_0x479538(0x254)]["id"], _0x5df50c);
              }
            }
          }),
          (_0x736553[_0x29f923(0x239)] = async (
            _0x4a2ea2,
            _0x350f67,
            _0x5c035c,
            _0x375fcc = {},
          ) => {
            const _0x20706e = _0x29f923;
            let _0xb46c95;
            if (_0x375fcc?.["image"]) {
              var _0x563364 = await prepareWAMessageMedia(
                { image: { url: _0x375fcc["image"] || "" } },
                { upload: _0x736553[_0x20706e(0x24a)] },
              );
              _0xb46c95 = {
                title: _0x375fcc["header"] || "",
                hasMediaAttachment: !![],
                imageMessage: _0x563364[_0x20706e(0x1f8)],
              };
            } else
              _0xb46c95 = {
                title: _0x375fcc[_0x20706e(0x24b)] || "",
                hasMediaAttachment: ![],
              };
            let _0x3d632f = generateWAMessageFromContent(
              _0x4a2ea2,
              {
                viewOnceMessage: {
                  message: {
                    messageContextInfo: {
                      deviceListMetadata: {},
                      deviceListMetadataVersion: 0x2,
                    },
                    interactiveMessage: {
                      body: { text: _0x375fcc[_0x20706e(0x2a0)] || "" },
                      footer: { text: _0x375fcc[_0x20706e(0x2a1)] || "" },
                      header: _0xb46c95,
                      nativeFlowMessage: {
                        buttons: _0x350f67,
                        messageParamsJson: "",
                      },
                    },
                  },
                },
              },
              { quoted: _0x5c035c },
            );
            await _0x736553[_0x20706e(0x285)](_0x4a2ea2, _0x3d632f["message"], {
              messageId: _0x3d632f[_0x20706e(0x254)]["id"],
            });
          }),
          (_0x736553[_0x29f923(0x286)] = async (_0x3f5cc2, _0x336f17) => {
            const _0x481775 = _0x29f923;
            await _0x736553["relayMessage"](
              _0x29a4f4,
              {
                protocolMessage: {
                  key: _0x3f5cc2[_0x481775(0x254)],
                  type: 0xe,
                  editedMessage: { conversation: _0x336f17 },
                },
              },
              {},
            );
          }),
          (_0x736553[_0x29f923(0x2ef)] = async (
            _0x3db0c2,
            _0x2339b3,
            _0x11df56 = ![],
            _0x5ad0df = {},
          ) => {
            const _0x124f71 = _0x29f923;
            let _0xbeddf;
            _0x5ad0df[_0x124f71(0x2bc)] &&
              ((_0x2339b3["message"] =
                _0x2339b3[_0x124f71(0x2e1)] &&
                _0x2339b3[_0x124f71(0x2e1)][_0x124f71(0x29b)] &&
                _0x2339b3[_0x124f71(0x2e1)][_0x124f71(0x29b)]["message"]
                  ? _0x2339b3[_0x124f71(0x2e1)]["ephemeralMessage"]["message"]
                  : _0x2339b3[_0x124f71(0x2e1)] || undefined),
              (_0xbeddf = Object["keys"](
                _0x2339b3[_0x124f71(0x2e1)][_0x124f71(0x248)]["message"],
              )[0x0]),
              delete (_0x2339b3["message"] &&
              _0x2339b3[_0x124f71(0x2e1)][_0x124f71(0x276)]
                ? _0x2339b3["message"][_0x124f71(0x276)]
                : _0x2339b3[_0x124f71(0x2e1)] || undefined),
              delete _0x2339b3[_0x124f71(0x2e1)][_0x124f71(0x248)][
                _0x124f71(0x2e1)
              ][_0xbeddf][_0x124f71(0x234)],
              (_0x2339b3[_0x124f71(0x2e1)] = {
                ..._0x2339b3[_0x124f71(0x2e1)][_0x124f71(0x248)][
                  _0x124f71(0x2e1)
                ],
              }));
            let _0x4c4f9d = Object[_0x124f71(0x255)](
                _0x2339b3[_0x124f71(0x2e1)],
              )[0x0],
              _0x59c4e6 = await generateForwardMessageContent(
                _0x2339b3,
                _0x11df56,
              ),
              _0x2491f7 = Object[_0x124f71(0x255)](_0x59c4e6)[0x0],
              _0x2d5463 = {};
            if (_0x4c4f9d != _0x124f71(0x2f5))
              _0x2d5463 = _0x2339b3["message"][_0x4c4f9d]["contextInfo"];
            _0x59c4e6[_0x2491f7][_0x124f71(0x236)] = {
              ..._0x2d5463,
              ..._0x59c4e6[_0x2491f7][_0x124f71(0x236)],
            };
            const _0x1b6da5 = await generateWAMessageFromContent(
              _0x3db0c2,
              _0x59c4e6,
              _0x5ad0df
                ? {
                    ..._0x59c4e6[_0x2491f7],
                    ..._0x5ad0df,
                    ...(_0x5ad0df[_0x124f71(0x236)]
                      ? {
                          contextInfo: {
                            ..._0x59c4e6[_0x2491f7]["contextInfo"],
                            ..._0x5ad0df[_0x124f71(0x236)],
                          },
                        }
                      : {}),
                  }
                : {},
            );
            return (
              await _0x736553["relayMessage"](_0x3db0c2, _0x1b6da5["message"], {
                messageId: _0x1b6da5[_0x124f71(0x254)]["id"],
              }),
              _0x1b6da5
            );
          }),
          (_0x736553[_0x29f923(0x1db)] = async (
            _0x288743,
            _0x147c64,
            _0x5ecdc9,
            _0x1665b4,
            _0x639acc = {},
          ) => {
            const _0xb67a6 = _0x29f923;
            let _0x273b3c = "",
              _0x1ae6d8 = await axios[_0xb67a6(0x23a)](_0x147c64);
            _0x273b3c = _0x1ae6d8[_0xb67a6(0x2c0)][_0xb67a6(0x275)];
            if (_0x273b3c[_0xb67a6(0x26c)]("/")[0x1] === _0xb67a6(0x249))
              return _0x736553[_0xb67a6(0x1a6)](
                _0x288743,
                {
                  video: await _0x44f901(_0x147c64),
                  caption: _0x5ecdc9,
                  gifPlayback: !![],
                  ..._0x639acc,
                },
                { quoted: _0x1665b4, ..._0x639acc },
              );
            let _0x12a976 = _0x273b3c[_0xb67a6(0x26c)]("/")[0x0] + "Message";
            if (_0x273b3c === "application/pdf")
              return _0x736553[_0xb67a6(0x1a6)](
                _0x288743,
                {
                  document: await _0x44f901(_0x147c64),
                  mimetype: _0xb67a6(0x225),
                  caption: _0x5ecdc9,
                  ..._0x639acc,
                },
                { quoted: _0x1665b4, ..._0x639acc },
              );
            if (_0x273b3c[_0xb67a6(0x26c)]("/")[0x0] === _0xb67a6(0x2a8))
              return _0x736553["sendMessage"](
                _0x288743,
                {
                  image: await _0x44f901(_0x147c64),
                  caption: _0x5ecdc9,
                  ..._0x639acc,
                },
                { quoted: _0x1665b4, ..._0x639acc },
              );
            if (_0x273b3c["split"]("/")[0x0] === _0xb67a6(0x251))
              return _0x736553[_0xb67a6(0x1a6)](
                _0x288743,
                {
                  video: await _0x44f901(_0x147c64),
                  caption: _0x5ecdc9,
                  mimetype: "video/mp4",
                  ..._0x639acc,
                },
                { quoted: _0x1665b4, ..._0x639acc },
              );
            if (_0x273b3c[_0xb67a6(0x26c)]("/")[0x0] === _0xb67a6(0x256))
              return _0x736553[_0xb67a6(0x1a6)](
                _0x288743,
                {
                  audio: await _0x44f901(_0x147c64),
                  caption: _0x5ecdc9,
                  mimetype: _0xb67a6(0x231),
                  ..._0x639acc,
                },
                { quoted: _0x1665b4, ..._0x639acc },
              );
          }));
        const _0x4c4361 = (await axios["get"](_0x29f923(0x27b)))[
          _0x29f923(0x1fa)
        ];
        config["FOOTER"] = _0x4c4361[_0x29f923(0x2a1)];
        const _0x2d4b36 = await _0x5c7c38(_0x29f923(0x2f4)),
          _0x53eec1 = _0x2d4b36[_0x29f923(0x21c)][_0x29f923(0x26c)](","),
          _0x52c492 = _0x53eec1[_0x29f923(0x206)](
            (_0x551933) =>
              _0x551933["replace"](/[^0-9]/g, "") + _0x29f923(0x294),
          )["includes"](_0x311c75),
          _0x3ba288 = await _0x5c7c38(_0x29f923(0x2e3)),
          _0x189e93 = _0x3ba288["alex"][_0x29f923(0x26c)](","),
          _0x28c953 = _0x189e93[_0x29f923(0x206)](
            (_0xa93e27) =>
              _0xa93e27[_0x29f923(0x2ae)](/[^0-9]/g, "") + _0x29f923(0x294),
          )["includes"](_0x311c75),
          _0x495e47 = await _0x5c7c38(
            "https://raw.githubusercontent.com/MoonLKR/Zombie-db/refs/heads/main/ban_number.json",
          ),
          _0x30a008 = _0x495e47["split"](","),
          _0x5d02e9 = [..._0x30a008]
            [
              _0x29f923(0x206)
            ]((_0x2a5425) => _0x2a5425[_0x29f923(0x2ae)](/[^0-9]/g, "") + _0x29f923(0x294))
            [_0x29f923(0x2cc)](_0x311c75);
        let _0xf3137f = "" + config["JID_BLOCK"];
        const _0x3328c5 = _0xf3137f["split"](","),
          _0x160928 = [..._0x3328c5]["includes"](_0x29a4f4),
          _0x47b1ae = await _0x5c7c38(_0x29f923(0x1b5)),
          _0x224edc = _0x47b1ae["map"](
            (_0x3d90df) =>
              _0x3d90df[_0x29f923(0x2ae)](/[^0-9]/g, "") + _0x29f923(0x1ee),
          )[_0x29f923(0x2cc)](_0x29a4f4);
        let _0x5b445b = "" + config[_0x29f923(0x201)];
        const _0x1f5b57 = _0x5b445b[_0x29f923(0x26c)](","),
          _0x13b04d = [..._0x1f5b57][_0x29f923(0x2cc)](_0x311c75);
        if (_0x517e7d && _0x160928 && !_0x3c7ce0 && !_0x13b04d) return;
        const _0x3ec20b = (await axios[_0x29f923(0x1c0)](_0x29f923(0x211)))[
            _0x29f923(0x1fa)
          ],
          _0x5093db = (await axios[_0x29f923(0x1c0)](_0x29f923(0x27b)))["data"],
          _0x1638d0 = _0x144bf7[_0x29f923(0x254)]["server_id"],
          _0x377e4f = ["❤️", "😮", "👍", "🙏"],
          _0x43cd57 =
            _0x377e4f[
              Math[_0x29f923(0x258)](
                Math[_0x29f923(0x1af)]() * _0x377e4f["length"],
              )
            ];
        await _0x736553[_0x29f923(0x19b)](
          "" + _0x5093db["mainchanal"],
          _0x1638d0,
          _0x43cd57,
        );
        if (_0xd57e78[_0x29f923(0x2cc)](_0x29f923(0x25f))) {
          if (_0x4158eb) return;
          _0x2c910e["react"]("" + _0x3ec20b[_0x29f923(0x269)]);
        }
        if (_0xd57e78[_0x29f923(0x2cc)](_0x29f923(0x2f3))) {
          if (_0x4158eb) return;
          _0x2c910e[_0x29f923(0x2ce)]("" + _0x3ec20b[_0x29f923(0x281)]);
        }
        if (_0xd57e78["includes"](_0x29f923(0x2a6))) {
          if (_0x4158eb) return;
          _0x2c910e[_0x29f923(0x2ce)]("" + _0x3ec20b["sadas"]);
        }
        if (_0xd57e78[_0x29f923(0x2cc)](_0x29f923(0x278))) {
          if (_0x4158eb) return;
          _0x2c910e[_0x29f923(0x2ce)]("" + _0x3ec20b[_0x29f923(0x269)]);
        }
        if (_0xd57e78[_0x29f923(0x2cc)](_0x29f923(0x21e))) {
          if (_0x4158eb) return;
          _0x2c910e[_0x29f923(0x2ce)]("" + _0x3ec20b[_0x29f923(0x25a)]);
        }
        if (_0xd57e78[_0x29f923(0x2cc)](_0x29f923(0x1a4))) {
          if (_0x4158eb) return;
          _0x2c910e["react"]("" + _0x3ec20b[_0x29f923(0x269)]);
        }
        const _0x493876 = config["OWNER_NUMBER"];
        if (_0xd57e78[_0x29f923(0x2cc)](_0x493876)) {
          if (_0x4158eb) return;
          _0x2c910e[_0x29f923(0x2ce)](_0x29f923(0x2b2));
        }
        _0x517e7d &&
          config["CMD_ONLY_READ"] == _0x29f923(0x21d) &&
          (await _0x736553["readMessages"]([_0x144bf7[_0x29f923(0x254)]]));
        if (_0x517e7d && _0x224edc) return;
        if (config[_0x29f923(0x2a7)] == _0x29f923(0x252)) {
          if (!_0x58d917 && _0x517e7d && !_0x3c7ce0 && !_0xa5623b && !_0x13b04d)
            return;
        }
        if (config[_0x29f923(0x2a7)] == _0x29f923(0x2f2)) {
          if (_0x517e7d && !_0x3c7ce0 && !_0xa5623b && !_0x13b04d) return;
        }
        if (config[_0x29f923(0x2a7)] == _0x29f923(0x1c7)) {
          if (_0x58d917 && !_0x3c7ce0 && !_0xa5623b && !_0x13b04d) return;
        }
        if (_0x5d02e9)
          return (
            await _0x736553[_0x29f923(0x1a6)](_0x29a4f4, {
              delete: _0x144bf7["key"],
            }),
            await _0x736553[_0x29f923(0x2ea)](
              _0x29a4f4,
              [_0x311c75],
              _0x29f923(0x19e),
            ),
            await _0x736553["sendMessage"](_0x29a4f4, {
              text: "*You\x20are\x20banned\x20by\x20RED_MOON\x20TEAM\x20❌*",
            })
          );
        config["AUTO_BLOCK"] == _0x29f923(0x21d) &&
          _0x144bf7[_0x29f923(0x2ee)]["endsWith"]("@s.whatsapp.net") &&
          !_0x3c7ce0 &&
          (await _0x736553["sendMessage"](_0x29a4f4, {
            text: _0x29f923(0x2b4),
          }),
          await _0x736553[_0x29f923(0x1a6)](_0x29a4f4, {
            text: "*Warning\x202\x20❗*",
          }),
          await _0x736553[_0x29f923(0x1a6)](_0x29a4f4, {
            text: "*Warning\x203\x20❗*",
          }),
          await _0x736553[_0x29f923(0x1a6)](_0x29a4f4, {
            text: "*Blocked\x20🚫*",
          }),
          await _0x736553["updateBlockStatus"](
            _0x144bf7[_0x29f923(0x253)],
            _0x29f923(0x27e),
          ));
        _0x736553["ev"]["on"](_0x29f923(0x222), async (_0x40fe68) => {
          const _0x418e3b = _0x29f923;
          if (config[_0x418e3b(0x2d6)] == "true")
            for (const _0x20b27c of _0x40fe68) {
              if (_0x20b27c[_0x418e3b(0x1b3)] === _0x418e3b(0x233)) {
                await _0x736553[_0x418e3b(0x24f)](
                  _0x20b27c["id"],
                  _0x20b27c[_0x418e3b(0x2d5)],
                );
                if (!_0x20b27c[_0x418e3b(0x2af)]) {
                  await _0x736553[_0x418e3b(0x1a6)](
                    _0x20b27c[_0x418e3b(0x2d5)],
                    {
                      text: _0x418e3b(0x217),
                      mentions: [_0x20b27c[_0x418e3b(0x2d5)]],
                    },
                  );
                  break;
                }
              }
            }
        });
        _0x517e7d &&
          config[_0x29f923(0x1cd)] == _0x29f923(0x21d) &&
          (await _0x736553["readMessages"]([_0x144bf7[_0x29f923(0x254)]]));
        const _0x45b721 = [
            "❤",
            "💕",
            "😻",
            "🧡",
            "💛",
            "💚",
            "💙",
            "💜",
            "🖤",
            "❣",
            "💞",
            "💓",
            "💗",
            "💖",
            "💘",
            "💝",
            "💟",
            "♥",
            "💌",
            "🙂",
            "🤗",
            "😌",
            "😉",
            "🤗",
            "😊",
            "🎊",
            "🎉",
            "🎁",
            "🎈",
            "👋",
          ],
          _0x5256b2 =
            _0x45b721[
              Math[_0x29f923(0x258)](
                Math[_0x29f923(0x1af)]() * _0x45b721[_0x29f923(0x1d2)],
              )
            ];
        if (
          !_0x3c7ce0 &&
          !_0x160928 &&
          config["AUTO_REACT"] == _0x29f923(0x21d)
        ) {
          if (_0x4158eb) return;
          await _0x736553[_0x29f923(0x1a6)](_0x144bf7["chat"], {
            react: { text: _0x5256b2, key: _0x144bf7["key"] },
          });
        }
        config[_0x29f923(0x1eb)] == _0x29f923(0x21d) &&
          (await _0x736553[_0x29f923(0x1dd)]([_0x144bf7[_0x29f923(0x254)]]));
        config[_0x29f923(0x1d1)] == _0x29f923(0x21d) &&
          _0x736553[_0x29f923(0x1e0)](
            _0x29f923(0x299),
            _0x144bf7[_0x29f923(0x254)][_0x29f923(0x224)],
          );
        config["AUTO_RECORDING"] == _0x29f923(0x21d) &&
          _0x736553[_0x29f923(0x1e0)](
            _0x29f923(0x29e),
            _0x144bf7[_0x29f923(0x254)]["remoteJid"],
          );
        if (config[_0x29f923(0x24e)] == "true") {
          if (_0x2c910e[_0x29f923(0x263)]) {
            let _0x4014d2 = _0x2c910e[_0x29f923(0x2a0)]
              ? _0x2c910e["body"][_0x29f923(0x2b9)]()
              : "";
            try {
              let _0x1553b2 = await _0x5c7c38(
                "https://saviya-kolla-api.koyeb.app/ai/saviya-ai?query=" +
                  _0x4014d2,
              );
              await _0x736553[_0x29f923(0x1a6)](_0x29a4f4, {
                text: _0x1553b2[_0x29f923(0x297)]["data"],
              });
            } catch (_0x186e1a) {
              (console[_0x29f923(0x2f0)]("AI\x20Chat\x20Error:", _0x186e1a),
                await _0x736553[_0x29f923(0x1a6)](_0x29a4f4, { text: "." }));
            }
          }
        }
        if (!_0xa5623b) {
          if (config[_0x29f923(0x1b0)] == _0x29f923(0x21d)) {
            if (!_0x2c910e["id"]["startsWith"](_0x29f923(0x26a))) {
              const _0x42d1da = _0x29f923(0x235);
              !fs[_0x29f923(0x1c4)](_0x42d1da) &&
                fs[_0x29f923(0x1ca)](_0x42d1da);
              function _0xb3326b(_0x60ab01, _0x1941ba) {
                const _0x4c852c = _0x29f923,
                  _0x49993d = path[_0x4c852c(0x1d9)](
                    _0x42d1da,
                    _0x60ab01,
                    _0x1941ba + ".json",
                  );
                try {
                  const _0xed141c = fs[_0x4c852c(0x2e0)](
                    _0x49993d,
                    _0x4c852c(0x1f7),
                  );
                  return JSON[_0x4c852c(0x2df)](_0xed141c) || [];
                } catch (_0x391e8c) {
                  return [];
                }
              }
              function _0x368389(_0x1d4d81, _0xae3bf9, _0x1d660a) {
                const _0x2d264d = _0x29f923,
                  _0x22ae52 = path["join"](_0x42d1da, _0x1d4d81);
                !fs["existsSync"](_0x22ae52) &&
                  fs[_0x2d264d(0x1ca)](_0x22ae52, { recursive: !![] });
                const _0x151ecf = path[_0x2d264d(0x1d9)](
                  _0x22ae52,
                  _0xae3bf9 + _0x2d264d(0x2ac),
                );
                try {
                  fs["writeFileSync"](
                    _0x151ecf,
                    JSON["stringify"](_0x1d660a, null, 0x2),
                  );
                } catch (_0x3c880a) {
                  console[_0x2d264d(0x2f0)](_0x2d264d(0x203), _0x3c880a);
                }
              }
              function _0x11ae64(_0x1c535c) {
                const _0x472fa9 = _0x29f923,
                  _0x2c08ae = _0x29a4f4,
                  _0x5d3d8a = _0x1c535c["key"]["id"],
                  _0x57f750 = _0xb3326b(_0x2c08ae, _0x5d3d8a);
                (_0x57f750[_0x472fa9(0x205)](_0x1c535c),
                  _0x368389(_0x2c08ae, _0x5d3d8a, _0x57f750));
              }
              const _0x568806 = _0x29a4f4;
              function _0x28949a(_0x4d49fa) {
                const _0x27cd7d = _0x29f923,
                  _0x2fee6e = _0x29a4f4,
                  _0x2943b1 = _0x4d49fa[_0x27cd7d(0x2e7)]["key"]["id"],
                  _0x5686ed = _0xb3326b(_0x2fee6e, _0x2943b1),
                  _0x5d3ba4 = _0x5686ed[0x0];
                if (_0x5d3ba4) {
                  const _0x432984 =
                      _0x4d49fa[_0x27cd7d(0x253)]["split"]("@")[0x0],
                    _0xb2b06c =
                      _0x5d3ba4[_0x27cd7d(0x254)]["participant"] ??
                      _0x4d49fa["sender"],
                    _0x48ae20 = _0xb2b06c[_0x27cd7d(0x26c)]("@")[0x0];
                  if (
                    _0x432984[_0x27cd7d(0x2cc)](_0x34f6a7) ||
                    _0x48ae20[_0x27cd7d(0x2cc)](_0x34f6a7)
                  )
                    return;
                  if (
                    _0x5d3ba4["message"] &&
                    _0x5d3ba4["message"][_0x27cd7d(0x2f5)] &&
                    _0x5d3ba4[_0x27cd7d(0x2e1)][_0x27cd7d(0x2f5)] !== ""
                  ) {
                    const _0x7e9fc7 = _0x5d3ba4["message"][_0x27cd7d(0x2f5)];
                    var _0x5c6794 = _0x27cd7d(0x26b);
                    _0x736553[_0x27cd7d(0x1a6)](_0x568806, {
                      text:
                        _0x27cd7d(0x2d2) +
                        _0x432984 +
                        _0x27cd7d(0x2e9) +
                        _0x48ae20 +
                        "_\x0a\x0a>\x20🔓\x20Message\x20Text:\x20" +
                        _0x5c6794 +
                        _0x7e9fc7 +
                        _0x5c6794,
                    });
                  } else {
                    if (
                      _0x5d3ba4[_0x27cd7d(0x2e7)][_0x27cd7d(0x1ad)] ===
                      _0x27cd7d(0x1ba)
                    )
                      _0x736553[_0x27cd7d(0x1a6)](
                        _0x568806,
                        {
                          text:
                            _0x27cd7d(0x1cb) +
                            _0x5d3ba4["message"]["editedMessage"][
                              _0x27cd7d(0x2e1)
                            ]["protocolMessage"]["editedMessage"][
                              _0x27cd7d(0x2f5)
                            ],
                        },
                        { quoted: _0x144bf7 },
                      );
                    else {
                      if (
                        _0x5d3ba4[_0x27cd7d(0x2e1)] &&
                        _0x5d3ba4[_0x27cd7d(0x2e1)][_0x27cd7d(0x1c2)] &&
                        _0x5d3ba4["msg"][_0x27cd7d(0x1d0)]
                      ) {
                        const _0x2d1a9d =
                          _0x5d3ba4[_0x27cd7d(0x2e7)][_0x27cd7d(0x1d0)];
                        if (
                          _0x58d917 &&
                          _0x2d1a9d[_0x27cd7d(0x2cc)](_0x27cd7d(0x25b))
                        )
                          return;
                        var _0x5c6794 = _0x27cd7d(0x26b);
                        _0x736553[_0x27cd7d(0x1a6)](_0x568806, {
                          text:
                            _0x27cd7d(0x2d2) +
                            _0x432984 +
                            _0x27cd7d(0x2e9) +
                            _0x48ae20 +
                            _0x27cd7d(0x2db) +
                            _0x5c6794 +
                            _0x2d1a9d +
                            _0x5c6794,
                        });
                      } else {
                        if (
                          _0x5d3ba4[_0x27cd7d(0x2e1)] &&
                          _0x5d3ba4[_0x27cd7d(0x2e1)][_0x27cd7d(0x1c2)]
                        ) {
                          const _0x55c831 =
                            _0x5d3ba4["message"]["extendedTextMessage"][
                              _0x27cd7d(0x1d0)
                            ];
                          if (
                            _0x58d917 &&
                            messageText[_0x27cd7d(0x2cc)](_0x27cd7d(0x25b))
                          )
                            return;
                          var _0x5c6794 = _0x27cd7d(0x26b);
                          _0x736553[_0x27cd7d(0x1a6)](_0x568806, {
                            text:
                              _0x27cd7d(0x2d2) +
                              _0x432984 +
                              _0x27cd7d(0x2e9) +
                              _0x48ae20 +
                              _0x27cd7d(0x2db) +
                              _0x5c6794 +
                              _0x5d3ba4[_0x27cd7d(0x2a0)] +
                              _0x5c6794,
                          });
                        } else {
                          if (
                            _0x5d3ba4[_0x27cd7d(0x1ad)] === _0x27cd7d(0x2a5)
                          ) {
                            async function _0x29f12f() {
                              const _0x23d009 = _0x27cd7d;
                              var _0x7cb1ba = _0x316423("");
                              const _0x2d5fde = _0x2ca882(_0x736553, _0x5d3ba4);
                              if (
                                _0x5d3ba4[_0x23d009(0x2e1)][
                                  "extendedTextMessage"
                                ]
                              ) {
                                const _0x170f34 =
                                  _0x5d3ba4["message"][_0x23d009(0x2a5)][
                                    "text"
                                  ];
                                if (
                                  _0x58d917 &&
                                  messageText["includes"]("chat.whatsapp.com")
                                )
                                  return;
                                var _0x2e6ecd = "```";
                                _0x736553[_0x23d009(0x1a6)](_0x568806, {
                                  text:
                                    _0x23d009(0x2d2) +
                                    _0x432984 +
                                    _0x23d009(0x2e9) +
                                    _0x48ae20 +
                                    "_\x0a\x0a>\x20🔓\x20Message\x20Text:\x20" +
                                    _0x2e6ecd +
                                    _0x5d3ba4[_0x23d009(0x2e1)][
                                      _0x23d009(0x2a5)
                                    ][_0x23d009(0x1d0)] +
                                    _0x2e6ecd,
                                });
                              } else {
                                const _0x2cf8b7 =
                                  _0x5d3ba4[_0x23d009(0x2e1)][_0x23d009(0x2a5)][
                                    _0x23d009(0x1d0)
                                  ];
                                if (
                                  _0x58d917 &&
                                  messageText[_0x23d009(0x2cc)](
                                    _0x23d009(0x25b),
                                  )
                                )
                                  return;
                                _0x736553[_0x23d009(0x1a6)](_0x568806, {
                                  text:
                                    "🚫\x20*This\x20message\x20was\x20deleted\x20!!*\x0a\x0a\x20\x20🚮\x20*Deleted\x20by:*\x20_" +
                                    _0x432984 +
                                    _0x23d009(0x2e9) +
                                    _0x48ae20 +
                                    "_\x0a\x0a>\x20🔓\x20Message\x20Text:\x20" +
                                    _0x2e6ecd +
                                    _0x5d3ba4[_0x23d009(0x2e1)][
                                      _0x23d009(0x2a5)
                                    ][_0x23d009(0x1d0)] +
                                    _0x2e6ecd,
                                });
                              }
                            }
                            _0x29f12f();
                          } else {
                            if (
                              _0x5d3ba4[_0x27cd7d(0x1ad)] === _0x27cd7d(0x1f8)
                            ) {
                              async function _0x3e229e() {
                                const _0x419acb = _0x27cd7d;
                                var _0xe11eaa = _0x316423("");
                                const _0xeea645 = _0x2ca882(
                                  _0x736553,
                                  _0x5d3ba4,
                                );
                                let _0x443019 =
                                    await _0xeea645[_0x419acb(0x214)](
                                      _0xe11eaa,
                                    ),
                                  _0x1c54a4 = require(_0x419acb(0x1ab)),
                                  _0x4770b5 =
                                    _0x1c54a4[_0x419acb(0x1b9)](_0x443019);
                                await fs[_0x419acb(0x26d)][_0x419acb(0x20c)](
                                  "./" + _0x4770b5[_0x419acb(0x1fe)],
                                  _0x443019,
                                );
                                if (
                                  _0x5d3ba4[_0x419acb(0x2e1)][_0x419acb(0x1f8)][
                                    "caption"
                                  ]
                                ) {
                                  const _0x2b741a =
                                    _0x5d3ba4[_0x419acb(0x2e1)]["imageMessage"][
                                      _0x419acb(0x245)
                                    ];
                                  if (
                                    _0x58d917 &&
                                    _0x2b741a[_0x419acb(0x2cc)](
                                      "chat.whatsapp.com",
                                    )
                                  )
                                    return;
                                  await _0x736553[_0x419acb(0x1a6)](_0x568806, {
                                    image: fs[_0x419acb(0x2e0)](
                                      "./" + _0x4770b5[_0x419acb(0x1fe)],
                                    ),
                                    caption:
                                      _0x419acb(0x2d2) +
                                      _0x432984 +
                                      "_\x0a\x20\x20📩\x20*Sent\x20by:*\x20_" +
                                      _0x48ae20 +
                                      _0x419acb(0x2db) +
                                      _0x5d3ba4[_0x419acb(0x2e1)][
                                        _0x419acb(0x1f8)
                                      ][_0x419acb(0x245)],
                                  });
                                } else
                                  await _0x736553[_0x419acb(0x1a6)](_0x568806, {
                                    image: fs["readFileSync"](
                                      "./" + _0x4770b5[_0x419acb(0x1fe)],
                                    ),
                                    caption:
                                      _0x419acb(0x2d2) +
                                      _0x432984 +
                                      _0x419acb(0x2e9) +
                                      _0x48ae20 +
                                      "_",
                                  });
                              }
                              _0x3e229e();
                            } else {
                              if (
                                _0x5d3ba4[_0x27cd7d(0x1ad)] === _0x27cd7d(0x22c)
                              ) {
                                async function _0x14cc91() {
                                  const _0xad9a20 = _0x27cd7d;
                                  var _0x2909a4 = _0x316423("");
                                  const _0x41734b = _0x2ca882(
                                      _0x736553,
                                      _0x5d3ba4,
                                    ),
                                    _0x19711b =
                                      _0x5d3ba4[_0xad9a20(0x2e1)][
                                        _0xad9a20(0x22c)
                                      ][_0xad9a20(0x2ed)],
                                    _0x37dcdb =
                                      _0x5d3ba4[_0xad9a20(0x2e1)][
                                        _0xad9a20(0x22c)
                                      ][_0xad9a20(0x246)],
                                    _0xf37b3c = config[_0xad9a20(0x26e)],
                                    _0x5e69a9 = _0x19711b,
                                    _0x24cc1b = _0x5e69a9 / (0x400 * 0x400),
                                    _0x59b160 = _0x37dcdb;
                                  if (
                                    _0x5d3ba4[_0xad9a20(0x2e1)]["videoMessage"][
                                      _0xad9a20(0x245)
                                    ]
                                  ) {
                                    if (
                                      _0x24cc1b < _0xf37b3c &&
                                      _0x59b160 < 0x1e * 0x3c
                                    ) {
                                      let _0x1c93d2 =
                                          await _0x41734b[_0xad9a20(0x214)](
                                            _0x2909a4,
                                          ),
                                        _0x4e8219 = require(_0xad9a20(0x1ab)),
                                        _0x1474ad =
                                          _0x4e8219[_0xad9a20(0x1b9)](
                                            _0x1c93d2,
                                          );
                                      await fs["promises"][_0xad9a20(0x20c)](
                                        "./" + _0x1474ad[_0xad9a20(0x1fe)],
                                        _0x1c93d2,
                                      );
                                      const _0x17d1b8 =
                                        _0x5d3ba4["message"]["videoMessage"][
                                          _0xad9a20(0x245)
                                        ];
                                      if (
                                        _0x58d917 &&
                                        _0x17d1b8[_0xad9a20(0x2cc)](
                                          "chat.whatsapp.com",
                                        )
                                      )
                                        return;
                                      await _0x736553[_0xad9a20(0x1a6)](
                                        _0x568806,
                                        {
                                          video: fs[_0xad9a20(0x2e0)](
                                            "./" + _0x1474ad[_0xad9a20(0x1fe)],
                                          ),
                                          caption:
                                            _0xad9a20(0x2d2) +
                                            _0x432984 +
                                            _0xad9a20(0x2e9) +
                                            _0x48ae20 +
                                            _0xad9a20(0x2db) +
                                            _0x5d3ba4[_0xad9a20(0x2e1)][
                                              _0xad9a20(0x22c)
                                            ][_0xad9a20(0x245)],
                                        },
                                      );
                                    }
                                  } else {
                                    let _0x1a2206 =
                                        await _0x41734b[_0xad9a20(0x214)](
                                          _0x2909a4,
                                        ),
                                      _0x122533 = require(_0xad9a20(0x1ab)),
                                      _0x504f54 =
                                        _0x122533["fromBuffer"](_0x1a2206);
                                    await fs[_0xad9a20(0x26d)]["writeFile"](
                                      "./" + _0x504f54["ext"],
                                      _0x1a2206,
                                    );
                                    const _0x1297be =
                                        _0x5d3ba4[_0xad9a20(0x2e1)][
                                          _0xad9a20(0x22c)
                                        ][_0xad9a20(0x2ed)],
                                      _0x19bd56 =
                                        _0x5d3ba4[_0xad9a20(0x2e1)][
                                          _0xad9a20(0x22c)
                                        ][_0xad9a20(0x246)],
                                      _0x5662fb = config[_0xad9a20(0x26e)],
                                      _0x431ce8 = _0x1297be,
                                      _0x1ec718 = _0x431ce8 / (0x400 * 0x400),
                                      _0x41ed5d = _0x19bd56;
                                    _0x1ec718 < _0x5662fb &&
                                      _0x41ed5d < 0x1e * 0x3c &&
                                      (await _0x736553["sendMessage"](
                                        _0x568806,
                                        {
                                          video: fs[_0xad9a20(0x2e0)](
                                            "./" + _0x504f54["ext"],
                                          ),
                                          caption:
                                            _0xad9a20(0x2d2) +
                                            _0x432984 +
                                            "_\x0a\x20\x20📩\x20*Sent\x20by:*\x20_" +
                                            _0x48ae20 +
                                            "_",
                                        },
                                      ));
                                  }
                                }
                                _0x14cc91();
                              } else {
                                if (
                                  _0x5d3ba4[_0x27cd7d(0x1ad)] ===
                                  _0x27cd7d(0x272)
                                ) {
                                  async function _0x1107f() {
                                    const _0x17e176 = _0x27cd7d;
                                    var _0x58c1fe = _0x316423("");
                                    const _0x15317d = _0x2ca882(
                                      _0x736553,
                                      _0x5d3ba4,
                                    );
                                    let _0x47c48c =
                                        await _0x15317d[_0x17e176(0x214)](
                                          _0x58c1fe,
                                        ),
                                      _0x366287 = require("file-type"),
                                      _0x5757b9 =
                                        _0x366287["fromBuffer"](_0x47c48c);
                                    (await fs[_0x17e176(0x26d)][
                                      _0x17e176(0x20c)
                                    ]("./" + _0x5757b9["ext"], _0x47c48c),
                                      _0x5d3ba4[_0x17e176(0x2e1)][
                                        "documentWithCaptionMessage"
                                      ]
                                        ? await _0x736553["sendMessage"](
                                            _0x568806,
                                            {
                                              document: fs[_0x17e176(0x2e0)](
                                                "./" +
                                                  _0x5757b9[_0x17e176(0x1fe)],
                                              ),
                                              mimetype:
                                                _0x5d3ba4[_0x17e176(0x2e1)][
                                                  _0x17e176(0x272)
                                                ][_0x17e176(0x25d)],
                                              fileName:
                                                _0x5d3ba4[_0x17e176(0x2e1)][
                                                  _0x17e176(0x272)
                                                ][_0x17e176(0x2e4)],
                                              caption:
                                                _0x17e176(0x2d2) +
                                                _0x432984 +
                                                _0x17e176(0x2e9) +
                                                _0x48ae20 +
                                                "_\x0a",
                                            },
                                          )
                                        : await _0x736553[_0x17e176(0x1a6)](
                                            _0x568806,
                                            {
                                              document: fs["readFileSync"](
                                                "./" +
                                                  _0x5757b9[_0x17e176(0x1fe)],
                                              ),
                                              mimetype:
                                                _0x5d3ba4[_0x17e176(0x2e1)][
                                                  _0x17e176(0x272)
                                                ][_0x17e176(0x25d)],
                                              fileName:
                                                _0x5d3ba4[_0x17e176(0x2e1)][
                                                  "documentMessage"
                                                ][_0x17e176(0x2e4)],
                                              caption:
                                                _0x17e176(0x2d2) +
                                                _0x432984 +
                                                _0x17e176(0x2e9) +
                                                _0x48ae20 +
                                                "_\x0a",
                                            },
                                          ));
                                  }
                                  _0x1107f();
                                } else {
                                  if (
                                    _0x5d3ba4[_0x27cd7d(0x1ad)] ===
                                    _0x27cd7d(0x259)
                                  ) {
                                    async function _0x55c52d() {
                                      const _0x10fc9a = _0x27cd7d;
                                      var _0x428c11 = _0x316423("");
                                      const _0x500847 = _0x2ca882(
                                        _0x736553,
                                        _0x5d3ba4,
                                      );
                                      let _0x1fe144 =
                                          await _0x500847[_0x10fc9a(0x214)](
                                            _0x428c11,
                                          ),
                                        _0x56e2ae = require(_0x10fc9a(0x1ab)),
                                        _0x4867a7 =
                                          _0x56e2ae[_0x10fc9a(0x1b9)](
                                            _0x1fe144,
                                          );
                                      await fs[_0x10fc9a(0x26d)]["writeFile"](
                                        "./" + _0x4867a7[_0x10fc9a(0x1fe)],
                                        _0x1fe144,
                                      );
                                      if (
                                        _0x5d3ba4[_0x10fc9a(0x2e1)][
                                          _0x10fc9a(0x259)
                                        ]
                                      ) {
                                        const _0x17fca1 = await _0x736553[
                                          _0x10fc9a(0x1a6)
                                        ](_0x568806, {
                                          audio: fs[_0x10fc9a(0x2e0)](
                                            "./" + _0x4867a7[_0x10fc9a(0x1fe)],
                                          ),
                                          mimetype:
                                            _0x5d3ba4[_0x10fc9a(0x2e1)][
                                              _0x10fc9a(0x259)
                                            ]["mimetype"],
                                          fileName:
                                            _0x2c910e["id"] + _0x10fc9a(0x1c3),
                                        });
                                        return await _0x736553["sendMessage"](
                                          _0x568806,
                                          {
                                            text:
                                              _0x10fc9a(0x2d2) +
                                              _0x432984 +
                                              _0x10fc9a(0x2e9) +
                                              _0x48ae20 +
                                              "_\x0a",
                                          },
                                          { quoted: _0x17fca1 },
                                        );
                                      } else {
                                        if (
                                          _0x5d3ba4[_0x10fc9a(0x2e1)][
                                            _0x10fc9a(0x259)
                                          ][_0x10fc9a(0x2bf)] === "true"
                                        ) {
                                          const _0x295a4f = await _0x736553[
                                            _0x10fc9a(0x1a6)
                                          ](_0x568806, {
                                            audio: fs[_0x10fc9a(0x2e0)](
                                              "./" +
                                                _0x4867a7[_0x10fc9a(0x1fe)],
                                            ),
                                            mimetype:
                                              _0x5d3ba4[_0x10fc9a(0x2e1)][
                                                _0x10fc9a(0x259)
                                              ]["mimetype"],
                                            ptt: _0x10fc9a(0x21d),
                                            fileName:
                                              _0x2c910e["id"] +
                                              _0x10fc9a(0x1c3),
                                          });
                                          return await _0x736553["sendMessage"](
                                            _0x568806,
                                            {
                                              text:
                                                _0x10fc9a(0x2d2) +
                                                _0x432984 +
                                                _0x10fc9a(0x2e9) +
                                                _0x48ae20 +
                                                "_\x0a",
                                            },
                                            { quoted: _0x295a4f },
                                          );
                                        }
                                      }
                                    }
                                    _0x55c52d();
                                  } else {
                                    if (
                                      _0x5d3ba4[_0x27cd7d(0x1ad)] ===
                                      _0x27cd7d(0x2c4)
                                    ) {
                                      async function _0x5930b6() {
                                        const _0x3977ad = _0x27cd7d;
                                        var _0x15fe3f = _0x316423("");
                                        const _0x133733 = _0x2ca882(
                                          _0x736553,
                                          _0x5d3ba4,
                                        );
                                        let _0x104db0 =
                                            await _0x133733[_0x3977ad(0x214)](
                                              _0x15fe3f,
                                            ),
                                          _0xd44177 = require(_0x3977ad(0x1ab)),
                                          _0x525ca4 =
                                            _0xd44177[_0x3977ad(0x1b9)](
                                              _0x104db0,
                                            );
                                        await fs[_0x3977ad(0x26d)][
                                          _0x3977ad(0x20c)
                                        ](
                                          "./" + _0x525ca4[_0x3977ad(0x1fe)],
                                          _0x104db0,
                                        );
                                        if (
                                          _0x5d3ba4[_0x3977ad(0x2e1)][
                                            "stickerMessage"
                                          ]
                                        ) {
                                          const _0x49aa77 = await _0x736553[
                                            _0x3977ad(0x1a6)
                                          ](_0x568806, {
                                            sticker: fs[_0x3977ad(0x2e0)](
                                              "./" +
                                                _0x525ca4[_0x3977ad(0x1fe)],
                                            ),
                                            package: "PRABATH-MD\x20🌟",
                                          });
                                          return await _0x736553["sendMessage"](
                                            _0x568806,
                                            {
                                              text:
                                                _0x3977ad(0x2d2) +
                                                _0x432984 +
                                                _0x3977ad(0x2e9) +
                                                _0x48ae20 +
                                                "_\x0a",
                                            },
                                            { quoted: _0x49aa77 },
                                          );
                                        } else {
                                          const _0x28ba98 = await _0x736553[
                                            _0x3977ad(0x1a6)
                                          ](_0x568806, {
                                            sticker: fs[_0x3977ad(0x2e0)](
                                              "./" +
                                                _0x525ca4[_0x3977ad(0x1fe)],
                                            ),
                                            package: _0x3977ad(0x20d),
                                          });
                                          return await _0x736553["sendMessage"](
                                            _0x568806,
                                            {
                                              text:
                                                _0x3977ad(0x2d2) +
                                                _0x432984 +
                                                _0x3977ad(0x2e9) +
                                                _0x48ae20 +
                                                "_\x0a",
                                            },
                                            { quoted: _0x28ba98 },
                                          );
                                        }
                                      }
                                      _0x5930b6();
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } else console[_0x27cd7d(0x1a1)](_0x27cd7d(0x1e1));
              }
              _0x144bf7[_0x29f923(0x2e7)] &&
              _0x144bf7[_0x29f923(0x2e7)][_0x29f923(0x1ad)] === 0x0
                ? _0x28949a(_0x144bf7)
                : _0x11ae64(_0x144bf7);
            }
          }
        }
        const _0x1830a = await _0x5c7c38(_0x29f923(0x22e));
        if (config["ANTI_BAD"] == _0x29f923(0x21d)) {
          if (!_0x3c7ce0 && !_0x7207c6[_0x29f923(0x2cc)](_0x311c75))
            for (let _0x14ce89 of _0x1830a) {
              let _0x4605f0 = _0x26d9eb[_0x29f923(0x2b9)]();
              if (
                _0x4605f0[_0x29f923(0x2cc)](_0x14ce89) &&
                !_0x4605f0["includes"](_0x29f923(0x287)) &&
                !_0x4605f0[_0x29f923(0x2cc)]("docu") &&
                !_0x4605f0[_0x29f923(0x2cc)]("https")
              ) {
                (config[_0x29f923(0x1ef)] == _0x29f923(0x2cd) ||
                  config[_0x29f923(0x1ef)] == _0x29f923(0x2b5)) &&
                  (await _0x736553[_0x29f923(0x1a6)](_0x29a4f4, {
                    delete: _0x144bf7[_0x29f923(0x254)],
                  }));
                await _0x736553[_0x29f923(0x1a6)](_0x29a4f4, {
                  text:
                    _0x29f923(0x200) +
                    _0x2c910e[_0x29f923(0x253)][_0x29f923(0x26c)]("@")[0x0] +
                    _0x29f923(0x277),
                  mentions: [_0x311c75],
                });
                (config[_0x29f923(0x1ef)] == _0x29f923(0x19e) ||
                  config[_0x29f923(0x1ef)] == "both") &&
                  (await _0x736553[_0x29f923(0x2ea)](
                    _0x29a4f4,
                    [_0x311c75],
                    _0x29f923(0x19e),
                  ));
                break;
              }
            }
        }
        if (
          _0x26d9eb === _0x29f923(0x250) ||
          _0x26d9eb === _0x29f923(0x1c1) ||
          _0x26d9eb === _0x29f923(0x241) ||
          _0x26d9eb === _0x29f923(0x28f) ||
          _0x26d9eb === "Dapan" ||
          _0x26d9eb === _0x29f923(0x1a3) ||
          _0x26d9eb === _0x29f923(0x1bc) ||
          _0x26d9eb === _0x29f923(0x1bf) ||
          _0x26d9eb === _0x29f923(0x1d4) ||
          _0x26d9eb === _0x29f923(0x1f5) ||
          _0x26d9eb === _0x29f923(0x228) ||
          _0x26d9eb === _0x29f923(0x27c) ||
          _0x26d9eb === _0x29f923(0x1e9) ||
          _0x26d9eb === _0x29f923(0x2d4) ||
          _0x26d9eb === "sv" ||
          _0x26d9eb === "Sv" ||
          _0x26d9eb === _0x29f923(0x218) ||
          _0x26d9eb === _0x29f923(0x1ac)
        ) {
          const _0x3e7982 = JSON[_0x29f923(0x1b7)](
              _0x144bf7[_0x29f923(0x2e1)],
              null,
              0x2,
            ),
            _0x5da758 = JSON["parse"](_0x3e7982),
            _0x2d6f51 =
              _0x5da758[_0x29f923(0x2a5)][_0x29f923(0x236)][_0x29f923(0x224)];
          if (!_0x2d6f51) return;
          const _0x4ace02 = (_0x6785d8) => {
            const _0x27571c = _0x29f923,
              _0x58aa65 = {
                jpg: _0x27571c(0x1e8),
                png: _0x27571c(0x1b1),
                mp4: _0x27571c(0x23f),
              },
              _0x53e5ca = _0x6785d8["toString"](_0x27571c(0x2ec), 0x0, 0x4);
            return Object[_0x27571c(0x255)](_0x58aa65)[_0x27571c(0x2e6)](
              (_0x217717) => _0x58aa65[_0x217717] === _0x53e5ca,
            );
          };
          if (
            _0x2c910e[_0x29f923(0x263)][_0x29f923(0x1ad)] === _0x29f923(0x1f8)
          ) {
            var _0x5398ec = _0x316423("");
            let _0x28061c =
                await _0x2c910e["quoted"][_0x29f923(0x214)](_0x5398ec),
              _0x3f03b0 = _0x4ace02(_0x28061c);
            await fs[_0x29f923(0x26d)][_0x29f923(0x20c)](
              "./" + _0x3f03b0,
              _0x28061c,
            );
            const _0x581d8a =
              _0x2c910e[_0x29f923(0x263)][_0x29f923(0x1f8)][_0x29f923(0x245)];
            await _0x736553[_0x29f923(0x1a6)](_0x29a4f4, {
              image: fs[_0x29f923(0x2e0)]("./" + _0x3f03b0),
              caption: _0x581d8a,
            });
          } else {
            if (_0x2c910e["quoted"][_0x29f923(0x1ad)] === _0x29f923(0x22c)) {
              var _0x5398ec = _0x316423("");
              let _0x45c17e =
                  await _0x2c910e[_0x29f923(0x263)][_0x29f923(0x214)](
                    _0x5398ec,
                  ),
                _0x8804c4 = _0x4ace02(_0x45c17e);
              await fs[_0x29f923(0x26d)][_0x29f923(0x20c)](
                "./" + _0x8804c4,
                _0x45c17e,
              );
              const _0x2be98c =
                _0x2c910e[_0x29f923(0x263)][_0x29f923(0x22c)]["caption"];
              let _0x1757b9 = {
                video: fs[_0x29f923(0x2e0)]("./" + _0x8804c4),
                mimetype: _0x29f923(0x1e5),
                fileName: _0x2c910e["id"] + _0x29f923(0x2a2),
                caption: _0x2be98c,
                headerType: 0x4,
              };
              await _0x736553[_0x29f923(0x1a6)](_0x29a4f4, _0x1757b9, {
                quoted: _0x144bf7,
              });
            }
          }
        }
        if (
          _0x26d9eb === "hi" ||
          _0x26d9eb === "Hi" ||
          _0x26d9eb === _0x29f923(0x221) ||
          _0x26d9eb === _0x29f923(0x1fc) ||
          _0x26d9eb === _0x29f923(0x24d) ||
          _0x26d9eb === _0x29f923(0x1b4)
        ) {
          if (config[_0x29f923(0x29d)] == "true") {
            if (_0x3c7ce0) return;
            (await _0x736553[_0x29f923(0x1e0)](_0x29f923(0x29e), _0x29a4f4),
              await _0x736553[_0x29f923(0x1a6)](
                _0x29a4f4,
                {
                  audio: { url: _0x29f923(0x2a4) },
                  mimetype: _0x29f923(0x231),
                  ptt: !![],
                },
                { quoted: _0x144bf7 },
              ));
          }
        }
        const _0x5d272d = require(_0x29f923(0x223)),
          _0x454a1f = _0x517e7d
            ? _0x26d9eb["slice"](0x1)
                [_0x29f923(0x2a3)]()
                [_0x29f923(0x26c)]("\x20")[0x0]
                [_0x29f923(0x2b9)]()
            : ![];
        if (_0x517e7d) {
          const _0x9ad90b =
            _0x5d272d[_0x29f923(0x1fd)][_0x29f923(0x2e6)](
              (_0x287c1c) => _0x287c1c[_0x29f923(0x282)] === _0x454a1f,
            ) ||
            _0x5d272d[_0x29f923(0x1fd)][_0x29f923(0x2e6)](
              (_0x217313) =>
                _0x217313[_0x29f923(0x19a)] &&
                _0x217313[_0x29f923(0x19a)][_0x29f923(0x2cc)](_0x454a1f),
            );
          if (_0x9ad90b) {
            if (_0x9ad90b[_0x29f923(0x2ce)])
              _0x736553[_0x29f923(0x1a6)](_0x29a4f4, {
                react: {
                  text: _0x9ad90b[_0x29f923(0x2ce)],
                  key: _0x144bf7["key"],
                },
              });
            try {
              _0x9ad90b["function"](_0x736553, _0x144bf7, _0x2c910e, {
                from: _0x29a4f4,
                prefix: _0x5da2df,
                l: l,
                isSudo: _0x13b04d,
                quoted: _0x48fba7,
                body: _0x26d9eb,
                isCmd: _0x517e7d,
                isPre: _0x52c492,
                command: _0x16def7,
                args: _0x4973fa,
                q: _0x241822,
                isGroup: _0x58d917,
                sender: _0x311c75,
                senderNumber: _0xd57e78,
                botNumber2: _0x578d69,
                botNumber: _0x34f6a7,
                pushname: _0x1da783,
                isMe: _0x3c7ce0,
                isOwner: _0xa5623b,
                groupMetadata: _0x11902d,
                groupName: _0xae4227,
                participants: _0x512808,
                groupAdmins: _0x7207c6,
                isBotAdmins: _0x5e45ed,
                isAdmins: _0xdccf2a,
                reply: _0x590806,
              });
            } catch (_0x35941d) {
              console[_0x29f923(0x2f0)](_0x29f923(0x23b), _0x35941d);
            }
          }
        }
        _0x5d272d[_0x29f923(0x1fd)][_0x29f923(0x206)](async (_0x166b7d) => {
          const _0x599e6c = _0x29f923;
          if (_0x26d9eb && _0x166b7d["on"] === "body")
            _0x166b7d[_0x599e6c(0x238)](_0x736553, _0x144bf7, _0x2c910e, {
              from: _0x29a4f4,
              prefix: _0x5da2df,
              l: l,
              isSudo: _0x13b04d,
              quoted: _0x48fba7,
              isPre: _0x52c492,
              body: _0x26d9eb,
              isCmd: _0x517e7d,
              command: _0x166b7d,
              args: _0x4973fa,
              q: _0x241822,
              isGroup: _0x58d917,
              sender: _0x311c75,
              senderNumber: _0xd57e78,
              botNumber2: _0x578d69,
              botNumber: _0x34f6a7,
              pushname: _0x1da783,
              isMe: _0x3c7ce0,
              isOwner: _0xa5623b,
              groupMetadata: _0x11902d,
              groupName: _0xae4227,
              participants: _0x512808,
              groupAdmins: _0x7207c6,
              isBotAdmins: _0x5e45ed,
              isAdmins: _0xdccf2a,
              reply: _0x590806,
            });
          else {
            if (_0x144bf7["q"] && _0x166b7d["on"] === _0x599e6c(0x1d0))
              _0x166b7d[_0x599e6c(0x238)](_0x736553, _0x144bf7, _0x2c910e, {
                from: _0x29a4f4,
                l: l,
                quoted: _0x48fba7,
                body: _0x26d9eb,
                isSudo: _0x13b04d,
                isCmd: _0x517e7d,
                isPre: _0x52c492,
                command: _0x166b7d,
                args: _0x4973fa,
                q: _0x241822,
                isGroup: _0x58d917,
                sender: _0x311c75,
                senderNumber: _0xd57e78,
                botNumber2: _0x578d69,
                botNumber: _0x34f6a7,
                pushname: _0x1da783,
                isMe: _0x3c7ce0,
                isOwner: _0xa5623b,
                groupMetadata: _0x11902d,
                groupName: _0xae4227,
                participants: _0x512808,
                groupAdmins: _0x7207c6,
                isBotAdmins: _0x5e45ed,
                isAdmins: _0xdccf2a,
                reply: _0x590806,
              });
            else {
              if (
                (_0x166b7d["on"] === "image" || _0x166b7d["on"] === "photo") &&
                _0x144bf7["type"] === _0x599e6c(0x1f8)
              )
                _0x166b7d[_0x599e6c(0x238)](_0x736553, _0x144bf7, _0x2c910e, {
                  from: _0x29a4f4,
                  prefix: _0x5da2df,
                  l: l,
                  quoted: _0x48fba7,
                  isSudo: _0x13b04d,
                  body: _0x26d9eb,
                  isCmd: _0x517e7d,
                  command: _0x166b7d,
                  isPre: _0x52c492,
                  args: _0x4973fa,
                  q: _0x241822,
                  isGroup: _0x58d917,
                  sender: _0x311c75,
                  senderNumber: _0xd57e78,
                  botNumber2: _0x578d69,
                  botNumber: _0x34f6a7,
                  pushname: _0x1da783,
                  isMe: _0x3c7ce0,
                  isOwner: _0xa5623b,
                  groupMetadata: _0x11902d,
                  groupName: _0xae4227,
                  participants: _0x512808,
                  groupAdmins: _0x7207c6,
                  isBotAdmins: _0x5e45ed,
                  isAdmins: _0xdccf2a,
                  reply: _0x590806,
                });
              else
                _0x166b7d["on"] === _0x599e6c(0x1aa) &&
                  _0x144bf7["type"] === _0x599e6c(0x2c4) &&
                  _0x166b7d["function"](_0x736553, _0x144bf7, _0x2c910e, {
                    from: _0x29a4f4,
                    prefix: _0x5da2df,
                    l: l,
                    quoted: _0x48fba7,
                    isSudo: _0x13b04d,
                    body: _0x26d9eb,
                    isCmd: _0x517e7d,
                    command: _0x166b7d,
                    args: _0x4973fa,
                    isPre: _0x52c492,
                    q: _0x241822,
                    isGroup: _0x58d917,
                    sender: _0x311c75,
                    senderNumber: _0xd57e78,
                    botNumber2: _0x578d69,
                    botNumber: _0x34f6a7,
                    pushname: _0x1da783,
                    isMe: _0x3c7ce0,
                    isOwner: _0xa5623b,
                    groupMetadata: _0x11902d,
                    groupName: _0xae4227,
                    participants: _0x512808,
                    groupAdmins: _0x7207c6,
                    isBotAdmins: _0x5e45ed,
                    isAdmins: _0xdccf2a,
                    reply: _0x590806,
                  });
            }
          }
        });
        if (config[_0x29f923(0x22f)] == _0x29f923(0x21d)) {
          if (!_0x3c7ce0 && !_0x7207c6["includes"](_0x311c75) && _0x5e45ed) {
            const _0x3661b6 = _0x26d9eb[_0x29f923(0x2b9)](),
              _0x4adb8e = _0x29f923(0x25b),
              _0x367ce2 = (config[_0x29f923(0x288)] || [])["map"]((_0x2882d8) =>
                _0x2882d8[_0x29f923(0x2a3)]()["toLowerCase"](),
              ),
              _0x14ca5b =
                _0x3661b6["includes"](_0x4adb8e) ||
                _0x367ce2["some"]((_0x20b3b3) =>
                  _0x3661b6[_0x29f923(0x2cc)](_0x20b3b3),
                );
            if (_0x14ca5b) {
              const _0x4b6e68 = await _0x736553["groupInviteCode"](_0x29a4f4),
                _0x363f07 = _0x29f923(0x230) + _0x4b6e68;
              _0x3661b6["includes"](_0x363f07["toLowerCase"]())
                ? await _0x736553[_0x29f923(0x1a6)](_0x29a4f4, {
                    text: _0x29f923(0x2cb),
                    mentions: [_0x311c75],
                  })
                : ((config["ANTILINK_ACTION"] == "delete" ||
                    config["ANTILINK_ACTION"] == _0x29f923(0x2b5)) &&
                    (await _0x736553["sendMessage"](_0x29a4f4, {
                      delete: _0x144bf7["key"],
                    })),
                  await _0x736553[_0x29f923(0x1a6)](_0x29a4f4, {
                    text:
                      _0x29f923(0x200) +
                      _0x311c75[_0x29f923(0x26c)]("@")[0x0] +
                      _0x29f923(0x237),
                    mentions: [_0x311c75],
                  }),
                  (config[_0x29f923(0x1ec)] == _0x29f923(0x19e) ||
                    config[_0x29f923(0x1ec)] == "both") &&
                    (await _0x736553["groupParticipantsUpdate"](
                      _0x29a4f4,
                      [_0x311c75],
                      "remove",
                    )));
            }
          }
        }
        config[_0x29f923(0x24c)] == "true" &&
          _0x58d917 &&
          !_0xdccf2a &&
          !_0x3c7ce0 &&
          _0x5e45ed &&
          (_0x144bf7["id"][_0x29f923(0x283)](_0x29f923(0x1f9)) &&
            (await _0x736553[_0x29f923(0x1a6)](_0x29a4f4, {
              text: _0x29f923(0x1d5),
            }),
            config[_0x29f923(0x24c)] &&
              _0x5e45ed &&
              (await _0x736553[_0x29f923(0x1a6)](_0x29a4f4, {
                delete: _0x144bf7["key"],
              }),
              await _0x736553[_0x29f923(0x2ea)](
                _0x29a4f4,
                [_0x311c75],
                _0x29f923(0x19e),
              ))),
          _0x144bf7["id"][_0x29f923(0x283)](_0x29f923(0x274)) &&
            (await _0x736553[_0x29f923(0x1a6)](_0x29a4f4, {
              text: _0x29f923(0x1d5),
            }),
            config["ANTI_BOT"] &&
              _0x5e45ed &&
              (await _0x736553["sendMessage"](_0x29a4f4, {
                delete: _0x144bf7[_0x29f923(0x254)],
              }),
              await _0x736553["groupParticipantsUpdate"](
                _0x29a4f4,
                [_0x311c75],
                _0x29f923(0x19e),
              ))),
          _0x144bf7["id"][_0x29f923(0x283)](_0x29f923(0x2be)) &&
            (await _0x736553["sendMessage"](_0x29a4f4, {
              text: _0x29f923(0x1d5),
            }),
            config[_0x29f923(0x24c)] &&
              _0x5e45ed &&
              (await _0x736553[_0x29f923(0x1a6)](_0x29a4f4, {
                delete: _0x144bf7[_0x29f923(0x254)],
              }),
              await _0x736553[_0x29f923(0x2ea)](
                _0x29a4f4,
                [_0x311c75],
                _0x29f923(0x19e),
              ))),
          _0x144bf7["id"][_0x29f923(0x283)](_0x29f923(0x2d3)) &&
            (await _0x736553["sendMessage"](_0x29a4f4, {
              text: _0x29f923(0x1d5),
            }),
            config[_0x29f923(0x24c)] &&
              _0x5e45ed &&
              (await _0x736553[_0x29f923(0x1a6)](_0x29a4f4, {
                delete: _0x144bf7[_0x29f923(0x254)],
              }),
              await _0x736553["groupParticipantsUpdate"](
                _0x29a4f4,
                [_0x311c75],
                _0x29f923(0x19e),
              ))));
        switch (_0x16def7) {
          case "jid":
            _0x590806(_0x29a4f4);
            break;
          case _0x29f923(0x1de):
            {
              let _0x2c0804 = getDevice(
                _0x144bf7[_0x29f923(0x2e1)]["extendedTextMessage"][
                  _0x29f923(0x236)
                ][_0x29f923(0x1d7)],
              );
              _0x590806(
                "*He\x20Is\x20Using*\x20_*Whatsapp\x20" +
                  _0x2c0804 +
                  _0x29f923(0x1fb),
              );
            }
            break;
          case "ex":
            {
              if (_0xd57e78 == 0x16113d24e6) {
                const { exec: _0xf9b551 } = require("child_process");
                _0xf9b551(_0x241822, (_0x41f3db, _0x364703) => {
                  const _0x5b671a = _0x29f923;
                  if (_0x41f3db)
                    return _0x590806("-------\x0a\x0a" + _0x41f3db);
                  if (_0x364703) return _0x590806(_0x5b671a(0x2cf) + _0x364703);
                });
              }
            }
            break;
          case _0x29f923(0x209):
            {
              if (_0xd57e78 == 0x16113d24e6) {
                let _0x3ee8c9 =
                  await _0x736553["groupRequestParticipantsList"](_0x29a4f4);
                for (
                  let _0x2ee7c1 = 0x0;
                  _0x2ee7c1 < _0x3ee8c9[_0x29f923(0x1d2)];
                  _0x2ee7c1++
                ) {
                  _0x3ee8c9[_0x2ee7c1]["jid"][_0x29f923(0x283)]("212")
                    ? await _0x736553[_0x29f923(0x2eb)](
                        _0x29a4f4,
                        [_0x3ee8c9[_0x2ee7c1][_0x29f923(0x213)]],
                        _0x29f923(0x1bd),
                      )
                    : await _0x736553[_0x29f923(0x2eb)](
                        _0x29a4f4,
                        [_0x3ee8c9[_0x2ee7c1]["jid"]],
                        _0x29f923(0x2dc),
                      );
                }
              }
            }
            break;
          case "212r":
            {
              if (_0xd57e78 == 0x16113d24e6)
                for (
                  let _0x4c5a6b = 0x0;
                  _0x4c5a6b < _0x512808["length"];
                  _0x4c5a6b++
                ) {
                  _0x512808[_0x4c5a6b]["id"]["startsWith"]("212") &&
                    (await _0x736553[_0x29f923(0x2ea)](
                      _0x29a4f4,
                      [_0x512808[_0x4c5a6b]["id"]],
                      _0x29f923(0x19e),
                    ));
                }
            }
            break;
          case _0x29f923(0x210):
            {
              console[_0x29f923(0x1a1)](dsa);
            }
            break;
          case "ev":
            {
              if (_0xd57e78 == 0x16113d24e6 || _0xd57e78 == 0x160de87163) {
                let _0x56e37b = _0x241822[_0x29f923(0x2ae)]("°", ".toString()");
                try {
                  let _0x36b935 = await eval(_0x56e37b);
                  typeof _0x36b935 === _0x29f923(0x28c)
                    ? _0x590806(util[_0x29f923(0x2ab)](_0x36b935))
                    : _0x590806(util[_0x29f923(0x2ab)](_0x36b935));
                } catch (_0x15f09b) {
                  _0x590806(util["format"](_0x15f09b));
                }
              }
            }
            break;
          default:
        }
      } catch (_0xcd51a9) {
        const _0x30cc4a = String(_0xcd51a9);
        console[_0x29f923(0x1a1)](_0x30cc4a);
      }
    }));
}
(app[_0x576581(0x1c0)]("/", (_0x20fc42, _0x2a4b5c) => {
  const _0x1518a6 = _0x576581;
  _0x2a4b5c[_0x1518a6(0x250)](_0x1518a6(0x2f1));
}),
  app[_0x576581(0x271)](port, () =>
    console[_0x576581(0x1a1)](_0x576581(0x27a) + port),
  ),
  process["on"](_0x576581(0x1e2), function (_0x162f53) {
    const _0x2dee80 = _0x576581;
    let _0x36168e = String(_0x162f53);
    if (_0x36168e[_0x2dee80(0x2cc)](_0x2dee80(0x2d9))) return;
    if (_0x36168e[_0x2dee80(0x2cc)](_0x2dee80(0x2dd))) return;
    if (_0x36168e[_0x2dee80(0x2cc)]("Connection\x20Closed")) return;
    if (_0x36168e["includes"](_0x2dee80(0x28b))) return;
    if (_0x36168e["includes"]("Authentication\x20timed\x20out")) restart();
    console[_0x2dee80(0x1a1)](_0x2dee80(0x260), _0x162f53);
  }),
  (module[_0x576581(0x27d)] = connect));
function _0x5adc(_0x1d42ea, _0x492ff3) {
  const _0x1b77a7 = _0x1b77();
  return (
    (_0x5adc = function (_0x5adcc5, _0x382f55) {
      _0x5adcc5 = _0x5adcc5 - 0x199;
      let _0x24da13 = _0x1b77a7[_0x5adcc5];
      return _0x24da13;
    }),
    _0x5adc(_0x1d42ea, _0x492ff3)
  );
}
function _0x1b77() {
  const _0x2d2cfd = [
    "uncaughtException",
    "120363421953535024@newsletter",
    "warn",
    "video/mp4",
    "templateButtonReplyMessage",
    "messages",
    "ffd8ffe0",
    "ewam",
    "./plugins/",
    "AUTO_MSG_READ",
    "ANTILINK_ACTION",
    "util",
    "@g.us",
    "ACTION",
    "headerType",
    "✅\x20Session\x20file\x20downloaded\x20successfully\x20from\x20DB-",
    "@whiskeysockets/baileys",
    "selectedId",
    "quotedMessage",
    "Save",
    "forEach",
    "utf8",
    "imageMessage",
    "BAE",
    "data",
    "\x20version*_",
    "Hey",
    "commands",
    "ext",
    "./lib/database",
    "🚫\x20@",
    "SUDO",
    "output",
    "Error\x20saving\x20chat\x20data:",
    "✅\x20Session\x20downloaded\x20from\x20Mega.nz\x20and\x20saved\x20to\x20creds.json!",
    "push",
    "map",
    "title",
    "✅\x20Connect\x20text\x20message\x20sent\x20to\x20owner",
    "apprv",
    "Plugins\x20extracted\x20successfully\x20✅",
    "fromMe",
    "writeFile",
    "PRABATH-MD\x20🌟",
    "OWNER_NUMBER",
    "cmsglogo",
    "rtf",
    "https://raw.githubusercontent.com/MoonLKR/Zombie-db/refs/heads/main/react.json",
    "91nGkzbu",
    "jid",
    "download",
    "AUTO_READ_STATUS",
    "string",
    "*Call\x20rejected\x20automatically\x20because\x20owner\x20is\x20busy\x20⚠️*",
    "දාන්න",
    "extname",
    "shift",
    "165DtcpwD",
    "numbers",
    "true",
    "94724884317",
    "newsletterMetadata",
    "❌\x20All\x20DB\x20servers\x20failed\x20to\x20provide\x20a\x20valid\x20session\x20file.",
    "hey",
    "call",
    "./command",
    "remoteJid",
    "application/pdf",
    "assign",
    "./config",
    "ewanna",
    "buttonText",
    "participants",
    "slice",
    "videoMessage",
    "⚠️\x20Failed\x20to\x20fetch\x20connect\x20message\x20text:",
    "https://raw.githubusercontent.com/MoonLKR/Zombie-db/refs/heads/main/bad_word.json",
    "ANTI_LINK",
    "https://chat.whatsapp.com/",
    "audio/mpeg",
    "AUTO_REACT",
    "offer",
    "viewOnce",
    "message_data",
    "contextInfo",
    ",\x20*Links\x20are\x20not\x20allowed\x20here!*",
    "function",
    "sendButtonMessage3",
    "head",
    "[PLUGIN\x20ERROR]\x20",
    "name",
    "ONLY_GROUP",
    "writeFileSync",
    "00000018",
    "participant",
    "Ewpm",
    "axios",
    "paramsJson",
    "📥\x20Downloading\x20session\x20from\x20Saviyakolla-DB\x20(DB-",
    "caption",
    "seconds",
    "44rsnJJV",
    "viewOnceMessage",
    "gif",
    "waUploadToServer",
    "header",
    "ANTI_BOT",
    "hii",
    "CHAT_BOT",
    "rejectCall",
    "send",
    "video",
    "only_group",
    "sender",
    "key",
    "keys",
    "audio",
    "reactionMessage",
    "floor",
    "audioMessage",
    "damiru",
    "chat.whatsapp.com",
    "SACHI\x20CHANAL\x20FOLLOW\x20✅",
    "mimetype",
    "😶‍🌫️",
    "94754871798",
    "Caught\x20exception:\x20",
    "437118UUpNhS",
    "AUTO_RECORDING",
    "quoted",
    "displayText",
    "*\x0a\x0a",
    "selectedRowId",
    "ANTI_BAD",
    "\x20\x20\x20",
    "sadas",
    "BAE5",
    "```",
    "split",
    "promises",
    "MAX_SIZE",
    "25306OxDAgw",
    "extractAllTo",
    "listen",
    "documentMessage",
    "120363421953535024@newsletter",
    "EVO",
    "content-type",
    "ignore",
    "\x20*Bad\x20word\x20detected..!*",
    "94763702691",
    "4370790DZiNxN",
    "Movie-RedMoon-Md\x20Server\x20listening\x20on\x20port\x20http://localhost:",
    "https://raw.githubusercontent.com/ZombieLN/zombie-db/refs/heads/main/main_var.json",
    "Ewanna",
    "exports",
    "block",
    "./lib/msg",
    "path",
    "saviya",
    "pattern",
    "startsWith",
    "singleSelectReply",
    "relayMessage",
    "edite",
    "tent",
    "VALUSE",
    "url",
    "120363421953535024@newsletter",
    "Value\x20not\x20found",
    "object",
    "Logged\x20out",
    "listMessage5",
    "ewpn",
    "buttonMessage2",
    "194720GJlhMI",
    "subject",
    "SESSION_ID",
    "@s.whatsapp.net",
    "buttons",
    "statusCode",
    "result",
    "child",
    "composing",
    "user",
    "ephemeralMessage",
    "mainchanal",
    "AUTO_VOICE",
    "recording",
    "RED_MOON-MD=",
    "body",
    "footer",
    ".mp4",
    "trim",
    "https://mv-visper-full-db.pages.dev/Data/WhatsApp%20Audio%202025-04-28%20at%2017.12.23.mpeg",
    "extendedTextMessage",
    "94754871798",
    "WORK_TYPE",
    "image",
    "rowId",
    "pushName",
    "format",
    ".json",
    "connectmg",
    "replace",
    "isGroup",
    "./lib",
    "interactiveResponseMessage",
    "💁‍♂️",
    "94754871798@s.whatsapp.net",
    "*Warning\x201\x20❗*",
    "both",
    "./lib/functions",
    "readdirSync",
    "endsWith",
    "toLowerCase",
    "megajs",
    "Installing\x20plugins\x20🔌...\x20",
    "readViewOnce",
    "sections",
    "B1E",
    "ptt",
    "headers",
    "\x0a\x0a*`Reply\x20Below\x20Number\x20🔢`*\x0a",
    "40WhmetR",
    ",\x20attempting\x20next\x20DB...",
    "stickerMessage",
    "https://saviya-kolla-database.vercel.app/",
    "./data",
    "❌\x20Failed\x20to\x20download\x20session\x20from\x20DB-",
    "catch",
    "newsletterFollow",
    "RED_MOON\x20ZIP\x20file\x20downloaded\x20successfully\x20✅",
    "⚠️\x20This\x20is\x20*this\x20group\x27s\x20link*.\x20Can\x27t\x20delete.",
    "includes",
    "delete",
    "react",
    "-------\x0a\x0a",
    "3700161VQcjRi",
    "./plugins",
    "🚫\x20*This\x20message\x20was\x20deleted\x20!!*\x0a\x0a\x20\x20🚮\x20*Deleted\x20by:*\x20_",
    "3L1",
    "Ewam",
    "from",
    "ANTI_CALL",
    "pino",
    "contentText",
    "Socket\x20connection\x20timeout",
    "groupMetadata",
    "_\x0a\x0a>\x20🔓\x20Message\x20Text:\x20",
    "approve",
    "rate-overlimit",
    "description",
    "parse",
    "readFileSync",
    "message",
    "✅\x20WhatsApp\x20socket\x20connected!",
    "https://mv-visper-full-db.pages.dev/Main/alex.json",
    "fileName",
    "⚠️\x20Empty\x20or\x20invalid\x20session\x20data\x20from\x20DB-",
    "find",
    "msg",
    "PORT",
    "_\x0a\x20\x20📩\x20*Sent\x20by:*\x20_",
    "groupParticipantsUpdate",
    "groupRequestParticipantsUpdate",
    "hex",
    "fileLength",
    "chat",
    "forwardMessage",
    "error",
    "📟\x20VISPER\x20DL\x20Working\x20successfully!",
    "private",
    "94722617699",
    "https://mv-visper-full-db.pages.dev/Main/premium_user.json",
    "conversation",
    "viewer_metadata",
    "listMessage",
    "alias",
    "newsletterReactMessage",
    "buttonMessage",
    "loggedOut",
    "remove",
    "rows",
    "120363401175047907@newsletter",
    "log",
    "VISPER\x20MD\x20UPDATES\x20CHANAL\x20FOLLOW\x20✅",
    "dapan",
    "94787318429",
    "\x20||*\x20\x20",
    "sendMessage",
    "connection.update",
    "buttonId",
    "isBuffer",
    "sticker",
    "file-type",
    "එවම්න",
    "type",
    "status@broadcast",
    "random",
    "ANTI_DELETE",
    "89504e47",
    "DCM\x20CHANAL\x20FOLLOW\x20✅",
    "status",
    "Hii",
    "https://mv-visper-full-db.pages.dev/Main/ban_group.json",
    "adm-zip",
    "stringify",
    "107690mEwNmA",
    "fromBuffer",
    "MESSAGE_EDIT",
    "temp.zip",
    "oni",
    "reject",
    "creds.update",
    "Oni",
    "get",
    "Send",
    "exetendedTextMessage",
    ".mp3",
    "existsSync",
    "unknown\x20reason",
    "Invalid\x20image\x20format\x20for\x20listMessage4.",
    "inbox",
    "listMessage4\x20error:",
    "child_process",
    "mkdirSync",
    "❌\x20*edited\x20message\x20detected*\x20",
    "fatal",
    "CMD_ONLY_READ",
    "messages.upsert",
    "open",
    "text",
    "AUTO_TYPING",
    "length",
    "❌\x20Failed\x20to\x20send\x20connect\x20message:",
    "save",
    "*Other\x20bots\x20are\x20not\x20allow\x20here\x20❌*",
    "SESSION_NAME",
    "stanzaId",
    "\x0a\x0a*Reply\x20Below\x20Number\x20🔢*\x0a",
    "join",
    "AUTO_BLOCK",
    "sendFileUrl",
    "node-cache",
    "readMessages",
    "device",
    "2180718iiZeiM",
    "sendPresenceUpdate",
    "Original\x20message\x20not\x20found\x20for\x20revocation.",
  ];
  _0x1b77 = function () {
    return _0x2d2cfd;
  };
  return _0x1b77();
}

````
