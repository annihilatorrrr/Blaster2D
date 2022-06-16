(()=>{"use strict";const t=6e3;function e(t,e){return Math.round(Math.random()*(e-t))+t}function i(e,i,s){return!("left"==e&&i<=0||"right"==e&&i+50>=t||"up"==e&&s<=0||"down"==e&&s+50>=t||"none"==e)}class s extends Phaser.GameObjects.Text{constructor(t,e,i,s,h){h||((h={}).fontFamily="Arial",h.fontSize=30,h.background=255),"fontFamily"in h||(h.fontFamily="Arial"),"fontSize"in h||(h.fontSize=30),super(t,e,i,s,h),this.scrollFactorX=0,this.scrollFactorY=0,this.setDepth(100),t.add.existing(this)}}const h=s;class n extends Phaser.GameObjects.Container{constructor(t,e,i,s,n,o){super(t),o||((o={}).fontSize=50,o.fontFamily="Arial",o.background=255),"fontSize"in o||(o.fontSize=50),"fontFamily"in o||(o.fontFamily="Arial"),"background"in o||(o.background=255),this.text=new h(t,e,i,s,{fontSize:o.fontSize,fontFamily:o.fontFamily}).setOrigin(.5),this.button=t.add.rectangle(0,0,0,0,o.background).setDepth(99),this.button.scrollFactorX=0,this.button.scrollFactorY=0,this.button.width=this.text.width+15,this.button.height=this.text.height+15,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",n),t.add.existing(this)}}const o=n,a=JSON.parse('{"T":[{"id":0,"size":276,"x":917,"y":587},{"id":1,"size":204,"x":5788,"y":1572},{"id":2,"size":216,"x":5256,"y":5182},{"id":3,"size":285,"x":350.5,"y":2581.5},{"id":4,"size":159,"x":1329.5,"y":2328.5},{"id":5,"size":153,"x":976.5,"y":2189.5},{"id":6,"size":177,"x":1706.5,"y":4258.5},{"id":7,"size":180,"x":387,"y":4643},{"id":8,"size":186,"x":4831,"y":2271},{"id":9,"size":270,"x":3412,"y":4792},{"id":10,"size":240,"x":3340,"y":5078},{"id":11,"size":285,"x":4287.5,"y":5297.5},{"id":12,"size":231,"x":1417.5,"y":4192.5},{"id":13,"size":288,"x":612,"y":1543},{"id":14,"size":276,"x":5263,"y":2478},{"id":15,"size":153,"x":2340.5,"y":1811.5},{"id":16,"size":153,"x":2363.5,"y":4373.5},{"id":17,"size":177,"x":2599.5,"y":5748.5},{"id":18,"size":174,"x":3662,"y":4711},{"id":19,"size":240,"x":2550,"y":1396},{"id":20,"size":243,"x":168.5,"y":4049.5},{"id":21,"size":264,"x":4054,"y":3960},{"id":22,"size":213,"x":5690.5,"y":636.5},{"id":23,"size":156,"x":2800,"y":2819},{"id":24,"size":171,"x":1981.5,"y":3810.5},{"id":25,"size":264,"x":1679,"y":143},{"id":26,"size":240,"x":3923,"y":4841},{"id":27,"size":285,"x":907.5,"y":4837.5},{"id":28,"size":264,"x":1504,"y":3087},{"id":29,"size":183,"x":3044.5,"y":5768.5},{"id":30,"size":300,"x":5320,"y":961},{"id":31,"size":204,"x":1487,"y":1368},{"id":32,"size":249,"x":1937.5,"y":596.5},{"id":33,"size":294,"x":5145,"y":1254},{"id":34,"size":231,"x":4810.5,"y":301.5},{"id":35,"size":294,"x":2820,"y":4518},{"id":36,"size":285,"x":2401.5,"y":549.5},{"id":37,"size":162,"x":786,"y":5220},{"id":38,"size":246,"x":1821,"y":238},{"id":39,"size":165,"x":4346.5,"y":1571.5},{"id":40,"size":258,"x":1561,"y":3451},{"id":41,"size":150,"x":4416,"y":4076},{"id":42,"size":222,"x":740,"y":1397},{"id":43,"size":165,"x":5548.5,"y":2547.5},{"id":44,"size":291,"x":3177.5,"y":555.5},{"id":45,"size":159,"x":2885.5,"y":1487.5},{"id":46,"size":162,"x":1949,"y":899},{"id":47,"size":216,"x":1346,"y":5365},{"id":48,"size":276,"x":4302,"y":2808},{"id":49,"size":282,"x":2215,"y":3229},{"id":50,"size":162,"x":1678,"y":620},{"id":51,"size":192,"x":260,"y":3054},{"id":52,"size":171,"x":3639.5,"y":4941.5},{"id":53,"size":207,"x":3928.5,"y":3310.5},{"id":54,"size":195,"x":3017.5,"y":944.5},{"id":55,"size":288,"x":1440,"y":445},{"id":56,"size":168,"x":397,"y":1888},{"id":57,"size":228,"x":3932,"y":3234},{"id":58,"size":207,"x":5377.5,"y":2783.5},{"id":59,"size":156,"x":4888,"y":3474},{"id":60,"size":216,"x":2600,"y":3707},{"id":61,"size":273,"x":4583.5,"y":2428.5},{"id":62,"size":285,"x":3126.5,"y":3207.5},{"id":63,"size":186,"x":624,"y":684},{"id":64,"size":183,"x":5619.5,"y":3903.5},{"id":65,"size":255,"x":440.5,"y":5847.5},{"id":66,"size":186,"x":2190,"y":2289},{"id":67,"size":297,"x":4718.5,"y":1877.5},{"id":68,"size":162,"x":5766,"y":249},{"id":69,"size":159,"x":814.5,"y":828.5},{"id":70,"size":231,"x":362.5,"y":3358.5},{"id":71,"size":270,"x":1070,"y":1809},{"id":72,"size":210,"x":144,"y":2627},{"id":73,"size":246,"x":2599,"y":4462},{"id":74,"size":264,"x":1373,"y":470},{"id":75,"size":171,"x":159.5,"y":575.5},{"id":76,"size":192,"x":1815,"y":2296},{"id":77,"size":201,"x":2892.5,"y":2236.5},{"id":78,"size":267,"x":5678.5,"y":284.5},{"id":79,"size":285,"x":5367.5,"y":1624.5},{"id":80,"size":246,"x":3516,"y":4503},{"id":81,"size":255,"x":5462.5,"y":5745.5},{"id":82,"size":282,"x":558,"y":4163},{"id":83,"size":150,"x":3970,"y":168},{"id":84,"size":201,"x":2578.5,"y":297.5},{"id":85,"size":264,"x":2080,"y":3070},{"id":86,"size":174,"x":3243,"y":2105},{"id":87,"size":174,"x":1108,"y":3357},{"id":88,"size":198,"x":3135,"y":5477},{"id":89,"size":174,"x":2912,"y":2136},{"id":90,"size":219,"x":1974.5,"y":4861.5},{"id":91,"size":162,"x":1119,"y":843},{"id":92,"size":264,"x":5107,"y":4765},{"id":93,"size":264,"x":5451,"y":2841},{"id":94,"size":255,"x":5332.5,"y":5094.5},{"id":95,"size":180,"x":2038,"y":5459},{"id":96,"size":186,"x":3336,"y":221},{"id":97,"size":201,"x":5189.5,"y":3830.5},{"id":98,"size":210,"x":3612,"y":1143},{"id":99,"size":276,"x":1447,"y":4932},{"id":100,"size":231,"x":205.5,"y":932.5}]}');class d extends Phaser.Scene{constructor(){super()}preload(){for(let t of Object.keys(skins))this.load.image(`skin_${skins[t].id}`,`/img/skins/${skins[t].url}.png`);this.load.image("player","/img/skins/player.png"),this.load.image("coin","/img/gameObjects/coin.png"),this.load.image("grass","/img/gameObjects/tile.png"),this.load.image("bullet","/img/gameObjects/bullet.png"),this.load.image("pistol","/img/guns/pistol.png"),this.load.image("obstacle","/img/gameObjects/obstacle.png"),this.load.image("obstacle2","/img/gameObjects/obstacle2.png"),this.load.image("tree","/img/gameObjects/tree.png"),this.loadingtext=new h(this,window.innerWidth/2,window.innerHeight/2,"Loading...",{fontSize:100}).setOrigin(.5)}create(){this.loaded=!1,this.socket=io(),this.otherplayers=this.physics.add.group(),this.otherguns=this.physics.add.group(),this.coins=this.physics.add.group(),this.trees=this.physics.add.group(),this.socket.emit("join",localStorage.getItem("name")),this.socket.on("gamedata",(t=>{this.loaded=!0,this.loadingtext.destroy(),this.player=this.physics.add.sprite(t.players[this.socket.id].x,t.players[this.socket.id].y,"player").setScale(.5,.5).setDepth(1),this.cameras.main.startFollow(this.player),this.data={x:t.players[this.socket.id].x,y:t.players[this.socket.id].y,angle:0,angle2:0};for(let e of t.coins)this.coins.create(e.x,e.y,"coin").setScale(.75,.75).setDepth(1).id=e.id;for(let t of a.T)this.trees.create(t.x,t.y,"tree").setScale(t.size/300).setDepth(10).id=t.id;for(let e of Object.keys(t.players))if(e!=this.socket.id){this.otherplayers.create(t.players[e].x,t.players[e].y,"player").setScale(.5,.5).setDepth(1).id=e;let i=this.otherguns.create(t.players[e].x+53*Math.cos(t.players[e].angle2),t.players[e].y+53*Math.sin(t.players[e].angle2),"pistol").setDepth(15);i.angle=t.players[e].angle,i.angle2=t.players[e].angle2,i.id=e}this.main()})),this.socket.on("new player",((t,e)=>{let i=this.otherplayers.create(t.x,t.y,"player").setScale(.5,.5).setDepth(1),s=this.otherguns.create(t.x+53*Math.cos(0),t.y+53*Math.sin(0),"pistol").setDepth(15);s.angle=0,s.angle2=0,i.id=e,s.id=e})),this.socket.on("other player move",((t,e)=>{this.otherplayers.getChildren().forEach((i=>{i.id==t&&(i.setPosition(e.x,e.y),i.angle=e.angle,this.otherguns.getChildren().forEach((i=>{i.id==t&&(i.angle=e.angle,i.angle2=e.angle2,i.setPosition(e.gunx,e.guny))})))}))})),this.socket.on("collected gold",(t=>{for(let e of this.coins.children.entries)e.id==t&&(e.destroy(),console.log("deleted coin"))})),this.socket.on("left",(t=>{for(let e of this.otherplayers.children.entries)e.id==t&&e.destroy();for(let e of this.otherguns.children.entries)e.id==t&&e.destroy()})),this.socket.on("leave",(()=>{this.scene.start("disconnect_scene")}))}main(){this.w=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),this.a=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),this.s=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),this.d=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);for(let e=30;e<t;e+=60)for(let i=30;i<t;i+=60)this.physics.add.image(e,i,"grass").setDepth(0);this.obstacle1=this.physics.add.staticSprite(3e3,2250,"obstacle").setDepth(0),this.obstacle2=this.physics.add.staticSprite(3e3,3750,"obstacle").setDepth(0),this.obstacle3=this.physics.add.staticSprite(2250,3e3,"obstacle2").setDepth(0),this.obstacle4=this.physics.add.staticSprite(3750,3e3,"obstacle2").setDepth(0),this.gun=this.physics.add.sprite(this.player.x,this.player.y,"pistol").setDepth(15),this.gun.angle2=0,this.bullets=this.physics.add.group(),this.health=100,this.healthtext=new h(this,100,50,"Health"),this.healthbar=this.add.rectangle(200,100,200,20,16777215).setDepth(10),this.healthbar.scrollFactorX=0,this.healthbar.scrollFactorY=0,this.healthbarinside=this.add.rectangle(200,100,200,20,6353420).setDepth(10),this.healthbarinside.scrollFactorX=0,this.healthbarinside.scrollFactorY=0,this.score=0,this.scoretext=new h(this,window.innerWidth-200,100,"Score: "+this.score),this.gold=0,this.goldtext=new h(this,window.innerWidth-200,150,"Gold: "+this.gold),this.addWeaponActions();var e=this;this.healFunction=setInterval((function(){e.health<100&&(e.health+=1,e.updateHealthBar())}),1e3),this.physics.add.collider(this.player,this.coins,((t,e)=>{this.collect(t,e)})),this.physics.add.collider(this.bullets,this.obstacle1,((t,e)=>{e.destroy()})),this.physics.add.collider(this.player,this.obstacle1,(()=>{this.player.setVelocityX(0),this.player.setVelocityY(0)})),this.physics.add.collider(this.bullets,this.obstacle2,((t,e)=>{e.destroy()})),this.physics.add.collider(this.player,this.obstacle2,(()=>{this.player.setVelocityX(0),this.player.setVelocityY(0)})),this.physics.add.collider(this.bullets,this.obstacle3,((t,e)=>{e.destroy()})),this.physics.add.collider(this.player,this.obstacle3,(()=>{this.player.setVelocityX(0),this.player.setVelocityY(0)})),this.physics.add.collider(this.bullets,this.obstacle4,((t,e)=>{e.destroy()})),this.physics.add.collider(this.player,this.obstacle4,(()=>{this.player.setVelocityX(0),this.player.setVelocityY(0)}))}collect(t,i){this.socket.emit("collect gold",i.id),console.log(i.id),this.gold+=1,this.goldtext.setText("Gold: "+this.gold),i.destroy(),this.gold>localStorage.getItem("bestgold")&&localStorage.setItem("bestgold",this.gold);for(let t=0;t<e(0,2);t++)this.coins.create(e(18.75,5981.25),e(18.75,5981.25),"coin").setScale(.75,.75)}updateHealthBar(){this.health<0&&(this.health=0),this.healthbarinside.width=200*this.health/100}addWeaponActions(){this.useweapon=!0,window.addEventListener("mousedown",(t=>{if(!this.useweapon)return;var e=Math.atan2(t.clientY-window.innerHeight/2,t.clientX-window.innerWidth/2);let i=this.bullets.create(this.player.x+48*Math.cos(e),this.player.y+48*Math.sin(e),"bullet").setScale(.5,2).setDepth(13);i.angle=(180*e/Math.PI+360)%360,i.setVelocityX(1500*Math.cos(e)),i.setVelocityY(1500*Math.sin(e)),this.gun.angle=(180*e/Math.PI+360)%360,this.gun.angle2=e,this.useweapon=!1})),window.addEventListener("mousemove",(t=>{var e=Math.atan2(t.clientY-window.innerHeight/2,t.clientX-window.innerWidth/2);this.gun.angle=(180*e/Math.PI+360)%360,this.gun.angle2=e})),setInterval((()=>{this.useweapon||(this.useweapon=!0)}),500)}update(){if(!this.loaded)return;this.fpstext||(this.fpstext=new h(this,window.innerWidth-200,200,"Loading FPS...")),this.fpstext.setText("FPS: "+Math.round(this.sys.game.loop.actualFps));let t=this.input.keyboard.createCursorKeys();this.player.setVelocityX(0),this.player.setVelocityY(0),(t.left.isDown||this.a.isDown)&&i("left",this.player.body.position.x,this.player.body.position.y)&&this.player.setVelocityX(-275),(t.right.isDown||this.d.isDown)&&i("right",this.player.body.position.x,this.player.body.position.y)&&this.player.setVelocityX(275),(t.up.isDown||this.w.isDown)&&i("up",this.player.body.position.x,this.player.body.position.y)&&this.player.setVelocityY(-275),(t.down.isDown||this.s.isDown)&&i("down",this.player.body.position.x,this.player.body.position.y)&&this.player.setVelocityY(275),this.gun.x=this.player.body.position.x+25+53*Math.cos(this.gun.angle2),this.gun.y=this.player.body.position.y+25+53*Math.sin(this.gun.angle2),this.player.angle=this.gun.angle,this.player.x==this.data.x&&this.player.y==this.data.y&&this.player.angle==this.data.angle||(this.data.x=this.player.x,this.data.y=this.player.y,this.data.angle=this.gun.angle,this.data.angle2=this.gun.angle2,this.data.gunx=this.gun.x,this.data.guny=this.gun.y,this.socket.emit("player move",this.data))}}const l=d;class r extends Phaser.Scene{constructor(){super()}preload(){}create(){localStorage.getItem("bestscore")||localStorage.setItem("bestscore",0),localStorage.getItem("bestgold")||localStorage.setItem("bestgold",0),this.add.text(window.innerWidth/2,100,"Game",{fontFamily:"Arial",fontSize:100}).setOrigin(.5),this.button=this.add.rectangle(0,0,0,0,240),this.text=this.add.text(window.innerWidth/2,window.innerHeight/2.5,"Play",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button.width=this.text.width+15,this.button.height=this.text.height+15,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",(()=>{this.scene.start("gamescene")})),this.button2=this.add.rectangle(0,0,0,0,240),this.text2=this.add.text(window.innerWidth/2,window.innerHeight/1.8,"How To Play",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button2.width=this.text2.width+15,this.button2.height=this.text2.height+15,this.button2.x=this.text2.x-this.text2.width/2-5,this.button2.y=this.text2.y-this.text2.height/2-5,this.button2.setInteractive().on("pointerdown",(()=>{this.scene.start("howtoplay")})),this.button3=this.add.rectangle(0,0,0,0,240),this.text3=this.add.text(window.innerWidth/2,window.innerHeight/1.4,"Your Best Scores",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button3.width=this.text3.width+15,this.button3.height=this.text3.height+15,this.button3.x=this.text3.x-this.text3.width/2-5,this.button3.y=this.text3.y-this.text3.height/2-5,this.button3.setInteractive().on("pointerdown",(()=>{this.scene.start("bestscores")}))}update(){}}const y=r;class c extends Phaser.Scene{constructor(){super()}preload(){}create(){this.add.text(window.innerWidth/2,100,"How To Play",{fontFamily:"Arial",fontSize:75}).setOrigin(.5),this.button=this.add.rectangle(0,0,0,0,240),this.text=this.add.text(window.innerWidth/2,window.innerHeight/1.5,"Back",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button.width=this.text.width+10,this.button.height=this.text.height+10,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",(()=>{this.scene.start("joinscene")}))}update(){}}const g=c;class x extends Phaser.Scene{constructor(){super()}preload(){}create(){this.add.text(window.innerWidth/2,100,"You Died",{fontFamily:"Arial",fontSize:100}).setOrigin(.5),this.button=this.add.rectangle(0,0,0,0,240),this.text=this.add.text(window.innerWidth/2,window.innerHeight/2,"OK",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button.width=this.text.width+15,this.button.height=this.text.height+15,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",(()=>{this.scene.start("joinscene")}))}update(){}}const p=x;class u extends Phaser.Scene{constructor(){super()}preload(){}create(){this.add.text(window.innerWidth/2,100,"Your Best",{fontFamily:"Arial",fontSize:100}).setOrigin(.5),this.add.text(window.innerWidth/2,300,"Score: "+localStorage.getItem("bestscore"),{fontFamily:"Arial",fontSize:75}).setOrigin(.5),this.add.text(window.innerWidth/2,400,"Gold: "+localStorage.getItem("bestgold"),{fontFamily:"Arial",fontSize:75}).setOrigin(.5),this.button=this.add.rectangle(0,0,0,0,240),this.text=this.add.text(window.innerWidth/2,window.innerHeight/1.25,"Back",{fill:"#ffffff",fontFamily:"Arial",fontSize:50}).setOrigin(.5),this.button.width=this.text.width+15,this.button.height=this.text.height+15,this.button.x=this.text.x-this.text.width/2-5,this.button.y=this.text.y-this.text.height/2-5,this.button.setInteractive().on("pointerdown",(()=>{this.scene.start("joinscene")}))}update(){}}const w=u;class b extends Phaser.Scene{constructor(){super()}preload(){}create(){this.disconnecttext=new h(this,window.innerWidth/2,100,"You got disconnected",{fontSize:50}).setOrigin(.5),this.button=new o(this,window.innerWidth/2,window.innerHeight/2,"OK",(()=>{location.reload()}))}update(){}}const z=b,f={type:Phaser.AUTO,width:window.innerWidth,height:window.innerHeight,backgroundColor:"#000000",physics:{default:"arcade",arcade:{gravity:{y:0},debug:!1}}};localStorage.getItem("name")&&!loggedIn&&(document.getElementById("input").value=localStorage.getItem("name")),document.getElementById("playbtn").addEventListener("click",(function(){let t=document.getElementById("input").value;if(!t.replace(/\s/g,""))return void(document.querySelector("p").style.display="block");localStorage.setItem("name",t);const e=new Phaser.Game(f);e.scene.add("gamescene",l),e.scene.add("joinscene",y),e.scene.add("howtoplay",g),e.scene.add("diedscene",p),e.scene.add("bestscores",w),e.scene.add("disconnect_scene",z),e.scene.start("gamescene"),document.querySelector("canvas").style.cursor="crosshair",window.addEventListener("resize",(()=>{e.scale.resize(window.innerWidth,window.innerHeight)})),document.querySelector("main").style.display="none"}))})();