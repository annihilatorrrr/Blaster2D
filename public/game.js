(()=>{"use strict";function t(t,e){return Math.round(Math.random()*(e-t))+t}class e extends Phaser.GameObjects.Text{constructor(t,e,i,s,h){h||((h={}).fontFamily="Arial",h.fontSize=30,h.background=255),"fontFamily"in h||(h.fontFamily="Arial"),"fontSize"in h||(h.fontSize=30),super(t,e,i,s,h),this.scrollFactorX=0,this.scrollFactorY=0,this.setDepth(100),t.add.existing(this)}}const i=e;class s extends Phaser.GameObjects.Container{constructor(t,e,s,h,n,o){super(t),o||((o={}).fontSize=50,o.fontFamily="Arial",o.background=255),"fontSize"in o||(o.fontSize=50),"fontFamily"in o||(o.fontFamily="Arial"),"background"in o||(o.background=255),this.text=new i(t,e,s,h,{fontSize:o.fontSize,fontFamily:o.fontFamily}).setOrigin(.5),this.button=t.add.rectangle(0,0,0,0,o.background).setDepth(99),this.button.scrollFactorX=0,this.button.scrollFactorY=0,this.button.width=this.text.width+15,this.button.height=this.text.height+15,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",n),t.add.existing(this)}}const h=s,n=JSON.parse('{"T":[{"id":0,"size":291,"x":2889.5,"y":2400.5},{"id":1,"size":192,"x":2932,"y":1081},{"id":2,"size":228,"x":340,"y":4651},{"id":3,"size":180,"x":5384,"y":5865},{"id":4,"size":225,"x":3318.5,"y":5498.5},{"id":5,"size":252,"x":1213,"y":4696},{"id":6,"size":177,"x":4818.5,"y":2142.5},{"id":7,"size":231,"x":2047.5,"y":5635.5},{"id":8,"size":234,"x":2904,"y":4052},{"id":9,"size":183,"x":4556.5,"y":1083.5},{"id":10,"size":252,"x":465,"y":195},{"id":11,"size":240,"x":2855,"y":2237},{"id":12,"size":216,"x":1590,"y":4288},{"id":13,"size":279,"x":1128.5,"y":3813.5},{"id":14,"size":285,"x":4096.5,"y":3895.5},{"id":15,"size":240,"x":4118,"y":1359},{"id":16,"size":189,"x":3154.5,"y":5368.5},{"id":17,"size":171,"x":1786.5,"y":3679.5},{"id":18,"size":285,"x":3596.5,"y":2497.5},{"id":19,"size":183,"x":3032.5,"y":5588.5},{"id":20,"size":153,"x":4278.5,"y":4667.5},{"id":21,"size":165,"x":2328.5,"y":4526.5},{"id":22,"size":189,"x":4588.5,"y":1816.5},{"id":23,"size":162,"x":3932,"y":5165},{"id":24,"size":192,"x":232,"y":5672},{"id":25,"size":267,"x":824.5,"y":1568.5},{"id":26,"size":207,"x":4435.5,"y":5562.5},{"id":27,"size":180,"x":1010,"y":1217},{"id":28,"size":249,"x":5564.5,"y":2993.5},{"id":29,"size":273,"x":2380.5,"y":1215.5},{"id":30,"size":258,"x":2014,"y":4548},{"id":31,"size":294,"x":355,"y":2766},{"id":32,"size":195,"x":2773.5,"y":979.5},{"id":33,"size":246,"x":1268,"y":1433},{"id":34,"size":198,"x":2650,"y":3427},{"id":35,"size":222,"x":5641,"y":5733},{"id":36,"size":222,"x":4092,"y":4773},{"id":37,"size":225,"x":5090.5,"y":1337.5},{"id":38,"size":267,"x":4381.5,"y":4438.5},{"id":39,"size":252,"x":3160,"y":356},{"id":40,"size":279,"x":1926.5,"y":4695.5},{"id":41,"size":297,"x":3759.5,"y":213.5},{"id":42,"size":153,"x":2348.5,"y":1089.5},{"id":43,"size":180,"x":4591,"y":891},{"id":44,"size":225,"x":580.5,"y":3279.5},{"id":45,"size":237,"x":3149.5,"y":5808.5},{"id":46,"size":288,"x":1354,"y":551},{"id":47,"size":168,"x":268,"y":3755},{"id":48,"size":210,"x":616,"y":2410},{"id":49,"size":249,"x":3742.5,"y":1240.5},{"id":50,"size":198,"x":473,"y":5496},{"id":51,"size":279,"x":3059.5,"y":2965.5},{"id":52,"size":255,"x":4368.5,"y":1044.5},{"id":53,"size":159,"x":2707.5,"y":404.5},{"id":54,"size":156,"x":4323,"y":434},{"id":55,"size":273,"x":630.5,"y":1455.5},{"id":56,"size":282,"x":194,"y":4110},{"id":57,"size":240,"x":949,"y":561},{"id":58,"size":192,"x":4841,"y":3114},{"id":59,"size":285,"x":331.5,"y":3749.5},{"id":60,"size":255,"x":3413.5,"y":5608.5},{"id":61,"size":204,"x":4852,"y":736},{"id":62,"size":285,"x":2911.5,"y":3955.5},{"id":63,"size":174,"x":3594,"y":1224},{"id":64,"size":246,"x":5380,"y":4065},{"id":65,"size":159,"x":3418.5,"y":5602.5},{"id":66,"size":291,"x":3329.5,"y":5530.5},{"id":67,"size":258,"x":4387,"y":3239},{"id":68,"size":297,"x":4451.5,"y":1548.5},{"id":69,"size":261,"x":3812.5,"y":1890.5},{"id":70,"size":264,"x":4430,"y":291},{"id":71,"size":183,"x":4233.5,"y":2022.5},{"id":72,"size":159,"x":3451.5,"y":2546.5},{"id":73,"size":243,"x":4312.5,"y":122.5},{"id":74,"size":300,"x":3534,"y":261},{"id":75,"size":252,"x":1992,"y":3850},{"id":76,"size":195,"x":1397.5,"y":1762.5},{"id":77,"size":264,"x":5781,"y":1607},{"id":78,"size":255,"x":5010.5,"y":2974.5},{"id":79,"size":162,"x":2330,"y":5139},{"id":80,"size":150,"x":3769,"y":3184},{"id":81,"size":186,"x":4214,"y":5327},{"id":82,"size":201,"x":5402.5,"y":4578.5},{"id":83,"size":285,"x":926.5,"y":4080.5},{"id":84,"size":231,"x":2534.5,"y":4626.5},{"id":85,"size":237,"x":4374.5,"y":1889.5},{"id":86,"size":261,"x":2880.5,"y":1534.5},{"id":87,"size":186,"x":244,"y":3745},{"id":88,"size":171,"x":5361.5,"y":5634.5},{"id":89,"size":237,"x":5066.5,"y":4841.5},{"id":90,"size":264,"x":3224,"y":5437},{"id":91,"size":279,"x":2363.5,"y":5705.5},{"id":92,"size":198,"x":2091,"y":3304},{"id":93,"size":249,"x":2338.5,"y":4130.5},{"id":94,"size":282,"x":5486,"y":4408},{"id":95,"size":231,"x":2358.5,"y":2140.5},{"id":96,"size":279,"x":1692.5,"y":1019.5},{"id":97,"size":243,"x":1203.5,"y":3910.5},{"id":98,"size":213,"x":2164.5,"y":5344.5},{"id":99,"size":171,"x":3672.5,"y":5517.5},{"id":100,"size":192,"x":2610,"y":2391},{"id":101,"size":156,"x":3471,"y":1148},{"id":102,"size":171,"x":2297.5,"y":200.5},{"id":103,"size":189,"x":928.5,"y":1094.5},{"id":104,"size":180,"x":5389,"y":767},{"id":105,"size":255,"x":3132.5,"y":3062.5},{"id":106,"size":156,"x":4534,"y":3811},{"id":107,"size":219,"x":673.5,"y":5337.5},{"id":108,"size":291,"x":2764.5,"y":3362.5},{"id":109,"size":258,"x":5791,"y":4942},{"id":110,"size":216,"x":5752,"y":2307},{"id":111,"size":201,"x":3696.5,"y":4958.5},{"id":112,"size":159,"x":4328.5,"y":1253.5}]}'),o=JSON.parse('[{"id":0,"url":"player","cost":0},{"id":1,"url":"skull","cost":200},{"id":2,"url":"smileyface","cost":100},{"id":3,"url":"target","cost":100}]');class d extends Phaser.Scene{constructor(){super(),this.left=!1,this.right=!1,this.up=!1,this.down=!1,this.frames=0}preload(){for(let t of Object.keys(o))this.load.image(`skin_${o[t].id}`,`/img/skins/${o[t].url}.png`);this.load.image("player","/img/skins/player.png"),this.load.image("coin","/img/gameObjects/coin.png"),this.load.image("grass","/img/gameObjects/tile.png"),this.load.image("bullet","/img/gameObjects/bullet.png"),this.load.image("pistol","/img/guns/pistol.png"),this.load.image("obstacle","/img/gameObjects/obstacle.png"),this.load.image("obstacle2","/img/gameObjects/obstacle2.png"),this.load.image("tree","/img/gameObjects/tree.png"),this.loadingtext=new i(this,window.innerWidth/2,window.innerHeight/2,"Loading...",{fontSize:100}).setOrigin(.5)}create(){this.loaded=!1,this.socket=io("https://blaster2d.ruiwenge2.repl.co"),this.coins=this.physics.add.group(),this.trees=this.physics.add.group(),this.enemies=[],this.socket.emit("join",localStorage.getItem("name")),this.socket.on("gamedata",(t=>{this.loaded=!0,this.loadingtext.destroy(),this.player=this.physics.add.sprite(t.players[this.socket.id].x,t.players[this.socket.id].y,"player").setScale(.6,.6).setDepth(1),this.playerInfo={x:this.player.x,y:this.player.y},this.cameras.main.startFollow(this.player),this.data={x:t.players[this.socket.id].x,y:t.players[this.socket.id].y,angle:0,angle2:0};for(let e of t.coins)this.coins.create(e.x,e.y,"coin").setScale(.75,.75).setDepth(1).id=e.id;for(let t of n.T)this.trees.create(t.x,t.y,"tree").setScale(t.size/300).setDepth(10).id=t.id;for(let e of Object.keys(t.players))this.socket.id;this.main()})),this.socket.on("new player",((t,e)=>{this.addPlayer(t)})),this.socket.on("other player move",((t,e)=>{this.otherplayers.getChildren().forEach((i=>{i.id==t&&(i.setPosition(e.x,e.y),i.angle=e.angle,this.otherguns.getChildren().forEach((i=>{i.id==t&&(i.angle=e.angle,i.angle2=e.angle2,i.setPosition(e.gunx,e.guny))})))}))})),this.socket.on("collected gold",(t=>{for(let e of this.coins.children.entries)e.id==t&&(e.destroy(),console.log("deleted coin"))})),this.socket.on("left",(t=>{for(let e of this.otherplayers.children.entries)e.id==t&&e.destroy();for(let e of this.otherguns.children.entries)e.id==t&&e.destroy()})),this.socket.on("leave",(()=>{this.scene.start("disconnect_scene")}))}main(){setInterval((()=>{console.log(this.frames),this.frames=0}),1e3),this.w=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),this.a=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),this.s=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),this.d=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);for(let t=100;t<6e3;t+=200)for(let e=100;e<6e3;e+=200)this.physics.add.image(t,e,"grass").setDepth(0).setScale(200/60,200/60);this.obstacle1=this.physics.add.staticSprite(3e3,2250,"obstacle").setDepth(0),this.obstacle2=this.physics.add.staticSprite(3e3,3750,"obstacle").setDepth(0),this.obstacle3=this.physics.add.staticSprite(2250,3e3,"obstacle2").setDepth(0),this.obstacle4=this.physics.add.staticSprite(3750,3e3,"obstacle2").setDepth(0),this.gun=this.physics.add.sprite(this.player.x,this.player.y,"pistol").setDepth(15),this.gun.angle2=0,this.bullets=this.physics.add.group(),this.health=100,this.healthtext=new i(this,100,50,"Health"),this.healthbar=this.add.rectangle(200,100,200,20,16777215).setDepth(10),this.healthbar.scrollFactorX=0,this.healthbar.scrollFactorY=0,this.healthbarinside=this.add.rectangle(200,100,200,20,6353420).setDepth(10),this.healthbarinside.scrollFactorX=0,this.healthbarinside.scrollFactorY=0,this.score=0,this.scoretext=new i(this,window.innerWidth-200,100,"Score: "+this.score),this.gold=0,this.goldtext=new i(this,window.innerWidth-200,150,"Gold: "+this.gold),this.addWeaponActions();var t=this;this.healFunction=setInterval((function(){t.health<100&&(t.health+=1,t.updateHealthBar())}),1e3),this.physics.add.collider(this.player,this.coins,((t,e)=>{this.collect(t,e)})),this.physics.add.collider(this.bullets,this.obstacle1,((t,e)=>{e.destroy()})),this.physics.add.collider(this.player,this.obstacle1,(()=>{this.player.setVelocityX(0),this.player.setVelocityY(0)})),this.physics.add.collider(this.bullets,this.obstacle2,((t,e)=>{e.destroy()})),this.physics.add.collider(this.player,this.obstacle2,(()=>{this.player.setVelocityX(0),this.player.setVelocityY(0)})),this.physics.add.collider(this.bullets,this.obstacle3,((t,e)=>{e.destroy()})),this.physics.add.collider(this.player,this.obstacle3,(()=>{this.player.setVelocityX(0),this.player.setVelocityY(0)})),this.physics.add.collider(this.bullets,this.obstacle4,((t,e)=>{e.destroy()})),this.physics.add.collider(this.player,this.obstacle4,(()=>{this.player.setVelocityX(0),this.player.setVelocityY(0)})),this.socket.on("gamestate",(t=>{this.frames+=1;let e=t.players[this.socket.id];this.playerInfo.x=e.x,this.playerInfo.y=e.y,this.tweens.add({targets:this.player,x:this.playerInfo.x,y:this.playerInfo.y,duration:33.333333333333336})}))}addPlayer(t){t={id:t.id,x:t.x,y:t.y,player:this.add.image(t.x,t.y,"player").setScale(.5,.5).setDepth(1),gun:this.add.image(t.x+30,t.y,"pistol").setDepth(15),angle:null,healthbar:void 0,nametext:void 0},this.enemies.push(t)}updatePlayers(t){}collect(e,i){this.socket.emit("collect gold",i.id),console.log(i.id),this.gold+=1,this.goldtext.setText("Gold: "+this.gold),i.destroy(),this.gold>localStorage.getItem("bestgold")&&localStorage.setItem("bestgold",this.gold);for(let e=0;e<t(0,2);e++)this.coins.create(t(18.75,5981.25),t(18.75,5981.25),"coin").setScale(.75,.75)}updateHealthBar(){this.health<0&&(this.health=0),this.healthbarinside.width=200*this.health/100}addWeaponActions(){this.useweapon=!0,window.addEventListener("mousedown",(t=>{if(!this.useweapon)return;var e=Math.atan2(t.clientY-window.innerHeight/2,t.clientX-window.innerWidth/2);let i=this.bullets.create(this.player.x+53*Math.cos(e),this.player.y+53*Math.sin(e),"bullet").setScale(.5,2).setDepth(13);i.angle=(180*e/Math.PI+360)%360,i.setVelocityX(1500*Math.cos(e)),i.setVelocityY(1500*Math.sin(e)),this.gun.angle=(180*e/Math.PI+360)%360,this.gun.angle2=e,this.useweapon=!1})),window.addEventListener("mousemove",(t=>{var e=Math.atan2(t.clientY-window.innerHeight/2,t.clientX-window.innerWidth/2);this.gun.angle=(180*e/Math.PI+360)%360,this.gun.angle2=e})),setInterval((()=>{this.useweapon||(this.useweapon=!0)}),500)}update(){if(!this.loaded)return;this.fpstext||(this.fpstext=new i(this,window.innerWidth-200,200,"Loading FPS...")),this.fpstext.setText("FPS: "+Math.round(this.sys.game.loop.actualFps));let t=this.input.keyboard.createCursorKeys();t.left.isDown||this.a.isDown?this.left||(this.socket.emit("movement","left"),this.left=!0,this.right=!1):this.left&&(this.socket.emit("movement_end","left"),this.left=!1),t.right.isDown||this.d.isDown?this.right||(this.socket.emit("movement","right"),this.right=!0,this.left=!1):this.right&&(this.socket.emit("movement_end","right"),this.right=!1),t.up.isDown||this.w.isDown?this.up||(this.socket.emit("movement","up"),this.up=!0,this.down=!1):this.up&&(this.socket.emit("movement_end","up"),this.up=!1),t.down.isDown||this.s.isDown?this.down||(this.socket.emit("movement","down"),this.down=!0,this.up=!1):this.down&&(this.socket.emit("movement_end","down"),this.down=!1),this.gun.x=this.player.body.position.x+30+58*Math.cos(this.gun.angle2),this.gun.y=this.player.body.position.y+30+58*Math.sin(this.gun.angle2),this.player.angle=this.gun.angle,this.player.x==this.data.x&&this.player.y==this.data.y&&this.player.angle==this.data.angle||(this.data.angle=this.gun.angle,this.data.angle2=this.gun.angle2,this.data.gunx=this.gun.x,this.data.guny=this.gun.y)}}const a=d;class l extends Phaser.Scene{constructor(){super()}preload(){}create(){localStorage.getItem("bestscore")||localStorage.setItem("bestscore",0),localStorage.getItem("bestgold")||localStorage.setItem("bestgold",0),this.add.text(window.innerWidth/2,100,"Game",{fontFamily:"Arial",fontSize:100}).setOrigin(.5),this.button=this.add.rectangle(0,0,0,0,240),this.text=this.add.text(window.innerWidth/2,window.innerHeight/2.5,"Play",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button.width=this.text.width+15,this.button.height=this.text.height+15,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",(()=>{this.scene.start("gamescene")})),this.button2=this.add.rectangle(0,0,0,0,240),this.text2=this.add.text(window.innerWidth/2,window.innerHeight/1.8,"How To Play",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button2.width=this.text2.width+15,this.button2.height=this.text2.height+15,this.button2.x=this.text2.x-this.text2.width/2-5,this.button2.y=this.text2.y-this.text2.height/2-5,this.button2.setInteractive().on("pointerdown",(()=>{this.scene.start("howtoplay")})),this.button3=this.add.rectangle(0,0,0,0,240),this.text3=this.add.text(window.innerWidth/2,window.innerHeight/1.4,"Your Best Scores",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button3.width=this.text3.width+15,this.button3.height=this.text3.height+15,this.button3.x=this.text3.x-this.text3.width/2-5,this.button3.y=this.text3.y-this.text3.height/2-5,this.button3.setInteractive().on("pointerdown",(()=>{this.scene.start("bestscores")}))}update(){}}const r=l;class c extends Phaser.Scene{constructor(){super()}preload(){}create(){this.add.text(window.innerWidth/2,100,"How To Play",{fontFamily:"Arial",fontSize:75}).setOrigin(.5),this.button=this.add.rectangle(0,0,0,0,240),this.text=this.add.text(window.innerWidth/2,window.innerHeight/1.5,"Back",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button.width=this.text.width+10,this.button.height=this.text.height+10,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",(()=>{this.scene.start("joinscene")}))}update(){}}const y=c;class x extends Phaser.Scene{constructor(){super()}preload(){}create(){this.add.text(window.innerWidth/2,100,"You Died",{fontFamily:"Arial",fontSize:100}).setOrigin(.5),this.button=this.add.rectangle(0,0,0,0,240),this.text=this.add.text(window.innerWidth/2,window.innerHeight/2,"OK",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button.width=this.text.width+15,this.button.height=this.text.height+15,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",(()=>{this.scene.start("joinscene")}))}update(){}}const g=x;class p extends Phaser.Scene{constructor(){super()}preload(){}create(){this.add.text(window.innerWidth/2,100,"Your Best",{fontFamily:"Arial",fontSize:100}).setOrigin(.5),this.add.text(window.innerWidth/2,300,"Score: "+localStorage.getItem("bestscore"),{fontFamily:"Arial",fontSize:75}).setOrigin(.5),this.add.text(window.innerWidth/2,400,"Gold: "+localStorage.getItem("bestgold"),{fontFamily:"Arial",fontSize:75}).setOrigin(.5),this.button=this.add.rectangle(0,0,0,0,240),this.text=this.add.text(window.innerWidth/2,window.innerHeight/1.25,"Back",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button.width=this.text.width+15,this.button.height=this.text.height+15,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",(()=>{this.scene.start("joinscene")}))}update(){}}const u=p;class w extends Phaser.Scene{constructor(){super()}preload(){}create(){this.disconnecttext=new i(this,window.innerWidth/2,100,"You got disconnected",{fontSize:50}).setOrigin(.5),this.button=new h(this,window.innerWidth/2,window.innerHeight/2,"OK",(()=>{location.reload()}))}update(){}}const z=w,f={type:Phaser.AUTO,width:window.innerWidth,height:window.innerHeight,backgroundColor:"#000000",physics:{default:"arcade",arcade:{gravity:{y:0},debug:!1}}};localStorage.getItem("name")&&!loggedIn&&(document.getElementById("input").value=localStorage.getItem("name")),document.getElementById("playbtn").addEventListener("click",(function(){let t=document.getElementById("input").value;if(!t.replace(/\s/g,""))return void(document.querySelector("p").style.display="block");localStorage.setItem("name",t);const e=new Phaser.Game(f);e.scene.add("gamescene",a),e.scene.add("joinscene",r),e.scene.add("howtoplay",y),e.scene.add("diedscene",g),e.scene.add("bestscores",u),e.scene.add("disconnect_scene",z),e.scene.start("gamescene"),document.querySelector("canvas").style.cursor="crosshair",window.addEventListener("resize",(()=>{e.scale.resize(window.innerWidth,window.innerHeight)})),document.querySelector("main").style.display="none"}))})();