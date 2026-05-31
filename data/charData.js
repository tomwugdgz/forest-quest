// 角色卡数据
// Forest Quest - 家务轮盘游戏
// 包含所有年龄段的角色卡定义

const charSets = {
  // 3-6岁 小小冒险家
  little: [
    {
      id: 'L01',
      name: '小草精灵',
      emoji: '🌱',
      task: '用湿巾擦拭低矮桌椅',
      description: '用魔法湿巾给桌子洗个脸！',
      rarity: 'N',
      xp: 10,
      gold: 5,
      category: 'clean'
    },
    {
      id: 'L02',
      name: '微风清扫者',
      emoji: '🍃',
      task: '简单扫地',
      description: '拿起小扫把，把落叶扫成一堆！',
      rarity: 'N',
      xp: 10,
      gold: 5,
      category: 'clean'
    },
    {
      id: 'L03',
      name: '水滴帮手',
      emoji: '💧',
      task: '饭后收拾碗筷放到水池',
      description: '帮碗筷找到回家的路！',
      rarity: 'N',
      xp: 10,
      gold: 5,
      category: 'kitchen'
    },
    {
      id: 'L04',
      name: '餐桌小帮手',
      emoji: '🍽️',
      task: '饭前摆放餐具',
      description: '给每个座位摆上碗筷！',
      rarity: 'N',
      xp: 10,
      gold: 5,
      category: 'kitchen'
    },
    {
      id: 'L05',
      name: '宠物小护士',
      emoji: '🐾',
      task: '给宠物添粮换水',
      description: '小动物饿了，去照顾它们！',
      rarity: 'N',
      xp: 10,
      gold: 5,
      category: 'pet'
    },
    {
      id: 'L06',
      name: '软枕精灵',
      emoji: '🛏️',
      task: '帮忙整理床铺',
      description: '把被子铺平，枕头放好！',
      rarity: 'N',
      xp: 10,
      gold: 5,
      category: 'bed'
    },
    {
      id: 'L07',
      name: '折叠小能手',
      emoji: '👕',
      task: '叠放自己的衣物',
      description: '把衣服变得整整齐齐！',
      rarity: 'N',
      xp: 10,
      gold: 5,
      category: 'clothes'
    },
    {
      id: 'L08',
      name: '明日准备师',
      emoji: '🌅',
      task: '准备第二天要穿的衣服',
      description: '为明天的冒险选好装备！',
      rarity: 'N',
      xp: 10,
      gold: 5,
      category: 'clothes'
    },
    {
      id: 'L09',
      name: '落叶搬运工',
      emoji: '🧹',
      task: '把垃圾放到垃圾桶',
      description: '把垃圾送回它的家！',
      rarity: 'N',
      xp: 10,
      gold: 5,
      category: 'trash'
    },
    {
      id: 'L10',
      name: '浇水小园丁',
      emoji: '🌿',
      task: '给植物浇水',
      description: '给小树喝水，让它长大！',
      rarity: 'N',
      xp: 10,
      gold: 5,
      category: 'nature'
    },
    {
      id: 'L11',
      name: '水果收集者',
      emoji: '🍎',
      task: '清洗简单的果蔬',
      description: '给水果宝宝洗个澡！',
      rarity: 'R',
      xp: 25,
      gold: 15,
      category: 'kitchen'
    },
    {
      id: 'L12',
      name: '小火苗厨师',
      emoji: '🥚',
      task: '打鸡蛋/参与简单烘焙',
      description: '在爸爸/妈妈帮助下打鸡蛋！',
      rarity: 'R',
      xp: 25,
      gold: 15,
      category: 'kitchen'
    }
  ],

  // 7-12岁 正式冒险家
  standard: [
    {
      id: 'S01',
      name: '智慧守护者',
      emoji: '📚',
      task: '自主整理书包',
      description: '确保明天冒险的装备齐全！',
      rarity: 'N',
      xp: 10,
      gold: 5,
      category: 'study'
    },
    {
      id: 'S02',
      name: '垃圾分类官',
      emoji: '🗑️',
      task: '垃圾分类+倒垃圾',
      description: '将废弃物送入正确的传送门！',
      rarity: 'N',
      xp: 10,
      gold: 5,
      category: 'trash'
    },
    {
      id: 'S03',
      name: '房间守护者',
      emoji: '🏠',
      task: '定期打扫个人房间',
      description: '让房间恢复到整洁状态！',
      rarity: 'R',
      xp: 25,
      gold: 15,
      category: 'clean'
    },
    {
      id: 'S04',
      name: '地面净化师',
      emoji: '🧹',
      task: '独立扫地拖地',
      description: '消灭地面的灰尘怪物！',
      rarity: 'R',
      xp: 25,
      gold: 15,
      category: 'clean'
    },
    {
      id: 'S05',
      name: '碗碟骑士',
      emoji: '🍽️',
      task: '饭后洗碗筷',
      description: '洗净每一件餐具！',
      rarity: 'R',
      xp: 25,
      gold: 15,
      category: 'kitchen'
    },
    {
      id: 'S06',
      name: '洗衣法师',
      emoji: '🧺',
      task: '学习使用洗衣机',
      description: '操控魔法机器洗净衣物！',
      rarity: 'R',
      xp: 25,
      gold: 15,
      category: 'clothes'
    },
    {
      id: 'S07',
      name: '火焰厨师',
      emoji: '🍚',
      task: '淘米/煮面条/做简单早餐',
      description: '施展食物魔法！',
      rarity: 'R',
      xp: 25,
      gold: 15,
      category: 'kitchen'
    },
    {
      id: 'S08',
      name: '食材整理师',
      emoji: '🥦',
      task: '择菜/剥虾',
      description: '准备烹饪的魔法原料！',
      rarity: 'R',
      xp: 25,
      gold: 15,
      category: 'kitchen'
    },
    {
      id: 'S09',
      name: '手洗战士',
      emoji: '🧺',
      task: '手洗简单衣物',
      description: '用手的力量洗净衣物！',
      rarity: 'R',
      xp: 25,
      gold: 15,
      category: 'clothes'
    },
    {
      id: 'S10',
      name: '电器操控者',
      emoji: '🔌',
      task: '使用吸尘器/电饭煲',
      description: '掌握现代魔法器械！',
      rarity: 'R',
      xp: 25,
      gold: 15,
      category: 'tool'
    },
    {
      id: 'S11',
      name: '衣柜守卫者',
      emoji: '👔',
      task: '整理衣柜',
      description: '让衣柜变成有序的宝库！',
      rarity: 'R',
      xp: 25,
      gold: 15,
      category: 'clothes'
    },
    {
      id: 'S12',
      name: '过期清道夫',
      emoji: '🌸',
      task: '清理过期物品',
      description: '识别并处理过期的物品！',
      rarity: 'R',
      xp: 25,
      gold: 15,
      category: 'clean'
    },
    {
      id: 'S13',
      name: '床铺大师',
      emoji: '🛌',
      task: '更换床单被罩',
      description: '完成床铺的净化仪式！',
      rarity: 'SR',
      xp: 50,
      gold: 30,
      category: 'bed'
    }
  ],

  // 9-12岁进阶 森林领袖
  leader: [
    {
      id: 'L14',
      name: '财务官',
      emoji: '💰',
      task: '安排部分家庭财政（如购书预算）',
      description: '管理部落的金币，做出明智的决策！',
      rarity: 'SR',
      xp: 50,
      gold: 30,
      category: 'finance'
    },
    {
      id: 'L15',
      name: '探险规划师',
      emoji: '🗺️',
      task: '拟定家庭出游计划',
      description: '规划部落的探险路线！',
      rarity: 'SR',
      xp: 50,
      gold: 30,
      category: 'plan'
    },
    {
      id: 'L16',
      name: '活动策划师',
      emoji: '📋',
      task: '组织家庭活动',
      description: '策划让所有人快乐的冒险活动！',
      rarity: 'SR',
      xp: 50,
      gold: 30,
      category: 'plan'
    },
    {
      id: 'L17',
      name: '部落记录员',
      emoji: '📝',
      task: '记录家庭开支/购物清单',
      description: '用魔法卷轴记录部落的一切！',
      rarity: 'R',
      xp: 25,
      gold: 15,
      category: 'record'
    },
    {
      id: 'L18',
      name: '采购主管',
      emoji: '🛒',
      task: '帮忙列购物清单并采购',
      description: '管理部落的物资补给！',
      rarity: 'SR',
      xp: 50,
      gold: 30,
      category: 'finance'
    },
    {
      id: 'L19',
      name: '知识探索者',
      emoji: '🌍',
      task: '学习新技能并分享',
      description: '学习新的魔法并教给部落成员！',
      rarity: 'R',
      xp: 25,
      gold: 15,
      category: 'study'
    }
  ]
};

// 稀有度配置
const rarityConfig = {
  N: { name: '普通', color: '#97C459', bg: '#EAF3DE', border: '#639922' },
  R: { name: '稀有', color: '#378ADD', bg: '#E6F1FB', border: '#185FA5' },
  SR: { name: '超级稀有', color: '#BA7517', bg: '#FAEEDA', border: '#854F0B' }
};

// 等级配置
const levelConfig = [
  { level: 1, title: '见习冒险者', requiredXp: 0, cumulativeXp: 0 },
  { level: 2, title: '初级助手', requiredXp: 50, cumulativeXp: 50 },
  { level: 3, title: '中级助手', requiredXp: 100, cumulativeXp: 150 },
  { level: 4, title: '高级助手', requiredXp: 150, cumulativeXp: 300 },
  { level: 5, title: '森林骑士', requiredXp: 200, cumulativeXp: 500 },
  { level: 6, title: '精英骑士', requiredXp: 300, cumulativeXp: 800 },
  { level: 7, title: '森林领主', requiredXp: 400, cumulativeXp: 1200 },
  { level: 8, title: '传奇领主', requiredXp: 500, cumulativeXp: 1700 },
  { level: 9, title: '大魔法师', requiredXp: 700, cumulativeXp: 2400 },
  { level: 10, title: '传说英雄', requiredXp: 1000, cumulativeXp: 3400 }
];

// 成就配置
const achievementConfig = [
  { id: 'collect_N', name: '初级收集家', desc: '集齐所有N卡', type: 'collect', condition: 'all_N', reward: 50 },
  { id: 'collect_R', name: '中级收集家', desc: '集齐所有R卡', type: 'collect', condition: 'all_R', reward: 100 },
  { id: 'collect_SR', name: '终极收集家', desc: '集齐所有SR卡', type: 'collect', condition: 'all_SR', reward: 200 },
  { id: 'collect_all', name: '全图鉴收集', desc: '集齐全部角色卡', type: 'collect', condition: 'all', reward: 500 },
  { id: 'finish_50', name: '勤劳小蜜蜂', desc: '完成50个任务', type: 'count', condition: 50, reward: 30 },
  { id: 'finish_100', name: '家务小能手', desc: '完成100个任务', type: 'count', condition: 100, reward: 50 },
  { id: 'finish_200', name: '家务大师', desc: '完成200个任务', type: 'count', condition: 200, reward: 100 },
  { id: 'finish_500', name: '传奇冒险家', desc: '完成500个任务', type: 'count', condition: 500, reward: 200 },
  { id: 'nature', name: '自然之友', desc: '完成所有植物/户外任务', type: 'category', condition: 'nature', reward: 30 },
  { id: 'clean', name: '整洁卫士', desc: '完成所有清洁整理任务', type: 'category', condition: 'clean', reward: 30 },
  { id: 'kitchen', name: '厨房之星', desc: '完成所有厨房相关任务', type: 'category', condition: 'kitchen', reward: 30 },
  { id: 'clothes', name: '自理达人', desc: '完成所有衣物整理任务', type: 'category', condition: 'clothes', reward: 30 }
];

module.exports = {
  charSets,
  rarityConfig,
  levelConfig,
  achievementConfig
};
