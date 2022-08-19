(()=>{"use strict";const e=5e3,t=32.5;class i extends Phaser.GameObjects.Text{constructor(e,t,i,s,n,o=100,a=!1){n||((n={}).fontFamily="Arial",n.fontSize=30,n.background=255),"fontSize"in n||(n.fontSize=30),super(e,t,i,s,n),a||(this.scrollFactorX=0,this.scrollFactorY=0),this.setDepth(100),this.setOrigin(.5),this.setDepth(o),e.add.existing(this)}setPosition(e,t){this.x=e,this.y=t}}const s=i,n=class{constructor(e,t,i,n,o,a){a||((a={}).fontSize=50,a.fontFamily="Arial",a.background=255),"fontSize"in a||(a.fontSize=50),"fontFamily"in a||(a.fontFamily="Arial"),"background"in a||(a.background=255),this.text=new s(e,t,i,n,{fontSize:a.fontSize,fontFamily:a.fontFamily}).setOrigin(.5),this.button=e.add.rectangle(0,0,0,0,a.background).setDepth(99),this.button.scrollFactorX=0,this.button.scrollFactorY=0,this.button.width=this.text.width+15,this.button.height=this.text.height+15,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",o),e.add.existing(this)}setPosition(e,t){this.text.x=e,this.text.y=t,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5}},o=class{constructor(e,t,i,s,n){this.bar=e.add.rectangle(t,i,100,20,16777215).setDepth(n),this.inside=e.add.rectangle(t,i,s/100*100,20,34047).setDepth(n),e.add.existing(this.bar),e.add.existing(this.inside),e.cam.ignore([this.bar,this.inside])}setData(e,t,i){this.bar.x=e,this.bar.y=t,this.inside.x=e,this.inside.y=t,this.inside.width=this.inside.width=i/100*100}destroy(){this.bar.destroy(),this.inside.destroy()}},a=JSON.parse('{"T":[{"id":0,"size":336,"x":3690,"y":4432,"angle":44},{"id":1,"size":237,"x":1262.5,"y":4872.5,"angle":309},{"id":2,"size":339,"x":685.5,"y":2524.5,"angle":91},{"id":3,"size":384,"x":787,"y":1179,"angle":19},{"id":4,"size":201,"x":579.5,"y":1304.5,"angle":32},{"id":5,"size":558,"x":2916,"y":3319,"angle":149},{"id":6,"size":213,"x":2356.5,"y":803.5,"angle":221},{"id":7,"size":480,"x":433,"y":982,"angle":168},{"id":8,"size":150,"x":2519,"y":4027,"angle":348},{"id":9,"size":426,"x":1674,"y":272,"angle":190},{"id":10,"size":582,"x":2511,"y":2833,"angle":37},{"id":11,"size":234,"x":4272,"y":3622,"angle":50},{"id":12,"size":240,"x":130,"y":3920,"angle":192},{"id":13,"size":417,"x":550.5,"y":1605.5,"angle":195},{"id":14,"size":219,"x":4867.5,"y":4450.5,"angle":179},{"id":15,"size":294,"x":3191,"y":1778,"angle":272},{"id":16,"size":165,"x":2823.5,"y":682.5,"angle":56},{"id":17,"size":201,"x":2582.5,"y":516.5,"angle":140},{"id":18,"size":432,"x":4670,"y":1524,"angle":177},{"id":19,"size":198,"x":4039,"y":3499,"angle":165},{"id":20,"size":258,"x":252,"y":3954,"angle":346},{"id":21,"size":318,"x":4774,"y":4229,"angle":71},{"id":22,"size":561,"x":1527.5,"y":784.5,"angle":102},{"id":23,"size":279,"x":970.5,"y":1196.5,"angle":256},{"id":24,"size":384,"x":319,"y":2260,"angle":41},{"id":25,"size":600,"x":3409,"y":2251,"angle":60},{"id":26,"size":597,"x":2119.5,"y":300.5,"angle":11},{"id":27,"size":198,"x":3422,"y":4858,"angle":246},{"id":28,"size":309,"x":1562.5,"y":3170.5,"angle":86},{"id":29,"size":153,"x":1762.5,"y":3825.5,"angle":63},{"id":30,"size":549,"x":471.5,"y":4032.5,"angle":260},{"id":31,"size":456,"x":3454,"y":4168,"angle":57}]}'),r=JSON.parse('{"K":[{"id":0,"size":154,"x":1192,"y":602,"angle":182},{"id":1,"size":189,"x":3727.5,"y":4887.5,"angle":194},{"id":2,"size":199,"x":2644.5,"y":4668.5,"angle":151},{"id":3,"size":74,"x":3140,"y":4025,"angle":301},{"id":4,"size":191,"x":4830.5,"y":320.5,"angle":40},{"id":5,"size":198,"x":1008,"y":2400,"angle":217},{"id":6,"size":125,"x":2994.5,"y":3416.5,"angle":163},{"id":7,"size":90,"x":1850,"y":1573,"angle":252},{"id":8,"size":91,"x":642.5,"y":2637.5,"angle":161},{"id":9,"size":152,"x":2003,"y":408,"angle":19},{"id":10,"size":125,"x":2574.5,"y":4517.5,"angle":109},{"id":11,"size":135,"x":4063.5,"y":2319.5,"angle":181},{"id":12,"size":194,"x":2497,"y":4431,"angle":339},{"id":13,"size":132,"x":1235,"y":3130,"angle":260},{"id":14,"size":155,"x":1849.5,"y":4761.5,"angle":360},{"id":15,"size":95,"x":3783.5,"y":1869.5,"angle":334},{"id":16,"size":69,"x":984.5,"y":4199.5,"angle":116},{"id":17,"size":105,"x":4397.5,"y":101.5,"angle":83},{"id":18,"size":121,"x":1924.5,"y":2106.5,"angle":267},{"id":19,"size":61,"x":3120.5,"y":4706.5,"angle":40},{"id":20,"size":111,"x":1972.5,"y":2423.5,"angle":106},{"id":21,"size":81,"x":1999.5,"y":1528.5,"angle":35},{"id":22,"size":162,"x":1070,"y":1068,"angle":318},{"id":23,"size":176,"x":308,"y":4842,"angle":224},{"id":24,"size":117,"x":1706.5,"y":4734.5,"angle":226},{"id":25,"size":154,"x":1967,"y":1659,"angle":165},{"id":26,"size":93,"x":4413.5,"y":824.5,"angle":129},{"id":27,"size":114,"x":2424,"y":2504,"angle":111},{"id":28,"size":117,"x":1579.5,"y":4517.5,"angle":224},{"id":29,"size":76,"x":3927,"y":2444,"angle":140},{"id":30,"size":192,"x":2363,"y":2830,"angle":132},{"id":31,"size":105,"x":1839.5,"y":848.5,"angle":244},{"id":32,"size":125,"x":3004.5,"y":2552.5,"angle":245},{"id":33,"size":78,"x":3837,"y":3009,"angle":41}]}'),h=JSON.parse('[{"id":0,"url":"player","cost":0},{"id":1,"url":"skull","cost":1000},{"id":2,"url":"smileyface","cost":200},{"id":3,"url":"target","cost":100},{"id":4,"url":"basketball","cost":500},{"id":5,"url":"sunglasses","cost":2000},{"id":6,"url":"thumbsup","cost":150},{"id":7,"url":"expressionless","cost":200},{"id":8,"url":"magician","cost":800},{"id":9,"url":"lightning","cost":300},{"id":10,"url":"crown","cost":3000},{"id":11,"url":"cap","cost":900}]');class d extends Phaser.Scene{constructor(){super(),this.left=!1,this.right=!1,this.up=!1,this.down=!1,this.leftDown=!1,this.rightDown=!1,this.upDown=!1,this.downDown=!1,this.died=!1}preload(){this.cam=this.cameras.add(this.cameras.main.x,this.cameras.main.y,window.innerWidth,window.innerHeight),this.loadingtext=new s(this,window.innerWidth/2,window.innerHeight/2,"Loading...",{fontSize:100,fontFamily:"Arial"}).setOrigin(.5),this.cameras.main.ignore(this.loadingtext)}create(){this.loaded=!1,this.full_screen=!1,this.url=window.room?"https://blaster2d.ruiwenge2.repl.co":window.chosenServer,this.socket=io(this.url,{closeOnBeforeunload:!1}),this.name=name||localStorage.getItem("name"),this.coins={},this.enemies={},this.bullets={},this.grenades={},this.verified=!1,this.minimap=new class{constructor(t){this.map=t.add.rectangle(window.innerWidth-220,window.innerHeight-220,200,200,0).setDepth(150).setAlpha(.7).setOrigin(0).setStrokeStyle(3,255),this.map.scrollFactorX=0,this.map.scrollFactorY=0,this.players={},this.scale=e/this.map.width,t.cameras.main.ignore(this.map)}show(e){e.add.existing(this.map)}addPlayer(e,i,s,n){if(e.died)return;var o=16711680;i==e.socket.id&&(o=16753920);let a=e.add.circle(this.map.x+s/this.scale,this.map.y+n/this.scale,t/this.scale,o).setDepth(151);a.scrollFactorX=0,a.scrollFactorY=0,e.add.existing(a),this.players[i]=a,e.cameras.main.ignore(a)}removePlayer(e){this.players[e]&&(this.players[e].destroy(),delete this.players[e])}update(e){Object.values(e).forEach((e=>{this.players[e.id].x=this.map.x+e.x/this.scale,this.players[e.id].y=this.map.y+e.y/this.scale}))}resize(){this.map.x=window.innerWidth-220,this.map.y=window.innerHeight-220,Object.values(this.players).forEach((e=>{e.x=this.map.x+e.x/this.scale,e.y=this.map.y+e.y/this.scale}))}destroy(){this.map.destroy(),Object.values(this.players).forEach((e=>{e.destroy()}))}}(this),this.chatbox=new class{constructor(e){this.socket=e.socket,this.on=!0,this.name=e.name,this.focus=!1,this.sent=!1,this.chatbox=document.getElementById("chatbox"),this.input=document.getElementById("chat-input"),this.messages=document.getElementById("messages"),this.chatbox.style.display="block",this.input.addEventListener("keydown",(t=>{if(this.on){if("Enter"==t.key){if(!this.validMessage(this.input.value))return this.sent=!1;this.socket.emit("chat message",this.name,this.input.value,e.room),this.input.value="",this.sent=!0}"Tab"==t.key&&(t.preventDefault(),this.input.blur())}})),this.socket.on("chat message",(e=>{this.on&&(this.messages.innerHTML+=`<p>${this.encodeHTML(e)}</p>`,this.messages.scrollTo(0,this.messages.scrollHeight))})),this.input.onfocus=()=>{this.input.placeholder="Press TAB to exit",this.focus=!0},this.input.onblur=()=>{this.input.placeholder="Press ENTER to chat",this.focus=!1}}encodeHTML(e){var t=document.createElement("div");return t.innerText=e,t.innerHTML}validMessage(e){if(!e)return!1;for(var t of e)if(" "!=t)return!0;return!1}destroy(){this.on=!1,this.chatbox.style.display="none",this.messages.innerHTML="",this.input.value=""}}(this),this.gunType=document.getElementById("gun").value,this.spawned=!1,this.pointerX=window.mouseData.x,this.pointerY=window.mouseData.y,this.shooting=!1,this.shotBefore=!1,this.focus=!0,this.cameras.main.setZoom((window.innerWidth+window.innerHeight)/2200);let i=this;grecaptcha.ready((function(){grecaptcha.execute("6LerbDQhAAAAAFyt22lecnaCm6UmDmRsytTDtD1k",{action:"submit"}).then((function(e){i.socket.emit("join",i.name,i.gunType,e,loggedIn,window.room,window.mouseData.angle),i.verified=!0,document.getElementsByClassName("grecaptcha-badge")[0].style.display="none"}))})),window.addEventListener("resize",(()=>{try{if(!this.loaded)return;this.cameras.main.setZoom((window.innerWidth+window.innerHeight)/2200),this.died?(this.deathtext.x=window.innerWidth/2,this.deathtext.y=window.innerHeight/2-200,this.infotext.x=window.innerWidth/2,this.infotext.y=window.innerHeight/2-100,this.deathRect.x=window.innerWidth/2,this.deathRect.y=window.innerHeight/2,this.playAgain.setPosition(window.innerWidth/2,window.innerHeight/2+100),"main"!=this.room&&(this.switchWeapon.setPosition(window.innerWidth-150,50),this.leaveBtn.setPosition(window.innerWidth-150,110))):(this.socket.emit("resize",{width:window.innerWidth,height:window.innerHeight},this.room),this.scale.resize(window.innerWidth,window.innerHeight),this.fpstext.x=window.innerWidth-150,this.tps.x=window.innerWidth-150,this.ping.x=window.innerWidth-150,this.shield.x=window.innerWidth/2,this.shield_icon.x=window.innerWidth/2-50,this.reloading.x=window.innerWidth-300,this.reloading.y=window.innerHeight-120,this.shots.x=window.innerWidth-310,this.shots.y=window.innerHeight-80,this.bullet_icon.x=window.innerWidth-295,this.bullet_icon.y=window.innerHeight-95,this.grenadesText.x=window.innerWidth-320,this.grenadesText.y=window.innerHeight-40,this.grenade_icon.x=window.innerWidth-295,this.grenade_icon.y=window.innerHeight-55,this.minimap.resize()),this.killText&&(this.killText.x=window.innerWidth/2,this.killText.y=window.innerHeight-90),this.arrowLeft&&(this.arrowLeft.setPosition(window.innerWidth-150,window.innerHeight-400),this.arrowRight.setPosition(window.innerWidth-50,window.innerHeight-400),this.arrowUp.setPosition(window.innerWidth-100,window.innerHeight-450),this.arrowDown.setPosition(window.innerWidth-100,window.innerHeight-350))}catch(e){console.log(e)}}));const n=function(){i.loaded||(window.error={message:"Failed to join server\n\nTry again or choose a different server",reload:!1},i.scene.start("disconnect_scene"),document.body.removeAttribute("onbeforeunload"),i.chatbox.destroy(),window.rejoin=!1)};this.socket.on("connect_error",n),this.socket.on("connect_failed",n),this.socket.on("kick",((e,t)=>{window.error={message:e,reload:t},i.scene.start("disconnect_scene"),document.body.removeAttribute("onbeforeunload"),i.chatbox.destroy(),window.rejoin=!1})),this.socket.on("roomdata",(e=>{this.focus=!1,promptmodal("","Copy the link and share with your friends to play!","Copy",!0,`https://${location.host}/?code=${e}`,!0).then((e=>{navigator.clipboard.writeText(e),this.focus=!0}))})),this.socket.on("gamedata",((e,i)=>{try{this.loaded=!0,this.room=i,this.loadingtext.destroy(),this.name=e.players[this.socket.id].name,"https://blaster2d.ruiwenge2.repl.co"!=this.url&&io("https://blaster2d.ruiwenge2.repl.co").emit("join server 2",this.name),this.player=this.physics.add.sprite(e.players[this.socket.id].x,e.players[this.socket.id].y,`skin_${e.players[this.socket.id].skin}`).setScale(.65,.65).setDepth(2).setAlpha(.5),this.bar=new o(this,this.player.x,this.player.y-t-20,100,2),this.nametext=new s(this,this.player.x,this.player.y+t+20,this.name,{fontSize:20,fontFamily:"sans-serif",color:loggedIn?"blue":"white"},2,!0),this.playerstext=this.add.rexBBCodeText(20,20,"",{fontSize:22,fontFamily:"Arial"}).setOrigin(0).setDepth(100),this.playerstext.scrollFactorX=0,this.playerstext.scrollFactorY=0,this.scorestext=new s(this,250,20,"",{fontSize:22,fontFamily:"Arial"}).setOrigin(0),this.fpstext=new s(this,window.innerWidth-150,50,"FPS: 60",{fontSize:25,fontFamily:"copperplate"}),this.tps=new s(this,window.innerWidth-150,80,"TPS: 30",{fontSize:25,fontFamily:"copperplate"}),this.ping=new s(this,window.innerWidth-150,110,"Ping: 0 ms",{fontSize:25,fontFamily:"copperplate"}),this.reloading=new s(this,window.innerWidth-300,window.innerHeight-120,"",{fontSize:30,fontFamily:"Arial"}).setOrigin(1),this.shots=new s(this,window.innerWidth-310,window.innerHeight-80,"",{fontSize:30,fontFamily:"Arial"}).setOrigin(1),this.bullet_icon=this.add.image(window.innerWidth-295,window.innerHeight-95,"bullet_icon").setDepth(100).setScale(.75,.75),this.bullet_icon.scrollFactorX=0,this.bullet_icon.scrollFactorY=0,this.grenadesText=new s(this,window.innerWidth-320,window.innerHeight-40,"",{fontSize:30,fontFamily:"Arial"}).setOrigin(1),this.grenade_icon=this.add.image(window.innerWidth-295,window.innerHeight-55,"grenade_icon").setDepth(100).setScale(.75,.75),this.grenade_icon.scrollFactorX=0,this.grenade_icon.scrollFactorY=0,this.shield=new s(this,window.innerWidth/2,50,"",{fontSize:40,fontFamily:"Arial"}),this.shield_icon=this.add.image(window.innerWidth/2-50,50,"shield_icon").setDepth(100).setScale(.5,.5),this.shield_icon.scrollFactorX=0,this.shield_icon.scrollFactorY=0,this.shield_icon.visible=!1,this.cameras.main.ignore([this.playerstext,this.scorestext,this.fpstext,this.tps,this.ping,this.reloading,this.shots,this.bullet_icon,this.grenadesText,this.grenade_icon,this.shield,this.shield_icon]),this.cam.ignore([this.player,this.nametext]),this.playerInfo={x:this.player.x,y:this.player.y},this.cameras.main.startFollow(this.player),this.minimap.show(this),this.minimap.addPlayer(this,this.socket.id,e.players[this.socket.id].x,e.players[this.socket.id].y),this.data={x:e.players[this.socket.id].x,y:e.players[this.socket.id].y,angle:0,angle2:0};for(let t of Object.values(e.coins)){let e={coin:this.add.image(t.x,t.y,"coin").setScale(.75,.75).setDepth(.99),id:t.id};this.cam.ignore(e.coin),this.coins[t.id]=e}for(let e of a.T){let t=this.add.image(e.x,e.y,"tree").setScale(e.size/300).setDepth(10).setAlpha(.7);t.id=e.id,t.angle=e.angle,this.cam.ignore(t)}for(let e of r.K){let t=this.add.image(e.x,e.y,"rock").setScale(e.size/100).setDepth(.5);t.id=e.id,t.angle=e.angle,this.cam.ignore(t)}for(let t of Object.keys(e.players))t!=this.socket.id&&(this.addPlayer(e.players[t]),this.minimap.addPlayer(this,e.players[t].id,e.players[t].x,e.players[t].y));Object.values(e.bullets).forEach((e=>{let t=this.add.image(e.x,e.y,"bullet").setScale(.5,2).setDepth(.999);t.angle=e.angle,t.shooter=e.shooter,t.id=e.id,this.bullets[e.id]=t,this.cam.ignore(t)})),Object.values(e.grenades).forEach((e=>{let t=this.add.image(e.x,e.y,"grenade").setDepth(1).setScale(.75,.75);t.thrower=e.throwerId,t.id=e.id,this.grenades[e.id]=t,this.cam.ignore(t)})),this.main()}catch(e){console.log(e)}})),this.socket.on("new player",(e=>{this.verified&&(this.addPlayer(e),this.minimap.addPlayer(this,e.id,e.x,e.y))})),this.socket.on("collected coin",((e,t)=>{try{if(!this.verified)return;let i;i=t==this.socket.id?this.player:this.enemies[t].player;let s=this.coins[e];this.tweens.add({targets:s.coin,x:i.x,y:i.y,duration:75,onComplete:function(){s.coin.destroy()}})}catch(e){console.log(e)}})),this.socket.on("new coin",(e=>{try{let t={coin:this.add.image(e.x,e.y,"coin").setScale(.75,.75).setDepth(.99),id:e.id};this.coins[e.id]=t,this.cam.ignore(t.coin)}catch(e){console.log(e)}})),this.socket.on("tps",(e=>{if(!this.died)try{this.tps.setText("TPS: "+e);let t=Date.now();this.socket.emit("get_ping",(()=>{this.ping.setText(`Ping: ${Date.now()-t} ms`)}))}catch(e){console.log(e)}})),this.socket.on("left",(e=>{try{this.enemies[e].player.destroy(),this.enemies[e].gun.destroy(),this.enemies[e].healthbar.destroy(),this.enemies[e].nametext.destroy(),delete this.enemies[e],this.minimap.removePlayer(e)}catch(e){console.log(e)}})),this.socket.on("leave",(()=>{this.chatbox.destroy(),window.error={message:"You got disconnected",reload:!1},this.scene.start("disconnect_scene"),window.rejoin=!1}))}main(){this.w=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W,!1),this.a=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A,!1),this.s=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S,!1),this.d=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D,!1);var t=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L,!1),i=(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE,!1),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER,!1)),o=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R,!1),a=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F,!1),r=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.G,!1),h=this;t.on("down",(function(){h.chatbox.focus||confirmmodal("","Are you sure you want to exit the game?","Exit").then((()=>{h.scene.start("blank"),document.querySelector("canvas").style.display="none",h.chatbox.destroy(),document.querySelector("main").style.display="block",h.socket.emit("leaveGame"),document.getElementsByClassName("grecaptcha-badge")[0].style.display="block",h.died=!1,getServerData(),window.rejoin=!1,document.body.style.cursor="auto",document.body.removeAttribute("onbeforeunload")}))})),i.on("down",(function(){if(h.chatbox.sent)return h.chatbox.sent=!1,h.chatbox.input.blur();h.chatbox.focus||h.chatbox.input.focus()})),o.on("down",(function(){h.chatbox.focus||h.socket.emit("reload",h.room)})),a.on("down",(function(){if(!h.chatbox.focus)if(this.full_screen)document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen(),this.full_screen=!1;else{let e=document.body;e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this.full_screen=!0}})),r.on("down",(function(){if(h.chatbox.focus)return;let e=Math.atan2(h.pointerY-window.innerHeight/2,h.pointerX-window.innerWidth/2);h.socket.emit("throw",e,h.room)})),this.background=this.add.tileSprite(0,0,e,e,"grass").setOrigin(0).setDepth(0),this.cam.ignore(this.background),(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})()&&(this.arrowLeft=this.add.image(window.innerWidth-150,window.innerHeight-400,"arrow").setAngle(270).setInteractive().on("pointerdown",(()=>{this.leftDown=!0})).on("pointerup",(()=>{this.leftDown=!1})).setScrollFactor(0,0).setDepth(100).setScale(.7),this.arrowRight=this.add.image(window.innerWidth-50,window.innerHeight-400,"arrow").setAngle(90).setInteractive().on("pointerdown",(()=>{this.rightDown=!0})).on("pointerup",(()=>{this.rightDown=!1})).setScrollFactor(0,0).setDepth(100).setScale(.7),this.arrowUp=this.add.image(window.innerWidth-100,window.innerHeight-450,"arrow").setAngle(0).setInteractive().on("pointerdown",(()=>{this.upDown=!0})).on("pointerup",(()=>{this.upDown=!1})).setScrollFactor(0,0).setDepth(100).setScale(.7),this.arrowDown=this.add.image(window.innerWidth-100,window.innerHeight-350,"arrow").setAngle(180).setInteractive().on("pointerdown",(()=>{this.downDown=!0})).on("pointerup",(()=>{this.downDown=!1})).setScrollFactor(0,0).setDepth(100).setScale(.7),this.cameras.main.ignore([this.arrowLeft,this.arrowRight,this.arrowUp,this.arrowDown])),this.gun=this.physics.add.sprite(this.player.x,this.player.y,"gun").setDepth(2),this.gun.angle2=window.angle||0,this.gun.angle=(180*this.gun.angle2/Math.PI+360)%360,this.player.angle=this.gun.angle,this.cam.ignore(this.gun),this.health=100,this.score=0,this.addWeaponActions(),this.socket.on("gamestate",(e=>{try{if(!this.verified)return;if(this.socket.disconnected)return this.chatbox.destroy(),window.error={message:"You got disconnected",reload:!1},this.scene.start("disconnect_scene"),void(window.rejoin=!1);let t=this;if(!this.died){let i=e.players[this.socket.id];this.playerInfo.x=i.x,this.playerInfo.y=i.y,this.shots.setText(`${i.shots}/${i.shotsLeft}`),this.grenadesText.setText(i.grenades),i.reloading?(this.reloading.setText("Reloading..."),this.gun.visible=!1):(this.reloading.setText(""),this.gun.visible=!0),i.shots||i.shotsLeft?this.shots.setTint(16777215):this.shots.setTint(16711680),i.grenades?this.grenadesText.setTint(16777215):this.grenadesText.setTint(16711680),i.shield?(this.shield.setText(i.shield.timeleft),this.player.setTint(16711680),this.shield_icon.visible=!0):(this.shield.setText(""),this.player.setTint(16777215),this.shield_icon.visible=!1),i.spawned&&!this.spawned&&this.player.setAlpha(1),this.tweens.add({targets:this.player,x:this.playerInfo.x,y:this.playerInfo.y,duration:100}),this.tweens.addCounter({from:this.health,to:i.health,duration:1e3/30,onUpdate:function(e){try{t.health=e.getValue()}catch(e){console.log(e)}}})}if(Object.values(e.players).forEach((e=>{e.id!=this.socket.id&&(e.spawned&&!this.enemies[e.id].spawned&&(this.enemies[e.id].player.setAlpha(1),this.enemies[e.id].spawned=!0),e.reloading?this.enemies[e.id].gun.visible=!1:this.enemies[e.id].gun.visible=!0,e.shield?this.enemies[e.id].player.setTint(16711680):this.enemies[e.id].player.setTint(16777215),this.tweens.add({targets:[this.enemies[e.id].player],x:e.x,y:e.y,duration:100,onUpdate:function(){let i=t.enemies[e.id];i&&(i.gun.x=i.player.x+61.5*Math.cos(e.angle2),i.gun.y=i.player.y+61.5*Math.sin(e.angle2),i.gun.angle=e.angle,i.player.angle=e.angle)}}),this.tweens.addCounter({from:this.enemies[e.id].health,to:e.health,duration:1e3/30,onUpdate:function(i){try{t.enemies[e.id].health=i.getValue()}catch(e){console.log(e)}}}))})),Object.values(e.bullets).forEach((t=>{this.tweens.add({targets:[this.bullets[t.id]],x:e.bullets[t.id].x,y:e.bullets[t.id].y,duration:1e3/30})})),Object.values(e.grenades).forEach((t=>{this.tweens.add({targets:[this.grenades[t.id]],x:e.grenades[t.id].x,y:e.grenades[t.id].y,duration:1e3/30})})),this.died)return;this.minimap.update(e.players)}catch(e){console.log(e)}})),this.socket.on("new bullet",((e,t)=>{try{if(!this.verified)return;let i=this.add.image(t.x,t.y,"bullet").setScale(.5,2).setDepth(.999);i.angle=t.angle,i.shooter=t.shooter,i.id=e,this.bullets[e]=i,this.cam.ignore(i)}catch(e){console.log(e)}})),this.socket.on("removed bullet",(e=>{try{if(!this.verified)return;this.bullets[e].destroy(),delete this.bullets[e]}catch(e){console.log(e)}})),this.socket.on("new grenade",((e,t)=>{try{if(!this.verified)return;let e=this.add.image(t.x,t.y,"grenade").setDepth(1).setScale(.75,.75);e.thrower=t.throwerId,e.id=t.id,this.grenades[t.id]=e,this.cam.ignore(e)}catch(e){console.log(e)}})),this.socket.on("explosion",(e=>{try{let i=this;if(!this.verified)return;var t=this.add.image(this.grenades[e].x,this.grenades[e].y,"explosion").setAlpha(0).setDepth(15).setScale(0,0);this.cam.ignore(t),this.tweens.add({targets:t,duration:300,alpha:.7,scaleX:1.5,scaleY:1.5,onComplete:function(){setTimeout((()=>{i.tweens.add({targets:t,duration:750,alpha:0,onComplete:function(){t.destroy()}})}),2e3)}}),this.grenades[e].destroy(),delete this.grenades[e]}catch(e){console.log(e)}})),this.socket.on("player died",((e,t,i)=>{try{if(!this.verified)return;let a=this;if(e!=this.socket.id)var o=this.enemies[e].name;e==this.socket.id?(this.died=!0,this.gun.destroy(),this.bar.destroy(),this.nametext.destroy(),this.tweens.add({targets:[this.player],duration:1e3,alpha:0,onComplete:function(){a.player.destroy(),a.nametext.destroy(),a.playerstext.destroy(),a.scorestext.destroy(),a.fpstext.destroy(),a.tps.destroy(),a.ping.destroy(),a.minimap.destroy(),a.chatbox.destroy(),a.reloading.destroy(),a.shots.destroy(),a.bullet_icon.destroy(),a.grenadesText.destroy(),a.grenade_icon.destroy(),a.shield.destroy(),a.arrowLeft&&(a.arrowLeft.destroy(),a.arrowRight.destroy(),a.arrowUp.destroy(),a.arrowDown.destroy()),a.deathtext=new s(a,window.innerWidth/2,window.innerHeight/2-200,"You died",{fontSize:50}).setDepth(101).setAlpha(0),a.infotext=new s(a,window.innerWidth/2,window.innerHeight/2-100,`Killed By: ${i}\n\nKill Streak: ${a.score}`,{fontSize:30}).setDepth(101).setAlpha(0),a.deathRect=a.add.rectangle(window.innerWidth/2,window.innerHeight/2,600,500,237136).setOrigin(.5).setAlpha(0).setDepth(100),a.deathRect.scrollFactorX=0,a.deathRect.scrollFactorY=0,a.deathRect.setStrokeStyle(5,0),a.playAgain=new n(a,window.innerWidth/2,window.innerHeight/2+100,"Play Again",(function(){window.removeEventListener("mousedown",a.shoot),window.removeEventListener("touchstart",a.shoot),window.removeEventListener("mouseup",a.shootEnd),window.removeEventListener("touchend",a.shootEnd),window.removeEventListener("touchcancel",a.shootEnd),window.removeEventListener("mousemove",a.pointerMove),window.removeEventListener("touchmove",a.pointerMove),document.querySelector("canvas").style.display="none",document.querySelector("main").style.display="block",document.getElementsByClassName("grecaptcha-badge")[0].style.display="block",a.died=!1,a.socket.disconnect(),getServerData(),document.body.style.cursor="auto",document.body.removeAttribute("onbeforeunload"),"main"==a.room?(window.rejoin=!1,a.scene.start("blank")):(window.rejoin=a.room,document.getElementById("playbtn").click())}),{background:226559}),a.playAgain.text.setDepth(102).setAlpha(0),a.playAgain.button.setDepth(101).setAlpha(0),a.cameras.main.ignore([a.deathtext,a.infotext,a.deathRect,a.playAgain.text,a.playAgain.button]),"main"!=a.room&&(a.switchWeapon=new n(a,window.innerWidth-150,50,"Switch Weapon",(function(){selectmodal("Switch Weapon","Choose a weapon: ",{pistol:"Pistol",sniper:"Sniper",machineGun:"Machine Gun"},document.getElementById("gun").value).then((e=>{document.getElementById("gun").value=e}))}),{fontSize:30}),a.switchWeapon.text.setDepth(102).setAlpha(0),a.switchWeapon.button.setDepth(101).setAlpha(0),a.leaveBtn=new n(a,window.innerWidth-150,110,"Leave",(function(){a.scene.start("blank"),document.querySelector("canvas").style.display="none",document.querySelector("main").style.display="block",document.getElementsByClassName("grecaptcha-badge")[0].style.display="block",a.socket.disconnect(),getServerData(),document.body.style.cursor="auto",window.rejoin=!1,a.died=!1,document.body.removeAttribute("onbeforeunload")}),{fontSize:30}),a.leaveBtn.text.setDepth(102).setAlpha(0),a.leaveBtn.button.setDepth(101).setAlpha(0),a.cameras.main.ignore([a.switchWeapon.text,a.switchWeapon.button,a.leaveBtn.text,a.leaveBtn.button])),a.enemies[t]&&a.cameras.main.startFollow(a.enemies[t].player),a.tweens.add({targets:a.deathRect,duration:300,alpha:.5}),a.tweens.add({targets:[a.deathtext,a.infotext,a.playAgain.text,a.playAgain.button],duration:300,alpha:1}),"main"!=a.room&&a.tweens.add({targets:[a.switchWeapon.text,a.switchWeapon.button,a.leaveBtn.text,a.leaveBtn.button],duration:300,alpha:1})}})):(this.enemies[e].gun.destroy(),this.enemies[e].healthbar.destroy(),this.enemies[e].nametext.destroy(),this.tweens.add({targets:[this.enemies[e].player],duration:1e3,alpha:0,onComplete:function(){a.enemies[e]&&(a.enemies[e].player.destroy(),delete a.enemies[e],a.minimap.removePlayer(e))}})),t==this.socket.id?(this.score++,this.killText?this.killText.setText(`You killed ${o||this.name}\n\nKill Streak: ${this.score}`):(this.killText=new s(this,window.innerWidth/2,window.innerHeight-90,`You killed ${o||this.name}\n\nKill Streak: ${this.score}`,{fontSize:30}),this.cameras.main.ignore(this.killText)),setTimeout((()=>{this.killText.destroy(),this.killText=void 0}),4e3)):this.enemies[t].score++}catch(e){console.log(e)}}))}addPlayer(e){var i=.5,n=!1;e.spawned&&(i=1,n=!0);var a={id:e.id,x:e.x,y:e.y,name:e.name,player:this.add.image(e.x,e.y,`skin_${e.skin}`).setScale(.65,.65).setDepth(1).setAlpha(i),nametext:new s(this,e.x,e.y+t+20,e.name,{fontSize:20,fontFamily:"sans-serif",color:e.bot?"red":e.account?"blue":"white"},1,!0),healthbar:new o(this,e.x,e.y-t-20,100,1),gun:this.add.image(e.x+61.5*Math.cos(e.angle2),e.y+61.5*Math.sin(e.angle2),"gun").setDepth(1.1),angle:null,health:100,score:e.score,spawned:n,bot:e.bot,account:e.account};this.enemies[e.id]=a,this.cam.ignore([a.player,a.nametext,a.gun])}addWeaponActions(){this.shoot=e=>{try{if(this.died||this.socket.disconnected)return;let i=e.clientX||e.touches[0].clientX,s=e.clientY||e.touches[0].clientY;this.shooting=!0;var t=Math.atan2(s-window.innerHeight/2,i-window.innerWidth/2);this.gun.angle=(180*t/Math.PI+360)%360,this.gun.angle2=t,this.pointerX=i,this.pointerY=s}catch(e){console.log(e)}},this.shootEnd=()=>{try{if(this.died||this.socket.disconnected)return;this.shooting=!1,this.shotBefore=!1,this.arrowLeft&&(this.leftDown=!1,this.rightDown=!1,this.upDown=!1,this.downDown=!1)}catch(e){console.log(e)}},this.pointerMove=e=>{try{if(this.died||this.socket.disconnected)return;let i=e.clientX||e.touches[0].clientX,s=e.clientY||e.touches[0].clientY;var t=Math.atan2(s-window.innerHeight/2,i-window.innerWidth/2);this.gun.angle=(180*t/Math.PI+360)%360,this.gun.angle2=t,this.pointerX=i,this.pointerY=s}catch(e){console.log(e)}},window.addEventListener("mousedown",this.shoot),window.addEventListener("touchstart",this.shoot),window.addEventListener("mouseup",this.shootEnd),window.addEventListener("touchend",this.shootEnd),window.addEventListener("touchcancel",this.shootEnd),window.addEventListener("mousemove",this.pointerMove),window.addEventListener("touchmove",this.pointerMove)}update(){if(!this.loaded)return;if(!this.verified)return;if(this.socket.disconnected)return this.chatbox.destroy(),window.error={message:"You got disconnected",reload:!1},this.scene.start("disconnect_scene"),void(window.rejoin=!1);if(Object.values(this.enemies).forEach((e=>{e.healthbar.setData(e.player.x,e.player.y-t-20,e.health),e.nametext.setPosition(e.player.x,e.player.y+t+20)})),this.died)return;this.bar.setData(this.player.x,this.player.y-t-20,this.health),this.nametext.setPosition(this.player.x,this.player.y+t+20),Array.prototype.insert=function(e,t){this.splice(e,0,t)};let e=[...Object.values(this.enemies)],i={};e.insert(0,{score:this.score,name:this.name,bot:!1,account:loggedIn});let s=e.sort((function(e,t){return t.score-e.score})),n="",o="";for(let e of s)n+=`[color=${e.bot?"red":e.account?"blue":"white"}]${e.name}[/color]\n`,o+=e.score+"\n";this.playerstext.setText(n),this.scorestext.setText(o);for(let e of Object.keys(i))this.playerstext.addColor(i[e],e);if(this.fpstext.setText("FPS: "+Math.round(this.sys.game.loop.actualFps)),this.shooting&&!this.chatbox.focus&&!this.died&&(!this.shotBefore||"machineGun"==this.gunType)&&this.focus&&!this.leftDown&&!this.rightDown&&!this.upDown&&!this.downDown){var a=Math.atan2(this.pointerY-window.innerHeight/2,this.pointerX-window.innerWidth/2);this.socket.emit("shoot",a,this.room),this.shotBefore=!0}let r=this.input.keyboard.createCursorKeys();this.chatbox.focus||(r.left.isDown||this.a.isDown||this.leftDown?this.left||(this.socket.emit("movement","left",this.room),this.left=!0,this.right=!1):this.left&&(this.socket.emit("movement_end","left",this.room),this.left=!1),r.right.isDown||this.d.isDown||this.rightDown?this.right||(this.socket.emit("movement","right",this.room),this.right=!0,this.left=!1):this.right&&(this.socket.emit("movement_end","right",this.room),this.right=!1),r.up.isDown||this.w.isDown||this.upDown?this.up||(this.socket.emit("movement","up",this.room),this.up=!0,this.down=!1):this.up&&(this.socket.emit("movement_end","up",this.room),this.up=!1),r.down.isDown||this.s.isDown||this.downDown?this.down||(this.socket.emit("movement","down",this.room),this.down=!0,this.up=!1):this.down&&(this.socket.emit("movement_end","down",this.room),this.down=!1)),this.gun.x=this.player.x+61.5*Math.cos(this.gun.angle2),this.gun.y=this.player.y+61.5*Math.sin(this.gun.angle2),this.player.angle=this.gun.angle,this.player.angle!=this.data.angle&&(this.data.angle=this.gun.angle,this.data.angle2=this.gun.angle2,this.socket.emit("player angle",this.data,this.room))}}const l=d;class c extends Phaser.Scene{constructor(){super()}preload(){for(let e of Object.keys(h))this.load.image(`skin_${h[e].url}`,`/img/skins/${h[e].url}.png`);this.load.image("skin_botplayer","/img/skins/bot.png"),this.load.image("coin","/img/gameObjects/coin.png"),this.load.image("grass","/img/gameObjects/tile.png"),this.load.image("bullet","/img/gameObjects/bullet.png"),this.load.image("gun","/img/gameObjects/gun.png"),this.load.image("obstacle","/img/gameObjects/obstacle.png"),this.load.image("obstacle2","/img/gameObjects/obstacle2.png"),this.load.image("tree","/img/gameObjects/tree.png"),this.load.image("rock","/img/gameObjects/rock.png"),this.load.image("bullet_icon","/img/gameObjects/bullet_icon.png"),this.load.image("shield_icon","/img/gameObjects/shield_icon.png"),this.load.image("grenade_icon","/img/gameObjects/grenade_icon.png"),this.load.image("arrow","/img/gameObjects/arrow.png"),this.load.image("grenade","/img/gameObjects/grenade.png"),this.load.image("explosion","/img/gameObjects/explosion.png"),this.load.plugin("rexbbcodetextplugin","https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js",!0)}create(){}update(){}}const g=c;class u extends Phaser.Scene{constructor(){super()}preload(){}create(){}update(){}}const w=u;class m extends Phaser.Scene{constructor(){super()}preload(){}create(){this.disconnecttext=new s(this,window.innerWidth/2,100,window.error.message,{fontSize:30,fontFamily:"Arial"}).setOrigin(.5),this.button=new n(this,window.innerWidth/2,window.innerHeight/2,window.error.reload?"Reload":"OK",(()=>{window.error.reload?location.reload():(this.scene.start("load"),document.querySelector("main").style.display="block",document.querySelector("canvas").style.display="none",document.getElementsByClassName("grecaptcha-badge")[0].style.display="block",document.body.style.cursor="auto")}))}update(){}}const y=m;window.room=!1,window.rejoin=!1,window.started=!1,window.mouseData={x:window.innerWidth/2,y:window.innerHeight/2,angle:0},document.addEventListener("click",(function(e){window.mouseData.x=e.clientX,window.mouseData.y=e.clientY,window.angle=Math.atan2(e.clientY-window.innerHeight/2,e.clientX-window.innerWidth/2)}));const p={type:Phaser.AUTO,width:window.innerWidth,height:window.innerHeight,backgroundColor:"#000000",physics:{default:"arcade",arcade:{gravity:{y:0},debug:!1}}},x=new Phaser.Game(p);function b(){document.querySelector("canvas").style.display="block";let e=document.getElementById("input").value;e.replace(/\s/g,"")?(loggedIn?localStorage.setItem("name",""):localStorage.setItem("name",e),"auto"==document.getElementById("server").value?localStorage.setItem("server","auto"):(window.chosenServer=document.getElementById("server").value,localStorage.setItem("server",window.chosenServer)),localStorage.setItem("gun",document.getElementById("gun").value),window.started=!0,document.body.style.cursor="crosshair",window.addEventListener("resize",(()=>{x.scale.resize(window.innerWidth,window.innerHeight)})),document.querySelector("main").style.display="none",document.querySelector("p").style.display="none",x.scene.start("gamescene"),document.body.setAttribute("onbeforeunload","return ''")):document.querySelector("p").style.display="block"}x.scene.add("load",g),x.scene.add("blank",w),x.scene.add("gamescene",l),x.scene.add("disconnect_scene",y),x.scene.start("load"),window.addEventListener("resize",(function(){p.width=window.innerWidth,p.height=window.innerHeight})),localStorage.getItem("name")&&!loggedIn&&(document.getElementById("input").value=localStorage.getItem("name")),loggedIn&&localStorage.setItem("name",""),localStorage.getItem("server")&&(document.getElementById("server").value=localStorage.getItem("server")),localStorage.getItem("gun")&&(document.getElementById("gun").value=localStorage.getItem("gun")),document.getElementById("playbtn").addEventListener("click",(function(){window.rejoin?window.room={mode:"join",code:window.rejoin}:window.room=!1,b()})),document.getElementById("createbtn").addEventListener("click",(function(){window.room={mode:"create"},b()})),document.getElementById("joinbtn").addEventListener("click",(function(){let e;e=autojoin?promptmodal("","Enter room code to join:","Join",!0,autojoin):promptmodal("","Enter room code to join:","Join"),e.then((e=>{document.getElementById("input").value.replace(/\s/g,"")?(window.room={mode:"join",code:e},b()):promptmodal("","Enter your name: ","OK",!0).then((t=>{document.getElementById("input").value=t,window.room={mode:"join",code:e},b()}))}))})),document.getElementById("howtoplay").addEventListener("click",(function(){alertmodal("How To Play",'<p style="font-size: 18px">\n  - WASD/Arrow keys to move<br>\n  <br>- Click to shoot<br>\n  <br>- Press R to reload gun, and G to throw grenade<br>\n  <br>- Press ENTER to chat<br>\n  <br>- Press F for fullscreen, and L to leave game<br>\n  <br>- Collect the gold for ammo<br>\n  <br>- Kill as many players as you can<br>\n  <br>Happy playing!</p>',"OK",!0).then((()=>{}))})),autojoin&&document.getElementById("joinbtn").click();const f={1:{url:"https://blaster2d.ruiwenge2.repl.co",num:1},2:{url:"https://blaster2d.herokuapp.com",num:2}};async function v(e){try{let t=f[e].url,i=await fetch(t+"/stats"),s=await i.json();return document.getElementById("server"+e).innerHTML=`Server ${e} (${s.tps} TPS)`,console.log(t,": ",s.tps),f[e].tps=s.tps,s.tps}catch(t){console.log(t),document.getElementById("server"+e).innerHTML=`Server ${e} (offline)`,f[e].tps=0}}window.getServerData=()=>{v(1).then((()=>{v(2).then((()=>{let e=Object.values(f);e=e.sort((function(e,t){return t.tps-e.tps})),window.started||(document.getElementById("autoserver").innerHTML=`Auto (Server ${e[0].num})`,"auto"==document.getElementById("server").value&&(window.chosenServer=e[0].url))}))}))},getServerData()})();