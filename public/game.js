/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkMovement\": () => (/* binding */ checkMovement),\n/* harmony export */   \"coinsize\": () => (/* binding */ coinsize),\n/* harmony export */   \"playersize\": () => (/* binding */ playersize),\n/* harmony export */   \"random\": () => (/* binding */ random),\n/* harmony export */   \"ratio\": () => (/* binding */ ratio),\n/* harmony export */   \"size\": () => (/* binding */ size),\n/* harmony export */   \"treesize\": () => (/* binding */ treesize)\n/* harmony export */ });\nconst size = 3000;\nconst playersize = 50;\nconst coinsize = 37.5;\nconst ratio = size / 60;\nconst treesize = 300;\n\nfunction random(number1, number2){\n  return Math.round(Math.random() * (number2 - number1)) + number1;\n}\n\nfunction checkMovement(direction, x, y){\n  if(direction == \"left\"){\n    if(x <= 0) return false;\n  } if(direction == \"right\"){\n    if(x + playersize >= size) return false;\n  } if(direction == \"up\"){\n    if(y <= 0) return false;\n  } if(direction == \"down\"){\n    if(y + playersize >= size) return false;\n  } if(direction == \"none\"){\n    return false;\n  }\n  return true;\n}\n\n\n\n//# sourceURL=webpack://bignecessaryapplicationsuite/./src/functions.js?");

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions.js */ \"./src/functions.js\");\n/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket.js */ \"./src/game/socket.js\");\n/* harmony import */ var _objects_text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/text.js */ \"./src/objects/text.js\");\n\n\n\nconst speed = 300;\n\nclass gamescene extends Phaser.Scene {\n  constructor(){\n    super();\n  }\n  \n  preload() {\n    this.load.image(\"player\", \"/img/player.png\");\n    this.load.image(\"coin\", \"/img/gameObjects/coin.png\");\n    this.load.image(\"grass\", \"/img/gameObjects/tile.png\");\n    this.load.image(\"bullet\", \"/img/gameObjects/bullet.png\");\n    this.load.image(\"pistol\", \"/img/guns/pistol.png\");\n    this.load.image(\"obstacle\", \"/img/gameObjects/obstacle.png\");\n    this.load.image(\"obstacle2\", \"/img/gameObjects/obstacle2.png\");\n    this.load.image(\"tree\", \"/img/gameObjects/tree.png\");\n    this.loadingtext = new _objects_text_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this, window.innerWidth / 2, window.innerHeight / 2, \"Loading...\", {fontSize: 50}).setOrigin(0.5);\n  }\n\n  create() {\n    this.loaded = false;\n    this.socket = io();\n    this.otherplayers = this.physics.add.group();\n    this.otherguns = this.physics.add.group();\n    this.coins = this.physics.add.group();\n    this.trees = this.physics.add.group();\n    this.socket.emit(\"join\", localStorage.getItem(\"name\"));\n    (0,_socket_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this);\n  }\n\n  main(){\n    this.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)\n    this.a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)\n    this.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)\n    this.d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)\n\n    for(let i = _functions_js__WEBPACK_IMPORTED_MODULE_0__.size / (_functions_js__WEBPACK_IMPORTED_MODULE_0__.ratio * 2); i < _functions_js__WEBPACK_IMPORTED_MODULE_0__.size; i += _functions_js__WEBPACK_IMPORTED_MODULE_0__.size / _functions_js__WEBPACK_IMPORTED_MODULE_0__.ratio){\n      for(let j = _functions_js__WEBPACK_IMPORTED_MODULE_0__.size / (_functions_js__WEBPACK_IMPORTED_MODULE_0__.ratio * 2); j < _functions_js__WEBPACK_IMPORTED_MODULE_0__.size; j += _functions_js__WEBPACK_IMPORTED_MODULE_0__.size / _functions_js__WEBPACK_IMPORTED_MODULE_0__.ratio){\n        let grass = this.physics.add.image(i, j, \"grass\").setDepth(0);\n      }\n    }\n    \n    this.obstacle1 = this.physics.add.staticSprite(1500, 750, \"obstacle\").setDepth(0);\n    this.obstacle2 = this.physics.add.staticSprite(1500, 2250, \"obstacle\").setDepth(0);\n    this.obstacle3 = this.physics.add.staticSprite(750, 1500, \"obstacle2\").setDepth(0);\n    this.obstacle4 = this.physics.add.staticSprite(2250, 1500, \"obstacle2\").setDepth(0);\n\n  \n    this.gun = this.physics.add.sprite(this.player.x, this.player.y, \"pistol\").setDepth(15);\n\n    this.gun.angle2 = 0;\n\n    this.bullets = this.physics.add.group();\n\n    this.health = 100;\n    this.healthtext = new _objects_text_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this, 100, 50, \"Health\");\n\n    this.healthbar = this.add.rectangle(200, 100, 200, 20, 0x0ffffff).setDepth(10);\n    this.healthbar.scrollFactorX = 0;\n    this.healthbar.scrollFactorY = 0;\n\n    this.healthbarinside = this.add.rectangle(200, 100, 200, 20, 0x060f20c).setDepth(10);\n    this.healthbarinside.scrollFactorX = 0;\n    this.healthbarinside.scrollFactorY = 0;\n\n    this.score = 0;\n\n    this.scoretext = new _objects_text_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this, window.innerWidth - 200, 100, \"Score: \" + this.score);\n\n    this.gold = 0;\n    this.goldtext = new _objects_text_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this, window.innerWidth - 200, 150, \"Gold: \" + this.gold);\n\n    this.addWeaponActions();\n\n    var gameobject = this;\n    this.healFunction = setInterval(function(){\n      if(gameobject.health < 100){\n        gameobject.health += 1;\n        gameobject.updateHealthBar();\n      }\n    }, 1000);\n\n    this.physics.add.collider(this.player, this.coins, (player, coin) => { // player collects coin\n      this.collect(player, coin);\n    });\n\n    this.physics.add.collider(this.bullets, this.obstacle1, (obstacle, bullet) => {\n      bullet.destroy();\n    });\n    this.physics.add.collider(this.player, this.obstacle1, () => {\n      this.player.setVelocityX(0);\n      this.player.setVelocityY(0);\n    });\n\n    this.physics.add.collider(this.bullets, this.obstacle2, (obstacle, bullet) => {\n      bullet.destroy();\n    });\n    this.physics.add.collider(this.player, this.obstacle2, () => {\n      this.player.setVelocityX(0);\n      this.player.setVelocityY(0);\n    });\n\n    this.physics.add.collider(this.bullets, this.obstacle3, (obstacle, bullet) => {\n      bullet.destroy();\n    });\n    this.physics.add.collider(this.player, this.obstacle3, () => {\n      this.player.setVelocityX(0);\n      this.player.setVelocityY(0);\n    });\n\n    this.physics.add.collider(this.bullets, this.obstacle4, (obstacle, bullet) => {\n      bullet.destroy();\n    });\n    this.physics.add.collider(this.player, this.obstacle4, () => {\n      this.player.setVelocityX(0);\n      this.player.setVelocityY(0);\n    });\n    \n    // this.physics.add.collider(this.bullets, this.demons, (bullet, demon) => {\n    //   bullet.destroy();\n    //   demon.destroy();\n    //   this.score += 1;\n    //   this.scoretext.setText(\"Score: \" + this.score);\n    //   this.demontext.setText(\"Demons: \" + this.demons.children.entries.length);\n    //   if(this.score > localStorage.getItem(\"bestscore\")){\n    //     localStorage.setItem(\"bestscore\", this.score);\n    //   }\n    // });\n  }\n\n  collect(player, coin){\n    this.socket.emit(\"collect gold\", coin.id);\n    console.log(coin.id)\n    this.gold += 1;\n    this.goldtext.setText(\"Gold: \" + this.gold);\n    coin.destroy();\n    if(this.gold > localStorage.getItem(\"bestgold\")){\n      localStorage.setItem(\"bestgold\", this.gold);\n    }\n    for(let i = 0; i < (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.random)(0, 2); i++){\n      this.coins.create((0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.random)(_functions_js__WEBPACK_IMPORTED_MODULE_0__.coinsize / 2, _functions_js__WEBPACK_IMPORTED_MODULE_0__.size - _functions_js__WEBPACK_IMPORTED_MODULE_0__.coinsize / 2), (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.random)(_functions_js__WEBPACK_IMPORTED_MODULE_0__.coinsize / 2, _functions_js__WEBPACK_IMPORTED_MODULE_0__.size - _functions_js__WEBPACK_IMPORTED_MODULE_0__.coinsize / 2), \"coin\").setScale(0.75, 0.75);\n    }\n  }\n\n  updateHealthBar(){\n    if(this.health < 0) this.health = 0;\n    this.healthbarinside.width = 200 * this.health / 100;\n  }\n\n\n  addWeaponActions(){\n    this.useweapon = true;\n    window.addEventListener(\"mousedown\", e => {\n      if(!this.useweapon) return;\n      var angle = Math.atan2(e.clientY - (window.innerHeight / 2), e.clientX - (window.innerWidth / 2));\n      let bullet = this.bullets.create(this.player.x + Math.cos(angle) * (_functions_js__WEBPACK_IMPORTED_MODULE_0__.playersize / 2 + 23), this.player.y + Math.sin(angle) * (_functions_js__WEBPACK_IMPORTED_MODULE_0__.playersize / 2 + 23), \"bullet\").setScale(0.5, 2).setDepth(13);\n      bullet.angle = ((angle * 180 / Math.PI) + 360) % 360;\n      bullet.setVelocityX(Math.cos(angle) * 1500);\n      bullet.setVelocityY(Math.sin(angle) * 1500);\n      this.gun.angle = ((angle * 180 / Math.PI) + 360) % 360;\n      this.gun.angle2 = angle;\n      this.useweapon = false;\n    });\n    \n    window.addEventListener(\"mousemove\", e => {\n      var angle = Math.atan2(e.clientY - (window.innerHeight / 2), e.clientX - (window.innerWidth / 2));\n      this.gun.angle = ((angle * 180 / Math.PI) + 360) % 360;\n      this.gun.angle2 = angle;\n    });\n\n    setInterval(() => {\n      if(!this.useweapon){\n        this.useweapon = true;\n      }\n    }, 500);\n  }\n\n  update() {\n    if(!this.loaded) return;\n    let cursors = this.input.keyboard.createCursorKeys();\n    \n    this.player.setVelocityX(0);\n    this.player.setVelocityY(0);\n    if(cursors.left.isDown || this.a.isDown){\n      if((0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.checkMovement)(\"left\", this.player.body.position.x, this.player.body.position.y)) this.player.setVelocityX(-speed);\n    } if(cursors.right.isDown || this.d.isDown){\n      if((0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.checkMovement)(\"right\", this.player.body.position.x, this.player.body.position.y)) this.player.setVelocityX(speed);\n    } if(cursors.up.isDown || this.w.isDown){\n      if((0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.checkMovement)(\"up\", this.player.body.position.x, this.player.body.position.y)) this.player.setVelocityY(-speed);\n    } if(cursors.down.isDown || this.s.isDown){\n      if((0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.checkMovement)(\"down\", this.player.body.position.x, this.player.body.position.y)) this.player.setVelocityY(speed);\n    }\n    \n    this.gun.x = this.player.body.position.x + _functions_js__WEBPACK_IMPORTED_MODULE_0__.playersize / 2 + Math.cos(this.gun.angle2) * (_functions_js__WEBPACK_IMPORTED_MODULE_0__.playersize / 2 + 28);\n    this.gun.y = this.player.body.position.y + _functions_js__WEBPACK_IMPORTED_MODULE_0__.playersize / 2 + Math.sin(this.gun.angle2) * (_functions_js__WEBPACK_IMPORTED_MODULE_0__.playersize / 2 + 28);\n\n    this.player.angle = this.gun.angle;\n\n    if(this.player.x != this.data.x || this.player.y != this.data.y || this.player.angle != this.data.angle){\n      this.data.x = this.player.x;\n      this.data.y = this.player.y;\n      this.data.angle = this.gun.angle;\n      this.data.angle2 = this.gun.angle2;\n      this.data.gunx = this.gun.x;\n      this.data.guny = this.gun.y\n      this.socket.emit(\"player move\", this.data);\n    }\n  }\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gamescene);\n\n// https://www.html5gamedevs.com/topic/7273-best-way-to-fix-weapon-to-player/\n\n//# sourceURL=webpack://bignecessaryapplicationsuite/./src/game/game.js?");

/***/ }),

/***/ "./src/game/socket.js":
/*!****************************!*\
  !*** ./src/game/socket.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions.js */ \"./src/functions.js\");\n\n\nfunction socketfunc(game){\n  game.socket.on(\"gamedata\", data => { // when game data arrives\n    game.loaded = true;\n    game.loadingtext.destroy();\n    game.player = game.physics.add.sprite(data.players[game.socket.id].x, data.players[game.socket.id].y, \"player\").setScale(0.5, 0.5).setDepth(1);\n    game.cameras.main.startFollow(game.player);\n    game.data = {\n      x: data.players[game.socket.id].x,\n      y: data.players[game.socket.id].y,\n      angle: 0,\n      angle2:0\n    };\n\n    for(let i of data.coins){\n      let coin = game.coins.create(i.x, i.y, \"coin\").setScale(0.75, 0.75).setDepth(1);\n      coin.id = i.id;\n    }\n\n    for(let i of data.trees){\n      let tree = game.trees.create(i.x, i.y, \"tree\").setScale(i.size / _functions_js__WEBPACK_IMPORTED_MODULE_0__.treesize).setDepth(10);\n      tree.id = i.id;\n    }\n    \n    for(let oplayer of Object.keys(data.players)){\n      if(oplayer != game.socket.id){\n        let otherplayer = game.otherplayers.create(data.players[oplayer].x, data.players[oplayer].y, \"player\").setScale(0.5, 0.5).setDepth(1);\n        otherplayer.id = oplayer;\n        let gun = game.otherguns.create(data.players[oplayer].x + Math.cos(data.players[oplayer].angle2) * (_functions_js__WEBPACK_IMPORTED_MODULE_0__.playersize / 2 + 28), data.players[oplayer].y + Math.sin(data.players[oplayer].angle2) * (_functions_js__WEBPACK_IMPORTED_MODULE_0__.playersize / 2 + 28), \"pistol\").setDepth(15);\n        gun.angle = data.players[oplayer].angle;\n        gun.angle2 = data.players[oplayer].angle2;\n        gun.id = oplayer;\n      }\n    }\n    game.main();\n      \n  });\n\n  game.socket.on(\"new player\", (data, id) => { // when new player joins\n    let otherplayer = game.otherplayers.create(data.x, data.y, \"player\").setScale(0.5, 0.5).setDepth(1);\n    let gun = game.otherguns.create(data.x + Math.cos(0) * (_functions_js__WEBPACK_IMPORTED_MODULE_0__.playersize / 2 + 28), data.y + Math.sin(0) * (_functions_js__WEBPACK_IMPORTED_MODULE_0__.playersize / 2 + 28), \"pistol\").setDepth(15);\n    gun.angle = 0;\n    gun.angle2 = 0;\n    otherplayer.id = id;\n    gun.id = id;\n  });\n\n  game.socket.on(\"other player move\", (id, data) => { // when other player moves\n    game.otherplayers.getChildren().forEach(oplayer => {\n      if(oplayer.id == id){\n        oplayer.setPosition(data.x, data.y);\n        oplayer.angle = data.angle;\n        game.otherguns.getChildren().forEach(gun => {\n          if(gun.id == id){\n            gun.angle = data.angle;\n            gun.angle2 = data.angle2;\n            gun.setPosition(data.gunx, data.guny);\n          }\n        });\n      }\n    });\n  });\n\n  game.socket.on(\"collected gold\", id => {\n    for(let coin of game.coins.children.entries){\n      if(coin.id == id){\n        coin.destroy();\n        console.log(\"deleted coin\");\n      }\n    }\n  });\n\n  game.socket.on(\"left\", id => {\n    for(let player of game.otherplayers.children.entries){\n      if(player.id == id){\n        player.destroy();\n      }\n    }\n\n    for(let gun of game.otherguns.children.entries){\n      if(gun.id == id){\n        gun.destroy();\n      }\n    }\n  });\n\n  game.socket.on(\"leave\", () => {\n    game.scene.start(\"disconnect_scene\");\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socketfunc);\n\n//# sourceURL=webpack://bignecessaryapplicationsuite/./src/game/socket.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game.js */ \"./src/game/game.js\");\n/* harmony import */ var _scenes_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/join.js */ \"./src/scenes/join.js\");\n/* harmony import */ var _scenes_howtoplay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/howtoplay.js */ \"./src/scenes/howtoplay.js\");\n/* harmony import */ var _scenes_died_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/died.js */ \"./src/scenes/died.js\");\n/* harmony import */ var _scenes_best_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/best.js */ \"./src/scenes/best.js\");\n/* harmony import */ var _scenes_disconnect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scenes/disconnect.js */ \"./src/scenes/disconnect.js\");\n\n\n\n\n\n\n\nconst config = {\n  type: Phaser.AUTO,\n  width: window.innerWidth,\n  height: window.innerHeight,\n  backgroundColor: \"#000000\",\n  physics: {\n    default: \"arcade\",\n    arcade: {\n      gravity: {\n        y: 0\n      },\n      debug: false\n    }\n  }\n};\n\nfunction startGame(){\n  let name = document.getElementById(\"input\").value;\n  if(!name.replace(\" \", \"\")){\n    document.querySelector(\"p\").style.display = \"block\";\n    return;\n  }\n  localStorage.setItem(\"name\", name);\n  \n  const game = new Phaser.Game(config);\n  \n  game.scene.add(\"gamescene\", _game_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  game.scene.add(\"joinscene\", _scenes_join_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  game.scene.add(\"howtoplay\", _scenes_howtoplay_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  game.scene.add(\"diedscene\", _scenes_died_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  game.scene.add(\"bestscores\", _scenes_best_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  game.scene.add(\"disconnect_scene\", _scenes_disconnect_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  game.scene.start(\"gamescene\");\n  document.querySelector(\"canvas\").style.cursor = \"crosshair\";\n  \n  window.addEventListener(\"resize\", () => {\n    game.scale.resize(window.innerWidth, window.innerHeight);\n  });\n  \n  document.querySelector(\"main\").style.display = \"none\";\n}\n\nif(localStorage.getItem(\"name\")){\n  document.getElementById(\"input\").value = localStorage.getItem(\"name\");\n}\ndocument.getElementById(\"playbtn\").addEventListener(\"click\", startGame);\n\n//# sourceURL=webpack://bignecessaryapplicationsuite/./src/main.js?");

/***/ }),

/***/ "./src/objects/text.js":
/*!*****************************!*\
  !*** ./src/objects/text.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Text extends Phaser.GameObjects.Text {\n  constructor(scene, x, y, text, style){\n    if(!style){\n      style = {};\n      style.fontFamily = \"Arial\"; // default values\n      style.fontSize = 30;\n    }\n    if(!(\"fontFamily\" in style)){\n      style.fontFamily = \"Arial\";\n    }\n    if(!(\"fontSize\" in style)){\n      style.fontSize = 30;\n    }\n    super(scene, x, y, text, style);\n    this.scrollFactorX = 0;\n    this.scrollFactorY = 0;\n    this.setDepth(10);\n    scene.add.existing(this);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);\n\n//# sourceURL=webpack://bignecessaryapplicationsuite/./src/objects/text.js?");

/***/ }),

/***/ "./src/scenes/best.js":
/*!****************************!*\
  !*** ./src/scenes/best.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass bestscores extends Phaser.Scene {\n  constructor(){\n    super();\n  }\n\n  preload(){\n    \n  }\n  \n  create(){\n    this.add.text(window.innerWidth / 2, 100, \"Your Best\", { fontFamily: \"Arial\", fontSize:100 }).setOrigin(0.5);\n    this.add.text(window.innerWidth / 2, 300, \"Score: \" + localStorage.getItem(\"bestscore\"), { fontFamily: \"Arial\", fontSize:75 }).setOrigin(0.5);\n    this.add.text(window.innerWidth / 2, 400, \"Gold: \" + localStorage.getItem(\"bestgold\"), { fontFamily: \"Arial\", fontSize:75 }).setOrigin(0.5);\n\n    this.button = this.add.rectangle(0, 0, 0, 0, 0x0f0);\n    this.text = this.add.text(window.innerWidth / 2, window.innerHeight / 1.25, 'Back', { fill: '#ffffff', fontFamily: \"Arial\", fontSize:50 }).setOrigin(0.5);\n    this.button.width = this.text.width + 15;\n    this.button.height = this.text.height + 15;\n    this.button.x = this.text.x - (this.text.width / 2) - 5;\n    this.button.y = this.text.y - (this.text.height / 2) - 5;\n    this.button.setInteractive().on('pointerdown', () => {\n      this.scene.start(\"joinscene\");\n    });\n  }\n  update(){\n\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bestscores);\n\n//# sourceURL=webpack://bignecessaryapplicationsuite/./src/scenes/best.js?");

/***/ }),

/***/ "./src/scenes/died.js":
/*!****************************!*\
  !*** ./src/scenes/died.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass diedscene extends Phaser.Scene {\n  constructor(){\n    super();\n  }\n  \n  preload(){\n     \n  }\n  \n  create(){\n    this.add.text(window.innerWidth / 2, 100, \"You Died\", { fontFamily: \"Arial\", fontSize:100 }).setOrigin(0.5);\n\n    this.button = this.add.rectangle(0, 0, 0, 0, 0x0f0);\n    this.text = this.add.text(window.innerWidth / 2, window.innerHeight / 2, 'OK', { fill: '#ffffff', fontFamily: \"Arial\", fontSize:50 }).setOrigin(0.5);\n    this.button.width = this.text.width + 15;\n    this.button.height = this.text.height + 15;\n    this.button.x = this.text.x - (this.text.width / 2) - 5;\n    this.button.y = this.text.y - (this.text.height / 2) - 5;\n    this.button.setInteractive().on('pointerdown', () => {\n      this.scene.start(\"joinscene\");\n    });\n  }\n  \n  update(){\n\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (diedscene);\n\n//# sourceURL=webpack://bignecessaryapplicationsuite/./src/scenes/died.js?");

/***/ }),

/***/ "./src/scenes/disconnect.js":
/*!**********************************!*\
  !*** ./src/scenes/disconnect.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass disconnect_scene extends Phaser.Scene {\n  constructor(){\n    super();\n  }\n  \n  preload(){\n    \n  }\n  \n  create(){\n    this.add.text(window.innerWidth / 2, 100, \"You got disconnected\", { fontFamily: \"Arial\", fontSize:50 }).setOrigin(0.5);\n\n    this.button = this.add.rectangle(0, 0, 0, 0, 0x0f0);\n    this.text = this.add.text(window.innerWidth / 2, window.innerHeight / 2, 'OK', { fill: '#ffffff', fontFamily: \"Arial\", fontSize:50 }).setOrigin(0.5);\n    this.button.width = this.text.width + 15;\n    this.button.height = this.text.height + 15;\n    this.button.x = this.text.x - (this.text.width / 2) - 5;\n    this.button.y = this.text.y - (this.text.height / 2) - 5;\n    this.button.setInteractive().on('pointerdown', () => {\n      location.reload();\n    });\n  }\n  \n  update(){\n\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (disconnect_scene);\n\n//# sourceURL=webpack://bignecessaryapplicationsuite/./src/scenes/disconnect.js?");

/***/ }),

/***/ "./src/scenes/howtoplay.js":
/*!*********************************!*\
  !*** ./src/scenes/howtoplay.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass howtoplay extends Phaser.Scene {\n  constructor(){\n    super();\n  }\n\n  preload(){\n    \n  }\n  \n  create(){\n    this.add.text(window.innerWidth / 2, 100, \"How To Play\", { fontFamily: \"Arial\", fontSize:75 }).setOrigin(0.5 );\n    this.button = this.add.rectangle(0, 0, 0, 0, 0x0f0);\n    this.text = this.add.text(window.innerWidth / 2, window.innerHeight / 1.5, 'Back', { fill: '#ffffff', fontFamily: \"Arial\", fontSize:50 }).setOrigin(0.5);\n    this.button.width = this.text.width + 10;\n    this.button.height = this.text.height + 10;\n    this.button.x = this.text.x - (this.text.width / 2) - 5;\n    this.button.y = this.text.y - (this.text.height / 2) - 5;\n    this.button.setInteractive().on('pointerdown', () => {\n      this.scene.start(\"joinscene\");\n    });\n  }\n  \n  update(){\n\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (howtoplay);\n\n//# sourceURL=webpack://bignecessaryapplicationsuite/./src/scenes/howtoplay.js?");

/***/ }),

/***/ "./src/scenes/join.js":
/*!****************************!*\
  !*** ./src/scenes/join.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass joinscene extends Phaser.Scene {\n  constructor(){\n    super();\n  }\n  \n  preload(){\n    \n  }\n  \n  create(){\n    if(!localStorage.getItem(\"bestscore\")){\n      localStorage.setItem(\"bestscore\", 0);\n    }\n    if(!localStorage.getItem(\"bestgold\")){\n      localStorage.setItem(\"bestgold\", 0);\n    }\n    this.add.text(window.innerWidth / 2, 100, \"Game\", { fontFamily: \"Arial\", fontSize:100 }).setOrigin(0.5);\n\n    this.button = this.add.rectangle(0, 0, 0, 0, 0x0f0);\n    this.text = this.add.text(window.innerWidth / 2, window.innerHeight / 2.5, 'Play', { fill: '#ffffff', fontFamily: \"Arial\", fontSize:50 }).setOrigin(0.5);\n    this.button.width = this.text.width + 15;\n    this.button.height = this.text.height + 15;\n    this.button.x = this.text.x - (this.text.width / 2) - 5;\n    this.button.y = this.text.y - (this.text.height / 2) - 5;\n    this.button.setInteractive().on('pointerdown', () => {\n      this.scene.start(\"gamescene\");\n    });\n\n    this.button2 = this.add.rectangle(0, 0, 0, 0, 0x0f0);\n    this.text2 = this.add.text(window.innerWidth / 2, window.innerHeight / 1.8, 'How To Play', { fill: '#ffffff', fontFamily: \"Arial\", fontSize:50 }).setOrigin(0.5);\n    this.button2.width = this.text2.width + 15;\n    this.button2.height = this.text2.height + 15;\n    this.button2.x = this.text2.x - (this.text2.width / 2) - 5;\n    this.button2.y = this.text2.y - (this.text2.height / 2) - 5;\n    this.button2.setInteractive().on('pointerdown', () => {\n      this.scene.start(\"howtoplay\");\n    });\n\n    this.button3 = this.add.rectangle(0, 0, 0, 0, 0x0f0);\n    this.text3 = this.add.text(window.innerWidth / 2, window.innerHeight / 1.4, 'Your Best Scores', { fill: '#ffffff', fontFamily: \"Arial\", fontSize:50 }).setOrigin(0.5);\n    this.button3.width = this.text3.width + 15;\n    this.button3.height = this.text3.height + 15;\n    this.button3.x = this.text3.x - (this.text3.width / 2) - 5;\n    this.button3.y = this.text3.y - (this.text3.height / 2) - 5;\n    this.button3.setInteractive().on('pointerdown', () => {\n      this.scene.start(\"bestscores\");\n    });\n  }\n  \n  update(){\n\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (joinscene);\n\n//# sourceURL=webpack://bignecessaryapplicationsuite/./src/scenes/join.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;