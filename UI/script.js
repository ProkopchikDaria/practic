window.fun = (function (parametr) {
    var photoPosts =
        [
            {
                id: '1',
                description: 'Милаха!',
                createdAt: new Date('2018-02-27T11:45:00'),
                author: 'Дарья',
                photoLink: 'http://bipbap.ru/wp-content/uploads/2017/09/81736420_4601429_milii_kot_2012.jpg',
                likes: ['Светочка'],
                hashTags: ['котята', 'милахи']
            },
            {
                id: '2',
                description: 'Спаааать',
                createdAt: new Date('2018-02-26T12:00:03'),
                author: 'Светочка',
                photoLink: 'https://vesti-ukr.com/img/article/2342/8_main.jpg',
                likes: ['Светочка', 'Дарья'],
                hashTags: ['sleep', 'кот']
            },
            {
                id: '3',
                description: 'Голубоглазая красавица',
                createdAt: new Date('2018-02-26T11:00:11'),
                author: 'Дарья',
                photoLink: 'http://gloss.ua/file/t/17/11/28/bqeye_640x360.jpg',
                likes: ['Светочка', 'Дарья', 'Ленка'],
                hashTags: ['красавица', 'кошка']
            },
            {
                id: '4',
                description: 'Белая красавица!',
                createdAt: new Date('2018-02-26T10:00:25'),
                author: 'Ленка',
                photoLink: 'https://i05.fotocdn.net/s16/239/gallery_m/294/88548846.jpg',
                likes: ['Светочка', 'Дарья', 'Женя', 'Ленка'],
                hashTags: ['cat', 'whitecat']
            },
            {
                id: '5',
                description: 'В галстуке!)',
                createdAt: new Date('2018-02-25T18:00:56'),
                author: 'Дарья',
                photoLink: 'http://www.bugaga.ru/uploads/posts/2014-06/1401723206_kotyatki-7.jpg',
                likes: ['Светочка', 'Женя', 'Ленка'],
                hashTags: ['галстук', 'серьезныйкот']
            },
            {
                id: '6',
                description: 'Какие глазки)))',
                createdAt: new Date('2018-02-25T17:00:57'),
                author: 'Дарья',
                photoLink: 'http://mtdata.ru/u7/photoB210/20929454113-0/original.jpeg',
                likes: ['Светочка', 'Женя', 'Ленка', 'Дарья'],
                hashTags: ['глазки', 'котик']
            },
            {
                id: '7',
                description: 'Главное улыбаться)',
                createdAt: new Date('2018-02-24T18:00:04'),
                author: 'Женя',
                photoLink: 'http://zooblog.ru/uploads/posts/2016-08/1472585036_screenshot_3.png',
                likes: ['Ленка', 'Дарья'],
                hashTags: ['улыбка', 'кот', 'позитив']
            },
            {
                id: '8',
                description: 'Водичка...',
                createdAt: new Date('2018-02-22T18:00:04'),
                author: 'Дарья',
                photoLink: 'http://catspaw.ru/wp-content/uploads/2017/01/Smeshnyie_kotyi_Michelle_Kelley.jpg',
                likes: ['Ленка', 'Дарья', 'Светка'],
                hashTags: ['вода', 'котики']
            },
            {
                id: '9',
                description: 'Очень вкусно)',
                createdAt: new Date('2018-02-22T15:22:04'),
                author: 'Дарья',
                photoLink: 'http://kakzachem.ru/wp-content/uploads/2017/12/5-17.jpeg',
                likes: ['Ленка', 'Дарья', 'Светка', 'Катюха'],
                hashTags: ['елка', 'котик']
            },
            {
                id: '10',
                description: 'Привет))',
                createdAt: new Date('2018-02-21T15:20:04'),
                author: 'Катюха',
                photoLink: 'http://murkote.com/wp-content/uploads/2016/05/13-smeshnoj-kot.jpg',
                likes: ['Ленка', 'Дарья'],
                hashTags: ['привет', 'кот']
            },
            {
                id: '11',
                description: 'Ошарашен)',
                createdAt: new Date('2018-02-20T15:20:04'),
                author: 'Дарья',
                photoLink: 'http://www.catgallery.ru/kototeka/wp-content/uploads/2015/04/Foto-podborka-kosoglazyih-kotikov-3.jpg',
                likes: ['Ленка', 'Дарья', 'Кира'],
                hashTags: ['hello', 'кот']
            },
            {
                id: '12',
                description: 'Новая шапка)',
                createdAt: new Date('2018-02-20T13:20:04'),
                author: 'Лида',
                photoLink: 'https://titcat.ru/wa-data/public/blog/plugins/logopost/images/b5WN35EdpA.jpg',
                likes: ['Ленка'],
                hashTags: ['кот']
            },
            {
                id: '13',
                description: 'Молчание-золото)',
                createdAt: new Date('2018-02-20T12:20:04'),
                author: 'Ритуля',
                photoLink: 'https://i.ytimg.com/vi/dvSnEeMlbb0/maxresdefault.jpg',
                likes: ['Ленка', 'Дарья', 'Крис'],
                hashTags: ['kitty', 'котики']
            },
            {
                id: '14',
                description: 'Осень и кот',
                createdAt: new Date('2018-02-19T15:20:04'),
                author: 'Дарья',
                photoLink: 'https://i07.fotocdn.net/s27/80/public_pin_l/51/2667852367.jpg',
                likes: ['Ленка', 'Дарья'],
                hashTags: ['hellokitty', 'кот']
            },
            {
                id: '15',
                description: 'Кошка-балерина',
                createdAt: new Date('2018-02-19T10:20:04'),
                author: 'Кристина',
                photoLink: 'http://kremen.today/wp-content/uploads/2016/02/xkotenok.jpg.pagespeed.ic.SZlAK7a8ox.jpg',
                likes: ['Дарья'],
                hashTags: ['кот']
            },
            {
                id: '16',
                description: 'Улыбочку)',
                createdAt: new Date('2018-02-18T15:20:04'),
                author: 'Маша',
                photoLink: 'https://petpop.cc/upload/post/2017/12/11/1715938/ulybayushyjsya-kot-29-23.jpg',
                likes: ['Ленка', 'Дарья', 'Рита'],
                hashTags: ['котэ', 'кот', 'котяра']
            },
            {
                id: '17',
                description: 'С праздником)',
                createdAt: new Date('2018-02-14T15:20:04'),
                author: 'Дарья',
                photoLink: 'http://kotikinyashki.ru/media/uploads/11034259_1085854494774846_140668731985910005_n.jpg',
                likes: ['Ленка', 'Дарья', 'Женя', 'Света'],
                hashTags: ['котипраздник', '14022018']
            },
            {
                id: '18',
                description: 'Рисунок котика',
                createdAt: new Date('2018-02-13T15:20:04'),
                author: 'Светка',
                photoLink: 'http://ic.pics.livejournal.com/anastgal/2719565/2553481/2553481_original.jpg',
                likes: ['Дарья'],
                hashTags: ['котики', 'кот']
            },
            {
                id: '19',
                description: 'Кот и вода',
                createdAt: new Date('2018-02-12T15:20:04'),
                author: 'Дарья',
                photoLink: 'http://kaifolog.ru/uploads/posts/2014-03/thumbs/1396231060_020.jpg',
                likes: ['Ленка'],
                hashTags: ['кошара', 'кот']
            },
            {
                id: '20',
                description: 'В чашке)',
                createdAt: new Date('2018-02-11T15:20:04'),
                author: 'Крис',
                photoLink: 'http://expert.coffee/userfiles/podborki/Kofe_Kotiki_part-2/Kofe_Kotiki_part-2_1.jpg',
                likes: ['Женя', 'Крис'],
                hashTags: ['котя', 'кот']
            },
        ];

    function CompareDates(a, b) {
        return b.createdAt - a.createdAt;
    }

    return {
        getPhotoPosts: function (skip, top, filterConfig) {
            var res = photoPosts;
            if (typeof skip === "number" && typeof top === "number" && !filterConfig) {
                photoPosts.sort(CompareDates);
                res = photoPosts.slice(skip, skip + top);
                return res;
            }

            if (typeof skip === "number" && typeof top === "number" && filterConfig) {

                if (filterConfig.author) {
                    res = res.filter(function (value) {
                        if (value.author === filterConfig.author){
                        return value;}
                    })

                }
                if (filterConfig.createdFrom && filterConfig.createdFrom instanceof Date &&
                    filterConfig.createdTo && filterConfig.createdTo instanceof Date) {
                    res = res.filter(function (value) {
                        return value.createdAt >= filterConfig.createdFrom;
                    });
                    res = res.filter(function (value) {
                        return value.createdAt <= filterConfig.createdTo;

                    })
                }

                if (filterConfig.hashTags) {
                    res = res.filter(function (value) {
                        for (var j = 0; j < value.hashTags.length; j++) {
                            {
                                if (value.hashTags[j] === filterConfig.hashTags[0]) {
                                    return value;
                                }
                            }
                        }
                    })
                }
                result = res.slice(skip, skip + top);
                result.sort(CompareDates);
                return result;
            }
            else {
                return null;
            }
        },

        getPhotoPost: function (id) {
            if (typeof id === 'string') {
                for (var i = 0; i < photoPosts.length; i++) {
                    if (photoPosts[i].id === id) {
                        return photoPosts[i];
                    }
                }
            }
            if (typeof id !== 'string') {
                return null;
            }
        },

        validatePhotoPost: function (photoPost) {
            if (typeof(photoPost.id) === 'string' && typeof(photoPost.author) === 'string'
                && photoPost.author!=='' && typeof(photoPost.description) === 'string'
                && photoPost.description.length<200&&photoPost.description!==''
                && typeof(photoPost.photoLink) === 'string'&& photoPost.photoLink !== ''
                && photoPost.createdAt instanceof Date && photoPost.createdAt <= new Date()
                && photoPost.likes instanceof Array && photoPost.hashTags instanceof Array
                && photoPost.hashTags.every(function(element){return typeof element === 'string'})
                && photoPost.likes.every(function(element){return typeof element === 'string'}) ) {
                return true;
            }
            else {
                return false;
            }
        },

        addPhotoPost: function (photoPost) {
            if (typeof photoPost === "object") {
                if (this.validatePhotoPost(photoPost) === true) {
                    photoPosts.push(photoPost);
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        },

        editPhotoPost: function (id, photoPostEdit) {
            if (typeof id === "string" && typeof photoPostEdit == "object") {
                for (var i = 0; i < photoPosts.length; i++) {
                    if (photoPosts[i].id === id) {
                        if (photoPostEdit.description) {
                            if (typeof photoPostEdit.description === "string") {
                                photoPosts[i].description = photoPostEdit.description;
                            }
                        }
                        if (photoPostEdit.photoLink) {
                            if (typeof photoPostEdit.photoLink === "string") {
                                photoPosts[i].photoLink = photoPostEdit.photoLink;
                            }
                        }
                        if (photoPostEdit.hashTags) {
                            if (photoPostEdit.hashTags instanceof Array) {
                                photoPosts[i].hashTags = photoPostEdit.hashTags;
                            }
                        }
                        return true;
                    }
                }
            }
            else {
                return false;
            }
        },
        removePhotoPost: function (id) {
            if (typeof id === 'string') {
                for (var i = 0; i < photoPosts.length; i++) {
                    if (photoPosts[i].id === id) {
                        var index = i;
                    }
                }
                photoPosts.splice(index, 1);
                return true;
            }
            else {
                return false;
            }
        },
    };
})();

var filterByDate =
    {
        createdFrom: new Date('2018-02-18T15:20:04'),
        createdTo: new Date('2018-02-20T13:20:04')
    };
var filterByHashTag =
    {
        hashTags: ["кот"]
    };

var filterByAuthor =
    {
        author: 'Дарья'
    };
var filterByAuthorTag =
    {
        author: 'Дарья',
        hashTags: ['кот']
    };
var filterByAuthorDate =
    {
        author: 'Дарья',
        createdFrom: new Date('2018-02-18T15:20:04'),
        createdTo: new Date('2018-02-20T13:20:04')
    };
var photoPostEdit2 = {
    description: 'Подмигивание'
};
var photoPostEdit1 =
    {
        photoLink: 'http://bipbap.ru/wp-content/uploads/2017/06/0fb1612ab996t.jpg',
        description: 'Подмигивание',
        hashTags: ['hello', 'changecat']
    };
var photoPostValidate1 =
    {
        id: '20',
        description: 'В чашке)',
        createdAt: new Date('2018-02-11T15:20:04'),
        author: 'Крис',
        photoLink: 'http://expert.coffee/userfiles/podborki/Kofe_Kotiki_part-2/Kofe_Kotiki_part-2_1.jpg',
        likes: ['Женя', 'Крис'],
        hashTags: ['котя', 'кот']
    };
var photoPostValidate2 =
    {
        id: 20,
        description: 'В чашке)',
        createdAt: new Date('2018-02-11T15:20:04'),
        author: 'Крис',
        photoLink: 'http://expert.coffee/userfiles/podborki/Kofe_Kotiki_part-2/Kofe_Kotiki_part-2_1.jpg',
        likes: ['Женя', 'Крис'],
        hashTags: ['котя', 'кот']
    };
var photoPostAdd1 =
    {
        id: '21',
        author: 'Рита',
        createdAt: new Date('2018-02-12T12:20:04'),
        photoLink: 'http://bipbap.ru/wp-content/uploads/2017/06/0fb1612ab996t.jpg',
        description: 'Подмигивание',
        likes: [],
        hashTags: ['подмигивание', 'кот']
    }
var photoPostAdd2 =
    {
        id: '22',
        author: 'Рита',
        createdAt: '05102018',
        photoLink: 'http://bipbap.ru/wp-content/uploads/2017/06/0fb1612ab996t.jpg',
        description: 'Подмигивание',
        likes: [],
        hashTags: ['привет', 'кот']
    }
console.log('получить массив фото постов с сортировкой')
console.log('10 фото постов:');
console.log(fun.getPhotoPosts(0, 10));
console.log("Получить массив фото постов top=null,skip=null ");
console.log(fun.getPhotoPosts(null, null));
console.log("По автору 'Дарья'");
console.log(fun.getPhotoPosts(0, 10, filterByAuthor));
console.log("По хештегу 'кот' ");
console.log(fun.getPhotoPosts(0, 20, filterByHashTag));
console.log("По дате  ");
console.log(fun.getPhotoPosts(0, 20, filterByDate));
console.log("По автору 'Дарья' и хештегу 'кот'");
console.log(fun.getPhotoPosts(0, 20, filterByAuthorTag));
console.log("По автору 'Дарья' и дате ");
console.log(fun.getPhotoPosts(0, 20, filterByAuthorDate));

console.log("проверить объект photoPosts на валидность:");
console.log(fun.validatePhotoPost(photoPostValidate1));
console.log("проверить объект photoPosts на валидность:");
console.log(fun.validatePhotoPost(photoPostValidate2));

console.log("изменить фото пост в массиве photoPosts по id='18'");
console.log(fun.editPhotoPost('18', photoPostEdit1));
console.log(fun.getPhotoPosts(0, 20));
console.log("изменить фото пост в массиве photoPosts по id=18");
console.log(fun.editPhotoPost(18, photoPostEdit1));
console.log("изменить фото пост в массиве photoPosts по id='15'");
console.log(fun.editPhotoPost('15', photoPostEdit2));
console.log(fun.getPhotoPosts(0, 20));

console.log("Получить пост из массива photoPosts с  id='3'");
console.log(fun.getPhotoPost('3'));
console.log("Получить пост из массива photoPosts с  id=2");
console.log(fun.getPhotoPost(2));

console.log("Добавить новый photoPost в массив photoPosts:");
console.log(fun.addPhotoPost(photoPostAdd1));
console.log(fun.getPhotoPosts(0, 21));
console.log("Добавить новый photoPost в массив photoPosts:");
console.log(fun.addPhotoPost(photoPostAdd2));

console.log("Удалить фото пост по id='16' из массива photoPosts");
console.log(fun.removePhotoPost('16'));
console.log(fun.getPhotoPosts(0, 20));
console.log("Удалить фото пост по id=2 из массива photoPosts");
console.log(fun.removePhotoPost(2));
