(()=>{"use strict";const e=5e3,t=32.5;class i extends Phaser.GameObjects.Text{constructor(e,t,i,s,n,o=100,a=!1){n||((n={}).fontFamily="Arial",n.fontSize=30,n.background=255),"fontSize"in n||(n.fontSize=30),super(e,t,i,s,n),a||(this.scrollFactorX=0,this.scrollFactorY=0),this.setDepth(100),this.setOrigin(.5),this.setDepth(o),e.add.existing(this)}setPosition(e,t){this.x=e,this.y=t}}const s=i,n=class{constructor(e,t,i,n,o,a){a||((a={}).fontSize=50,a.fontFamily="Arial",a.background=255),"fontSize"in a||(a.fontSize=50),"fontFamily"in a||(a.fontFamily="Arial"),"background"in a||(a.background=255),this.text=new s(e,t,i,n,{fontSize:a.fontSize,fontFamily:a.fontFamily}).setOrigin(.5),this.button=e.add.rectangle(0,0,0,0,a.background).setDepth(99),this.button.scrollFactorX=0,this.button.scrollFactorY=0,this.button.width=this.text.width+15,this.button.height=this.text.height+15,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",o),e.add.existing(this)}setPosition(e,t){this.text.x=e,this.text.y=t,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5}},o=class{constructor(e,t,i,s,n){this.bar=e.add.rectangle(t,i,100,20,16777215).setDepth(n),this.inside=e.add.rectangle(t,i,s/100*100,20,34047).setDepth(n),e.add.existing(this.bar),e.add.existing(this.inside)}setData(e,t,i){this.bar.x=e,this.bar.y=t,this.inside.x=e,this.inside.y=t,this.inside.width=this.inside.width=i/100*100}destroy(){this.bar.destroy(),this.inside.destroy()}},a=JSON.parse('{"T":[{"id":0,"size":576,"x":3985,"y":1126,"angle":175},{"id":1,"size":423,"x":4783.5,"y":1563.5,"angle":206},{"id":2,"size":279,"x":367.5,"y":1010.5,"angle":310},{"id":3,"size":264,"x":1143,"y":3107,"angle":305},{"id":4,"size":384,"x":4233,"y":1235,"angle":294},{"id":5,"size":540,"x":325,"y":4273,"angle":332},{"id":6,"size":324,"x":4672,"y":1692,"angle":158},{"id":7,"size":381,"x":2755.5,"y":2820.5,"angle":102},{"id":8,"size":381,"x":3038.5,"y":1333.5,"angle":333},{"id":9,"size":375,"x":2325.5,"y":3962.5,"angle":168},{"id":10,"size":348,"x":3942,"y":1200,"angle":177},{"id":11,"size":294,"x":1189,"y":4250,"angle":144},{"id":12,"size":528,"x":1724,"y":4235,"angle":194},{"id":13,"size":195,"x":641.5,"y":1841.5,"angle":132},{"id":14,"size":390,"x":1035,"y":310,"angle":336},{"id":15,"size":213,"x":2123.5,"y":4393.5,"angle":70},{"id":16,"size":333,"x":836.5,"y":4239.5,"angle":54},{"id":17,"size":468,"x":1834,"y":2573,"angle":225},{"id":18,"size":459,"x":2332.5,"y":1268.5,"angle":175},{"id":19,"size":552,"x":4403,"y":390,"angle":127},{"id":20,"size":240,"x":2744,"y":4120,"angle":300},{"id":21,"size":351,"x":1183.5,"y":1256.5,"angle":199},{"id":22,"size":237,"x":2452.5,"y":4471.5,"angle":279},{"id":23,"size":240,"x":1609,"y":1864,"angle":197},{"id":24,"size":243,"x":4498.5,"y":4333.5,"angle":169},{"id":25,"size":546,"x":805,"y":3305,"angle":234},{"id":26,"size":369,"x":640.5,"y":1484.5,"angle":235},{"id":27,"size":453,"x":1204.5,"y":3472.5,"angle":180},{"id":28,"size":552,"x":1813,"y":3222,"angle":65},{"id":29,"size":414,"x":3379,"y":2629,"angle":201},{"id":30,"size":153,"x":3743.5,"y":3468.5,"angle":143},{"id":31,"size":579,"x":3095.5,"y":2582.5,"angle":333},{"id":32,"size":174,"x":2469,"y":3503,"angle":172},{"id":33,"size":339,"x":411.5,"y":4400.5,"angle":198},{"id":34,"size":489,"x":4164.5,"y":3071.5,"angle":351},{"id":35,"size":189,"x":4819.5,"y":212.5,"angle":167},{"id":36,"size":567,"x":1672.5,"y":2857.5,"angle":292},{"id":37,"size":186,"x":4358,"y":1257,"angle":11},{"id":38,"size":186,"x":4669,"y":3182,"angle":254},{"id":39,"size":552,"x":3384,"y":667,"angle":314},{"id":40,"size":531,"x":2407.5,"y":3444.5,"angle":85},{"id":41,"size":456,"x":4548,"y":3396,"angle":92},{"id":42,"size":282,"x":4243,"y":2060,"angle":144},{"id":43,"size":588,"x":1749,"y":1870,"angle":92},{"id":44,"size":582,"x":359,"y":3116,"angle":29},{"id":45,"size":564,"x":1067,"y":1963,"angle":79},{"id":46,"size":273,"x":4299.5,"y":511.5,"angle":265},{"id":47,"size":579,"x":293.5,"y":4051.5,"angle":354},{"id":48,"size":546,"x":1911,"y":3967,"angle":313},{"id":49,"size":231,"x":1409.5,"y":1194.5,"angle":66},{"id":50,"size":216,"x":2141,"y":1113,"angle":255},{"id":51,"size":579,"x":3716.5,"y":3185.5,"angle":39},{"id":52,"size":537,"x":3291.5,"y":4598.5,"angle":97},{"id":53,"size":345,"x":1714.5,"y":3314.5,"angle":234}]}'),r=JSON.parse('[{"id":0,"url":"player","cost":0},{"id":1,"url":"skull","cost":1000},{"id":2,"url":"smileyface","cost":200},{"id":3,"url":"target","cost":100},{"id":4,"url":"basketball","cost":500},{"id":5,"url":"sunglasses","cost":2000},{"id":6,"url":"thumbsup","cost":150},{"id":7,"url":"expressionless","cost":200},{"id":8,"url":"magician","cost":800},{"id":9,"url":"lightning","cost":300},{"id":10,"url":"crown","cost":3000},{"id":11,"url":"cap","cost":900}]');class h extends Phaser.Scene{constructor(){super(),this.left=!1,this.right=!1,this.up=!1,this.down=!1,this.leftDown=!1,this.rightDown=!1,this.upDown=!1,this.downDown=!1}preload(){for(let e of Object.keys(r))this.load.image(`skin_${r[e].url}`,`/img/skins/${r[e].url}.png`);this.load.image("skin_botplayer","/img/skins/bot.png"),this.load.image("coin","/img/gameObjects/coin.png"),this.load.image("grass","/img/gameObjects/tile.png"),this.load.image("bullet","/img/gameObjects/bullet.png"),this.load.image("gun","/img/gameObjects/gun.png"),this.load.image("obstacle","/img/gameObjects/obstacle.png"),this.load.image("obstacle2","/img/gameObjects/obstacle2.png"),this.load.image("tree","/img/gameObjects/tree.png"),this.load.image("bullet_icon","/img/gameObjects/bullet_icon.png"),this.load.image("shield_icon","/img/gameObjects/shield_icon.png"),this.load.image("arrow","/img/gameObjects/arrow.png"),this.loadingtext=new s(this,window.innerWidth/2,window.innerHeight/2,"Loading...",{fontSize:100,fontFamily:"Arial"}).setOrigin(.5),this.load.plugin("rexbbcodetextplugin","https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js",!0)}create(){this.loaded=!1,this.full_screen=!1;let i=window.room?"https://blaster2d.ruiwenge2.repl.co":window.chosenServer;this.socket=io(i),this.name=name||localStorage.getItem("name"),this.coins={},this.trees=this.physics.add.group(),this.bulletsGroup=this.physics.add.group(),this.enemies={},this.bullets={},this.verified=!1,this.minimap=new class{constructor(t){this.map=t.add.rectangle(window.innerWidth-220,window.innerHeight-220,200,200,0).setDepth(150).setAlpha(.7).setOrigin(0).setStrokeStyle(3,255),this.map.scrollFactorX=0,this.map.scrollFactorY=0,this.players={},this.scale=e/this.map.width}show(e){e.add.existing(this.map)}addPlayer(e,i,s,n){if(e.died)return;var o=16711680;i==e.socket.id&&(o=16753920);let a=e.add.circle(this.map.x+s/this.scale,this.map.y+n/this.scale,t/this.scale,o).setDepth(151);a.scrollFactorX=0,a.scrollFactorY=0,e.add.existing(a),this.players[i]=a}removePlayer(e){this.players[e]&&(this.players[e].destroy(),delete this.players[e])}update(e){Object.values(e).forEach((e=>{this.players[e.id].x=this.map.x+e.x/this.scale,this.players[e.id].y=this.map.y+e.y/this.scale}))}resize(){this.map.x=window.innerWidth-220,this.map.y=window.innerHeight-220,Object.values(this.players).forEach((e=>{e.x=this.map.x+e.x/this.scale,e.y=this.map.y+e.y/this.scale}))}destroy(){this.map.destroy(),Object.values(this.players).forEach((e=>{e.destroy()}))}}(this),this.chatbox=new class{constructor(e){this.socket=e.socket,this.on=!0,this.name=e.name,this.focus=!1,this.sent=!1,this.chatbox=document.getElementById("chatbox"),this.input=document.getElementById("chat-input"),this.messages=document.getElementById("messages"),this.chatbox.style.display="block",this.input.addEventListener("keydown",(t=>{if(this.on){if("Enter"==t.key){if(!this.validMessage(this.input.value))return this.sent=!1;this.socket.emit("chat message",this.name,this.input.value,e.room),this.input.value="",this.sent=!0}"Tab"==t.key&&(t.preventDefault(),this.input.blur())}})),this.socket.on("chat message",(e=>{this.on&&(this.messages.innerHTML+=`<p>${this.encodeHTML(e)}</p>`,this.messages.scrollTo(0,this.messages.scrollHeight))})),this.input.onfocus=()=>{this.input.placeholder="Press TAB to exit",this.focus=!0},this.input.onblur=()=>{this.input.placeholder="Press ENTER to chat",this.focus=!1}}encodeHTML(e){var t=document.createElement("div");return t.innerText=e,t.innerHTML}validMessage(e){if(!e)return!1;for(var t of e)if(" "!=t)return!0;return!1}destroy(){this.on=!1,this.chatbox.style.display="none",this.messages.innerHTML="",this.input.value=""}}(this),this.gunType=document.getElementById("gun").value,this.spawned=!1,this.pointerX=window.mouseData.x,this.pointerY=window.mouseData.y,this.shooting=!1,this.shotBefore=!1,this.focus=!0;let n=this;grecaptcha.ready((function(){grecaptcha.execute("6LerbDQhAAAAAFyt22lecnaCm6UmDmRsytTDtD1k",{action:"submit"}).then((function(e){n.socket.emit("join",n.name,n.gunType,e,loggedIn,window.room,window.mouseData.angle),n.verified=!0,document.getElementsByClassName("grecaptcha-badge")[0].style.display="none"}))})),window.addEventListener("resize",(()=>{this.loaded&&(this.died?(this.deathtext.x=window.innerWidth/2,this.deathtext.y=window.innerHeight/2-200,this.infotext.x=window.innerWidth/2,this.infotext.y=window.innerHeight/2-100,this.deathRect.x=window.innerWidth/2,this.deathRect.y=window.innerHeight/2,this.playAgain.setPosition(window.innerWidth/2,window.innerHeight/2+100),"main"!=this.room&&(this.switchWeapon.setPosition(window.innerWidth-150,50),this.leaveBtn.setPosition(window.innerWidth-150,110))):(this.socket.emit("resize",{width:window.innerWidth,height:window.innerHeight},this.room),this.scale.resize(window.innerWidth,window.innerHeight),this.fpstext.x=window.innerWidth-150,this.tps.x=window.innerWidth-150,this.ping.x=window.innerWidth-150,this.shield.x=window.innerWidth/2,this.shield_icon.x=window.innerWidth/2-50,this.reloading.x=window.innerWidth-300,this.reloading.y=window.innerHeight-120,this.shots.x=window.innerWidth-310,this.shots.y=window.innerHeight-70,this.bullet_icon.x=window.innerWidth-290,this.bullet_icon.y=window.innerHeight-90,this.minimap.resize()),this.arrowLeft&&(this.arrowLeft.setPosition(window.innerWidth-150,window.innerHeight-400),this.arrowRight.setPosition(window.innerWidth-50,window.innerHeight-400),this.arrowUp.setPosition(window.innerWidth-100,window.innerHeight-450),this.arrowDown.setPosition(window.innerWidth-100,window.innerHeight-350)))}));const r=function(){n.loaded||(window.error={message:"Failed to join server\n\nTry again or choose a different server",reload:!1},n.scene.start("disconnect_scene"),n.chatbox.destroy(),window.rejoin=!1)};this.socket.on("connect_error",r),this.socket.on("connect_failed",r),this.socket.on("kick",((e,t)=>{window.error={message:e,reload:t},n.scene.start("disconnect_scene"),n.chatbox.destroy(),window.rejoin=!1})),this.socket.on("roomdata",(e=>{this.focus=!1,promptmodal("","Copy the link and share with your friends to play!","Copy",!0,`https://${location.host}/?code=${e}`,!0).then((e=>{navigator.clipboard.writeText(e),this.focus=!0}))})),this.socket.on("gamedata",((e,r)=>{try{this.loaded=!0,this.room=r,this.loadingtext.destroy(),"https://blaster2d.ruiwenge2.repl.co"!=i&&io("https://blaster2d.ruiwenge2.repl.co").emit("join server 2",n.name),this.player=this.physics.add.sprite(e.players[this.socket.id].x,e.players[this.socket.id].y,`skin_${e.players[this.socket.id].skin}`).setScale(.65,.65).setDepth(2).setAlpha(.5),this.bar=new o(this,this.player.x,this.player.y-t-20,100,2),this.nametext=new s(this,this.player.x,this.player.y+t+20,this.name,{fontSize:20,fontFamily:"sans-serif",color:loggedIn?"blue":"white"},2,!0),this.playerstext=this.add.rexBBCodeText(20,20,"",{fontSize:22,fontFamily:"Arial"}).setOrigin(0).setDepth(100),this.playerstext.scrollFactorX=0,this.playerstext.scrollFactorY=0,this.scorestext=new s(this,200,20,"",{fontSize:22,fontFamily:"Arial"}).setOrigin(0),this.fpstext=new s(this,window.innerWidth-150,50,"FPS: 60",{fontSize:25,fontFamily:"copperplate"}),this.tps=new s(this,window.innerWidth-150,80,"TPS: 30",{fontSize:25,fontFamily:"copperplate"}),this.ping=new s(this,window.innerWidth-150,110,"Ping: 0 ms",{fontSize:25,fontFamily:"copperplate"}),this.reloading=new s(this,window.innerWidth-300,window.innerHeight-120,"",{fontSize:40,fontFamily:"Arial"}).setOrigin(1),this.shots=new s(this,window.innerWidth-310,window.innerHeight-70,"",{fontSize:40,fontFamily:"Arial"}).setOrigin(1),this.bullet_icon=this.add.image(window.innerWidth-290,window.innerHeight-90,"bullet_icon").setDepth(100),this.bullet_icon.scrollFactorX=0,this.bullet_icon.scrollFactorY=0,this.shield=new s(this,window.innerWidth/2,50,"",{fontSize:40,fontFamily:"Arial"}),this.shield_icon=this.add.image(window.innerWidth/2-50,50,"shield_icon").setDepth(100).setScale(.5,.5),this.shield_icon.scrollFactorX=0,this.shield_icon.scrollFactorY=0,this.shield_icon.visible=!1,this.playerInfo={x:this.player.x,y:this.player.y},this.cameras.main.startFollow(this.player),this.minimap.show(this),this.minimap.addPlayer(this,this.socket.id,e.players[this.socket.id].x,e.players[this.socket.id].y),this.data={x:e.players[this.socket.id].x,y:e.players[this.socket.id].y,angle:0,angle2:0};for(let t of Object.values(e.coins)){let e={coin:this.add.image(t.x,t.y,"coin").setScale(.75,.75).setDepth(.99),id:t.id};this.coins[t.id]=e}for(let e of a.T){let t=this.trees.create(e.x,e.y,"tree").setScale(e.size/300).setDepth(10).setAlpha(.7);t.id=e.id,t.angle=e.angle}for(let t of Object.keys(e.players))t!=this.socket.id&&(this.addPlayer(e.players[t]),this.minimap.addPlayer(this,e.players[t].id,e.players[t].x,e.players[t].y));Object.values(e.bullets).forEach((e=>{let t=this.bulletsGroup.create(e.x,e.y,"bullet").setScale(.5,2).setDepth(.999);t.angle=e.angle,t.shooter=e.shooter,t.id=e.id,this.bullets[e.id]=t})),this.main()}catch(e){console.log(e)}})),this.socket.on("new player",(e=>{this.verified&&(this.addPlayer(e),this.minimap.addPlayer(this,e.id,e.x,e.y))})),this.socket.on("collected coin",((e,t)=>{try{if(!this.verified)return;let i;i=t==this.socket.id?this.player:this.enemies[t].player;let s=this.coins[e];this.tweens.add({targets:s.coin,x:i.x,y:i.y,duration:75,onComplete:function(){s.coin.destroy()}})}catch(e){console.log(e)}})),this.socket.on("new coin",(e=>{try{let t={coin:this.add.image(e.x,e.y,"coin").setScale(.75,.75).setDepth(.99),id:e.id};this.coins[e.id]=t}catch(e){console.log(e)}})),this.socket.on("tps",(e=>{try{this.tps.setText("TPS: "+e);let t=Date.now();this.socket.emit("get_ping",(()=>{this.ping.setText(`Ping: ${Date.now()-t} ms`)}))}catch(e){console.log(e)}})),this.socket.on("left",(e=>{try{this.enemies[e].player.destroy(),this.enemies[e].gun.destroy(),this.enemies[e].healthbar.destroy(),this.enemies[e].nametext.destroy(),delete this.enemies[e],this.minimap.removePlayer(e)}catch(e){console.log(e)}})),this.socket.on("leave",(()=>{this.chatbox.destroy(),window.error={message:"You got disconnected",reload:!1},this.scene.start("disconnect_scene"),window.rejoin=!1}))}main(){this.w=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W,!1),this.a=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A,!1),this.s=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S,!1),this.d=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D,!1);var t=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L,!1),i=(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE,!1),this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER,!1)),o=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R,!1),a=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F,!1),r=this;t.on("down",(function(){r.chatbox.focus||confirmmodal("","Are you sure you want to exit the game?","Exit").then((()=>{r.sys.game.destroy(!0,!1),r.chatbox.destroy(),document.querySelector("main").style.display="block",r.socket.emit("leaveGame"),document.getElementsByClassName("grecaptcha-badge")[0].style.display="block",getServerData(),window.rejoin=!1,document.body.style.cursor="auto"}))})),i.on("down",(function(){if(r.chatbox.sent)return r.chatbox.sent=!1,r.chatbox.input.blur();r.chatbox.focus||r.chatbox.input.focus()})),o.on("down",(function(){r.socket.emit("reload",r.room)})),a.on("down",(function(){if(this.full_screen)document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen(),this.full_screen=!1;else{let e=document.body;e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen(),this.full_screen=!0}})),this.background=this.add.tileSprite(0,0,e,e,"grass").setOrigin(0).setDepth(0),(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})()&&(this.arrowLeft=this.add.image(window.innerWidth-150,window.innerHeight-400,"arrow").setAngle(270).setInteractive().on("pointerdown",(()=>{this.leftDown=!0})).on("pointerup",(()=>{this.leftDown=!1})).setScrollFactor(0,0).setDepth(100).setScale(.7),this.arrowRight=this.add.image(window.innerWidth-50,window.innerHeight-400,"arrow").setAngle(90).setInteractive().on("pointerdown",(()=>{this.rightDown=!0})).on("pointerup",(()=>{this.rightDown=!1})).setScrollFactor(0,0).setDepth(100).setScale(.7),this.arrowUp=this.add.image(window.innerWidth-100,window.innerHeight-450,"arrow").setAngle(0).setInteractive().on("pointerdown",(()=>{this.upDown=!0})).on("pointerup",(()=>{this.upDown=!1})).setScrollFactor(0,0).setDepth(100).setScale(.7),this.arrowDown=this.add.image(window.innerWidth-100,window.innerHeight-350,"arrow").setAngle(180).setInteractive().on("pointerdown",(()=>{this.downDown=!0})).on("pointerup",(()=>{this.downDown=!1})).setScrollFactor(0,0).setDepth(100).setScale(.7)),this.gun=this.physics.add.sprite(this.player.x,this.player.y,"gun").setDepth(2),this.gun.angle2=window.angle||0,this.gun.angle=(180*this.gun.angle2/Math.PI+360)%360,this.player.angle=this.gun.angle,this.health=100,this.score=0,this.addWeaponActions(),this.socket.on("gamestate",(e=>{try{if(!this.verified)return;if(this.socket.disconnected)return this.chatbox.destroy(),window.error={message:"You got disconnected",reload:!1},this.scene.start("disconnect_scene"),void(window.rejoin=!1);let t=this;if(!this.died){let t=e.players[this.socket.id];this.playerInfo.x=t.x,this.playerInfo.y=t.y,this.health=t.health,this.shots.setText(`${t.shots}/${t.shotsLeft}`),t.reloading?(this.reloading.setText("Reloading..."),this.gun.visible=!1):(this.reloading.setText(""),this.gun.visible=!0),t.shots||t.shotsLeft?this.shots.setTint(16777215):this.shots.setTint(16711680),t.shield?(this.shield.setText(t.shield.timeleft),this.player.setTint(16711680),this.shield_icon.visible=!0):(this.shield.setText(""),this.player.setTint(16777215),this.shield_icon.visible=!1),t.spawned&&!this.spawned&&this.player.setAlpha(1),this.tweens.add({targets:this.player,x:this.playerInfo.x,y:this.playerInfo.y,duration:100})}if(Object.values(e.players).forEach((e=>{e.id!=this.socket.id&&(e.spawned&&!this.enemies[e.id].spawned&&(this.enemies[e.id].player.setAlpha(1),this.enemies[e.id].spawned=!0),this.enemies[e.id].health=e.health,e.reloading?this.enemies[e.id].gun.visible=!1:this.enemies[e.id].gun.visible=!0,e.shield?this.enemies[e.id].player.setTint(16711680):this.enemies[e.id].player.setTint(16777215),this.tweens.add({targets:[this.enemies[e.id].player],x:e.x,y:e.y,duration:100,onUpdate:function(){let i=t.enemies[e.id];i&&(i.gun.x=i.player.x+61.5*Math.cos(e.angle2),i.gun.y=i.player.y+61.5*Math.sin(e.angle2),i.gun.angle=e.angle,i.player.angle=e.angle)}}))})),Object.values(e.bullets).forEach((t=>{this.tweens.add({targets:[this.bullets[t.id]],x:e.bullets[t.id].x,y:e.bullets[t.id].y,duration:1e3/30})})),this.died)return;this.minimap.update(e.players)}catch(e){console.log(e)}})),this.socket.on("new bullet",((e,t)=>{try{if(!this.verified)return;let i=this.bulletsGroup.create(t.x,t.y,"bullet").setScale(.5,2).setDepth(.999);i.angle=t.angle,i.shooter=t.shooter,i.id=e,this.bullets[e]=i}catch(e){console.log(e)}})),this.socket.on("removed bullet",(e=>{try{if(!this.verified)return;this.bullets[e].destroy(),delete this.bullets[e]}catch(e){console.log(e)}})),this.socket.on("player died",((e,t,i)=>{try{if(!this.verified)return;let a=this;if(e!=this.socket.id)var o=this.enemies[e].name;e==this.socket.id?(this.died=!0,this.gun.destroy(),this.bar.destroy(),this.nametext.destroy(),this.tweens.add({targets:[this.player],duration:1e3,alpha:0,onComplete:function(){a.player.destroy(),a.nametext.destroy(),a.playerstext.destroy(),a.scorestext.destroy(),a.fpstext.destroy(),a.tps.destroy(),a.ping.destroy(),a.minimap.destroy(),a.chatbox.destroy(),a.reloading.destroy(),a.shots.destroy(),a.bullet_icon.destroy(),a.shield.destroy(),a.deathtext=new s(a,window.innerWidth/2,window.innerHeight/2-200,"You died",{fontSize:50}).setDepth(101).setAlpha(0),a.infotext=new s(a,window.innerWidth/2,window.innerHeight/2-100,`Killed By: ${i}\n\nKill Streak: ${a.score}`,{fontSize:30}).setDepth(101).setAlpha(0),a.deathRect=a.add.rectangle(window.innerWidth/2,window.innerHeight/2,600,500,237136).setOrigin(.5).setAlpha(0).setDepth(100),a.deathRect.scrollFactorX=0,a.deathRect.scrollFactorY=0,a.deathRect.setStrokeStyle(5,0),a.playAgain=new n(a,window.innerWidth/2,window.innerHeight/2+100,"Play Again",(function(){a.sys.game.destroy(!0,!1),document.querySelector("main").style.display="block",document.getElementsByClassName("grecaptcha-badge")[0].style.display="block",a.socket.disconnect(),getServerData(),document.body.style.cursor="auto","main"==a.room?window.rejoin=!1:(window.rejoin=a.room,document.getElementById("playbtn").click())}),{background:226559}),a.playAgain.text.setDepth(102).setAlpha(0),a.playAgain.button.setDepth(101).setAlpha(0),"main"!=a.room&&(a.switchWeapon=new n(a,window.innerWidth-150,50,"Switch Weapon",(function(){selectmodal("Switch Weapon","Choose a weapon: ",{pistol:"Pistol",sniper:"Sniper",machineGun:"Machine Gun"},document.getElementById("gun").value).then((e=>{document.getElementById("gun").value=e}))}),{fontSize:30}),a.switchWeapon.text.setDepth(102).setAlpha(0),a.switchWeapon.button.setDepth(101).setAlpha(0),a.leaveBtn=new n(a,window.innerWidth-150,110,"Leave",(function(){a.sys.game.destroy(!0,!1),document.querySelector("main").style.display="block",document.getElementsByClassName("grecaptcha-badge")[0].style.display="block",a.socket.disconnect(),getServerData(),document.body.style.cursor="auto",window.rejoin=!1}),{fontSize:30}),a.leaveBtn.text.setDepth(102).setAlpha(0),a.leaveBtn.button.setDepth(101).setAlpha(0)),a.enemies[t]&&a.cameras.main.startFollow(a.enemies[t].player),a.tweens.add({targets:a.deathRect,duration:300,alpha:.5}),a.tweens.add({targets:[a.deathtext,a.infotext,a.playAgain.text,a.playAgain.button],duration:300,alpha:1}),"main"!=a.room&&a.tweens.add({targets:[a.switchWeapon.text,a.switchWeapon.button,a.leaveBtn.text,a.leaveBtn.button],duration:300,alpha:1})}})):(this.enemies[e].gun.destroy(),this.enemies[e].healthbar.destroy(),this.enemies[e].nametext.destroy(),this.tweens.add({targets:[this.enemies[e].player],duration:1e3,alpha:0,onComplete:function(){a.enemies[e]&&(a.enemies[e].player.destroy(),delete a.enemies[e],a.minimap.removePlayer(e))}})),t==this.socket.id?(this.score++,this.killText?this.killText.setText(`You killed ${o}\n\nKill Streak: ${this.score}`):this.killText=new s(this,window.innerWidth/2,window.innerHeight-90,`You killed ${o}\n\nKill Streak: ${this.score}`,{fontSize:30}),setTimeout((()=>{this.killText.destroy(),this.killText=void 0}),4e3)):this.enemies[t].score++}catch(e){console.log(e)}}))}addPlayer(e){var i=.5,n=!1;e.spawned&&(i=1,n=!0);var a={id:e.id,x:e.x,y:e.y,name:e.name,player:this.add.image(e.x,e.y,`skin_${e.skin}`).setScale(.65,.65).setDepth(1).setAlpha(i),nametext:new s(this,e.x,e.y+t+20,e.name,{fontSize:20,fontFamily:"sans-serif",color:e.bot?"red":e.account?"blue":"white"},1,!0),healthbar:new o(this,e.x,e.y-t-20,100,1),gun:this.add.image(e.x+61.5*Math.cos(e.angle2),e.y+61.5*Math.sin(e.angle2),"gun").setDepth(1.1),angle:null,health:100,score:e.score,spawned:n,bot:e.bot,account:e.account};this.enemies[e.id]=a}addWeaponActions(){const e=e=>{if(this.died)return;let t=e.clientX||e.touches[0].clientX,i=e.clientY||e.touches[0].clientY;this.shooting=!0;var s=Math.atan2(i-window.innerHeight/2,t-window.innerWidth/2);this.gun.angle=(180*s/Math.PI+360)%360,this.gun.angle2=s,this.pointerX=t,this.pointerY=i},t=()=>{this.died||(this.shooting=!1,this.shotBefore=!1,this.arrowLeft&&(this.leftDown=!1,this.rightDown=!1,this.upDown=!1,this.downDown=!1))},i=e=>{let t=e.clientX||e.touches[0].clientX,i=e.clientY||e.touches[0].clientY;if(!this.died&&!this.socket.disconnected){var s=Math.atan2(i-window.innerHeight/2,t-window.innerWidth/2);this.gun.angle=(180*s/Math.PI+360)%360,this.gun.angle2=s,this.pointerX=t,this.pointerY=i}};window.addEventListener("mousedown",e),window.addEventListener("touchstart",e),window.addEventListener("mouseup",t),window.addEventListener("touchend",t),window.addEventListener("touchcancel",t),window.addEventListener("mousemove",i),window.addEventListener("touchmove",i)}update(){if(!this.loaded)return;if(!this.verified)return;if(this.socket.disconnected)return this.chatbox.destroy(),window.error={message:"You got disconnected",reload:!1},this.scene.start("disconnect_scene"),void(window.rejoin=!1);if(Object.values(this.enemies).forEach((e=>{e.healthbar.setData(e.player.x,e.player.y-t-20,e.health),e.nametext.setPosition(e.player.x,e.player.y+t+20)})),this.died)return;this.bar.setData(this.player.x,this.player.y-t-20,this.health),this.nametext.setPosition(this.player.x,this.player.y+t+20),Array.prototype.insert=function(e,t){this.splice(e,0,t)};let e=[...Object.values(this.enemies)],i={};e.insert(0,{score:this.score,name:this.name,bot:!1,account:loggedIn});let s=e.sort((function(e,t){return t.score-e.score})),n="",o="";for(let e of s)n+=`[color=${e.bot?"red":e.account?"blue":"white"}]${e.name}[/color]\n`,o+=e.score+"\n";this.playerstext.setText(n),this.scorestext.setText(o);for(let e of Object.keys(i))this.playerstext.addColor(i[e],e);if(this.fpstext.setText("FPS: "+Math.round(this.sys.game.loop.actualFps)),this.shooting&&!this.chatbox.focus&&!this.died&&(!this.shotBefore||"machineGun"==this.gunType)&&this.focus&&!this.leftDown&&!this.rightDown&&!this.upDown&&!this.downDown){var a=Math.atan2(this.pointerY-window.innerHeight/2,this.pointerX-window.innerWidth/2);this.socket.emit("shoot",a,this.room),this.shotBefore=!0}let r=this.input.keyboard.createCursorKeys();this.chatbox.focus||(r.left.isDown||this.a.isDown||this.leftDown?this.left||(this.socket.emit("movement","left",this.room),this.left=!0,this.right=!1):this.left&&(this.socket.emit("movement_end","left",this.room),this.left=!1),r.right.isDown||this.d.isDown||this.rightDown?this.right||(this.socket.emit("movement","right",this.room),this.right=!0,this.left=!1):this.right&&(this.socket.emit("movement_end","right",this.room),this.right=!1),r.up.isDown||this.w.isDown||this.upDown?this.up||(this.socket.emit("movement","up",this.room),this.up=!0,this.down=!1):this.up&&(this.socket.emit("movement_end","up",this.room),this.up=!1),r.down.isDown||this.s.isDown||this.downDown?this.down||(this.socket.emit("movement","down",this.room),this.down=!0,this.up=!1):this.down&&(this.socket.emit("movement_end","down",this.room),this.down=!1)),this.gun.x=this.player.x+61.5*Math.cos(this.gun.angle2),this.gun.y=this.player.y+61.5*Math.sin(this.gun.angle2),this.player.angle=this.gun.angle,this.player.angle!=this.data.angle&&(this.data.angle=this.gun.angle,this.data.angle2=this.gun.angle2,this.socket.emit("player angle",this.data,this.room))}}const d=h;class l extends Phaser.Scene{constructor(){super()}preload(){}create(){this.disconnecttext=new s(this,window.innerWidth/2,100,window.error.message,{fontSize:30,fontFamily:"Arial"}).setOrigin(.5),this.button=new n(this,window.innerWidth/2,window.innerHeight/2,window.error.reload?"Reload":"OK",(()=>{window.error.reload?location.reload():(this.sys.game.destroy(!0,!1),document.querySelector("main").style.display="block",document.getElementsByClassName("grecaptcha-badge")[0].style.display="block",document.body.style.cursor="auto")}))}update(){}}const c=l;function g(){const e={type:Phaser.AUTO,width:window.innerWidth,height:window.innerHeight,backgroundColor:"#000000",physics:{default:"arcade",arcade:{gravity:{y:0},debug:!1}}};let t=document.getElementById("input").value;if(!t.replace(/\s/g,""))return void(document.querySelector("p").style.display="block");loggedIn?localStorage.setItem("name",""):localStorage.setItem("name",t),"auto"==document.getElementById("server").value?localStorage.setItem("server","auto"):(window.chosenServer=document.getElementById("server").value,localStorage.setItem("server",window.chosenServer)),localStorage.setItem("gun",document.getElementById("gun").value),window.started=!0;const i=new Phaser.Game(e);i.scene.add("gamescene",d),i.scene.add("disconnect_scene",c),i.scene.start("gamescene"),document.body.style.cursor="crosshair",window.addEventListener("resize",(()=>{i.scale.resize(window.innerWidth,window.innerHeight)})),document.querySelector("main").style.display="none",document.querySelector("p").style.display="none"}window.room=!1,window.rejoin=!1,window.started=!1,window.mouseData={x:window.innerWidth/2,y:window.innerHeight/2,angle:0},document.addEventListener("click",(function(e){window.mouseData.x=e.clientX,window.mouseData.y=e.clientY,window.angle=Math.atan2(e.clientY-window.innerHeight/2,e.clientX-window.innerWidth/2)})),localStorage.getItem("name")&&!loggedIn&&(document.getElementById("input").value=localStorage.getItem("name")),loggedIn&&localStorage.setItem("name",""),localStorage.getItem("server")&&(document.getElementById("server").value=localStorage.getItem("server")),localStorage.getItem("gun")&&(document.getElementById("gun").value=localStorage.getItem("gun")),document.getElementById("playbtn").addEventListener("click",(function(){window.rejoin?window.room={mode:"join",code:window.rejoin}:window.room=!1,g()})),document.getElementById("createbtn").addEventListener("click",(function(){window.room={mode:"create"},g()})),document.getElementById("joinbtn").addEventListener("click",(function(){let e;e=autojoin?promptmodal("","Enter room code to join:","Join",!0,autojoin):promptmodal("","Enter room code to join:","Join"),e.then((e=>{document.getElementById("input").value.replace(/\s/g,"")?(window.room={mode:"join",code:e},g()):promptmodal("","Enter your name: ","OK",!0).then((t=>{document.getElementById("input").value=t,window.room={mode:"join",code:e},g()}))}))})),document.getElementById("howtoplay").addEventListener("click",(function(){alertmodal("How To Play",'<p style="font-size: 18px">\n  - WASD/Arrow keys to move<br>\n  <br>- Click to shoot<br>\n  <br>- Press R to reload gun<br>\n  <br>- Press ENTER to chat<br>\n  <br>- Press F for fullscreen, and L to leave game<br>\n  <br>- Collect the gold for ammo<br>\n  <br>- Kill as many players as you can<br>\n  <br>Happy playing!</p>',"OK",!0).then((()=>{}))})),autojoin&&document.getElementById("joinbtn").click();const u={1:{url:"https://blaster2d.ruiwenge2.repl.co",num:1},2:{url:"https://blaster2d.herokuapp.com",num:2}};async function y(e){try{let t=u[e].url,i=await fetch(t+"/stats"),s=await i.json();return document.getElementById("server"+e).innerHTML=`Server ${e} (${s.tps} TPS)`,console.log(t,": ",s.tps),u[e].tps=s.tps,s.tps}catch(t){console.log(t),document.getElementById("server"+e).innerHTML=`Server ${e} (offline)`,u[e].tps=0}}window.getServerData=()=>{y(1).then((()=>{y(2).then((()=>{let e=Object.values(u);e=e.sort((function(e,t){return t.tps-e.tps})),window.started||(document.getElementById("autoserver").innerHTML=`Auto (Server ${e[0].num})`,"auto"==document.getElementById("server").value&&(window.chosenServer=e[0].url))}))}))},getServerData()})();