// data/ai-tips.js
// 森林长者每日趣味知识库
// 每条知识包含：趣味知识、推荐角色、AI 推送消息、鼓励语

const dailyTips = [
  {
    dayOfYear: 1,
    knowledge: '你知道吗？植物喝水后会通过叶子"出汗"（蒸腾作用），就像小朋友运动后会出汗一样！',
    suggestedCharId: 'L10',
    aiMessage: '🌿 今天森林长者说：植物们口渴啦！让「浇水小园丁」给它们送去生命之水吧！',
    encouragement: '每一滴水都是植物的宝藏，你真是个细心的小园丁！💧'
  },
  {
    dayOfYear: 2,
    knowledge: '你知道吗？蚂蚁能搬运比自己重 50 倍的东西！它们是最小的"大力士"。',
    suggestedCharId: 'L09',
    aiMessage: '🐜 森林长者说：小蚂蚁都能搬运大垃圾，你也能做个"落叶搬运工"！把垃圾送回它们的家吧！',
    encouragement: '你比蚂蚁还要厉害，因为蚂蚁不会分类垃圾，你会！🌟'
  },
  {
    dayOfYear: 3,
    knowledge: '你知道吗？地球上的氧气有一半来自海洋里的浮游植物，它们是最小的"森林"！',
    suggestedCharId: 'S03',
    aiMessage: '🌊 森林长者说：连微小的浮游植物都在为地球制造氧气，你也能让房间变得焕然一新！出发吧，房间守护者！',
    encouragement: '整洁的房间就像一片清新的海洋！🏖️'
  },
  {
    dayOfYear: 4,
    knowledge: '你知道吗？猫咪一天要睡 16 个小时，但它们醒着的时候总在"洗脸"整理自己。',
    suggestedCharId: 'L07',
    aiMessage: '🐱 森林长者说：猫咪那么爱干净，你也能把衣服叠得整整齐齐！今天的角色是「折叠小能手」！',
    encouragement: '你的衣服一定被叠得比猫咪的毛还要整齐！😺'
  },
  {
    dayOfYear: 5,
    knowledge: '你知道吗？蜜蜂跳"8字舞"来告诉同伴花蜜在哪里，它们用跳舞来 communication！',
    suggestedCharId: 'S07',
    aiMessage: '🐝 森林长者说：蜜蜂们忙着采蜜，厨房也需要你的帮助！今天来当「火焰厨师」，施展食物魔法吧！',
    encouragement: '你做的每一道菜都是一支美味的舞蹈！🎶'
  },
  {
    dayOfYear: 6,
    knowledge: '你知道吗？蜘蛛丝比同样粗细的钢丝还要坚固！大自然的工程师真的很厉害。',
    suggestedCharId: 'S04',
    aiMessage: '🕷️ 森林长者说：蜘蛛用丝织出精美的网，你也能用扫把"织"出一片干净的地面！地面净化师出动！',
    encouragement: '你的清洁魔法比蜘蛛丝还要厉害！✨'
  },
  {
    dayOfYear: 7,
    knowledge: '你知道吗？树懒虽然动作很慢，但它们能在树上生活得非常好。每个人都有自己的节奏！',
    suggestedCharId: 'L06',
    aiMessage: '🦥 森林长者说：慢慢来也没关系，今天让「软枕精灵」把床铺整理好吧，铺平被子放好枕头～',
    encouragement: '你的小床已经准备好迎接美美的梦乡了！🌙'
  },
  {
    dayOfYear: 8,
    knowledge: '你知道吗？海豚睡觉时只闭一只眼睛，另一半大脑还在工作！它们真的太聪明了。',
    suggestedCharId: 'S01',
    aiMessage: '🐬 森林长者说：聪明的海豚也知道提前准备好明天要用的东西！智慧守护者，整理好你的书包吧！',
    encouragement: '你的书包一定整理得像海豚的海底世界一样有条理！🌊'
  },
  {
    dayOfYear: 9,
    knowledge: '你知道吗？蝴蝶用脚来"尝"味道，它们站在花朵上就能知道花蜜甜不甜！',
    suggestedCharId: 'L11',
    aiMessage: '🦋 森林长者说：蝴蝶用脚尝味道，而你可以用小手来给水果洗澡！今天当个「水果收集者」吧！',
    encouragement: '被洗过的水果一定像花蜜一样甜美！🍓'
  },
  {
    dayOfYear: 10,
    knowledge: '你知道吗？大象会用鼻子吸水然后喷在身上洗澡，它们是最聪明的"自助洗车"！',
    suggestedCharId: 'L01',
    aiMessage: '🐘 森林长者说：大象自己会洗澡，你也能用湿巾给桌子"洗个脸"！小草精灵出发！',
    encouragement: '桌子被你擦得比大象的象牙还要亮！🪞'
  },
  {
    dayOfYear: 11,
    knowledge: '你知道吗？猫头鹰的头可以转 270 度，它们不用转身就能看到身后的东西！',
    suggestedCharId: 'S05',
    aiMessage: '🦉 森林长者说：猫头鹰能看清每一个角落，碗碟骑士也要不放过任何一个脏碗！开始洗碗吧！',
    encouragement: '你的碗洗得比猫头鹰的眼睛还要明亮！🌙'
  },
  {
    dayOfYear: 12,
    knowledge: '你知道吗？企鹅会互相赠送光滑的石头来表达友好，它们是最浪漫的"送礼达人"。',
    suggestedCharId: 'L05',
    aiMessage: '🐧 森林长者说：企鹅给同伴送石头，你也可以给宠物送食物和水呀！宠物小护士，出发！',
    encouragement: '你的宠物一定觉得你是全世界最好的朋友！🐾'
  },
  {
    dayOfYear: 13,
    knowledge: '你知道吗？蜗牛可以在锋利的刀刃上爬行而不会受伤，它们的黏液是最好的"防护盾"！',
    suggestedCharId: 'L12',
    aiMessage: '🐌 森林长者说：蜗牛有黏液保护，你在厨房里也需要爸爸妈妈的保护！小火苗厨师，来打鸡蛋吧！',
    encouragement: '你在厨房里的样子就像蜗牛一样勇敢！🥚'
  },
  {
    dayOfYear: 14,
    knowledge: '你知道吗？章鱼有三颗心脏，两颗专门给鳃供血，一颗给全身供血！',
    suggestedCharId: 'S06',
    aiMessage: '🐙 森林长者说：章鱼有三颗心脏来操控水流，你也能用一颗心来操控洗衣机！洗衣法师，开始吧！',
    encouragement: '一颗心就够了，你的衣服会被洗得干干净净！🌀'
  },
  {
    dayOfYear: 15,
    knowledge: '你知道吗？啄木鸟啄木的速度能达到每小时 2000 米，但不会头疼，因为它们的头骨有"减震器"！',
    suggestedCharId: 'S10',
    aiMessage: '🪶 森林长者说：啄木鸟会用嘴"操控"树木，你也能用吸尘器来清理灰尘！电器操控者，出发！',
    encouragement: '你驾驭吸尘器的样子比啄木鸟还要酷！🔌'
  },
  {
    dayOfYear: 16,
    knowledge: '你知道吗？变色龙变色不是为了躲藏，而是为了表达心情！开心的时候颜色更鲜艳。',
    suggestedCharId: 'S11',
    aiMessage: '🦎 森林长者说：变色龙用颜色表达心情，你也能用整理衣柜来表达对生活的热爱！衣柜守卫者出动！',
    encouragement: '你的衣柜现在像彩虹一样整整齐齐！🌈'
  },
  {
    dayOfYear: 17,
    knowledge: '你知道吗？鲸鱼会"合唱"，一群鲸鱼一起发出声音来交流，它们的歌声能传几百公里！',
    suggestedCharId: 'L03',
    aiMessage: '🐳 森林长者说：鲸鱼用歌声交流，你也能用水流的声音帮碗筷"回家"！水滴帮手，把碗筷放到水池吧！',
    encouragement: '哗啦啦的水声是你最棒的合唱！💧'
  },
  {
    dayOfYear: 18,
    knowledge: '你知道吗？树袋熊（考拉）每天睡 22 个小时，因为它们吃的桉树叶营养很少，需要节省能量。',
    suggestedCharId: 'L08',
    aiMessage: '🐨 森林长者说：考拉提前选好桉树叶，你也能为明天选好衣服！明日准备师，准备好明天的装备吧！',
    encouragement: '明天的你一定感谢今天做好准备的你！👔'
  },
  {
    dayOfYear: 19,
    knowledge: '你知道吗？河马分泌的红色液体像"防晒霜"，能保护它们敏感的皮肤不被晒伤。',
    suggestedCharId: 'S02',
    aiMessage: '🦛 森林长者说：河马懂得保护自己，你也能帮垃圾分类！不同的垃圾有不同的"家"，垃圾分类官出动！',
    encouragement: