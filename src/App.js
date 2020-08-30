import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Question from './Components/Question/Question';
import AnswerOptions from './Components/AnswerOptions/AnswerOptions';
import Description from './Components/Description/Description';

export default class App extends Component {

  state = {
    score: 0,
    level: 1,
    levelName: ['Перелётные', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'],
    LevelPoints: 5,
    isLevelPassed: false,
    rightAnswer: 0,
    answerArray: [],
    correctAnswer: {
      birdName: 'Ворон',
      birdLatinName: 'Corvus corax',
      description: 'Ворон– крупная птица.Длина тела достигает 70 сантиметров, размах крыльев– до полутора метров.Вороны населяют окрестности Тауэра.В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
      birdPhoto: '/img/Ворон.jpg',
      birdSound: '/mp3/Ворон.mp3',
    },
    activBird: {},
    birdSpecies: [{
        birds: [{
      birdName: 'Ворон',
      birdLatinName: 'Corvus corax',
      description: 'Ворон– крупная птица.Длина тела достигает 70 сантиметров, размах крыльев– до полутора метров.Вороны населяют окрестности Тауэра.В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
      birdPhoto: '/img/Ворон.jpg',
      birdSound: '/mp3/Ворон.mp3',
    },
     {
          birdName: 'Журавль',
          birdLatinName: 'Grus grus',
          description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
          birdPhoto: '/img/журавль.jpg',
          birdSound: '/mp3/журавль.mp3',
        }, {
          birdName: 'Ласточка',
          birdLatinName: 'Delichon urbicum',
          description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
          birdPhoto: '/img/Ласточка.jpg',
          birdSound: '/mp3/Ласточка.mp3',
        }, {
          birdName: 'Козодой',
          birdLatinName: 'Caprimulgus europaeus',
          description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
          birdPhoto: '/img/Козодой.jpg',
          birdSound: '/mp3/Козодой.mp3',
        }, {
          birdName: 'Кукушка',
          birdLatinName: 'Cuculus canorus',
          description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
          birdPhoto: '/img/Кукушка.jpg',
          birdSound: '/mp3/Кукушка.mp3',
        }, {
          birdName: 'Синица',
          birdLatinName: 'Parus major',
          description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
          birdPhoto: '/img/Синица.jpg',
          birdSound: '/mp3/Синица.mp3',
        }]
      },
      {
        bandName: 'passerines',
        birds: [{
            birdName: 'Воробей',
            birdLatinName: 'Passer domesticus',
            description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
            birdPhoto: '/img/Воробей.jpg',
            birdSound: '/mp3/Воробей.mp3',
          },
          {
            birdName: 'Грач',
            birdLatinName: 'Corvus frugilegus',
            description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
            birdPhoto: '/img/грач.jpg',
            birdSound: '/mp3/грач.mp3',
          },
          {
            birdName: 'Галка',
            birdLatinName: 'Coloeus monedula',
            description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
            birdPhoto: '/img/Галка.jpg',
            birdSound: '/mp3/Галка.mp3',
          },
          {
            birdName: 'Певчий дрозд',
            birdLatinName: 'Turdus philomelos',
            description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
            birdPhoto: '/img/Певчий дрозд.jpg',
            birdSound: '/mp3/Певчий дрозд.mp3',
          },
          {
            birdName: 'Сорока',
            birdLatinName: 'Pica pica',
            description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
            birdPhoto: '/img/Сорока.jpg',
            birdSound: '/mp3/Сорока.mp3',
          },
          {
            birdName: 'Сойка',
            birdLatinName: 'Garrulus glandarius',
            description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
            birdPhoto: '/img/Сойка.jpg',
            birdSound: '/mp3/Сойка.mp3',
          },
        ]
      },
      {
        bandName: 'forest',
        birds: [{
          birdName: 'Зяблик',
          birdLatinName: 'Fringilla coelebs',
          description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
          birdPhoto: '/img/Зяблик.jpg',
          birdSound: '/mp3/Зяблик.mp3',
        }, {
          birdName: 'Клёст',
          birdLatinName: 'Loxia curvirostra',
          description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
          birdPhoto: '/img/Клёст.jpg',
          birdSound: '/mp3/Клёст.mp3',
        }, {
          birdName: 'Горлица',
          birdLatinName: 'Streptopelia turtur',
          description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
          birdPhoto: '/img/Горлица.jpg',
          birdSound: '/mp3/Горлица.mp3',
        }, {
          birdName: 'Дятел',
          birdLatinName: 'Dendrocopos major',
          description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
          birdPhoto: '/img/Дятел.jpg',
          birdSound: '/mp3/Дятел.mp3',
        }, {
          birdName: 'Удод',
          birdLatinName: 'Upupa epops',
          description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
          birdPhoto: '/img/Удод.jpg',
          birdSound: '/mp3/Удод.mp3',
        }, {
          birdName: 'Стриж',
          birdLatinName: 'Apus apus',
          description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
          birdPhoto: '/img/Стриж.jpg',
          birdSound: '/mp3/Стриж.mp3',
        }]
      },
      {
        bandName: 'singers',
        birds: [{
          birdName: 'Жаворонок',
          birdLatinName: 'Alauda arvensis',
          description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
          birdPhoto: '/img/Жаворонок.jpg',
          birdSound: '/mp3/Жаворонок.mp3',
        }, {
          birdName: 'Соловей',
          birdLatinName: 'Luscinia luscinia',
          description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
          birdPhoto: '/img/Соловей.jpg',
          birdSound: '/mp3/Соловей.mp3',
        }, {
          birdName: 'Скворец',
          birdLatinName: 'Sturnus vulgaris',
          description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
          birdPhoto: '/img/Скворец.jpg',
          birdSound: '/mp3/Скворец.mp3',
        }, {
          birdName: 'Иволга',
          birdLatinName: 'Oriolus oriolus',
          description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
          birdPhoto: '/img/Иволга.jpg',
          birdSound: '/mp3/Иволга.mp3',
        }, {
          birdName: 'Свиристель',
          birdLatinName: 'Bombycilla garrulus',
          description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
          birdPhoto: '/img/Свиристель.jpg',
          birdSound: '/mp3/Свиристель.mp3',
        }, {
          birdName: 'Щегол',
          birdLatinName: 'Carduelis carduelis',
          description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
          birdPhoto: '/img/Щегол.jpg',
          birdSound: '/mp3/Щегол.mp3',
        }]
      },
      {
        bandName: 'predatory',
        birds: [{
          birdName: 'Орёл',
          birdLatinName: 'Aquila nipalensis',
          description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
          birdPhoto: '/img/Орёл.jpg',
          birdSound: '/mp3/Орёл.mp3',
        }, {
          birdName: 'Коршун',
          birdLatinName: 'Milvus migrans',
          description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
          birdPhoto: '/img/Коршун.jpg',
          birdSound: '/mp3/Коршун.mp3',
        }, {
          birdName: 'Лунь',
          birdLatinName: 'Circus cyaneus',
          description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
          birdPhoto: '/img/Лунь.jpg',
          birdSound: '/mp3/Лунь.mp3',
        }, {
          birdName: 'Сокол',
          birdLatinName: 'Falco peregrinus',
          description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
          birdPhoto: '/img/Сокол.jpg',
          birdSound: '/mp3/Сокол.mp3',
        }, {
          birdName: 'Ястреб',
          birdLatinName: 'Accipiter gentilis',
          description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
          birdPhoto: '/img/Ястреб.jpg',
          birdSound: '/mp3/Ястреб.mp3',
        }, {
          birdName: 'Филин',
          birdLatinName: 'Bubo bubo',
          description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
          birdPhoto: '/img/Филин.jpg',
          birdSound: '/mp3/Филин.mp3',
        }]
      },
      {
        bandName: 'marine',
        birds: [{
          birdName: 'Альбатрос',
          birdLatinName: 'Diomedea exulans',
          description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
          birdPhoto: '/img/Альбатрос.jpg',
          birdSound: '/mp3/Альбатрос.mp3',
        }, {
          birdName: 'Олуша',
          birdLatinName: 'Sula nebouxii',
          description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
          birdPhoto: '/img/Олуша.jpg',
          birdSound: '/mp3/Олуша.mp3',
        }, {
          birdName: 'Буревестник',
          birdLatinName: 'Puffinus griseus',
          description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
          birdPhoto: '/img/Буревестник.jpg',
          birdSound: '/mp3/Буревестник.mp3',
        }, {
          birdName: 'Пеликан',
          birdLatinName: 'Pelecanus',
          description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
          birdPhoto: '/img/Пеликан.jpg',
          birdSound: '/mp3/Пеликан.mp3',
        }, {
          birdName: 'Пингвин',
          birdLatinName: 'Aptenodytes forsteri',
          description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
          birdPhoto: '/img/Пингвин.jpg',
          birdSound: '/mp3/Пингвин.mp3',
        }, {
          birdName: 'Чайка',
          birdLatinName: 'Larus argentatus',
          description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
          birdPhoto: '/img/Чайка.jpg',
          birdSound: '/mp3/Чайка.mp3',
        }]
      },
      {
        bandName: 'marine',
        birds: [{
          birdName: 'Альбатрос',
          birdLatinName: 'Diomedea exulans',
          description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
          birdPhoto: '/img/Альбатрос.jpg',
          birdSound: '/mp3/Альбатрос.mp3',
        }, {
          birdName: 'Олуша',
          birdLatinName: 'Sula nebouxii',
          description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
          birdPhoto: '/img/Олуша.jpg',
          birdSound: '/mp3/Олуша.mp3',
        }, {
          birdName: 'Буревестник',
          birdLatinName: 'Puffinus griseus',
          description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
          birdPhoto: '/img/Буревестник.jpg',
          birdSound: '/mp3/Буревестник.mp3',
        }, {
          birdName: 'Пеликан',
          birdLatinName: 'Pelecanus',
          description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
          birdPhoto: '/img/Пеликан.jpg',
          birdSound: '/mp3/Пеликан.mp3',
        }, {
          birdName: 'Пингвин',
          birdLatinName: 'Aptenodytes forsteri',
          description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
          birdPhoto: '/img/Пингвин.jpg',
          birdSound: '/mp3/Пингвин.mp3',
        }, {
          birdName: 'Чайка',
          birdLatinName: 'Larus argentatus',
          description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
          birdPhoto: '/img/Чайка.jpg',
          birdSound: '/mp3/Чайка.mp3',
        }]
      },
    ],

  }

  createNewGame = () => {
    this.setState(() => {return {
          score: 0,
          level: 1,
      LevelPoints: 5,
            isLevelPassed: false,
            rightAnswer: 0,
            answerArray: [],
    correctAnswer: {
      birdName: 'Ворон',
      birdLatinName: 'Corvus corax',
      description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
      birdPhoto: '../public/img/raven.jpg',
      birdSound: '',
    },

    }})
  }

  goToNextLevel = () => {

    if (this.state.isLevelPassed) {
      if (this.state.level < 6) {
      this.setState((state) => {return { level: state.level ++,
      isLevelPassed: false,
      LevelPoints: 5}});

      this.createAnswerArray();

      this.creteRightAnswer();

      } else if (this.state.score === 30){
        this.setState((state) => {return { level: state.level ++}});
        console.log('nice job')
      } else {
        this.setState((state) => {return { level: state.level ++}});
      }} else {
      console.log('lvl not passed')
    }
  }

  RandomNumber = () => {
    return Math.floor(Math.random() * 6)
  }

  createAnswerArray = () => {

    let answerArray = this.state.birdSpecies[this.state.level - 1].birds.map((el) => {
      return <pre className = "answerGray" key = {el.birdName} onClick = {this.coloredAnswer}>   &#8226;   {el.birdName}</pre>
    })
    return answerArray;
  }

  stateAnswerArray = () => {
    this.setState((state) => {
      return {
        answerArray: state.birdSpecies[state.level - 1].birds
      }
    })
  }

  creteRightAnswer = () => {
    this.setState((state) => {
      return {
        correctAnswer: state.birdSpecies[state.level - 1].birds[this.RandomNumber()]
      }
    })
  console.log(this.state.correctAnswer.birdName)
  } 

  coloredAnswer = (el) => {
    this.stateAnswerArray(this.answerArray);

    let bird = this.state.answerArray.filter((item) => el.target.textContent.includes(item.birdName))

    this.setState((state) => {return {activBird: bird[0]}})

    if ( el.target.textContent.includes(this.state.correctAnswer.birdName)&& this.state.isLevelPassed === false) {

      el.target.className = 'answerGreen';

      this.setState((state) => { 
        return {score: state.score + state.LevelPoints}
      });

      this.setState((state) => {return {
        isLevelPassed: true
      }})

    } else if (this.state.isLevelPassed === false) {
      el.target.className = 'answerRed';

      this.setState( (state) => {
        return {LevelPoints: state.LevelPoints--}
      })
    }
  }

  render() {

    let answerArray = this.createAnswerArray();
    let buttonStyle = this.state.isLevelPassed ? "button__nextLevel active"
     : "button__nextLevel";

if(this.state.level > 6 && this.state.score < 30) {

  return ( <div className="App">
      <Header score = {this.state.score} levelName = {this.state.levelName} level = {this.state.level}/>
      <p className = "lastPage">Всё, братан, это конец<br></br> {this.state.score} из 30 возможных... Да ладно, не стоит из-за этого комплексовать </p>
      < button className = "button__nextLevel active" onClick = {this.createNewGame}> Сыграть заново </button>
    </div>)

} else if (this.state.level > 6 && this.state.score === 30) {

return ( <div className="App">
      <Header score = {this.state.score} levelName = {this.state.levelName} level = {this.state.level}/>
      < p className = "lastPage" > 30 из 30...серьёзно ? <br></br> Ну ты и зверюга! <br></br> Даш очки поносить ? </p>
    </div>)

} else {

  return (
    <div className="App">
      <Header score = {this.state.score} levelName = {this.state.levelName} level = {this.state.level} />
      <Question bird = {this.state.correctAnswer}
          isOpen = {this.state.isLevelPassed}/>
      < div className = "App__playingField" >
        < AnswerOptions answers = {answerArray}
        correctAnswer = {this.state.correctAnswer}/ >
        < Description 
          bird = {this.state.activBird}
        / >
      </div>
      
      < button className = {buttonStyle} onClick = {this.goToNextLevel}> Следующий уровень </button>
    </div>
    )
}

  }
}

